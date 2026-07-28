const SITE_URL = 'https://leafcreationism.in';
const WHATSAPP_URL = 'https://wa.me/918589038479';
const FONT = "'Poppins',Arial,Helvetica,sans-serif";

const COLOR = {
  canvas: '#f6f7fb',
  paper: '#ffffff',
  ink: '#111318',
  muted: '#747985',
  line: '#e9ebf0',
  soft: '#f5f7ff',
  blue: '#2563eb',
  blueSoft: '#edf3ff',
  green: '#16a269',
  greenSoft: '#eaf8f1',
  yellow: '#d5b400',
  yellowSoft: '#fff9d9'
};

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatText(value) {
  return escapeHtml(value || 'Not added').replaceAll('\n', '<br />');
}

function infoRow(label, value, last = false) {
  return `
    <tr>
      <td width="35%" valign="top" style="padding-top:13px;padding-right:12px;padding-bottom:13px;padding-left:16px;border-bottom:${last ? 'none' : `1px solid ${COLOR.line}`};color:${COLOR.muted};font-family:${FONT};font-size:11px;line-height:17px;font-weight:500;">${escapeHtml(label)}</td>
      <td valign="top" style="padding-top:13px;padding-right:16px;padding-bottom:13px;padding-left:12px;border-bottom:${last ? 'none' : `1px solid ${COLOR.line}`};color:${COLOR.ink};font-family:${FONT};font-size:12px;line-height:19px;font-weight:500;word-break:break-word;">${formatText(value)}</td>
    </tr>`;
}

function infoTable(rows) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${COLOR.soft}" style="width:100%;background-color:${COLOR.soft};border:1px solid ${COLOR.line};border-radius:14px;overflow:hidden;">
      ${rows.map(([label, value], index) => infoRow(label, value, index === rows.length - 1)).join('')}
    </table>`;
}

function button(href, label) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td bgcolor="${COLOR.blue}" style="background-color:${COLOR.blue};border-radius:999px;">
          <a href="${escapeHtml(href)}" style="display:inline-block;padding-top:13px;padding-right:21px;padding-bottom:13px;padding-left:21px;color:#ffffff;font-family:${FONT};font-size:12px;line-height:16px;font-weight:600;text-decoration:none;">${escapeHtml(label)} &nbsp;→</a>
        </td>
      </tr>
    </table>`;
}

function step(index, title, text) {
  const palettes = {
    '1': { ink: COLOR.blue, soft: COLOR.blueSoft },
    '2': { ink: COLOR.green, soft: COLOR.greenSoft },
    '3': { ink: COLOR.yellow, soft: COLOR.yellowSoft }
  };
  const palette = palettes[index] || palettes['1'];
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${palette.soft}" style="width:100%;margin-bottom:10px;background-color:${palette.soft};border-radius:13px;">
      <tr>
        <td width="38" valign="top" style="padding-top:14px;padding-bottom:14px;padding-left:14px;">
          <table role="presentation" width="26" cellpadding="0" cellspacing="0" border="0">
            <tr><td width="26" height="26" align="center" bgcolor="#ffffff" style="width:26px;height:26px;background-color:#ffffff;border-radius:999px;color:${palette.ink};font-family:${FONT};font-size:10px;line-height:26px;font-weight:600;">${escapeHtml(index)}</td></tr>
          </table>
        </td>
        <td valign="top" style="padding-top:14px;padding-right:14px;padding-bottom:14px;padding-left:4px;">
          <p style="margin:0;color:${COLOR.ink};font-family:${FONT};font-size:13px;line-height:19px;font-weight:600;">${escapeHtml(title)}</p>
          <p style="margin-top:3px;margin-right:0;margin-bottom:0;margin-left:0;color:${COLOR.muted};font-family:${FONT};font-size:11px;line-height:18px;font-weight:400;">${escapeHtml(text)}</p>
        </td>
      </tr>
    </table>`;
}

function projectGallery(images) {
  const projects = [
    { label: 'Brand identity', image: images[0] },
    { label: 'Digital product', image: images[1] },
    { label: 'Creative direction', image: images[2] }
  ].filter((project) => project.image);

  if (!projects.length) return '';

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#111318" style="width:100%;margin-top:30px;background-color:#111318;border-radius:16px;overflow:hidden;">
      <tr>
        <td style="padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;">
          <p style="margin:0;color:#8caeff;font-family:${FONT};font-size:9px;line-height:14px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">A glimpse inside the studio</p>
          <p style="margin-top:5px;margin-right:0;margin-bottom:15px;margin-left:0;color:#ffffff;font-family:${FONT};font-size:17px;line-height:23px;font-weight:600;letter-spacing:-0.4px;">Selected work, made with intention.</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              ${projects.map((project, index) => `
                <td width="33.33%" valign="top" style="padding-right:${index === projects.length - 1 ? '0' : '5px'};">
                  <a href="${SITE_URL}" style="text-decoration:none;"><img src="${escapeHtml(project.image)}" width="164" height="164" border="0" alt="${escapeHtml(project.label)} by Leaf Creationism" style="display:block;width:100%;height:auto;border:0;border-radius:10px;" /></a>
                  <p style="margin-top:8px;margin-right:0;margin-bottom:0;margin-left:0;color:#d8dbe3;font-family:${FONT};font-size:8px;line-height:12px;font-weight:500;">${escapeHtml(project.label)}</p>
                </td>`).join('')}
            </tr>
          </table>
        </td>
      </tr>
    </table>`;
}

