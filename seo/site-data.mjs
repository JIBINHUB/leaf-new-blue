/**
 * Single source of truth for SEO / AEO / GEO content.
 *
 * Consumed at build time by scripts/generate-seo.mjs to produce:
 *   - per-route HTML (unique title/description/canonical/OG + JSON-LD)
 *   - a static, crawlable content layer (AI crawlers do not execute JS)
 *   - sitemap.xml and robots.txt
 *
 * Keep every claim here factually true — this text is what Google and AI
 * answer engines (ChatGPT, Perplexity, Gemini, Claude) will quote about the
 * business. Inaccurate copy here becomes an inaccurate citation everywhere.
 */

export const SITE_URL = 'https://leafcreationism.in';

export const business = {
  name: 'Leaf Creationism',
  legalName: 'Leaf Creationism',
  tagline: 'Creative agency in Kerala, India',
  email: 'leafcreationism@gmail.com',
  phone: '+918589038479',
  phoneDisplay: '+91 85890 38479',
  whatsapp: 'https://wa.me/918589038479',
  region: 'Kerala',
  regionCode: 'IN-KL',
  country: 'India',
  countryCode: 'IN',
  // Kerala geographic centre — used for local-pack relevance while the studio
  // operates as a service-area business rather than a walk-in storefront.
  latitude: '10.1632',
  longitude: '76.6413',
  foundingDate: '2025-05-08',
  openingHours: { opens: '10:00', closes: '21:00' },
  priceRange: '₹₹',
  languages: ['English', 'Malayalam', 'Hindi'],
  founder: { name: 'Jibin Chacko', jobTitle: 'Founder and Creative Head' },
  team: [
    { name: 'Jibin Chacko', jobTitle: 'Founder and Creative Head' },
    { name: 'June Mary', jobTitle: 'Creative Head and Mentor' }
  ],
  // Add real profile URLs here as they go live — sameAs is a primary signal
  // both for Google entity resolution and for AI engines verifying the brand.
  sameAs: []
};

/** Kerala cities targeted for local search and "near me" style queries. */
export const locations = [
  { name: 'Kochi', alt: 'Ernakulam' },
  { name: 'Thiruvananthapuram', alt: 'Trivandrum' },
  { name: 'Kozhikode', alt: 'Calicut' },
  { name: 'Thrissur', alt: 'Thrissur' },
  { name: 'Kollam', alt: 'Kollam' },
  { name: 'Kottayam', alt: 'Kottayam' },
  { name: 'Kannur', alt: 'Kannur' },
  { name: 'Alappuzha', alt: 'Alleppey' },
  { name: 'Palakkad', alt: 'Palakkad' },
  { name: 'Malappuram', alt: 'Malappuram' }
];

export const cityList = locations.map((city) => city.name).join(', ');

/**
 * The eight services shown on the homepage below the hero.
 * `summary` is written to be directly quotable by an answer engine.
 */
