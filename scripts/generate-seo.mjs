/**
 * Post-build SEO / AEO / GEO generator.
 *
 * Vite emits a single dist/index.html whose <body> is just <div id="root"></div>.
 * That means every URL served the same title and description, and any crawler
 * that does not execute JavaScript — which is most AI answer engines — saw a
 * completely empty page.
 *
 * This script fixes both problems after the Vite build:
 *   1. Writes one HTML file per route with its own title, description,
 *      canonical, Open Graph, Twitter card and JSON-LD.
 *   2. Injects a real, semantic content layer inside #root so non-JS crawlers
 *      read the same facts a human sees. React replaces it on hydration.
 *   3. Emits sitemap.xml, robots.txt and llms.txt.
 *
 * Run with: node scripts/generate-seo.mjs
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  SITE_URL,
  business,
  verification,
  locations,
  cityList,
  services,
  generalFaq,
  routes
} from '../seo/site-data.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const HEAD_MARKER = '<!--@SEO_HEAD-->';
const BODY_MARKER = '<!--@SEO_BODY-->';

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/** JSON-LD must never contain a raw </script> sequence. */
const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

const absolute = (path) => `${SITE_URL}${path === '/' ? '/' : path}`;

// ---------------------------------------------------------------------------
// Structured data
// ---------------------------------------------------------------------------

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness', 'Organization'],
  '@id': `${SITE_URL}/#organization`,
  name: business.name,
  legalName: business.legalName,
  url: `${SITE_URL}/`,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon-512.png`, width: 512, height: 512 },
  image: `${SITE_URL}/icon-512.png`,
  email: business.email,
  telephone: business.phone,
  foundingDate: business.foundingDate,
  slogan: business.tagline,
  description: generalFaq[0].a,
  priceRange: business.priceRange,
  currenciesAccepted: 'INR',
  address: {
    '@type': 'PostalAddress',
    addressRegion: business.region,
    addressCountry: business.countryCode
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.latitude,
    longitude: business.longitude
  },
  founder: { '@type': 'Person', name: business.founder.name, jobTitle: business.founder.jobTitle },
  employee: business.team.map((person) => ({
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle
  })),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: business.email,
      telephone: business.phone,
      areaServed: business.countryCode,
      availableLanguage: business.languages
    },
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: business.email,
      availableLanguage: business.languages
    }
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: business.openingHours.opens,
    closes: business.openingHours.closes
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: business.region },
    { '@type': 'Country', name: business.country },
    ...locations.map((city) => ({ '@type': 'City', name: city.name }))
  ],
  knowsAbout: services.flatMap((service) => service.keywords).slice(0, 40),
  knowsLanguage: business.languages,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: `${business.name} Services`,
    itemListElement: services.map((service, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        '@id': `${SITE_URL}/#service-${service.slug}`,
        name: service.seoName,
        description: service.summary
      }
    }))
  },
  sameAs: business.sameAs
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: business.name,
  description: routes[0].description,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-IN'
};

/** One Service node per offering, each tied to the Kerala service area. */
const serviceSchemas = services.map((service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/#service-${service.slug}`,
  serviceType: service.seoName,
  name: service.seoName,
  description: service.summary,
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: [
    { '@type': 'AdministrativeArea', name: business.region },
    { '@type': 'Country', name: business.country }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: `${service.name} deliverables`,
    itemListElement: service.deliverables.map((item, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: { '@type': 'Service', name: item }
    }))
  }
}));

const faqSchema = (faq) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a }
  }))
});

const breadcrumbSchema = (route) => {
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }];
  if (route.path !== '/') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: route.h1,
      item: absolute(route.path)
    });
  }
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
};

// ---------------------------------------------------------------------------
// <head> for a single route
// ---------------------------------------------------------------------------