function layout({ preview, logoUrl, heroImageUrl, shortId, body, footerNote }) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
      <title>${escapeHtml(preview)}</title>
    </head>
    <body style="margin:0;padding:0;background-color:${COLOR.canvas};font-family:${FONT};color:${COLOR.ink};">
      <span style="display:none;max-height:0;max-width:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preview)}</span>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${COLOR.canvas}" style="width:100%;background-color:${COLOR.canvas};">
        <tr>
          <td align="center" style="padding-top:30px;padding-right:12px;padding-bottom:30px;padding-left:12px;">
            <!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${COLOR.paper}" style="width:100%;max-width:600px;background-color:${COLOR.paper};border:1px solid ${COLOR.line};border-radius:18px;overflow:hidden;">
              <tr>
                <td width="44%" height="5" bgcolor="${COLOR.blue}" style="height:5px;background-color:${COLOR.blue};font-size:0;line-height:0;">&nbsp;</td>
                <td width="31%" height="5" bgcolor="${COLOR.green}" style="height:5px;background-color:${COLOR.green};font-size:0;line-height:0;">&nbsp;</td>
                <td width="25%" height="5" bgcolor="#f4d000" style="height:5px;background-color:#f4d000;font-size:0;line-height:0;">&nbsp;</td>
              </tr>
              <tr>
                <td colspan="3" style="padding-top:24px;padding-right:28px;padding-bottom:24px;padding-left:28px;border-bottom:1px solid ${COLOR.line};">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td valign="middle">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td width="42" valign="middle"><img src="${escapeHtml(logoUrl)}" width="42" height="42" border="0" alt="Leaf Creationism" style="display:block;width:42px;height:42px;border:0;" /></td>
                            <td valign="middle" style="padding-left:11px;">
                              <p style="margin:0;color:${COLOR.ink};font-family:${FONT};font-size:14px;line-height:18px;font-weight:600;letter-spacing:-0.2px;">Leaf Creationism</p>
                              <p style="margin-top:2px;margin-right:0;margin-bottom:0;margin-left:0;color:${COLOR.muted};font-family:${FONT};font-size:9px;line-height:13px;font-weight:400;">Creative digital studio</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td align="right" valign="middle">
                        <p style="margin:0;color:${COLOR.muted};font-family:${FONT};font-size:9px;line-height:14px;font-weight:500;letter-spacing:0.5px;">${escapeHtml(shortId)}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              ${heroImageUrl ? `
              <tr>
                <td colspan="3" style="padding-top:28px;padding-right:28px;padding-bottom:0;padding-left:28px;">
                  <a href="${SITE_URL}" style="text-decoration:none;"><img src="${escapeHtml(heroImageUrl)}" width="544" height="218" border="0" alt="Inside the Leaf Creationism digital studio" style="display:block;width:100%;max-width:544px;height:auto;border:0;border-radius:16px;" /></a>
                </td>
              </tr>` : ''}
              <tr>
                <td colspan="3" style="padding-top:34px;padding-right:36px;padding-bottom:42px;padding-left:36px;">${body}</td>
              </tr>
              <tr>
                <td colspan="3" style="padding-top:22px;padding-right:28px;padding-bottom:22px;padding-left:28px;border-top:1px solid ${COLOR.line};">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td valign="middle"><p style="margin:0;color:${COLOR.muted};font-family:${FONT};font-size:9px;line-height:15px;font-weight:400;">${escapeHtml(footerNote)}</p></td>
                      <td align="right" valign="middle" style="padding-left:12px;white-space:nowrap;">
                        <a href="${SITE_URL}" style="color:${COLOR.ink};font-family:${FONT};font-size:9px;line-height:15px;font-weight:500;text-decoration:none;">Website</a>
                        <span style="color:#c3c6ce;font-family:${FONT};font-size:9px;line-height:15px;"> &nbsp;·&nbsp; </span>
                        <a href="${WHATSAPP_URL}" style="color:${COLOR.green};font-family:${FONT};font-size:9px;line-height:15px;font-weight:500;text-decoration:none;">WhatsApp</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <!--[if mso]></td></tr></table><![endif]-->
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