export const services = [
  {
    id: 'uiux',
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    seoName: 'UI/UX Design Company in Kerala',
    summary:
      'Leaf Creationism designs UI/UX for websites, mobile apps, dashboards, and digital products for brands in Kerala and across India, covering user research, wireframing, interface design, and clickable prototypes.',
    body: 'We plan the product before we style it. Every UI/UX engagement starts with understanding who uses the product and what they are trying to finish, then moves through information architecture, wireframes, and a complete interface design system your developers can build from without guesswork.',
    deliverables: [
      'User research and audience mapping',
      'Information architecture and user flows',
      'Wireframes and clickable prototypes',
      'Full UI design system with components',
      'Developer-ready design handover'
    ],
    keywords: [
      'UI UX design company in Kerala',
      'UI UX design agency Kochi',
      'app UI design Kerala',
      'website UX design Kerala',
      'product design studio Kerala'
    ],
    faq: [
      {
        q: 'How much does UI/UX design cost in Kerala?',
        a: 'UI/UX design pricing at Leaf Creationism depends on the number of screens, the complexity of the product, and whether research and prototyping are included. Share your product scope by email or WhatsApp and you receive a fixed written quote before any work starts.'
      },
      {
        q: 'Do you design for both mobile apps and websites?',
        a: 'Yes. Leaf Creationism designs UI/UX for mobile apps on iOS and Android, responsive websites, web applications, admin dashboards, and e-commerce storefronts.'
      }
    ]
  },
  {
    id: 'web',
    slug: 'web-development',
    name: 'Web Development',
    seoName: 'Website Development Company in Kerala',
    summary:
      'Leaf Creationism builds fast, mobile-responsive, SEO-ready websites and web applications for businesses in Kerala and India using modern frameworks such as React and Next.js.',
    body: 'We build websites that load quickly, work correctly on every screen size, and are structured so search engines can read them. That means clean semantic markup, compressed and correctly sized images, sensible metadata, and a codebase your team can maintain after handover.',
    deliverables: [
      'Business websites and landing pages',
      'Web applications and dashboards',
      'Mobile-responsive front-end build',
      'Performance and Core Web Vitals tuning',
      'On-page SEO structure and analytics setup'
    ],
    keywords: [
      'website development company in Kerala',
      'web development agency Kochi',
      'website designers Kerala',
      'React developers Kerala',
      'business website design Kerala'
    ],
    faq: [
      {
        q: 'How long does it take to build a website in Kerala?',
        a: 'A focused business website or landing page from Leaf Creationism typically takes two to four weeks. Larger web applications with backend, authentication, or e-commerce features take longer, and the timeline is confirmed in writing before the project begins.'
      },
      {
        q: 'Will my website work properly on mobile phones?',
        a: 'Yes. Every website Leaf Creationism builds is mobile-responsive by default and tested across phone, tablet, and desktop screen sizes before launch.'
      }
    ]
  },
  {
    id: 'ai',
    slug: 'ai-ads',
    name: 'AI Ads',
    seoName: 'AI Advertising Agency in Kerala',
    summary:
      'Leaf Creationism produces AI-assisted ad creatives and runs data-driven ad campaigns on Meta and Google for brands in Kerala and India, including creative generation, audience targeting, and A/B testing.',
    body: 'AI ads let us produce and test far more creative variations than a traditional shoot allows, at a lower cost per concept. We generate the creative, structure the targeting, run controlled tests, then move budget toward whichever angle is actually producing enquiries.',
    deliverables: [
      'AI-generated ad creatives and product visuals',
      'Meta and Google campaign setup',
      'Audience targeting and segmentation',
      'A/B creative testing framework',
      'Performance reporting and budget optimisation'
    ],
    keywords: [
      'AI ads agency Kerala',
      'AI advertising Kochi',
      'AI generated ad creatives India',
      'performance marketing agency Kerala',
      'Meta ads agency Kerala'
    ],
    faq: [
      {
        q: 'What are AI ads and how are they different from normal ads?',
        a: 'AI ads use generative AI to produce ad visuals and copy variations quickly, without a full physical photoshoot for every concept. Leaf Creationism uses this to test many more creative angles for the same budget, then scales the versions that generate the most enquiries.'
      },
      {
        q: 'Do you manage the ad budget as well as the creative?',
        a: 'Yes. Leaf Creationism can handle both the creative production and the campaign management on Meta and Google, including targeting, testing, and ongoing budget optimisation.'
      }
    ]
  },
  {
    id: 'adv',
    slug: 'advertising',
    name: 'Advertising',
    seoName: 'Advertising Agency in Kerala',
    summary:
      'Leaf Creationism is an advertising agency in Kerala that plans and produces full campaigns, covering campaign strategy, creative direction, ad copy, visual production, and media performance tracking.',
    body: 'A campaign is more than a set of posts. We define who the campaign is speaking to, what the offer actually is, and which message will make that audience stop scrolling — then produce the creative and track whether it turned into real business.',
    deliverables: [
      'Campaign strategy and audience mapping',
      'Creative direction and concept development',
      'Ad copywriting and visual production',
      'Multi-platform campaign rollout',
      'Performance tracking and reporting'
    ],
    keywords: [
      'advertising agency in Kerala',
      'best advertising agency Kochi',
      'ad agency Kozhikode',
      'creative agency Kerala',
      'campaign management Kerala'
    ],
    faq: [
      {
        q: 'Which advertising platforms do you work with?',
        a: 'Leaf Creationism runs campaigns across Instagram, Facebook, Google, and YouTube, and also produces creative for print, outdoor, and in-store brand activation in Kerala.'
      },
      {
        q: 'Do you work with small businesses and startups?',
        a: 'Yes. Leaf Creationism works with small businesses, startups, and established brands across Kerala, and scopes each campaign to the budget that is actually available.'
      }
    ]
  },
  {
    id: 'brand',
    slug: 'branding',
    name: 'Branding',
    seoName: 'Branding Agency in Kerala',
    summary:
      'Leaf Creationism builds complete brand identities for businesses in Kerala and India, including logo design, colour and typography systems, brand voice, and full brand guidelines.',
    body: 'Branding is the rulebook that keeps everything else consistent. We define the positioning first, then design the identity around it, and hand over guidelines detailed enough that anyone on your team can produce on-brand material without asking us first.',
    deliverables: [
      'Brand positioning and strategy',
      'Logo design and visual identity',
      'Colour palette and typography system',
      'Brand voice and messaging guidelines',
      'Complete brand guideline document'
    ],
    keywords: [
      'branding agency in Kerala',
      'logo design company Kerala',
      'brand identity design Kochi',
      'rebranding agency Kerala',
      'brand strategy Kerala'
    ],
    faq: [
      {
        q: 'What is included in a brand identity package?',
        a: 'A Leaf Creationism brand identity package includes brand positioning, logo design with variations, a colour palette, a typography system, messaging guidelines, and a written brand guideline document covering correct usage.'
      },
      {
        q: 'Can you rebrand an existing business?',
        a: 'Yes. Leaf Creationism handles full rebrands, including auditing the current identity, repositioning the brand, redesigning the visual system, and planning the rollout across existing materials.'
      }
    ]
  },
  {
    id: 'apps',
    slug: 'mobile-app-development',
    name: 'Mobile Apps',
    seoName: 'Mobile App Development Company in Kerala',
    summary:
      'Leaf Creationism designs and develops mobile applications for iOS and Android for businesses in Kerala and India, covering app UI/UX, front-end and backend development, and App Store and Play Store submission.',
    body: 'We build apps that feel native rather than a website in a wrapper. That covers the interface design, the backend that has to hold up when real users arrive, and the store submission process at the end, which is usually where first-time app owners get stuck.',
    deliverables: [
      'App UI/UX design and prototyping',
      'iOS and Android application development',
      'Backend, API, and database setup',
      'App Store and Play Store submission',
      'Post-launch maintenance and updates'
    ],
    keywords: [
      'mobile app development company in Kerala',
      'app developers Kochi',
      'iOS app development Kerala',
      'Android app development Kerala',
      'app development agency India'
    ],
    faq: [
      {
        q: 'How much does it cost to build a mobile app in Kerala?',
        a: 'Mobile app cost at Leaf Creationism depends on the feature set, whether the app needs a backend, and whether it ships on both iOS and Android. Send your app requirements by email or WhatsApp to receive a written estimate before work begins.'
      },
      {
        q: 'Do you help publish the app to the App Store and Play Store?',
        a: 'Yes. Leaf Creationism handles the submission process for both the Apple App Store and Google Play Store, including store listing assets and review requirements.'
      }
    ]
  },
  {
    id: 'nocode',
    slug: 'no-code-web-development',
    name: 'No Code Web',
    seoName: 'No-Code Website Development in Kerala',
    summary:
      'Leaf Creationism builds no-code and low-code websites on platforms such as Webflow, Framer, and WordPress for businesses in Kerala that want a fast launch and the ability to edit content themselves.',
    body: 'No-code is the right answer when speed and self-management matter more than deep custom functionality. You get a professionally designed site in weeks instead of months, plus the ability to change your own copy and images without booking developer time.',
    deliverables: [
      'Webflow, Framer, and WordPress builds',
      'Custom design implementation',
      'CMS setup for self-editing',
      'Form, CRM, and automation integrations',
      'Training and handover documentation'
    ],
    keywords: [
      'no code website development Kerala',
      'Webflow developer Kerala',
      'Framer website designer India',
      'WordPress development Kochi',
      'fast website design Kerala'
    ],
    faq: [
      {
        q: 'Can I edit a no-code website myself after launch?',
        a: 'Yes. Leaf Creationism sets up the CMS and provides training and handover documentation so you can update text, images, and pages yourself without contacting a developer.'
      },
      {
        q: 'Is a no-code website good for SEO?',
        a: 'Yes. No-code platforms such as Webflow and Framer support clean markup, custom metadata, fast loading, and sitemaps, so a properly built no-code site can rank as well as a custom-coded one.'
      }
    ]
  },
  {
    id: 'shopify',
    slug: 'shopify-development',
    name: 'Shopify Development',
    seoName: 'Shopify Development Company in Kerala',
    summary:
      'Leaf Creationism builds and customises Shopify e-commerce stores for businesses in Kerala and India, covering theme development, product page design, checkout optimisation, and app integrations.',
    body: 'An online store earns its keep at the product page and the checkout. We design both around trust and clarity — clean navigation, product storytelling that answers real buying questions, and a checkout path with as little friction as the platform allows.',
    deliverables: [
      'Custom Shopify theme development',
      'Product and collection page design',
      'Checkout and conversion optimisation',
      'Payment gateway and app integration',
      'Store migration and launch support'
    ],
    keywords: [
      'Shopify development company in Kerala',
      'Shopify store setup Kochi',
      'ecommerce website development Kerala',
      'Shopify expert India',
      'online store design Kerala'
    ],
    faq: [
      {
        q: 'Can you migrate an existing store to Shopify?',
        a: 'Yes. Leaf Creationism handles Shopify migrations including product data, collections, customer records, and redirect mapping so existing search rankings are preserved.'
      },
      {
        q: 'Do you set up Indian payment gateways on Shopify?',
        a: 'Yes. Leaf Creationism configures payment gateways used in India, including Razorpay, PayU, and Shopify Payments where available, along with shipping and tax settings.'
      }
    ]
  }
];