function buildHead(route) {
  const url = absolute(route.path);
  const keywords = [
    ...new Set([
      ...services.flatMap((service) => service.keywords.slice(0, 2)),
      `creative agency ${business.region}`,
      `advertising agency ${business.region}`,
      ...locations.slice(0, 5).map((city) => `advertising agency ${city.name}`)
    ])
  ].join(', ');

  const schemas = [organizationSchema, websiteSchema, breadcrumbSchema(route)];
  if (route.faq?.length) schemas.push(faqSchema(route.faq));
  if (route.key === 'home' || route.key === 'services') schemas.push(...serviceSchemas);

  // Only emitted once a token is filled in, so an empty value adds nothing.
  const verifyTags = [
    verification.google
      ? `<meta name="google-site-verification" content="${escapeHtml(verification.google)}" />`
      : null,
    verification.bing ? `<meta name="msvalidate.01" content="${escapeHtml(verification.bing)}" />` : null
  ].filter(Boolean);

  return [
    `<title>${escapeHtml(route.title)}</title>`,
    ...verifyTags,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    `<meta name="keywords" content="${escapeHtml(keywords)}" />`,
    `<link rel="canonical" href="${url}" />`,
    route.noindex
      ? '<meta name="robots" content="noindex, follow" />'
      : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />',
    '<meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />',
    `<meta name="author" content="${escapeHtml(business.name)}" />`,
    `<meta name="publisher" content="${escapeHtml(business.name)}" />`,
    '<meta name="language" content="en-IN" />',
    `<meta name="geo.region" content="${business.regionCode}" />`,
    `<meta name="geo.placename" content="${escapeHtml(`${business.region}, ${business.country}`)}" />`,
    `<meta name="geo.position" content="${business.latitude};${business.longitude}" />`,
    `<meta name="ICBM" content="${business.latitude}, ${business.longitude}" />`,
    `<link rel="alternate" hreflang="en-in" href="${url}" />`,
    `<link rel="alternate" hreflang="x-default" href="${url}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:site_name" content="${escapeHtml(business.name)}" />`,
    `<meta property="og:image" content="${SITE_URL}/icon-512.png" />`,
    '<meta property="og:image:width" content="512" />',
    '<meta property="og:image:height" content="512" />',
    `<meta property="og:image:alt" content="${escapeHtml(`${business.name} logo`)}" />`,
    '<meta property="og:locale" content="en_IN" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:image" content="${SITE_URL}/icon-512.png" />`,
    ...schemas.map(jsonLd)
  ].join('\n    ');
}

// ---------------------------------------------------------------------------
// Static crawlable body
// ---------------------------------------------------------------------------