function buildStudioNotification({ payload, shortId, logoUrl, heroImageUrl }) {
  const replyHref = `mailto:${encodeURIComponent(payload.email)}?subject=${encodeURIComponent(`Re: Leaf Creationism request ${shortId}`)}`;
  const body = `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="${COLOR.blueSoft}" style="padding-top:7px;padding-right:11px;padding-bottom:7px;padding-left:11px;background-color:${COLOR.blueSoft};border-radius:999px;color:${COLOR.blue};font-family:${FONT};font-size:9px;line-height:13px;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;">New project request</td></tr></table>
    <h1 style="margin-top:15px;margin-right:0;margin-bottom:0;margin-left:0;color:${COLOR.ink};font-family:${FONT};font-size:30px;line-height:38px;font-weight:600;letter-spacing:-1px;">A new brief just landed.</h1>
    <p style="margin-top:13px;margin-right:0;margin-bottom:24px;margin-left:0;color:${COLOR.muted};font-family:${FONT};font-size:13px;line-height:22px;font-weight:400;">The complete submission is below. Reply directly to this email to continue the conversation.</p>
    ${button(replyHref, `Reply to ${payload.name}`)}
    <p style="margin-top:32px;margin-right:0;margin-bottom:10px;margin-left:0;color:${COLOR.ink};font-family:${FONT};font-size:12px;line-height:18px;font-weight:600;">Request details</p>
    ${infoTable([
      ['Name', payload.name],
      ['Email', payload.email],
      ['Phone', payload.phone],
      ['Company', payload.company],
      ['Service', payload.requestedService],
      ['Selected services', payload.selectedServices],
      ['Project brief', payload.projectBrief],
      ['Appointment', payload.appointmentDetails],
      ['References', payload.selectedReferences],
      ['Source', payload.source]
    ])}`;

  return layout({
    preview: `New request from ${payload.name} · ${shortId}`,
    logoUrl,
    heroImageUrl,
    shortId,
    body,
    footerNote: 'Private studio notification.'
  });
}

function buildCustomerConfirmation({ payload, shortId, logoUrl, heroImageUrl, workImages = [] }) {
  const requestSummary = payload.formType === 'access-request'
    ? payload.requestedService
    : payload.projectBrief;
  const body = `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="${COLOR.greenSoft}" style="padding-top:7px;padding-right:11px;padding-bottom:7px;padding-left:11px;background-color:${COLOR.greenSoft};border-radius:999px;color:${COLOR.green};font-family:${FONT};font-size:9px;line-height:13px;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;">Request received</td></tr></table>
    <h1 style="margin-top:15px;margin-right:0;margin-bottom:0;margin-left:0;color:${COLOR.ink};font-family:${FONT};font-size:32px;line-height:40px;font-weight:600;letter-spacing:-1.1px;">Your idea is in good hands.</h1>
    <p style="margin-top:13px;margin-right:0;margin-bottom:25px;margin-left:0;color:${COLOR.muted};font-family:${FONT};font-size:13px;line-height:22px;font-weight:400;">Your project request is with our studio. We’ll review it carefully and reply with a clear next step within 24 hours.</p>
    ${infoTable([
      ['Your request', requestSummary],
      ['Service', payload.requestedService],
      ['Appointment', payload.appointmentDetails]
    ])}
    <p style="margin-top:30px;margin-right:0;margin-bottom:16px;margin-left:0;color:${COLOR.ink};font-family:${FONT};font-size:13px;line-height:19px;font-weight:600;">What happens next</p>
    ${step('1', 'We review', 'Our studio checks your brief, references and selected services.')}
    ${step('2', 'We reply', 'You receive a personal response with the clearest next step.')}
    ${step('3', 'We plan', 'If it’s a fit, we align scope, timing and the first milestone.')}
    ${projectGallery(workImages)}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:25px;">
      <tr>
        <td valign="middle">${button(SITE_URL, 'Visit our studio')}</td>
        <td align="right" valign="middle"><a href="${WHATSAPP_URL}" style="color:${COLOR.green};font-family:${FONT};font-size:10px;line-height:16px;font-weight:500;text-decoration:none;">WhatsApp us</a></td>
      </tr>
    </table>
    <p style="margin-top:28px;margin-right:0;margin-bottom:0;margin-left:0;color:${COLOR.muted};font-family:${FONT};font-size:10px;line-height:17px;font-weight:400;">Reference ${escapeHtml(shortId)} · Reply to this email anytime to add a note.</p>`;

  return layout({
    preview: `We received your Leaf Creationism request · ${shortId}`,
    logoUrl,
    heroImageUrl,
    shortId,
    body,
    footerNote: `Sent to ${payload.email}`
  });
}

function toPlainText(html) {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>|<\/span>|<\/td>|<\/tr>|<\/h1>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/[ \t]+/g, ' ')
    .replace(/\n\s+/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

module.exports = {
  buildCustomerConfirmation,
  buildStudioNotification,
  toPlainText
};