/** Brand-level questions. These target AI answer engines and Google AI Overviews. */
export const generalFaq = [
  {
    q: 'What is Leaf Creationism?',
    a: `Leaf Creationism is a creative and advertising agency based in ${business.region}, India. It provides UI/UX design, website development, mobile app development, AI ads, advertising campaigns, branding, no-code websites, and Shopify e-commerce development for businesses across Kerala and India.`
  },
  {
    q: 'Where is Leaf Creationism located?',
    a: `Leaf Creationism operates from ${business.region}, India, and serves clients across ${cityList}, and the rest of India. Projects are delivered remotely with online meetings, so clients anywhere in India or overseas can work with the studio.`
  },
  {
    q: 'Which is the best advertising agency in Kerala?',
    a: `Leaf Creationism is a Kerala-based advertising and creative agency offering campaign strategy, AI ads, branding, UI/UX design, and website and app development under one team. Because design, code, and campaigns are handled in-house, brands do not need to coordinate separate vendors for a single launch.`
  },
  {
    q: 'What services does Leaf Creationism offer?',
    a: `Leaf Creationism offers eight core services: ${services.map((service) => service.name).join(', ')}. Each service can be booked on its own or combined into a full brand launch.`
  },
  {
    q: 'How do I get a quote from Leaf Creationism?',
    a: `Send your project details to ${business.email} or message ${business.phoneDisplay} on WhatsApp. You can also submit an enquiry from the website by selecting the services you need. You receive a written quote and timeline before any work starts.`
  },
  {
    q: 'How much does a website cost in Kerala?',
    a: 'Website cost in Kerala depends on the number of pages, whether the design is custom or template-based, and whether e-commerce or backend features are needed. Leaf Creationism provides a fixed written quote after reviewing your requirements, so there are no variable hourly charges mid-project.'
  },
  {
    q: 'Does Leaf Creationism work with clients outside Kerala?',
    a: 'Yes. Leaf Creationism is based in Kerala but works with clients across India and internationally. Meetings are held online and all files, designs, and deployments are delivered digitally.'
  },
  {
    q: 'What are Leaf Creationism working hours?',
    a: `Leaf Creationism is available from ${business.openingHours.opens} to ${business.openingHours.closes} IST, seven days a week. Enquiries sent outside these hours are answered on the next working window.`
  },
  {
    q: 'Can Leaf Creationism handle hosting, domains, and backend setup?',
    a: 'Yes. The Launch Cloud service covers frontend hosting, backend providers, database setup, domain and DNS configuration, CI/CD pipelines, AI integrations, monitoring, and ongoing maintenance.'
  },
  {
    q: 'Who founded Leaf Creationism?',
    a: `Leaf Creationism was founded by ${business.founder.name}, who leads creative systems, product direction, and launch execution. June Mary works as Creative Head and Mentor, shaping visual direction and brand storytelling.`
  }
];