function renderServiceBlock(service, detailed) {
  const parts = [
    `<article class="seo-service">`,
    `<h3>${escapeHtml(service.seoName)}</h3>`,
    `<p>${escapeHtml(service.summary)}</p>`
  ];
  if (detailed) {
    parts.push(`<p>${escapeHtml(service.body)}</p>`);
    parts.push(
      `<ul>${service.deliverables.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
    );
  }
  parts.push(
    `<p><a href="/cart?service=${encodeURIComponent(service.id)}">Enquire about ${escapeHtml(service.name)}</a> &middot; <a href="mailto:${business.email}?subject=${encodeURIComponent(`${service.name} enquiry`)}">Email us</a></p>`
  );
  parts.push('</article>');
  return parts.join('');
}

function buildBody(route) {
  const out = [`<div class="seo-static" id="seo-static">`];
  out.push('<header><p><strong>' + escapeHtml(business.name) + '</strong> &mdash; ' + escapeHtml(business.tagline) + '</p></header>');
  out.push('<main>');
  out.push(`<h1>${escapeHtml(route.h1)}</h1>`);
  out.push(`<p>${escapeHtml(route.intro)}</p>`);

  for (const section of route.sections ?? []) {
    out.push(`<section><h2>${escapeHtml(section.h2)}</h2>`);
    if (section.intro) out.push(`<p>${escapeHtml(section.intro)}</p>`);
    if (section.useServices) {
      out.push(services.map((service) => renderServiceBlock(service, section.detailed)).join(''));
    }
    if (section.useLocations) {
      out.push(
        `<ul>${locations
          .map(
            (city) =>
              `<li>${escapeHtml(
                `${business.name} serves ${city.name}${city.alt && city.alt !== city.name ? ` (${city.alt})` : ''}, ${business.region}`
              )}</li>`
          )
          .join('')}</ul>`
      );
    }
    if (section.bullets) {
      out.push(`<ul>${section.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`);
    }
    out.push('</section>');
  }

  if (route.faq?.length) {
    out.push('<section><h2>Frequently asked questions</h2><dl>');
    for (const item of route.faq) {
      out.push(`<dt><h3>${escapeHtml(item.q)}</h3></dt><dd><p>${escapeHtml(item.a)}</p></dd>`);
    }
    out.push('</dl></section>');
  }

  out.push('<section><h2>Contact Leaf Creationism</h2><address>');
  out.push(`<p>Email: <a href="mailto:${business.email}">${escapeHtml(business.email)}</a></p>`);
  out.push(
    `<p>Phone and WhatsApp: <a href="${business.whatsapp}">${escapeHtml(business.phoneDisplay)}</a></p>`
  );
  out.push(`<p>Service area: ${escapeHtml(`${cityList}, and all of ${business.country}`)}</p>`);
  out.push(
    `<p>Hours: ${escapeHtml(`${business.openingHours.opens}–${business.openingHours.closes} IST, seven days a week`)}</p>`
  );
  out.push('</address></section>');
  out.push('</main>');

  out.push('<nav><h2>Pages</h2><ul>');
  for (const item of routes) {
    out.push(`<li><a href="${item.path}">${escapeHtml(item.h1)}</a></li>`);
  }
  out.push('</ul></nav>');
  out.push('</div>');
  return out.join('\n');
}

// ---------------------------------------------------------------------------
// Emitters
// ---------------------------------------------------------------------------

function buildSitemap() {
  const today = new Date().toISOString().split('T')[0];
  const urls = routes
    .filter((route) => !route.noindex)
    .map((route) =>
      [
        '  <url>',
        `    <loc>${absolute(route.path)}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${route.changefreq}</changefreq>`,
        `    <priority>${route.priority}</priority>`,
        '  </url>'
      ].join('\n')
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildRobots() {
  // AI answer engines are allowed on purpose: being crawlable by them is the
  // entire mechanism behind AEO/GEO visibility.
  const aiAgents = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'PerplexityBot',
    'Perplexity-User',
    'ClaudeBot',
    'Claude-User',
    'Claude-SearchBot',
    'anthropic-ai',
    'Google-Extended',
    'Applebot',
    'Applebot-Extended',
    'Bingbot',
    'meta-externalagent',
    'Amazonbot',
    'DuckAssistBot',
    'cohere-ai',
    'YouBot',
    'CCBot'
  ];

  return [
    '# Leaf Creationism — https://leafcreationism.in',
    '',
    'User-agent: *',
    'Allow: /',
    '',
    '# Search and AI answer engines are explicitly welcome.',
    ...aiAgents.flatMap((agent) => [`User-agent: ${agent}`, 'Allow: /', '']),
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    ''
  ].join('\n');
}

/**
 * llms.txt — a plain-text brief that AI answer engines can read directly.
 * Gives them clean, unambiguous facts instead of making them infer from markup.
 */
function buildLlmsTxt() {
  const lines = [
    `# ${business.name}`,
    '',
    `> ${generalFaq[0].a}`,
    '',
    `- Website: ${SITE_URL}/`,
    `- Location: ${business.region}, ${business.country}`,
    `- Service area: ${cityList}, and all of ${business.country}`,
    `- Email: ${business.email}`,
    `- Phone / WhatsApp: ${business.phoneDisplay}`,
    `- Hours: ${business.openingHours.opens}–${business.openingHours.closes} IST, seven days a week`,
    `- Founded: ${business.foundingDate}`,
    `- Founder: ${business.founder.name}, ${business.founder.jobTitle}`,
    `- Languages: ${business.languages.join(', ')}`,
    '',
    '## Services',
    ''
  ];

  for (const service of services) {
    lines.push(`### ${service.seoName}`);
    lines.push('');
    lines.push(service.summary);
    lines.push('');
    lines.push(...service.deliverables.map((item) => `- ${item}`));
    lines.push('');
  }

  lines.push('## Pages', '');
  for (const route of routes) {
    lines.push(`- [${route.h1}](${absolute(route.path)}): ${route.description}`);
  }

  lines.push('', '## Frequently asked questions', '');
  for (const item of [...generalFaq, ...services.flatMap((service) => service.faq)]) {
    lines.push(`### ${item.q}`, '', item.a, '');
  }

  return lines.join('\n');
}

// ---------------------------------------------------------------------------

async function main() {
  const template = await readFile(join(DIST, 'index.html'), 'utf8');

  if (!template.includes(HEAD_MARKER) || !template.includes(BODY_MARKER)) {
    throw new Error(
      `index.html is missing ${HEAD_MARKER} or ${BODY_MARKER}. SEO generation cannot continue.`
    );
  }

  for (const route of routes) {
    const html = template
      .replace(HEAD_MARKER, buildHead(route))
      .replace(BODY_MARKER, buildBody(route));

    const outPath =
      route.path === '/'
        ? join(DIST, 'index.html')
        : join(DIST, route.path.replace(/^\//, ''), 'index.html');

    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, 'utf8');
    console.log(`  seo: ${route.path.padEnd(16)} -> ${outPath.replace(DIST, 'dist')}`);
  }

  await writeFile(join(DIST, 'sitemap.xml'), buildSitemap(), 'utf8');
  await writeFile(join(DIST, 'robots.txt'), buildRobots(), 'utf8');
  await writeFile(join(DIST, 'llms.txt'), buildLlmsTxt(), 'utf8');
  console.log('  seo: sitemap.xml, robots.txt, llms.txt written');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
