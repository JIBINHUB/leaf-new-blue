const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const { Resend } = require('resend');
const {
  buildCustomerConfirmation,
  buildStudioNotification,
  toPlainText
} = require('./email-templates');
const store = require('./_supabase');

const MAX_BODY_BYTES = 64 * 1024;
const allowedOrigins = new Set([
  'https://leafcreationism.in',
  'https://www.leafcreationism.in',
  'https://leafcreationism.online',
  'https://www.leafcreationism.online',
  'http://127.0.0.1:3000',
  'http://localhost:3000',
  'http://127.0.0.1:4174',
  'http://localhost:4174'
]);

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.end(JSON.stringify(payload));
}

function readRequestBody(request) {
  if (request.body && typeof request.body === 'object') {
    return Promise.resolve(request.body);
  }

  if (typeof request.body === 'string') {
    try {
      return Promise.resolve(JSON.parse(request.body));
    } catch {
      return Promise.resolve({});
    }
  }

  return new Promise((resolve, reject) => {
    let raw = '';
    let size = 0;

    request.on('data', (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(new Error('PAYLOAD_TOO_LARGE'));
        request.destroy();
        return;
      }
      raw += chunk;
    });
    request.on('end', () => {
      if (!raw) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(raw));
      } catch {
        resolve({});
      }
    });
    request.on('error', reject);
  });
}

function clean(value, fallback = '') {
  if (typeof value !== 'string') return fallback;
  return value.trim().slice(0, 12000);
}