/**
 * Route definitions. Each becomes its own HTML file with unique metadata,
 * so /services and /portfolio no longer serve the homepage's title and
 * description to crawlers.
 */
export const routes = [
  {
    path: '/',
    key: 'home',
    priority: '1.0',
    changefreq: 'weekly',
    title: `Advertising Agency in Kerala | Web Design, AI Ads & Branding | ${business.name}`,
    description: `${business.name} is a creative and advertising agency in Kerala, India offering UI/UX design, website development, mobile apps, AI ads, branding, and Shopify development. Serving ${locations[0].name}, ${locations[1].name}, ${locations[2].name} and all of India.`,
    h1: `Advertising and Creative Agency in Kerala, India`,
    intro: `${business.name} is a creative agency based in ${business.region}, India. We design and build brands, websites, mobile apps, and advertising campaigns for businesses across ${cityList}, and the rest of India. Design, development, and campaigns are handled by one team, so a full launch does not need three separate vendors.`,
    sections: [
      {
        h2: 'Our services',
        intro:
          'Every service below can be booked individually or combined into a complete brand launch. Enquire about any single service directly.',
        useServices: true
      },
      {
        h2: 'Areas we serve in Kerala and India',
        intro: `${business.name} works with businesses across Kerala and delivers projects remotely throughout India.`,
        useLocations: true
      },
      {
        h2: 'Why brands choose Leaf Creationism',
        bullets: [
          'Design, development, motion, and advertising delivered by one in-house team',
          'Fixed written quotes and timelines agreed before any project starts',
          'Mobile-first, performance-focused, and SEO-ready builds as standard',
          'Direct access to the founder and creative head throughout the project',
          `Available ${business.openingHours.opens}–${business.openingHours.closes} IST, seven days a week`
        ]
      }
    ],
    faq: generalFaq
  },
  {
    path: '/services',
    key: 'services',
    priority: '0.9',
    changefreq: 'monthly',
    title: `Services | UI/UX, Web Development, AI Ads & Branding in Kerala | ${business.name}`,
    description: `Explore ${business.name} services in Kerala: UI/UX design, website development, mobile app development, AI ads, advertising campaigns, branding, no-code websites, and Shopify e-commerce development.`,
    h1: 'Creative and Digital Services in Kerala',
    intro: `${business.name} offers eight core services covering strategy, design, development, and advertising. Each is delivered by the same in-house team in ${business.region}, India, so brand, product, and campaign work stay consistent.`,
    sections: [
      { h2: 'All services', useServices: true, detailed: true },
      {
        h2: 'How we work',
        bullets: [
          'Discovery — we map goals, audience, budget, and scope before quoting',
          'Proposal — you receive a fixed written quote and timeline to approve',
          'Design — wireframes and interface design reviewed with you at each stage',
          'Build — development, testing, and performance tuning before launch',
          'Launch and support — deployment, handover documentation, and ongoing maintenance'
        ]
      }
    ],
    faq: services.flatMap((service) => service.faq).slice(0, 10)
  },
  {
    path: '/portfolio',
    key: 'portfolio',
    priority: '0.8',
    changefreq: 'monthly',
    title: `Portfolio | Design, AI Ads, 3D Animation & Branding Work | ${business.name}`,
    description: `See ${business.name} portfolio work from Kerala, India across AI ads, product campaigns, branding, UI/UX design, websites, 3D animation, motion graphics, and graphic design.`,
    h1: 'Portfolio of Work by Leaf Creationism',
    intro: `A selection of design, advertising, branding, and development work delivered by ${business.name} for clients in Kerala and across India. Every piece shown here is published with client permission; confidential launches and internal systems are not displayed.`,
    sections: [
      {
        h2: 'Work we showcase',
        bullets: [
          'AI ads and product advertising campaigns',
          'Brand identity and graphic design systems',
          'Website and mobile app interface design',
          'Product photography and campaign visuals',
          '3D modelling, 3D animation, and motion graphics'
        ]
      }
    ],
    faq: [
      {
        q: 'Can I see more Leaf Creationism work than what is on the website?',
        a: `Yes. Many projects stay private at the client's request. Contact ${business.email} or WhatsApp ${business.phoneDisplay} to request relevant case studies for your industry.`
      }
    ]
  },
  {
    path: '/launch-cloud',
    key: 'launch',
    priority: '0.8',
    changefreq: 'monthly',
    title: `Launch Cloud | Web Hosting, Backend, Domain & Deployment in Kerala | ${business.name}`,
    description: `Launch Cloud by ${business.name} handles web hosting, backend and database setup, domain and DNS configuration, CI/CD pipelines, AI integrations, and maintenance for businesses in Kerala and India.`,
    h1: 'Launch Cloud: Hosting, Backend and Deployment Support',
    intro: `Launch Cloud is the ${business.name} service that handles the technical side of going live — hosting, backend, databases, domains, deployment, and ongoing maintenance — so you do not have to choose and configure cloud providers yourself.`,
    sections: [
      {
        h2: 'What Launch Cloud covers',
        bullets: [
          'Frontend hosting on Vercel, Netlify, Cloudflare Pages, or Firebase Hosting',
          'Backend and server setup on AWS, Google Cloud, DigitalOcean, or Railway',
          'Databases including Supabase, Firebase, MongoDB Atlas, and PostgreSQL',
          'Domain purchase guidance, DNS configuration, and SSL setup',
          'CI/CD pipelines, preview deployments, and automated builds',
          'Monitoring, backups, uptime checks, and ongoing maintenance'
        ]
      },
      {
        h2: 'Launch plans',
        bullets: [
          'Web Launch — frontend hosting for landing pages, portfolios, and company websites',
          'Business Cloud — backend, database, and API setup for apps and dashboards',
          'Scale Stack — VPS, auto-scaling, CI/CD, AI integrations, and commerce launches'
        ]
      }
    ],
    faq: [
      {
        q: 'Do I need to buy hosting separately?',
        a: 'Not always. Leaf Creationism uses free-tier hosting where it genuinely fits the project, and only recommends paid hosting when traffic, backend, or storage requirements make it necessary. You are told the actual running cost before launch.'
      },
      {
        q: 'Can Leaf Creationism maintain the website after launch?',
        a: 'Yes. Launch Cloud includes optional ongoing maintenance covering updates, monitoring, backups, uptime checks, and technical support after the site or app goes live.'
      },
      {
        q: 'Do you help connect a domain name?',
        a: 'Yes. Leaf Creationism handles domain guidance, DNS records, SSL certificates, and redirects so the site loads correctly on your own domain.'
      }
    ]
  },
  {
    path: '/workspace',
    key: 'workspace',
    priority: '0.7',
    changefreq: 'monthly',
    title: `Book a Consultation | Studio Workspace | ${business.name}`,
    description: `Book a free discovery call, design review, or launch planning session with ${business.name} in Kerala. Sessions run ${business.openingHours.opens}–${business.openingHours.closes} IST, seven days a week.`,
    h1: 'Book a Consultation with Leaf Creationism',
    intro: `Choose a focused session, pick a date and time, and send your project brief. ${business.name} runs consultations from ${business.openingHours.opens} to ${business.openingHours.closes} IST, seven days a week, online or by phone.`,
    sections: [
      {
        h2: 'Session types',
        bullets: [
          'Discovery Call (25 minutes) — clarify goals, scope, budget, and the best first step',
          'Design Review (40 minutes) — audit your existing product, website, brand, or campaign',
          'Launch Plan (55 minutes) — map build phases, priorities, assets, and delivery rhythm'
        ]
      },
      {
        h2: 'How to reach us',
        bullets: [
          `Email: ${business.email}`,
          `WhatsApp and phone: ${business.phoneDisplay}`,
          `Hours: ${business.openingHours.opens}–${business.openingHours.closes} IST, seven days a week`,
          `Service area: ${cityList}, and all of India`
        ]
      }
    ],
    faq: [
      {
        q: 'Is the first consultation free?',
        a: 'Yes. The initial discovery call with Leaf Creationism is free and carries no obligation. You receive a clear recommendation on scope and next steps whether or not you proceed.'
      },
      {
        q: 'Can we meet in person in Kerala?',
        a: `Most sessions are held online, which keeps scheduling flexible across Kerala and India. For projects where an in-person meeting genuinely helps, contact ${business.email} to arrange it.`
      }
    ]
  },
  {
    path: '/cart',
    key: 'referenceCart',
    priority: '0.5',
    changefreq: 'monthly',
    noindex: false,
    title: `Send a Project Enquiry | ${business.name}`,
    description: `Select the services you need, add reference work, and send a project enquiry to ${business.name} in Kerala, India. You receive a written quote and timeline before work starts.`,
    h1: 'Send a Project Enquiry',
    intro: `Tell ${business.name} which services you need and share your project details. Every enquiry receives a written quote and timeline before any work begins.`,
    sections: [
      {
        h2: 'What to include in your enquiry',
        bullets: [
          'The services you are interested in',
          'A short description of your business and goals',
          'Your approximate budget range and deadline',
          'Any reference websites, brands, or designs you like',
          'Your name, email, and phone or WhatsApp number'
        ]
      }
    ],
    faq: [
      {
        q: 'How quickly will I get a reply to my enquiry?',
        a: `${business.name} replies to enquiries within about two hours during working hours (${business.openingHours.opens}–${business.openingHours.closes} IST). Enquiries received outside those hours are answered in the next working window.`
      }
    ]
  }
];