function normalizePayload(payload) {
  return {
    formType: clean(payload.form_type, 'project-enquiry'),
    name: clean(payload.name, 'Not added'),
    email: clean(payload.email).toLowerCase(),
    phone: clean(payload.phone, 'Not added'),
    company: clean(payload.company, 'Not added'),
    requestedService: clean(payload.requested_service, 'Not selected'),
    projectBrief: clean(payload.project_brief, 'Not added'),
    selectedServices: clean(payload.selected_services, 'No services selected'),
    appointmentDetails: clean(payload.appointment_details, 'No appointment selected'),
    selectedReferences: clean(payload.selected_references, 'No references selected'),
    source: clean(payload.source, 'Leaf Creationism website')
  };
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function inlineAsset(filename, contentId, contentType) {
  const assetPath = path.join(process.cwd(), 'assets', 'email', filename);
  try {
    return {
      source: `cid:${contentId}`,
      attachment: {
        content: fs.readFileSync(assetPath),
        filename,
        contentType,
        contentId
      }
    };
  } catch {
    return { source: null, attachment: null };
  }
}

module.exports = async function handler(request, response) {
  const requestOrigin = request.headers.origin;

  if (allowedOrigins.has(requestOrigin)) {
    response.setHeader('Access-Control-Allow-Origin', requestOrigin);
    response.setHeader('Vary', 'Origin');
  }
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (request.method === 'OPTIONS') {
    response.statusCode = 204;
    response.end();
    return;
  }

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    sendJson(response, 405, { success: false, message: 'Method not allowed' });
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    sendJson(response, 500, { success: false, message: 'Email service is not configured' });
    return;
  }

  try {
    const rawPayload = await readRequestBody(request);

    if (rawPayload.website) {
      sendJson(response, 200, { success: true });
      return;
    }

    const payload = normalizePayload(rawPayload);
    if (!payload.name || payload.name === 'Not added' || !isValidEmail(payload.email)) {
      sendJson(response, 400, { success: false, message: 'Please add a valid name and email address' });
      return;
    }

    const requestId = crypto.randomUUID();
    const shortId = requestId.split('-')[0].toUpperCase();
    /* Save the lead before attempting delivery. If Resend is down, the studio
       still has the enquiry in the dashboard rather than losing it. */
    const enquiryRows = await store.insert('enquiries', [{
      form_type: payload.formType,
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      company: payload.company,
      requested_service: payload.requestedService,
      project_brief: payload.projectBrief,
      selected_services: payload.selectedServices,
      appointment_details: payload.appointmentDetails,
      selected_references: payload.selectedReferences,
      source: payload.source
    }]);
    const enquiryId = enquiryRows?.[0]?.id || null;

    /* A matching order gives the customer something to track. Linked to their
       account when the email matches one; otherwise it waits unattached and is
       still visible to the studio. */
    const userId = await store.findUserIdByEmail(payload.email);
    const orderRows = await store.insert('orders', [{
      reference: shortId,
      user_id: userId,
      contact_name: payload.name,
      contact_email: payload.email,
      contact_phone: payload.phone,
      company: payload.company,
      project_brief: payload.projectBrief,
      status: 'received'
    }]);
    const orderId = orderRows?.[0]?.id || null;

    if (orderId && Array.isArray(payload.selectedServices) && payload.selectedServices.length) {
      await store.insert('order_items', payload.selectedServices.map((service) => ({
        order_id: orderId,
        product_id: typeof service === 'string' ? service : service?.id || null,
        title: typeof service === 'string' ? service : service?.title || service?.name || 'Service'
      })));
    }

    const from = process.env.RESEND_FROM_EMAIL || 'Leaf Creationism <hello@leafcreationism.in>';
    const studioInbox = process.env.LEAF_INBOX_EMAIL || 'leafcreationism@gmail.com';
    const publicLogoUrl = process.env.LEAF_EMAIL_LOGO_URL || 'https://leafcreationism.in/assets/email/leaf-gradient-logo-email.png';
    const publicHeroUrl = process.env.LEAF_EMAIL_HERO_URL || 'https://leafcreationism.in/assets/email/leaf-email-hero.jpg';
    const resend = new Resend(process.env.RESEND_API_KEY);

    const inlineLogo = inlineAsset('leaf-gradient-logo-email.png', 'leaf-logo', 'image/png');
    const inlineHero = inlineAsset('leaf-email-hero.jpg', 'leaf-hero', 'image/jpeg');
    const inlineWorkNavo = inlineAsset('work-navo.jpg', 'work-navo', 'image/jpeg');
    const inlineWorkPodlight = inlineAsset('work-podlight.jpg', 'work-podlight', 'image/jpeg');
    const inlineWorkRobotic = inlineAsset('work-robotic.jpg', 'work-robotic', 'image/jpeg');
    const logoUrl = inlineLogo.source || publicLogoUrl;
    const heroImageUrl = inlineHero.source || publicHeroUrl;
    const workImages = [
      inlineWorkNavo.source || 'https://leafcreationism.in/assets/email/work-navo.jpg',
      inlineWorkPodlight.source || 'https://leafcreationism.in/assets/email/work-podlight.jpg',
      inlineWorkRobotic.source || 'https://leafcreationism.in/assets/email/work-robotic.jpg'
    ];
    const studioAttachments = [inlineLogo.attachment, inlineHero.attachment].filter(Boolean);
    const customerAttachments = [
      inlineLogo.attachment,
      inlineHero.attachment,
      inlineWorkNavo.attachment,
      inlineWorkPodlight.attachment,
      inlineWorkRobotic.attachment
    ].filter(Boolean);

    const studioHtml = buildStudioNotification({ payload, shortId, logoUrl, heroImageUrl });
    const customerHtml = buildCustomerConfirmation({ payload, shortId, logoUrl, heroImageUrl, workImages });
    const subjects = payload.formType === 'access-request'
      ? {
          studio: `New access request from ${payload.name}`,
          customer: `We received your Leaf Creationism request / ${shortId}`
        }
      : {
          studio: `New project enquiry from ${payload.name}`,
          customer: `Your Leaf Creationism project request / ${shortId}`
        };

    const studioResult = await resend.emails.send({
      from,
      to: [studioInbox],
      replyTo: payload.email,
      subject: subjects.studio,
      html: studioHtml,
      text: toPlainText(studioHtml),
      attachments: studioAttachments.length ? studioAttachments : undefined
    });

    if (studioResult.error) {
      console.error('Resend delivery failed', {
        requestId,
        studio: studioResult.error.message
      });
      if (enquiryId) {
        await store.update('enquiries', enquiryId, {
          email_sent: false,
          email_error: studioResult.error.message
        });
      }
      // The lead is saved, so report success to the visitor rather than asking
      // them to submit again. The dashboard flags it as an email failure.
      if (enquiryId) {
        sendJson(response, 200, { success: true, requestId: shortId, confirmationSent: false });
      } else {
        sendJson(response, 502, { success: false, message: 'Unable to deliver the enquiry right now' });
      }
      return;
    }

    if (enquiryId) await store.update('enquiries', enquiryId, { email_sent: true });

    let confirmationSent = false;
    const usingResendTestSender = /onboarding@resend\.dev/i.test(from);

    if (!usingResendTestSender || payload.email === studioInbox.toLowerCase()) {
      const customerResult = await resend.emails.send({
        from,
        to: [payload.email],
        replyTo: studioInbox,
        subject: subjects.customer,
        html: customerHtml,
        text: toPlainText(customerHtml),
        attachments: customerAttachments.length ? customerAttachments : undefined
      });

      confirmationSent = !customerResult.error;
      if (customerResult.error) {
        console.warn('Customer confirmation was not delivered', {
          requestId,
          message: customerResult.error.message
        });
      }
    } else {
      console.info('Customer confirmation skipped while using the Resend test sender', {
        requestId
      });
    }

    sendJson(response, 200, {
      success: true,
      requestId: shortId,
      confirmationSent
    });
  } catch (error) {
    console.error('submit-enquiry failed', {
      message: error instanceof Error ? error.message : 'Unknown error'
    });
    sendJson(response, error?.message === 'PAYLOAD_TOO_LARGE' ? 413 : 500, {
      success: false,
      message: 'Unable to submit the form right now'
    });
  }
};
