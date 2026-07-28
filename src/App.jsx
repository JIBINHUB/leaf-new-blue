import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Mail, 
  Home, 
  Calendar, 
  FolderOpen, 
  Briefcase,
  Check,
  ArrowUpRight,
  MonitorSmartphone,
  PenTool,
  Megaphone,
  Cpu,
  Layers,
  Search,
  FileText,
  X,
  ArrowRight,
  Blocks,
  Smartphone,
  Target,
  Zap,
  Hexagon,
  Command,
  Globe,
  Shield,
  Lock,
  MapPin,
  Send,
  ChevronDown,
  Clock,
  Volume2,
  VolumeX,
  ShoppingBag,
  Server,
  Cloud,
  Database,
  Film,
  Activity,
  Plus
} from 'lucide-react';

// Custom Icon Component using the company logo
const LeafIcon = ({ size = 24, className = "" }) => (
  <div 
    className={className} 
    style={{ 
      width: size, 
      height: size, 
      backgroundColor: 'currentColor', // Inherits text color classes for seamless hover effects
      WebkitMaskImage: 'url(/assets/brand/leaf-creationism-logo-white.png)',
      WebkitMaskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskImage: 'url(/assets/brand/leaf-creationism-logo-white.png)',
      maskSize: 'contain',
      maskRepeat: 'no-repeat',
      maskPosition: 'center',
    }} 
  />
);

// Standardized WhatsApp Vector Icon
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const PortfolioHeartIcon = ({ active = false }) => (
  <svg className="portfolio-action-icon" viewBox="0 0 28 28" aria-hidden="true">
    <path
      d="M14 24.15S4.25 18.62 4.25 10.9c0-3.08 2.34-5.4 5.22-5.4 1.88 0 3.52 1.02 4.53 2.54 1.01-1.52 2.65-2.54 4.53-2.54 2.88 0 5.22 2.32 5.22 5.4 0 7.72-9.75 13.25-9.75 13.25Z"
      fill={active ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2.15"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PortfolioShareIcon = () => (
  <svg className="portfolio-action-icon" viewBox="0 0 28 28" aria-hidden="true">
    <path
      d="M24.05 4.2 11.52 16.74"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.05 4.2 17.1 24.05a.72.72 0 0 1-1.34.08l-4.22-7.38-7.38-4.22a.72.72 0 0 1 .08-1.34L24.05 4.2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PortfolioReferenceIcon = ({ active = false }) => (
  <svg className="portfolio-action-icon portfolio-cart-icon" viewBox="0 0 28 28" aria-hidden="true">
    <path
      d="M4.35 5.8h2.55l1.35 11.72a2.42 2.42 0 0 0 2.39 2.05h7.15a2.42 2.42 0 0 0 2.38-2.01l1.38-8.01H8.35"
      fill={active ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2.15"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.08 23.15h.08M18.15 23.15h.08"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.25 14.25h4.75"
      fill="none"
      stroke={active ? "#fff" : "currentColor"}
      strokeWidth="1.9"
      strokeLinecap="round"
    />
  </svg>
);

const navPathMap = {
  home: '/',
  services: '/services',
  calendar: '/schedule',
  projects: '/projects',
  launch: '/launch-cloud',
  portfolio: '/portfolio',
  referenceCart: '/cart'
};

const pathNavMap = Object.entries(navPathMap).reduce((map, [nav, path]) => {
  map[path] = nav;
  return map;
}, {});

const getNavFromPath = () => {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return pathNavMap[path] || 'home';
};

const pageSeo = {
  home: {
    path: '/',
    title: 'Leaf Creationism | Advertising Agency, AI Ads, Web Design & Branding in Kerala',
    description: 'Leaf Creationism is a Kerala creative agency for advertising, AI ads, UI/UX design, web and app development, branding, 3D animation, motion graphics, and graphic design.'
  },
  services: {
    path: '/services',
    title: 'Services | UI/UX, Web Development, AI Ads, 3D Animation & Graphic Design Kerala',
    description: 'Explore Leaf Creationism services in Kerala: strategy, brand campaigns, UI/UX design, websites, apps, AI ads, Shopify, 3D modeling, animation, motion graphics, and graphic design.'
  },
  calendar: {
    path: '/schedule',
    title: 'Schedule Appointment | Leaf Creationism Kerala Creative Agency',
    description: 'Book an online appointment with Leaf Creationism for advertising, UI/UX design, website development, AI ads, motion graphics, branding, and launch planning in Kerala.'
  },
  projects: {
    path: '/projects',
    title: 'Active Projects | Leaf Creationism Studio Workroom',
    description: 'See Leaf Creationism active project room for current web, animation, product, advertising, and creative launch work handled by our Kerala studio.'
  },
  launch: {
    path: '/launch-cloud',
    title: 'Launch Cloud | Hosting, Backend, Database, CI/CD & Creative Launch Plans Kerala',
    description: 'Launch Cloud by Leaf Creationism helps brands choose Vercel, Netlify, Cloudflare, AWS, Google Cloud, Supabase, Firebase, MongoDB, CI/CD, AI integrations, and maintenance.'
  },
  portfolio: {
    path: '/portfolio',
    title: 'Portfolio | Leaf Creationism AI Ads, Photoshoots, 3D Animation & Design Work',
    description: 'Browse permission-based Leaf Creationism portfolio work across AI ads, photoshoots, motion graphics, UI/UX, graphic design, 3D modeling, and brand visuals.'
  },
  referenceCart: {
    path: '/cart',
    title: 'Project Cart | Submit Your Leaf Creationism Enquiry',
    description: 'Review selected services, appointment details, and portfolio references before submitting a private project enquiry to Leaf Creationism.'
  }
};

const CylinderCarousel = React.forwardRef(({
  images,
  className = '',
  containerClassName = '',
  cardClassName = '',
  animationDuration = 32,
  cardWidth = 250,
  ...props
}, ref) => {
  const cardCount = images.length;
  const customStyle = {
    '--n': cardCount,
    '--w': `${cardWidth}px`,
    '--ba': 'calc(1turn / var(--n))',
    '--anim-dur': `${animationDuration}s`
  };

  return (
    <div
      ref={ref}
      className={`advantage-cylinder-carousel ${className}`.trim()}
      style={{
        perspective: '35em',
        maskImage: 'linear-gradient(90deg, transparent, #000 20% 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 20% 80%, transparent)'
      }}
      {...props}
    >
      <div
        className={`advantage-cylinder-track ${containerClassName}`.trim()}
        style={{
          ...customStyle,
          transformStyle: 'preserve-3d',
          animation: 'ry var(--anim-dur) linear infinite'
        }}
      >
        <style>
          {`
            @keyframes ry {
              to { transform: rotateY(1turn); }
            }
          `}
        </style>

        {images.map((image, index) => (
          <img
            key={`${image.src}-${index}`}
            src={image.src}
            alt={image.alt || `Leaf Creationism project ${index + 1}`}
            className={`advantage-cylinder-card ${cardClassName}`.trim()}
            style={{
              width: 'var(--w)',
              aspectRatio: '7 / 10',
              '--i': index,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(calc(var(--i) * var(--ba))) translateZ(calc(-1 * (0.5 * var(--w) + 0.5em) / tan(0.5 * var(--ba))))'
            }}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </div>
  );
});

CylinderCarousel.displayName = 'CylinderCarousel';

const App = () => {
  const [activeNav, setActiveNav] = useState(getNavFromPath);
  const [activeAd, setActiveAd] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(['uiux']);
  const [activeCategory, setActiveCategory] = useState('uiux'); 
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);
  const [selectedScheduleType, setSelectedScheduleType] = useState('discovery');
  const [selectedAppointmentDay, setSelectedAppointmentDay] = useState(1);
  const [selectedAppointmentTime, setSelectedAppointmentTime] = useState('11:30 AM');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [likedPortfolioItems, setLikedPortfolioItems] = useState([]);
  const [sharedPortfolioItem, setSharedPortfolioItem] = useState('');
  const [unmutedPortfolioItems, setUnmutedPortfolioItems] = useState([]);
  const [portfolioAudioAvailability, setPortfolioAudioAvailability] = useState({});
  const [portfolioMediaRatios, setPortfolioMediaRatios] = useState({});
  const [referencePortfolioItems, setReferencePortfolioItems] = useState([]);
  const [referenceCartPulse, setReferenceCartPulse] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [isLoaderExiting, setIsLoaderExiting] = useState(false);
  const [isLoaderPageReady, setIsLoaderPageReady] = useState(false);
  const [isLoaderVideoFinished, setIsLoaderVideoFinished] = useState(false);
  const [isLoaderVideoPlaying, setIsLoaderVideoPlaying] = useState(false);
  const [referenceForm, setReferenceForm] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  });
  const [accessForm, setAccessForm] = useState({
    name: '',
    company: '',
    service: '',
    email: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [headerStatusIndex, setHeaderStatusIndex] = useState(0);
  const [activeStudioHead, setActiveStudioHead] = useState(0);
  const studioHeadsTouchStartX = useRef(null);
  const [isMobileViewport, setIsMobileViewport] = useState(() => (
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 639px)').matches : false
  ));
  const studioStartDate = new Date(2025, 4, 8);
  const studioToday = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
  const studioAnniversaryThisYear = new Date(studioToday.getFullYear(), studioStartDate.getMonth(), studioStartDate.getDate());
  const studioActiveYears = Math.max(
    0,
    studioToday.getFullYear() - studioStartDate.getFullYear() - (studioToday < studioAnniversaryThisYear ? 1 : 0)
  );
  const studioLastAnniversary = new Date(
    studioStartDate.getFullYear() + studioActiveYears,
    studioStartDate.getMonth(),
    studioStartDate.getDate()
  );
  const studioActiveExtraDays = Math.max(0, Math.floor((studioToday - studioLastAnniversary) / 86400000));
  const studioExperienceParts = [
    `${studioActiveYears} ${studioActiveYears === 1 ? 'YEAR' : 'YEARS'}`,
    `${studioActiveExtraDays} ${studioActiveExtraDays === 1 ? 'DAY' : 'DAYS'}`
  ];
  const studioExperienceLabel = studioExperienceParts.join(' ');

  const clientLogos = [
    { name: "Elevate", icon: Layers },
    { name: "Nexus", icon: Hexagon },
    { name: "Quantum", icon: Cpu },
    { name: "Aura", icon: Command },
    { name: "Stratos", icon: Command },
    { name: "Vertex", icon: Target },
    { name: "Nova", icon: Zap },
    { name: "Global", icon: Globe },
    { name: "Secure", icon: Shield },
    { name: "Pulse", icon: Activity }
  ];
  const globalPartnerBubbles = [
    { name: "Elevate", icon: Layers, color: "#22c55e", angle: "-72deg", counter: "72deg", size: "2.65rem", delay: "-0.5s" },
    { name: "Nexus", icon: Hexagon, color: "#8b5cf6", angle: "-52deg", counter: "52deg", size: "2.25rem", delay: "-1.2s" },
    { name: "Quantum", icon: Cpu, color: "#ef4444", angle: "-32deg", counter: "32deg", size: "2.7rem", delay: "-2.1s" },
    { name: "Aura", icon: Command, color: "#ec4899", angle: "-11deg", counter: "11deg", size: "2.5rem", delay: "-0.9s" },
    { name: "Stratos", icon: Globe, color: "#2563eb", angle: "11deg", counter: "-11deg", size: "2.65rem", delay: "-1.8s" },
    { name: "Vertex", icon: Target, color: "#f97316", angle: "32deg", counter: "-32deg", size: "2.3rem", delay: "-2.8s" },
    { name: "Secure", icon: Shield, color: "#f43f5e", angle: "52deg", counter: "-52deg", size: "2.55rem", delay: "-1.5s" },
    { name: "Pulse", icon: Activity, color: "#06b6d4", angle: "72deg", counter: "-72deg", size: "2.15rem", delay: "-3.4s" }
  ];

  const localLeafLogoWhite = "/assets/brand/leaf-creationism-logo-white.png";
  const localLoaderVideo = "/assets/media/leaf-logo-motion-loader-hq.mp4?v=hq-v6";
  const localAdVideo = "/assets/media/leaf-ad-carousel.mp4";
  const localFaqVideo = "/assets/media/faq-vantadrop.mp4";
  const localServicesHeroVideo = "/assets/media/services-hero-showcase.mp4";
  const studioHeads = [
    {
      name: 'JIBIN',
      role: 'Founder / Creative Head',
      image: '/assets/team/jibin-founder-hq.jpg',
      alt: 'Jibin, Founder and Creative Head of Leaf Creationism',
      description: 'Leads creative systems, product direction, client strategy, and launch execution.'
    },
    {
      name: 'XANDRA',
      role: 'Creative Head / Mentor',
      image: '/assets/team/xandra-creative-head.jpg',
      alt: 'Xandra, Creative Head and Mentor at Leaf Creationism',
      description: 'Shapes visual direction, premium taste, storytelling, and brand experience mentoring.'
    }
  ];
  const selectedStudioHead = studioHeads[activeStudioHead];

  const promoBanners = [
    { 
      id: 1, 
      tag: "Limited Time",
      title: "Flat 20% Off UI/UX", 
      desc: "Elevate your digital presence today.",
      bgColor: "#2050E3",
      theme: "dark",
      img: "/assets/ads/uiux-offer.jpg",
      position: "55% 58%"
    },
    { 
      id: 2, 
      tag: "New Launch",
      title: "Next-Gen AI Ads", 
      desc: "Smart campaigns that convert.",
      bgColor: "#F4EFE6",
      theme: "light",
      video: localAdVideo
    },
    { 
      id: 3, 
      tag: "Award Winning",
      title: "Best UI/UX Design", 
      desc: "Recognized for premium digital experiences.",
      bgColor: "#18181b",
      theme: "dark",
      img: "/assets/ads/best-uiux-design.webp",
      position: "50% 55%"
    },
    { 
      id: 4, 
      tag: "Exclusive",
      title: "Brand Identity Lift", 
      desc: "Redefine your market presence.",
      bgColor: "#f59e0b", 
      theme: "dark",
      img: "/assets/ads/brand-identity-lift.jpg?v=strategy-v2",
      position: "38% 50%"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAd((prev) => (prev + 1) % promoBanners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const syncFromPath = () => setActiveNav(getNavFromPath());
    window.addEventListener('popstate', syncFromPath);
    syncFromPath();

    return () => window.removeEventListener('popstate', syncFromPath);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const meta = pageSeo[activeNav] || pageSeo.home;
    const absoluteUrl = `https://leafcreationism.in${meta.path}`;
    document.title = meta.title;

    const setMeta = (selector, attr, value) => {
      const tag = document.querySelector(selector);
      if (tag) tag.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', absoluteUrl);
    setMeta('meta[name="twitter:title"]', 'content', meta.title);
    setMeta('meta[name="twitter:description"]', 'content', meta.description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', absoluteUrl);
  }, [activeNav]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 639px)');
    const syncViewport = () => setIsMobileViewport(media.matches);

    syncViewport();
    if (media.addEventListener) {
      media.addEventListener('change', syncViewport);
    } else {
      media.addListener(syncViewport);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', syncViewport);
      } else {
        media.removeListener(syncViewport);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const videos = Array.from(document.querySelectorAll('video'));
    const mobile = isMobileViewport;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        const shouldPlay = entry.isIntersecting && entry.intersectionRatio >= (mobile ? 0.35 : 0.08);

        if (shouldPlay) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, {
      rootMargin: mobile ? '16px 0px' : '120px 0px',
      threshold: mobile ? [0, 0.35, 0.7] : [0, 0.08, 0.4]
    });

    videos.forEach((video) => {
      video.playsInline = true;
      video.muted = video.hasAttribute('data-portfolio-video') ? video.muted : true;
      video.preload = video.hasAttribute('data-portfolio-video') ? 'none' : (mobile ? 'none' : 'metadata');
      observer.observe(video);
    });

    return () => observer.disconnect();
  }, [activeNav, activeFaq, isMobileViewport]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const markPageReady = () => setIsLoaderPageReady(true);

    if (document.readyState === 'complete') {
      markPageReady();
    } else {
      window.addEventListener('load', markPageReady, { once: true });
    }

    const playbackFallback = window.setTimeout(() => {
      setIsLoaderVideoFinished(true);
      setIsLoaderPageReady(true);
    }, 30000);

    return () => {
      window.clearTimeout(playbackFallback);
      window.removeEventListener('load', markPageReady);
    };
  }, []);

  useEffect(() => {
    if (!isLoaderPageReady || !isLoaderVideoFinished || !showLoader) return;

    setIsLoaderExiting(true);
    const hideTimer = window.setTimeout(() => setShowLoader(false), 760);
    return () => window.clearTimeout(hideTimer);
  }, [isLoaderPageReady, isLoaderVideoFinished, showLoader]);

  const toggleStep = (id) => {
    setCompletedSteps(prev => 
      prev.includes(id) ? prev.filter(stepId => stepId !== id) : [...prev, id]
    );
  };

  const navigateTo = (id, options = {}) => {
    setActiveNav(id);
    if (typeof window !== 'undefined') {
      const nextPath = navPathMap[id] || '/';
      if (window.location.pathname !== nextPath) {
        window.history[options.replace ? 'replaceState' : 'pushState']({ activeNav: id }, '', nextPath);
      }
    }
    window.setTimeout(() => window.scrollTo(0, 0), 0);
  };

  const solutionsList = [
    { id: 'uiux', title: 'UI/UX Design', desc: 'User-centric interfaces', icon: PenTool },
    { id: 'web', title: 'Websites & Apps', desc: 'Scalable digital platforms', icon: MonitorSmartphone },
    { id: 'ai', title: 'AI Ads', desc: 'Smart, targeted campaigns', icon: Cpu },
    { id: 'adv', title: 'Advertising', desc: 'Brand growth strategies', icon: Megaphone },
    { id: 'brand', title: 'Branding', desc: 'Identity systems', icon: LeafIcon },
    { id: 'apps', title: 'Mobile Apps', desc: 'Native-feeling products', icon: Smartphone },
    { id: 'nocode', title: 'No Code Web', desc: 'Fast visual builds', icon: Blocks },
    { id: 'shopify', title: 'Shopify Dev', desc: 'Conversion stores', icon: ShoppingBag },
  ];

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'calendar', label: 'Schedule', icon: Calendar, hasNotification: true },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'launch', label: 'Launch Cloud', icon: Server },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
  ];
  const activeNavIndex = Math.max(0, navItems.findIndex((item) => item.id === activeNav));

  const serviceCategories = [
    { 
      id: 'uiux', name: 'UI/UX Design', icon: PenTool,
      title: "Making Apps Less Annoying.",
      heroDesc: "Stop giving your users a digital headache. We design interfaces so intuitive, even your grandma's cat could order pizza on them.",
      img: "/assets/services/uiux-3d.png",
      problem: "Your current app looks like it was built in 1998 by a stressed intern. Users are rage-clicking the 'Cancel' button when they mean 'Buy', and your bounce rate is higher than a kangaroo on a trampoline.",
      solution: "We sprinkle UX magic dust (deep user research, logical wireframing, and lots of coffee) to make customer journeys smoother than a freshly paved highway. Oh, and the UI? We make it so pretty it hurts.",
      process: [
        { step: "01", title: "Interrogation", desc: "We ask you uncomfortable questions about your target audience until we figure out what they actually want." },
        { step: "02", title: "Ugly Boxes", desc: "We draw wireframes. They look boring, but they prove the logic works before we make it pretty." },
        { step: "03", title: "Make it Sexy", desc: "We add the colors, the typography, and the glossy finish that makes users want to lick their screens." }
      ]
    },
    { 
      id: 'web', name: 'Web Dev', icon: MonitorSmartphone,
      title: "Websites That Don't Break.",
      heroDesc: "We write code so clean you could eat off it. Say goodbye to loading screens that last longer than a movie sequel.",
      img: "/assets/services/web-3d.png",
      problem: "Your website currently takes 14 seconds to load, half the buttons lead to 404 pages, and it looks like a Picasso painting when viewed on a mobile phone.",
      solution: "We build scalable, lightning-fast digital platforms using modern tech stacks. If a user blinks, the page has already loaded. Mobile responsive isn't a feature; it's a religion here.",
      process: [
        { step: "01", title: "Architecture", desc: "Planning the database and backend so it doesn't collapse when you get more than 3 visitors." },
        { step: "02", title: "Typing Fast", desc: "Our devs drink dangerous amounts of energy drinks and turn coffee into functional code." },
        { step: "03", title: "Bug Squashing", desc: "We aggressively hunt down glitches so your users don't have to." }
      ]
    },
    { 
      id: 'ai', name: 'AI Ads', icon: Cpu,
      title: "Robots Finding Customers.",
      heroDesc: "We unleash algorithmic sorcery to target people who didn't even know they wanted your product yet.",
      img: "/assets/services/ai-ads-3d.png",
      problem: "You are throwing money at Facebook and Google, hoping someone clicks your ad. It's basically a very expensive digital lottery ticket.",
      solution: "We let the machines do the heavy lifting. Predictive modeling, automated A/B testing, and AI-driven targeting that finds your perfect customer with terrifying accuracy.",
      process: [
        { step: "01", title: "Data Ingestion", desc: "We feed the AI everything about your past campaigns (even the embarrassing ones)." },
        { step: "02", title: "Machine Learning", desc: "The algorithm learns who loves your stuff and who ignores it." },
        { step: "03", title: "Total Domination", desc: "We deploy hyper-targeted ads that follow your ideal customer around the internet." }
      ]
    },
    { 
      id: 'adv', name: 'Advertising', icon: Megaphone,
      title: "Campaigns People Actually Notice.",
      heroDesc: "We build sharp, scroll-stopping campaigns that turn attention into leads, sales, and brand recall.",
      img: "/assets/services/advertising-3d.png",
      problem: "Your ads are blending into the feed. People scroll past them, platforms eat the budget, and the campaign report looks busy without proving real business impact.",
      solution: "We craft campaign strategy, creative direction, media angles, and performance loops so your message lands with the right people at the right time.",
      process: [
        { step: "01", title: "Audience Map", desc: "We identify the people most likely to care, click, enquire, and buy." },
        { step: "02", title: "Creative Angles", desc: "We shape offers, hooks, visuals, and copy that make the campaign impossible to ignore." },
        { step: "03", title: "Scale Loop", desc: "We read the signals, cut wasted spend, and push the winning ideas harder." }
      ]
    },
    { 
      id: 'brand', name: 'Branding', icon: LeafIcon,
      title: "More Than A Fancy Logo.",
      heroDesc: "We'll give your company a personality so magnetic, people will want to invite it to dinner.",
      img: "/assets/services/branding-3d.png",
      problem: "Your brand looks like everyone else's corporate clone. Your logo is generic, and your brand voice sounds like a robot reading a legal disclaimer.",
      solution: "We create cohesive visual identities and brand guidelines that scream 'We know exactly what we are doing.' You won't just get a logo; you'll get a vibe.",
      process: [
        { step: "01", title: "Soul Searching", desc: "Figuring out why your company exists (besides making money)." },
        { step: "02", title: "Visual Identity", desc: "Logos, colors, and fonts that actually make sense together." },
        { step: "03", title: "Brand Bible", desc: "A strict rulebook so your intern doesn't ruin the brand with comic sans." }
      ]
    },
    { 
      id: 'apps', name: 'Mobile Apps', icon: Smartphone,
      title: "Pocket-Sized Powerhouses.",
      heroDesc: "We build mobile apps so addictive, your users will forget to blink. From iOS to Android, we make sure it runs smoother than butter on a hot pan.",
      img: "/assets/services/mobile-apps-3d.png",
      problem: "Your current app concept is just a clunky mobile website disguised as an app. It crashes when you look at it funny, drains battery life, and is slowly racking up 1-star reviews.",
      solution: "We engineer native-feeling experiences that are blisteringly fast, deeply intuitive, and don't make people want to throw their phones into the ocean. Real apps for real humans.",
      process: [
        { step: "01", title: "The Blueprint", desc: "We map out every single swipe, tap, and gesture so the user never gets lost in a digital labyrinth." },
        { step: "02", title: "Building the Engine", desc: "We code a robust backend so your app doesn't spontaneously combust when more than two people log in at once." },
        { step: "03", title: "App Store Glory", desc: "We help you navigate Apple and Google's confusing approval processes so your app can finally live in the wild." }
      ]
    },
    { 
      id: 'nocode', name: 'No Code Web', icon: Blocks,
      title: "Websites Without The Wait.",
      heroDesc: "We build insanely fast, gorgeous websites using modern no-code wizardry. Because waiting 6 months for a developer to change a headline is so 2015.",
      img: "/assets/services/nocode-web-3d.png",
      problem: "Traditional dev agencies are quoting you the price of a small yacht and a timeline that ends sometime next century. And when it's done? You need a PhD in computer science just to update a typo.",
      solution: "We use elite no-code platforms to visually engineer your site in weeks, not months. It's pixel-perfect, lightning-fast, and we give you the power to edit it yourself without breaking the entire internet.",
      process: [
        { step: "01", title: "Visual Alchemy", desc: "We design and build simultaneously directly in the browser. No clunky handoffs from designer to developer." },
        { step: "02", title: "Brain Transplants", desc: "We wire up your forms, CRMs, and complex automations so your website actually does work while you sleep." },
        { step: "03", title: "Keys to the Castle", desc: "We hand over the site with a neat training guide so you can confidently hit 'Publish' on your own updates." }
      ]
    },
    { 
      id: 'shopify', name: 'Shopify Dev', icon: ShoppingBag,
      title: "Stores That Sell While You Sleep.",
      heroDesc: "We build polished Shopify storefronts, product systems, and checkout journeys that make buying feel effortless.",
      img: "/assets/services/shopify-3d.png",
      problem: "Your online store looks generic, loads slowly, and makes customers work too hard before checkout. Every awkward product page is quietly leaking revenue.",
      solution: "We design and develop Shopify stores with premium product pages, clean navigation, conversion-focused sections, app integrations, and a checkout path built for trust.",
      process: [
        { step: "01", title: "Store Strategy", desc: "We map products, offers, collections, customer journeys, and the features your store actually needs." },
        { step: "02", title: "Theme Build", desc: "We create a polished Shopify experience with custom sections, strong product storytelling, and responsive layouts." },
        { step: "03", title: "Launch & Optimize", desc: "We connect apps, test checkout, tune performance, and help you keep improving after launch." }
      ]
    },
  ];

  const activeCategoryData = serviceCategories.find(c => c.id === activeCategory);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const timer = window.setTimeout(() => {
      serviceCategories.forEach(({ img }) => {
        if (!img) return;
        const serviceImage = new Image();
        serviceImage.decoding = 'async';
        serviceImage.src = img;
      });
    }, 800);

    return () => window.clearTimeout(timer);
  }, []);

  const capabilities = [
    {
      id: 'strategy',
      title: 'Strategy',
      desc: 'We turn loose ideas into a clear product, brand, and growth direction before design or code begins.',
      tags: ['Research', 'Architecture', 'Positioning'],
      items: ['Research', 'Software Architecture', 'UI/UX Auditing', 'Product Strategy', 'Creative Strategy', 'Marketing and Competitive Analysis'],
      image: '/assets/capabilities/strategy-cartoon.png'
    },
    {
      id: 'brand',
      title: 'Brand & Campaign',
      desc: 'We shape how the brand looks, moves, sounds, and shows up across campaigns, launches, and everyday content.',
      tags: ['Brand Systems', 'Motion', 'Campaigns'],
      items: ['Explainer Videos', '3D Motion Design', 'Illustration and Iconography', 'Branding Strategy and Positioning'],
      image: '/assets/capabilities/brand-campaign-cartoon.png'
    },
    {
      id: 'product',
      title: 'Product',
      desc: 'We design digital products with usable flows, polished interfaces, fast prototypes, and a personality people remember.',
      tags: ['UX/UI', 'Prototyping', 'Systems'],
      items: ['Motion Design System', 'Prototyping and Iterative Testing', 'Personality and Tonality Setup', 'UX/UI Design'],
      image: '/assets/capabilities/product-cartoon.png'
    },
    {
      id: 'engineering',
      title: 'Engineering',
      desc: 'We build the product layer behind the brand: fast websites, apps, stores, AI workflows, and cloud-ready systems.',
      tags: ['Web', 'Apps', 'AI/ML'],
      items: ['DevOps and Cloud Management', 'Shopify Development', 'App Development', 'Web Development', 'AI/ML', 'Framer Development'],
      image: '/assets/capabilities/engineering-cartoon.png'
    }
  ];

  const servicePhases = [
    {
      title: 'Diagnose',
      desc: 'We find the real friction in your brand, product, website, store, or campaign before touching visuals.',
      icon: Search,
      colorA: 'rgba(16,185,129,0.36)',
      colorB: 'rgba(45,212,191,0.22)',
      colorC: 'rgba(5,150,105,0.72)'
    },
    {
      title: 'Design',
      desc: 'We shape the interface, story, structure, and motion into a system that feels clear and premium.',
      icon: PenTool,
      colorA: 'rgba(99,102,241,0.34)',
      colorB: 'rgba(168,85,247,0.22)',
      colorC: 'rgba(79,70,229,0.72)'
    },
    {
      title: 'Build',
      desc: 'We turn the approved direction into responsive pages, apps, stores, automations, and launch-ready assets.',
      icon: Blocks,
      colorA: 'rgba(14,165,233,0.34)',
      colorB: 'rgba(56,189,248,0.22)',
      colorC: 'rgba(2,132,199,0.72)'
    },
    {
      title: 'Scale',
      desc: 'We improve the system after launch with sharper content, better flows, and performance signals.',
      icon: Activity,
      colorA: 'rgba(245,158,11,0.34)',
      colorB: 'rgba(244,63,94,0.18)',
      colorC: 'rgba(217,119,6,0.72)'
    }
  ];
  const servicesFeatureVideo = localServicesHeroVideo;

  const serviceSpotlights = [
    {
      title: 'Brand Direction',
      kicker: 'Position',
      desc: 'Clear the message, offer, tone, and visual direction before the build begins.',
      video: localServicesHeroVideo,
      capabilityIndex: 0,
      icon: Target,
      characterName: 'The Strategist',
      characterMeta: 'Built for clarity'
    },
    {
      title: 'Digital Product',
      kicker: 'Experience',
      desc: 'Design the screens, journeys, prototypes, and interaction details people actually enjoy using.',
      video: localServicesHeroVideo,
      capabilityIndex: 2,
      icon: MonitorSmartphone,
      characterName: 'The Designer',
      characterMeta: 'Built for flow'
    },
    {
      title: 'Launch System',
      kicker: 'Build',
      desc: 'Create fast websites, apps, Shopify stores, and the technical layer needed to go live cleanly.',
      video: localServicesHeroVideo,
      capabilityIndex: 3,
      icon: Blocks,
      characterName: 'The Builder',
      characterMeta: 'Built for launch'
    },
    {
      title: 'Growth Engine',
      kicker: 'Scale',
      desc: 'Use campaigns, content, analytics, and iteration to keep the brand moving after launch.',
      video: localServicesHeroVideo,
      capabilityIndex: 1,
      icon: Activity,
      characterName: 'The Growth Mind',
      characterMeta: 'Built for scale'
    }
  ];

  const faqs = [
    { 
      q: "Are you just going to use a generic template for us?", 
      a: "Absolutely not. Templates are for bake sales and 2010 blogs. We engineer bespoke digital ecosystems from the ground up, tailored entirely to your brand's unique DNA and market position." 
    },
    { 
      q: "Why shouldn't I just hire my nephew who 'knows computers'?", 
      a: "Because cheap labor builds fragile infrastructure. We build highly scalable, conversion-focused platforms that won't crash the second your marketing campaign actually goes viral." 
    },
    { 
      q: "What happens if we hate the first design draft?", 
      a: "We don't do 'drafts'. Our initial deep-dive interrogation phase ensures we know your brand better than you do before we even open our design tools. But if we somehow miss? We iterate relentlessly until it's flawless." 
    },
    { 
      q: "Are you going to ghost us the second the site goes live?", 
      a: "We're an elite agency, not a bad Tinder date. We offer robust post-launch growth strategies, AI-driven ads, and ongoing maintenance retainers to keep your momentum accelerating." 
    },
    {
      q: "How fast can you actually build this?",
      a: "Faster than an in-house team, slower than a rushed cheap gig. Quality takes time, but our proprietary workflows and elite hybrid development models mean we ship premium products in weeks, not years."
    }
  ];

  const openServiceModal = (id) => {
    setActiveCategory(id);
    setShowServiceModal(true);
  };

  const indiaTime = currentTime.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
  const indiaHour = Number(new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    hour12: false
  }).format(currentTime));
  const isStudioOnline = indiaHour >= 10 && indiaHour < 21;
  const indiaTimeLabel = indiaTime.toUpperCase();
  const headerStatusMessages = [
    isStudioOnline ? 'LEAF ONLINE NOW' : 'LEAF OFFLINE NOW',
    isStudioOnline ? 'ACCEPTING NEW BRIEFS' : 'QUEUE OPENS NEXT WINDOW',
    isStudioOnline ? 'OFFLINE AT 9:00 PM' : 'ONLINE AT 10:00 AM'
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeaderStatusIndex((index) => (index + 1) % headerStatusMessages.length);
    }, 3800);

    return () => window.clearInterval(timer);
  }, [headerStatusMessages.length]);

  const homeStatusTickerItems = [
    'Available for new projects',
    '124 products launched',
    '86 global partners',
    '98% client retention',
    '1 year active',
    'leafcreationism@gmail.com',
    '+91 85890 38479',
    `${isStudioOnline ? 'Leaf online' : 'Leaf offline'} / ${indiaTime}`
  ];
  const scheduleTypes = [
    {
      id: 'discovery',
      title: 'Discovery Call',
      time: '25 min',
      icon: Search,
      accent: '#10b981',
      desc: 'Fast clarity on goals, scope, budget, audience, and the best first move.'
    },
    {
      id: 'design',
      title: 'Design Review',
      time: '40 min',
      icon: PenTool,
      accent: '#3b82f6',
      desc: 'Audit your product, website, brand flow, or campaign direction with practical next steps.'
    },
    {
      id: 'launch',
      title: 'Launch Plan',
      time: '55 min',
      icon: Zap,
      accent: '#f59e0b',
      desc: 'Map build phases, launch priorities, creative assets, and weekly execution rhythm.'
    }
  ];
  const selectedSchedule = scheduleTypes.find((type) => type.id === selectedScheduleType) || scheduleTypes[0];
  const SelectedScheduleIcon = selectedSchedule.icon;
  const appointmentDays = Array.from({ length: 7 }, (_, idx) => {
    const day = new Date(currentTime);
    day.setDate(day.getDate() + idx + 1);
    return {
      id: idx,
      label: day.toLocaleDateString('en-IN', { weekday: 'short', timeZone: 'Asia/Kolkata' }),
      date: day.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', timeZone: 'Asia/Kolkata' }),
      full: day.toLocaleDateString('en-IN', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' })
    };
  });
  const appointmentSlots = [
    { time: '10:30 AM', label: 'Fresh start', note: 'Good for first brief' },
    { time: '11:30 AM', label: 'Deep clarity', note: 'Best for strategy' },
    { time: '02:30 PM', label: 'Creative review', note: 'Best for design feedback' },
    { time: '04:00 PM', label: 'Build sync', note: 'Best for product planning' },
    { time: '07:30 PM', label: 'Founder window', note: 'Best for urgent decisions' }
  ];
  const selectedAppointment = appointmentDays.find((day) => day.id === selectedAppointmentDay) || appointmentDays[0];
  const selectedSlot = appointmentSlots.find((slot) => slot.time === selectedAppointmentTime) || appointmentSlots[0];
  const appointmentMessage = `Hi Leaf Creationism, I want to book a ${selectedSchedule.title} on ${selectedAppointment.full} at ${selectedSlot.time} IST.`;
  const appointmentMailHref = `mailto:leafcreationism@gmail.com?subject=${encodeURIComponent(`Appointment request: ${selectedSchedule.title}`)}&body=${encodeURIComponent(`${appointmentMessage}\n\nSession length: ${selectedSchedule.time}\nFocus: ${selectedSlot.note}`)}`;
  const appointmentWhatsAppHref = `https://wa.me/918589038479?text=${encodeURIComponent(appointmentMessage)}`;
  const scheduleWindows = [
    { day: 'Mon', window: '10:30 AM - 1:00 PM', focus: 'Discovery + scope' },
    { day: 'Tue', window: '2:00 PM - 6:30 PM', focus: 'Design reviews' },
    { day: 'Wed', window: '11:00 AM - 4:00 PM', focus: 'Product planning' },
    { day: 'Thu', window: '3:00 PM - 8:00 PM', focus: 'Launch strategy' },
    { day: 'Fri', window: '10:00 AM - 2:30 PM', focus: 'Client check-ins' }
  ];
  const schedulePrep = [
    'Project goal or business problem',
    'Existing website, app, or brand links',
    'Ideal launch date and budget range',
    'One competitor or reference you like'
  ];
  const projectRotationPool = [
    {
      title: '3D Brand Motion System',
      type: '3D Animation',
      status: 'In production',
      progress: 72,
      timeline: 'Launch window / 12 days',
      daysToLaunch: 12,
      desc: 'A motion identity kit with abstract 3D loops, launch visuals, reel-ready scenes, and social story assets.',
      tags: ['Cinema 4D feel', 'Motion loops', 'Launch assets'],
      icon: Film,
      preview: 'motion'
    },
    {
      title: 'Commerce Website Build',
      type: 'Full-stack Website',
      status: 'Frontend QA',
      progress: 84,
      timeline: 'Launch window / 8 days',
      daysToLaunch: 8,
      desc: 'A conversion-focused store with product pages, CMS sections, checkout trust blocks, and admin-ready content flow.',
      tags: ['React', 'Shopify logic', 'CMS'],
      icon: ShoppingBag,
      preview: 'web'
    },
    {
      title: 'SaaS Landing + Dashboard',
      type: 'Full-stack Website',
      status: 'Backend sync',
      progress: 63,
      timeline: 'Launch window / 18 days',
      daysToLaunch: 18,
      desc: 'A product website with onboarding, metrics dashboard, API-ready forms, and a clean founder-facing admin layer.',
      tags: ['Next.js style', 'Dashboard', 'API forms'],
      icon: MonitorSmartphone,
      preview: 'dashboard'
    },
    {
      title: 'Mobile App Experience Sprint',
      type: 'Mobile App UI/UX',
      status: 'Prototype review',
      progress: 58,
      timeline: 'Launch window / 21 days',
      daysToLaunch: 21,
      desc: 'A polished mobile product flow with onboarding, booking screens, account states, and app-like interaction patterns.',
      tags: ['App UX', 'Prototype', 'Design system'],
      icon: Smartphone,
      preview: 'dashboard'
    },
    {
      title: 'AI Ads Growth System',
      type: 'AI Advertising',
      status: 'Creative testing',
      progress: 69,
      timeline: 'Launch window / 14 days',
      daysToLaunch: 14,
      desc: 'A campaign engine with audience angles, AI-assisted creative variations, landing flow, and weekly performance readouts.',
      tags: ['AI ads', 'Creative tests', 'Growth'],
      icon: Cpu,
      preview: 'web'
    },
    {
      title: 'Brand Identity Launch Kit',
      type: 'Branding System',
      status: 'Asset handoff',
      progress: 78,
      timeline: 'Launch window / 10 days',
      daysToLaunch: 10,
      desc: 'A compact identity system with logo usage, color rules, social templates, launch banners, and brand presentation assets.',
      tags: ['Identity', 'Templates', 'Launch kit'],
      icon: PenTool,
      preview: 'motion'
    }
  ];
  const projectCycleBase = new Date(2026, 0, 1);
  const projectCycleIndex = Math.max(0, Math.floor((studioToday - projectCycleBase) / (14 * 86400000)));
  const activeProjects = Array.from({ length: 3 }, (_, idx) => (
    projectRotationPool[(projectCycleIndex + idx) % projectRotationPool.length]
  ));
  const projectCycleStart = new Date(projectCycleBase.getTime() + (projectCycleIndex * 14 * 86400000));
  const projectCycleEnd = new Date(projectCycleStart.getTime() + (13 * 86400000));
  const formatProjectDate = (date) => date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const projectCycleLabel = `${formatProjectDate(projectCycleStart)} - ${formatProjectDate(projectCycleEnd)}`;
  const projectLaunchQueue = [...activeProjects].sort((a, b) => a.daysToLaunch - b.daysToLaunch);
  const projectQaNext = activeProjects.find((project) => /qa|review|testing/i.test(project.status)) || projectLaunchQueue[0];
  const projectLaunchPrep = projectLaunchQueue[0];
  const projectAverageProgress = Math.round(activeProjects.reduce((total, project) => total + project.progress, 0) / activeProjects.length);
  const projectWeekFlow = [
    { day: 'Scope', value: '100%', height: '100%', tone: 'green' },
    { day: 'UX', value: '88%', height: '88%', tone: 'green' },
    { day: 'UI', value: '76%', height: '76%', tone: 'blue' },
    { day: 'Dev', value: '64%', height: '64%', tone: 'blue' },
    { day: 'CMS', value: '58%', height: '58%', tone: 'slate' },
    { day: 'QA', value: '42%', height: '42%', tone: 'slate' },
    { day: 'Ship', value: '28%', height: '28%', tone: 'green' }
  ];
  const projectStudioStats = [
    { value: '3', label: 'Active builds', text: 'Motion, commerce, and SaaS running in parallel.' },
    { value: '124', label: 'Products launched', text: 'From brand pages to conversion systems.' },
    { value: '98%', label: 'Client retention', text: 'Most work continues after the first launch.' },
    { value: studioExperienceLabel, label: 'Active experience', text: 'Started May 8, 2025 with a focused build process.' }
  ];
  const projectPrinciples = [
    { title: 'Visible progress', text: 'Every project gets clear milestones, asset states, and a next action before the next build cycle.' },
    { title: 'Design-led engineering', text: 'We keep the visual system, frontend behavior, backend logic, and launch flow connected.' },
    { title: 'Fast feedback loops', text: 'We review in short cycles so motion, pages, copy, and technical decisions do not drift.' }
  ];
  const projectLeadership = [
    {
      name: 'Creative Lead',
      role: 'Brand and Motion Direction',
      bio: 'Owns the creative point of view, motion language, visual quality, and the final feeling of every active project.',
      focus: ['Brand systems', '3D motion', 'Launch visuals'],
      accent: '#10b981'
    },
    {
      name: 'Product Lead',
      role: 'UX, Strategy and Project Flow',
      bio: 'Keeps the work tied to user goals, business priorities, page structure, and clear weekly decisions.',
      focus: ['UX logic', 'Roadmaps', 'Client reviews'],
      accent: '#3b82f6'
    },
    {
      name: 'Engineering Lead',
      role: 'Full-stack Build and Launch',
      bio: 'Connects frontend craft, backend logic, performance, CMS, Shopify, forms, and final deployment checks.',
      focus: ['Frontend', 'Backend', 'QA launch'],
      accent: '#a855f7'
    }
  ];
  const launchPlans = [
    {
      title: 'Web Launch',
      icon: Globe,
      label: 'For websites',
      badge: 'Most simple',
      price: 'Included',
      priceNote: 'with eligible website builds',
      desc: 'Frontend hosting setup for landing pages, portfolios, campaign sites, and fast company websites using the best free-friendly platform for the project.',
      platforms: ['Vercel', 'Netlify', 'Render', 'AWS Amplify', 'Firebase Hosting', 'Cloudflare Pages', 'GitHub Pages'],
      resources: ['1 production website', 'Free SSL setup', 'DNS + redirect check', '1 year domain guidance'],
      items: ['Deployment workflow', 'Static or SPA hosting', 'Basic performance pass', 'Analytics-ready structure', 'Launch handover']
    },
    {
      title: 'Business Cloud',
      icon: Database,
      label: 'For web apps',
      badge: 'Popular',
      price: 'Custom',
      priceNote: 'based on backend scope',
      desc: 'Managed launch planning for apps, dashboards, forms, databases, storage, and API-connected products.',
      platforms: ['AWS', 'Google Cloud', 'DigitalOcean', 'Linode', 'Railway', 'Render'],
      resources: ['API + database plan', 'Auth-ready structure', 'Environment variables', 'Backup approach'],
      items: ['Backend service mapping', 'Production and preview setup', 'Supabase, Firebase, MongoDB Atlas, PostgreSQL, or PlanetScale planning', 'Admin-ready flow', 'Security checklist']
    },
    {
      title: 'Scale Stack',
      icon: Server,
      label: 'For custom stacks',
      badge: 'Advanced',
      price: 'Managed',
      priceNote: 'cloud, VPS, or commerce launch',
      desc: 'A stronger launch path for VPS, cloud hosting, Shopify, custom servers, AI features, and multi-service brand systems.',
      platforms: ['AWS autoscaling', 'Google Cloud', 'DigitalOcean', 'Linode', 'Railway', 'Render', 'Custom VPS'],
      resources: ['Server setup support', 'Domain + DNS', 'Monitoring basics', 'Commerce-ready flow'],
      items: ['CI/CD pipeline', 'Auto-scaling plan', 'Custom AI integrations', '24/7 maintenance option', 'Shopify theme workflow', 'Launch QA']
    }
  ];
  const launchCreativeBundles = [
    {
      title: '3D Animation Launch',
      label: 'Motion identity',
      icon: Film,
      desc: '3D visuals, product loops, hero motion, launch reels, and high-impact animated brand assets.',
      includes: ['3D hero visuals', 'Product motion loops', 'Launch reel exports']
    },
    {
      title: 'Graphic Design System',
      label: 'Brand assets',
      icon: PenTool,
      desc: 'Posters, social layouts, brand templates, launch banners, and clean visual systems for campaigns.',
      includes: ['Social templates', 'Campaign graphics', 'Brand presentation']
    },
    {
      title: 'AI Ads Engine',
      label: 'Growth launch',
      icon: Cpu,
      desc: 'AI-assisted ad angles, landing page hooks, creative testing structure, and performance-ready campaigns.',
      includes: ['Ad creative routes', 'Landing page hooks', 'Testing framework']
    },
    {
      title: 'Motion Graphics Pack',
      label: 'Reels + ads',
      icon: Activity,
      desc: 'Animated explainers, reel graphics, kinetic text, service promos, and scroll-stopping ad motion.',
      includes: ['Kinetic typography', 'Ad motion cuts', 'Short-form assets']
    }
  ];
  const launchServices = [
    { title: 'Maximum free frontend options', text: 'We can launch eligible frontend projects through Vercel, Netlify, Render, AWS Amplify, Firebase Hosting, Cloudflare Pages, or GitHub Pages.', icon: Cloud },
    { title: 'Domain for 1 year', text: 'For selected website and ads packages, we help arrange a domain for the first year and connect DNS properly.', icon: Globe },
    { title: 'Backend service planning', text: 'We choose the right backend path across AWS, Google Cloud, DigitalOcean, Linode, Railway, Render, VPS, or a custom API stack.', icon: Server },
    { title: 'Secure database setup', text: 'Supabase, Firebase, MongoDB Atlas, PostgreSQL, and PlanetScale options are mapped by auth, data size, budget, and scale needs.', icon: Database },
    { title: 'Shopify CLI + theme design', text: 'Shopify theme customization, CLI workflow, product sections, checkout trust, and storefront launch support.', icon: ShoppingBag },
    { title: 'CI/CD and preview pipeline', text: 'Git-connected deploys, preview links, production checks, environment separation, and roll-forward launch workflow.', icon: Activity },
    { title: 'AI integrations', text: 'Custom AI chat, content tools, smart forms, automations, and product-assist features can be connected to the launch stack.', icon: Cpu },
    { title: '24/7 maintenance and scaling', text: 'Monitoring, update support, uptime checks, backups, incident response, and auto-scaling planning for growing products.', icon: Shield }
  ];
  const launchFeatureRows = [
    { title: 'Frontend-first when free is enough', text: 'We use Vercel, Netlify, Render, AWS Amplify, Firebase Hosting, Cloudflare Pages, or GitHub Pages when the product does not need heavy backend power.', icon: Cloud },
    { title: 'Backend power when the product grows', text: 'AWS, Google Cloud, DigitalOcean, Linode, Railway, and Render are planned around traffic, APIs, auth, storage, and dashboard logic.', icon: Server },
    { title: 'Secure data and long-term operations', text: 'Databases, CI/CD, custom AI, auto-scaling, backups, 24/7 maintenance, and launch QA are connected before handover.', icon: Shield }
  ];
  const launchFaqs = [
    { q: 'Can we host simple frontend websites for free?', a: 'Yes. For eligible frontend websites, we can use Vercel, Netlify, Render, AWS Amplify, Firebase Hosting, Cloudflare Pages, or GitHub Pages and set up deployment, SSL, and DNS connection.' },
    { q: 'Do we provide backend and cloud service setup?', a: 'Yes. We can plan backend services using AWS, Google Cloud, DigitalOcean, Linode, Railway, Render, VPS hosting, or a custom stack based on the product.' },
    { q: 'Can we set up secure databases?', a: 'Yes. We can plan and connect Supabase, Firebase, MongoDB Atlas, PostgreSQL, or PlanetScale depending on auth, budget, scale, and product logic.' },
    { q: 'Can this include CI/CD, maintenance, AI, and auto-scaling?', a: 'Yes. Launch Cloud can include CI/CD pipelines, preview deployments, 24/7 maintenance options, custom AI integrations, uptime checks, and auto-scaling planning.' },
    { q: 'Can this include ads, Shopify, and creative assets?', a: 'Yes. Launch Cloud can be combined with Shopify CLI theme design, AI ads, graphic design, 3D animation, and motion graphics.' }
  ];
  const launchTimeline = [
    { step: '01', title: 'Choose stack', text: 'We decide free frontend hosting, backend provider, database, Shopify, VPS, or a hybrid stack based on the project.' },
    { step: '02', title: 'Connect pipeline', text: 'Git deploys, preview links, environment variables, DNS, SSL, redirects, analytics, and production checks are configured.' },
    { step: '03', title: 'Launch + support', text: 'We ship, test forms and key flows, monitor first traffic, plan scaling, and hand over a clear maintenance path.' }
  ];
  const launchProviderStacks = [
    {
      title: 'Free frontend hosting',
      icon: Cloud,
      text: 'Best for landing pages, portfolios, campaign sites, documentation, and fast static or SPA launches.',
      options: ['Vercel', 'Netlify', 'Render', 'AWS Amplify', 'Firebase Hosting', 'Cloudflare Pages', 'GitHub Pages']
    },
    {
      title: 'Backend providers',
      icon: Server,
      text: 'Best for APIs, dashboards, auth logic, background jobs, admin tools, and custom product systems.',
      options: ['AWS', 'Google Cloud', 'DigitalOcean', 'Linode', 'Railway', 'Render']
    },
    {
      title: 'Secure databases',
      icon: Database,
      text: 'Best for authentication, content, forms, commerce data, dashboards, and scalable application records.',
      options: ['Supabase', 'Firebase', 'MongoDB Atlas', 'PostgreSQL', 'PlanetScale']
    },
    {
      title: 'Launch operations',
      icon: Shield,
      text: 'Best for professional delivery, ongoing reliability, better deployments, and growth-ready systems.',
      options: ['CI/CD pipelines', '24/7 maintenance', 'Custom AI integrations', 'Auto-scaling', 'Backups', 'Monitoring']
    }
  ];
  const launchQuickGuide = [
    {
      title: 'Simple website or portfolio',
      result: 'Use a free frontend host',
      text: 'Best when you need a landing page, brand website, portfolio, or campaign page with fast loading, SSL, DNS, and clean deployment.',
      options: ['Vercel', 'Netlify', 'Cloudflare Pages', 'GitHub Pages'],
      icon: Globe
    },
    {
      title: 'Web app, booking, dashboard, or forms',
      result: 'Add backend and database',
      text: 'Best when customers submit data, log in, book appointments, manage content, or need admin dashboards and API-connected workflows.',
      options: ['Supabase', 'Firebase', 'MongoDB Atlas', 'AWS', 'Railway'],
      icon: Database
    },
    {
      title: 'Brand launch with growth assets',
      result: 'Add creative and maintenance',
      text: 'Best when the launch also needs AI ads, motion graphics, 3D visuals, Shopify sections, CI/CD, uptime checks, and support after launch.',
      options: ['AI Ads', '3D Animation', 'Motion Graphics', '24/7 Maintenance'],
      icon: Activity
    }
  ];
  const portfolioItems = [
    {
      title: 'Nutrixa Performance Campaign',
      category: 'AI Ads / Product Campaign',
      type: 'image',
      format: 'Lifestyle advertising',
      tone: 'green',
      span: 'tall',
      src: '/assets/portfolio/new-work/nutrixa-runner-campaign.jpg'
    },
    {
      title: 'Nutrixa Daily Nutrition',
      category: 'AI Ads / Product Design',
      type: 'image',
      format: 'Product campaign',
      tone: 'green',
      span: 'tall',
      src: '/assets/portfolio/new-work/nutrixa-product-campaign.jpg'
    },
    {
      title: 'Friends Tax Point Services',
      category: 'Graphic Design / Advertising',
      type: 'image',
      format: 'Service campaign',
      tone: 'blue',
      span: 'tall',
      src: '/assets/portfolio/new-work/friends-tax-services-poster.jpg'
    },
    {
      title: 'Friends Tax Point Branches',
      category: 'Graphic Design / Advertising',
      type: 'image',
      format: 'Information campaign',
      tone: 'orange',
      span: 'tall',
      src: '/assets/portfolio/new-work/friends-tax-branch-poster.jpg'
    },
    {
      title: 'Sip and Smile Seasonal Campaign',
      category: 'Graphic Design / Food Advertising',
      type: 'image',
      format: 'Campaign poster',
      tone: 'rose',
      span: 'tall',
      src: '/assets/portfolio/new-work/sip-and-smile-poster.jpg'
    },
    {
      title: 'Creative Motion Reel',
      category: 'Motion Graphics / Brand Film',
      type: 'video',
      format: 'Motion reel',
      tone: 'violet',
      span: 'tall',
      src: '/assets/portfolio/new-work/creative-motion-reel.mp4'
    },
    {
      title: 'PodLight AI Podcast Experience',
      category: 'UI/UX Design / Web Product',
      type: 'image',
      format: 'Desktop product system',
      tone: 'orange',
      span: 'tall',
      src: '/assets/portfolio/new-work/podlight-uiux-case-study.jpg'
    },
    {
      title: 'Receipt Rewards Mobile App',
      category: 'UI/UX Design / Mobile App',
      type: 'image',
      format: 'Mobile app screens',
      tone: 'blue',
      span: 'wide',
      src: '/assets/portfolio/new-work/receipt-rewards-uiux.jpg'
    },
    {
      title: 'Learning Journey Mobile App',
      category: 'UI/UX Design / Mobile App',
      type: 'image',
      format: 'Mobile app screens',
      tone: 'green',
      span: 'wide',
      src: '/assets/portfolio/new-work/learning-journey-uiux.jpg'
    },
    {
      title: 'Kerala Heritage Fashion Story',
      category: 'Photoshoot / Fashion',
      type: 'image',
      format: 'Editorial photoshoot',
      tone: 'orange',
      span: 'tall',
      src: '/assets/portfolio/new-work/kerala-heritage-fashion.jpg'
    },
    {
      title: 'Platform Motion Study 01',
      category: '3D Animation / Motion',
      type: 'video',
      format: 'Motion reel',
      tone: 'blue',
      span: 'wide',
      src: '/assets/portfolio/new-work/motion-study-01.mp4'
    },
    {
      title: 'Creative Motion Study 02',
      category: 'Motion Graphics',
      type: 'video',
      format: 'Motion reel',
      tone: 'violet',
      span: 'tall',
      src: '/assets/portfolio/new-work/motion-study-02.mp4'
    },
    {
      title: 'Character Motion Study',
      category: '3D Animation',
      type: 'video',
      format: '3D motion',
      tone: 'orange',
      span: 'standard',
      src: '/assets/portfolio/new-work/motion-study-03.mp4'
    },
    {
      title: 'Product Motion Study',
      category: '3D Animation / Motion',
      type: 'video',
      format: 'Motion reel',
      tone: 'green',
      span: 'wide',
      src: '/assets/portfolio/new-work/motion-study-04.mp4'
    },
    {
      title: 'Motion Graphic System',
      category: 'Motion Graphics',
      type: 'video',
      format: 'Brand motion',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/motion-graphic-system.mp4'
    },
    {
      title: '3D Animation Study',
      category: '3D Animation / Unreal Engine',
      type: 'video',
      format: '3D motion',
      tone: 'violet',
      span: 'tall',
      src: '/assets/portfolio/new-work/3d-animation-study.mp4'
    },
    {
      title: 'Interface Motion Study',
      category: 'UI/UX Design',
      type: 'video',
      format: 'UI motion',
      tone: 'green',
      span: 'standard',
      src: '/assets/portfolio/new-work/interface-motion-study.mp4'
    },
    {
      title: 'Bohdan Motion Cut',
      category: 'Motion Graphics',
      type: 'video',
      format: 'Motion reel',
      tone: 'rose',
      span: 'wide',
      src: '/assets/portfolio/new-work/bohdan-motion-study.mp4'
    },
    {
      title: 'Transit Campaign Poster',
      category: 'Graphic Design / Advertising',
      type: 'image',
      format: 'Campaign visual',
      tone: 'blue',
      span: 'tall',
      src: '/assets/portfolio/new-work/transit-campaign-poster.jpg'
    },
    {
      title: 'Robotic Hand Study',
      category: '3D Animation / 3D Model',
      type: 'image',
      format: '3D visual',
      tone: 'orange',
      span: 'tall',
      src: '/assets/portfolio/new-work/robotic-hand-study.jpg'
    },
    {
      title: 'Robotic Rose Study',
      category: '3D Animation / 3D Model',
      type: 'image',
      format: '3D visual',
      tone: 'rose',
      span: 'tall',
      src: '/assets/portfolio/new-work/robotic-rose-study.jpg'
    },
    {
      title: 'Signal Flag Study',
      category: '3D Animation / Art Direction',
      type: 'image',
      format: '3D visual',
      tone: 'orange',
      span: 'tall',
      src: '/assets/portfolio/new-work/signal-flag-study.jpg'
    },
    {
      title: 'The Holland Campaign',
      category: 'Graphic Design / Advertising',
      type: 'image',
      format: 'Poster design',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/the-holland-poster.jpg'
    },
    {
      title: 'Glovia Product Visual',
      category: 'AI Ads / Product Design',
      type: 'image',
      format: 'Product campaign',
      tone: 'green',
      span: 'wide',
      src: '/assets/portfolio/new-work/glovia-product-visual.jpg'
    },
    {
      title: 'Machine Mind Identity',
      category: 'Brand Identity / Graphic Design',
      type: 'image',
      format: 'Brand system',
      tone: 'blue',
      span: 'wide',
      src: '/assets/portfolio/new-work/machine-mind-brand-system.jpg'
    },
    {
      title: 'Machine Mind Campaign',
      category: 'Brand Identity / Graphic Design',
      type: 'image',
      format: 'Campaign system',
      tone: 'violet',
      span: 'wide',
      src: '/assets/portfolio/new-work/machine-mind-campaign-system.jpg'
    },
    {
      title: 'Services Motion Film',
      category: 'Motion Graphics / Brand Film',
      type: 'video',
      format: 'Motion film',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/services-hero-motion.mp4'
    },
    {
      title: 'Campaign Motion Cut',
      category: 'Motion Graphics / Advertising',
      type: 'video',
      format: 'Campaign motion',
      tone: 'orange',
      span: 'standard',
      src: '/assets/portfolio/new-work/campaign-motion-cut.mp4'
    },
    {
      title: 'Experimental Motion Cut',
      category: '3D Animation / Motion',
      type: 'video',
      format: 'Motion study',
      tone: 'violet',
      span: 'standard',
      src: '/assets/portfolio/new-work/experimental-motion-cut.mp4'
    },
    {
      title: 'Sahlooter Motion Study',
      category: '3D Animation / Art Direction',
      type: 'video',
      format: 'Motion study',
      tone: 'rose',
      span: 'standard',
      src: '/assets/portfolio/new-work/sahlooter-motion-study.mp4'
    },
    {
      title: 'Vanta Motion Study',
      category: 'Motion Graphics / Visual Effects',
      type: 'video',
      format: 'Motion reel',
      tone: 'green',
      span: 'standard',
      src: '/assets/portfolio/new-work/vanta-motion-study.mp4'
    },
    {
      title: 'Upcreate Strategy Poster',
      category: 'Graphic Design / Strategy',
      type: 'image',
      format: 'Campaign poster',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/upcreate-strategy-poster.jpg'
    },
    {
      title: 'PodLight Interface System',
      category: 'UI/UX Design / Product',
      type: 'image',
      format: 'Interface system',
      tone: 'orange',
      span: 'standard',
      src: '/assets/portfolio/new-work/podlight-interface-system.jpg'
    },
    {
      title: 'Follicle Routine Steps',
      category: 'AI Ads / Product Campaign',
      type: 'image',
      format: 'Product campaign',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/follicle-routine-steps.jpg'
    },
    {
      title: 'Follicle Product Campaign',
      category: 'AI Ads / Product Photography',
      type: 'image',
      format: 'Product campaign',
      tone: 'violet',
      span: 'standard',
      src: '/assets/portfolio/new-work/follicle-product-campaign.jpg'
    },
    {
      title: 'Follicle Conditioner Benefits',
      category: 'AI Ads / Graphic Design',
      type: 'image',
      format: 'Product information',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/follicle-conditioner-benefits.jpg'
    },
    {
      title: 'Follicle Product Collection',
      category: 'AI Ads / Product Photography',
      type: 'image',
      format: 'Product collection',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/follicle-product-collection.jpg'
    },
    {
      title: 'Follicle Haircare Identity',
      category: 'Brand Identity / Campaign',
      type: 'image',
      format: 'Brand campaign',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/follicle-haircare-identity.jpg'
    },
    {
      title: 'Frodir Mobile Dashboard',
      category: 'UI/UX Design / Mobile App',
      type: 'image',
      format: 'Mobile interface',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/frodir-mobile-dashboard.webp'
    },
    {
      title: 'Frodir Launch Event',
      category: 'Brand Identity / Launch Campaign',
      type: 'image',
      format: 'Launch visual',
      tone: 'violet',
      span: 'standard',
      src: '/assets/portfolio/new-work/frodir-launch-event.webp'
    },
    {
      title: 'Golden Hour Portrait 01',
      category: 'Photoshoot / Edit',
      type: 'image',
      format: 'Portrait study',
      tone: 'orange',
      span: 'standard',
      src: '/assets/portfolio/new-work/golden-hour-portrait-01.jpg'
    },
    {
      title: 'Golden Hour Portrait 02',
      category: 'Photoshoot / Edit',
      type: 'image',
      format: 'Portrait study',
      tone: 'orange',
      span: 'standard',
      src: '/assets/portfolio/new-work/golden-hour-portrait-02.jpg'
    },
    {
      title: 'Noble Energy Identity System',
      category: 'Brand Identity / Graphic Design',
      type: 'image',
      format: 'Identity system',
      tone: 'orange',
      span: 'standard',
      src: '/assets/portfolio/new-work/noble-energy-identity-system.jpg'
    },
    {
      title: 'Noble Energy Campaign System',
      category: 'Brand Identity / Campaign',
      type: 'image',
      format: 'Campaign system',
      tone: 'orange',
      span: 'standard',
      src: '/assets/portfolio/new-work/noble-energy-campaign-system.jpg'
    },
    {
      title: 'Noble Energy Branding Campaign',
      category: 'Brand Identity / Advertising',
      type: 'image',
      format: 'Brand campaign',
      tone: 'orange',
      span: 'standard',
      src: '/assets/portfolio/new-work/noble-energy-branding-campaign.jpg'
    },
    {
      title: 'Green Bird Mark System',
      category: 'Logo Design / Brand Identity',
      type: 'image',
      format: 'Logo system',
      tone: 'green',
      span: 'standard',
      src: '/assets/portfolio/new-work/green-bird-mark-system.webp'
    },
    {
      title: 'Superchat Campaign',
      category: 'AI Ads / Advertising',
      type: 'image',
      format: 'Campaign visual',
      tone: 'green',
      span: 'standard',
      src: '/assets/portfolio/new-work/superchat-campaign.jpg'
    },
    {
      title: 'Denim Product Campaign',
      category: 'AI Ads / Fashion Campaign',
      type: 'image',
      format: 'Product campaign',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/denim-product-campaign.jpg'
    },
    {
      title: 'Ludic Comfort Campaign',
      category: 'AI Ads / Product Campaign',
      type: 'image',
      format: 'Campaign visual',
      tone: 'orange',
      span: 'standard',
      src: '/assets/portfolio/new-work/ludic-comfort-campaign.jpg'
    },
    {
      title: 'NAVO Identity Cover',
      category: 'Logo Design / Brand Identity',
      type: 'image',
      format: 'Identity cover',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/navo-identity-cover.jpg'
    },
    {
      title: 'NAVO Logo Grid',
      category: 'Logo Design / Brand Identity',
      type: 'image',
      format: 'Logo construction',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/navo-logo-grid.jpg'
    },
    {
      title: 'NAVO Colour System',
      category: 'Brand Identity / Colour System',
      type: 'image',
      format: 'Colour system',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/navo-colour-system.jpg'
    },
    {
      title: 'NAVO Mark System',
      category: 'Logo Design / Brand Identity',
      type: 'image',
      format: 'Brand mark',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/navo-mark-system.jpg'
    },
    {
      title: 'NAVO App Icon',
      category: 'UI/UX Design / App Icon',
      type: 'image',
      format: 'App icon',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/navo-app-icon.jpg'
    },
    {
      title: 'NAVO Smart Home',
      category: 'Product Design / 3D Visualisation',
      type: 'image',
      format: 'Product system',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/navo-smart-home.jpg'
    },
    {
      title: 'NAVO Smart Grid',
      category: 'Product Design / 3D Visualisation',
      type: 'image',
      format: 'Product system',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/navo-smart-grid.jpg'
    },
    {
      title: 'Gaming Controller Campaign',
      category: 'Product Photography / Advertising',
      type: 'image',
      format: 'Product campaign',
      tone: 'blue',
      span: 'standard',
      src: '/assets/portfolio/new-work/gaming-controller-campaign.webp'
    },
    {
      title: 'Christmas Fashion Campaign',
      category: 'AI Photoshoot / Fashion Campaign',
      type: 'image',
      format: 'Fashion campaign',
      tone: 'rose',
      span: 'standard',
      src: '/assets/portfolio/new-work/christmas-fashion-campaign.jpg'
    },
    {
      title: 'Nurtura Mobile App',
      category: 'UI/UX Design / Mobile App',
      type: 'image',
      format: 'Mobile app campaign',
      tone: 'rose',
      span: 'standard',
      src: '/assets/portfolio/new-work/nurtura-mobile-app.jpg'
    },
    {
      title: 'Monochrome Floral Portrait',
      category: 'Photoshoot / Art Direction',
      type: 'image',
      format: 'Editorial portrait',
      tone: 'blue',
      span: 'tall',
      src: '/assets/portfolio/new-work/monochrome-floral-portrait.jpg'
    },
    {
      title: 'Crimson Floral Portrait',
      category: 'Photoshoot / Art Direction',
      type: 'image',
      format: 'Editorial portrait',
      tone: 'rose',
      span: 'tall',
      src: '/assets/portfolio/new-work/crimson-floral-portrait.jpg'
    }
  ];
  const portfolioFamilyPatterns = [
    'Nutrixa',
    'Friends Tax',
    'PodLight',
    'Motion Study',
    'Robotic',
    'Machine Mind',
    'Follicle',
    'Frodir',
    'Golden Hour',
    'Noble Energy',
    'NAVO',
    'Floral Portrait'
  ];
  const getPortfolioFamily = (item) => (
    portfolioFamilyPatterns.find((family) => item.title.includes(family)) || item.title
  );
  const portfolioDisplayItems = (() => {
    const familyQueues = [];
    const familyIndex = new Map();

    portfolioItems.forEach((item) => {
      const family = getPortfolioFamily(item);
      if (!familyIndex.has(family)) {
        familyIndex.set(family, familyQueues.length);
        familyQueues.push([]);
      }
      familyQueues[familyIndex.get(family)].push(item);
    });

    const mixedItems = [];
    let hasItems = true;
    while (hasItems) {
      hasItems = false;
      familyQueues.forEach((queue) => {
        if (queue.length) {
          mixedItems.push(queue.shift());
          hasItems = true;
        }
      });
    }
    return mixedItems;
  })();
  const featuredPortfolioItems = portfolioItems.slice(0, 3);
  const togglePortfolioLike = (key) => {
    setLikedPortfolioItems((items) => (
      items.includes(key) ? items.filter((item) => item !== key) : [...items, key]
    ));
  };
  const sharePortfolioItem = async (item) => {
    setSharedPortfolioItem(item.src);
    const shareData = {
      title: item.title,
      text: `Leaf Creationism portfolio: ${item.title}`,
      url: item.src
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(item.src);
      }
    } catch (error) {
      // Share dialogs can be dismissed by the user; the UI still gives feedback.
    }

    window.setTimeout(() => setSharedPortfolioItem(''), 1800);
  };
  const togglePortfolioAudio = (src) => {
    setUnmutedPortfolioItems((items) => (
      items.includes(src) ? items.filter((item) => item !== src) : [...items, src]
    ));
  };
  const rememberPortfolioAudio = (src, video) => {
    const hasAudio = Boolean(
      video?.mozHasAudio ||
      video?.webkitAudioDecodedByteCount > 0 ||
      video?.audioTracks?.length > 0
    );

    if (hasAudio) {
      setPortfolioAudioAvailability((items) => (
        items[src] ? items : { ...items, [src]: true }
      ));
    }
  };
  const getPortfolioLikeCount = (item) => (
    128 + ((portfolioItems.findIndex((asset) => asset.src === item.src) + 1) * 9) + (likedPortfolioItems.includes(item.src) ? 1 : 0)
  );
  const getPortfolioShareCount = (item) => (
    24 + ((portfolioItems.findIndex((asset) => asset.src === item.src) + 1) * 3) + (sharedPortfolioItem === item.src ? 1 : 0)
  );
  const getPortfolioMeta = (item) => {
    const clean = (value) => String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
    const category = item.category || '';
    const format = item.format || '';
    if (!format || clean(category) === clean(format) || clean(category).includes(clean(format)) || clean(format).includes(clean(category))) {
      return category;
    }
    return `${category} / ${format}`;
  };
  const getPortfolioRatio = (item) => {
    if (item.type === 'video' && /reel|vertical|social/i.test(item.format)) return 'reel';
    if (item.type === 'video' && /3d|motion|brand/i.test(item.format)) return item.span === 'tall' ? 'reel' : 'landscape';
    if (item.span === 'wide') return 'landscape';
    if (/portrait|social|latest/i.test(item.format)) return 'photo';
    return item.type === 'image' ? 'photo' : 'landscape';
  };
  const getPortfolioFallbackRatio = (item) => {
    const ratio = getPortfolioRatio(item);
    if (ratio === 'reel') return '9 / 16';
    if (ratio === 'landscape') return '16 / 9';
    if (ratio === 'square') return '1 / 1';
    return '4 / 5';
  };
  const getPortfolioAspectRatio = (item) => portfolioMediaRatios[item.src] || getPortfolioFallbackRatio(item);
  const rememberPortfolioRatio = (src, width, height) => {
    if (!width || !height) return;
    const ratio = `${width} / ${height}`;
    setPortfolioMediaRatios((ratios) => (
      ratios[src] === ratio ? ratios : { ...ratios, [src]: ratio }
    ));
  };
  const selectedReferenceItems = portfolioItems.filter((item) => referencePortfolioItems.includes(item.src));
  const togglePortfolioReference = (item) => {
    setReferencePortfolioItems((items) => {
      const isAdding = !items.includes(item.src);
      const nextItems = items.includes(item.src)
        ? items.filter((src) => src !== item.src)
        : [...items, item.src];

      if (isAdding) {
        setReferenceCartPulse(true);
        window.setTimeout(() => setReferenceCartPulse(false), 900);
      }
      return nextItems;
    });
  };
  const updateReferenceField = (field, value) => {
    setReferenceForm((form) => ({ ...form, [field]: value }));
  };
  const updateAccessField = (field, value) => {
    setAccessForm((form) => ({ ...form, [field]: value }));
  };
  const selectedServiceItems = solutionsList.filter((service) => completedSteps.includes(service.id));
  const selectedServiceSummary = selectedServiceItems.length
    ? selectedServiceItems.map((service) => `${service.title} - ${service.desc}`).join('\n')
    : 'No services selected yet';
  const selectedAppointmentSummary = `${selectedSchedule.title} / ${selectedAppointment.full} / ${selectedSlot.time} IST / ${selectedSlot.note}`;
  const hasEnquiryCartIntent = selectedReferenceItems.length > 0 || selectedServiceItems.length > 0;
  const canSubmitReferenceEnquiry = Boolean(
    referenceForm.name.trim() &&
    referenceForm.email.trim() &&
    referenceForm.phone.trim() &&
    referenceForm.project.trim()
  );
  const submitResendForm = async (payload, successMessage) => {
    setFormStatus('sending');
    try {
      const response = await fetch('/api/submit-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ website: '', ...payload })
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to submit form');
      }
      setFormStatus(successMessage);
      return true;
    } catch (error) {
      setFormStatus('error');
      return false;
    }
  };
  const submitReferenceEnquiry = async (event) => {
    event.preventDefault();
    if (!canSubmitReferenceEnquiry) {
      setFormStatus('error');
      return;
    }
    const success = await submitResendForm({
      form_type: 'project-enquiry',
      name: referenceForm.name || 'Not added',
      email: referenceForm.email || 'Not added',
      phone: referenceForm.phone || 'Not added',
      project_brief: referenceForm.project || 'Not added',
      selected_services: selectedServiceSummary,
      appointment_details: selectedAppointmentSummary,
      selected_references: selectedReferenceItems.length
        ? selectedReferenceItems.map((item, index) => `${index + 1}. ${item.title} / ${item.category} / ${item.src}`).join('\n')
        : 'No portfolio references selected',
      source: 'Reference cart / appointment enquiry'
    }, 'reference-sent');

    if (success) {
      setReferenceForm({ name: '', email: '', phone: '', project: '' });
    }
  };
  const submitAccessRequest = async (event) => {
    event.preventDefault();
    const success = await submitResendForm({
      form_type: 'access-request',
      name: accessForm.name || 'Not added',
      company: accessForm.company || 'Not added',
      requested_service: accessForm.service || 'Not selected',
      email: accessForm.email || 'Not added',
      selected_services: selectedServiceSummary,
      appointment_details: selectedAppointmentSummary,
      source: 'Access Granted home section'
    }, 'access-sent');

    if (success) {
      setAccessForm({ name: '', company: '', service: '', email: '' });
    }
  };
  const referenceMessage = [
    'Hi Leaf Creationism, I want to enquire about work similar to these portfolio references.',
    '',
    `Name: ${referenceForm.name || 'Not added'}`,
    `Email: ${referenceForm.email || 'Not added'}`,
    `Phone: ${referenceForm.phone || 'Not added'}`,
    `Project note: ${referenceForm.project || 'Not added'}`,
    '',
    'Selected services:',
    selectedServiceSummary,
    '',
    `Appointment: ${selectedAppointmentSummary}`,
    '',
    `Selected references (${selectedReferenceItems.length}):`,
    ...selectedReferenceItems.map((item, index) => `${index + 1}. ${item.title} / ${item.category} / ${item.src}`)
  ].join('\n');
  const referenceMailHref = `mailto:leafcreationism@gmail.com?subject=${encodeURIComponent('Portfolio reference enquiry')}&body=${encodeURIComponent(referenceMessage)}`;
  const referenceWhatsAppHref = `https://wa.me/918589038479?text=${encodeURIComponent(referenceMessage)}`;
  const leafAdvantageMedia = [
    ['upcreate-strategy-poster.jpg', 'Strategy and campaign design'],
    ['podlight-interface-system.jpg', 'Digital product interface'],
    ['follicle-product-campaign.jpg', 'Product campaign direction'],
    ['frodir-mobile-dashboard.webp', 'Mobile product experience'],
    ['noble-energy-identity-system.jpg', 'Brand identity system'],
    ['green-bird-mark-system.webp', 'Logo and mark design'],
    ['superchat-campaign.jpg', 'AI advertising campaign'],
    ['denim-product-campaign.jpg', 'Fashion campaign design'],
    ['ludic-comfort-campaign.jpg', 'Product advertising'],
    ['navo-identity-cover.jpg', 'Technology brand identity'],
    ['navo-smart-home.jpg', 'Product visualisation'],
    ['gaming-controller-campaign.webp', 'Product photography'],
    ['christmas-fashion-campaign.jpg', 'Fashion art direction'],
    ['nurtura-mobile-app.jpg', 'Healthcare mobile experience']
  ].map(([file, label]) => ({
    type: 'image',
    src: `/assets/portfolio/new-work/${file}`,
    label
  }));
  const advantageCylinderImages = leafAdvantageMedia
    .slice(0, isMobileViewport ? 7 : 10)
    .map((item) => ({ src: item.src, alt: item.label }));
  const useSingleLoaderVideo = typeof window === 'undefined'
    ? true
    : window.matchMedia('(max-width: 767px)').matches;

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-800 font-sans relative overflow-hidden selection:bg-[#2050E3] selection:text-white">
      {showLoader && (
        <div className={`leaf-loader-screen ${useSingleLoaderVideo ? 'is-single-loader' : 'is-grid-loader'} ${isLoaderVideoPlaying ? 'is-playing' : ''} ${isLoaderExiting ? 'is-exiting' : ''}`} data-loader-version="leaf-motion-mobile-v5" role="status" aria-live="polite" aria-label="Loading Leaf Creationism">
          <div className="leaf-loader-buffer-mark" aria-hidden="true">
            <img src="/assets/brand/leaf-creationism-logo-white.png" alt="" />
          </div>
          {useSingleLoaderVideo ? (
            <div className="leaf-loader-mobile-reel" aria-hidden="true">
              <video
                src={localLoaderVideo}
                autoPlay
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                onPlaying={() => setIsLoaderVideoPlaying(true)}
                onWaiting={() => setIsLoaderVideoPlaying(false)}
                onStalled={() => setIsLoaderVideoPlaying(false)}
                onEnded={() => setIsLoaderVideoFinished(true)}
                onError={() => setIsLoaderVideoFinished(true)}
              />
            </div>
          ) : (
            <div className="leaf-loader-video-wall" aria-hidden="true">
              {Array.from({ length: 12 }, (_, index) => (
                <div className="leaf-loader-video-tile" key={`leaf-loader-video-${index}`}>
                  <video
                    src={localLoaderVideo}
                    autoPlay
                    muted
                    playsInline
                    preload={index === 0 ? "auto" : "none"}
                    disablePictureInPicture
                    onPlaying={index === 0 ? () => setIsLoaderVideoPlaying(true) : undefined}
                    onWaiting={index === 0 ? () => setIsLoaderVideoPlaying(false) : undefined}
                    onStalled={index === 0 ? () => setIsLoaderVideoPlaying(false) : undefined}
                    onEnded={index === 0 ? () => setIsLoaderVideoFinished(true) : undefined}
                    onError={index === 0 ? () => setIsLoaderVideoFinished(true) : undefined}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Soft Background Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-b from-[#FAE696]/20 to-transparent blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-[#D0F5E5]/30 to-transparent blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-[20%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#DFE4F4]/40 to-transparent blur-3xl -z-10 pointer-events-none"></div>

      {/* Top Navigation */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-8 flex justify-between items-center sticky top-0 sm:relative z-50 sm:z-10 bg-[#FDFDFD]/82 sm:bg-transparent backdrop-blur-2xl sm:backdrop-blur-none border-b border-white/70 sm:border-b-0">
        <div className="flex items-center gap-3 group cursor-pointer z-20">
          <div className="perspective-wrapper w-14 h-14 flex items-center justify-center logo-3d-box-container">
            <div className="logo-3d-box relative w-12 h-12 bg-gradient-to-tr from-[#153bb5] to-[#406af5] rounded-[14px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-[14px] border-t-2 border-l-2 border-white/30 pointer-events-none mix-blend-overlay"></div>
              <img 
                src={localLeafLogoWhite}
                alt="Leaf Creationism Logo" 
                className="h-7 w-auto object-contain logo-3d-img" 
              />
            </div>
          </div>
          <span className="text-2xl font-semibold tracking-tight text-gray-900 hidden sm:block group-hover:text-[#2050E3] transition-colors duration-300">
            Leaf Creationism
          </span>
        </div>
        
        <div className={`header-status-card ${isStudioOnline ? 'is-online' : 'is-offline'}`} aria-label={headerStatusMessages.join(', ')}>
          <div className="header-status-copy">
            <div className="header-status-topline">
              <strong>{indiaTimeLabel}</strong>
              <small>{isStudioOnline ? 'TILL 9 PM' : 'OPENS 10 AM'}</small>
            </div>
            <div className="header-status-rotator">
              {headerStatusMessages.map((message, index) => (
                <span className={index === headerStatusIndex ? 'is-active' : ''} key={message}>
                  {message}
                </span>
              ))}
            </div>
          </div>
          <button className="header-status-action" type="button" onClick={() => navigateTo('calendar')}>
            CONTACT US
          </button>
        </div>
      </nav>

      {/* Main Content - Home View */}
      {activeNav === 'home' && (
        <main className="home-screen max-w-6xl mx-auto px-4 sm:px-6 pt-0 sm:pt-4 pb-0 relative z-10 animate-fade-in flex flex-col gap-16 lg:gap-24">
          
          {/* SECTION 1: Top Hero (Two Columns - Completely separated from About) */}
          <div className="home-hero-layout flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative z-20">
            
            {/* Left Column - Hero Text, Ads, and Services Icons */}
            <div className="home-hero-copy w-full lg:w-1/2 lg:min-w-0 pt-2 sm:pt-4 lg:pt-8 flex flex-col gap-6 lg:gap-8">
              
              {/* Horizontal Banner Carousel */}
              <div className="home-promo-card relative w-full max-w-xl overflow-hidden rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] group bg-white">
                <div 
                  className="flex transition-transform duration-700 ease-in-out h-40 sm:h-48"
                  style={{ 
                    transform: `translate3d(calc(-${activeAd * 100}% - ${activeAd * 4}px), 0, 0)`,
                    gap: '4px'
                  }}
                >
                  {promoBanners.map((banner) => (
                    <div 
                      key={banner.id} 
                      className={`w-full flex-shrink-0 flex items-center ${banner.theme === 'light' ? 'text-gray-900' : 'text-white'} relative overflow-hidden rounded-[1.5rem]`}
                      style={{ backgroundColor: banner.bgColor }}
                    >
                      <div 
                        className="absolute right-0 top-0 bottom-0 w-[65%] sm:w-[55%] z-0"
                        style={{
                          maskImage: 'linear-gradient(to right, transparent 0%, black 35%)',
                          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%)'
                        }}
                      >
                        {banner.video ? (
                          <video 
                            src={banner.video} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className={`w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700 ease-out ${banner.theme === 'light' ? 'mix-blend-normal' : 'mix-blend-luminosity group-hover:mix-blend-normal'}`}
                          />
                        ) : (
                          <img 
                            src={banner.img} 
                            alt={banner.title} 
                            style={{ objectPosition: banner.position || 'center' }}
                            className={`w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700 ease-out ${banner.theme === 'light' ? 'mix-blend-normal' : 'mix-blend-luminosity group-hover:mix-blend-normal'}`}
                          />
                        )}
                      </div>

                      <div className="p-6 sm:p-8 flex flex-col justify-center items-start relative z-10 w-full max-w-[70%]">
                        <span className={`${banner.theme === 'light' ? 'bg-black/5 border-black/10 text-gray-800' : 'bg-white/20 border-white/30 text-white'} backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-3 border shadow-sm`}>
                          {banner.tag}
                        </span>
                        <h3 className={`text-xl sm:text-2xl font-semibold mb-1.5 leading-tight ${banner.theme === 'light' ? 'text-gray-900' : 'text-white drop-shadow-md'}`}>
                          {banner.title}
                        </h3>
                        <p className={`text-sm ${banner.theme === 'light' ? 'text-gray-700' : 'text-white/90 drop-shadow-sm'} font-light line-clamp-2`}>
                          {banner.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                  {promoBanners.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveAd(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeAd ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Welcome Text */}
              <div className="home-welcome-copy">
                <h1 className="text-[38px] sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.05] text-gray-900 font-light mb-3 sm:mb-4 tracking-tight">
                  Design, build, and grow your <span className="font-medium">next digital product.</span>
                </h1>
                <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed">
                  UI/UX, websites, mobile apps, AI ads, branding, and motion - one focused creative team from idea to launch.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3" aria-label="Start a project">
                  <button
                    type="button"
                    className="min-h-12 px-6 rounded-full bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                    onClick={() => navigateTo('calendar')}
                  >
                    Book a planning call
                  </button>
                  <button
                    type="button"
                    className="min-h-12 px-6 rounded-full bg-white text-slate-900 font-semibold border border-slate-300 transition-colors duration-200 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                    onClick={() => navigateTo('services')}
                  >
                    Explore services
                  </button>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Choose services now, or book a short planning call first.
                </p>
              </div>

              {/* Service Icons Array (Horizontal Scroll) */}
              <div className="w-full max-w-full overflow-x-auto lg:overflow-visible hide-scrollbar snap-x snap-mandatory py-4 service-icon-shell">
                <div className="service-icon-grid flex lg:grid lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-4 w-max lg:w-full px-2 lg:px-0 pb-2 lg:pb-0">
                  {serviceCategories.map((cat) => {
                    const IconComponent = cat.icon;
                    const isActiveService = activeCategory === cat.id && showServiceModal;
                    return (
                      <button 
                        key={cat.id} 
                        type="button"
                        onClick={() => openServiceModal(cat.id)}
                        className="w-[82px] sm:w-[94px] lg:w-full flex flex-col items-center gap-3 cursor-pointer group snap-start service-icon-item"
                      >
                        <div className={`relative w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] rounded-[1.3rem] sm:rounded-[1.6rem] flex-shrink-0 flex items-center justify-center service-static-icon ${
                          isActiveService
                            ? 'is-selected'
                            : ''
                        }`}>
                          <IconComponent 
                            size={28} 
                            strokeWidth={1.5}
                            className={`relative z-10 ${
                              isActiveService
                                ? 'text-white'
                                : 'text-white/95'
                            }`} 
                          />
                        </div>
                        <span className={`max-w-full text-center text-[11px] sm:text-[13px] font-semibold tracking-wide transition-colors duration-300 px-2 sm:px-3 py-1 rounded-full leading-tight ${
                          isActiveService 
                            ? 'bg-[#2050E3]/10 text-[#2050E3]' 
                            : 'text-gray-600 group-hover:text-gray-900 group-hover:bg-gray-100/80'
                        }`}>
                          {cat.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Standalone Build Project Card */}
            <div className="w-full lg:w-1/2 lg:min-w-0 flex justify-center lg:justify-end relative z-20">
              <div className="project-builder-card w-full max-w-md bg-[#fdfdfd]/95 backdrop-blur-xl rounded-[2.5rem] p-8 relative overflow-hidden shadow-xl shadow-blue-900/5 border border-white/60">
                
                <div className="mb-8 relative z-10">
                  <h2 className="text-xl font-medium text-gray-800">Build Your Project</h2>
                  <p className="text-sm text-gray-500 mt-1 font-light">Pick only what you need. We turn your choices into a lean estimate and launch path.</p>
                </div>
                
                <div className="relative pl-4 space-y-4 project-builder-flow">
                  <div className="absolute left-[27px] top-4 bottom-8 w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent dashed-line"></div>

                  {solutionsList.map((sol) => {
                    const isCompleted = completedSteps.includes(sol.id);
                    const IconComponent = sol.icon;
                    return (
                      <button key={sol.id} type="button" onClick={() => toggleStep(sol.id)} className="relative flex items-start gap-4 z-10 group cursor-pointer text-left w-full">
                        {isCompleted ? (
                          <span className="w-7 h-7 rounded-full bg-[#2050E3] flex items-center justify-center shrink-0 shadow-sm mt-0.5 transition-transform group-hover:scale-110">
                            <Check size={14} className="text-white" strokeWidth={3} />
                          </span>
                        ) : (
                          <span className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 transition-all group-hover:border-[#2050E3] group-hover:shadow-sm">
                            <IconComponent size={12} className="text-gray-300 group-hover:text-[#2050E3]" />
                          </span>
                        )}
                        <span className="min-w-0 block">
                          <h3 className={`leading-tight transition-colors ${isCompleted ? 'font-medium text-gray-900' : 'font-normal text-gray-600 group-hover:text-gray-900'}`}>
                            {sol.title}
                          </h3>
                          <p className="text-xs text-gray-400 mt-1 leading-snug">{sol.desc}</p>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Abstract Glass Shape Inside Card */}
                <div className="absolute -bottom-8 -right-8 w-64 h-64 opacity-90 mix-blend-multiply pointer-events-none z-0">
                   <div className="absolute inset-0 bg-[#2050E3] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] blur-xl opacity-40"></div>
                   <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-tr from-[#2050E3] to-[#5a80ff] rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.2),_10px_10px_20px_rgba(32,80,227,0.4)]"></div>
                   <div className="absolute top-24 left-24 w-24 h-24 bg-gradient-to-br from-[#5a80ff] to-[#153bb5] rounded-full shadow-[inset_5px_5px_10px_rgba(255,255,255,0.3),_-5px_-5px_10px_rgba(0,0,0,0.1)]"></div>
                </div>

                <div className="mt-14 relative z-20 bg-white/80 backdrop-blur-xl p-5 rounded-[2rem] border border-white shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center justify-between mb-3 px-1">
                    <span className="text-sm font-medium text-gray-800 drop-shadow-sm">Recommended scope</span>
                    <span className="text-sm font-bold text-[#2050E3]">{completedSteps.length}/{solutionsList.length} Selected</span>
                  </div>
                  
                  <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden mb-6 border border-white shadow-inner">
                    <div 
                      className="h-full bg-gradient-to-r from-[#406af5] to-[#2050E3] transition-all duration-500 ease-out rounded-full relative"
                      style={{ width: `${(completedSteps.length / solutionsList.length) * 100}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -skew-x-12"></div>
                    </div>
                  </div>

                  <div className="project-builder-summary mb-5">
                    {completedSteps.length > 0 ? (
                      solutionsList
                        .filter((sol) => completedSteps.includes(sol.id))
                        .map((sol) => <span key={sol.id}>{sol.title}</span>)
                    ) : (
                      <span>Choose one or more outcomes to see a focused project direction.</span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="bg-white/90 backdrop-blur-md rounded-full py-2.5 px-4 flex items-center justify-center sm:justify-start gap-3 shadow-sm border border-gray-100 w-full sm:w-auto">
                      <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${completedSteps.length > 0 ? 'bg-green-400 animate-pulse' : 'bg-gray-300'}`}></div>
                      <span className="font-semibold text-sm text-gray-900 whitespace-nowrap">
                        {completedSteps.length === 0 ? 'Awaiting selection' : 'Ready to estimate'}
                      </span>
                    </div>
                    <button 
                      type="button"
                      onClick={() => {
                        if (completedSteps.length > 0) navigateTo('calendar');
                      }}
                      className={`w-full sm:w-auto px-5 py-2.5 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm font-medium text-sm gap-2 ${
                        completedSteps.length > 0 
                          ? 'bg-[#2050E3] text-white hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5' 
                          : 'bg-white/50 text-gray-500 cursor-not-allowed border border-white'
                      }`}
                    >
                      Get estimate <ArrowUpRight size={18} className={completedSteps.length > 0 ? 'animate-bounce-x' : ''} />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* SECTION 2: Separated "About" Section (No longer touching top components) */}
          <div className="home-about-section w-full relative group/about z-10">
            {/* Clean standalone glass container for the About Section */}
            <div className="home-about-shell absolute inset-0 rounded-[2.5rem] sm:rounded-[4rem] z-0 transition-all duration-700"></div>

            <div className="advantage-showcase relative z-10">
              <div className="advantage-media-stage">
                <div className="advantage-gallery-topline">
                  <span>Leaf Creationism</span>
                </div>

                <div className="advantage-gallery-center">
                  <div className="advantage-pill">
                    <span></span>
                    <strong>The Leaf Advantage</strong>
                  </div>

                  <h2>
                    WHY LEADING BRANDS CHOOSE LEAF CREATIONISM
                  </h2>

                  <p>
                    A complete creative system for brands that need design, code, motion, and growth working together.
                  </p>
                </div>

                <CylinderCarousel
                  images={advantageCylinderImages}
                  aria-label="Selected Leaf Creationism work"
                />

                <div className="advantage-stat-grid">
                  {[
                    ['124', 'Products launched'],
                    ['86', 'Global partners'],
                    ['98%', 'Client retention'],
                    [studioExperienceLabel, 'Experience active']
                  ].map(([num, label]) => (
                    <div key={label} className={`advantage-stat-card ${label === 'Experience active' ? 'advantage-stat-card-experience' : ''}`}>
                      <span>
                        {label === 'Experience active' ? (
                          <>
                            <em>{studioExperienceParts[0]}</em>
                            <em>{studioExperienceParts[1]}</em>
                          </>
                        ) : num}
                      </span>
                      <strong>{label}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: Studio Heads */}
          <section className="home-clients-section studio-heads-section" aria-label="Leaf Creationism leadership">
            <div className="studio-heads-shell">
              <header className="studio-heads-indigo-heading">
                <span>STUDIO HEADS / LEAF CREATIONISM</span>
                <h2>Creative work, led by</h2>
                <p>the people behind every launch</p>
              </header>

              <div
                className="studio-heads-indigo-stage"
                style={{ '--studio-translate': activeStudioHead === 0 ? '0%' : 'calc(-50% - 0.35rem)' }}
                onTouchStart={(event) => {
                  studioHeadsTouchStartX.current = event.touches[0]?.clientX ?? null;
                }}
                onTouchEnd={(event) => {
                  if (studioHeadsTouchStartX.current === null) return;
                  const endX = event.changedTouches[0]?.clientX ?? studioHeadsTouchStartX.current;
                  const delta = endX - studioHeadsTouchStartX.current;
                  if (Math.abs(delta) > 42) {
                    setActiveStudioHead((current) => delta < 0 ? 1 : 0);
                  }
                  studioHeadsTouchStartX.current = null;
                }}
              >
                <button
                  className="studio-heads-indigo-control studio-heads-indigo-control-left"
                  type="button"
                  aria-label="Previous studio head card"
                  onClick={() => setActiveStudioHead((current) => current === 0 ? 1 : 0)}
                >‹</button>

                <div className="studio-heads-indigo-track">
                  <article className={`studio-heads-indigo-card studio-heads-indigo-card-person is-jibin ${activeStudioHead === 0 ? 'is-active' : ''}`}>
                    <div className="studio-heads-indigo-image">
                      <img src={studioHeads[0].image} alt={studioHeads[0].alt} loading="eager" decoding="async" fetchpriority="high" draggable="false" />
                    </div>
                    <div className="studio-heads-indigo-person-copy">
                      <strong>{studioHeads[0].name}</strong>
                      <small>{studioHeads[0].role}</small>
                    </div>
                  </article>

                  <article className={`studio-heads-indigo-card studio-heads-indigo-card-note ${activeStudioHead === 1 ? 'is-active' : ''}`}>
                    <div className="studio-heads-indigo-grid" aria-hidden="true"></div>
                    <div>
                      <span>ONE STUDIO / TWO CREATIVE HEADS</span>
                      <h3>Built around clear thinking and brave execution.</h3>
                      <p>From brand direction and product systems to campaigns and launches, every decision stays close to the people leading the work.</p>
                    </div>
                    <footer>
                      <span>STRATEGY</span>
                      <span>DESIGN</span>
                      <span>LAUNCH</span>
                    </footer>
                  </article>

                  <article className={`studio-heads-indigo-card studio-heads-indigo-card-person is-xandra ${activeStudioHead === 1 ? 'is-active' : ''}`}>
                    <div className="studio-heads-indigo-image">
                      <img src={studioHeads[1].image} alt={studioHeads[1].alt} loading="eager" decoding="async" fetchpriority="high" draggable="false" />
                    </div>
                    <div className="studio-heads-indigo-person-copy">
                      <strong>{studioHeads[1].name}</strong>
                      <small>{studioHeads[1].role}</small>
                    </div>
                  </article>
                </div>

                <button
                  className="studio-heads-indigo-control studio-heads-indigo-control-right"
                  type="button"
                  aria-label="Next studio head card"
                  onClick={() => setActiveStudioHead((current) => current === 1 ? 0 : 1)}
                >›</button>
              </div>

              <footer className="studio-heads-indigo-footer">
                <span>0{activeStudioHead + 1}</span>
                <i><b style={{ width: `${((activeStudioHead + 1) / 2) * 100}%` }}></b></i>
                <span>02</span>
                <button type="button" onClick={() => navigateTo('calendar')}>WORK WITH THE STUDIO <ArrowUpRight size={14} /></button>
              </footer>
            </div>
          </section>

          {/* SECTION 3.1: Service Features Dashboard */}
          <div className="service-feature-section relative left-1/2 w-screen -translate-x-1/2 z-10 overflow-hidden">
            <div className="service-feature-shell">
              <div className="service-feature-dashboard" aria-label="Leaf Creationism service features">
                <div className="service-feature-topbar">
                  <div className="service-feature-duration">
                    <span>Service suite</span>
                    <strong>08</strong>
                    <small>core services</small>
                  </div>
                  <button
                    className="service-feature-book"
                    type="button"
                    onClick={() => {
                      navigateTo('calendar');
                    }}
                  >
                    Book a Strategy Call
                  </button>
                  <div className="service-feature-avatar" aria-label="Leaf Creationism">
                    <img src={localLeafLogoWhite} alt="Leaf Creationism logo" />
                  </div>
                </div>

                <div className="service-feature-grid">
                  <article className="service-feature-card service-feature-clock">
                    <div className="service-feature-service-icon">
                      <PenTool size={34} strokeWidth={1.55} />
                    </div>
                    <div className="service-feature-note">
                      <span>Experience design</span>
                      <p><strong>UI/UX systems</strong> for apps, websites, landing pages, and product flows.</p>
                    </div>
                  </article>

                  <article className="service-feature-card service-feature-folder">
                    <div className="service-feature-menu" aria-hidden="true">
                      <span></span><span></span><span></span>
                    </div>
                    <div className="service-feature-folder-icon">
                      <MonitorSmartphone size={42} strokeWidth={1.55} />
                    </div>
                    <span className="service-feature-label">Build studio</span>
                    <h3>Web & app systems</h3>
                    <div className="service-feature-meta">
                      <span>React</span>
                      <span>Shopify</span>
                      <span>No-code</span>
                    </div>
                  </article>
                </div>

                <div className="service-feature-bottom">
                  <div className="service-feature-plus" aria-hidden="true">
                    <Cpu size={34} strokeWidth={1.55} />
                  </div>
                  <button
                    className="service-feature-card service-feature-message"
                    type="button"
                    onClick={() => {
                      navigateTo('projects');
                    }}
                    aria-label="Open active projects page"
                  >
                    <span>Active project</span>
                    <p><strong>3D motion brand kit</strong>, two full-stack websites, and launch assets in progress.</p>
                    <small>Tap for full project details <ArrowUpRight size={16} strokeWidth={1.8} /></small>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3.5: Edgy Editorial FAQ Section */}
          <div className="home-faq-section faq-warm-glass w-full relative z-10 -mt-2 lg:-mt-4 mb-16 lg:mb-24 group/faq">
            <div className="relative w-full max-w-[1120px] mx-auto flex flex-col lg:grid lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-16 items-start">
              
              {/* Background Glow */}
              <div className="faq-warm-aura absolute top-1/2 left-1/4 w-[50%] h-[50%] blur-[100px] rounded-full pointer-events-none -z-10 transition-transform duration-1000 group-hover/faq:scale-110"></div>
              
              {/* Left Side: Sticky Title Deck */}
              <div className="w-full lg:sticky lg:top-32 relative z-10">
                 <div className="faq-kicker inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
                    <span className="faq-kicker-dot w-2 h-2 rounded-full animate-pulse"></span>
                    <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">Uncomfortable Truths</span>
                 </div>
                 <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-gray-900 mb-5 drop-shadow-sm">
                    You ask.<br/>
                    <span className="faq-accent-title text-transparent bg-clip-text">We spill.</span>
                 </h2>
                 <p className="text-gray-600 font-light text-base lg:text-lg leading-relaxed mb-7 max-w-md">
                    No PR fluff. No corporate jargon. Just the raw reality of how we operate and why we're the best at it.
                 </p>

                 <div className="faq-video-orbit relative w-[min(68vw,15rem)] sm:w-64 lg:w-[17rem] aspect-[9/16] mx-auto lg:mx-0 mb-8">
                   <div className="faq-video-ring absolute inset-0"></div>
                   <div className="faq-video-circle absolute inset-[0.42rem] sm:inset-2 overflow-hidden">
                     <video
                       src={localFaqVideo}
                       autoPlay
                       loop
                       muted
                       playsInline
                       preload="metadata"
                       className="absolute inset-0 w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10 mix-blend-overlay"></div>
                   </div>
                   <div className="faq-video-badge absolute -right-3 sm:-right-5 bottom-6 sm:bottom-8 rounded-full px-4 py-2">
                     <span className="faq-badge-text block text-[9px] font-black uppercase tracking-[0.2em]">Live clarity</span>
                   </div>
                 </div>
                 
                 {/* Decorative Line */}
                 <div className="hidden lg:flex items-center gap-4 opacity-30">
                    <div className="h-px bg-gray-900 w-12"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                 </div>
              </div>

              {/* Right Side: Interactive Glass Accordion */}
              <div className="w-full flex flex-col gap-4 relative z-10">
                 {faqs.map((faq, index) => {
                    const isActive = activeFaq === index;
                    return (
                       <div 
                         key={index} 
                         onClick={() => setActiveFaq(isActive ? null : index)}
                         className={`faq-glass-card premium-glass rounded-[1.35rem] border transition-all duration-500 cursor-pointer overflow-hidden ${isActive ? 'is-active' : ''}`}
                       >
                          <div className="p-5 sm:p-6 flex items-center justify-between gap-5 relative z-10">
                             <h3 className={`faq-question text-base sm:text-lg font-medium tracking-tight transition-colors duration-300 ${isActive ? 'is-active' : ''}`}>
                                {faq.q}
                             </h3>
                             <div className={`faq-chevron w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 border ${isActive ? 'is-active rotate-180' : ''}`}>
                                <ChevronDown size={20} className={`transition-transform duration-500 ${isActive ? 'rotate-180 scale-110' : ''}`} />
                             </div>
                          </div>
                          <div 
                            className="px-5 sm:px-6 transition-all duration-500 ease-in-out relative z-0"
                            style={{ 
                              maxHeight: isActive ? '300px' : '0px', 
                              opacity: isActive ? 1 : 0, 
                              paddingBottom: isActive ? '1.5rem' : '0',
                              transform: isActive ? 'translateY(0)' : 'translateY(-10px)'
                            }}
                          >
                             <div className="faq-divider w-full h-px mb-5"></div>
                             <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base pr-4">
                                {faq.a}
                             </p>
                          </div>
                       </div>
                    );
                 })}
              </div>
            </div>
          </div>

          {/* SECTION 4: Editorial VIP Pass & Narrative Form */}
          <div className="home-contact-section w-full relative z-10 -mt-2 lg:-mt-4 group/contact mb-16">
             
             {/* Master Wrapper for Pass Drop Shadow */}
             <div className="access-color-wrap relative w-full max-w-[1080px] mx-auto filter transition-all duration-700 hover:-translate-y-2">
                
                {/* Background Liquid Aura */}
                <div className="access-aura access-aura-one absolute pointer-events-none z-0"></div>
                <div className="access-aura access-aura-two absolute pointer-events-none z-0"></div>
                <div className="access-aura access-aura-three absolute pointer-events-none z-0"></div>

                {/* The Ticket / Pass Container */}
                <div className="access-color-pass relative w-full backdrop-blur-3xl rounded-[2.5rem] sm:rounded-[3rem] flex flex-col md:flex-row overflow-hidden border z-10">
                   
                   {/* --- Left Stub: Metadata --- */}
                   <div className="access-color-stub w-full md:w-[40%] p-6 sm:p-10 lg:p-12 relative flex flex-col justify-between border-b md:border-b-0 md:border-r-[2px] border-dashed">
                      
                      {/* CSS Cutout Notches (Desktop) */}
                      <div className="access-ticket-notch hidden md:block absolute -right-5 top-[-20px] w-10 h-10 rounded-full z-20"></div>
                      <div className="access-ticket-notch hidden md:block absolute -right-5 bottom-[-20px] w-10 h-10 rounded-full z-20"></div>

                      <div className="relative z-10">
                         <div className="access-color-badge inline-flex items-center gap-2 px-3 py-1 rounded-full mb-10">
                            <div className="access-color-pulse w-1.5 h-1.5 rounded-full"></div>
                            <span className="text-[9px] font-bold tracking-[0.2em] uppercase">Access Granted</span>
                         </div>

                         <h3 className="access-color-title text-3xl sm:text-5xl font-light tracking-tighter mb-2 leading-none">
                            INITIATE
                         </h3>
                         <p className="access-color-protocol text-xs font-bold tracking-widest uppercase mb-8 sm:mb-12">Project Protocol // 01</p>
                      </div>

                      <div className="flex flex-col gap-6 relative z-10">
                         {/* Direct Email Info */}
                         <div className="flex flex-col gap-2">
                            <span className="access-color-label text-[10px] font-bold uppercase tracking-[0.2em]">Email Uplink</span>
                            <a href="mailto:leafcreationism@gmail.com" className="access-color-link text-gray-900 font-medium tracking-tight transition-colors flex items-center gap-3 w-fit group/mail">
                               <div className="access-color-icon access-color-icon-blue w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                                  <Mail size={16} />
                               </div>
                               <span className="access-email-text">leafcreationism@gmail.com</span>
                            </a>
                         </div>

                         {/* WhatsApp Info */}
                         <div className="flex flex-col gap-2">
                            <span className="access-color-label text-[10px] font-bold uppercase tracking-[0.2em]">WhatsApp Link</span>
                            <a href="https://wa.me/918589038479" target="_blank" rel="noopener noreferrer" className="access-color-link text-gray-900 font-medium tracking-tight transition-colors flex items-center gap-3 group/wa w-fit">
                               <div className="access-color-icon access-color-icon-green w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                                  <WhatsAppIcon size={16} />
                               </div>
                               Call or Chat 
                               <span className="access-color-online px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider transition-colors shadow-sm">
                                  ONLINE
                               </span>
                            </a>
                         </div>

                         <div className="access-color-reply rounded-2xl border p-4">
                            <span className="access-color-label text-[10px] font-bold uppercase tracking-[0.2em]">Typical reply</span>
                            <p className="text-gray-900 font-semibold mt-1">{isStudioOnline ? 'Within 2 hours' : 'Next working window'}</p>
                         </div>
                      </div>
                   </div>

                   {/* --- Right Main: The Narrative Form --- */}
                   <div className="access-color-form w-full md:w-[60%] p-6 sm:p-12 lg:p-16 relative flex flex-col justify-center">
                      
                      <form className="w-full relative z-10" onSubmit={submitAccessRequest}>
                         
                         {/* The Mad Libs Paragraph */}
                         <h2 className="access-narrative-copy text-[22px] sm:text-[28px] lg:text-[30px] font-light leading-[1.85] sm:leading-[1.9] text-gray-600 tracking-tight text-left">
                            Hello Leaf team, my name is 
                            <input
                              type="text"
                              name="name"
                              required
                              placeholder="Your Name"
                              className="narrative-input access-input-name w-[140px] sm:w-[180px]"
                              value={accessForm.name}
                              onChange={(event) => updateAccessField('name', event.target.value)}
                            />
                            and I am representing 
                            <input
                              type="text"
                              name="company"
                              required
                              placeholder="Company Name"
                              className="narrative-input access-input-company w-[180px] sm:w-[220px]"
                              value={accessForm.company}
                              onChange={(event) => updateAccessField('company', event.target.value)}
                            />.
                            <br className="hidden lg:block"/>
                            I am looking for an elite agency to help me with 
                            <div className="inline-block relative">
                               <select
                                 name="service"
                                 required
                                 className="narrative-select access-input-service w-[200px] sm:w-[240px]"
                                 value={accessForm.service}
                                 onChange={(event) => updateAccessField('service', event.target.value)}
                               >
                                  <option value="" disabled>Select a Service</option>
                                  <option value="uiux">UI/UX Design</option>
                                  <option value="web">Web Development</option>
                                  <option value="brand">Brand Identity</option>
                                  <option value="ai">AI Marketing Ads</option>
                               </select>
                            </div>.
                            <br className="hidden lg:block"/>
                            You can reach me at 
                            <input
                              type="email"
                              name="email"
                              required
                              placeholder="Email Address"
                              className="narrative-input access-input-email w-[200px] sm:w-[260px]"
                              value={accessForm.email}
                              onChange={(event) => updateAccessField('email', event.target.value)}
                            />
                            to discuss how we can dominate the market.
                         </h2>

                         <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div className="flex items-center gap-3 opacity-60">
                               <Shield size={16} className="text-gray-900" />
                               <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-gray-900">Encrypted Transmission</span>
                            </div>

                            {/* Oversized Premium Submit Button */}
                            <button type="submit" disabled={formStatus === 'sending'} className="group/btn relative overflow-hidden bg-gray-900 text-white rounded-full pl-8 pr-2 py-2 flex items-center gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(32,80,227,0.3)] hover:bg-[#2050E3] transition-all duration-500 transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-wait">
                               <span className="font-semibold text-sm tracking-wide z-10">{formStatus === 'sending' ? 'Sending...' : 'Send Request'}</span>
                               <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm relative z-10 group-hover/btn:bg-white group-hover/btn:text-[#2050E3] transition-colors duration-500">
                                  <ArrowUpRight size={20} className="group-hover/btn:rotate-45 transition-transform duration-500" />
                               </div>
                               {/* Hover Shimmer */}
                               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1s_ease-out_forwards]"></div>
                            </button>
                         </div>

                         {formStatus === 'access-sent' && (
                           <p className="mt-5 text-sm font-semibold text-emerald-600">Request sent. We will reach you within 24 hours. Your data is safe with us.</p>
                         )}
                         {formStatus === 'error' && (
                           <p className="mt-5 text-sm font-semibold text-red-500">Could not send right now. Please try again.</p>
                         )}

                      </form>
                   </div>
                </div>
             </div>
          </div>
          
          <section className="home-status-marquee-section relative left-1/2 w-screen -translate-x-1/2 z-10" aria-label="Leaf Creationism live project status">
            <div className="status-marquee-shell">
              <div className="status-marquee-track">
                {[...homeStatusTickerItems, ...homeStatusTickerItems].map((item, idx) => (
                  <span className="status-marquee-item" key={`${item}-${idx}`}>
                    <span className={`status-marquee-dot ${item.includes('online') ? 'is-live' : item.includes('offline') ? 'is-offline' : ''}`}></span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Services View */}
      {activeNav === 'services' && (
        <main className="max-w-6xl mx-auto px-5 sm:px-6 pt-10 sm:pt-14 pb-32 relative z-10 animate-fade-in">
          <div className="mb-10 sm:mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="services-liquid-pill inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 w-fit">
                <Layers size={14} className="text-emerald-500" />
                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-emerald-600">Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-gray-900 leading-[1.02]">
                Design-led services for brands that need to <span className="font-medium">move faster.</span>
              </h1>
              <p className="text-gray-500 max-w-xl mt-4 text-base sm:text-lg font-light">
                Strategy, brand campaigns, product design, and engineering working as one connected system from idea to launch.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 lg:max-w-sm lg:justify-end">
              {capabilities.map((cap, idx) => (
                <button
                  key={cap.id}
                  onClick={() => setActiveCapability(idx)}
                  className={`services-liquid-filter px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeCapability === idx
                      ? 'is-active text-white'
                      : 'text-gray-600 hover:text-emerald-700'
                  }`}
                >
                  {cap.title}
                </button>
              ))}
            </div>
          </div>

          <section className="services-showcase-shell relative overflow-visible text-white mb-12 sm:mb-16">
            <div className="relative z-10">
              <div className="services-showcase-track services-showcase-single-track">
                <div className="services-showcase-card services-single-showcase-card group/story">
                  <div className="services-showcase-video">
                    <video
                      src={servicesFeatureVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/story:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative w-full group/capabilities">
            <div className="absolute top-20 left-1/4 w-[60%] h-[60%] bg-gradient-to-tr from-emerald-300/20 to-[#0ea5e9]/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div className="flex flex-col lg:flex-row gap-0 lg:gap-16 items-start relative">
              <div className="w-full lg:w-[55%] flex flex-col relative z-10 gap-3">
                {capabilities.map((cap, idx) => {
                  const isActive = activeCapability === idx;
                  return (
                    <div
                      key={cap.id}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isActive}
                      data-capability={cap.id}
                      onClick={() => setActiveCapability(idx)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setActiveCapability(idx);
                        }
                      }}
                      className={`services-liquid-row group/cap cursor-pointer relative px-4 sm:px-5 py-7 sm:py-9 transition-all duration-500 ${isActive ? 'is-active' : ''}`}
                    >
                      <div className="relative z-10 flex items-center justify-between pr-4 sm:pr-8">
                        <div className="flex items-start sm:items-center gap-4 sm:gap-8">
                          <span className={`font-mono text-sm sm:text-base font-bold transition-colors duration-500 pt-2 sm:pt-0 ${isActive ? 'text-emerald-600' : 'text-gray-300 group-hover/cap:text-gray-400'}`}>
                            0{idx + 1}
                          </span>
                          <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight transition-all duration-500 origin-left ${isActive ? 'text-gray-900 translate-x-2 sm:translate-x-4' : 'text-gray-300 group-hover/cap:text-gray-500'}`}>
                            {cap.title}
                          </h2>
                        </div>

                        <div className={`services-liquid-arrow w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${isActive ? 'is-active transform rotate-0' : '-rotate-45'}`}>
                          <ArrowRight size={20} className="sm:w-6 sm:h-6" />
                        </div>
                      </div>

                      <div className={`services-liquid-panel ${isActive ? 'is-active' : ''} pl-12 sm:pl-20 pr-4 sm:pr-8`}>
                        <div className="services-liquid-panel-inner">
                          <p className="text-gray-600 font-light text-base sm:text-lg leading-relaxed mb-6">
                            {cap.desc}
                          </p>

                          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 lg:mb-2">
                            {cap.tags.map((tag, tIdx) => (
                              <span key={tIdx} className="services-liquid-tag px-4 py-2 rounded-full text-gray-700 text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
                            {cap.items.map((item, itemIdx) => (
                              <div
                                key={item}
                                className="services-liquid-item group/item relative overflow-hidden rounded-2xl px-4 py-3"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-[10px] font-black text-emerald-500">0{itemIdx + 1}</span>
                                  <span className="text-sm font-semibold text-gray-800">{item}</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="services-liquid-media block lg:hidden w-full aspect-[4/3] sm:aspect-video rounded-[1.5rem] overflow-hidden relative mt-6">
                            <img src={cap.image} alt={cap.title} loading="lazy" decoding="async" className="w-full h-full object-cover transform scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent mix-blend-overlay"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="hidden lg:block w-[45%] relative min-h-[600px] z-10 lg:sticky lg:top-32">
                <div className="services-liquid-media w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden relative group/sticky">
                  {capabilities.map((cap, idx) => (
                    <div
                      key={`services-media-${cap.id}`}
                      className={`absolute inset-0 w-full h-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] origin-bottom ${activeCapability === idx ? 'opacity-100 scale-100 z-10 delay-100' : 'opacity-0 scale-105 z-0 pointer-events-none'}`}
                    >
                      <img src={cap.image} alt={cap.title} loading="lazy" decoding="async" className={`w-full h-full object-cover transition-transform duration-[1.1s] ease-out ${activeCapability === idx ? 'scale-100' : 'scale-105'}`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent mix-blend-overlay"></div>

                      <div className={`services-liquid-badge absolute bottom-6 left-6 px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-500 delay-300 ${activeCapability === idx ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white shadow-sm drop-shadow-md">
                          {cap.title} Showcase
                        </span>
                      </div>
                    </div>
                  ))}

                  <div className="absolute inset-0 rounded-[calc(2.5rem-6px)] shadow-[inset_0_0_34px_rgba(0,0,0,0.12)] pointer-events-none z-20"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="services-phase-section mt-16 sm:mt-24">
            <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.28em] text-emerald-600 mb-3">Every phase matters</p>
                <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-gray-900">
                  How we keep the work sharp.
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-500 max-w-md font-light">
                A simple operating rhythm for keeping strategy honest, craft sharp, and delivery focused.
              </p>
            </div>

            <div className="services-phase-track grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {servicePhases.map((phase, idx) => {
                const PhaseIcon = phase.icon;
                return (
                  <div
                    key={phase.title}
                    style={{
                      '--phase-a': phase.colorA,
                      '--phase-b': phase.colorB,
                      '--phase-c': phase.colorC,
                      '--phase-delay': `${idx * 0.45}s`
                    }}
                    className="services-liquid-phase group/phase relative overflow-hidden min-h-[15rem] rounded-[2rem] p-5 sm:p-6 transition-all duration-500"
                  >
                    <div className="services-phase-orb services-phase-orb-a"></div>
                    <div className="services-phase-orb services-phase-orb-b"></div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-10">
                        <div className="services-liquid-phase-icon w-12 h-12 rounded-2xl text-white flex items-center justify-center">
                          <PhaseIcon size={20} />
                        </div>
                        <span className="text-xs font-black text-gray-300">0{idx + 1}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                      <p className="text-sm text-gray-500 font-light leading-relaxed">{phase.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      )}

      {/* Calendar View */}
      {activeNav === 'calendar' && (
        <main className="schedule-page schedule-dashboard-v2 max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-14 pb-36 relative z-10 animate-fade-in">
          <section className="schedule-hero relative overflow-hidden rounded-[2rem] sm:rounded-[2.75rem] p-5 sm:p-8 lg:p-10 mb-5 sm:mb-8">
            <div className="schedule-hero-grid relative z-10 grid lg:grid-cols-[1.08fr_0.92fr] gap-6 lg:gap-10 items-stretch">
              <div className="flex flex-col justify-between gap-8">
                <div>
                  <div className="schedule-kicker inline-flex items-center gap-2 rounded-full px-3.5 py-2 mb-6">
                    <span className={`schedule-live-dot ${isStudioOnline ? 'is-online' : 'is-offline'}`}></span>
                    <span>{isStudioOnline ? 'Leaf online now' : 'Leaf offline now'}</span>
                    <strong>{indiaTime} IST</strong>
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-gray-950 leading-[0.98]">
                    Your <span className="font-medium">Schedule</span>
                  </h1>
                  <p className="mt-5 max-w-xl text-base sm:text-lg text-gray-500 font-light leading-relaxed">
                    Pick the kind of conversation you need. We keep calls focused, practical, and tied to a clear next action.
                  </p>
                </div>

                <div className="schedule-action-row flex flex-col sm:flex-row gap-3">
                  <a href={appointmentMailHref} className="schedule-primary-action">
                    <Mail size={18} />
                    Confirm by email
                  </a>
                  <a href={appointmentWhatsAppHref} target="_blank" rel="noopener noreferrer" className="schedule-secondary-action">
                    <WhatsAppIcon size={18} />
                    Send on WhatsApp
                  </a>
                </div>
              </div>

              <div className="schedule-selected-card">
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">Selected session</span>
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-950 mt-2">{selectedSchedule.title}</h2>
                  </div>
                  <div className="schedule-selected-icon" style={{ '--schedule-accent': selectedSchedule.accent }}>
                    <SelectedScheduleIcon size={22} />
                  </div>
                </div>
                <p className="text-gray-500 font-light leading-relaxed mb-6">{selectedSchedule.desc}</p>
                <div className="schedule-progress-row">
                  <div className="schedule-progress-ring" aria-label="Appointment setup complete">
                    <div>
                      <strong>3/3</strong>
                      <small>Ready</small>
                    </div>
                  </div>
                  <div className="schedule-progress-copy">
                    <span>Appointment setup</span>
                    <strong>{selectedAppointment.label}, {selectedAppointment.date}</strong>
                    <small>{selectedSlot.time} IST / {selectedSchedule.title}</small>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="schedule-mini-stat">
                    <Clock size={16} />
                    <span>{selectedSchedule.time}</span>
                    <small>Session length</small>
                  </div>
                  <div className="schedule-mini-stat">
                    <Shield size={16} />
                    <span>{selectedSlot.time}</span>
                    <small>{selectedAppointment.date} / Fixed IST slot</small>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid lg:grid-cols-[0.95fr_1.05fr] gap-5 sm:gap-6">
            <div className="schedule-panel schedule-type-panel p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-600">Optional format</span>
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-950 mt-1">Call type</h2>
                  <p className="mt-1 text-sm text-gray-500 font-light">Discovery call is selected by default. Change it only if you need a different session.</p>
                </div>
                <Calendar size={22} className="text-emerald-500" />
              </div>
              <div className="grid gap-3">
                {scheduleTypes.map((type) => {
                  const TypeIcon = type.icon;
                  const isSelected = selectedScheduleType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedScheduleType(type.id)}
                      className={`schedule-type-card ${isSelected ? 'is-selected' : ''}`}
                      style={{ '--schedule-accent': type.accent }}
                    >
                      <span className="schedule-type-icon"><TypeIcon size={18} /></span>
                      <span className="flex-1 text-left">
                        <strong>{type.title}</strong>
                        <small>{type.time} / {type.desc}</small>
                      </span>
                      <ArrowRight size={17} className="schedule-type-arrow" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="schedule-panel schedule-booking-panel p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-600">Online appointment</span>
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-950 mt-1">Pick date and fixed time</h2>
                </div>
                <div className="schedule-time-pill">
                  <Clock size={14} />
                  10 AM - 9 PM IST
                </div>
              </div>

              <div className="schedule-calendar-strip" aria-label="Choose appointment day">
                {appointmentDays.map((day) => (
                  <button
                    key={day.id}
                    type="button"
                    onClick={() => setSelectedAppointmentDay(day.id)}
                    className={`schedule-date-card ${selectedAppointmentDay === day.id ? 'is-selected' : ''}`}
                  >
                    <span>{day.label}</span>
                    <strong>{day.date}</strong>
                  </button>
                ))}
              </div>

              <div className="schedule-slot-grid" aria-label="Choose appointment time">
                {appointmentSlots.map((slot) => (
                  <button
                    key={slot.time}
                    type="button"
                    onClick={() => setSelectedAppointmentTime(slot.time)}
                    className={`schedule-slot-card ${selectedAppointmentTime === slot.time ? 'is-selected' : ''}`}
                  >
                    <span>{slot.time}</span>
                    <strong>{slot.label}</strong>
                    <small>{slot.note}</small>
                  </button>
                ))}
              </div>

              <div className="schedule-appointment-summary">
                <div>
                  <span>Appointment ready</span>
                  <strong>{selectedAppointment.full}</strong>
                  <small>{selectedSchedule.title} at {selectedSlot.time} IST / {selectedSlot.label}</small>
                </div>
                <button type="button" className="schedule-final-cart-button" onClick={() => navigateTo('referenceCart')}>
                  Continue to final cart
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </section>

          <section className="schedule-bottom-grid grid lg:grid-cols-[1fr_0.8fr] gap-5 sm:gap-6 mt-5 sm:mt-6">
            <div className="schedule-panel schedule-prep-card p-5 sm:p-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-pink-600">Before the call</span>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-950 mt-2">Bring these and we can move fast.</h2>
              </div>
              <div className="schedule-prep-list">
                {schedulePrep.map((item) => (
                  <div className="schedule-prep-item" key={item}>
                    <Check size={16} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="schedule-panel schedule-contact-card p-5 sm:p-6">
              <div className="schedule-contact-orb">
                <LeafIcon size={40} />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 mt-5">Need a faster slot?</h2>
              <p className="text-gray-500 font-light mt-2 leading-relaxed">
                Send one line about the project and we will suggest the nearest available window.
              </p>
              <div className="schedule-contact-links">
                <a href="mailto:leafcreationism@gmail.com">leafcreationism@gmail.com</a>
                <a href="https://wa.me/918589038479" target="_blank" rel="noopener noreferrer">+91 85890 38479</a>
              </div>
            </div>
          </section>
          <div className="schedule-nav-spacer" aria-hidden="true"></div>
        </main>
      )}

      {/* Projects View */}
      {activeNav === 'projects' && (
        <main className="projects-page projects-simple-page max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-36 relative z-10 animate-fade-in">
          <section className="projects-simple-shell">
            <header className="projects-simple-head">
              <div>
                <span><Activity size={14} /> Active project room</span>
                <h1>Delivery dashboard</h1>
                <p>Three live projects, their current stage, and the next launch priorities.</p>
              </div>
              <div className="projects-simple-status">
                <i></i>
                <span>{projectCycleLabel}</span>
                <strong>{indiaTime} IST</strong>
              </div>
            </header>

            <div className="projects-simple-cards">
              {activeProjects.map((project, index) => {
                const ProjectIcon = project.icon;
                return (
                  <article className={`projects-simple-card tone-${index + 1}`} key={project.title}>
                    <div className="projects-simple-card-icon"><ProjectIcon size={23} /></div>
                    <span>{project.type}</span>
                    <h2>{project.title}</h2>
                    <p>{project.desc}</p>
                    <div className="projects-simple-meta">
                      <strong>{project.status}</strong>
                      <small>{project.timeline}</small>
                    </div>
                    <i className="projects-simple-progress"><b style={{ width: `${project.progress}%` }}></b></i>
                  </article>
                );
              })}
            </div>

            <div className="projects-simple-lower">
              <section className="projects-simple-roadmap">
                <div className="projects-simple-section-head">
                  <span>Delivery roadmap</span>
                  <h2>Current production stages</h2>
                </div>
                {activeProjects.map((project) => {
                  const ProjectIcon = project.icon;
                  return (
                    <article key={project.title}>
                      <div><ProjectIcon size={18} /></div>
                      <section>
                        <strong>{project.title}</strong>
                        <span>{project.status} / {project.timeline}</span>
                      </section>
                      <i><b style={{ width: `${project.progress}%` }}></b></i>
                    </article>
                  );
                })}
              </section>

              <aside className="projects-simple-next">
                <div className="projects-simple-section-head">
                  <span>Pipeline outlook</span>
                  <h2>Next launch windows</h2>
                </div>
                <article>
                  <span>QA next</span>
                  <strong>{projectQaNext.title}</strong>
                  <p>{projectQaNext.status} / {projectQaNext.daysToLaunch} days</p>
                </article>
                <article>
                  <span>Launch prep</span>
                  <strong>{projectLaunchPrep.title}</strong>
                  <p>{projectLaunchPrep.timeline}</p>
                </article>
              </aside>
            </div>

            <section className="projects-delivery-signal" aria-label="Live delivery signal">
              <div className="projects-delivery-orbit" aria-hidden="true">
                <LeafIcon size={31} />
                <i><Activity size={15} /></i>
                <i><Zap size={15} /></i>
                <i><Cloud size={15} /></i>
              </div>
              <div className="projects-delivery-signal-copy">
                <span>Live delivery signal</span>
                <h2>Every project is moving through one shared production rhythm.</h2>
                <p>Design decisions, engineering checks, launch QA, and client approvals stay synchronized without exposing private project details.</p>
              </div>
              <div className="projects-delivery-events">
                {[
                  ['Design lock', 'Creative systems approved'],
                  ['Build sync', 'Engineering handoff active'],
                  ['Launch watch', 'QA windows monitored']
                ].map(([title, text], index) => (
                  <article key={title}><span>0{index + 1}</span><div><strong>{title}</strong><p>{text}</p></div></article>
                ))}
              </div>
            </section>
          </section>
        </main>
      )}

      {/* Previous dashboard retained outside the rendered flow for reference. */}
      {false && activeNav === 'projects' && (
        <main className="projects-page projects-dashboard-page max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-36 relative z-10 animate-fade-in">
          <section className="projects-dashboard-shell">
            <div className="projects-dashboard-top">
              <div className="projects-dashboard-identity">
                <div className="projects-dashboard-logo">
                  <LeafIcon size={34} />
                </div>
                <div>
                  <span>Active project room</span>
                  <h1>Delivery dashboard</h1>
                  <p>Current client work, production stages, risks, and launch preparation. Active services refresh every two weeks.</p>
                </div>
              </div>

              <div className="projects-dashboard-actions">
                <div className="projects-dashboard-pill">
                  <Home size={15} />
                  Project overview
                </div>
                <div className="projects-dashboard-pill projects-dashboard-search">
                  <Search size={15} />
                  Search active work
                </div>
                <div className="projects-dashboard-time">
                  <Clock size={16} />
                  <span>{indiaTime}</span>
                  <small>IST</small>
                </div>
                <div className="projects-dashboard-cycle">
                  <Activity size={15} />
                  <span>{projectCycleLabel}</span>
                </div>
              </div>
            </div>

            <div className="projects-dashboard-layout">
              <div className="projects-dashboard-main">
                <div className="projects-dashboard-metrics">
                  {activeProjects.map((project, idx) => {
                    const ProjectIcon = project.icon;
                    const tones = ['green', 'blue', 'slate'];
                    return (
                    <article className={`projects-dashboard-metric is-${tones[idx]}`} key={project.title}>
                      <div className="projects-dashboard-liquid" aria-hidden="true"></div>
                      <div className="projects-dashboard-metric-head">
                        <div className="projects-dashboard-metric-icon">
                          <span className="projects-icon-orbit" aria-hidden="true"></span>
                          <span className="projects-icon-shadow" aria-hidden="true"></span>
                          <span className="projects-icon-sphere" aria-hidden="true"></span>
                          <ProjectIcon size={22} strokeWidth={1.65} />
                        </div>
                        <span>{project.type}</span>
                      </div>
                      <h2>{project.title}</h2>
                      <p>{project.status} / {project.timeline}</p>
                      <div className="projects-dashboard-metric-foot">
                        <i><b style={{ width: `${project.progress}%` }}></b></i>
                      </div>
                    </article>
                    );
                  })}
                </div>

                <div className="projects-week-widget">
                  <div className="projects-widget-heading">
                    <div>
                      <span>Delivery roadmap</span>
                      <h2>Where the active work stands</h2>
                    </div>
                    <div className="projects-mini-note">stage progress</div>
                  </div>
                  <div className="projects-week-chart">
                    {projectWeekFlow.map((item) => (
                      <div className="projects-week-day" key={item.day}>
                        <span>{item.day}</span>
                        <div className="projects-week-bar">
                          <i className={`is-${item.tone}`} style={{ height: item.height }}></i>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="projects-notes-widget">
                  <div className="projects-widget-heading">
                    <div>
                      <span>Client-visible queue</span>
                      <h2>Current active works</h2>
                    </div>
                    <ArrowUpRight size={18} />
                  </div>
                  <div className="projects-note-list">
                    {activeProjects.map((project, idx) => {
                      const ProjectIcon = project.icon;
                      return (
                        <article className="projects-note-row" key={project.title}>
                          <div className="projects-note-icon">
                            <ProjectIcon size={18} />
                          </div>
                          <div>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <small>{project.status} / {project.timeline}</small>
                          </div>
                          <strong>{project.progress}%</strong>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>

              <aside className="projects-dashboard-side">
                <div className="projects-premium-card">
                  <span>Pipeline outlook</span>
                  <h2>Next launch windows</h2>
                  <p>Active services rotate every two weeks. This panel shows the next QA priority and closest launch-prep item for the current cycle.</p>
                  <div className="projects-launch-window-list">
                    <div className="projects-launch-window-row">
                      <span>QA next</span>
                      <strong>{projectQaNext.title}</strong>
                      <small>{projectQaNext.status} / {projectQaNext.daysToLaunch} days</small>
                      <i><b style={{ width: `${projectQaNext.progress}%` }}></b></i>
                    </div>
                    <div className="projects-launch-window-row">
                      <span>Launch prep</span>
                      <strong>{projectLaunchPrep.title}</strong>
                      <small>{projectLaunchPrep.timeline}</small>
                      <i><b style={{ width: `${projectLaunchPrep.progress}%` }}></b></i>
                    </div>
                  </div>
                </div>

                <div className="projects-completed-widget">
                  <div className="projects-widget-heading">
                    <div>
                      <span>Build health</span>
                      <h2>Progress by active project</h2>
                    </div>
                  </div>
                  {activeProjects.map((project) => (
                    <div className="projects-completion-row" key={project.title}>
                      <div>
                        <span>{project.type}</span>
                        <strong>{project.progress}%</strong>
                      </div>
                      <i><b style={{ width: `${project.progress}%` }}></b></i>
                    </div>
                  ))}
                </div>

                <div className="projects-team-widget">
                  <span>Operating model</span>
                  <h2>{projectAverageProgress}% average delivery</h2>
                  <p>Every active project is reviewed through creative quality, product logic, technical readiness, and launch risk.</p>
                </div>
              </aside>
            </div>
          </section>

          <section className="projects-about-section">
            <div className="projects-about-intro">
              <span>Studio operating system</span>
              <h2>
                We are a small creative engineering team turning bold brand ideas into launch-ready digital products.
              </h2>
              <p>
                Inspired by the structure of modern agency about pages, this section shows how Leaf Creationism runs active work: clear leadership, compact teams, measurable progress, and launch-focused systems.
              </p>
            </div>

            <div className="projects-stat-grid">
              {projectStudioStats.map((stat) => (
                <div className="projects-stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                  <p>{stat.text}</p>
                </div>
              ))}
            </div>

            <div className="projects-principle-grid">
              {projectPrinciples.map((item, idx) => (
                <article className="projects-principle-card" key={item.title}>
                  <span>0{idx + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="projects-team-strip">
              {['Creative Direction', 'Product Design', 'Full-stack Dev', 'Motion Design', 'Launch QA', 'Growth Content'].map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>

          </section>
        </main>
      )}

      {/* Launch Cloud View */}
      {activeNav === 'launch' && (
        <main className="launch-page launch-simple-page max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-36 relative z-10 animate-fade-in">
          <section className="launch-simple-hero">
            <div>
              <span><Cloud size={15} /> Launch Cloud</span>
              <h1>Choose what you want to launch. We handle the technical stack.</h1>
              <p>Websites, apps, stores, hosting, backend, databases, domains, AI ads, motion, and post-launch support in one clear plan.</p>
              <button type="button" onClick={() => navigateTo('calendar')}>Plan my launch <ArrowUpRight size={16} /></button>
            </div>
            <aside>
              <div className="launch-simple-live"><i className={isStudioOnline ? 'is-online' : 'is-offline'}></i>{isStudioOnline ? 'Leaf online' : 'Leaf offline'} <strong>{indiaTime} IST</strong></div>
              {[
                ['1', 'Tell us the outcome', 'Website, app, store, campaign, or full launch.'],
                ['2', 'We choose the stack', 'Hosting, backend, database, domain, and automation.'],
                ['3', 'Build and launch', 'QA, deployment, creative assets, and support.']
              ].map(([step, title, text]) => (
                <article key={step}>
                  <span>{step}</span>
                  <div><strong>{title}</strong><p>{text}</p></div>
                </article>
              ))}
            </aside>
          </section>

          <section className="launch-simple-section">
            <div className="launch-simple-heading">
              <span>Start here</span>
              <h2>What are you launching?</h2>
              <p>Pick the closest outcome. You do not need to understand cloud tools first.</p>
            </div>
            <div className="launch-simple-guide">
              {launchQuickGuide.map((item) => {
                const GuideIcon = item.icon;
                return (
                  <article key={item.title}>
                    <GuideIcon size={21} />
                    <span>{item.result}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="launch-simple-section">
            <div className="launch-simple-heading">
              <span>Plans</span>
              <h2>Three clear levels.</h2>
              <p>Start lean, add backend power, or combine development with a complete creative launch.</p>
            </div>
            <div className="launch-simple-plans">
              {launchPlans.map((plan) => (
                <article key={plan.title}>
                  <span>{plan.label}</span>
                  <h3>{plan.title}</h3>
                  <p>{plan.desc}</p>
                  <strong>{plan.price}</strong>
                  <small>{plan.priceNote}</small>
                  <ul>{plan.items.map((item) => <li key={item}><Check size={14} /> {item}</li>)}</ul>
                  <button type="button" onClick={() => navigateTo('calendar')}>Choose plan</button>
                </article>
              ))}
            </div>
          </section>

          <section className="launch-simple-section">
            <div className="launch-simple-heading">
              <span>Available technology</span>
              <h2>Providers we can configure.</h2>
              <p>We recommend only what the project needs. Free hosting is used when it is the right fit.</p>
            </div>
            <div className="launch-simple-providers">
              {launchProviderStacks.map((stack) => {
                const StackIcon = stack.icon;
                return (
                  <article key={stack.title}>
                    <div><StackIcon size={19} /><strong>{stack.title}</strong></div>
                    <p>{stack.text}</p>
                    <section>{stack.options.map((option) => <span key={option}>{option}</span>)}</section>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="launch-simple-included">
            <div>
              <span>Also available</span>
              <h2>Creative and launch operations.</h2>
            </div>
            <div>
              {[...launchFeatureRows.map((item) => item.title), ...launchCreativeBundles.map((item) => item.title)].map((item) => (
                <span key={item}><Check size={14} /> {item}</span>
              ))}
            </div>
          </section>

          <section className="launch-simple-cta">
            <div><span>Need help choosing?</span><h2>Send the outcome. We will map the launch.</h2></div>
            <button type="button" onClick={() => navigateTo('calendar')}>Book a launch call <ArrowRight size={16} /></button>
          </section>
        </main>
      )}

      {/* Previous Launch Cloud layout retained outside the rendered flow. */}
      {false && activeNav === 'launch' && (
        <main className="launch-page max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-36 relative z-10 animate-fade-in">
          <section className="launch-hero">
            <div className="launch-hero-copy">
              <span className="launch-kicker"><Server size={14} /> Launch Cloud</span>
              <h1>Managed launch plans for websites, cloud apps, stores, ads, and creative systems.</h1>
              <p>
                We combine hosting setup, backend planning, domain connection, Shopify workflow, 3D animation, motion graphics, AI ads, and launch support into one clear system.
              </p>
              <div className="launch-prompt-card">
                <div className="launch-prompt-top">
                  <span>Describe your launch</span>
                  <strong>Ready</strong>
                </div>
                <p>Build my website, connect domain, host frontend, add backend, prepare ads, and create motion assets.</p>
                <div className="launch-prompt-tools">
                  {['Website', 'Backend', 'Shopify', '3D', 'AI Ads', 'Motion'].map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
                <button onClick={() => navigateTo('calendar')}>Start launch plan <ArrowRight size={15} /></button>
              </div>
              <div className="launch-builder-tabs" aria-label="Launch categories">
                {[
                  { label: 'Launch', icon: Cloud },
                  { label: 'Website', icon: Globe },
                  { label: 'Mobile', icon: Smartphone },
                  { label: 'Design', icon: PenTool },
                  { label: 'Animation', icon: Film },
                  { label: 'Data', icon: Database }
                ].map((item) => {
                  const TabIcon = item.icon;
                  return (
                    <span key={item.label}>
                      <TabIcon size={14} />
                      {item.label}
                    </span>
                  );
                })}
              </div>
              <div className="launch-hero-actions">
                <button onClick={() => navigateTo('calendar')}>Plan my launch <ArrowUpRight size={16} /></button>
                <a href="mailto:leafcreationism@gmail.com">leafcreationism@gmail.com</a>
              </div>
            </div>

            <div className="launch-status-panel">
              <div className="launch-status-top">
                <span className={isStudioOnline ? 'is-online' : 'is-offline'}></span>
                <strong>{isStudioOnline ? 'Leaf online' : 'Leaf offline'}</strong>
                <small>{indiaTime} IST</small>
              </div>
              <div className="launch-live-console">
                <div>
                  <span>Workspace status</span>
                  <strong>{isStudioOnline ? 'Accepting launch briefs' : 'Queue open for next studio window'}</strong>
                  <p>{isStudioOnline ? 'We are reviewing free frontend hosting, backend, database, Shopify, AI, ads, and motion launch requests now.' : 'Send the brief now. We pick it up when the studio opens between 10 AM and 9 PM IST.'}</p>
                </div>
                <div className="launch-console-meter" aria-hidden="true">
                  <i><b style={{ width: isStudioOnline ? '86%' : '38%' }}></b></i>
                  <small>{isStudioOnline ? 'Live response mode' : 'Offline queue mode'}</small>
                </div>
              </div>
              <div className="launch-online-stack">
                {[
                  { label: 'Free frontend', value: 'Vercel / Netlify / Cloudflare / GitHub Pages' },
                  { label: 'Backend', value: 'AWS / Google Cloud / Railway / Render' },
                  { label: 'Database', value: 'Supabase / Firebase / MongoDB / PostgreSQL' },
                  { label: 'Ops', value: 'CI/CD / AI / Auto-scale / 24/7 maintenance' }
                ].map((item) => (
                  <div className="launch-online-stack-item" key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
              <div className="launch-system-visual" aria-label="Managed launch layer">
                <div className="launch-visual-orbit" aria-hidden="true"></div>
                <div className="launch-visual-core">
                  <Cloud size={34} />
                  <span>Launch Core</span>
                </div>
                <div className="launch-visual-node is-domain">
                  <Globe size={17} />
                  <span>Domain</span>
                </div>
                <div className="launch-visual-node is-backend">
                  <Database size={17} />
                  <span>Backend</span>
                </div>
                <div className="launch-visual-node is-motion">
                  <Film size={17} />
                  <span>Motion</span>
                </div>
                <div className="launch-visual-node is-ads">
                  <Megaphone size={17} />
                  <span>AI Ads</span>
                </div>
              </div>
              <div className="launch-system-copy">
                <span>Managed launch layer</span>
                <strong>Hosting, creative assets, backend, domain, and growth setup connected in one launch flow.</strong>
                <div>
                  <small>1. Build</small>
                  <small>2. Host</small>
                  <small>3. Promote</small>
                </div>
              </div>
              <div className="launch-status-queue">
                {[
                  ['Frontend', 'Vercel / Netlify'],
                  ['Backend', 'Cloud / VPS'],
                  ['Creative', '3D + Motion'],
                  ['Growth', 'AI ads setup']
                ].map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <div className="launch-mini-grid">
                <div><strong>SSL</strong><span>Configured</span></div>
                <div><strong>DNS</strong><span>Connected</span></div>
                <div><strong>Deploy</strong><span>Tracked</span></div>
              </div>
            </div>
          </section>

          <section className="launch-feature-strip">
            {launchFeatureRows.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <article key={feature.title}>
                  <FeatureIcon size={20} />
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </article>
              );
            })}
          </section>

          <section className="launch-choice-guide">
            <div className="launch-section-heading">
              <span>Start here</span>
              <h2>Pick the type of launch first. We choose the technical stack after that.</h2>
              <p>Customers do not need to understand every cloud tool. Choose the outcome, then Leaf Creationism maps the hosting, backend, database, creative assets, and support plan.</p>
            </div>
            <div className="launch-choice-grid">
              {launchQuickGuide.map((item, index) => {
                const GuideIcon = item.icon;
                return (
                  <article className="launch-choice-card" key={item.title}>
                    <div className="launch-choice-index">0{index + 1}</div>
                    <div className="launch-choice-icon"><GuideIcon size={22} /></div>
                    <span>{item.result}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div>
                      {item.options.map((option) => <small key={option}>{option}</small>)}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="launch-provider-matrix">
            <div className="launch-section-heading">
              <span>Stack options</span>
              <h2>Choose the right free frontend, backend, database, and operating layer for the product.</h2>
            </div>
            <div className="launch-provider-grid">
              {launchProviderStacks.map((stack) => {
                const StackIcon = stack.icon;
                return (
                  <article className="launch-provider-card" key={stack.title}>
                    <div className="launch-provider-top">
                      <span><StackIcon size={19} /></span>
                      <div>
                        <h3>{stack.title}</h3>
                        <p>{stack.text}</p>
                      </div>
                    </div>
                    <div className="launch-provider-tags">
                      {stack.options.map((option) => (
                        <span key={option}>{option}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <div className="launch-section-heading launch-plans-heading">
            <span>Choose your launch plan</span>
            <h2>Start simple, add backend power, or launch with a full creative growth stack.</h2>
            <div className="launch-mobile-swipe-hint">
              <span></span>
              Swipe launch options
            </div>
          </div>

          <section className="launch-plan-grid">
            {launchPlans.map((plan) => {
              const PlanIcon = plan.icon;
              return (
                <article className="launch-plan-card" key={plan.title}>
                  <div className="launch-plan-head">
                    <div className="launch-plan-icon"><PlanIcon size={22} /></div>
                    <span>{plan.label}</span>
                  </div>
                  <div className="launch-plan-badge">{plan.badge}</div>
                  <h2>{plan.title}</h2>
                  <p>{plan.desc}</p>
                  <div className="launch-price-row">
                    <strong>{plan.price}</strong>
                    <span>{plan.priceNote}</span>
                  </div>
                  <div className="launch-resource-list">
                    {plan.resources.map((resource) => <div key={resource}>{resource}</div>)}
                  </div>
                  <div className="launch-platform-row">
                    {plan.platforms.map((platform) => <span key={platform}>{platform}</span>)}
                  </div>
                  <ul>
                    {plan.items.map((item) => <li key={item}><Check size={15} /> {item}</li>)}
                  </ul>
                </article>
              );
            })}
          </section>

          <section className="launch-creative-panel">
            <div className="launch-section-heading">
              <span>Creative launch plans</span>
              <h2>Add 3D animation, graphic design, AI ads, and motion graphics to the same launch system.</h2>
            </div>
            <div className="launch-creative-grid">
              {launchCreativeBundles.map((bundle) => {
                const BundleIcon = bundle.icon;
                return (
                  <article className="launch-creative-card" key={bundle.title}>
                    <div className="launch-creative-top">
                      <BundleIcon size={22} />
                      <span>{bundle.label}</span>
                    </div>
                    <h3>{bundle.title}</h3>
                    <p>{bundle.desc}</p>
                    <div>
                      {bundle.includes.map((item) => <small key={item}>{item}</small>)}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="launch-services-panel">
            <div className="launch-section-heading">
              <span>What we provide</span>
              <h2>One launch layer for websites, ads, Shopify, and cloud infrastructure.</h2>
            </div>
            <div className="launch-service-grid">
              {launchServices.map((service) => {
                const ServiceIcon = service.icon;
                return (
                  <article className="launch-service-card" key={service.title}>
                    <ServiceIcon size={21} />
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="launch-workflow">
            <div className="launch-section-heading">
              <span>Delivery method</span>
              <h2>From stack choice to public launch without messy handoffs.</h2>
            </div>
            <div className="launch-timeline">
              {launchTimeline.map((item) => (
                <article key={item.step}>
                  <span>{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="launch-faq-panel">
            <div className="launch-section-heading">
              <span>Launch clarity</span>
              <h2>Simple answers before you choose a stack.</h2>
            </div>
            <div className="launch-faq-list">
              {launchFaqs.map((item) => (
                <article key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </article>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* Portfolio View */}
      {activeNav === 'portfolio' && (
        <main className="portfolio-page portfolio-collage-page portfolio-bento-page max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-36 relative z-10 animate-fade-in">
          <section className="portfolio-hero portfolio-feed-header">
            <div className="portfolio-hero-copy">
              <div className="portfolio-feed-intro">
                <span className="portfolio-kicker"><LeafIcon size={15} /> Leaf Creationism / Portfolio</span>
                <h1>
                  Bring bold ideas together. Right here.
                </h1>
                <p>
                  One studio for motion, 3D worlds, AI ads, graphic systems, and interfaces built to move brands forward.
                </p>
                <div className="portfolio-feed-tags">
                  <span><Zap size={14} /> Live selections</span>
                  <span><ShoppingBag size={14} /> Add references</span>
                  <span><Shield size={14} /> Permission first</span>
                </div>
              </div>
              <div className="portfolio-consent-note">
                <div className="portfolio-consent-symbol">
                  <Shield size={21} />
                </div>
                <div>
                  <span>Confidentiality notice</span>
                  <p>
                    Many projects we create cannot be published here or on social media because our clients prefer their products, campaigns, and internal systems to remain private. We respect that confidentiality without exception. Every item shown in this portfolio is shared only with client permission.
                  </p>
                </div>
              </div>
              <div className="portfolio-metrics">
                <div><Briefcase size={18} /><strong>{portfolioItems.length}</strong><span>Public works</span></div>
                <div><Film size={18} /><strong>{portfolioItems.filter((item) => item.type === 'video').length}</strong><span>Video pieces</span></div>
                <div><Shield size={18} /><strong>Private</strong><span>Client-first archive</span></div>
              </div>
            </div>
          </section>

          <section className="portfolio-feed-shell">
            <div className="portfolio-feed-main">
              <section className="portfolio-showcase-note">
                <div>
                  <span>Permission-based showcase</span>
                  <h2>Selected work, built to move brands.</h2>
                </div>
                <p>Scroll through the archive. Every public piece is shown with client permission; private launches and internal systems stay confidential.</p>
              </section>

              <section className="portfolio-gallery-grid">
                {portfolioDisplayItems.map((item, index) => (
                  <article
                    className={`portfolio-media-card is-${item.type} span-${item.span} tone-${item.tone} ratio-${getPortfolioRatio(item)}`}
                    key={`${item.title}-${index}`}
                    style={{
                      '--portfolio-delay': `${Math.min(index, 10) * 0.055}s`,
                    '--portfolio-ratio': getPortfolioAspectRatio(item)
                  }}
                >
                    <div className="portfolio-media-frame">
                      {item.type === 'video' ? (
                        <video
                          src={item.src}
                          muted
                          loop
                          playsInline
                          preload="none"
                          data-portfolio-video="true"
                          disablePictureInPicture
                          onLoadedMetadata={(event) => {
                            rememberPortfolioRatio(item.src, event.currentTarget.videoWidth, event.currentTarget.videoHeight);
                          }}
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          onLoad={(event) => rememberPortfolioRatio(item.src, event.currentTarget.naturalWidth, event.currentTarget.naturalHeight)}
                        />
                      )}
                    </div>
                  </article>
                ))}
              </section>
            </div>
          </section>
        </main>
      )}

      {hasEnquiryCartIntent && (
        <button
          type="button"
          className={`reference-floating-cart ${referenceCartPulse ? 'is-pulsing' : ''}`}
          onClick={() => navigateTo('referenceCart')}
          aria-label="Open selected portfolio references"
        >
          <span className="reference-cart-count">{selectedServiceItems.length + selectedReferenceItems.length}</span>
          <ShoppingBag size={22} />
          <strong>Cart</strong>
        </button>
      )}

      {activeNav === 'referenceCart' && (
        <main className="reference-cart-page request-checkout-page max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-36 relative z-10 animate-fade-in">
          <section className="request-checkout-hero" aria-labelledby="request-checkout-title">
            <div className="request-checkout-heading">
              <span>Leaf Creationism / Checkout</span>
              <h2 id="request-checkout-title">Project cart</h2>
            </div>

            <div className="request-goal-card">
              <div className="request-goal-topline">
                <span>Cart summary</span>
                <Briefcase size={18} />
              </div>
              <div className="request-goal-content">
                <span><Check size={15} /> {selectedServiceItems.length} service{selectedServiceItems.length === 1 ? '' : 's'}</span>
                <strong>{selectedReferenceItems.length} visual reference{selectedReferenceItems.length === 1 ? '' : 's'}</strong>
                <button type="button" onClick={() => navigateTo('portfolio')} aria-label="Add a portfolio reference">
                  <Plus size={15} />
                </button>
              </div>
            </div>

            <div className="request-progress-shell" aria-label="Project request progress">
              <div className="request-progress-fill" aria-hidden="true" />
              <span className="is-current"><b><ShoppingBag size={17} /></b><em>1</em><strong>Cart</strong></span>
              <span className="is-complete"><b><Calendar size={17} /></b><em>2</em><strong>Appointment</strong></span>
              <span><b><Mail size={17} /></b><em>3</em><strong>Details</strong></span>
            </div>

            <p className="request-checkout-tip">Review your selections, add contact details, and send the project request.</p>
          </section>

          <section className="reference-cart-panel">
            <div className="reference-cart-grid">
              <div className="reference-selected-list">
                <div className="reference-list-head">
                  <div>
                    <span>Step 1</span>
                    <strong>{selectedServiceItems.length} service{selectedServiceItems.length === 1 ? '' : 's'} selected</strong>
                  </div>
                  <button type="button" onClick={() => navigateTo('home')}>Edit services</button>
                </div>
                <div className="reference-service-summary">
                  {selectedServiceItems.length > 0 ? (
                    selectedServiceItems.map((service) => {
                      const ServiceIcon = service.icon;
                      return (
                        <div className="reference-service-chip" key={service.id}>
                          <ServiceIcon size={16} />
                          <span>
                            <strong>{service.title}</strong>
                            <small>{service.desc}</small>
                          </span>
                          <button type="button" onClick={() => toggleStep(service.id)} aria-label={`Remove ${service.title}`}>
                            <X size={14} />
                          </button>
                        </div>
                      );
                    })
                  ) : (
                    <div className="reference-empty-card">
                      <strong>No service selected yet</strong>
                      <p>Go back to Home and choose services in Build Your Project, or submit only with references.</p>
                      <button type="button" onClick={() => navigateTo('home')}>Choose services</button>
                    </div>
                  )}
                </div>
                <div className="reference-appointment-card">
                  <div>
                    <span>Step 2 / Online appointment</span>
                    <strong>{selectedSchedule.title}</strong>
                    <p>{selectedAppointment.full} / {selectedSlot.time} IST / {selectedSlot.note}</p>
                  </div>
                  <button type="button" onClick={() => navigateTo('calendar')}>Change</button>
                </div>
                <div className="reference-list-head">
                  <div>
                    <span>Step 3 / Optional references</span>
                    <strong>{selectedReferenceItems.length} portfolio reference{selectedReferenceItems.length === 1 ? '' : 's'}</strong>
                  </div>
                  <button type="button" onClick={() => navigateTo('portfolio')}>Add reference</button>
                </div>
                {selectedReferenceItems.map((item) => (
                  <article
                    key={item.src}
                    className={`reference-selected-card ratio-${getPortfolioRatio(item)}`}
                    style={{ '--portfolio-ratio': getPortfolioAspectRatio(item) }}
                  >
                    <div>
                      {item.type === 'video' ? (
                        <video
                          src={item.src}
                          muted
                          playsInline
                          preload="metadata"
                          onLoadedMetadata={(event) => rememberPortfolioRatio(item.src, event.currentTarget.videoWidth, event.currentTarget.videoHeight)}
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={item.title}
                          loading="lazy"
                          onLoad={(event) => rememberPortfolioRatio(item.src, event.currentTarget.naturalWidth, event.currentTarget.naturalHeight)}
                        />
                      )}
                    </div>
                    <section>
                      <span>{item.category}</span>
                      <strong>{item.title}</strong>
                      <p>{item.format} reference saved for your enquiry.</p>
                      <button type="button" onClick={() => togglePortfolioReference(item)}>Remove</button>
                    </section>
                  </article>
                ))}
              </div>

              <form
                className="reference-enquiry-form"
                onSubmit={submitReferenceEnquiry}
              >
                <div className="reference-simple-summary">
                  <div><ShoppingBag size={18} /><span>{selectedServiceItems.length} services / {selectedReferenceItems.length} references</span></div>
                  <strong>₹0 due now</strong>
                </div>
                <div className="reference-form-title">
                  <span>Step 4</span>
                  <strong>Contact details</strong>
                  <p>We use this only to reply to your enquiry and prepare the project estimate.</p>
                </div>
                {formStatus === 'reference-sent' && (
                  <div className="reference-success-hero" role="status">
                    <div className="reference-success-orbit">
                      <Check size={22} />
                    </div>
                    <strong>Request received</strong>
                    <p>We will reach you within 24 hours. Your data is safe with us.</p>
                  </div>
                )}
                <label>
                  Name
                  <input
                    name="Name"
                    type="text"
                    required
                    value={referenceForm.name}
                    onChange={(event) => updateReferenceField('name', event.target.value)}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Gmail / Email
                  <input
                    name="Email"
                    type="email"
                    required
                    value={referenceForm.email}
                    onChange={(event) => updateReferenceField('email', event.target.value)}
                    placeholder="you@gmail.com"
                  />
                </label>
                <label>
                  WhatsApp number
                  <input
                    name="Phone"
                    type="tel"
                    required
                    value={referenceForm.phone}
                    onChange={(event) => updateReferenceField('phone', event.target.value)}
                    placeholder="+91 ..."
                  />
                </label>
                <label>
                  What do you want to create?
                  <textarea
                    name="Project brief"
                    required
                    value={referenceForm.project}
                    onChange={(event) => updateReferenceField('project', event.target.value)}
                    placeholder="Tell us about your brand, product, or campaign."
                    rows="4"
                  />
                </label>

                <div className="reference-privacy-note">
                  <Shield size={18} />
                  <p>
                    Privacy policy: we use your details only to understand your enquiry and contact you about this project. Your data, references, and brief stay confidential with Leaf Creationism.
                  </p>
                </div>

                <div className="reference-submit-row">
                  <button
                    type="submit"
                    className={`reference-submit-button ${!canSubmitReferenceEnquiry ? 'is-disabled' : ''} ${formStatus === 'sending' ? 'is-sending' : ''} ${formStatus === 'reference-sent' ? 'is-sent' : ''}`}
                    disabled={!canSubmitReferenceEnquiry || formStatus === 'sending' || formStatus === 'reference-sent'}
                  >
                    {formStatus === 'reference-sent' ? <Check size={18} /> : <Mail size={18} />}
                    {formStatus === 'sending' ? 'Preparing request...' : formStatus === 'reference-sent' ? 'Sent - 24h reply' : 'Submit enquiry'}
                  </button>
                  <a
                    className="reference-whatsapp-button"
                    href={referenceWhatsAppHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp <ArrowUpRight size={16} />
                  </a>
                </div>
                {formStatus === 'reference-sent' && (
                  <p className="reference-form-success">Enquiry sent. We received your services, appointment, references, and contact details.</p>
                )}
                {formStatus === 'error' && (
                  <p className="reference-form-error">Could not send right now. Please try again or use WhatsApp.</p>
                )}
                <p>Submit enquiry sends selected services, appointment details, optional references, and client details securely. WhatsApp is only a quick backup option.</p>
              </form>
            </div>
          </section>
        </main>
      )}

      {/* Floating WhatsApp Live Chat with Premium Liquid Glass */}
      <div className="wa-floating fixed right-4 sm:bottom-8 sm:right-8 z-[60] flex flex-col items-end gap-3 group/wa-container">
        {/* Animated Tooltip Bubble */}
        <div className="wa-floating-tooltip bg-white/90 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-[0_10px_25px_rgba(37,211,102,0.15)] border border-white text-xs font-semibold text-gray-800 opacity-0 translate-y-4 group-hover/wa-container:opacity-100 group-hover/wa-container:translate-y-0 transition-all duration-500 ease-out flex items-center gap-2.5 origin-bottom-right">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366] shadow-[0_0_8px_rgba(37,211,102,0.8)]"></span>
          </span>
          Chat with an Expert
        </div>
        
        {/* The Premium Liquid Glass Button */}
        <a 
          href="https://wa.me/918589038479" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="wa-floating-button relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-all duration-500 transform hover:-translate-y-2 group/wa-btn"
        >
          {/* Outer Ambient Glow */}
          <div className="absolute inset-0 bg-[#25D366]/30 rounded-full blur-[20px] transition-all duration-500 group-hover/wa-btn:bg-[#25D366]/50 group-hover/wa-btn:scale-110"></div>
          
          {/* Morphing Liquid Glass Body */}
          <div 
            className="wa-floating-body absolute inset-0 rounded-full bg-white/40 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(37,211,102,0.2),inset_0_2px_4px_rgba(255,255,255,0.9)] overflow-hidden flex items-center justify-center transition-all duration-500 group-hover/wa-btn:shadow-[0_15px_40px_rgba(37,211,102,0.4)]"
          >
            {/* Inner dynamic green aura */}
            <div className="absolute w-[150%] h-[150%] bg-gradient-to-tr from-[#128C7E]/40 to-[#25D366]/40 blur-md opacity-80 group-hover/wa-btn:opacity-100 group-hover/wa-btn:rotate-180 transition-all duration-1000 ease-in-out"></div>
            
            {/* Shimmering Glare */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/80 to-transparent opacity-60 mix-blend-overlay"></div>
          </div>
          
          {/* The Icon */}
          <WhatsAppIcon size={28} className="relative z-10 text-[#128C7E] drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)] transition-transform duration-500 group-hover/wa-btn:scale-110" />
        </a>
      </div>

      {/* Floating Bottom Navigation */}
      <div className="fixed bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-40 w-[calc(100vw-1.5rem)] max-w-[430px] sm:w-auto pb-[env(safe-area-inset-bottom)]">
        <div className="mobile-tabbar bg-white/82 backdrop-blur-2xl border border-white shadow-[0_10px_35px_rgba(0,0,0,0.1)] rounded-[1.6rem] sm:rounded-[2rem] p-1.5 sm:p-2 flex items-center gap-1.5 sm:gap-2" style={{ '--active-nav-offset': `${activeNavIndex * 100}%` }}>
          <span className="mobile-tabbar-active-glass" aria-hidden="true" />
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeNav === item.id;
            
            return (
              <button
                key={item.id}
                aria-label={item.label}
                onClick={() => navigateTo(item.id)}
                className={`mobile-tabbar-item ${isActive ? 'is-active' : ''} h-12 flex-1 sm:flex-none sm:w-12 rounded-full flex items-center justify-center transition-colors duration-150 relative ${
                  isActive 
                    ? 'bg-[#2050E3] text-white shadow-md' 
                    : 'text-gray-400 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <IconComponent size={22} />
                {item.hasNotification && (
                  <span className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-red-400'}`}></span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Full Screen Service Details Modal - Liquid Glass UI */}
      {showServiceModal && (
        <div className="fixed inset-0 z-[100] overflow-y-auto animate-slide-up font-sans hide-scrollbar bg-[#f8f9fc]">
          
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#2050E3]/20 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
            <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-[#8b5cf6]/20 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-[#0ea5e9]/20 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000"></div>
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[60px]"></div>
          </div>

          <div className="sticky top-4 sm:top-6 z-50 flex justify-center w-full px-4 sm:px-6 pointer-events-none">
            <div className="premium-glass px-2 py-2 rounded-full flex items-center gap-2 sm:gap-4 pointer-events-auto animate-fade-in-down">
              <button 
                onClick={() => setShowServiceModal(false)}
                className="w-10 h-10 rounded-full bg-white/60 hover:bg-white flex items-center justify-center transition-all text-gray-700 shadow-sm border border-white/50 hover:scale-105"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-2 pr-1 sm:pr-2">
                 <div className="w-6 h-6 rounded-full bg-[#2050E3] flex items-center justify-center text-white hidden sm:flex">
                   {activeCategoryData && React.createElement(activeCategoryData.icon, { size: 12 })}
                 </div>
                 <span className="font-semibold text-xs sm:text-sm tracking-widest uppercase text-gray-800 drop-shadow-sm">
                   {activeCategoryData?.name}
                 </span>
              </div>
              <button className="px-5 sm:px-6 py-2.5 rounded-full bg-[#2050E3] text-white text-xs sm:text-sm font-medium hover:bg-blue-700 hover:shadow-[0_4px_15px_rgba(32,80,227,0.4)] transition-all transform hover:-translate-y-0.5">
                Get Quote
              </button>
            </div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-32">
            
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20 mb-16 sm:mb-32">
              <div className="w-full lg:w-1/2 flex flex-col justify-center animate-fade-in text-center lg:text-left items-center lg:items-start" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-semibold text-gray-900 leading-[1.1] sm:leading-[1.05] tracking-tight mb-4 sm:mb-6 drop-shadow-sm">
                  {activeCategoryData?.title}
                </h1>
                <p className="text-base sm:text-xl lg:text-2xl text-gray-700 font-light leading-relaxed mb-6 sm:mb-10 max-w-lg">
                  {activeCategoryData?.heroDesc}
                </p>
                <button className="w-full sm:w-fit inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full premium-glass hover:bg-white/80 text-gray-900 text-sm sm:text-lg font-medium transition-all duration-300 group hover:shadow-lg hover:-translate-y-1 border border-white/60">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2050E3] flex items-center justify-center text-white group-hover:scale-110 transition-transform shrink-0">
                     <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                  </span>
                  See how we do it
                </button>
              </div>

              <div className="w-full lg:w-1/2 relative h-[260px] sm:h-[450px] lg:h-[550px] animate-fade-in mt-4 lg:mt-0" style={{ animationDelay: '0.2s' }}>
                 <div className="absolute inset-0 overflow-hidden liquid-image-mask shadow-[0_15px_40px_rgba(32,80,227,0.15)] sm:shadow-[0_20px_50px_rgba(32,80,227,0.2)]">
                   <img src={activeCategoryData?.img} alt="Showcase" loading="eager" decoding="async" fetchpriority="high" className="w-full h-full object-cover transform scale-110 hover:scale-100 transition-transform duration-1000" />
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#2050E3]/20 to-transparent mix-blend-overlay"></div>
                 </div>
                 <div className="absolute -bottom-4 -left-2 sm:-bottom-10 sm:-left-10 premium-glass px-4 sm:px-6 py-2.5 sm:py-4 rounded-full flex items-center gap-3 sm:gap-4 animate-float-rotate-1 max-w-[90%] border border-white/40">
                   <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 flex items-center justify-center text-[#2050E3] shadow-sm shrink-0">
                      <ArrowUpRight size={16} className="sm:w-5 sm:h-5" />
                   </div>
                   <div className="flex flex-col truncate">
                     <span className="text-[10px] sm:text-xs text-gray-500 font-bold tracking-widest uppercase">Premium</span>
                     <span className="text-sm sm:text-base text-gray-900 font-semibold truncate">{activeCategoryData?.name}</span>
                   </div>
                 </div>
              </div>
            </div>

            <div className="relative mb-16 sm:mb-40 flex flex-col md:flex-row gap-5 sm:gap-8 justify-center items-center md:items-stretch">
               
               <div className="w-full md:w-5/12 premium-glass bg-white/30 border border-white/40 p-6 sm:p-12 rounded-[1.5rem] sm:rounded-[3rem] animate-fade-in group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden" style={{ animationDelay: '0.3s' }}>
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-red-400/10 rounded-full blur-2xl sm:blur-3xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-4 sm:mb-6 shadow-sm border border-red-100">
                     <X size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-xl sm:text-3xl font-medium text-gray-900 mb-3 sm:mb-4 tracking-tight">You're losing customers.</h3>
                  <p className="text-gray-600 leading-relaxed font-light text-sm sm:text-lg relative z-10">
                    {activeCategoryData?.problem}
                  </p>
               </div>

               <div className="hidden md:flex w-2/12 items-center justify-center animate-fade-in z-20" style={{ animationDelay: '0.4s' }}>
                  <div className="w-16 h-16 rounded-full premium-glass flex items-center justify-center text-[#2050E3] shadow-lg border border-white/60 animate-bounce-x">
                    <ArrowRight size={28} />
                  </div>
               </div>

               <div className="w-full md:w-5/12 premium-glass bg-[#2050E3]/5 border border-[#2050E3]/20 p-6 sm:p-12 rounded-[1.5rem] sm:rounded-[3rem] md:mt-16 animate-fade-in group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden shadow-[0_10px_40px_rgba(32,80,227,0.1)]" style={{ animationDelay: '0.5s' }}>
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-40 sm:h-40 bg-[#2050E3]/10 rounded-full blur-2xl sm:blur-3xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#2050E3] text-white flex items-center justify-center mb-4 sm:mb-6 shadow-md shadow-[#2050E3]/30 border border-white/20">
                     <Check size={20} strokeWidth={3} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-xl sm:text-3xl font-medium text-gray-900 mb-3 sm:mb-4 tracking-tight">We fix it completely.</h3>
                  <p className="text-gray-600 leading-relaxed font-light text-sm sm:text-lg relative z-10">
                    {activeCategoryData?.solution}
                  </p>
               </div>
            </div>

            <div className="w-full">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-center text-gray-900 mb-3 sm:mb-4 tracking-tight drop-shadow-sm">How the magic happens.</h2>
              <p className="text-center text-gray-500 mb-8 sm:mb-16 font-light text-sm sm:text-lg px-4">Our proven 3-step formula to pure digital bliss.</p>
              
              <div className="flex flex-col md:flex-row gap-4 sm:gap-8 relative">
                <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-[#2050E3]/30 to-transparent -translate-y-1/2 z-0"></div>

                {activeCategoryData?.process.map((p, i) => (
                  <div key={i} className={`flex-1 premium-glass p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[3rem] relative overflow-hidden group hover:bg-white/60 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 shadow-sm sm:shadow-lg z-10 animate-fade-in border border-white/60`} style={{ animationDelay: `${0.6 + (i * 0.1)}s` }}>
                    <div className="absolute -top-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-bl from-[#2050E3]/20 to-transparent rounded-full blur-xl sm:blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="text-[80px] sm:text-[120px] font-black text-gray-900/5 absolute -bottom-6 -right-2 sm:-bottom-10 sm:-right-4 pointer-events-none group-hover:text-[#2050E3]/10 transition-colors duration-500 leading-none">
                      {p.step}
                    </div>

                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/80 shadow-sm border border-white flex items-center justify-center text-[#2050E3] font-bold text-lg sm:text-xl mb-4 sm:mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {p.step}
                    </div>
                    
                    <h4 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4 relative z-10">{p.title}</h4>
                    <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base relative z-10">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 sm:mt-32 text-center flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
               <div className="premium-glass p-6 sm:p-16 rounded-[2rem] sm:rounded-[4rem] border border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.05)] w-full max-w-4xl relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-[#2050E3]/10 to-transparent pointer-events-none"></div>
                 <h2 className="text-2xl sm:text-5xl font-semibold text-gray-900 mb-6 sm:mb-8 tracking-tight relative z-10">Ready to stop being boring?</h2>
                 <button 
                   onClick={() => setShowServiceModal(false)}
                   className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-3.5 sm:py-5 rounded-full bg-gray-900 text-white text-sm sm:text-lg font-medium hover:bg-[#2050E3] hover:shadow-[0_10px_30px_rgba(32,80,227,0.3)] hover:-translate-y-1 transition-all duration-300 relative z-10 group"
                 >
                   Let's Build It <ArrowUpRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                 </button>
               </div>
            </div>

          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Bricolage+Grotesque:wght@500;600;700;800&display=swap');

        :root {
          --font-body: "Outfit", ui-sans-serif, system-ui, sans-serif;
          --font-display: "Outfit", ui-sans-serif, system-ui, sans-serif;
        }

        html {
          font-family: var(--font-body);
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        body,
        button,
        input,
        textarea,
        select {
          font-family: var(--font-body);
        }

        h1,
        h2,
        h3,
        .access-color-title,
        .agency-edge-copy h2,
        .advantage-gallery-center h2,
        .footer-tilt-brand strong,
        .footer-directory-brand h4 {
          font-family: var(--font-display);
        }

        .leaf-loader-screen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: block;
          overflow: hidden;
          background: #050505;
          pointer-events: none;
          opacity: 1;
          transform: scale(1);
          transition:
            opacity 0.72s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .leaf-loader-screen.is-exiting {
          opacity: 0;
          transform: scale(1.018);
        }

        .leaf-loader-buffer-mark {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: grid;
          place-items: center;
          background: #050505;
          opacity: 1;
          transition: opacity 0.28s ease;
        }

        .leaf-loader-buffer-mark img {
          width: clamp(4.5rem, 11vw, 7rem);
          height: clamp(4.5rem, 11vw, 7rem);
          object-fit: contain;
          opacity: 0.82;
        }

        .leaf-loader-screen.is-playing .leaf-loader-buffer-mark {
          opacity: 0;
        }

        .leaf-loader-screen::before {
          display: none;
        }

        .leaf-loader-video-wall {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          grid-template-rows: repeat(2, minmax(0, 1fr));
          gap: 0;
          background: #050505;
        }

        .leaf-loader-video-tile {
          min-width: 0;
          min-height: 0;
          overflow: hidden;
          border: 0;
          border-radius: 0;
          background: #050505;
          box-shadow: none;
          transform: none;
          animation: none;
        }

        .leaf-loader-video-tile video,
        .leaf-loader-mobile-reel video {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border: 0;
          border-radius: 0;
          opacity: 0;
          transition: opacity 0.26s ease;
          filter: contrast(1.09) saturate(1.12) brightness(1.025) drop-shadow(0 0 1.2rem rgba(255,255,255,0.08));
          transform: translateZ(0) scale(1.002);
          backface-visibility: hidden;
          image-rendering: auto;
        }

        .leaf-loader-screen.is-playing .leaf-loader-video-tile video,
        .leaf-loader-screen.is-playing .leaf-loader-mobile-reel video {
          opacity: 1;
        }

        .leaf-loader-mobile-reel {
          display: none;
        }

        /* A restrained optical pass makes the compressed reel feel cleaner
           without adding another image or canvas render to the loader. */
        .leaf-loader-mobile-reel::before,
        .leaf-loader-video-wall::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background:
            linear-gradient(125deg, rgba(255,255,255,0.13), transparent 28%, transparent 69%, rgba(45,208,255,0.08)),
            radial-gradient(circle at 50% 42%, transparent 42%, rgba(0,0,0,0.2) 100%);
          mix-blend-mode: screen;
          opacity: 0.6;
        }

        .leaf-loader-mobile-reel::after,
        .leaf-loader-video-wall::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          opacity: 0.13;
          background-image:
            repeating-linear-gradient(0deg, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 1px, transparent 1px, transparent 4px),
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2), transparent 28%);
          mix-blend-mode: soft-light;
        }

        .leaf-loader-screen.is-playing .leaf-loader-mobile-reel::before,
        .leaf-loader-screen.is-playing .leaf-loader-video-wall::before {
          animation: loader-optical-shift 6s ease-in-out infinite alternate;
        }

        @keyframes loader-optical-shift {
          from { opacity: 0.42; transform: scale(1); }
          to { opacity: 0.72; transform: scale(1.012); }
        }

        .leaf-loader-screen.is-single-loader .leaf-loader-video-wall {
          display: none;
        }

        .leaf-loader-screen.is-single-loader .leaf-loader-mobile-reel {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #050505;
        }

        .header-status-card {
          position: relative;
          width: clamp(17rem, 31vw, 19.25rem);
          min-height: 2.9rem;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.42rem;
          padding: 0.34rem;
          border-radius: 999px;
          background:
            radial-gradient(circle at 10% 14%, rgba(255,255,255,0.98), transparent 30%),
            radial-gradient(circle at 84% 26%, rgba(34,197,94,0.22), transparent 40%),
            linear-gradient(135deg, rgba(255,255,255,0.86), rgba(236,253,245,0.62));
          border: 1px solid rgba(255,255,255,0.96);
          box-shadow:
            0 16px 40px rgba(15,23,42,0.1),
            0 0 0 1px rgba(32,80,227,0.055),
            inset 0 1px 0 rgba(255,255,255,0.98),
            inset 0 -18px 34px rgba(16,185,129,0.1);
          backdrop-filter: blur(28px) saturate(1.28);
          -webkit-backdrop-filter: blur(28px) saturate(1.28);
          overflow: hidden;
          isolation: isolate;
        }

        .header-status-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(120deg, rgba(34,197,94,0.12), transparent 34%, rgba(32,80,227,0.09)),
            radial-gradient(circle at var(--status-glow-x, 82%) 40%, rgba(34,197,94,0.22), transparent 30%);
          opacity: 0.9;
          animation: header-status-colorflow 7s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        .header-status-card::after {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          background: linear-gradient(105deg, transparent 16%, rgba(255,255,255,0.9) 42%, transparent 66%);
          opacity: 0.28;
          animation: header-status-sheen 5.6s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        .header-status-card.is-offline {
          background:
            radial-gradient(circle at 10% 14%, rgba(255,255,255,0.98), transparent 30%),
            radial-gradient(circle at 84% 26%, rgba(245,158,11,0.24), transparent 40%),
            linear-gradient(135deg, rgba(255,255,255,0.86), rgba(255,247,237,0.72));
          --status-glow-x: 76%;
        }

        .header-status-card.is-offline::before {
          background:
            linear-gradient(120deg, rgba(245,158,11,0.16), transparent 34%, rgba(32,80,227,0.06)),
            radial-gradient(circle at var(--status-glow-x, 76%) 40%, rgba(245,158,11,0.22), transparent 30%);
        }

        .header-status-dot {
          position: relative;
          z-index: 2;
          width: 2.18rem;
          height: 2.18rem;
          flex: 0 0 auto;
          border-radius: 999px;
          background:
            radial-gradient(circle at 34% 28%, rgba(255,255,255,0.92), transparent 18%),
            linear-gradient(135deg, #16a34a, #22c55e);
          box-shadow:
            0 0 0 0.34rem rgba(34,197,94,0.16),
            0 0 24px rgba(34,197,94,0.64),
            inset 0 1px 2px rgba(255,255,255,0.48);
          animation: header-status-pulse 1.7s ease-out infinite;
        }

        .header-status-dot::after {
          content: "";
          position: absolute;
          inset: 0.72rem;
          border-radius: inherit;
          background: #ffffff;
          opacity: 0.86;
        }

        .header-status-card.is-offline .header-status-dot {
          background:
            radial-gradient(circle at 34% 28%, rgba(255,255,255,0.92), transparent 18%),
            linear-gradient(135deg, #f59e0b, #f97316);
          box-shadow:
            0 0 0 0.34rem rgba(245,158,11,0.16),
            0 0 24px rgba(245,158,11,0.62),
            inset 0 1px 2px rgba(255,255,255,0.48);
          animation-name: header-status-pulse-offline;
        }

        .header-status-copy {
          position: relative;
          z-index: 2;
          flex: 1;
          min-width: 0;
          display: grid;
          gap: 0.14rem;
          padding: 0.42rem 0.5rem 0.42rem 0.86rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.66);
          border: 1px solid rgba(255,255,255,0.78);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.88);
        }

        .header-status-copy::before {
          content: "";
          position: absolute;
          left: 0.52rem;
          top: 0.46rem;
          bottom: 0.46rem;
          width: 0.18rem;
          border-radius: 999px;
          background: linear-gradient(180deg, #22c55e, #2050e3);
          box-shadow: 0 0 12px rgba(34,197,94,0.34);
        }

        .header-status-card.is-offline .header-status-copy::before {
          background: linear-gradient(180deg, #f59e0b, #f97316);
          box-shadow: 0 0 12px rgba(245,158,11,0.34);
        }

        .header-status-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.7rem;
        }

        .header-status-copy strong {
          color: #0f172a;
          font-size: 0.78rem;
          line-height: 1.05;
          font-weight: 650;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }

        .header-status-topline small {
          flex: 0 0 auto;
          border-radius: 999px;
          padding: 0.23rem 0.44rem;
          color: #064e3b;
          background: rgba(236,253,245,0.82);
          border: 1px solid rgba(255,255,255,0.82);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.86);
          font-size: 0.56rem;
          font-weight: 650;
          white-space: nowrap;
        }

        .header-status-card.is-offline .header-status-topline small {
          color: #92400e;
          background: rgba(255,247,237,0.9);
        }

        .header-status-rotator {
          position: relative;
          width: 100%;
          height: 0.92rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.66);
          border: 1px solid rgba(255,255,255,0.66);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.82);
          overflow: hidden;
        }

        .header-status-rotator span {
          position: absolute;
          inset: 0 auto auto 0;
          color: rgba(15,23,42,0.82);
          padding: 0 0.52rem;
          font-size: 0.58rem;
          line-height: 0.9rem;
          font-weight: 460;
          white-space: nowrap;
          opacity: 0;
          transform: translateY(0.65rem);
          animation: header-status-rotate 9s ease-in-out infinite;
        }

        .header-status-action {
          position: relative;
          z-index: 2;
          min-height: 2.2rem;
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 0 0.78rem;
          color: #ffffff;
          background:
            radial-gradient(circle at 28% 18%, rgba(255,255,255,0.3), transparent 28%),
            linear-gradient(135deg, #0f172a, #2050e3);
          box-shadow:
            0 14px 28px rgba(32,80,227,0.18),
            inset 0 1px 0 rgba(255,255,255,0.24);
          font-size: 0.68rem;
          font-weight: 650;
          letter-spacing: -0.01em;
          white-space: nowrap;
          transition: transform 0.24s ease, box-shadow 0.24s ease;
        }

        .header-status-action:hover {
          transform: translateY(-1px);
          box-shadow:
            0 18px 34px rgba(32,80,227,0.24),
            inset 0 1px 0 rgba(255,255,255,0.26);
        }

        .header-status-rotator span:nth-child(2) {
          animation-delay: 3s;
        }

        .header-status-rotator span:nth-child(3) {
          animation-delay: 6s;
        }

        .header-status-card {
          width: clamp(20rem, 37vw, 23rem);
          min-height: 3.32rem;
          gap: 0;
          padding: 0;
          border-radius: 999px;
          background:
            radial-gradient(circle at 16% 10%, rgba(255,255,255,0.98), transparent 30%),
            radial-gradient(circle at 78% 42%, rgba(32,80,227,0.13), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,0.86), rgba(235,253,246,0.64));
          border: 1px solid rgba(255,255,255,0.92);
          box-shadow:
            0 18px 46px rgba(15,23,42,0.09),
            inset 0 1px 0 rgba(255,255,255,0.95),
            inset 0 -18px 34px rgba(16,185,129,0.08);
        }

        .header-status-card.is-offline {
          background:
            radial-gradient(circle at 16% 10%, rgba(255,255,255,0.98), transparent 30%),
            radial-gradient(circle at 78% 42%, rgba(245,158,11,0.14), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,0.88), rgba(255,247,237,0.7));
        }

        .header-status-copy {
          align-self: stretch;
          padding: 0.56rem 0.95rem 0.54rem 1.08rem;
          border-radius: 0;
          background: transparent;
          border: 0;
          box-shadow: none;
          gap: 0.12rem;
        }

        .header-status-copy::before {
          display: none;
        }

        .header-status-topline {
          gap: 0.55rem;
          justify-content: flex-start;
        }

        .header-status-copy strong {
          font-size: 1.18rem;
          font-weight: 520;
          letter-spacing: -0.035em;
          font-variant-numeric: tabular-nums;
        }

        .header-status-topline small {
          padding: 0.28rem 0.58rem;
          color: #047857;
          background: rgba(236,253,245,0.82);
          border-color: rgba(167,243,208,0.58);
          font-size: 0.7rem;
          font-weight: 620;
        }

        .header-status-card.is-offline .header-status-topline small {
          color: #b45309;
          background: rgba(255,247,237,0.9);
          border-color: rgba(253,186,116,0.46);
        }

        .header-status-rotator {
          height: 1.18rem;
          border-radius: 0;
          background: transparent;
          border: 0;
          box-shadow: none;
        }

        .header-status-rotator span {
          padding: 0;
          color: rgba(15,23,42,0.66);
          font-size: 0.78rem;
          line-height: 1.18rem;
          font-weight: 460;
        }

        .header-status-action {
          align-self: stretch;
          min-height: auto;
          min-width: 6.9rem;
          border-radius: 999px;
          margin: 0.28rem;
          padding: 0 0.9rem;
          background:
            radial-gradient(circle at 28% 18%, rgba(255,255,255,0.26), transparent 28%),
            linear-gradient(135deg, #111827, #2050e3);
          font-size: 0.82rem;
          font-weight: 620;
          box-shadow:
            0 12px 26px rgba(32,80,227,0.16),
            inset 0 1px 0 rgba(255,255,255,0.22);
        }

        .header-status-card {
          width: clamp(15.4rem, 28vw, 17.6rem);
          min-height: 2.78rem;
          gap: 0.12rem;
          text-transform: uppercase;
        }

        .header-status-copy {
          padding: 0.42rem 0.54rem 0.4rem 0.78rem;
          min-width: 0;
          flex: 1 1 auto;
        }

        .header-status-topline {
          gap: 0.38rem;
        }

        .header-status-copy strong {
          font-size: 0.86rem;
          font-weight: 650;
          letter-spacing: 0.01em;
        }

        .header-status-topline small {
          padding: 0.18rem 0.38rem;
          font-size: 0.52rem;
          letter-spacing: 0.08em;
          white-space: nowrap;
        }

        .header-status-rotator {
          height: 0.92rem;
          width: 100%;
        }

        .header-status-rotator span {
          font-size: 0.58rem;
          line-height: 0.92rem;
          letter-spacing: 0.06em;
          white-space: nowrap;
        }

        .header-status-action {
          min-width: 5.2rem;
          margin: 0.22rem;
          padding: 0 0.52rem;
          font-size: 0.58rem;
          letter-spacing: 0.08em;
        }

        .dashed-line {
          background-image: linear-gradient(to bottom, #d1d5db 50%, transparent 50%);
          background-size: 1px 12px;
          background-color: transparent;
        }

        .project-builder-summary {
          min-height: 2.45rem;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.42rem;
          padding: 0.55rem;
          border-radius: 1.15rem;
          background:
            radial-gradient(circle at 12% 20%, rgba(32,80,227,0.08), transparent 7rem),
            rgba(248,250,252,0.72);
          border: 1px solid rgba(226,232,240,0.82);
        }

        .project-builder-summary span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 1.7rem;
          padding: 0 0.62rem;
          border-radius: 999px;
          color: rgba(15,23,42,0.68);
          background: rgba(255,255,255,0.78);
          border: 1px solid rgba(255,255,255,0.92);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.92);
          font-size: 0.68rem;
          font-weight: 680;
        }

        .project-service-picker {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.72rem;
        }

        .project-service-choice {
          position: relative;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          align-items: center;
          gap: 0.72rem;
          min-height: 4.15rem;
          padding: 0.72rem;
          border-radius: 1.35rem;
          text-align: left;
          color: #172033;
          background:
            radial-gradient(circle at 16% 0%, rgba(32,80,227,0.08), transparent 4.5rem),
            linear-gradient(145deg, rgba(255,255,255,0.84), rgba(248,250,252,0.62));
          border: 1px solid rgba(226,232,240,0.86);
          box-shadow: 0 12px 28px rgba(15,23,42,0.045), inset 0 1px 0 rgba(255,255,255,0.94);
          isolation: isolate;
          overflow: hidden;
          animation: builder-choice-rise 0.54s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--choice-delay);
          transition: transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease, background 0.24s ease;
        }

        .project-service-choice::before {
          content: "";
          position: absolute;
          inset: -44% auto auto -24%;
          width: 5.5rem;
          height: 5.5rem;
          border-radius: 999px;
          background: rgba(16,185,129,0.16);
          filter: blur(18px);
          opacity: 0;
          transition: opacity 0.24s ease;
          z-index: -1;
        }

        .project-service-choice:hover,
        .project-service-choice.is-selected {
          transform: translateY(-0.12rem);
          border-color: rgba(32,80,227,0.26);
          box-shadow: 0 18px 42px rgba(32,80,227,0.1), inset 0 1px 0 rgba(255,255,255,0.98);
        }

        .project-service-choice.is-selected {
          background:
            radial-gradient(circle at 15% 0%, rgba(32,80,227,0.16), transparent 5rem),
            linear-gradient(145deg, rgba(255,255,255,0.92), rgba(239,246,255,0.78));
        }

        .project-service-choice.is-selected::before {
          opacity: 1;
        }

        .project-service-choice-icon {
          position: relative;
          width: 2.55rem;
          height: 2.55rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          color: #0f766e;
          background:
            radial-gradient(circle at 30% 15%, rgba(255,255,255,0.94), transparent 1.5rem),
            linear-gradient(145deg, rgba(209,250,229,0.86), rgba(153,246,228,0.68));
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.94), 0 10px 24px rgba(20,184,166,0.18);
          transition: transform 0.24s ease, color 0.24s ease, background 0.24s ease;
        }

        .project-service-choice.is-selected .project-service-choice-icon {
          color: #fff;
          background:
            radial-gradient(circle at 30% 18%, rgba(255,255,255,0.28), transparent 1.35rem),
            linear-gradient(145deg, #2050e3, #10b981);
          transform: scale(1.04);
        }

        .project-service-choice-check {
          position: absolute;
          right: -0.28rem;
          top: -0.28rem;
          width: 1.1rem;
          height: 1.1rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #fff;
          background: #2050e3;
          box-shadow: 0 8px 18px rgba(32,80,227,0.28);
          opacity: 0;
          transform: scale(0.6);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .project-service-choice.is-selected .project-service-choice-check {
          opacity: 1;
          transform: scale(1);
        }

        .project-service-choice-copy {
          min-width: 0;
          display: block;
        }

        .project-service-choice-copy h3 {
          margin: 0;
          color: #101827;
          font-size: 0.82rem;
          line-height: 1.05;
          font-weight: 720;
          letter-spacing: -0.02em;
        }

        .project-service-choice-copy p {
          margin: 0.24rem 0 0;
          color: rgba(71,85,105,0.72);
          font-size: 0.64rem;
          line-height: 1.16;
          font-weight: 520;
        }

        @keyframes builder-choice-rise {
          from {
            opacity: 0;
            transform: translateY(0.7rem) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Hide Scrollbar for Horizontal Scrolling & Modal */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        /* --- Liquid Flowing Icon CSS --- */
        .premium-icon-glass {
          background: rgba(52, 211, 153, 0.26);
          backdrop-filter: blur(22px) saturate(1.55);
          -webkit-backdrop-filter: blur(22px) saturate(1.55);
          border: 1px solid rgba(110, 231, 183, 0.72);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .service-icon-shell {
          overscroll-behavior-x: contain;
          scroll-padding-left: 0.5rem;
        }

        .service-icon-item {
          touch-action: manipulation;
          border: 0;
          background: transparent;
          padding: 0;
        }

        .service-static-icon {
          background:
            linear-gradient(145deg, rgba(110,231,183,0.94), rgba(16,185,129,0.84)),
            radial-gradient(circle at 30% 18%, rgba(255,255,255,0.46), transparent 34%);
          border: 1px solid rgba(134,239,172,0.72);
          box-shadow: 0 10px 24px rgba(6,95,70,0.12), inset 0 1px 0 rgba(255,255,255,0.48);
          overflow: hidden;
        }

        .service-static-icon.is-selected {
          background: linear-gradient(145deg, #34d399, #10b981);
          box-shadow: 0 12px 28px rgba(5,150,105,0.2), inset 0 1px 0 rgba(255,255,255,0.52);
        }

        .service-select-check {
          position: absolute;
          right: -0.34rem;
          top: -0.34rem;
          z-index: 12;
          width: 1.25rem;
          height: 1.25rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #fff;
          background: linear-gradient(145deg, #2050e3, #10b981);
          border: 1px solid rgba(255,255,255,0.78);
          box-shadow: 0 10px 22px rgba(32,80,227,0.24);
          animation: select-pop 0.24s ease both;
        }

        @keyframes select-pop {
          from {
            opacity: 0;
            transform: scale(0.56);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .mobile-tabbar {
          padding-bottom: calc(0.375rem + env(safe-area-inset-bottom));
        }

        .wa-floating {
          bottom: calc(6.85rem + env(safe-area-inset-bottom));
        }

        .wa-floating-button,
        .wa-floating-body {
          border-radius: 999px !important;
          clip-path: circle(50% at 50% 50%);
          overflow: hidden;
          aspect-ratio: 1 / 1;
          contain: layout paint;
        }

        .wa-floating-button {
          filter: drop-shadow(0 18px 34px rgba(37,211,102,0.18));
        }

        @media (min-width: 640px) {
          .mobile-tabbar {
            padding-bottom: 0.5rem;
          }

          .wa-floating {
            bottom: 2rem;
          }
        }

        @media (max-width: 639px) {
          .wa-floating {
            right: 0.85rem;
            bottom: calc(7.6rem + env(safe-area-inset-bottom));
            z-index: 45;
          }

          .wa-floating-tooltip {
            display: none !important;
          }

          .wa-floating-button {
            width: 3.05rem !important;
            height: 3.05rem !important;
            transform: none !important;
          }

          .wa-floating-body {
            background: rgba(255,255,255,0.52);
            backdrop-filter: blur(16px) saturate(1.25);
            -webkit-backdrop-filter: blur(16px) saturate(1.25);
          }

          .wa-floating-button svg {
            width: 1.55rem;
            height: 1.55rem;
          }

          nav {
            min-height: 4.25rem;
          }

          nav .perspective-wrapper {
            width: 2.75rem !important;
            height: 2.75rem !important;
          }

          nav .logo-3d-box {
            width: 2.5rem !important;
            height: 2.5rem !important;
            border-radius: 0.85rem !important;
          }

          .header-status-card {
            width: min(14.6rem, calc(100vw - 4.25rem));
            min-height: 2.62rem;
            gap: 0.28rem;
            padding: 0.26rem;
            border-radius: 999px;
            box-shadow:
              0 12px 30px rgba(15,23,42,0.1),
              inset 0 1px 0 rgba(255,255,255,0.96);
          }

          .header-status-dot {
            width: 1.74rem;
            height: 1.74rem;
            box-shadow: 0 0 0 0.22rem rgba(34,197,94,0.14), 0 0 16px rgba(34,197,94,0.52);
          }

          .header-status-dot::after {
            inset: 0.58rem;
          }

          .header-status-card.is-offline .header-status-dot {
            box-shadow: 0 0 0 0.22rem rgba(245,158,11,0.14), 0 0 16px rgba(245,158,11,0.5);
          }

          .header-status-copy {
            gap: 0.08rem;
            padding: 0.32rem 0.36rem 0.32rem 0.64rem;
            border-radius: 999px;
          }

          .header-status-copy::before {
            left: 0.38rem;
            top: 0.34rem;
            bottom: 0.34rem;
            width: 0.15rem;
          }

          .header-status-topline {
            gap: 0.3rem;
          }

          .header-status-copy strong {
            font-size: 0.58rem;
          }

          .header-status-topline small {
            padding: 0.18rem 0.28rem;
            font-size: 0.43rem;
          }

          .header-status-rotator {
            width: 100%;
            height: 0.78rem;
          }

          .header-status-rotator span {
            padding: 0 0.32rem;
            font-size: 0.46rem;
            line-height: 0.76rem;
          }

          .header-status-action {
            min-height: 1.95rem;
            padding: 0 0.48rem;
            font-size: 0.52rem;
          }

          .header-status-card {
            width: min(15.5rem, calc(100vw - 4.15rem));
            min-height: 2.76rem;
            padding: 0;
          }

          .header-status-copy {
            padding: 0.43rem 0.5rem 0.42rem 0.72rem;
            gap: 0.04rem;
          }

          .header-status-copy::before {
            display: none;
          }

          .header-status-copy strong {
            font-size: 0.78rem;
          }

          .header-status-topline small {
            padding: 0.16rem 0.3rem;
            font-size: 0.44rem;
          }

          .header-status-rotator {
            height: 0.82rem;
          }

          .header-status-rotator span {
            padding: 0;
            font-size: 0.49rem;
            line-height: 0.82rem;
          }

          .header-status-action {
            min-width: 4.85rem;
            margin: 0.22rem;
            padding: 0 0.48rem;
            font-size: 0.52rem;
          }

          .header-status-card {
            width: min(16.8rem, calc(100vw - 4rem));
            min-height: 3rem;
          }

          .header-status-copy {
            padding: 0.46rem 0.56rem 0.44rem 0.78rem;
            gap: 0.08rem;
          }

          .header-status-copy strong {
            font-size: 0.92rem;
          }

          .header-status-topline small {
            padding: 0.2rem 0.36rem;
            font-size: 0.54rem;
          }

          .header-status-rotator {
            height: 0.96rem;
          }

          .header-status-rotator span {
            font-size: 0.6rem;
            line-height: 0.96rem;
          }

          .header-status-action {
            min-width: 5.1rem;
            font-size: 0.6rem;
          }

          .header-status-card {
            width: min(13.7rem, calc(100vw - 4.25rem));
            min-height: 2.54rem;
            gap: 0.08rem;
          }

          .header-status-copy {
            padding: 0.38rem 0.42rem 0.36rem 0.58rem;
            gap: 0.02rem;
          }

          .header-status-copy strong {
            font-size: 0.68rem;
            letter-spacing: 0.02em;
          }

          .header-status-topline small {
            padding: 0.14rem 0.26rem;
            font-size: 0.42rem;
            letter-spacing: 0.06em;
          }

          .header-status-rotator {
            height: 0.72rem;
          }

          .header-status-rotator span {
            font-size: 0.43rem;
            line-height: 0.72rem;
            letter-spacing: 0.04em;
          }

          .header-status-action {
            min-width: 4.2rem;
            margin: 0.18rem;
            padding: 0 0.34rem;
            font-size: 0.43rem;
            letter-spacing: 0.06em;
          }

          .home-screen {
            gap: 2.6rem !important;
            padding-top: 0.75rem !important;
          }

          .home-hero-layout {
            gap: 1.35rem !important;
          }

          .home-hero-copy {
            gap: 1.15rem !important;
            padding-top: 0 !important;
          }

          .home-welcome-copy {
            margin-top: 0.75rem !important;
          }

          .home-promo-card {
            border-radius: 1.35rem !important;
            box-shadow: 0 14px 34px rgba(15,23,42,0.08) !important;
          }

          .home-promo-card .h-40 {
            height: 11.25rem !important;
          }

          .home-promo-card .p-6 {
            padding: 1rem !important;
          }

          .home-promo-card h3 {
            font-size: 1.12rem !important;
            line-height: 1.12 !important;
          }

          .home-promo-card p {
            font-size: 0.78rem !important;
            line-height: 1.35 !important;
          }

          .home-welcome-copy h1 {
            font-size: 2.35rem !important;
            line-height: 1.04 !important;
            margin-bottom: 0.65rem !important;
          }

          .home-welcome-copy p {
            font-size: 0.98rem !important;
            line-height: 1.55 !important;
            max-width: 22rem;
          }

          .service-icon-shell {
            margin-left: 0;
            margin-right: 0;
            padding: 0.35rem 0 0 !important;
            overflow: visible !important;
          }

          .service-icon-grid {
            display: grid !important;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            width: 100% !important;
            gap: 0.75rem 0.5rem !important;
            padding: 0 !important;
          }

          .service-icon-item {
            width: auto !important;
            gap: 0.45rem !important;
          }

          .service-icon-item .premium-icon-glass {
            width: 3.25rem !important;
            height: 3.25rem !important;
            border-radius: 1.05rem !important;
          }

          .service-icon-item > span {
            font-size: 0.67rem !important;
            padding: 0 !important;
            line-height: 1.12 !important;
            min-height: 1.55rem;
            display: flex;
            align-items: center;
          }

          .project-builder-card {
            border-radius: 1.65rem !important;
            padding: 1.15rem !important;
            max-width: none !important;
            box-shadow: 0 16px 44px rgba(32,80,227,0.08) !important;
          }

          .project-builder-card .mb-8 {
            margin-bottom: 1.15rem !important;
          }

          .project-builder-card .space-y-6 {
            gap: 0.9rem !important;
          }

          .project-builder-card .project-builder-flow {
            gap: 0.82rem !important;
          }

          .project-service-picker {
            gap: 0.55rem !important;
          }

          .project-service-choice {
            min-height: 3.55rem !important;
            gap: 0.52rem !important;
            padding: 0.55rem !important;
            border-radius: 1.08rem !important;
          }

          .project-service-choice-icon {
            width: 2.15rem !important;
            height: 2.15rem !important;
            border-radius: 0.82rem !important;
          }

          .project-service-choice-copy h3 {
            font-size: 0.72rem !important;
            line-height: 1.05 !important;
          }

          .project-service-choice-copy p {
            font-size: 0.55rem !important;
            line-height: 1.1 !important;
          }

          .project-builder-card .mt-14 {
            margin-top: 1.6rem !important;
          }

          .project-builder-card .p-5 {
            padding: 1rem !important;
            border-radius: 1.35rem !important;
          }

          .project-builder-card h2 {
            font-size: 1.1rem !important;
          }

          .project-builder-card h3 {
            font-size: 0.92rem !important;
          }

          .project-builder-card p {
            font-size: 0.76rem !important;
          }

          .project-builder-card .project-service-choice-copy h3 {
            font-size: 0.72rem !important;
            line-height: 1.05 !important;
          }

          .project-builder-card .project-service-choice-copy p {
            font-size: 0.55rem !important;
            line-height: 1.1 !important;
          }

          .project-builder-card .absolute.-bottom-8 {
            opacity: 0.38 !important;
            transform: scale(0.78);
          }

          .home-about-section {
            margin-top: 0.25rem;
          }

          .home-about-shell {
            border-radius: 1.65rem !important;
          }

          .home-about-section > .relative {
            padding: 1.2rem !important;
            gap: 1rem !important;
          }

          .home-about-section .w-\\[260px\\] {
            width: 13.5rem !important;
            max-width: 72% !important;
            border-radius: 1.8rem !important;
            aspect-ratio: 9 / 16 !important;
          }

          .home-about-section .w-full.md\\:w-\\[320px\\] {
            height: auto !important;
            margin-top: 0 !important;
            padding-top: 0 !important;
          }

          .home-about-section .w-\\[260px\\] > div {
            border-radius: 1.45rem !important;
          }

          .home-about-section .about-reel-frame {
            padding: 0.42rem !important;
            background:
              linear-gradient(135deg, rgba(255,255,255,0.98), rgba(239,246,255,0.82)),
              conic-gradient(from 150deg, rgba(32,80,227,0.45), rgba(14,165,233,0.18), rgba(255,255,255,0.82), rgba(32,80,227,0.45)) !important;
            border: 1px solid rgba(255,255,255,0.82) !important;
            box-shadow: 0 18px 42px rgba(15,23,42,0.18), inset 0 1px 0 rgba(255,255,255,0.95) !important;
            animation: reel-frame-float 5.6s ease-in-out infinite;
          }

          .home-about-section .about-reel-frame::before {
            content: "";
            position: absolute;
            inset: -0.48rem;
            border-radius: 2.15rem;
            background: conic-gradient(from 0deg, rgba(32,80,227,0), rgba(32,80,227,0.34), rgba(14,165,233,0.2), rgba(32,80,227,0));
            filter: blur(10px);
            opacity: 0.62;
            z-index: -1;
            animation: reel-ring-spin 8s linear infinite;
          }

          .home-about-section .about-reel-frame::after {
            content: "REEL";
            position: absolute;
            right: -0.55rem;
            top: 1.25rem;
            width: auto;
            height: auto;
            border-radius: 999px;
            background: rgba(17,24,39,0.84);
            color: white;
            padding: 0.28rem 0.46rem;
            font-size: 0.52rem;
            font-weight: 800;
            z-index: 30;
            box-shadow: 0 10px 22px rgba(15,23,42,0.2);
          }

          .home-about-section .about-reel-screen {
            border: 1px solid rgba(255,255,255,0.72);
            background: #020617 !important;
            box-shadow: inset 0 0 24px rgba(0,0,0,0.3);
          }

          .home-about-section .about-reel-screen video {
            object-fit: cover;
          }

          .home-about-section .animate-float-rotate-1,
          .home-about-section .absolute.bottom-\\[20\\%\\] {
            display: none !important;
          }

          .home-about-section .absolute.top-5 {
            top: 0.7rem !important;
            padding: 0.28rem 0.65rem !important;
          }

          .home-about-section h2 {
            font-size: 2rem !important;
            line-height: 1.06 !important;
            margin-bottom: 1rem !important;
          }

          .home-about-section .p-6 {
            padding: 0.9rem !important;
          }

          .home-about-section .text-base {
            font-size: 0.88rem !important;
            line-height: 1.48 !important;
          }

          .home-about-section .rounded-\\[2rem\\] {
            border-radius: 1.25rem !important;
          }

          .home-about-section .flex.flex-col.gap-4 {
            gap: 0.65rem !important;
            margin-bottom: 1rem !important;
          }

          .home-about-section .bg-white\\/80.backdrop-blur-xl {
            border-radius: 1.25rem !important;
            gap: 0.75rem !important;
            padding: 0.75rem !important;
          }

          .home-about-section button {
            padding-top: 0.85rem !important;
            padding-bottom: 0.85rem !important;
          }

          .home-about-section > .advantage-showcase {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.1rem !important;
            min-height: auto;
            padding: 1.05rem !important;
            border-radius: 1.65rem;
          }

          .advantage-copy {
            max-width: 100%;
            order: 2;
          }

          .advantage-pill {
            margin-bottom: 0.85rem;
            padding: 0.5rem 0.72rem;
          }

          .advantage-pill strong {
            font-size: 0.64rem;
          }

          .advantage-copy h2 {
            font-size: 2rem !important;
            line-height: 1.05 !important;
            margin-bottom: 0.75rem !important;
          }

          .advantage-copy p {
            font-size: 0.9rem;
            line-height: 1.55;
          }

          .advantage-stat-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.55rem;
            margin: 1rem 0;
          }

          .advantage-stat-card {
            min-height: 4.25rem;
            border-radius: 1rem;
          }

          .advantage-stat-card span {
            font-size: 1.18rem;
          }

          .advantage-action {
            width: 100%;
            min-height: 2.8rem;
          }

          .advantage-media-stage {
            order: 1;
            min-height: 26rem;
            width: 100%;
            overflow: hidden;
            border-radius: 1.35rem;
          }

          .advantage-grid-lines {
            inset: 1rem;
            border-radius: 1.2rem;
          }

          .advantage-hero-reel {
            width: 11.2rem;
            border-radius: 1.55rem;
            border-width: 0.32rem;
            top: 43%;
          }

          .advantage-orbit-cloud {
            display: none;
          }

          .advantage-mobile-strip {
            position: absolute;
            left: 0;
            right: auto;
            bottom: 0.85rem;
            z-index: 5;
            display: flex;
            width: max-content;
            gap: 0.65rem;
            animation: advantage-strip-slide 26s linear infinite;
          }

          .advantage-mobile-card {
            width: 5.4rem;
            aspect-ratio: 3 / 4;
            overflow: hidden;
            border-radius: 1rem;
            border: 0.2rem solid rgba(255,255,255,0.76);
            background: #050914;
            box-shadow: 0 14px 30px rgba(15,23,42,0.16);
          }

          .home-clients-section {
            margin-top: -0.75rem !important;
          }

          .home-clients-section > div {
            border-radius: 1.65rem !important;
          }

          .home-clients-section .px-8 {
            padding: 1.25rem !important;
          }

          .home-clients-section h2 {
            font-size: 1.95rem !important;
            line-height: 1.08 !important;
            margin-bottom: 0.85rem !important;
          }

          .home-clients-section p {
            font-size: 0.86rem !important;
            line-height: 1.45 !important;
            margin-bottom: 0 !important;
          }

          .home-clients-section .py-12 {
            padding-top: 1rem !important;
            padding-bottom: 1.2rem !important;
            gap: 0.75rem !important;
          }

          .home-clients-section .w-\\[200px\\] {
            width: 9.8rem !important;
            padding: 0.75rem 0.9rem !important;
            border-radius: 1.1rem !important;
          }

          .home-faq-section {
            margin-bottom: 2.5rem !important;
          }

          .home-faq-section > div {
            gap: 1.25rem !important;
          }

          .home-faq-section h2 {
            font-size: 2.15rem !important;
            line-height: 1.04 !important;
            margin-bottom: 0.8rem !important;
          }

          .home-faq-section p {
            font-size: 0.9rem !important;
            line-height: 1.5 !important;
            margin-bottom: 1rem !important;
          }

          .home-faq-section .faq-video-orbit {
            width: min(58vw, 12rem) !important;
            margin-bottom: 1.2rem !important;
          }

          .home-faq-section .gap-4 {
            gap: 0.7rem !important;
          }

          .home-faq-section button {
            padding: 1rem !important;
            border-radius: 1.15rem !important;
          }

          .home-contact-section {
            margin-bottom: 2.5rem !important;
          }

          .home-contact-section > div {
            border-radius: 1.65rem !important;
          }

          .home-contact-section .p-6 {
            padding: 1rem !important;
          }

          .home-contact-section h2 {
            font-size: 1.1rem !important;
            line-height: 1.9 !important;
          }

          .home-contact-section input,
          .home-contact-section select {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0.35rem 0 !important;
            display: block !important;
            text-align: left !important;
            text-align-last: left !important;
          }

          .home-contact-section .mt-12 {
            margin-top: 1.5rem !important;
          }
        }

        .service-liquid-icon {
          background:
            linear-gradient(145deg, rgba(167,243,208,0.72), rgba(16,185,129,0.42)),
            radial-gradient(circle at 0% 0%, rgba(187,247,208,0.92), transparent 30%),
            radial-gradient(circle at 100% 0%, rgba(134,239,172,0.7), transparent 28%),
            radial-gradient(circle at 0% 100%, rgba(110,231,183,0.74), transparent 30%),
            radial-gradient(circle at 100% 100%, rgba(34,197,94,0.58), transparent 32%),
            radial-gradient(circle at 24% 16%, rgba(255,255,255,0.96), transparent 26%),
            radial-gradient(circle at 72% 76%, rgba(5,150,105,0.58), transparent 44%),
            radial-gradient(circle at 18% 80%, rgba(45,212,191,0.38), transparent 36%);
          box-shadow:
            0 14px 36px rgba(5,150,105,0.25),
            0 0 28px rgba(16,185,129,0.18),
            inset 0 1px 3px rgba(255,255,255,0.9),
            inset 0 -16px 30px rgba(6,95,70,0.2);
          isolation: isolate;
        }

        .service-liquid-core {
          position: absolute;
          inset: 12px;
          border-radius: 1.05rem;
          background:
            radial-gradient(circle at 30% 22%, rgba(255,255,255,0.88), transparent 28%),
            radial-gradient(circle at 74% 74%, rgba(4,120,87,0.62), transparent 44%),
            linear-gradient(135deg, rgba(5,150,105,0.5), rgba(20,184,166,0.42));
          opacity: 0.92;
          animation: service-core-breathe 4.8s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }

        .service-icon-item:hover .service-liquid-core {
          opacity: 1;
          transform: scale(1.08);
        }

        /* --- Services Page Liquid Glass System --- */
        .services-liquid-pill,
        .services-liquid-filter,
        .services-liquid-command,
        .services-showcase-shell,
        .services-showcase-card,
        .services-liquid-row,
        .services-liquid-tag,
        .services-liquid-item,
        .services-liquid-media,
        .services-liquid-badge,
        .services-liquid-phase,
        .services-liquid-phase-icon,
        .services-liquid-arrow {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          backdrop-filter: blur(24px) saturate(1.45);
          -webkit-backdrop-filter: blur(24px) saturate(1.45);
        }

        .services-liquid-pill {
          background:
            radial-gradient(circle at 12% 18%, rgba(255,255,255,0.9), transparent 28%),
            linear-gradient(135deg, rgba(236,253,245,0.72), rgba(167,243,208,0.28));
          border: 1px solid rgba(187,247,208,0.9);
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.92), 0 16px 36px rgba(16,185,129,0.12);
        }

        .services-liquid-filter {
          border: 1px solid rgba(255,255,255,0.8);
          background:
            radial-gradient(circle at 12% 14%, rgba(255,255,255,0.75), transparent 24%),
            linear-gradient(135deg, rgba(255,255,255,0.66), rgba(209,250,229,0.34));
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.85), 0 10px 24px rgba(15,23,42,0.05);
        }

        .services-liquid-filter.is-active {
          border-color: rgba(110,231,183,0.95);
          background:
            radial-gradient(circle at 18% 16%, rgba(255,255,255,0.72), transparent 22%),
            linear-gradient(135deg, rgba(16,185,129,0.92), rgba(13,148,136,0.76));
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.36), 0 16px 34px rgba(16,185,129,0.26);
        }

        .services-liquid-command {
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(2,6,23,0.92);
          box-shadow:
            inset 0 1px 2px rgba(255,255,255,0.18),
            inset 0 -22px 50px rgba(16,185,129,0.08),
            0 28px 80px rgba(15,23,42,0.22);
        }

        .services-liquid-ambient {
          background:
            radial-gradient(circle at 12% 20%, rgba(52,211,153,0.34), transparent 30%),
            radial-gradient(circle at 92% 22%, rgba(45,212,191,0.18), transparent 30%),
            radial-gradient(circle at 48% 100%, rgba(16,185,129,0.18), transparent 34%),
            linear-gradient(135deg, #020617, #07120f 58%, #020617);
          animation: services-liquid-flow 9s ease-in-out infinite;
        }

        .services-showcase-shell {
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(2,6,23,0.94);
          box-shadow:
            inset 0 1px 2px rgba(255,255,255,0.18),
            inset 0 -26px 64px rgba(16,185,129,0.08),
            0 28px 80px rgba(15,23,42,0.22);
        }

        .services-showcase-ambient {
          background:
            radial-gradient(circle at 10% 8%, rgba(167,243,208,0.22), transparent 28%),
            radial-gradient(circle at 86% 18%, rgba(34,197,94,0.16), transparent 26%),
            linear-gradient(135deg, #020617 0%, #06150f 52%, #020617 100%);
          animation: services-liquid-flow 10s ease-in-out infinite;
        }

        .services-showcase-shell::before {
          content: "";
          position: absolute;
          inset: -35%;
          background:
            repeating-linear-gradient(90deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 72px),
            linear-gradient(115deg, transparent 35%, rgba(110,231,183,0.12) 50%, transparent 64%);
          opacity: 0.36;
          animation: footer-glass-pass 9s ease-in-out infinite;
          pointer-events: none;
        }

        .services-showcase-track {
          position: relative;
          z-index: 1;
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(82vw, 1fr);
          gap: 0.75rem;
          overflow-x: auto;
          overscroll-behavior-x: contain;
          scroll-snap-type: x mandatory;
          padding: 0.1rem 0.85rem 0.55rem;
          scrollbar-width: none;
        }

        .services-showcase-track::-webkit-scrollbar {
          display: none;
        }

        .services-showcase-card {
          min-height: auto;
          scroll-snap-align: start;
          border-radius: 1.45rem;
          border: 1px solid rgba(255,255,255,0.15);
          background:
            radial-gradient(circle at 12% 10%, rgba(255,255,255,0.11), transparent 26%),
            linear-gradient(135deg, rgba(255,255,255,0.075), rgba(16,185,129,0.035));
          color: white;
          text-align: left;
          padding: 0.45rem;
          display: block;
          box-shadow:
            inset 0 1px 3px rgba(255,255,255,0.13),
            0 18px 46px rgba(0,0,0,0.24);
          transition: transform 0.45s ease, border-color 0.45s ease, box-shadow 0.45s ease;
        }

        .services-showcase-card:hover,
        .services-showcase-card.is-active {
          transform: translateY(-6px);
          border-color: rgba(110,231,183,0.55);
          box-shadow:
            inset 0 1px 3px rgba(255,255,255,0.18),
            0 24px 56px rgba(16,185,129,0.18);
        }

        .services-showcase-video {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: auto;
          min-height: 0;
          aspect-ratio: 16 / 9;
          border-radius: 1.1rem;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
        }

        .services-showcase-single-track {
          display: flex;
          justify-content: center;
          overflow: visible;
          padding: 0.1rem 0.1rem 1.2rem;
        }

        .services-single-showcase-card {
          width: min(100%, 960px);
          flex: 0 1 960px;
        }

        .services-showcase-shell {
          background: transparent !important;
          border: 0 !important;
          box-shadow: none !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }

        .services-showcase-shell::before,
        .services-showcase-ambient {
          display: none !important;
        }

        .services-single-showcase-card {
          background: transparent !important;
          border: 0 !important;
          box-shadow: none !important;
          padding: 0 !important;
          border-radius: 1.35rem;
        }

        .services-single-showcase-card:hover,
        .services-single-showcase-card.is-active {
          transform: none !important;
          box-shadow: none !important;
          border-color: transparent !important;
        }

        .services-single-showcase-card .services-showcase-video {
          border: 1px solid rgba(15,23,42,0.08);
          background: #020617;
          box-shadow: 0 18px 48px rgba(15,23,42,0.12);
        }

        .services-character-label {
          position: absolute;
          left: 0.75rem;
          right: 0.75rem;
          bottom: 0.75rem;
          min-height: 3.2rem;
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,0.18);
          background:
            radial-gradient(circle at 12% 18%, rgba(255,255,255,0.18), transparent 24%),
            rgba(0,0,0,0.42);
          backdrop-filter: blur(20px) saturate(1.35);
          -webkit-backdrop-filter: blur(20px) saturate(1.35);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 0.18rem;
          padding: 0.62rem 0.8rem;
          color: white;
          text-align: left;
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.12), 0 10px 28px rgba(0,0,0,0.22);
        }

        .services-character-label span {
          font-size: 0.78rem;
          font-weight: 800;
          line-height: 1;
        }

        .services-character-label small {
          color: rgba(187,247,208,0.78);
          font-size: 0.58rem;
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1;
        }

        @media (min-width: 1024px) {
          .services-showcase-track {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            grid-auto-flow: initial;
            grid-auto-columns: initial;
            overflow: visible;
            padding: 0.1rem 0.1rem 1.6rem;
            gap: 0.9rem;
          }

          .services-showcase-single-track {
            display: flex;
            justify-content: center;
          }

          .services-showcase-single-track .services-showcase-video {
            aspect-ratio: 16 / 9;
          }

          .services-showcase-video {
            height: auto;
            min-height: 0;
            aspect-ratio: 16 / 9;
          }

          .services-showcase-card:nth-child(even) {
            transform: translateY(1.2rem);
          }

          .services-showcase-card:nth-child(even):hover,
          .services-showcase-card:nth-child(even).is-active {
            transform: translateY(0.75rem);
          }
        }

        @media (max-width: 639px) {
          .services-showcase-shell {
            border-radius: 1.5rem;
            left: auto;
            width: auto;
            transform: none;
            margin-left: -0.25rem;
            margin-right: -0.25rem;
          }

          .services-showcase-track {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-auto-flow: initial;
            grid-auto-columns: initial;
            overflow: visible;
            scroll-snap-type: none;
            gap: 0.55rem;
            padding: 0;
          }

          .services-showcase-card {
            scroll-snap-align: none;
            border-radius: 1.05rem;
            padding: 0.32rem;
          }

          .services-showcase-single-track {
            display: flex;
            justify-content: center;
            padding: 0;
          }

          .services-single-showcase-card {
            width: 100%;
            flex-basis: 100%;
          }

          .services-showcase-video {
            height: auto;
            min-height: 0;
            aspect-ratio: 16 / 9;
            border-radius: 0.82rem;
          }

          .services-character-label {
            left: 0.42rem;
            right: 0.42rem;
            bottom: 0.42rem;
            min-height: 2.35rem;
            border-radius: 0.72rem;
            padding: 0.46rem 0.48rem;
            gap: 0.12rem;
          }

          .services-character-label span {
            font-size: 0.62rem;
          }

          .services-character-label small {
            font-size: 0.45rem;
          }
        }

        .services-liquid-strip {
          background: rgba(255,255,255,0.02);
        }

        .services-liquid-strip::before {
          content: "";
          position: absolute;
          inset: 12px;
          border-radius: 1.4rem;
          background:
            radial-gradient(circle at 16% 14%, rgba(255,255,255,0.12), transparent 26%),
            linear-gradient(135deg, rgba(255,255,255,0.04), rgba(16,185,129,0.04));
          opacity: 0;
          transform: scale(0.96);
          transition: opacity 0.45s ease, transform 0.45s ease;
          z-index: -1;
        }

        .services-liquid-strip:hover::before,
        .services-liquid-strip.is-active::before {
          opacity: 1;
          transform: scale(1);
        }

        .services-liquid-row {
          border-radius: 2rem;
          border: 1px solid rgba(255,255,255,0.68);
          background:
            radial-gradient(circle at 8% 12%, rgba(255,255,255,0.78), transparent 25%),
            radial-gradient(circle at 100% 100%, rgba(16,185,129,0.12), transparent 34%),
            linear-gradient(135deg, rgba(255,255,255,0.62), rgba(240,253,244,0.32));
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.86), 0 16px 42px rgba(15,23,42,0.05);
          contain: layout paint;
          transform: translateZ(0);
          transition: border-color 0.28s ease, box-shadow 0.28s ease, background 0.28s ease, transform 0.28s ease;
        }

        .services-liquid-row::before {
          content: "";
          position: absolute;
          inset: -40%;
          background:
            radial-gradient(circle at 28% 26%, rgba(52,211,153,0.26), transparent 24%),
            radial-gradient(circle at 64% 74%, rgba(45,212,191,0.18), transparent 28%);
          filter: blur(20px);
          opacity: 0.45;
          transform: translateZ(0);
          z-index: -1;
        }

        .services-liquid-row.is-active {
          border-color: rgba(167,243,208,0.9);
          box-shadow: inset 0 1px 3px rgba(255,255,255,0.92), 0 22px 58px rgba(16,185,129,0.13);
        }

        .services-liquid-panel {
          display: block;
          max-height: 0;
          opacity: 0;
          margin-top: 0;
          overflow: hidden;
          pointer-events: none;
          transition: margin-top 0.18s ease;
        }

        .services-liquid-panel.is-active {
          max-height: 42rem;
          opacity: 1;
          margin-top: 1.35rem;
          pointer-events: auto;
        }

        .services-liquid-panel-inner {
          overflow: visible;
        }

        .services-liquid-arrow,
        .services-liquid-phase-icon {
          border: 1px solid rgba(255,255,255,0.62);
          background:
            radial-gradient(circle at 28% 18%, rgba(255,255,255,0.74), transparent 25%),
            linear-gradient(135deg, rgba(110,231,183,0.55), rgba(5,150,105,0.72));
          color: white;
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.42), 0 14px 30px rgba(16,185,129,0.22);
        }

        .services-liquid-arrow:not(.is-active) {
          background:
            radial-gradient(circle at 28% 18%, rgba(255,255,255,0.78), transparent 25%),
            linear-gradient(135deg, rgba(255,255,255,0.66), rgba(209,250,229,0.3));
          color: rgba(5,150,105,0.72);
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.8), 0 10px 24px rgba(15,23,42,0.05);
        }

        .services-liquid-tag {
          border: 1px solid rgba(255,255,255,0.72);
          background:
            radial-gradient(circle at 14% 20%, rgba(255,255,255,0.75), transparent 25%),
            linear-gradient(135deg, rgba(255,255,255,0.68), rgba(236,253,245,0.36));
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.82), 0 8px 18px rgba(16,185,129,0.06);
        }

        .services-liquid-item {
          border: 1px solid rgba(187,247,208,0.72);
          background:
            radial-gradient(circle at 8% 50%, rgba(52,211,153,0.32), transparent 24%),
            radial-gradient(circle at 92% 20%, rgba(255,255,255,0.75), transparent 24%),
            linear-gradient(135deg, rgba(255,255,255,0.7), rgba(220,252,231,0.38));
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.86), 0 12px 28px rgba(16,185,129,0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .services-liquid-item:hover {
          transform: translateY(-3px);
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.9), 0 18px 36px rgba(16,185,129,0.16);
        }

        .services-liquid-media {
          border: 1px solid rgba(255,255,255,0.72);
          background:
            radial-gradient(circle at 18% 18%, rgba(255,255,255,0.62), transparent 26%),
            linear-gradient(135deg, rgba(255,255,255,0.38), rgba(209,250,229,0.24));
          box-shadow: inset 0 1px 4px rgba(255,255,255,0.55), 0 24px 64px rgba(16,185,129,0.16);
        }

        .services-liquid-badge {
          border: 1px solid rgba(255,255,255,0.42);
          background: rgba(255,255,255,0.16);
          backdrop-filter: blur(20px) saturate(1.35);
          -webkit-backdrop-filter: blur(20px) saturate(1.35);
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.28), 0 12px 30px rgba(0,0,0,0.18);
        }

        .services-phase-section {
          position: relative;
        }

        .services-phase-track {
          position: relative;
        }

        .services-liquid-phase {
          border: 1px solid rgba(255,255,255,0.82);
          background:
            radial-gradient(circle at 82% 8%, var(--phase-a), transparent 30%),
            radial-gradient(circle at 8% 100%, var(--phase-b), transparent 30%),
            linear-gradient(135deg, rgba(255,255,255,0.72), rgba(255,255,255,0.34));
          backdrop-filter: blur(28px) saturate(1.55);
          -webkit-backdrop-filter: blur(28px) saturate(1.55);
          box-shadow:
            inset 0 1px 2px rgba(255,255,255,0.88),
            inset 0 -26px 48px rgba(255,255,255,0.2),
            0 18px 44px rgba(15,23,42,0.06);
          transform: translateZ(0);
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
        }

        .services-liquid-phase:hover {
          transform: translateY(-0.5rem);
          box-shadow:
            inset 0 1px 3px rgba(255,255,255,0.92),
            0 26px 60px color-mix(in srgb, var(--phase-c) 28%, transparent);
        }

        .services-liquid-phase::before {
          content: "";
          position: absolute;
          inset: -35%;
          background:
            linear-gradient(120deg, transparent 36%, rgba(255,255,255,0.46) 50%, transparent 64%);
          opacity: 0.34;
          transform: translateX(-18%) rotate(4deg);
          z-index: 0;
        }

        .services-liquid-phase::after {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.46), transparent 32%),
            radial-gradient(circle at 50% 110%, rgba(255,255,255,0.28), transparent 40%);
          pointer-events: none;
          z-index: 0;
        }

        .services-phase-orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(24px);
          opacity: 0.72;
          z-index: 0;
          pointer-events: none;
        }

        .services-phase-orb-a {
          width: 8rem;
          height: 8rem;
          right: -2.6rem;
          top: -2.4rem;
          background: var(--phase-a);
        }

        .services-phase-orb-b {
          width: 7rem;
          height: 7rem;
          left: -2.8rem;
          bottom: -2.2rem;
          background: var(--phase-b);
          animation-direction: reverse;
        }

        .services-liquid-phase .services-liquid-phase-icon {
          background:
            radial-gradient(circle at 28% 18%, rgba(255,255,255,0.72), transparent 25%),
            linear-gradient(135deg, var(--phase-a), var(--phase-c));
          box-shadow:
            inset 0 1px 2px rgba(255,255,255,0.45),
            0 14px 30px color-mix(in srgb, var(--phase-c) 28%, transparent);
        }

        @media (max-width: 639px) {
          .services-phase-section {
            margin-top: 3.5rem;
          }

          .services-liquid-pill,
          .services-liquid-filter,
          .services-showcase-card,
          .services-liquid-row,
          .services-liquid-tag,
          .services-liquid-item,
          .services-liquid-media,
          .services-liquid-badge,
          .services-liquid-phase,
          .services-liquid-phase-icon,
          .services-liquid-arrow {
            backdrop-filter: blur(12px) saturate(1.18);
            -webkit-backdrop-filter: blur(12px) saturate(1.18);
          }

          .services-liquid-row {
            border-radius: 1.45rem;
            padding-top: 1.25rem !important;
            padding-bottom: 1.25rem !important;
          }

          .services-liquid-row::before,
          .services-phase-orb,
          .services-liquid-phase::before {
            display: none !important;
          }

          .services-liquid-panel.is-active {
            margin-top: 1rem;
            max-height: 56rem;
          }

          .services-liquid-panel {
            padding-left: 2.9rem !important;
            padding-right: 0.25rem !important;
          }

          .services-liquid-row h2 {
            font-size: clamp(1.55rem, 8.4vw, 2.2rem) !important;
            transform: none !important;
          }

          .services-liquid-row .services-liquid-arrow {
            width: 2.35rem !important;
            height: 2.35rem !important;
          }

          .services-phase-section > .mb-8 {
            margin-bottom: 1.1rem !important;
          }

          .services-phase-section h2 {
            font-size: 2rem !important;
            line-height: 1.05 !important;
          }

          .services-phase-track {
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: minmax(78vw, 1fr);
            grid-template-columns: none;
            gap: 0.85rem;
            overflow-x: auto;
            overscroll-behavior-x: contain;
            scroll-snap-type: x mandatory;
            padding: 0.2rem 1.25rem 1.1rem 0.15rem;
            margin-right: -1.25rem;
            scrollbar-width: none;
          }

          .services-phase-track::-webkit-scrollbar {
            display: none;
          }

          .services-liquid-phase {
            min-height: 13.2rem;
            scroll-snap-align: start;
            border-radius: 1.5rem;
            padding: 1.1rem !important;
          }

          .services-liquid-phase .services-liquid-phase-icon {
            width: 2.65rem;
            height: 2.65rem;
            border-radius: 1rem;
          }

          .services-liquid-phase h3 {
            font-size: 1.2rem;
            margin-bottom: 0.55rem;
          }

          .services-liquid-phase p {
            font-size: 0.86rem;
            line-height: 1.45;
          }
        }

        .services-feature-video-shell {
          position: relative;
          width: min(100%, 860px);
          margin: 0 auto;
          border-radius: clamp(1.4rem, 3vw, 2.35rem);
          padding: clamp(0.55rem, 1.4vw, 0.85rem);
          border: 1px solid rgba(255,255,255,0.78);
          background:
            radial-gradient(circle at 12% 8%, rgba(255,255,255,0.86), transparent 28%),
            radial-gradient(circle at 84% 16%, rgba(167,243,208,0.34), transparent 28%),
            linear-gradient(135deg, rgba(255,255,255,0.74), rgba(236,253,245,0.42));
          box-shadow:
            inset 0 1px 2px rgba(255,255,255,0.92),
            0 28px 80px rgba(15,23,42,0.1);
          overflow: hidden;
        }

        .services-feature-video-shell::before {
          content: "";
          position: absolute;
          inset: -30%;
          background:
            radial-gradient(circle at 30% 20%, rgba(34,197,94,0.14), transparent 28%),
            linear-gradient(115deg, transparent 38%, rgba(255,255,255,0.5) 50%, transparent 62%);
          animation: footer-glass-pass 8s ease-in-out infinite;
          pointer-events: none;
        }

        .services-feature-video-frame {
          position: relative;
          z-index: 1;
          width: min(100%, 420px);
          aspect-ratio: 9 / 16;
          margin: 0 auto;
          border-radius: clamp(1.05rem, 2.4vw, 1.65rem);
          overflow: hidden;
          background: #020617;
          box-shadow:
            0 20px 58px rgba(15,23,42,0.18),
            inset 0 0 0 1px rgba(255,255,255,0.18);
        }

        .services-feature-video-frame video {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .services-feature-video-caption {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-top: 0.85rem;
          text-align: center;
          color: #475569;
          font-size: 0.8rem;
        }

        .services-feature-video-caption span {
          color: #059669;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .services-feature-video-caption strong {
          color: #111827;
          font-weight: 600;
        }

        @media (max-width: 639px) {
          .services-feature-video-shell {
            padding: 0.48rem;
            border-radius: 1.35rem;
          }

          .services-feature-video-frame {
            width: min(100%, 78vw);
            border-radius: 1rem;
          }

          .services-feature-video-caption {
            padding: 0 0.5rem 0.25rem;
            font-size: 0.74rem;
          }
        }

        .fluid-blob {
          position: absolute;
          top: -34%;
          left: -34%;
          width: 168%;
          height: 168%;
          background:
            radial-gradient(circle at 35% 30%, rgba(255,255,255,0.62), transparent 24%),
            radial-gradient(circle at 62% 62%, rgba(5,150,105,0.68), transparent 38%),
            linear-gradient(120deg, rgba(34,197,94,0.48) 0%, rgba(20,184,166,0.36) 100%);
          animation: fluid-soft-pulse 6.5s ease-in-out infinite;
          border-radius: 42% 58% 52% 48% / 48% 44% 56% 52%;
          filter: blur(9px);
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 0;
          pointer-events: none;
        }

        .group:hover .fluid-blob, .active-fluid {
          background:
            radial-gradient(circle at 36% 28%, rgba(255,255,255,0.76), transparent 22%),
            radial-gradient(circle at 64% 64%, rgba(4,120,87,0.96), transparent 38%),
            linear-gradient(120deg, rgba(22,163,74,0.9) 0%, rgba(13,148,136,0.8) 100%);
          transform: scale(1.08);
          animation: fluid-soft-pulse-active 4.2s ease-in-out infinite;
        }

        @keyframes fluid-soft-pulse {
          0%, 100% { transform: translate3d(-3%, -2%, 0) scale(0.98); border-radius: 42% 58% 52% 48% / 48% 44% 56% 52%; opacity: 0.82; }
          50% { transform: translate3d(3%, 2%, 0) scale(1.06); border-radius: 58% 42% 46% 54% / 44% 56% 48% 52%; opacity: 1; }
        }

        @keyframes fluid-soft-pulse-active {
          0%, 100% { transform: translate3d(-2%, 1%, 0) scale(1.04); border-radius: 42% 58% 52% 48% / 48% 44% 56% 52%; }
          50% { transform: translate3d(2%, -1%, 0) scale(1.12); border-radius: 58% 42% 46% 54% / 44% 56% 48% 52%; }
        }

        @keyframes services-liquid-flow {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); filter: saturate(1); }
          50% { transform: translate3d(1.4%, -1.2%, 0) scale(1.035); filter: saturate(1.15); }
        }

        @keyframes services-row-liquid {
          0%, 100% { transform: translate3d(-2%, -1%, 0) scale(0.98); opacity: 0.42; }
          50% { transform: translate3d(2%, 1.5%, 0) scale(1.08); opacity: 0.66; }
        }

        @keyframes services-phase-slide-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-7px) scale(1.012); }
        }

        @keyframes services-phase-glass-sweep {
          0%, 100% { transform: translateX(-34%) rotate(4deg); opacity: 0.22; }
          50% { transform: translateX(34%) rotate(4deg); opacity: 0.46; }
        }

        @keyframes services-phase-orb-drift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-10px, 12px, 0) scale(1.14); }
        }

        /* --- Premium Liquid Glass Class --- */
        .premium-glass {
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: 
            0 8px 32px 0 rgba(31, 38, 135, 0.05),
            inset 0 1px 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 -1px 2px 0 rgba(255, 255, 255, 0.4);
        }

        /* --- Animated Blobs Background --- */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 15s infinite alternate ease-in-out;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        /* --- Morphing Liquid Image Mask --- */
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 70% 70% 30% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        .liquid-image-mask {
          animation: morph 8s ease-in-out infinite;
          overflow: hidden;
          will-change: border-radius;
        }

        /* --- General Animations --- */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { 
          opacity: 0;
          animation: fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards; 
        }

        /* --- Narrative Mad Libs Form CSS --- */
        .narrative-input {
          display: inline-block;
          box-sizing: border-box;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.72), rgba(236,253,245,0.46));
          border: 1px solid rgba(255,255,255,0.78);
          border-bottom: 2px solid rgba(16, 185, 129, 0.32);
          border-radius: 999px;
          color: #111827;
          font-family: inherit;
          font-size: 0.68em;
          font-weight: 600;
          outline: none;
          min-height: 2.85em;
          line-height: 1.25;
          padding: 0.54em 0.92em 0.62em;
          margin: 0 0.38em;
          overflow: visible;
          text-align: center;
          vertical-align: baseline;
          transition: all 0.3s ease;
          box-shadow:
            inset 0 1px 1px rgba(255,255,255,0.82),
            0 10px 15px -3px transparent;
        }
        
        .narrative-input:focus {
          border-color: rgba(34,197,94,0.5);
          border-bottom-color: #10b981;
          background: rgba(255,255,255,0.86);
          box-shadow: 0 10px 20px -10px rgba(16, 185, 129, 0.42);
          transform: translateY(-2px);
        }

        .narrative-input::placeholder {
          color: rgba(156, 163, 175, 0.5);
          font-weight: 400;
          opacity: 1;
        }

        .narrative-select {
          appearance: none;
          box-sizing: border-box;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.72), rgba(239,246,255,0.48));
          border: 1px solid rgba(255,255,255,0.78);
          border-bottom: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 999px;
          color: #111827;
          font-family: inherit;
          font-size: 0.68em;
          font-weight: 600;
          outline: none;
          min-height: 2.85em;
          line-height: 1.25;
          padding: 0.54em 0.92em 0.62em;
          margin: 0 0.38em;
          text-align: center;
          text-align-last: center;
          vertical-align: baseline;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.82);
        }

        .narrative-select:focus {
          border-color: rgba(59,130,246,0.5);
          border-bottom-color: #3b82f6;
          background: rgba(255,255,255,0.86);
          box-shadow: 0 10px 20px -10px rgba(59, 130, 246, 0.38);
          transform: translateY(-2px);
        }

        .access-input-name {
          width: 11.5em !important;
        }

        .access-input-company {
          width: 14.8em !important;
        }

        .access-input-service {
          width: 15.4em !important;
        }

        .access-input-email {
          width: 15.8em !important;
        }

        /* --- Colorful Access Granted Pass --- */
        .access-color-wrap {
          filter: drop-shadow(0 34px 70px rgba(16, 185, 129, 0.12)) drop-shadow(0 24px 55px rgba(236, 72, 153, 0.08));
        }

        .access-color-wrap:hover {
          filter: drop-shadow(0 44px 86px rgba(32, 80, 227, 0.17)) drop-shadow(0 32px 70px rgba(251, 191, 36, 0.12));
        }

        .access-aura {
          border-radius: 999px;
          filter: blur(70px);
          opacity: 0.72;
          mix-blend-mode: multiply;
          animation: access-aura-float 9s ease-in-out infinite;
        }

        .access-aura-one {
          width: 42%;
          height: 54%;
          left: -5%;
          top: 8%;
          background: rgba(45, 212, 191, 0.34);
        }

        .access-aura-two {
          width: 44%;
          height: 48%;
          right: -4%;
          top: 4%;
          background: rgba(251, 191, 36, 0.32);
          animation-delay: -2.4s;
        }

        .access-aura-three {
          width: 54%;
          height: 52%;
          left: 26%;
          bottom: -18%;
          background: rgba(244, 114, 182, 0.24);
          animation-delay: -4.6s;
        }

        .access-color-pass {
          border-color: rgba(255, 255, 255, 0.88);
          background:
            radial-gradient(circle at 9% 13%, rgba(255,255,255,0.95), transparent 20%),
            radial-gradient(circle at 78% 12%, rgba(254,240,138,0.68), transparent 26%),
            radial-gradient(circle at 92% 82%, rgba(147,197,253,0.5), transparent 28%),
            linear-gradient(135deg, rgba(255,255,255,0.86), rgba(236,253,245,0.68) 36%, rgba(255,247,237,0.72));
          box-shadow:
            inset 0 1px 2px rgba(255,255,255,0.96),
            inset 0 -28px 80px rgba(59, 130, 246, 0.05),
            0 28px 90px rgba(15, 23, 42, 0.1);
        }

        .access-color-pass::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(115deg, transparent 0 30%, rgba(255,255,255,0.62) 44%, transparent 58%),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.22) 0 1px, transparent 1px 70px);
          opacity: 0.42;
          pointer-events: none;
          animation: access-glass-sweep 8s ease-in-out infinite;
        }

        .access-color-stub {
          border-color: rgba(255,255,255,0.78);
          background:
            radial-gradient(circle at 12% 10%, rgba(250,204,21,0.45), transparent 31%),
            radial-gradient(circle at 92% 82%, rgba(45,212,191,0.42), transparent 29%),
            linear-gradient(145deg, rgba(255,255,255,0.72), rgba(240,253,244,0.52));
        }

        .access-color-form {
          isolation: isolate;
          background:
            radial-gradient(circle at 14% 24%, rgba(59,130,246,0.1), transparent 28%),
            radial-gradient(circle at 92% 18%, rgba(244,114,182,0.13), transparent 30%),
            rgba(255,255,255,0.38);
        }

        .access-color-form::before {
          content: "";
          position: absolute;
          inset: 1rem;
          border-radius: 2.2rem;
          border: 1px solid rgba(255,255,255,0.48);
          background:
            radial-gradient(circle at 8% 18%, rgba(255,255,255,0.42), transparent 25%),
            rgba(255,255,255,0.16);
          pointer-events: none;
          z-index: 0;
        }

        .access-ticket-notch {
          background:
            radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(253,253,253,0.92));
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.9),
            inset 0 -6px 10px rgba(16,185,129,0.08);
        }

        .access-color-badge {
          border: 1px solid rgba(255,255,255,0.72);
          color: #064e3b;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.74), rgba(187,247,208,0.5)),
            linear-gradient(90deg, rgba(250,204,21,0.36), rgba(45,212,191,0.32), rgba(96,165,250,0.28));
          box-shadow:
            inset 0 1px 1px rgba(255,255,255,0.8),
            0 12px 26px rgba(16,185,129,0.12);
        }

        .access-color-pulse {
          background: #22c55e;
          box-shadow: 0 0 0 5px rgba(34,197,94,0.18), 0 0 20px rgba(34,197,94,0.72);
          animation: access-pulse 1.6s ease-out infinite;
        }

        .access-color-title {
          color: #07140f;
          text-shadow: 0 10px 24px rgba(16,185,129,0.12);
        }

        .access-color-title::first-letter {
          color: #10b981;
        }

        .access-color-protocol,
        .access-color-label {
          color: rgba(15, 23, 42, 0.48);
        }

        .access-color-link:hover {
          color: #059669;
        }

        .access-color-link {
          font-size: clamp(0.92rem, 1.28vw, 1.03rem);
          line-height: 1.18;
        }

        .access-email-text {
          white-space: nowrap;
          letter-spacing: -0.035em;
        }

        .access-color-icon {
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.8), 0 10px 22px rgba(15,23,42,0.08);
        }

        .access-color-icon-blue {
          color: #2563eb;
          background: linear-gradient(135deg, rgba(219,234,254,0.78), rgba(191,219,254,0.36));
        }

        .access-color-icon-green {
          color: #16a34a;
          background: linear-gradient(135deg, rgba(220,252,231,0.86), rgba(167,243,208,0.42));
        }

        .access-color-link:hover .access-color-icon {
          transform: translateY(-1px) scale(1.05);
        }

        .access-color-online {
          color: #047857;
          background: rgba(167,243,208,0.45);
          border: 1px solid rgba(110,231,183,0.62);
        }

        .access-color-reply {
          border-color: rgba(255,255,255,0.72);
          background:
            radial-gradient(circle at 88% 10%, rgba(250,204,21,0.24), transparent 36%),
            rgba(255,255,255,0.46);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.74);
        }

        .access-narrative-copy {
          max-width: 100%;
        }

        @media (min-width: 768px) and (max-width: 1060px) {
          .access-email-text {
            font-size: 0.9rem;
            letter-spacing: -0.055em;
          }

          .access-color-stub {
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }

          .access-color-form {
            padding-left: 2.5rem !important;
            padding-right: 2.5rem !important;
          }
        }

        @media (max-width: 767px) {
          .access-email-text {
            white-space: normal;
            overflow-wrap: anywhere;
            letter-spacing: -0.02em;
          }

          .access-color-link {
            font-size: 0.98rem;
          }

          .access-color-form::before {
            inset: 0.65rem;
            border-radius: 1.55rem;
          }
        }

        @keyframes access-aura-float {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(12px, -10px, 0) scale(1.08); }
        }

        @keyframes access-glass-sweep {
          0%, 100% { transform: translateX(-38%); opacity: 0.24; }
          48% { opacity: 0.58; }
          70% { transform: translateX(38%); opacity: 0.18; }
        }

        @keyframes access-pulse {
          0% { transform: scale(1); }
          72% { transform: scale(1.18); box-shadow: 0 0 0 12px rgba(34,197,94,0), 0 0 20px rgba(34,197,94,0.72); }
          100% { transform: scale(1); }
        }

        /* --- Home Ending Status Stripe --- */
        .home-status-marquee-section {
          margin-top: -1.4rem;
          margin-bottom: clamp(7.5rem, 11vw, 9rem);
          padding: 0 clamp(1rem, 4vw, 3rem);
          overflow: hidden;
        }

        .status-marquee-shell {
          position: relative;
          width: min(1120px, 100%);
          margin: 0 auto;
          overflow: hidden;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.78);
          background:
            radial-gradient(circle at 14% 20%, rgba(255,255,255,0.88), transparent 28%),
            linear-gradient(135deg, rgba(255,255,255,0.74), rgba(226,252,238,0.42) 45%, rgba(255,245,215,0.5));
          backdrop-filter: blur(26px) saturate(1.45);
          -webkit-backdrop-filter: blur(26px) saturate(1.45);
          box-shadow:
            inset 0 1px 2px rgba(255,255,255,0.95),
            inset 0 -18px 36px rgba(20, 184, 166, 0.08),
            0 22px 55px rgba(15, 23, 42, 0.09);
        }

        .status-marquee-shell::before {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          background: linear-gradient(100deg, transparent 12%, rgba(255,255,255,0.7) 28%, transparent 43%);
          opacity: 0.45;
          animation: status-stripe-shine 6.5s ease-in-out infinite;
        }

        .status-marquee-track {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          width: max-content;
          padding: 0.78rem 0;
          white-space: nowrap;
          will-change: transform;
          animation: status-marquee-roll 26s linear infinite;
        }

        .status-marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.56rem 1rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.72);
          background: rgba(255, 255, 255, 0.42);
          color: #17251f;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.75);
        }

        .status-marquee-dot {
          width: 0.42rem;
          height: 0.42rem;
          flex: 0 0 auto;
          border-radius: 999px;
          background: #a7f3d0;
          box-shadow: 0 0 0 4px rgba(167,243,208,0.28);
        }

        .status-marquee-dot.is-live {
          background: #22c55e;
          box-shadow: 0 0 0 4px rgba(34,197,94,0.18), 0 0 18px rgba(34,197,94,0.65);
          animation: status-live-pulse 1.55s ease-out infinite;
        }

        .status-marquee-dot.is-offline {
          background: #f59e0b;
          box-shadow: 0 0 0 4px rgba(245,158,11,0.18);
        }

        @keyframes status-marquee-roll {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes status-stripe-shine {
          0%, 100% { transform: translateX(-80%); opacity: 0.18; }
          45% { opacity: 0.62; }
          70% { transform: translateX(120%); opacity: 0.12; }
        }

        @keyframes status-live-pulse {
          0% { transform: scale(1); }
          70% { transform: scale(1.18); box-shadow: 0 0 0 10px rgba(34,197,94,0), 0 0 18px rgba(34,197,94,0.65); }
          100% { transform: scale(1); }
        }

        @media (max-width: 640px) {
          .home-status-marquee-section {
            margin-top: -0.4rem;
            margin-bottom: calc(7.25rem + env(safe-area-inset-bottom));
            padding: 0 0.75rem;
          }

          .status-marquee-shell {
            width: 100%;
            border-radius: 1.35rem;
          }

          .status-marquee-track {
            gap: 0.55rem;
            padding: 0.62rem 0;
            animation-duration: 22s;
          }

          .status-marquee-item {
            padding: 0.5rem 0.76rem;
            font-size: 0.64rem;
            letter-spacing: 0.065em;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .status-marquee-track,
          .status-marquee-shell::before,
          .status-marquee-dot.is-live {
            animation: none !important;
          }
        }

        /* --- Professional Schedule Page --- */
        .schedule-page {
          color: #0f172a;
        }

        .schedule-hero,
        .schedule-panel {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.76);
          background:
            radial-gradient(circle at 12% 10%, rgba(255,255,255,0.9), transparent 25%),
            linear-gradient(135deg, rgba(255,255,255,0.78), rgba(236,253,245,0.46) 46%, rgba(239,246,255,0.5));
          backdrop-filter: blur(26px) saturate(1.35);
          -webkit-backdrop-filter: blur(26px) saturate(1.35);
          box-shadow:
            inset 0 1px 2px rgba(255,255,255,0.92),
            0 24px 70px rgba(15,23,42,0.08);
        }

        .schedule-hero::before {
          content: "";
          position: absolute;
          width: 22rem;
          height: 22rem;
          right: -7rem;
          top: -8rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(34,197,94,0.28), transparent 66%);
          filter: blur(8px);
          animation: schedule-orb-drift 8s ease-in-out infinite;
        }

        .schedule-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(115deg, transparent 0 34%, rgba(255,255,255,0.55) 48%, transparent 62%),
            repeating-linear-gradient(90deg, rgba(15,23,42,0.035) 0 1px, transparent 1px 86px);
          opacity: 0.5;
          pointer-events: none;
        }

        .schedule-kicker {
          color: #064e3b;
          border: 1px solid rgba(16,185,129,0.22);
          background: rgba(255,255,255,0.58);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.78);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .schedule-kicker strong {
          color: #0f172a;
          font-weight: 900;
        }

        .schedule-live-dot {
          width: 0.55rem;
          height: 0.55rem;
          border-radius: 999px;
          background: #f59e0b;
          box-shadow: 0 0 0 0.32rem rgba(245,158,11,0.14);
        }

        .schedule-live-dot.is-online {
          background: #22c55e;
          box-shadow: 0 0 0 0.32rem rgba(34,197,94,0.16), 0 0 18px rgba(34,197,94,0.5);
          animation: schedule-live-pulse 1.6s ease-out infinite;
        }

        .schedule-primary-action,
        .schedule-secondary-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          min-height: 3rem;
          padding: 0 1.15rem;
          border-radius: 999px;
          font-weight: 800;
          font-size: 0.9rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }

        .schedule-primary-action {
          color: #fff;
          background: #0f172a;
          box-shadow: 0 16px 34px rgba(15,23,42,0.18);
        }

        .schedule-secondary-action {
          color: #047857;
          background: rgba(255,255,255,0.62);
          border: 1px solid rgba(16,185,129,0.2);
        }

        .schedule-primary-action:hover,
        .schedule-secondary-action:hover {
          transform: translateY(-2px);
        }

        .schedule-selected-card {
          position: relative;
          z-index: 1;
          border-radius: 2rem;
          padding: clamp(1.2rem, 3vw, 2rem);
          border: 1px solid rgba(255,255,255,0.76);
          background:
            radial-gradient(circle at 88% 12%, color-mix(in srgb, var(--schedule-accent, #10b981) 20%, transparent), transparent 28%),
            rgba(255,255,255,0.52);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.82), 0 18px 40px rgba(15,23,42,0.06);
        }

        .schedule-selected-icon,
        .schedule-type-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: var(--schedule-accent, #10b981);
          box-shadow: 0 16px 28px color-mix(in srgb, var(--schedule-accent, #10b981) 26%, transparent);
        }

        .schedule-selected-icon {
          width: 3.25rem;
          height: 3.25rem;
          border-radius: 1.1rem;
        }

        .schedule-mini-stat {
          min-height: 6.3rem;
          border-radius: 1.35rem;
          padding: 1rem;
          background: rgba(255,255,255,0.56);
          border: 1px solid rgba(255,255,255,0.7);
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .schedule-mini-stat svg {
          color: #10b981;
        }

        .schedule-mini-stat span {
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .schedule-mini-stat small,
        .schedule-type-card small,
        .schedule-window-row small {
          color: #64748b;
          font-weight: 400;
          line-height: 1.35;
        }

        .schedule-type-card {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.9rem;
          padding: 0.95rem;
          border-radius: 1.35rem;
          border: 1px solid rgba(255,255,255,0.72);
          background: rgba(255,255,255,0.45);
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }

        .schedule-type-card.is-selected {
          background:
            radial-gradient(circle at 90% 12%, color-mix(in srgb, var(--schedule-accent, #10b981) 18%, transparent), transparent 30%),
            rgba(255,255,255,0.78);
          border-color: color-mix(in srgb, var(--schedule-accent, #10b981) 38%, white);
          transform: translateX(4px);
        }

        .schedule-type-icon {
          width: 2.75rem;
          height: 2.75rem;
          flex: 0 0 auto;
          border-radius: 1rem;
        }

        .schedule-type-card strong {
          display: block;
          color: #0f172a;
          font-size: 0.98rem;
          margin-bottom: 0.18rem;
        }

        .schedule-type-card small {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-size: 0.78rem;
        }

        .schedule-type-arrow {
          color: #94a3b8;
          transition: transform 0.25s ease;
        }

        .schedule-type-card.is-selected .schedule-type-arrow,
        .schedule-type-card:hover .schedule-type-arrow {
          transform: translateX(3px);
          color: #0f172a;
        }

        .schedule-time-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          width: fit-content;
          border-radius: 999px;
          padding: 0.55rem 0.85rem;
          color: #1e40af;
          background: rgba(219,234,254,0.58);
          border: 1px solid rgba(147,197,253,0.44);
          font-weight: 800;
          font-size: 0.78rem;
        }

        .schedule-window-list {
          display: grid;
          gap: 0.7rem;
        }

        .schedule-booking-panel {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .schedule-calendar-strip {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 0.55rem;
        }

        .schedule-date-card {
          min-height: 5rem;
          border-radius: 1.2rem;
          border: 1px solid rgba(255,255,255,0.68);
          background:
            radial-gradient(circle at 20% 18%, rgba(255,255,255,0.78), transparent 36%),
            rgba(255,255,255,0.44);
          color: #334155;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          transition: transform 0.22s ease, background 0.22s ease, border-color 0.22s ease, color 0.22s ease;
        }

        .schedule-date-card span {
          font-size: 0.68rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #64748b;
        }

        .schedule-date-card strong {
          font-size: 0.9rem;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .schedule-date-card.is-selected {
          color: #052e16;
          border-color: rgba(34,197,94,0.45);
          background:
            radial-gradient(circle at 28% 20%, rgba(255,255,255,0.92), transparent 32%),
            linear-gradient(135deg, rgba(187,247,208,0.86), rgba(134,239,172,0.52));
          box-shadow: 0 16px 30px rgba(34,197,94,0.14);
          transform: translateY(-2px);
        }

        .schedule-date-card.is-selected span {
          color: #047857;
        }

        .schedule-slot-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 0.65rem;
        }

        .schedule-slot-card {
          min-height: 7.3rem;
          border-radius: 1.25rem;
          padding: 0.85rem;
          text-align: left;
          border: 1px solid rgba(255,255,255,0.68);
          background: rgba(255,255,255,0.46);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.4rem;
          transition: transform 0.22s ease, background 0.22s ease, border-color 0.22s ease;
        }

        .schedule-slot-card span {
          color: #0f172a;
          font-size: 0.98rem;
          font-weight: 950;
          letter-spacing: -0.04em;
        }

        .schedule-slot-card strong {
          color: #047857;
          font-size: 0.72rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .schedule-slot-card small {
          color: #64748b;
          font-size: 0.72rem;
          line-height: 1.25;
        }

        .schedule-slot-card.is-selected {
          border-color: rgba(59,130,246,0.42);
          background:
            radial-gradient(circle at 90% 10%, rgba(191,219,254,0.78), transparent 42%),
            rgba(255,255,255,0.82);
          box-shadow: 0 16px 30px rgba(59,130,246,0.13);
          transform: translateY(-2px);
        }

        .schedule-appointment-summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          border-radius: 1.45rem;
          padding: 1rem;
          color: #f8fafc;
          background:
            radial-gradient(circle at 12% 18%, rgba(34,197,94,0.38), transparent 35%),
            linear-gradient(135deg, #0f172a, #052e16);
          box-shadow: 0 20px 45px rgba(15,23,42,0.16);
        }

        .schedule-appointment-summary span,
        .schedule-appointment-summary small {
          display: block;
        }

        .schedule-appointment-summary span {
          color: #86efac;
          font-size: 0.66rem;
          font-weight: 950;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }

        .schedule-appointment-summary strong {
          display: block;
          font-size: 1rem;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .schedule-appointment-summary small {
          color: rgba(248,250,252,0.68);
          margin-top: 0.2rem;
          line-height: 1.35;
        }

        .schedule-appointment-summary a,
        .schedule-appointment-summary button {
          width: 3rem;
          height: 3rem;
          border-radius: 999px;
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #052e16;
          background: #bbf7d0;
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.7);
          border: 0;
        }

        .schedule-appointment-summary .schedule-final-cart-button {
          width: auto;
          min-width: min(100%, 14.5rem);
          height: 3rem;
          padding: 0 1.15rem;
          gap: 0.45rem;
          color: #052e16;
          background: #bbf7d0;
          border: 1px solid rgba(187,247,208,0.7);
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          white-space: nowrap;
          transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
        }

        .schedule-appointment-summary .schedule-final-cart-button:hover {
          transform: translateY(-0.08rem);
          background: #dcfce7;
          box-shadow: 0 12px 26px rgba(34,197,94,0.18), inset 0 1px 1px rgba(255,255,255,0.85);
        }

        .schedule-window-row {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 0.9rem;
          border-radius: 1.2rem;
          padding: 0.82rem 0.9rem;
          background: rgba(255,255,255,0.48);
          border: 1px solid rgba(255,255,255,0.64);
        }

        .schedule-day {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 1rem;
          color: #064e3b;
          background: rgba(209,250,229,0.72);
          font-weight: 900;
        }

        .schedule-window-row strong {
          display: block;
          color: #0f172a;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .schedule-window-row small {
          display: block;
          margin-top: 0.15rem;
          font-size: 0.78rem;
        }

        .schedule-row-index {
          color: rgba(15,23,42,0.22);
          font-weight: 900;
          font-size: 0.82rem;
        }

        .schedule-prep-card,
        .schedule-contact-card {
          min-height: 18rem;
        }

        .schedule-prep-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
          margin-top: 1.4rem;
        }

        .schedule-prep-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          border-radius: 1rem;
          padding: 0.82rem 0.9rem;
          color: #334155;
          background: rgba(255,255,255,0.48);
          border: 1px solid rgba(255,255,255,0.66);
          font-size: 0.88rem;
          font-weight: 650;
        }

        .schedule-prep-item svg {
          flex: 0 0 auto;
          color: #10b981;
        }

        .schedule-contact-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .schedule-contact-orb {
          width: 5rem;
          height: 5rem;
          border-radius: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background:
            radial-gradient(circle at 30% 18%, rgba(255,255,255,0.34), transparent 30%),
            linear-gradient(135deg, #0f172a, #064e3b);
          box-shadow: 0 18px 38px rgba(15,23,42,0.18);
        }

        .schedule-contact-links {
          display: grid;
          gap: 0.55rem;
          margin-top: 1.5rem;
        }

        .schedule-contact-links a {
          color: #0f172a;
          background: rgba(255,255,255,0.54);
          border: 1px solid rgba(255,255,255,0.66);
          border-radius: 999px;
          padding: 0.72rem 0.9rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          overflow-wrap: anywhere;
        }

        .schedule-nav-spacer {
          height: 0.5rem;
        }

        @keyframes schedule-orb-drift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-18px, 20px, 0) scale(1.08); }
        }

        @keyframes schedule-live-pulse {
          0% { transform: scale(1); }
          70% { transform: scale(1.18); box-shadow: 0 0 0 0.75rem rgba(34,197,94,0), 0 0 18px rgba(34,197,94,0.5); }
          100% { transform: scale(1); }
        }

        @media (max-width: 640px) {
          .schedule-page {
            padding-bottom: calc(8rem + env(safe-area-inset-bottom)) !important;
          }

          .schedule-hero {
            border-radius: 1.55rem;
          }

          .schedule-kicker {
            flex-wrap: wrap;
            letter-spacing: 0.04em;
            font-size: 0.65rem;
          }

          .schedule-action-row a {
            width: 100%;
          }

          .schedule-selected-card,
          .schedule-panel {
            border-radius: 1.45rem;
          }

          .schedule-booking-panel {
            order: 1;
          }

          .schedule-type-panel {
            order: 2;
          }

          .schedule-prep-list {
            grid-template-columns: 1fr;
          }

          .schedule-calendar-strip {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .schedule-date-card {
            min-height: 4.35rem;
            border-radius: 1rem;
          }

          .schedule-slot-grid {
            grid-template-columns: 1fr;
          }

          .schedule-slot-card {
            min-height: auto;
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
            column-gap: 0.8rem;
          }

          .schedule-slot-card small {
            grid-column: 1 / -1;
          }

          .schedule-appointment-summary {
            align-items: flex-start;
            flex-direction: column;
          }

          .schedule-appointment-summary .schedule-final-cart-button {
            width: 100%;
            justify-content: center;
          }

          .schedule-window-row {
            grid-template-columns: auto 1fr;
          }

          .schedule-row-index {
            display: none;
          }
        }

        /* --- Schedule Dashboard v2 --- */
        .schedule-dashboard-v2 {
          margin-top: 1.25rem;
          margin-bottom: 2.5rem;
          padding: clamp(0.85rem, 2.2vw, 1.6rem) !important;
          color: #17171b;
          border: 1px solid rgba(255, 255, 255, 0.92);
          border-radius: 2.25rem;
          background:
            radial-gradient(circle at 14% 3%, rgba(178, 133, 255, 0.18), transparent 25rem),
            linear-gradient(145deg, #eef0f4 0%, #e8eaef 100%);
          box-shadow:
            0 30px 80px rgba(24, 24, 36, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.96);
          isolation: isolate;
        }

        .schedule-dashboard-v2 .schedule-hero,
        .schedule-dashboard-v2 .schedule-panel {
          border: 1px solid rgba(23, 23, 27, 0.055);
          background: rgba(250, 250, 251, 0.96);
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          box-shadow:
            0 15px 38px rgba(31, 31, 44, 0.075),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
        }

        .schedule-dashboard-v2 .schedule-hero {
          border-radius: 1.85rem !important;
          background:
            radial-gradient(circle at 15% 12%, rgba(170, 112, 255, 0.32), transparent 31%),
            radial-gradient(circle at 45% 5%, rgba(237, 209, 255, 0.72), transparent 30%),
            linear-gradient(145deg, #f7f5fb 0%, #f4f4f7 54%, #fafafb 100%);
        }

        .schedule-dashboard-v2 .schedule-hero::before {
          width: 18rem;
          height: 18rem;
          right: auto;
          left: -6rem;
          top: -8rem;
          background: radial-gradient(circle, rgba(159, 89, 255, 0.2), transparent 68%);
          filter: none;
          animation: none;
        }

        .schedule-dashboard-v2 .schedule-hero::after {
          inset: auto 1.5rem 1.3rem auto;
          width: 4.5rem;
          height: 4.5rem;
          border-radius: 50%;
          opacity: 0.34;
          background:
            radial-gradient(circle at center, transparent 41%, #9b63ed 42% 48%, transparent 49%),
            conic-gradient(from 25deg, #9b63ed 0 20%, transparent 20% 33%, #efb14a 33% 52%, transparent 52% 67%, #43bf78 67% 84%, transparent 84%);
          pointer-events: none;
        }

        .schedule-dashboard-v2 .schedule-kicker {
          color: #5b2a9d;
          border-color: rgba(130, 74, 210, 0.16);
          background: rgba(255, 255, 255, 0.82);
          box-shadow: 0 7px 20px rgba(68, 38, 110, 0.08);
        }

        .schedule-dashboard-v2 .text-emerald-600,
        .schedule-dashboard-v2 .text-blue-600,
        .schedule-dashboard-v2 .text-pink-600 {
          color: #8250c8 !important;
        }

        .schedule-dashboard-v2 .schedule-primary-action,
        .schedule-dashboard-v2 .schedule-secondary-action {
          min-height: 3.15rem;
          border-radius: 1rem;
          font-weight: 700;
        }

        .schedule-dashboard-v2 .schedule-primary-action {
          background: #17171b;
          box-shadow: 0 13px 28px rgba(23, 23, 27, 0.16);
        }

        .schedule-dashboard-v2 .schedule-secondary-action {
          color: #642bad;
          border-color: rgba(137, 78, 215, 0.16);
          background: rgba(255, 255, 255, 0.8);
        }

        .schedule-dashboard-v2 .schedule-selected-card {
          border-radius: 1.65rem;
          border-color: rgba(23, 23, 27, 0.055);
          background: rgba(255, 255, 255, 0.88);
          box-shadow: 0 16px 35px rgba(39, 29, 56, 0.075);
        }

        .schedule-dashboard-v2 .schedule-selected-icon {
          color: #fff;
          background: linear-gradient(145deg, #a86ff4, #7341c4);
          box-shadow: 0 11px 24px rgba(118, 64, 195, 0.24);
        }

        .schedule-progress-row {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          padding: 0.9rem;
          border: 1px solid rgba(112, 63, 177, 0.1);
          border-radius: 1.25rem;
          background: linear-gradient(135deg, rgba(250, 247, 255, 0.96), rgba(255, 255, 255, 0.94));
        }

        .schedule-progress-ring {
          position: relative;
          width: 5.25rem;
          height: 5.25rem;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 50%;
          background: conic-gradient(#17171b 0 78%, #a66bec 78% 92%, #e3e3e7 92% 100%);
          transform: rotate(-32deg);
        }

        .schedule-progress-ring::before {
          content: "";
          position: absolute;
          inset: 0.52rem;
          border-radius: inherit;
          background: #fff;
        }

        .schedule-progress-ring > div {
          position: relative;
          z-index: 1;
          display: grid;
          text-align: center;
          transform: rotate(32deg);
        }

        .schedule-progress-ring strong {
          color: #17171b;
          font-size: 1.05rem;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .schedule-progress-ring small,
        .schedule-progress-copy small {
          color: #8a8a94;
          font-size: 0.67rem;
        }

        .schedule-progress-copy {
          min-width: 0;
        }

        .schedule-progress-copy span,
        .schedule-progress-copy strong,
        .schedule-progress-copy small {
          display: block;
        }

        .schedule-progress-copy span {
          margin-bottom: 0.25rem;
          color: #8250c8;
          font-size: 0.67rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .schedule-progress-copy strong {
          color: #17171b;
          font-size: 0.94rem;
          line-height: 1.3;
        }

        .schedule-progress-copy small {
          margin-top: 0.22rem;
          line-height: 1.35;
        }

        .schedule-dashboard-v2 .schedule-mini-stat {
          min-height: 5.45rem;
          border-radius: 1.1rem;
          border-color: rgba(23, 23, 27, 0.055);
          background: #f7f7f9;
        }

        .schedule-dashboard-v2 .schedule-mini-stat svg,
        .schedule-dashboard-v2 .schedule-prep-item svg {
          color: #8d55d7;
        }

        .schedule-dashboard-v2 .schedule-panel {
          overflow: hidden;
          border-radius: 1.65rem;
        }

        .schedule-dashboard-v2 .schedule-type-card {
          border-color: rgba(23, 23, 27, 0.06);
          border-radius: 1.1rem;
          background: #f5f5f7;
          box-shadow: none;
        }

        .schedule-dashboard-v2 .schedule-type-card.is-selected {
          border-color: rgba(136, 77, 211, 0.32);
          background: linear-gradient(135deg, #f6efff, #fff);
          box-shadow: 0 10px 24px rgba(126, 73, 190, 0.11);
          transform: translateX(3px);
        }

        .schedule-dashboard-v2 .schedule-type-icon {
          color: #fff;
          background: linear-gradient(145deg, #a96ef0, #7543bd);
          box-shadow: 0 10px 20px rgba(117, 67, 189, 0.2);
        }

        .schedule-dashboard-v2 .schedule-time-pill {
          color: #6230a3;
          border-color: rgba(126, 75, 194, 0.14);
          background: #f4edfd;
        }

        .schedule-dashboard-v2 .schedule-calendar-strip {
          gap: 0.48rem;
        }

        .schedule-dashboard-v2 .schedule-date-card {
          min-height: 4.8rem;
          border-radius: 1rem;
          border-color: rgba(23, 23, 27, 0.055);
          background: #f4f4f6;
        }

        .schedule-dashboard-v2 .schedule-date-card.is-selected {
          color: #fff;
          border-color: #925ad8;
          background: linear-gradient(145deg, #ac73f2, #7b46c5);
          box-shadow: 0 12px 25px rgba(124, 70, 197, 0.22);
        }

        .schedule-dashboard-v2 .schedule-date-card.is-selected span {
          color: rgba(255, 255, 255, 0.78);
        }

        .schedule-dashboard-v2 .schedule-slot-grid {
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .schedule-dashboard-v2 .schedule-slot-card {
          min-height: 6.55rem;
          border-radius: 1rem;
          border-color: rgba(23, 23, 27, 0.055);
          background: #f4f4f6;
        }

        .schedule-dashboard-v2 .schedule-slot-card strong {
          color: #7b46bf;
        }

        .schedule-dashboard-v2 .schedule-slot-card.is-selected {
          border-color: rgba(129, 73, 200, 0.35);
          background: linear-gradient(145deg, #f6efff, #fff);
          box-shadow: 0 11px 24px rgba(126, 72, 195, 0.11);
        }

        .schedule-dashboard-v2 .schedule-appointment-summary {
          color: #fff;
          border-radius: 1.25rem;
          background: #18171c;
          box-shadow: 0 14px 30px rgba(24, 23, 28, 0.16);
        }

        .schedule-dashboard-v2 .schedule-appointment-summary span {
          color: #cda8ff;
        }

        .schedule-dashboard-v2 .schedule-appointment-summary .schedule-final-cart-button {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.18);
          background: linear-gradient(145deg, #a96cf0, #7742bc);
        }

        .schedule-dashboard-v2 .schedule-prep-card,
        .schedule-dashboard-v2 .schedule-contact-card {
          min-height: 15rem;
        }

        .schedule-dashboard-v2 .schedule-prep-item,
        .schedule-dashboard-v2 .schedule-contact-links a {
          border-color: rgba(23, 23, 27, 0.055);
          background: #f4f4f6;
        }

        .schedule-dashboard-v2 .schedule-contact-orb {
          width: 4.4rem;
          height: 4.4rem;
          border-radius: 1.3rem;
          background: linear-gradient(145deg, #a76ced, #7542ba);
          box-shadow: 0 13px 28px rgba(117, 66, 186, 0.22);
        }

        .schedule-dashboard-v2 .schedule-hero,
        .schedule-dashboard-v2 .schedule-panel {
          animation: schedule-dashboard-arrive 0.58s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .schedule-dashboard-v2 .schedule-type-panel { animation-delay: 0.08s; }
        .schedule-dashboard-v2 .schedule-booking-panel { animation-delay: 0.13s; }
        .schedule-dashboard-v2 .schedule-prep-card { animation-delay: 0.18s; }
        .schedule-dashboard-v2 .schedule-contact-card { animation-delay: 0.23s; }

        @keyframes schedule-dashboard-arrive {
          from { opacity: 0; transform: translateY(18px) scale(0.99); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 640px) {
          .schedule-dashboard-v2 {
            width: calc(100% - 0.9rem);
            margin: 0.75rem auto 1.5rem;
            padding: 0.65rem !important;
            border-radius: 1.75rem;
          }

          .schedule-dashboard-v2 .schedule-hero {
            padding: 1.1rem !important;
            border-radius: 1.35rem !important;
          }

          .schedule-dashboard-v2 .schedule-hero-grid {
            gap: 1rem;
          }

          .schedule-dashboard-v2 .schedule-hero h1 {
            font-size: clamp(2.65rem, 13vw, 3.6rem);
          }

          .schedule-dashboard-v2 .schedule-kicker {
            margin-bottom: 1.2rem;
          }

          .schedule-dashboard-v2 .schedule-selected-card {
            padding: 1rem;
            border-radius: 1.25rem;
          }

          .schedule-progress-ring {
            width: 4.6rem;
            height: 4.6rem;
          }

          .schedule-progress-ring::before {
            inset: 0.46rem;
          }

          .schedule-dashboard-v2 .schedule-panel {
            padding: 1rem !important;
            border-radius: 1.3rem;
          }

          .schedule-dashboard-v2 .schedule-calendar-strip {
            display: flex;
            width: 100%;
            gap: 0.5rem;
            overflow-x: auto;
            padding: 0.1rem 0 0.45rem;
            scrollbar-width: none;
            scroll-snap-type: x proximity;
          }

          .schedule-dashboard-v2 .schedule-calendar-strip::-webkit-scrollbar {
            display: none;
          }

          .schedule-dashboard-v2 .schedule-date-card {
            width: 3.5rem;
            min-width: 3.5rem;
            min-height: 4.45rem;
            scroll-snap-align: start;
          }

          .schedule-dashboard-v2 .schedule-slot-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .schedule-dashboard-v2 .schedule-slot-card {
            min-height: 6.4rem;
            display: flex;
          }

          .schedule-dashboard-v2 .schedule-slot-card small {
            grid-column: auto;
          }

          .schedule-dashboard-v2 .schedule-appointment-summary {
            padding: 1rem;
          }

          .schedule-dashboard-v2 .schedule-prep-card,
          .schedule-dashboard-v2 .schedule-contact-card {
            min-height: auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .schedule-dashboard-v2 .schedule-hero,
          .schedule-dashboard-v2 .schedule-panel {
            animation: none !important;
          }
        }

        /* --- Launch Cloud Page --- */
        .launch-page {
          color: #0b0f16;
        }

        .launch-page::before {
          content: "";
          position: absolute;
          inset: -5rem -10vw auto;
          height: 36rem;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(circle at 14% 16%, rgba(16,185,129,0.18), transparent 28%),
            radial-gradient(circle at 84% 8%, rgba(32,80,227,0.14), transparent 26%),
            radial-gradient(circle at 58% 24%, rgba(245,158,11,0.12), transparent 24%),
            linear-gradient(180deg, rgba(255,255,255,0.9), rgba(248,250,252,0));
          filter: blur(34px);
          animation: launch-page-glow 12s ease-in-out infinite;
        }

        .launch-hero,
        .launch-plan-card,
        .launch-feature-strip,
        .launch-services-panel,
        .launch-workflow,
        .launch-creative-panel,
        .launch-faq-panel {
          position: relative;
          overflow: hidden;
          border-radius: clamp(1.25rem, 3vw, 2rem);
          background:
            linear-gradient(135deg, rgba(255,255,255,0.74), rgba(248,250,252,0.48));
          border: 1px solid rgba(255,255,255,0.86);
          box-shadow:
            0 24px 76px rgba(15,23,42,0.07),
            inset 0 1px 0 rgba(255,255,255,0.95);
          backdrop-filter: blur(28px) saturate(1.08);
          -webkit-backdrop-filter: blur(28px) saturate(1.08);
        }

        .launch-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.7fr);
          gap: clamp(1rem, 3vw, 2rem);
          align-items: stretch;
          padding: clamp(1.25rem, 3.5vw, 2.2rem);
          margin-bottom: 1rem;
        }

        .launch-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 18% 0%, rgba(16,185,129,0.16), transparent 22rem),
            radial-gradient(circle at 82% 14%, rgba(32,80,227,0.13), transparent 20rem),
            radial-gradient(circle at 62% 102%, rgba(245,158,11,0.13), transparent 18rem);
          pointer-events: none;
          animation: launch-hero-color-drift 10s ease-in-out infinite;
        }

        .launch-hero::after {
          content: "";
          position: absolute;
          inset: -45%;
          background: conic-gradient(from 120deg, transparent, rgba(255,255,255,0.55), transparent, rgba(167,243,208,0.28), transparent);
          opacity: 0.34;
          pointer-events: none;
          animation: launch-glass-spin 18s linear infinite;
        }

        .launch-hero > * {
          position: relative;
          z-index: 1;
        }

        .launch-kicker,
        .launch-section-heading > span,
        .launch-plan-head > span {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: rgba(15,23,42,0.48);
          font-size: 0.68rem;
          line-height: 1;
          font-weight: 820;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .launch-hero-copy h1 {
          max-width: 46rem;
          margin-top: 0.9rem;
          color: #0b0f16;
          font-size: clamp(2.35rem, 6vw, 5rem);
          line-height: 0.92;
          font-weight: 650;
          letter-spacing: -0.07em;
        }

        .launch-hero-copy p,
        .launch-plan-card p,
        .launch-service-card p,
        .launch-timeline p {
          color: rgba(15,23,42,0.58);
          font-size: 0.96rem;
          line-height: 1.55;
          font-weight: 430;
        }

        .launch-hero-copy p {
          max-width: 38rem;
          margin-top: 1.05rem;
        }

        .launch-hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.4rem;
        }

        .launch-hero-actions button,
        .launch-hero-actions a {
          min-height: 2.75rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          border-radius: 999px;
          padding: 0 1rem;
          font-size: 0.86rem;
          font-weight: 760;
        }

        .launch-hero-actions button {
          color: #fff;
          background: #0b0f16;
          box-shadow: 0 16px 38px rgba(15,23,42,0.12);
        }

        .launch-hero-actions a {
          color: rgba(15,23,42,0.68);
          background: rgba(255,255,255,0.54);
          border: 1px solid rgba(255,255,255,0.78);
        }

        .launch-status-panel {
          display: grid;
          align-content: space-between;
          gap: 0.9rem;
          min-height: 25.5rem;
          padding: 1rem;
          border-radius: 1.35rem;
          background:
            radial-gradient(circle at 22% 8%, rgba(167,243,208,0.28), transparent 30%),
            radial-gradient(circle at 86% 24%, rgba(96,165,250,0.22), transparent 28%),
            radial-gradient(circle at 50% 100%, rgba(245,158,11,0.16), transparent 34%),
            linear-gradient(135deg, rgba(15,23,42,0.96), rgba(17,24,39,0.92) 55%, rgba(6,78,59,0.88));
          color: #fff;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.16);
        }

        .launch-status-top {
          display: flex;
          align-items: center;
          gap: 0.48rem;
          color: rgba(255,255,255,0.76);
          font-size: 0.78rem;
          font-weight: 760;
        }

        .launch-status-top span {
          width: 0.62rem;
          height: 0.62rem;
          border-radius: 999px;
          background: #22c55e;
          box-shadow: 0 0 18px rgba(34,197,94,0.75);
        }

        .launch-status-top span.is-offline {
          background: #94a3b8;
          box-shadow: 0 0 14px rgba(148,163,184,0.5);
        }

        .launch-status-top small {
          margin-left: auto;
          color: rgba(255,255,255,0.5);
        }

        .launch-system-visual {
          position: relative;
          min-height: 13.5rem;
          border-radius: 1.18rem;
          background:
            radial-gradient(circle at 50% 42%, rgba(255,255,255,0.16), transparent 42%),
            linear-gradient(135deg, rgba(255,255,255,0.11), rgba(255,255,255,0.035));
          border: 1px solid rgba(255,255,255,0.14);
          overflow: hidden;
        }

        .launch-system-visual::before {
          content: "";
          position: absolute;
          inset: 1rem;
          border-radius: 999px;
          border: 1px dashed rgba(255,255,255,0.18);
          animation: launch-orbit-turn 16s linear infinite;
        }

        .launch-visual-orbit {
          position: absolute;
          inset: 2.2rem;
          border-radius: 999px;
          background: conic-gradient(from 0deg, rgba(167,243,208,0), rgba(167,243,208,0.46), rgba(96,165,250,0.28), rgba(245,158,11,0.3), rgba(167,243,208,0));
          filter: blur(10px);
          opacity: 0.72;
          animation: launch-orbit-turn 10s linear infinite;
        }

        .launch-visual-core {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 7.2rem;
          height: 7.2rem;
          display: grid;
          place-items: center;
          gap: 0.18rem;
          border-radius: 2rem;
          color: #04110d;
          background:
            radial-gradient(circle at 26% 18%, rgba(255,255,255,0.96), transparent 30%),
            linear-gradient(135deg, #bbf7d0, #bfdbfe 58%, #fde68a);
          box-shadow:
            0 24px 60px rgba(0,0,0,0.24),
            inset 0 1px 0 rgba(255,255,255,0.86);
          transform: translate(-50%, -50%);
          animation: launch-core-float 5.8s ease-in-out infinite;
        }

        .launch-visual-core span {
          color: rgba(4,17,13,0.68);
          font-size: 0.62rem;
          font-weight: 860;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .launch-visual-node {
          position: absolute;
          min-width: 5.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          padding: 0.48rem 0.6rem;
          border-radius: 999px;
          color: rgba(255,255,255,0.86);
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow: 0 14px 34px rgba(0,0,0,0.14);
          backdrop-filter: blur(14px) saturate(1.2);
          -webkit-backdrop-filter: blur(14px) saturate(1.2);
          animation: launch-node-float 6s ease-in-out infinite;
        }

        .launch-visual-node svg {
          color: #a7f3d0;
        }

        .launch-visual-node span {
          font-size: 0.67rem;
          font-weight: 820;
        }

        .launch-visual-node.is-domain {
          left: 0.85rem;
          top: 1rem;
        }

        .launch-visual-node.is-backend {
          right: 0.85rem;
          top: 1.35rem;
          animation-delay: -1.2s;
        }

        .launch-visual-node.is-motion {
          left: 0.9rem;
          bottom: 1rem;
          animation-delay: -2.4s;
        }

        .launch-visual-node.is-ads {
          right: 0.9rem;
          bottom: 1rem;
          animation-delay: -3.2s;
        }

        .launch-system-copy {
          padding: 0.92rem;
          border-radius: 1.05rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.13);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.12);
        }

        .launch-system-copy > span,
        .launch-mini-grid span {
          display: block;
          color: rgba(255,255,255,0.56);
          font-size: 0.7rem;
          font-weight: 760;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .launch-system-copy strong {
          display: block;
          margin-top: 0.28rem;
          color: #fff;
          font-size: 0.95rem;
          line-height: 1.35;
          font-weight: 650;
          letter-spacing: -0.025em;
        }

        .launch-system-copy div {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: 0.75rem;
        }

        .launch-system-copy small {
          border-radius: 999px;
          padding: 0.34rem 0.5rem;
          color: rgba(255,255,255,0.74);
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.11);
          font-size: 0.66rem;
          font-weight: 760;
        }

        .launch-status-queue {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.48rem;
        }

        .launch-status-queue div {
          padding: 0.62rem;
          border-radius: 0.78rem;
          background: rgba(255,249,239,0.075);
          border: 1px solid rgba(255,249,239,0.1);
        }

        .launch-status-queue strong {
          display: block;
          margin-top: 0.16rem;
          color: rgba(255,249,239,0.82);
          font-size: 0.78rem;
          line-height: 1.15;
          font-weight: 520;
        }

        .launch-mini-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.65rem;
        }

        .launch-mini-grid div {
          padding: 0.78rem;
          border-radius: 0.95rem;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .launch-mini-grid strong {
          display: block;
          color: #fff;
          font-size: 0.92rem;
          font-weight: 780;
        }

        .launch-feature-strip {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem;
          padding: 0.9rem;
          margin-bottom: 1rem;
        }

        .launch-feature-strip article {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 0.75rem;
          padding: 0.85rem;
          border-radius: 1rem;
          background: rgba(255,255,255,0.48);
          border: 1px solid rgba(255,255,255,0.72);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.82);
        }

        .launch-feature-strip svg {
          color: #0f766e;
        }

        .launch-feature-strip h3 {
          color: #0b0f16;
          font-size: 0.94rem;
          line-height: 1.12;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .launch-feature-strip p {
          margin-top: 0.28rem;
          color: rgba(15,23,42,0.54);
          font-size: 0.76rem;
          line-height: 1.4;
        }

        .launch-plans-heading {
          margin: 1.35rem 0 0.9rem;
        }

        .launch-mobile-swipe-hint {
          display: none;
        }

        .launch-plan-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.9rem;
          margin-bottom: 1rem;
        }

        .launch-plan-card {
          padding: 1.05rem;
          display: flex;
          flex-direction: column;
        }

        .launch-plan-card::before {
          content: "";
          position: absolute;
          width: 11rem;
          height: 11rem;
          right: -4.5rem;
          top: -5rem;
          border-radius: 999px;
          background:
            radial-gradient(circle, rgba(16,185,129,0.18), transparent 64%);
          filter: blur(4px);
          pointer-events: none;
          animation: launch-card-glow 7s ease-in-out infinite;
        }

        .launch-plan-card:nth-child(2)::before {
          background: radial-gradient(circle, rgba(32,80,227,0.16), transparent 64%);
          animation-delay: -1.6s;
        }

        .launch-plan-card:nth-child(3)::before {
          background: radial-gradient(circle, rgba(245,158,11,0.18), transparent 64%);
          animation-delay: -3s;
        }

        .launch-plan-card > * {
          position: relative;
          z-index: 1;
        }

        .launch-plan-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .launch-plan-icon {
          width: 3rem;
          height: 3rem;
          display: grid;
          place-items: center;
          border-radius: 0.95rem;
          color: #0b0f16;
          background: linear-gradient(145deg, rgba(255,255,255,0.76), rgba(226,232,240,0.48));
          border: 1px solid rgba(255,255,255,0.78);
          box-shadow: 0 14px 30px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.92);
        }

        .launch-plan-card h2,
        .launch-section-heading h2,
        .launch-service-card h3,
        .launch-timeline h3,
        .launch-creative-card h3,
        .launch-faq-list h3 {
          color: #0b0f16;
          font-weight: 540;
          letter-spacing: -0.03em;
        }

        .launch-plan-badge {
          width: fit-content;
          margin-bottom: 0.65rem;
          border-radius: 999px;
          padding: 0.38rem 0.62rem;
          color: #0f766e;
          background: rgba(236,253,245,0.68);
          border: 1px solid rgba(167,243,208,0.62);
          font-size: 0.68rem;
          font-weight: 560;
        }

        .launch-plan-card h2 {
          font-size: clamp(1.35rem, 2.6vw, 1.85rem);
          line-height: 1.02;
        }

        .launch-plan-card p {
          margin-top: 0.55rem;
          font-size: 0.86rem;
        }

        .launch-price-row {
          display: grid;
          gap: 0.14rem;
          margin-top: 1rem;
          padding: 0.78rem;
          border-radius: 1rem;
          background: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.72);
        }

        .launch-price-row strong {
          color: #0b0f16;
          font-size: clamp(1.65rem, 4vw, 2.45rem);
          line-height: 0.9;
          font-weight: 700;
          letter-spacing: -0.06em;
        }

        .launch-price-row span {
          color: rgba(15,23,42,0.5);
          font-size: 0.74rem;
          font-weight: 650;
        }

        .launch-resource-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.45rem;
          margin-top: 0.85rem;
        }

        .launch-resource-list div {
          min-height: 2.45rem;
          display: flex;
          align-items: center;
          border-radius: 0.8rem;
          padding: 0.45rem 0.55rem;
          color: rgba(15,23,42,0.66);
          background: rgba(255,255,255,0.42);
          border: 1px solid rgba(255,255,255,0.68);
          font-size: 0.7rem;
          line-height: 1.2;
          font-weight: 500;
        }

        .launch-platform-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.42rem;
          margin-top: 0.9rem;
        }

        .launch-platform-row span {
          border-radius: 999px;
          padding: 0.36rem 0.55rem;
          color: rgba(15,23,42,0.62);
          background: rgba(255,255,255,0.52);
          border: 1px solid rgba(255,255,255,0.74);
          font-size: 0.68rem;
          font-weight: 500;
        }

        .launch-plan-card ul {
          display: grid;
          gap: 0.54rem;
          margin-top: 1rem;
        }

        .launch-plan-card li {
          display: flex;
          align-items: center;
          gap: 0.46rem;
          color: rgba(15,23,42,0.66);
          font-size: 0.78rem;
          font-weight: 400;
        }

        .launch-plan-card li svg {
          color: #0f766e;
          flex: 0 0 auto;
        }

        .launch-services-panel,
        .launch-workflow,
        .launch-creative-panel,
        .launch-faq-panel {
          padding: clamp(1.05rem, 2.5vw, 1.45rem);
          margin-bottom: 1rem;
        }

        .launch-section-heading {
          display: grid;
          gap: 0.55rem;
          max-width: 48rem;
          margin-bottom: 1rem;
        }

        .launch-section-heading h2 {
          font-size: clamp(1.65rem, 4vw, 3rem);
          line-height: 0.98;
        }

        .launch-service-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem;
        }

        .launch-creative-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.75rem;
        }

        .launch-creative-card {
          position: relative;
          overflow: hidden;
          padding: 0.95rem;
          border-radius: 1.05rem;
          background:
            linear-gradient(135deg, rgba(15,23,42,0.94), rgba(17,24,39,0.86)),
            radial-gradient(circle at 20% 0%, rgba(16,185,129,0.22), transparent 40%);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.16);
        }

        .launch-creative-card::before {
          content: "";
          position: absolute;
          width: 8rem;
          height: 8rem;
          right: -3.5rem;
          top: -3.6rem;
          border-radius: 999px;
          background: rgba(167,243,208,0.16);
          filter: blur(12px);
          animation: launch-card-glow 6s ease-in-out infinite;
        }

        .launch-creative-card > * {
          position: relative;
          z-index: 1;
        }

        .launch-creative-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.65rem;
          margin-bottom: 1.15rem;
        }

        .launch-creative-top svg {
          color: #a7f3d0;
        }

        .launch-creative-top span {
          color: rgba(255,255,255,0.54);
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .launch-creative-card h3 {
          color: #fff;
          font-size: 1.18rem;
          line-height: 1.04;
        }

        .launch-creative-card p {
          margin-top: 0.55rem;
          color: rgba(255,255,255,0.66);
          font-size: 0.78rem;
          line-height: 1.45;
        }

        .launch-creative-card div:last-child {
          display: flex;
          flex-wrap: wrap;
          gap: 0.38rem;
          margin-top: 0.9rem;
        }

        .launch-creative-card small {
          border-radius: 999px;
          padding: 0.28rem 0.45rem;
          color: rgba(255,255,255,0.72);
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 0.62rem;
          font-weight: 450;
        }

        .launch-service-card {
          padding: 0.95rem;
          border-radius: 1rem;
          background: rgba(255,255,255,0.48);
          border: 1px solid rgba(255,255,255,0.72);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.78);
        }

        .launch-service-card svg {
          color: #0f766e;
          margin-bottom: 0.75rem;
        }

        .launch-service-card h3 {
          font-size: 1rem;
          line-height: 1.12;
        }

        .launch-service-card p {
          margin-top: 0.4rem;
          font-size: 0.8rem;
          line-height: 1.45;
        }

        .launch-timeline {
          display: grid;
          gap: 0.7rem;
        }

        .launch-timeline article {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 0.8rem;
          align-items: start;
          padding: 0.85rem;
          border-radius: 1rem;
          background: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.72);
        }

        .launch-timeline article > span {
          width: 2.4rem;
          height: 2.4rem;
          display: grid;
          place-items: center;
          border-radius: 999px;
          color: #fff;
          background: #0b0f16;
          font-size: 0.72rem;
          font-weight: 820;
        }

        .launch-timeline h3 {
          font-size: 1.08rem;
        }

        .launch-timeline p {
          margin-top: 0.25rem;
          font-size: 0.84rem;
        }

        .launch-faq-list {
          display: grid;
          gap: 0.65rem;
        }

        .launch-faq-list article {
          padding: 0.95rem;
          border-radius: 1rem;
          background: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.72);
        }

        .launch-faq-list h3 {
          font-size: 1rem;
        }

        .launch-faq-list p {
          margin-top: 0.36rem;
          color: rgba(15,23,42,0.56);
          font-size: 0.84rem;
          line-height: 1.5;
        }

        .launch-page {
          color: #17130f;
          border-radius: 2rem;
          display: flex;
          flex-direction: column;
          gap: clamp(1.65rem, 4vw, 3.2rem);
        }

        .launch-page::before {
          background:
            radial-gradient(circle at 16% 16%, rgba(255,108,55,0.18), transparent 26%),
            radial-gradient(circle at 82% 12%, rgba(52,211,153,0.18), transparent 25%),
            radial-gradient(circle at 54% 28%, rgba(251,191,36,0.16), transparent 24%),
            linear-gradient(180deg, rgba(255,247,237,0.95), rgba(255,255,255,0));
        }

        .launch-hero,
        .launch-feature-strip,
        .launch-plan-card,
        .launch-services-panel,
        .launch-workflow,
        .launch-creative-panel,
        .launch-faq-panel {
          background:
            linear-gradient(135deg, rgba(255,250,241,0.82), rgba(255,245,230,0.58));
          border-color: rgba(37,31,25,0.12);
          box-shadow:
            0 18px 58px rgba(66,50,32,0.08),
            inset 0 1px 0 rgba(255,255,255,0.86);
        }

        .launch-hero {
          grid-template-columns: minmax(0, 0.95fr) minmax(20rem, 0.82fr);
          border: 1px solid rgba(38,30,23,0.16);
          background:
            radial-gradient(circle at 20% 5%, rgba(255,108,55,0.18), transparent 24rem),
            radial-gradient(circle at 90% 18%, rgba(52,211,153,0.16), transparent 20rem),
            linear-gradient(135deg, rgba(255,249,239,0.95), rgba(244,235,220,0.72));
          margin-bottom: 0;
        }

        .launch-hero::before {
          background:
            linear-gradient(90deg, rgba(23,19,15,0.045) 1px, transparent 1px),
            linear-gradient(180deg, rgba(23,19,15,0.045) 1px, transparent 1px);
          background-size: 44px 44px;
          opacity: 0.7;
          animation: launch-grid-drift 14s linear infinite;
        }

        .launch-hero::after {
          background: conic-gradient(from 90deg, transparent, rgba(255,108,55,0.28), transparent, rgba(52,211,153,0.22), transparent);
          opacity: 0.22;
        }

        .launch-kicker,
        .launch-section-heading > span,
        .launch-plan-head > span {
          color: rgba(23,19,15,0.54);
        }

        .launch-hero-copy h1 {
          color: #17130f;
          font-weight: 520;
        }

        .launch-hero-copy p,
        .launch-plan-card p,
        .launch-service-card p,
        .launch-timeline p {
          color: rgba(23,19,15,0.66);
        }

        .launch-hero-actions button {
          color: #17130f;
          background: #ff6b2c;
          box-shadow: 0 16px 38px rgba(255,108,55,0.22);
        }

        .launch-hero-actions a {
          color: rgba(23,19,15,0.72);
          background: rgba(255,255,255,0.48);
          border-color: rgba(37,31,25,0.12);
        }

        .launch-status-panel {
          min-height: 31rem;
          align-content: stretch;
          gap: 0.82rem;
          border: 1px solid rgba(255,255,255,0.12);
          background:
            radial-gradient(circle at 22% 8%, rgba(255,108,55,0.24), transparent 28%),
            radial-gradient(circle at 88% 16%, rgba(52,211,153,0.22), transparent 28%),
            radial-gradient(circle at 50% 100%, rgba(251,191,36,0.18), transparent 34%),
            linear-gradient(135deg, #15110d, #211812 54%, #0f241c);
          box-shadow:
            0 22px 60px rgba(23,19,15,0.24),
            inset 0 1px 0 rgba(255,255,255,0.14);
        }

        .launch-status-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255,255,255,0.045) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: linear-gradient(180deg, black, transparent 92%);
          pointer-events: none;
        }

        .launch-status-panel > * {
          position: relative;
          z-index: 1;
        }

        .launch-live-console {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 0.85rem;
          align-items: end;
          padding: 0.9rem;
          border-radius: 1rem;
          background: rgba(255,249,239,0.09);
          border: 1px solid rgba(255,249,239,0.12);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
        }

        .launch-live-console span,
        .launch-status-queue span {
          display: block;
          color: rgba(255,249,239,0.5);
          font-size: 0.64rem;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .launch-live-console strong {
          display: block;
          margin-top: 0.24rem;
          color: #fff7ed;
          font-size: 1.05rem;
          line-height: 1.15;
          font-weight: 540;
          letter-spacing: -0.02em;
        }

        .launch-live-console p {
          max-width: 18rem;
          margin-top: 0.36rem;
          color: rgba(255,249,239,0.62);
          font-size: 0.76rem;
          line-height: 1.38;
        }

        .launch-console-meter {
          min-width: 7.8rem;
          display: grid;
          gap: 0.42rem;
        }

        .launch-console-meter i {
          height: 0.44rem;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(255,249,239,0.12);
        }

        .launch-console-meter b {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #ff6b2c, #9ff2c7);
          animation: launch-meter-flow 3.2s ease-in-out infinite;
        }

        .launch-console-meter small {
          color: rgba(255,249,239,0.55);
          font-size: 0.64rem;
          font-weight: 500;
        }

        .launch-online-stack {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.55rem;
        }

        .launch-online-stack-item {
          min-height: 4.45rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.32rem;
          padding: 0.72rem;
          border-radius: 0.95rem;
          background:
            radial-gradient(circle at 12% 0%, rgba(255,255,255,0.12), transparent 4rem),
            rgba(255,249,239,0.08);
          border: 1px solid rgba(255,249,239,0.12);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .launch-online-stack-item span {
          color: rgba(255,249,239,0.52);
          font-size: 0.58rem;
          font-weight: 620;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .launch-online-stack-item strong {
          color: rgba(255,247,237,0.9);
          font-size: 0.74rem;
          line-height: 1.2;
          font-weight: 460;
          letter-spacing: -0.01em;
        }

        .launch-system-visual {
          background:
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255,255,255,0.05) 1px, transparent 1px),
            radial-gradient(circle at 50% 42%, rgba(255,108,55,0.18), transparent 42%),
            rgba(255,255,255,0.045);
          background-size: 34px 34px, 34px 34px, auto, auto;
          border-color: rgba(255,255,255,0.12);
          min-height: 12.4rem;
        }

        .launch-visual-core {
          border-radius: 1.55rem;
          color: #17130f;
          background:
            radial-gradient(circle at 26% 18%, rgba(255,255,255,0.95), transparent 30%),
            linear-gradient(135deg, #ffb088, #ffe2a8 50%, #9ff2c7);
        }

        .launch-visual-node {
          color: rgba(255,249,239,0.9);
          background: rgba(255,249,239,0.11);
          border-color: rgba(255,249,239,0.16);
        }

        .launch-visual-node svg {
          color: #ff9d6b;
        }

        .launch-system-copy,
        .launch-mini-grid div {
          background: rgba(255,249,239,0.09);
          border-color: rgba(255,249,239,0.12);
        }

        .launch-feature-strip {
          background:
            linear-gradient(135deg, rgba(255,249,239,0.72), rgba(255,239,214,0.48));
          margin-bottom: 0;
        }

        .launch-feature-strip article,
        .launch-service-card,
        .launch-timeline article,
        .launch-faq-list article,
        .launch-resource-list div,
        .launch-price-row {
          background: rgba(255,255,255,0.48);
          border-color: rgba(37,31,25,0.1);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.82);
        }

        .launch-feature-strip svg,
        .launch-service-card svg,
        .launch-plan-card li svg {
          color: #ff6b2c;
        }

        .launch-plan-card {
          border-color: rgba(37,31,25,0.14);
        }

        .launch-plan-card::before {
          background: radial-gradient(circle, rgba(255,108,55,0.16), transparent 64%);
        }

        .launch-plan-card:nth-child(2)::before {
          background: radial-gradient(circle, rgba(52,211,153,0.16), transparent 64%);
        }

        .launch-plan-card:nth-child(3)::before {
          background: radial-gradient(circle, rgba(251,191,36,0.17), transparent 64%);
        }

        .launch-plan-icon {
          border-radius: 0.8rem;
          background: linear-gradient(145deg, rgba(255,255,255,0.72), rgba(255,237,213,0.5));
          border-color: rgba(37,31,25,0.12);
        }

        .launch-plan-badge {
          color: #17130f;
          background: rgba(255,108,55,0.18);
          border-color: rgba(255,108,55,0.28);
        }

        .launch-platform-row span {
          color: rgba(23,19,15,0.68);
          background: rgba(255,255,255,0.46);
          border-color: rgba(37,31,25,0.1);
        }

        .launch-creative-card {
          background:
            radial-gradient(circle at 16% 0%, rgba(255,108,55,0.25), transparent 42%),
            radial-gradient(circle at 100% 16%, rgba(52,211,153,0.16), transparent 40%),
            linear-gradient(135deg, #17130f, #2b1c13 60%, #13251d);
        }

        .launch-creative-card::before {
          background: rgba(255,108,55,0.2);
        }

        .launch-creative-top svg {
          color: #ff9d6b;
        }

        .launch-timeline article > span {
          background: #ff6b2c;
          color: #17130f;
        }

        .launch-section-heading h2,
        .launch-plan-card h2,
        .launch-service-card h3,
        .launch-timeline h3,
        .launch-faq-list h3 {
          color: #17130f;
        }

        .launch-page,
        .launch-page * {
          font-family: "ABC Diatype", "Inter", "Helvetica Neue", Arial, ui-sans-serif, system-ui, sans-serif;
          letter-spacing: 0;
        }

        .launch-hero {
          border-radius: 1.15rem;
          box-shadow:
            0 16px 0 rgba(23,19,15,0.035),
            0 24px 70px rgba(66,50,32,0.08),
            inset 0 1px 0 rgba(255,255,255,0.82);
        }

        .launch-hero-copy h1 {
          max-width: 48rem;
          font-weight: 560;
          letter-spacing: -0.045em;
          line-height: 0.98;
        }

        .launch-kicker,
        .launch-section-heading > span,
        .launch-plan-head > span {
          font-weight: 520;
          letter-spacing: 0.02em;
          text-transform: none;
        }

        .launch-hero-copy p {
          font-weight: 400;
        }

        .launch-prompt-card {
          width: min(100%, 35rem);
          margin-top: 1.25rem;
          padding: 0.62rem;
          border-radius: 1.05rem;
          background: #17130f;
          border: 1px solid rgba(23,19,15,0.24);
          box-shadow:
            0 18px 44px rgba(23,19,15,0.16),
            inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .launch-prompt-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.45rem 0.52rem 0.58rem;
        }

        .launch-prompt-top span {
          color: rgba(255,249,239,0.62);
          font-size: 0.76rem;
          font-weight: 500;
        }

        .launch-prompt-top strong {
          border-radius: 999px;
          padding: 0.24rem 0.48rem;
          color: #17130f;
          background: #9ff2c7;
          font-size: 0.66rem;
          font-weight: 650;
        }

        .launch-prompt-card p {
          margin: 0;
          padding: 0.9rem;
          min-height: 4.2rem;
          border-radius: 0.78rem;
          color: rgba(255,249,239,0.9);
          background: rgba(255,249,239,0.07);
          border: 1px solid rgba(255,249,239,0.1);
          font-size: 0.93rem;
          line-height: 1.45;
        }

        .launch-prompt-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          padding: 0.62rem 0.2rem 0.2rem;
        }

        .launch-prompt-tools span {
          border-radius: 999px;
          padding: 0.36rem 0.54rem;
          color: rgba(255,249,239,0.72);
          background: rgba(255,249,239,0.08);
          border: 1px solid rgba(255,249,239,0.1);
          font-size: 0.68rem;
          font-weight: 500;
        }

        .launch-prompt-card button {
          width: 100%;
          min-height: 2.65rem;
          margin-top: 0.55rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          border-radius: 0.78rem;
          color: #17130f;
          background: #ff6b2c;
          font-size: 0.88rem;
          font-weight: 600;
          transition: transform 0.22s ease, background 0.22s ease;
        }

        .launch-prompt-card button:hover {
          transform: translateY(-1px);
          background: #ff7f45;
        }

        .launch-hero-actions {
          margin-top: 1rem;
        }

        .launch-hero-actions button,
        .launch-hero-actions a {
          font-weight: 550;
        }

        .launch-builder-tabs {
          width: min(100%, 38rem);
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: 0.8rem;
        }

        .launch-builder-tabs span {
          min-height: 2.3rem;
          display: inline-flex;
          align-items: center;
          gap: 0.36rem;
          border-radius: 999px;
          padding: 0 0.72rem;
          color: rgba(23,19,15,0.72);
          background: rgba(255,255,255,0.48);
          border: 1px solid rgba(23,19,15,0.12);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.72);
          font-size: 0.78rem;
          font-weight: 500;
        }

        .launch-feature-strip,
        .launch-plan-card,
        .launch-services-panel,
        .launch-workflow,
        .launch-creative-panel,
        .launch-faq-panel {
          border-radius: 1rem;
          border-color: rgba(23,19,15,0.16);
        }

        .launch-feature-strip,
        .launch-plan-grid,
        .launch-services-panel,
        .launch-workflow,
        .launch-creative-panel,
        .launch-faq-panel {
          margin-bottom: 0;
        }

        .launch-plans-heading {
          margin: 0;
        }

        .launch-feature-strip article,
        .launch-service-card,
        .launch-timeline article,
        .launch-faq-list article {
          border-radius: 0.85rem;
          border-color: rgba(23,19,15,0.14);
        }

        .launch-plan-grid {
          align-items: stretch;
        }

        .launch-plan-card {
          border-radius: 1rem;
          background:
            linear-gradient(180deg, rgba(255,251,244,0.92), rgba(255,239,221,0.72));
          border: 1px solid rgba(23,19,15,0.18);
        }

        .launch-plan-card:nth-child(2) {
          background:
            linear-gradient(180deg, rgba(23,19,15,0.96), rgba(43,28,19,0.94));
          color: #fff7ed;
        }

        .launch-plan-card:nth-child(2) h2,
        .launch-plan-card:nth-child(2) p,
        .launch-plan-card:nth-child(2) li,
        .launch-plan-card:nth-child(2) .launch-plan-head > span {
          color: rgba(255,247,237,0.9);
        }

        .launch-plan-card:nth-child(2) .launch-price-row,
        .launch-plan-card:nth-child(2) .launch-resource-list div,
        .launch-plan-card:nth-child(2) .launch-platform-row span {
          color: rgba(255,247,237,0.82);
          background: rgba(255,247,237,0.08);
          border-color: rgba(255,247,237,0.12);
        }

        .launch-plan-card:nth-child(2) .launch-price-row strong {
          color: #fff7ed;
        }

        .launch-plan-card:nth-child(2) .launch-plan-badge {
          background: #ff6b2c;
          border-color: #ff6b2c;
        }

        .launch-plan-card h2 {
          font-weight: 560;
          letter-spacing: -0.035em;
        }

        .launch-price-row strong {
          font-weight: 600;
        }

        .launch-section-heading h2 {
          font-weight: 560;
          letter-spacing: -0.04em;
          line-height: 1.03;
        }

        .launch-creative-card {
          border-radius: 0.95rem;
        }

        .launch-page,
        .launch-page * {
          font-family: inherit;
        }

        .launch-page {
          color: #0f172a;
        }

        .launch-page::before {
          background:
            radial-gradient(circle at 14% 14%, rgba(32,80,227,0.16), transparent 27%),
            radial-gradient(circle at 80% 12%, rgba(16,185,129,0.18), transparent 25%),
            radial-gradient(circle at 52% 30%, rgba(14,165,233,0.12), transparent 25%),
            linear-gradient(180deg, rgba(248,250,252,0.95), rgba(255,255,255,0));
        }

        .launch-hero,
        .launch-feature-strip,
        .launch-plan-card,
        .launch-services-panel,
        .launch-workflow,
        .launch-creative-panel,
        .launch-faq-panel {
          background:
            radial-gradient(circle at 18% 0%, rgba(32,80,227,0.08), transparent 22rem),
            radial-gradient(circle at 92% 12%, rgba(16,185,129,0.1), transparent 20rem),
            linear-gradient(135deg, rgba(255,255,255,0.78), rgba(241,245,249,0.5));
          border-color: rgba(255,255,255,0.82);
          box-shadow:
            0 24px 76px rgba(15,23,42,0.07),
            inset 0 1px 0 rgba(255,255,255,0.95);
          backdrop-filter: blur(28px) saturate(1.12);
          -webkit-backdrop-filter: blur(28px) saturate(1.12);
        }

        .launch-hero::before {
          background:
            linear-gradient(90deg, rgba(32,80,227,0.045) 1px, transparent 1px),
            linear-gradient(180deg, rgba(16,185,129,0.04) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        .launch-hero::after {
          background: conic-gradient(from 100deg, transparent, rgba(32,80,227,0.18), transparent, rgba(16,185,129,0.22), transparent);
        }

        .launch-hero-copy h1,
        .launch-section-heading h2,
        .launch-plan-card h2,
        .launch-service-card h3,
        .launch-timeline h3,
        .launch-faq-list h3 {
          color: #0f172a;
          font-weight: 420;
          letter-spacing: -0.035em;
        }

        .launch-hero-copy p,
        .launch-plan-card p,
        .launch-service-card p,
        .launch-timeline p,
        .launch-faq-list p {
          color: rgba(15,23,42,0.58);
          font-weight: 300;
        }

        .launch-kicker,
        .launch-section-heading > span,
        .launch-plan-head > span {
          color: rgba(15,23,42,0.46);
          font-weight: 500;
        }

        .launch-prompt-card,
        .launch-status-panel,
        .launch-creative-card {
          background:
            radial-gradient(circle at 20% 10%, rgba(32,80,227,0.18), transparent 32%),
            radial-gradient(circle at 86% 18%, rgba(16,185,129,0.2), transparent 30%),
            linear-gradient(135deg, rgba(15,23,42,0.96), rgba(17,24,39,0.9) 58%, rgba(6,78,59,0.86));
          border-color: rgba(255,255,255,0.14);
        }

        .launch-prompt-card button,
        .launch-hero-actions button,
        .launch-timeline article > span {
          color: #ffffff;
          background: #2050e3;
          box-shadow: 0 16px 38px rgba(32,80,227,0.18);
          font-weight: 500;
        }

        .launch-prompt-card button:hover {
          background: #1d46c8;
        }

        .launch-hero-actions a,
        .launch-builder-tabs span,
        .launch-feature-strip article,
        .launch-service-card,
        .launch-timeline article,
        .launch-faq-list article,
        .launch-resource-list div,
        .launch-price-row {
          color: rgba(15,23,42,0.7);
          background: rgba(255,255,255,0.52);
          border-color: rgba(255,255,255,0.74);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.82);
        }

        .launch-plan-card {
          background:
            radial-gradient(circle at 20% 0%, rgba(32,80,227,0.08), transparent 40%),
            linear-gradient(180deg, rgba(255,255,255,0.8), rgba(241,245,249,0.58));
          border-color: rgba(255,255,255,0.78);
        }

        .launch-plan-card:nth-child(2) {
          background:
            radial-gradient(circle at 16% 0%, rgba(32,80,227,0.18), transparent 42%),
            radial-gradient(circle at 100% 12%, rgba(16,185,129,0.14), transparent 40%),
            linear-gradient(135deg, rgba(15,23,42,0.96), rgba(17,24,39,0.9));
        }

        .launch-plan-card:nth-child(2) .launch-plan-badge {
          color: #ffffff;
          background: #2050e3;
          border-color: rgba(255,255,255,0.18);
        }

        .launch-plan-card:nth-child(2) .launch-price-row,
        .launch-plan-card:nth-child(2) .launch-resource-list div,
        .launch-plan-card:nth-child(2) .launch-platform-row span {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.13);
        }

        .launch-plan-badge {
          color: #0f766e;
          background: rgba(236,253,245,0.7);
          border-color: rgba(167,243,208,0.65);
          font-weight: 500;
        }

        .launch-plan-icon {
          background: linear-gradient(145deg, rgba(255,255,255,0.78), rgba(226,232,240,0.5));
          border-color: rgba(255,255,255,0.78);
        }

        .launch-platform-row span {
          color: rgba(15,23,42,0.62);
          background: rgba(255,255,255,0.5);
          border-color: rgba(255,255,255,0.7);
        }

        .launch-feature-strip svg,
        .launch-service-card svg,
        .launch-plan-card li svg {
          color: #2050e3;
        }

        .launch-console-meter b {
          background: linear-gradient(90deg, #2050e3, #10b981, #38bdf8);
        }

        .launch-visual-core {
          color: #0f172a;
          background:
            radial-gradient(circle at 26% 18%, rgba(255,255,255,0.95), transparent 30%),
            linear-gradient(135deg, #dbeafe, #a7f3d0 58%, #bae6fd);
        }

        .launch-visual-node svg,
        .launch-creative-top svg {
          color: #93c5fd;
        }

        .launch-creative-card::before {
          background: rgba(32,80,227,0.2);
        }

        .launch-price-row strong,
        .launch-plan-card h2,
        .launch-section-heading h2 {
          font-weight: 420;
        }

        .launch-status-top,
        .launch-status-top span,
        .launch-status-top small,
        .launch-live-console span,
        .launch-live-console strong,
        .launch-system-copy > span,
        .launch-system-copy strong,
        .launch-system-copy small,
        .launch-mini-grid strong,
        .launch-mini-grid span,
        .launch-visual-core span,
        .launch-visual-node span,
        .launch-price-row strong,
        .launch-resource-list div,
        .launch-platform-row span,
        .launch-plan-card li,
        .launch-plan-badge,
        .launch-kicker,
        .launch-section-heading > span,
        .launch-plan-head > span,
        .launch-prompt-top span,
        .launch-prompt-top strong,
        .launch-prompt-tools span,
        .launch-builder-tabs span {
          font-weight: 400;
        }

        .launch-hero-copy h1,
        .launch-section-heading h2,
        .launch-plan-card h2,
        .launch-service-card h3,
        .launch-timeline h3,
        .launch-faq-list h3 {
          font-weight: 420;
        }

        .launch-plan-card:nth-child(2) h2,
        .launch-plan-card:nth-child(2) p,
        .launch-plan-card:nth-child(2) li,
        .launch-plan-card:nth-child(2) .launch-plan-head > span,
        .launch-plan-card:nth-child(2) .launch-price-row span,
        .launch-plan-card:nth-child(2) .launch-price-row strong,
        .launch-plan-card:nth-child(2) .launch-resource-list div,
        .launch-plan-card:nth-child(2) .launch-platform-row span {
          color: rgba(255,255,255,0.82);
          font-weight: 400;
        }

        .launch-prompt-card,
        .launch-status-panel,
        .launch-creative-card {
          color: rgba(255,255,255,0.9);
        }

        .launch-prompt-card p,
        .launch-status-panel p,
        .launch-creative-card p {
          color: rgba(255,255,255,0.72);
        }

        .launch-prompt-top span,
        .launch-prompt-tools span,
        .launch-live-console span,
        .launch-console-meter small,
        .launch-system-copy > span,
        .launch-system-copy small,
        .launch-status-queue span,
        .launch-mini-grid span,
        .launch-creative-top span,
        .launch-creative-card small {
          color: rgba(255,255,255,0.62);
        }

        .launch-status-top strong,
        .launch-live-console strong,
        .launch-system-copy strong,
        .launch-status-queue strong,
        .launch-mini-grid strong,
        .launch-creative-card h3 {
          color: rgba(255,255,255,0.95);
        }

        .launch-status-queue div,
        .launch-mini-grid div,
        .launch-creative-card small,
        .launch-prompt-tools span {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.12);
        }

        .launch-prompt-top strong {
          color: #052e16;
          background: rgba(167,243,208,0.92);
        }

        .launch-status-top small {
          color: rgba(255,255,255,0.58);
        }

        @media (max-width: 767px) {
          .launch-hero,
          .launch-plan-grid,
          .launch-service-grid,
          .launch-feature-strip,
          .launch-creative-grid {
            grid-template-columns: 1fr;
          }

          .launch-hero {
            padding: 1.1rem;
            gap: 1rem;
          }

          .launch-hero-copy h1 {
            font-size: clamp(2.2rem, 12vw, 3.25rem);
            line-height: 1.06;
            letter-spacing: -0.028em;
            margin-bottom: 0.9rem;
          }

          .launch-hero-copy p {
            font-size: 0.92rem;
            line-height: 1.55;
          }

          .launch-prompt-card {
            border-radius: 0.95rem;
          }

          .launch-prompt-card p {
            min-height: 5.3rem;
            font-size: 0.86rem;
          }

          .launch-prompt-tools span {
            font-size: 0.62rem;
          }

          .launch-hero-actions {
            align-items: stretch;
          }

          .launch-hero-actions button,
          .launch-hero-actions a {
            width: 100%;
          }

          .launch-status-panel {
            min-height: 33rem;
            border-radius: 1.15rem;
          }

          .launch-live-console {
            grid-template-columns: 1fr;
            align-items: start;
          }

          .launch-console-meter {
            min-width: 0;
          }

          .launch-status-queue {
            grid-template-columns: 1fr;
          }

          .launch-system-visual {
            min-height: 12.6rem;
          }

          .launch-visual-core {
            width: 6.4rem;
            height: 6.4rem;
            border-radius: 1.65rem;
          }

          .launch-visual-node {
            min-width: auto;
            padding: 0.42rem 0.5rem;
          }

          .launch-visual-node span {
            font-size: 0.58rem;
          }

          .launch-mini-grid {
            gap: 0.5rem;
          }

          .launch-mini-grid div {
            padding: 0.65rem 0.5rem;
          }

          .launch-plan-card,
          .launch-services-panel,
          .launch-workflow,
          .launch-creative-panel,
          .launch-faq-panel,
          .launch-feature-strip {
            border-radius: 1.2rem;
          }

          .launch-plan-head {
            align-items: flex-start;
          }

          .launch-section-heading h2 {
            font-size: 1.85rem;
            line-height: 1;
          }

          .launch-mobile-swipe-hint {
            display: inline-flex;
            align-items: center;
            gap: 0.45rem;
            margin-top: 0.1rem;
            padding: 0.42rem 0.66rem;
            width: max-content;
            max-width: 100%;
            border-radius: 999px;
            color: rgba(15,23,42,0.72);
            background: rgba(255,255,255,0.72);
            border: 1px solid rgba(255,255,255,0.82);
            box-shadow: 0 14px 28px rgba(15,23,42,0.07), inset 0 1px 0 rgba(255,255,255,0.95);
            backdrop-filter: blur(18px) saturate(1.3);
            -webkit-backdrop-filter: blur(18px) saturate(1.3);
            font-size: 0.66rem;
            font-weight: 650;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .launch-mobile-swipe-hint span {
            width: 0.46rem;
            height: 0.46rem;
            border-radius: 999px;
            background: #2050e3;
            box-shadow: 0 0 0 0.24rem rgba(32,80,227,0.11);
          }

          .launch-plan-grid {
            display: flex;
            grid-template-columns: none;
            gap: 0.85rem;
            overflow-x: auto;
            overscroll-behavior-x: contain;
            scroll-snap-type: x mandatory;
            scroll-padding: 1rem;
            margin-inline: -1rem;
            padding: 0.08rem 1rem 0.9rem;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }

          .launch-plan-grid::-webkit-scrollbar {
            display: none;
          }

          .launch-plan-card {
            flex: 0 0 min(82vw, 21rem);
            scroll-snap-align: center;
            min-height: 30rem;
            box-shadow:
              0 22px 54px rgba(23,19,15,0.12),
              inset 0 1px 0 rgba(255,255,255,0.88);
          }

          .launch-resource-list {
            grid-template-columns: 1fr;
          }

          .launch-feature-strip {
            padding: 0.75rem;
          }

          .launch-timeline article {
            grid-template-columns: 1fr;
          }
        }

        /* --- Active Projects Page --- */
        .projects-page {
          color: #111827;
        }

        .projects-page::before {
          content: "";
          position: absolute;
          inset: -4rem -8vw auto;
          height: 34rem;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(circle at 12% 18%, rgba(16,185,129,0.1), transparent 30%),
            radial-gradient(circle at 82% 10%, rgba(15,23,42,0.08), transparent 28%),
            linear-gradient(180deg, rgba(255,255,255,0.86), rgba(241,245,249,0));
          filter: blur(34px);
          opacity: 0.78;
        }

        .projects-dashboard-shell {
          position: relative;
          overflow: hidden;
          border-radius: clamp(1.35rem, 3vw, 2.15rem);
          padding: clamp(1rem, 2vw, 1.45rem);
          margin-bottom: clamp(2rem, 5vw, 4rem);
          background:
            linear-gradient(135deg, rgba(255,255,255,0.78), rgba(248,250,252,0.5)),
            radial-gradient(circle at 12% 0%, rgba(16,185,129,0.08), transparent 20rem),
            radial-gradient(circle at 100% 20%, rgba(32,80,227,0.07), transparent 18rem);
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow:
            0 28px 90px rgba(15,23,42,0.08),
            inset 0 1px 0 rgba(255,255,255,0.95);
          backdrop-filter: blur(30px) saturate(1.08);
          -webkit-backdrop-filter: blur(30px) saturate(1.08);
        }

        .projects-dashboard-shell::before {
          content: "";
          position: absolute;
          inset: 0.58rem;
          border-radius: inherit;
          border: 1px solid rgba(255,255,255,0.72);
          pointer-events: none;
        }

        .projects-dashboard-shell::after {
          content: "";
          position: absolute;
          width: 42%;
          height: 1px;
          right: 2rem;
          top: 0.95rem;
          border-radius: 999px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.94), transparent);
          opacity: 0.78;
          pointer-events: none;
        }

        .projects-dashboard-top,
        .projects-dashboard-layout {
          position: relative;
          z-index: 1;
        }

        .projects-dashboard-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.4rem 0.35rem 1.05rem;
        }

        .projects-dashboard-identity {
          display: flex;
          align-items: center;
          gap: 0.95rem;
          min-width: 0;
        }

        .projects-dashboard-logo {
          width: 3.45rem;
          height: 3.45rem;
          flex: 0 0 auto;
          border-radius: 1.1rem;
          display: grid;
          place-items: center;
          color: #ffffff;
          background:
            radial-gradient(circle at 24% 18%, rgba(255,255,255,0.26), transparent 30%),
            linear-gradient(135deg, #05070a, #17211d);
          box-shadow:
            0 18px 42px rgba(6,18,11,0.13),
            inset 0 1px 0 rgba(255,255,255,0.18);
        }

        .projects-dashboard-identity span,
        .projects-dashboard-metric p,
        .projects-widget-heading span,
        .projects-premium-card > span,
        .projects-team-widget > span {
          display: block;
          color: rgba(15,23,42,0.42);
          font-size: 0.66rem;
          font-weight: 820;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .projects-dashboard-identity h1 {
          margin: 0.12rem 0 0;
          color: #0b0f16;
          font-size: clamp(1.75rem, 4vw, 2.55rem);
          line-height: 1;
          font-weight: 720;
          letter-spacing: -0.055em;
        }

        .projects-dashboard-identity p {
          margin-top: 0.22rem;
          color: rgba(15,23,42,0.52);
          font-size: 0.9rem;
          line-height: 1.35;
        }

        .projects-dashboard-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .projects-dashboard-pill,
        .projects-dashboard-time,
        .projects-dashboard-cycle {
          min-height: 2.55rem;
          display: inline-flex;
          align-items: center;
          gap: 0.48rem;
          border-radius: 999px;
          padding: 0 0.9rem;
          color: rgba(15,23,42,0.72);
          font-size: 0.78rem;
          font-weight: 760;
          background: rgba(255,255,255,0.52);
          border: 1px solid rgba(255,255,255,0.78);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.86), 0 10px 28px rgba(15,23,42,0.04);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .projects-dashboard-search {
          min-width: 10rem;
          justify-content: flex-start;
          color: rgba(15,23,42,0.42);
        }

        .projects-dashboard-time span {
          color: #0b0f16;
          font-variant-numeric: tabular-nums;
        }

        .projects-dashboard-time small {
          color: rgba(15,23,42,0.42);
          font-size: 0.68rem;
          font-weight: 800;
        }

        .projects-dashboard-cycle {
          color: #0f766e;
          background: rgba(240,253,250,0.52);
          border-color: rgba(153,246,228,0.42);
        }

        .projects-dashboard-cycle span {
          color: #0f766e;
          font-size: 0.74rem;
          font-weight: 820;
          white-space: nowrap;
        }

        .projects-dashboard-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(16.5rem, 0.38fr);
          gap: 1.15rem;
        }

        .projects-dashboard-main {
          display: grid;
          gap: 1.15rem;
        }

        .projects-dashboard-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .projects-dashboard-metric,
        .projects-dashboard-widget-add,
        .projects-week-widget,
        .projects-notes-widget,
        .projects-premium-card,
        .projects-completed-widget,
        .projects-team-widget {
          position: relative;
          overflow: hidden;
          border-radius: 1.15rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.68), rgba(248,250,252,0.44));
          border: 1px solid rgba(255,255,255,0.82);
          box-shadow:
            0 18px 52px rgba(15,23,42,0.055),
            inset 0 1px 0 rgba(255,255,255,0.94);
          backdrop-filter: blur(24px) saturate(1.08);
          -webkit-backdrop-filter: blur(24px) saturate(1.08);
        }

        .projects-dashboard-metric {
          min-height: 12.2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.08rem;
          transition: transform 0.34s ease, box-shadow 0.34s ease, background 0.34s ease;
        }

        .projects-dashboard-metric:hover {
          transform: translateY(-0.22rem);
          background: rgba(255,255,255,0.72);
          box-shadow:
            0 26px 66px rgba(15,23,42,0.075),
            inset 0 1px 0 rgba(255,255,255,0.96);
        }

        .projects-dashboard-liquid {
          position: absolute;
          width: 6.8rem;
          height: 4rem;
          right: -2.2rem;
          top: -1.2rem;
          border-radius: 999px;
          transform: rotate(0deg);
          background: rgba(16, 185, 129, 0.1);
          filter: blur(18px);
          opacity: 0.75;
        }

        .projects-dashboard-metric.is-green .projects-dashboard-liquid {
          background: rgba(20, 184, 166, 0.1);
        }

        .projects-dashboard-metric.is-blue .projects-dashboard-liquid {
          background: rgba(32, 80, 227, 0.08);
        }

        .projects-dashboard-metric.is-slate .projects-dashboard-liquid {
          background: rgba(100, 116, 139, 0.1);
        }

        .projects-dashboard-metric strong {
          color: #0b0f16;
          font-size: 0.98rem;
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.035em;
          font-variant-numeric: tabular-nums;
        }

        .projects-dashboard-metric-head {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.8rem;
        }

        .projects-dashboard-metric-icon {
          position: relative;
          isolation: isolate;
          width: 3.05rem;
          height: 3.05rem;
          border-radius: 0.95rem;
          display: grid;
          place-items: center;
          color: #0b0f16;
          background:
            radial-gradient(circle at 26% 18%, rgba(255,255,255,0.9), transparent 28%),
            linear-gradient(145deg, rgba(255,255,255,0.72), rgba(226,232,240,0.46));
          border: 1px solid rgba(255,255,255,0.78);
          box-shadow:
            0 14px 30px rgba(15,23,42,0.07),
            0 0 0 0.34rem rgba(255,255,255,0.18),
            inset 0 1px 0 rgba(255,255,255,0.96);
          transform-style: preserve-3d;
        }

        .projects-icon-orbit {
          display: none;
        }

        .projects-icon-shadow {
          position: absolute;
          left: 50%;
          bottom: -0.38rem;
          z-index: -1;
          width: 2.35rem;
          height: 0.55rem;
          border-radius: 999px;
          background: rgba(15,23,42,0.16);
          filter: blur(7px);
          transform: translateX(-50%);
          opacity: 0.8;
        }

        .projects-icon-sphere {
          display: none;
        }

        .projects-dashboard-metric-icon::before {
          content: "";
          position: absolute;
          inset: 0.45rem;
          border-radius: 0.72rem;
          background: rgba(255,255,255,0.34);
          transform: translate3d(0.28rem, 0.24rem, -1px);
          opacity: 0.72;
        }

        .projects-dashboard-metric-icon::after {
          content: "";
          position: absolute;
          left: 0.42rem;
          right: 0.34rem;
          bottom: 0.28rem;
          height: 0.42rem;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(255,255,255,0.68), rgba(255,255,255,0.16));
          transform: translateZ(8px);
          opacity: 0.74;
        }

        .projects-dashboard-metric-icon svg {
          position: relative;
          z-index: 3;
          filter: drop-shadow(0 7px 10px rgba(15,23,42,0.1));
        }

        .projects-dashboard-metric.is-green .projects-dashboard-metric-icon {
          background:
            radial-gradient(circle at 26% 18%, rgba(255,255,255,0.92), transparent 28%),
            linear-gradient(145deg, rgba(255,255,255,0.72), rgba(226,232,240,0.48));
        }

        .projects-dashboard-metric.is-blue .projects-dashboard-metric-icon {
          background:
            radial-gradient(circle at 26% 18%, rgba(255,255,255,0.92), transparent 28%),
            linear-gradient(145deg, rgba(255,255,255,0.72), rgba(226,232,240,0.48));
        }

        .projects-dashboard-metric.is-slate .projects-dashboard-metric-icon {
          background:
            radial-gradient(circle at 26% 18%, rgba(255,255,255,0.92), transparent 28%),
            linear-gradient(145deg, rgba(255,255,255,0.72), rgba(226,232,240,0.48));
        }

        .projects-dashboard-metric-head > span {
          position: relative;
          z-index: 1;
          max-width: 8rem;
          color: rgba(15,23,42,0.5);
          font-size: 0.67rem;
          line-height: 1.2;
          font-weight: 820;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-align: right;
        }

        .projects-dashboard-metric h2 {
          position: relative;
          z-index: 1;
          color: #0b0f16;
          font-size: clamp(1.2rem, 2.4vw, 1.55rem);
          line-height: 1.02;
          font-weight: 720;
          letter-spacing: -0.055em;
        }

        .projects-dashboard-metric p {
          position: relative;
          z-index: 1;
          max-width: 14rem;
          color: rgba(15,23,42,0.52);
          font-size: 0.8rem;
          line-height: 1.35;
          font-weight: 560;
        }

        .projects-dashboard-metric-foot {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          gap: 0.8rem;
        }

        .projects-dashboard-metric-foot i {
          height: 0.42rem;
          border-radius: 999px;
          overflow: hidden;
          background: rgba(15,23,42,0.065);
        }

        .projects-dashboard-metric-foot b {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #0f766e, #94a3b8);
          animation: projectProgressBreathe 3.8s ease-in-out infinite;
        }

        .projects-dashboard-widget-add {
          min-height: 8.7rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 0.35rem;
          padding: 1rem;
          border-style: dashed;
          border-color: rgba(15,23,42,0.12);
          background: rgba(255,255,255,0.42);
        }

        .projects-dashboard-widget-add span {
          color: rgba(15,23,42,0.45);
          font-size: 0.78rem;
          font-weight: 720;
        }

        .projects-dashboard-widget-add strong {
          color: #0b0f16;
          font-size: 1.55rem;
          line-height: 1;
          font-weight: 720;
          letter-spacing: -0.045em;
        }

        .projects-dashboard-widget-add small {
          color: rgba(15,23,42,0.48);
          font-size: 0.78rem;
          line-height: 1.3;
          font-weight: 560;
        }

        .projects-week-widget,
        .projects-notes-widget {
          padding: 1.1rem;
        }

        .projects-widget-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .projects-widget-heading h2,
        .projects-premium-card h2,
        .projects-team-widget h2 {
          margin-top: 0.22rem;
          color: #0b0f16;
          font-size: clamp(1.15rem, 2vw, 1.55rem);
          line-height: 1.05;
          font-weight: 720;
          letter-spacing: -0.045em;
        }

        .projects-mini-note {
          border-radius: 999px;
          padding: 0.45rem 0.65rem;
          background: rgba(15,23,42,0.08);
          color: rgba(15,23,42,0.62);
          border: 1px solid rgba(255,255,255,0.72);
          font-size: 0.7rem;
          font-weight: 760;
        }

        .projects-week-chart {
          min-height: 9.75rem;
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 0.62rem;
          align-items: end;
          padding: 0.95rem 0.1rem 0;
        }

        .projects-week-day {
          display: grid;
          gap: 0.46rem;
          justify-items: center;
          min-width: 0;
        }

        .projects-week-day > span {
          color: rgba(15,23,42,0.48);
          font-size: 0.68rem;
          font-weight: 760;
          letter-spacing: -0.01em;
        }

        .projects-week-bar {
          position: relative;
          width: min(2.05rem, 100%);
          height: 7.1rem;
          border-radius: 999px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 0.24rem;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.78), rgba(248,250,252,0.58));
          border: 1px solid rgba(15,23,42,0.07);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.9),
            0 10px 24px rgba(15,23,42,0.045);
        }

        .projects-week-bar i {
          width: 100%;
          min-height: 1.15rem;
          border-radius: 999px;
          background: linear-gradient(180deg, #64748b, #cbd5e1);
          box-shadow: 0 0 18px rgba(100,116,139,0.14);
          animation: projectProgressBreathe 4.8s ease-in-out infinite;
        }

        .projects-week-bar i.is-green { background: linear-gradient(180deg, #0f766e, #99f6e4); }
        .projects-week-bar i.is-blue { background: linear-gradient(180deg, #334155, #bfdbfe); }
        .projects-week-bar i.is-slate { background: linear-gradient(180deg, #475569, #dbeafe); }

        .projects-week-bar strong {
          position: absolute;
          top: -0.92rem;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 999px;
          padding: 0.23rem 0.38rem;
          background: rgba(15,23,42,0.86);
          color: #fff;
          font-size: 0.62rem;
          line-height: 1;
          font-weight: 820;
          font-variant-numeric: tabular-nums;
          box-shadow: 0 8px 18px rgba(15,23,42,0.12);
        }

        .projects-note-list {
          display: grid;
          gap: 0.65rem;
        }

        .projects-note-row {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center;
          gap: 0.75rem;
          padding: 0.78rem;
          border-radius: 0.95rem;
          background: rgba(255,255,255,0.48);
          border: 1px solid rgba(255,255,255,0.72);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.78);
        }

        .projects-note-icon {
          width: 2.45rem;
          height: 2.45rem;
          border-radius: 0.8rem;
          display: grid;
          place-items: center;
          color: #0b0f16;
          background: linear-gradient(145deg, rgba(255,255,255,0.72), rgba(226,232,240,0.46));
          border: 1px solid rgba(255,255,255,0.78);
          box-shadow: 0 10px 24px rgba(15,23,42,0.055), inset 0 1px 0 rgba(255,255,255,0.9);
        }

        .projects-note-row h3 {
          color: #0b0f16;
          font-size: 0.94rem;
          font-weight: 760;
          letter-spacing: -0.035em;
        }

        .projects-note-row p {
          margin-top: 0.1rem;
          color: rgba(15,23,42,0.48);
          font-size: 0.76rem;
          line-height: 1.25;
        }

        .projects-note-row small {
          display: block;
          margin-top: 0.34rem;
          color: rgba(15,23,42,0.42);
          font-size: 0.7rem;
          line-height: 1.2;
          font-weight: 720;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .projects-note-row > strong {
          color: #0b0f16;
          font-size: 0.95rem;
          font-weight: 820;
          font-variant-numeric: tabular-nums;
        }

        .projects-dashboard-side {
          display: grid;
          gap: 1.15rem;
          align-content: start;
        }

        .projects-premium-card,
        .projects-completed-widget,
        .projects-team-widget {
          padding: 1.05rem;
        }

        .projects-premium-card {
          min-height: 12.5rem;
          color: #fff;
          background:
            radial-gradient(circle at 18% 16%, rgba(255,255,255,0.18), transparent 28%),
            linear-gradient(135deg, rgba(15,23,42,0.96), rgba(17,24,39,0.92) 58%, rgba(6,78,59,0.9));
          border-color: rgba(255,255,255,0.14);
        }

        .projects-premium-card > span,
        .projects-premium-card h2,
        .projects-premium-card p {
          color: #fff;
        }

        .projects-premium-card p,
        .projects-team-widget p {
          margin-top: 0.62rem;
          color: rgba(255,255,255,0.76);
          font-size: 0.86rem;
          line-height: 1.45;
        }

        .projects-premium-card > span {
          color: rgba(255,255,255,0.62);
          font-size: 0.62rem;
          font-weight: 850;
          letter-spacing: 0.16em;
        }

        .projects-premium-card h2 {
          max-width: 13rem;
          font-size: clamp(1.35rem, 2.3vw, 1.9rem);
          line-height: 0.98;
          font-weight: 680;
          letter-spacing: -0.055em;
        }

        .projects-premium-card p {
          color: rgba(255,255,255,0.68);
          font-size: 0.82rem;
          line-height: 1.55;
          font-weight: 430;
        }

        .projects-launch-window-list {
          display: grid;
          gap: 0.6rem;
          margin-top: 1.05rem;
        }

        .projects-launch-window-row {
          padding: 0.72rem;
          border-radius: 0.95rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.18);
        }

        .projects-launch-window-row span {
          display: block;
          color: rgba(255,255,255,0.58);
          font-size: 0.62rem;
          font-weight: 850;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .projects-launch-window-row strong {
          display: block;
          margin-top: 0.22rem;
          color: #fff;
          font-size: 0.9rem;
          line-height: 1.18;
          font-weight: 760;
          letter-spacing: -0.035em;
        }

        .projects-launch-window-row small {
          display: block;
          margin-top: 0.28rem;
          color: rgba(255,255,255,0.62);
          font-size: 0.72rem;
          line-height: 1.25;
          font-weight: 620;
        }

        .projects-launch-window-row i {
          display: block;
          height: 0.36rem;
          margin-top: 0.58rem;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(255,255,255,0.16);
        }

        .projects-launch-window-row b {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, rgba(255,255,255,0.9), rgba(167,243,208,0.72));
          animation: projectProgressBreathe 3.8s ease-in-out infinite;
        }

        .projects-completion-row {
          display: grid;
          gap: 0.38rem;
          margin-top: 0.78rem;
        }

        .projects-completion-row div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.8rem;
        }

        .projects-completion-row span,
        .projects-completion-row strong {
          color: rgba(15,23,42,0.7);
          font-size: 0.78rem;
          font-weight: 760;
        }

        .projects-completion-row i {
          height: 1.15rem;
          border-radius: 999px;
          overflow: hidden;
          background: rgba(15,23,42,0.055);
          border: 1px solid rgba(255,255,255,0.72);
        }

        .projects-completion-row b {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #10b981, #14b8a6, #2050e3);
        }

        .projects-team-widget {
          background:
            radial-gradient(circle at 15% 18%, rgba(255,255,255,0.82), transparent 25%),
            linear-gradient(135deg, rgba(240,253,244,0.84), rgba(255,255,255,0.58));
        }

        .projects-team-widget p {
          color: rgba(15,23,42,0.52);
        }

        .projects-kicker,
        .project-type-pill,
        .projects-about-intro > span,
        .projects-stat-card span,
        .projects-principle-card > span,
        .projects-team-strip span {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .projects-kicker {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 1.5rem;
          padding: 0.58rem 0.86rem;
          border-radius: 999px;
          color: #047857;
          background:
            radial-gradient(circle at 12% 18%, rgba(255,255,255,0.9), transparent 26%),
            linear-gradient(135deg, rgba(209,250,229,0.82), rgba(191,219,254,0.48));
          border: 1px solid rgba(255,255,255,0.82);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.9), 0 14px 30px rgba(16,185,129,0.12);
        }

        .projects-live-dot {
          width: 0.55rem;
          height: 0.55rem;
          border-radius: 999px;
          background: #22c55e;
          box-shadow: 0 0 0 0.32rem rgba(34,197,94,0.15), 0 0 18px rgba(34,197,94,0.45);
          animation: project-live-pulse 1.7s ease-out infinite;
        }

        .projects-hero-note {
          width: fit-content;
          justify-self: start;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          border-radius: 1.25rem;
          background:
            radial-gradient(circle at 12% 18%, rgba(255,255,255,0.92), transparent 30%),
            linear-gradient(135deg, rgba(255,255,255,0.78), rgba(254,240,138,0.32));
          border: 1px solid rgba(255,255,255,0.86);
          box-shadow: 0 18px 42px rgba(15,23,42,0.06), inset 0 1px 1px rgba(255,255,255,0.9);
          color: #64748b;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .projects-hero-note strong {
          color: #111827;
          font-variant-numeric: tabular-nums;
        }

        .project-active-card,
        .projects-about-section,
        .projects-stat-card,
        .projects-principle-card {
          border: 1px solid rgba(255,255,255,0.78);
          background:
            radial-gradient(circle at 12% 10%, rgba(255,255,255,0.88), transparent 26%),
            radial-gradient(circle at 88% 12%, rgba(167,243,208,0.22), transparent 28%),
            linear-gradient(135deg, rgba(255,255,255,0.72), rgba(239,246,255,0.4));
          backdrop-filter: blur(24px) saturate(1.32);
          -webkit-backdrop-filter: blur(24px) saturate(1.32);
          box-shadow:
            inset 0 1px 2px rgba(255,255,255,0.9),
            0 24px 70px rgba(15,23,42,0.08);
        }

        .project-active-card {
          position: relative;
          overflow: hidden;
          border-radius: 2rem;
          padding: 0.55rem;
          isolation: isolate;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .project-active-card:nth-child(2) {
          background:
            radial-gradient(circle at 14% 10%, rgba(255,255,255,0.88), transparent 26%),
            radial-gradient(circle at 88% 12%, rgba(147,197,253,0.24), transparent 28%),
            linear-gradient(135deg, rgba(255,255,255,0.72), rgba(219,234,254,0.44));
        }

        .project-active-card:nth-child(3) {
          background:
            radial-gradient(circle at 14% 10%, rgba(255,255,255,0.88), transparent 26%),
            radial-gradient(circle at 88% 12%, rgba(216,180,254,0.24), transparent 28%),
            linear-gradient(135deg, rgba(255,255,255,0.72), rgba(254,243,199,0.38));
        }

        .project-active-card:hover {
          transform: translateY(-0.4rem);
          box-shadow:
            inset 0 1px 2px rgba(255,255,255,0.92),
            0 32px 86px rgba(15,23,42,0.13);
        }

        .project-card-aurora {
          position: absolute;
          width: 13rem;
          height: 13rem;
          right: -5rem;
          top: -5rem;
          border-radius: 999px;
          background:
            radial-gradient(circle, rgba(34,197,94,0.32), transparent 66%);
          filter: blur(18px);
          opacity: 0.75;
          z-index: -1;
          animation: project-aurora-drift 7s ease-in-out infinite;
        }

        .project-active-card:nth-child(2) .project-card-aurora {
          background: radial-gradient(circle, rgba(59,130,246,0.3), transparent 66%);
          animation-delay: -2s;
        }

        .project-active-card:nth-child(3) .project-card-aurora {
          background: radial-gradient(circle, rgba(168,85,247,0.28), transparent 66%);
          animation-delay: -4s;
        }

        .project-preview {
          min-height: 16rem;
          border-radius: 1.5rem;
          overflow: hidden;
          position: relative;
          background:
            radial-gradient(circle at 20% 18%, rgba(255,255,255,0.24), transparent 26%),
            radial-gradient(circle at 80% 78%, rgba(34,197,94,0.36), transparent 34%),
            linear-gradient(135deg, #020617, #064e3b 62%, #0f172a);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.14);
        }

        .project-preview-web {
          background:
            radial-gradient(circle at 18% 16%, rgba(147,197,253,0.32), transparent 30%),
            radial-gradient(circle at 82% 78%, rgba(14,165,233,0.38), transparent 34%),
            linear-gradient(135deg, #0f172a, #1e3a8a 60%, #020617);
        }

        .project-preview-dashboard {
          background:
            radial-gradient(circle at 82% 18%, rgba(251,191,36,0.26), transparent 30%),
            radial-gradient(circle at 18% 80%, rgba(168,85,247,0.34), transparent 34%),
            linear-gradient(135deg, #111827, #581c87 62%, #020617);
        }

        .project-preview::before {
          content: "";
          position: absolute;
          inset: -40%;
          background: linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.18) 50%, transparent 64%);
          animation: project-preview-sheen 6.5s ease-in-out infinite;
          pointer-events: none;
        }

        .project-3d-stage {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          perspective: 760px;
        }

        .project-3d-cube {
          position: relative;
          width: 5.7rem;
          height: 5.7rem;
          transform-style: preserve-3d;
          animation: project-cube-spin 9s linear infinite;
        }

        .project-3d-cube span {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(255,255,255,0.32);
          background:
            radial-gradient(circle at 28% 18%, rgba(255,255,255,0.72), transparent 24%),
            linear-gradient(135deg, rgba(16,185,129,0.86), rgba(59,130,246,0.52));
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.32);
        }

        .project-3d-cube span:nth-child(1) { transform: translateZ(2.85rem); }
        .project-3d-cube span:nth-child(2) { transform: rotateY(90deg) translateZ(2.85rem); }
        .project-3d-cube span:nth-child(3) { transform: rotateY(180deg) translateZ(2.85rem); }
        .project-3d-cube span:nth-child(4) { transform: rotateY(-90deg) translateZ(2.85rem); }
        .project-3d-cube span:nth-child(5) { transform: rotateX(90deg) translateZ(2.85rem); }
        .project-3d-cube span:nth-child(6) { transform: rotateX(-90deg) translateZ(2.85rem); }

        .project-3d-ring {
          position: absolute;
          width: 12rem;
          height: 12rem;
          border-radius: 999px;
          border: 1px solid rgba(187,247,208,0.34);
          box-shadow: 0 0 42px rgba(34,197,94,0.12);
          animation: project-ring-spin 8s linear infinite;
        }

        .project-3d-ring-two {
          width: 15rem;
          height: 7.5rem;
          transform: rotateX(72deg);
          animation-duration: 12s;
          animation-direction: reverse;
        }

        .project-browser-mock {
          position: absolute;
          left: 8%;
          right: 8%;
          top: 16%;
          bottom: 14%;
          border-radius: 1.1rem;
          background: rgba(255,255,255,0.9);
          box-shadow: 0 28px 70px rgba(0,0,0,0.25);
          overflow: hidden;
          transform: rotate(-2deg);
          animation: project-browser-float 5.5s ease-in-out infinite;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .project-preview-dashboard .project-browser-mock {
          transform: rotate(2deg);
          animation-delay: -1.8s;
        }

        .project-browser-top {
          height: 2.15rem;
          display: flex;
          align-items: center;
          gap: 0.38rem;
          padding: 0 0.85rem;
          border-bottom: 1px solid rgba(15,23,42,0.08);
        }

        .project-browser-top i {
          width: 0.48rem;
          height: 0.48rem;
          border-radius: 999px;
          background: #cbd5e1;
        }

        .project-browser-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 0.6rem;
          padding: 0.85rem;
        }

        .project-browser-grid span {
          min-height: 3rem;
          border-radius: 0.7rem;
          background: linear-gradient(135deg, rgba(16,185,129,0.14), rgba(59,130,246,0.16));
        }

        .project-browser-grid span:first-child {
          grid-row: span 2;
        }

        .project-browser-chart {
          height: 3.2rem;
          margin: 0 0.85rem;
          border-radius: 0.75rem;
          background:
            linear-gradient(90deg, rgba(16,185,129,0.35) 0 28%, transparent 28% 34%, rgba(59,130,246,0.3) 34% 62%, transparent 62% 68%, rgba(245,158,11,0.28) 68%);
        }

        .project-active-content {
          position: relative;
          z-index: 1;
          padding: 1.2rem 1.1rem 1.15rem;
        }

        .project-type-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: #047857;
          background: rgba(209,250,229,0.56);
          border: 1px solid rgba(167,243,208,0.7);
          border-radius: 999px;
          padding: 0.46rem 0.68rem;
        }

        .project-index {
          color: rgba(15,23,42,0.24);
          font-weight: 900;
        }

        .project-active-card h2 {
          font-size: 1.45rem;
          line-height: 1.05;
          color: #111827;
          margin-bottom: 0.72rem;
        }

        .project-active-card p {
          color: #64748b;
          font-size: 0.92rem;
          line-height: 1.55;
          font-weight: 300;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin: 1rem 0 1.1rem;
        }

        .project-tags span {
          border-radius: 999px;
          background:
            radial-gradient(circle at 20% 18%, rgba(255,255,255,0.9), transparent 32%),
            rgba(255,255,255,0.62);
          border: 1px solid rgba(255,255,255,0.82);
          color: #475569;
          padding: 0.38rem 0.58rem;
          font-size: 0.72rem;
          font-weight: 600;
        }

        .project-progress {
          display: grid;
          gap: 0.48rem;
          color: #334155;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .project-progress strong {
          color: #111827;
          font-variant-numeric: tabular-nums;
        }

        .project-progress-bar {
          height: 0.45rem;
          border-radius: 999px;
          overflow: hidden;
          background: rgba(15,23,42,0.08);
        }

        .project-progress-bar i {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #22c55e, #14b8a6, #3b82f6);
          animation: project-progress-glow 3.5s ease-in-out infinite;
        }

        .project-progress small {
          color: #94a3b8;
          font-weight: 500;
        }

        .projects-dashboard-page,
        .projects-dashboard-page * {
          font-family: inherit;
        }

        .projects-dashboard-identity h1,
        .projects-dashboard-metric h2,
        .projects-widget-heading h2,
        .projects-premium-card h2,
        .projects-team-widget h2,
        .projects-note-row h3,
        .projects-launch-window-row strong {
          font-weight: 420;
          letter-spacing: -0.035em;
        }

        .projects-dashboard-identity span,
        .projects-dashboard-metric p,
        .projects-dashboard-metric-head > span,
        .projects-dashboard-pill,
        .projects-dashboard-time,
        .projects-dashboard-time small,
        .projects-dashboard-cycle,
        .projects-dashboard-cycle span,
        .projects-widget-heading span,
        .projects-mini-note,
        .projects-week-day > span,
        .projects-note-row small,
        .projects-premium-card > span,
        .projects-launch-window-row span,
        .projects-launch-window-row small,
        .projects-completion-row span,
        .projects-completion-row strong,
        .projects-team-widget > span {
          font-weight: 400;
        }

        .projects-dashboard-identity p,
        .projects-dashboard-metric p,
        .projects-note-row p,
        .projects-premium-card p,
        .projects-team-widget p {
          font-weight: 300;
        }

        .projects-dashboard-metric-foot {
          grid-template-columns: minmax(0, 1fr);
        }

        .projects-week-chart {
          padding-top: 0.45rem;
        }

        .projects-about-section {
          overflow: hidden;
          border-radius: clamp(1.7rem, 4vw, 3rem);
          padding: clamp(1.25rem, 4vw, 3rem);
          background:
            radial-gradient(circle at 10% 8%, rgba(255,255,255,0.92), transparent 22%),
            radial-gradient(circle at 88% 12%, rgba(187,247,208,0.42), transparent 30%),
            radial-gradient(circle at 22% 92%, rgba(191,219,254,0.34), transparent 28%),
            linear-gradient(135deg, rgba(255,255,255,0.78), rgba(248,250,252,0.62));
        }

        .projects-about-section::before {
          content: "";
          position: absolute;
          inset: -30%;
          background:
            linear-gradient(115deg, transparent 38%, rgba(255,255,255,0.48) 50%, transparent 62%);
          opacity: 0.42;
          animation: project-about-glass-pass 9s ease-in-out infinite;
          pointer-events: none;
        }

        .projects-about-section > * {
          position: relative;
          z-index: 1;
        }

        .projects-about-intro {
          max-width: 920px;
          margin-bottom: 2rem;
        }

        .projects-about-intro > span {
          color: #059669;
        }

        .projects-about-intro h2 {
          margin-top: 0.8rem;
          color: #0f172a;
          font-size: clamp(2rem, 5.4vw, 4.8rem);
          line-height: 0.98;
          font-weight: 300;
          letter-spacing: -0.055em;
        }

        .projects-about-intro p {
          max-width: 700px;
          margin-top: 1.15rem;
          color: #64748b;
          font-weight: 300;
          line-height: 1.65;
        }

        .projects-stat-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.8rem;
          margin-bottom: 0.9rem;
        }

        .projects-stat-card,
        .projects-principle-card {
          border-radius: 1.5rem;
          padding: 1.15rem;
          background: rgba(255,255,255,0.58);
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .projects-stat-card:hover,
        .projects-principle-card:hover {
          transform: translateY(-0.25rem);
          background: rgba(255,255,255,0.74);
        }

        .projects-stat-card strong {
          display: block;
          color: #0f172a;
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 0.95;
          font-weight: 300;
          letter-spacing: -0.06em;
          font-variant-numeric: tabular-nums;
        }

        .projects-stat-card span,
        .projects-principle-card > span {
          display: block;
          color: #059669;
          margin: 0.7rem 0 0.45rem;
        }

        .projects-stat-card p,
        .projects-principle-card p {
          color: #64748b;
          font-size: 0.86rem;
          line-height: 1.5;
          font-weight: 300;
        }

        .projects-principle-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.8rem;
          margin-top: 0.9rem;
        }

        .projects-principle-card h3 {
          font-size: 1.35rem;
          color: #111827;
          margin-bottom: 0.55rem;
        }

        .projects-team-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-top: 1rem;
        }

        .projects-team-strip span {
          border-radius: 999px;
          color: #0f172a;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.84);
          padding: 0.58rem 0.76rem;
        }

        .projects-leadership-section {
          margin-top: clamp(2rem, 5vw, 4rem);
          padding-top: clamp(1.5rem, 4vw, 3rem);
          border-top: 1px solid rgba(15,23,42,0.08);
        }

        .projects-leadership-heading {
          max-width: 850px;
          margin-bottom: 1.2rem;
        }

        .projects-leadership-heading > span {
          display: block;
          color: #2563eb;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .projects-leadership-heading h2 {
          margin-top: 0.7rem;
          color: #0f172a;
          font-size: clamp(2rem, 4.6vw, 4.2rem);
          line-height: 0.98;
          font-weight: 300;
          letter-spacing: -0.055em;
        }

        .projects-leadership-heading p {
          max-width: 650px;
          margin-top: 1rem;
          color: #64748b;
          font-weight: 300;
          line-height: 1.65;
        }

        .projects-leadership-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.85rem;
        }

        .projects-leader-card {
          position: relative;
          overflow: hidden;
          min-height: 24rem;
          border-radius: 1.75rem;
          padding: 1.1rem;
          border: 1px solid rgba(255,255,255,0.78);
          background:
            radial-gradient(circle at 18% 12%, rgba(255,255,255,0.88), transparent 26%),
            radial-gradient(circle at 82% 14%, color-mix(in srgb, var(--leader-accent) 28%, transparent), transparent 30%),
            linear-gradient(135deg, rgba(255,255,255,0.72), rgba(255,255,255,0.36));
          box-shadow:
            inset 0 1px 2px rgba(255,255,255,0.9),
            0 24px 62px rgba(15,23,42,0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .projects-leader-card:hover {
          transform: translateY(-0.35rem);
          box-shadow:
            inset 0 1px 2px rgba(255,255,255,0.92),
            0 34px 82px rgba(15,23,42,0.12);
        }

        .projects-leader-card::before {
          content: "";
          position: absolute;
          inset: -35%;
          background: linear-gradient(115deg, transparent 38%, rgba(255,255,255,0.46) 50%, transparent 62%);
          opacity: 0.38;
          animation: project-leader-glass-pass 8s ease-in-out infinite;
          pointer-events: none;
        }

        .projects-leader-card > * {
          position: relative;
          z-index: 1;
        }

        .projects-leader-avatar {
          width: 7.4rem;
          height: 7.4rem;
          border-radius: 2rem;
          display: grid;
          place-items: center;
          color: #fff;
          background:
            radial-gradient(circle at 28% 20%, rgba(255,255,255,0.46), transparent 26%),
            linear-gradient(135deg, var(--leader-accent), #0f172a);
          box-shadow: 0 22px 44px color-mix(in srgb, var(--leader-accent) 24%, transparent);
          animation: project-leader-float 5.6s ease-in-out infinite;
        }

        .projects-leader-avatar span {
          font-size: 2.5rem;
          font-weight: 300;
          letter-spacing: -0.08em;
          font-variant-numeric: tabular-nums;
        }

        .projects-leader-copy {
          margin-top: 1.35rem;
        }

        .projects-leader-copy small {
          display: block;
          color: var(--leader-accent);
          font-size: 0.66rem;
          font-weight: 850;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          line-height: 1.25;
        }

        .projects-leader-copy h3 {
          margin-top: 0.45rem;
          color: #0f172a;
          font-size: clamp(1.6rem, 3vw, 2.35rem);
          line-height: 1;
          font-weight: 300;
          letter-spacing: -0.055em;
        }

        .projects-leader-copy p {
          margin-top: 0.8rem;
          color: #64748b;
          font-size: 0.9rem;
          line-height: 1.55;
          font-weight: 300;
        }

        .projects-leader-focus {
          position: absolute;
          left: 1.1rem;
          right: 1.1rem;
          bottom: 1.1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.42rem;
        }

        .projects-leader-focus span {
          border-radius: 999px;
          padding: 0.42rem 0.58rem;
          color: #334155;
          background: rgba(255,255,255,0.62);
          border: 1px solid rgba(255,255,255,0.8);
          font-size: 0.68rem;
          font-weight: 700;
        }

        @keyframes project-aurora-drift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-1.2rem, 1rem, 0) scale(1.12); }
        }

        @keyframes project-preview-sheen {
          0%, 100% { transform: translateX(-34%) rotate(5deg); opacity: 0.18; }
          50% { transform: translateX(34%) rotate(5deg); opacity: 0.42; }
        }

        @keyframes launch-page-glow {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.78; }
          50% { transform: translate3d(1.4rem, -0.8rem, 0) scale(1.04); opacity: 0.95; }
        }

        @keyframes launch-hero-color-drift {
          0%, 100% { filter: hue-rotate(0deg) saturate(1); opacity: 1; }
          50% { filter: hue-rotate(18deg) saturate(1.12); opacity: 0.9; }
        }

        @keyframes launch-grid-drift {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 44px 44px, 44px 44px; }
        }

        @keyframes launch-glass-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes launch-orbit-turn {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes launch-core-float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0) rotate(-1deg); }
          50% { transform: translate(-50%, -50%) translateY(-0.35rem) rotate(1.5deg); }
        }

        @keyframes launch-node-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0.16rem, -0.28rem, 0); }
        }

        @keyframes launch-card-glow {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.72; }
          50% { transform: translate3d(-0.7rem, 0.45rem, 0) scale(1.12); opacity: 1; }
        }

        @keyframes launch-meter-flow {
          0%, 100% { filter: saturate(1) brightness(1); opacity: 0.82; }
          50% { filter: saturate(1.18) brightness(1.08); opacity: 1; }
        }

        @keyframes project-progress-glow {
          0%, 100% { filter: saturate(1) brightness(1); }
          50% { filter: saturate(1.22) brightness(1.08); }
        }

        @keyframes projectIconDrift {
          0%, 100% { transform: perspective(520px) rotateX(10deg) rotateY(-8deg) translate3d(0, 0, 0); }
          50% { transform: perspective(520px) rotateX(14deg) rotateY(7deg) translate3d(0.1rem, -0.16rem, 0); }
        }

        @keyframes projectProgressBreathe {
          0%, 100% { filter: saturate(1) brightness(1); opacity: 0.86; }
          50% { filter: saturate(1.14) brightness(1.04); opacity: 1; }
        }

        @keyframes projectIconTilt {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(-1deg) scale(1); }
          50% { transform: translate3d(0.08rem, -0.08rem, 0) rotate(3deg) scale(1.04); }
        }

        @keyframes projectIconSphere {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.9; }
          50% { transform: translate3d(-0.18rem, 0.22rem, 0) scale(0.86); opacity: 0.62; }
        }

        @keyframes projectServiceOrbit {
          0% { transform: rotate(0deg) scale(1); opacity: 0.56; }
          50% { transform: rotate(180deg) scale(1.04); opacity: 0.86; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.56; }
        }

        @keyframes project-about-glass-pass {
          0%, 100% { transform: translateX(-30%) rotate(2deg); opacity: 0.18; }
          50% { transform: translateX(30%) rotate(2deg); opacity: 0.52; }
        }

        @keyframes project-leader-glass-pass {
          0%, 100% { transform: translateX(-32%) rotate(4deg); opacity: 0.16; }
          50% { transform: translateX(32%) rotate(4deg); opacity: 0.48; }
        }

        @keyframes project-leader-float {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(-1deg); }
          50% { transform: translate3d(0, -0.5rem, 0) rotate(1deg); }
        }

        @keyframes project-live-pulse {
          0% { transform: scale(1); }
          70% { transform: scale(1.18); box-shadow: 0 0 0 0.75rem rgba(34,197,94,0), 0 0 18px rgba(34,197,94,0.45); }
          100% { transform: scale(1); }
        }

        @keyframes project-cube-spin {
          0% { transform: rotateX(-18deg) rotateY(0deg); }
          100% { transform: rotateX(-18deg) rotateY(360deg); }
        }

        @keyframes project-ring-spin {
          0% { transform: rotateX(64deg) rotateZ(0deg); }
          100% { transform: rotateX(64deg) rotateZ(360deg); }
        }

        @keyframes project-browser-float {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -0.45rem; }
        }

        @media (max-width: 900px) {
          .projects-dashboard-top {
            align-items: flex-start;
            flex-direction: column;
          }

          .projects-dashboard-actions {
            width: 100%;
            justify-content: flex-start;
          }

          .projects-dashboard-layout {
            grid-template-columns: 1fr;
          }

          .projects-dashboard-metrics {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .projects-stat-grid,
          .projects-principle-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .projects-page {
            padding-bottom: calc(8rem + env(safe-area-inset-bottom)) !important;
          }

          .projects-dashboard-page {
            padding-top: 1.25rem !important;
          }

          .projects-dashboard-shell {
            border-radius: 1.65rem;
            padding: 0.78rem;
            margin-bottom: 2rem;
          }

          .projects-dashboard-shell::before {
            inset: 0.38rem;
          }

          .projects-dashboard-top {
            padding: 0.2rem 0.1rem 0.9rem;
            gap: 0.85rem;
          }

          .projects-dashboard-identity {
            align-items: flex-start;
          }

          .projects-dashboard-logo {
            width: 3.25rem;
            height: 3.25rem;
            border-radius: 1.05rem;
          }

          .projects-dashboard-identity h1 {
            font-size: 1.65rem;
          }

          .projects-dashboard-identity p {
            font-size: 0.82rem;
            max-width: 18rem;
          }

          .projects-dashboard-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.55rem;
          }

          .projects-dashboard-pill,
          .projects-dashboard-time,
          .projects-dashboard-cycle {
            min-height: 2.45rem;
            justify-content: center;
            padding: 0 0.62rem;
            font-size: 0.72rem;
          }

          .projects-dashboard-search {
            min-width: 0;
          }

          .projects-dashboard-time,
          .projects-dashboard-cycle {
            grid-column: 1 / -1;
          }

          .projects-dashboard-cycle span {
            font-size: 0.68rem;
          }

          .projects-dashboard-layout,
          .projects-dashboard-main,
          .projects-dashboard-side {
            gap: 0.85rem;
          }

          .projects-dashboard-metrics {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }

          .projects-dashboard-metric,
          .projects-dashboard-widget-add {
            min-height: 11rem;
            border-radius: 1.25rem;
            padding: 0.85rem;
          }

          .projects-dashboard-metric-head {
            gap: 0.55rem;
          }

          .projects-dashboard-metric-icon {
            width: 2.8rem;
            height: 2.8rem;
            border-radius: 0.9rem;
          }

          .projects-dashboard-metric-icon::before {
            inset: 0.38rem;
            border-radius: 0.6rem;
          }

          .projects-dashboard-metric-head > span {
            font-size: 0.56rem;
            max-width: 5.8rem;
          }

          .projects-dashboard-metric h2 {
            font-size: 1.12rem;
          }

          .projects-dashboard-metric strong {
            font-size: 0.86rem;
          }

          .projects-dashboard-metric p {
            font-size: 0.72rem;
            line-height: 1.3;
          }

          .projects-dashboard-metric-foot {
            gap: 0.55rem;
          }

          .projects-dashboard-widget-add strong {
            font-size: 1.35rem;
          }

          .projects-dashboard-widget-add small {
            font-size: 0.7rem;
          }

          .projects-week-widget,
          .projects-notes-widget,
          .projects-premium-card,
          .projects-completed-widget,
          .projects-team-widget {
            border-radius: 1.25rem;
            padding: 0.85rem;
          }

          .projects-widget-heading {
            margin-bottom: 0.8rem;
          }

          .projects-widget-heading h2,
          .projects-premium-card h2,
          .projects-team-widget h2 {
            font-size: 1.12rem;
          }

          .projects-week-chart {
            min-height: 8.15rem;
            gap: 0.36rem;
            padding-top: 0.7rem;
          }

          .projects-week-bar {
            height: 5.75rem;
            width: min(1.58rem, 100%);
            padding: 0.18rem;
          }

          .projects-week-day {
            gap: 0.34rem;
          }

          .projects-week-day > span {
            font-size: 0.56rem;
          }

          .projects-week-bar strong {
            top: -0.72rem;
            font-size: 0.52rem;
            padding: 0.18rem 0.28rem;
          }

          .projects-note-row {
            grid-template-columns: auto minmax(0, 1fr);
            gap: 0.62rem;
            padding: 0.68rem;
          }

          .projects-note-row > strong {
            grid-column: 2;
            justify-self: start;
            font-size: 0.82rem;
          }

          .projects-premium-card {
            min-height: auto;
          }

          .projects-hero {
            margin-bottom: 1.4rem !important;
          }

          .projects-kicker {
            margin-bottom: 1rem;
            font-size: 0.6rem;
          }

          .projects-hero-note {
            width: 100%;
            justify-content: space-between;
            border-radius: 1rem;
            padding: 0.72rem 0.82rem;
          }

          .project-active-card,
          .projects-about-section {
            border-radius: 1.35rem;
          }

          .projects-active-grid {
            gap: 1rem !important;
            margin-bottom: 2.3rem !important;
          }

          .project-preview {
            min-height: 11.75rem;
            border-radius: 1.15rem;
          }

          .project-active-content {
            padding: 1rem 0.95rem 1rem;
          }

          .project-active-card h2 {
            font-size: 1.25rem;
          }

          .project-active-card p {
            font-size: 0.86rem;
          }

          .project-tags {
            gap: 0.35rem;
          }

          .project-tags span {
            font-size: 0.66rem;
            padding: 0.34rem 0.5rem;
          }

          .projects-about-section {
            padding: 1rem;
          }

          .projects-stat-grid,
          .projects-principle-grid,
          .projects-leadership-grid {
            grid-template-columns: 1fr;
          }

          .projects-about-intro h2 {
            letter-spacing: -0.04em;
          }

          .projects-leadership-section {
            margin-top: 2rem;
            padding-top: 1.5rem;
          }

          .projects-leadership-heading {
            margin-bottom: 1rem;
          }

          .projects-leadership-heading h2 {
            font-size: clamp(2rem, 12vw, 3.35rem);
            letter-spacing: -0.045em;
          }

          .projects-leader-card {
            min-height: auto;
            border-radius: 1.35rem;
            padding: 0.95rem;
          }

          .projects-leader-avatar {
            width: 5.6rem;
            height: 5.6rem;
            border-radius: 1.35rem;
          }

          .projects-leader-avatar span {
            font-size: 2rem;
          }

          .projects-leader-copy {
            margin-top: 1rem;
          }

          .projects-leader-focus {
            position: relative;
            left: auto;
            right: auto;
            bottom: auto;
            margin-top: 1rem;
          }
        }

        /* --- Studio Heads Section --- */
        .studio-heads-section {
          position: relative;
          z-index: 10;
          width: 100%;
          margin-top: clamp(-2.2rem, -2.4vw, -0.8rem);
        }

        .studio-heads-shell {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: clamp(1.4rem, 4vw, 3rem);
          align-items: center;
          border-radius: clamp(1.8rem, 4.5vw, 3.4rem);
          padding: clamp(1.3rem, 4vw, 3.2rem);
          background:
            radial-gradient(circle at 8% 10%, rgba(255,255,255,0.95), transparent 24%),
            radial-gradient(circle at 80% 16%, rgba(16,185,129,0.18), transparent 26%),
            radial-gradient(circle at 52% 92%, rgba(32,80,227,0.12), transparent 32%),
            linear-gradient(135deg, rgba(255,255,255,0.82), rgba(241,245,249,0.58));
          border: 1px solid rgba(255,255,255,0.86);
          box-shadow:
            0 28px 78px rgba(15,23,42,0.08),
            inset 0 1px 0 rgba(255,255,255,0.94);
          backdrop-filter: blur(30px) saturate(1.15);
          -webkit-backdrop-filter: blur(30px) saturate(1.15);
        }

        .studio-heads-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(32,80,227,0.04) 1px, transparent 1px),
            linear-gradient(180deg, rgba(16,185,129,0.035) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(circle at 56% 48%, black, transparent 74%);
          -webkit-mask-image: radial-gradient(circle at 56% 48%, black, transparent 74%);
          pointer-events: none;
        }

        .studio-heads-copy {
          position: relative;
          z-index: 3;
        }

        .studio-heads-copy > span {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          min-height: 2rem;
          padding: 0 0.82rem;
          border-radius: 999px;
          color: #2050e3;
          background: rgba(255,255,255,0.68);
          border: 1px solid rgba(255,255,255,0.86);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.92);
          font-size: 0.68rem;
          font-weight: 560;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .studio-heads-copy i {
          width: 0.48rem;
          height: 0.48rem;
          border-radius: 999px;
          background: #10b981;
          box-shadow: 0 0 0 0.28rem rgba(16,185,129,0.14);
        }

        .studio-heads-copy h2 {
          max-width: 560px;
          margin-top: 1rem;
          color: #0f172a;
          font-size: clamp(2.35rem, 5.2vw, 5.2rem);
          line-height: 0.94;
          font-weight: 300;
          letter-spacing: -0.06em;
        }

        .studio-heads-copy p {
          max-width: 440px;
          margin-top: 1rem;
          color: rgba(15,23,42,0.58);
          font-size: clamp(0.92rem, 1.5vw, 1.05rem);
          line-height: 1.55;
          font-weight: 300;
        }

        .studio-heads-grid {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(0.85rem, 2vw, 1.2rem);
          align-items: stretch;
        }

        .studio-head-card {
          position: relative;
          overflow: hidden;
          min-height: clamp(24rem, 34vw, 30rem);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border-radius: clamp(1.45rem, 3vw, 2rem);
          background:
            radial-gradient(circle at 26% 12%, rgba(255,255,255,0.34), transparent 26%),
            linear-gradient(145deg, rgba(15,23,42,0.9), rgba(32,80,227,0.6));
          border: 1px solid rgba(255,255,255,0.74);
          box-shadow:
            0 24px 60px rgba(15,23,42,0.14),
            inset 0 1px 0 rgba(255,255,255,0.24);
          isolation: isolate;
          transform: translateZ(0);
        }

        .studio-head-card::after {
          content: "";
          position: absolute;
          inset: 0.55rem;
          z-index: 3;
          border-radius: calc(clamp(1.45rem, 3vw, 2rem) - 0.35rem);
          border: 1px solid rgba(255,255,255,0.18);
          pointer-events: none;
          mix-blend-mode: screen;
        }

        .studio-head-card.is-mentor {
          background:
            radial-gradient(circle at 24% 12%, rgba(255,255,255,0.34), transparent 26%),
            linear-gradient(145deg, rgba(120,53,15,0.88), rgba(16,185,129,0.48));
        }

        .studio-head-card::before {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 58%;
          z-index: 2;
          background: linear-gradient(180deg, transparent, rgba(5,10,24,0.82));
          pointer-events: none;
        }

        .studio-head-portrait {
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 18%, rgba(255,255,255,0.16), transparent 36%),
            transparent;
        }

        .studio-head-portrait img {
          width: 100%;
          height: 112%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: saturate(1.05) contrast(1.02);
          transform: translateY(-2%) scale(1.03);
          mask-image: linear-gradient(to bottom, black 0 82%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 0 82%, transparent 100%);
        }

        .studio-head-card.is-founder .studio-head-portrait img {
          object-position: center 18%;
        }

        .studio-head-card.is-mentor .studio-head-portrait img {
          object-position: center top;
        }

        .studio-head-info {
          position: relative;
          z-index: 4;
          padding: 1.2rem;
          color: #fff;
        }

        .studio-head-info small {
          display: inline-flex;
          min-height: 1.8rem;
          align-items: center;
          padding: 0 0.72rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(16px) saturate(1.18);
          -webkit-backdrop-filter: blur(16px) saturate(1.18);
          font-size: 0.62rem;
          font-weight: 620;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .studio-head-info h3 {
          margin-top: 0.72rem;
          font-size: clamp(2.15rem, 4vw, 4.2rem);
          line-height: 0.86;
          font-weight: 360;
          letter-spacing: -0.06em;
        }

        .studio-head-info p {
          max-width: 18rem;
          margin-top: 0.7rem;
          color: rgba(255,255,255,0.76);
          font-size: 0.82rem;
          line-height: 1.36;
          font-weight: 300;
        }

        .studio-heads-note {
          position: absolute;
          left: clamp(1rem, 3vw, 2.2rem);
          right: clamp(1rem, 3vw, 2.2rem);
          bottom: clamp(0.85rem, 2vw, 1.15rem);
          z-index: 5;
          display: flex;
          flex-wrap: wrap;
          gap: 0.48rem;
          pointer-events: none;
        }

        .studio-heads-note span {
          min-height: 1.9rem;
          display: inline-flex;
          align-items: center;
          padding: 0 0.72rem;
          border-radius: 999px;
          color: rgba(15,23,42,0.7);
          background: rgba(255,255,255,0.68);
          border: 1px solid rgba(255,255,255,0.84);
          box-shadow: 0 12px 28px rgba(15,23,42,0.07), inset 0 1px 0 rgba(255,255,255,0.9);
          backdrop-filter: blur(16px) saturate(1.12);
          -webkit-backdrop-filter: blur(16px) saturate(1.12);
          font-size: 0.66rem;
          font-weight: 560;
          letter-spacing: 0.02em;
        }

        @media (max-width: 768px) {
          .studio-heads-shell {
            grid-template-columns: 1fr;
            padding: 1rem 0.8rem 3.7rem;
            border-radius: 1.8rem;
            gap: 1rem;
          }

          .studio-heads-copy h2 {
            font-size: clamp(2.05rem, 10.5vw, 3.2rem);
            max-width: 95%;
          }

          .studio-heads-copy p {
            max-width: 92%;
          }

          .studio-heads-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.62rem;
          }

          .studio-head-card {
            min-height: clamp(17.6rem, 55vw, 21rem);
            border-radius: 1.25rem;
          }

          .studio-head-portrait img {
            height: 108%;
            transform: translateY(-1%) scale(1.04);
          }

          .studio-head-card.is-founder .studio-head-portrait img {
            object-position: 54% 20%;
          }

          .studio-head-card.is-mentor .studio-head-portrait img {
            object-position: 52% top;
          }

          .studio-head-info {
            padding: 0.72rem;
          }

          .studio-head-info small {
            min-height: 1.35rem;
            padding: 0 0.42rem;
            font-size: 0.43rem;
            letter-spacing: 0.08em;
            line-height: 1;
          }

          .studio-head-info h3 {
            margin-top: 0.52rem;
            font-size: clamp(1.55rem, 8vw, 2.2rem);
            letter-spacing: -0.055em;
          }

          .studio-head-info p {
            margin-top: 0.42rem;
            font-size: 0.58rem;
            line-height: 1.22;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .studio-heads-note {
            justify-content: flex-start;
            gap: 0.34rem;
          }

          .studio-heads-note span {
            min-height: 1.55rem;
            padding: 0 0.52rem;
            font-size: 0.54rem;
          }
        }

        /* Studio Heads redesign: balanced portrait cards for every viewport */
        .studio-heads-section {
          margin-top: clamp(-1.2rem, -1.8vw, -0.3rem);
        }

        .studio-heads-shell {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.25rem, 3vw, 2rem);
          padding: clamp(1.1rem, 3vw, 2.4rem);
          border-radius: clamp(1.6rem, 4vw, 3rem);
          background:
            radial-gradient(circle at 18% 12%, rgba(255,255,255,0.96), transparent 19rem),
            radial-gradient(circle at 84% 18%, rgba(32,80,227,0.13), transparent 17rem),
            radial-gradient(circle at 50% 100%, rgba(16,185,129,0.15), transparent 19rem),
            linear-gradient(145deg, rgba(255,255,255,0.86), rgba(245,248,255,0.62));
          border: 1px solid rgba(255,255,255,0.86);
          box-shadow:
            0 24px 72px rgba(15,23,42,0.075),
            inset 0 1px 0 rgba(255,255,255,0.96);
        }

        .studio-heads-shell::before {
          background:
            linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px),
            linear-gradient(180deg, rgba(15,23,42,0.035) 1px, transparent 1px);
          background-size: clamp(2.8rem, 5vw, 4.4rem) clamp(2.8rem, 5vw, 4.4rem);
          mask-image: linear-gradient(to bottom, black, transparent 78%);
          -webkit-mask-image: linear-gradient(to bottom, black, transparent 78%);
          opacity: 0.62;
        }

        .studio-heads-copy {
          text-align: center;
          justify-self: center;
          max-width: 720px;
        }

        .studio-heads-copy > span {
          min-height: 2.05rem;
          padding: 0 0.86rem;
          background: rgba(255,255,255,0.78);
          color: #2050e3;
          box-shadow: 0 10px 24px rgba(32,80,227,0.08), inset 0 1px 0 rgba(255,255,255,0.94);
        }

        .studio-heads-copy h2 {
          margin: 0.95rem auto 0;
          max-width: 720px;
          font-size: clamp(2.3rem, 5.2vw, 5.35rem);
          line-height: 0.96;
          font-weight: 330;
          letter-spacing: -0.06em;
        }

        .studio-heads-copy p {
          margin: 0.9rem auto 0;
          max-width: 520px;
          color: rgba(15,23,42,0.62);
        }

        .studio-heads-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(0.9rem, 2.5vw, 1.5rem);
          align-items: stretch;
        }

        .studio-head-card {
          min-height: auto;
          display: grid;
          grid-template-columns: minmax(9rem, 0.72fr) minmax(0, 1fr);
          align-items: center;
          gap: clamp(0.9rem, 2vw, 1.25rem);
          padding: clamp(0.72rem, 1.8vw, 1rem);
          border-radius: clamp(1.35rem, 3vw, 2rem);
          background:
            radial-gradient(circle at 12% 8%, rgba(255,255,255,0.95), transparent 6rem),
            linear-gradient(145deg, rgba(255,255,255,0.78), rgba(241,245,249,0.6));
          color: #0f172a;
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow:
            0 22px 54px rgba(15,23,42,0.09),
            inset 0 1px 0 rgba(255,255,255,0.96);
          backdrop-filter: blur(22px) saturate(1.12);
          -webkit-backdrop-filter: blur(22px) saturate(1.12);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .studio-head-card:hover {
          transform: translateY(-0.22rem);
          box-shadow:
            0 30px 70px rgba(15,23,42,0.13),
            inset 0 1px 0 rgba(255,255,255,0.98);
        }

        .studio-head-card.is-founder,
        .studio-head-card.is-mentor {
          background:
            radial-gradient(circle at 12% 8%, rgba(255,255,255,0.95), transparent 6rem),
            linear-gradient(145deg, rgba(255,255,255,0.8), rgba(238,246,255,0.62));
        }

        .studio-head-card.is-mentor {
          background:
            radial-gradient(circle at 12% 8%, rgba(255,255,255,0.94), transparent 6rem),
            linear-gradient(145deg, rgba(255,255,255,0.8), rgba(255,247,237,0.62));
        }

        .studio-head-card::before {
          inset: auto 0 0;
          height: 42%;
          background: linear-gradient(180deg, transparent, rgba(255,255,255,0.66));
          opacity: 0.75;
        }

        .studio-head-card::after {
          inset: 0.45rem;
          border-color: rgba(255,255,255,0.74);
          mix-blend-mode: normal;
        }

        .studio-head-portrait {
          position: relative;
          inset: auto;
          width: 100%;
          aspect-ratio: 4 / 5.15;
          border-radius: 1.35rem;
          background:
            radial-gradient(circle at 50% 8%, rgba(255,255,255,0.42), transparent 35%),
            linear-gradient(145deg, rgba(32,80,227,0.2), rgba(16,185,129,0.16));
          border: 1px solid rgba(255,255,255,0.86);
          box-shadow:
            0 18px 38px rgba(15,23,42,0.12),
            inset 0 1px 0 rgba(255,255,255,0.82);
        }

        .studio-head-card.is-mentor .studio-head-portrait {
          background:
            radial-gradient(circle at 50% 8%, rgba(255,255,255,0.36), transparent 35%),
            linear-gradient(145deg, rgba(245,158,11,0.22), rgba(32,80,227,0.12));
        }

        .studio-head-portrait img {
          height: 100%;
          transform: none;
          object-fit: cover;
          object-position: center;
          mask-image: linear-gradient(to bottom, black 0 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 0 100%);
        }

        .studio-head-card.is-founder .studio-head-portrait img {
          object-position: 54% 20%;
        }

        .studio-head-card.is-mentor .studio-head-portrait img {
          object-position: 52% 12%;
        }

        .studio-head-info {
          position: relative;
          z-index: 4;
          padding: clamp(0.2rem, 1vw, 0.4rem);
          color: #0f172a;
          min-width: 0;
          overflow: visible;
        }

        .studio-head-info small {
          min-height: 1.85rem;
          padding: 0 0.7rem;
          color: #2050e3;
          background: rgba(32,80,227,0.08);
          border: 1px solid rgba(32,80,227,0.12);
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          font-size: 0.62rem;
        }

        .studio-head-card.is-mentor .studio-head-info small {
          color: #047857;
          background: rgba(16,185,129,0.1);
          border-color: rgba(16,185,129,0.14);
        }

        .studio-head-info h3 {
          margin-top: 0.75rem;
          color: #0f172a;
          max-width: 100%;
          overflow: visible;
          font-size: clamp(2.05rem, 4.2vw, 4.25rem);
          line-height: 0.98;
          font-weight: 330;
          letter-spacing: -0.035em;
          white-space: nowrap;
        }

        .studio-head-info p {
          margin-top: 0.75rem;
          max-width: 19rem;
          color: rgba(15,23,42,0.62);
          font-size: clamp(0.78rem, 1.2vw, 0.9rem);
          line-height: 1.42;
        }

        .studio-heads-note {
          position: relative;
          left: auto;
          right: auto;
          bottom: auto;
          justify-content: center;
          margin-top: -0.35rem;
        }

        .studio-heads-note span {
          color: rgba(15,23,42,0.68);
          background: rgba(255,255,255,0.72);
        }

        @media (max-width: 900px) {
          .studio-head-card {
            grid-template-columns: 1fr;
            gap: 0.7rem;
          }

          .studio-head-portrait {
            aspect-ratio: 4 / 4.7;
          }
        }

        @media (max-width: 768px) {
          .studio-heads-shell {
            padding: 1rem 0.78rem 1rem;
            gap: 0.95rem;
          }

          .studio-heads-copy {
            text-align: left;
            justify-self: stretch;
          }

          .studio-heads-copy h2 {
            max-width: 100%;
            font-size: clamp(2rem, 10.2vw, 3rem);
            line-height: 0.98;
          }

          .studio-heads-copy p {
            max-width: 100%;
            font-size: 0.82rem;
            line-height: 1.45;
          }

          .studio-heads-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.55rem;
          }

          .studio-head-card {
            min-height: auto;
            grid-template-columns: 1fr;
            padding: 0.48rem;
            gap: 0.55rem;
            border-radius: 1.25rem;
          }

          .studio-head-portrait {
            aspect-ratio: 1 / 1.22;
            border-radius: 1rem;
          }

          .studio-head-info {
            padding: 0.08rem 0.12rem 0.18rem;
          }

          .studio-head-info small {
            min-height: 1.25rem;
            padding: 0 0.42rem;
            font-size: 0.43rem;
            letter-spacing: 0.075em;
            white-space: normal;
          }

          .studio-head-info h3 {
            margin-top: 0.42rem;
            font-size: clamp(1.28rem, 6.5vw, 1.8rem);
            line-height: 1;
            letter-spacing: -0.035em;
          }

          .studio-head-info p {
            margin-top: 0.38rem;
            font-size: 0.56rem;
            line-height: 1.2;
            -webkit-line-clamp: 3;
          }

          .studio-heads-note {
            justify-content: flex-start;
            margin-top: -0.1rem;
          }
        }

        .launch-provider-matrix {
          position: relative;
          z-index: 2;
          margin-top: clamp(1.1rem, 3vw, 2rem);
          padding: clamp(1rem, 3vw, 1.55rem);
          border-radius: 1.55rem;
          background:
            radial-gradient(circle at 8% 0%, rgba(16,185,129,0.14), transparent 14rem),
            radial-gradient(circle at 92% 20%, rgba(32,80,227,0.15), transparent 14rem),
            linear-gradient(145deg, rgba(255,255,255,0.76), rgba(240,247,255,0.58));
          border: 1px solid rgba(255,255,255,0.82);
          box-shadow: 0 22px 62px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
          backdrop-filter: blur(24px) saturate(1.16);
          -webkit-backdrop-filter: blur(24px) saturate(1.16);
        }

        .launch-provider-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.78rem;
        }

        .launch-provider-card {
          position: relative;
          overflow: hidden;
          min-height: 15.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1rem;
          padding: 1rem;
          border-radius: 1.2rem;
          background:
            radial-gradient(circle at 20% 0%, rgba(255,255,255,0.92), transparent 5.5rem),
            linear-gradient(145deg, rgba(255,255,255,0.78), rgba(248,250,252,0.52));
          border: 1px solid rgba(255,255,255,0.86);
          box-shadow: 0 15px 34px rgba(15,23,42,0.055), inset 0 1px 0 rgba(255,255,255,0.92);
        }

        .launch-provider-card::before {
          content: "";
          position: absolute;
          width: 8rem;
          height: 8rem;
          right: -3rem;
          top: -3rem;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(32,80,227,0.18), rgba(16,185,129,0.14));
          filter: blur(8px);
          pointer-events: none;
        }

        .launch-provider-top {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.82rem;
        }

        .launch-provider-top > span {
          width: 2.65rem;
          height: 2.65rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.9rem;
          color: #fff;
          background:
            radial-gradient(circle at 28% 16%, rgba(255,255,255,0.38), transparent 28%),
            linear-gradient(145deg, #2050e3, #10b981);
          box-shadow: 0 14px 30px rgba(32,80,227,0.16);
        }

        .launch-provider-card h3 {
          margin: 0;
          color: #0f172a;
          font-size: 1.02rem;
          line-height: 1.08;
          font-weight: 560;
          letter-spacing: -0.035em;
        }

        .launch-provider-card p {
          margin: 0.42rem 0 0;
          color: rgba(15,23,42,0.58);
          font-size: 0.74rem;
          line-height: 1.42;
          font-weight: 300;
        }

        .launch-provider-tags {
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 0.38rem;
        }

        .launch-provider-tags span {
          min-height: 1.65rem;
          display: inline-flex;
          align-items: center;
          padding: 0 0.52rem;
          border-radius: 999px;
          color: rgba(15,23,42,0.72);
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(226,232,240,0.74);
          font-size: 0.62rem;
          font-weight: 460;
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .launch-provider-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .launch-provider-matrix {
            padding: 0.85rem;
            border-radius: 1.25rem;
          }

          .launch-provider-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 0.25rem;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .launch-provider-grid::-webkit-scrollbar {
            display: none;
          }

          .launch-provider-card {
            min-width: 82%;
            min-height: 14.5rem;
            scroll-snap-align: start;
          }
        }

        /* Studio Heads vivid direction */
        .studio-heads-shell {
          background:
            radial-gradient(circle at 8% 12%, rgba(255,214,102,0.26), transparent 13rem),
            radial-gradient(circle at 82% 10%, rgba(34,211,238,0.24), transparent 15rem),
            radial-gradient(circle at 50% 100%, rgba(244,114,182,0.2), transparent 18rem),
            linear-gradient(135deg, rgba(255,255,255,0.86), rgba(239,246,255,0.7) 48%, rgba(240,253,244,0.66));
        }

        .studio-heads-copy > span {
          color: #0f172a;
          background:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.96), transparent 44%),
            linear-gradient(135deg, rgba(255,214,102,0.72), rgba(34,211,238,0.36), rgba(244,114,182,0.34));
          border-color: rgba(255,255,255,0.9);
        }

        .studio-heads-copy i {
          background: #2050e3;
          box-shadow: 0 0 0 0.28rem rgba(32,80,227,0.12);
        }

        .studio-head-card.is-founder {
          background:
            radial-gradient(circle at 12% 0%, rgba(255,214,102,0.42), transparent 7rem),
            radial-gradient(circle at 100% 18%, rgba(32,80,227,0.16), transparent 7rem),
            linear-gradient(145deg, rgba(255,255,255,0.86), rgba(239,246,255,0.68));
        }

        .studio-head-card.is-mentor {
          background:
            radial-gradient(circle at 12% 0%, rgba(244,114,182,0.3), transparent 7rem),
            radial-gradient(circle at 100% 18%, rgba(16,185,129,0.18), transparent 7rem),
            linear-gradient(145deg, rgba(255,255,255,0.86), rgba(255,247,237,0.68));
        }

        .studio-head-card.is-founder .studio-head-portrait {
          background:
            radial-gradient(circle at 30% 12%, rgba(255,255,255,0.58), transparent 34%),
            linear-gradient(145deg, rgba(32,80,227,0.28), rgba(255,214,102,0.28));
        }

        .studio-head-card.is-mentor .studio-head-portrait {
          background:
            radial-gradient(circle at 30% 12%, rgba(255,255,255,0.54), transparent 34%),
            linear-gradient(145deg, rgba(244,114,182,0.26), rgba(16,185,129,0.24));
        }

        .studio-head-info small {
          color: #0f172a;
          background: rgba(255,255,255,0.74);
          border-color: rgba(255,255,255,0.88);
          box-shadow: 0 10px 24px rgba(15,23,42,0.06);
        }

        .studio-head-card.is-mentor .studio-head-info small {
          color: #0f172a;
          background: rgba(255,255,255,0.74);
          border-color: rgba(255,255,255,0.88);
        }

        .studio-heads-note span:nth-child(1) {
          background: rgba(255,214,102,0.38);
        }

        .studio-heads-note span:nth-child(2) {
          background: rgba(34,211,238,0.22);
        }

        .studio-heads-note span:nth-child(3) {
          background: rgba(244,114,182,0.22);
        }

        /* --- Replit-inspired Global Partner Carousel --- */
        .global-partner-section {
          position: relative;
          z-index: 10;
          width: 100%;
          margin-top: clamp(-2.6rem, -3vw, -1rem);
        }

        .global-partner-shell {
          position: relative;
          overflow: hidden;
          border-radius: clamp(1.6rem, 4vw, 3.2rem);
          padding: clamp(1.2rem, 3.4vw, 2.7rem) 0;
          background:
            radial-gradient(circle at 12% 12%, rgba(255,255,255,0.92), transparent 24%),
            radial-gradient(circle at 88% 18%, rgba(16,185,129,0.18), transparent 26%),
            radial-gradient(circle at 48% 92%, rgba(32,80,227,0.12), transparent 30%),
            linear-gradient(135deg, rgba(255,255,255,0.76), rgba(241,245,249,0.5));
          border: 1px solid rgba(255,255,255,0.84);
          box-shadow:
            0 24px 72px rgba(15,23,42,0.07),
            inset 0 1px 0 rgba(255,255,255,0.94);
          backdrop-filter: blur(30px) saturate(1.14);
          -webkit-backdrop-filter: blur(30px) saturate(1.14);
        }

        .global-partner-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(32,80,227,0.045) 1px, transparent 1px),
            linear-gradient(180deg, rgba(16,185,129,0.04) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: linear-gradient(to bottom, black, transparent 82%);
          -webkit-mask-image: linear-gradient(to bottom, black, transparent 82%);
          pointer-events: none;
        }

        .global-partner-shell::after {
          content: "";
          position: absolute;
          width: 18rem;
          height: 18rem;
          right: -5rem;
          top: -6rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(32,80,227,0.16), transparent 68%);
          filter: blur(12px);
          pointer-events: none;
          animation: global-partner-glow 8s ease-in-out infinite;
        }

        .global-partner-header {
          position: relative;
          z-index: 2;
          width: min(760px, calc(100% - 2rem));
          margin: 0 auto clamp(1.15rem, 3vw, 2rem);
          text-align: center;
        }

        .global-partner-header > span {
          display: inline-flex;
          align-items: center;
          gap: 0.46rem;
          min-height: 2rem;
          padding: 0 0.78rem;
          border-radius: 999px;
          color: #2050e3;
          background: rgba(255,255,255,0.62);
          border: 1px solid rgba(255,255,255,0.82);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.92);
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .global-partner-header i {
          width: 0.48rem;
          height: 0.48rem;
          border-radius: 999px;
          background: #10b981;
          box-shadow: 0 0 0 0.28rem rgba(16,185,129,0.14);
        }

        .global-partner-header h2 {
          margin-top: 0.85rem;
          color: #0f172a;
          font-size: clamp(2.1rem, 5.4vw, 5.6rem);
          line-height: 0.96;
          font-weight: 300;
          letter-spacing: -0.055em;
        }

        .global-partner-header p {
          max-width: 560px;
          margin: 0.95rem auto 0;
          color: rgba(15,23,42,0.58);
          font-size: clamp(0.92rem, 1.5vw, 1.05rem);
          line-height: 1.55;
          font-weight: 300;
        }

        .global-logo-stage {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 0.72rem;
          overflow: hidden;
          padding: 0.25rem 0;
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
        }

        .global-logo-stage::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(860px, 72vw);
          height: 7rem;
          transform: translate(-50%, -50%);
          border-radius: 999px;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.52), rgba(236,253,245,0.32), rgba(239,246,255,0.36));
          border: 1px solid rgba(255,255,255,0.62);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.78);
          pointer-events: none;
        }

        .global-logo-rail {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: clamp(0.55rem, 1.6vw, 1rem);
          width: max-content;
          will-change: transform;
        }

        .global-logo-rail-one {
          animation: global-logo-scroll-left 38s linear infinite;
        }

        .global-logo-rail-two {
          animation: global-logo-scroll-right 42s linear infinite;
        }

        .global-logo-stage:hover .global-logo-rail {
          animation-play-state: paused;
        }

        .global-logo-card {
          min-width: clamp(9.6rem, 17vw, 13rem);
          min-height: clamp(3.15rem, 5vw, 4rem);
          display: inline-flex;
          align-items: center;
          gap: 0.72rem;
          padding: 0.52rem 0.72rem;
          border-radius: 999px;
          color: #0f172a;
          background: rgba(255,255,255,0.62);
          border: 1px solid rgba(255,255,255,0.86);
          box-shadow:
            0 14px 34px rgba(15,23,42,0.055),
            inset 0 1px 0 rgba(255,255,255,0.94);
          backdrop-filter: blur(22px) saturate(1.12);
          -webkit-backdrop-filter: blur(22px) saturate(1.12);
          transition: transform 0.24s ease, background 0.24s ease, box-shadow 0.24s ease;
        }

        .global-logo-card:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.8);
          box-shadow:
            0 18px 44px rgba(32,80,227,0.11),
            inset 0 1px 0 rgba(255,255,255,0.96);
        }

        .global-logo-card.is-soft {
          background: rgba(255,255,255,0.48);
        }

        .global-logo-card span {
          width: 2.15rem;
          height: 2.15rem;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border-radius: 999px;
          color: #ffffff;
          background:
            radial-gradient(circle at 24% 18%, rgba(255,255,255,0.28), transparent 30%),
            linear-gradient(135deg, #2050e3, #10b981);
          box-shadow: 0 10px 24px rgba(32,80,227,0.16);
        }

        .global-logo-card strong {
          color: rgba(15,23,42,0.78);
          font-size: clamp(0.88rem, 1.25vw, 1rem);
          font-weight: 420;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }

        .global-partner-foot {
          position: relative;
          z-index: 2;
          width: min(820px, calc(100% - 2rem));
          margin: clamp(1rem, 3vw, 1.8rem) auto 0;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.55rem;
        }

        .global-partner-foot span {
          border-radius: 999px;
          padding: 0.52rem 0.76rem;
          color: rgba(15,23,42,0.62);
          background: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.72);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.82);
          font-size: 0.72rem;
          font-weight: 400;
        }

        @media (max-width: 640px) {
          .global-partner-section {
            margin-top: -0.4rem !important;
          }

          .global-partner-shell {
            border-radius: 1.55rem !important;
            padding: 1.15rem 0 1.05rem !important;
          }

          .global-partner-header {
            margin-bottom: 0.95rem;
          }

          .global-partner-header h2 {
            font-size: clamp(2rem, 11vw, 3.15rem) !important;
            line-height: 1.02 !important;
            letter-spacing: -0.045em !important;
            margin-bottom: 0 !important;
          }

          .global-partner-header p {
            font-size: 0.86rem !important;
            line-height: 1.45 !important;
            margin-top: 0.72rem !important;
            margin-bottom: 0 !important;
          }

          .global-logo-stage {
            gap: 0.55rem;
          }

          .global-logo-card {
            min-width: 8.75rem;
            min-height: 3rem;
            padding: 0.46rem 0.58rem;
          }

          .global-logo-card span {
            width: 1.9rem;
            height: 1.9rem;
          }

          .global-logo-card strong {
            font-size: 0.82rem;
          }

          .global-partner-foot {
            margin-top: 0.9rem;
            justify-content: flex-start;
            overflow-x: auto;
            flex-wrap: nowrap;
            padding: 0 1rem 0.2rem;
            scrollbar-width: none;
          }

          .global-partner-foot::-webkit-scrollbar {
            display: none;
          }

          .global-partner-foot span {
            flex: 0 0 auto;
            font-size: 0.66rem;
          }
        }

        /* --- Global Partners Deep-Link Layout --- */
        .global-partner-section .global-partner-shell {
          min-height: clamp(25rem, 44vw, 32rem);
          display: grid;
          place-items: center;
          padding: clamp(2rem, 4.5vw, 3.6rem) clamp(1rem, 3vw, 2.4rem) clamp(5.5rem, 10vw, 7rem) !important;
          border-radius: 0 !important;
          background:
            linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px) 10% 0 / 18.5% 100%,
            linear-gradient(180deg, rgba(15,23,42,0.035) 1px, transparent 1px) 0 18% / 100% 7.5rem,
            radial-gradient(circle at 30% 22%, rgba(14,165,233,0.11), transparent 16rem),
            radial-gradient(circle at 68% 30%, rgba(236,72,153,0.12), transparent 16rem),
            linear-gradient(180deg, #ffffff 0%, #f7fbff 48%, #fff7fb 100%);
          border: 1px solid rgba(226,232,240,0.78);
          box-shadow: none;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }

        .global-partner-section .global-partner-shell::before {
          inset: 0;
          background:
            radial-gradient(circle at 50% 51%, rgba(255,255,255,0.82), transparent 16rem),
            linear-gradient(90deg, transparent 0 7%, rgba(148,163,184,0.26) 7% 7.1%, transparent 7.1% 92.9%, rgba(148,163,184,0.26) 93% 93.1%, transparent 93.1%);
          mask-image: none;
          -webkit-mask-image: none;
          opacity: 0.72;
        }

        .global-partner-section .global-partner-shell::after {
          display: none;
        }

        .global-circuit-line {
          position: absolute;
          top: 72%;
          width: 42%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(148,163,184,0.34), rgba(148,163,184,0.18));
          z-index: 1;
        }

        .global-circuit-line::before,
        .global-circuit-line::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 2.6rem;
          height: 0.72rem;
          border: 1px solid rgba(148,163,184,0.28);
          border-radius: 999px;
          background: rgba(255,255,255,0.82);
          transform: translateY(-50%);
        }

        .global-circuit-line-left {
          left: 0;
        }

        .global-circuit-line-right {
          right: 0;
          transform: scaleX(-1);
        }

        .global-circuit-line-left::before,
        .global-circuit-line-right::before {
          right: 18%;
        }

        .global-circuit-line-left::after,
        .global-circuit-line-right::after {
          right: 2%;
          width: 4rem;
        }

        .global-partner-orbit {
          position: absolute;
          left: 50%;
          top: clamp(10.2rem, 21vw, 13.8rem);
          width: min(680px, 88vw);
          height: clamp(11rem, 20vw, 14rem);
          z-index: 3;
          pointer-events: none;
          transform: translateX(-50%);
          --arch-radius: clamp(7.4rem, 20vw, 11.6rem);
          animation: global-arch-sway 9s ease-in-out infinite;
        }

        .global-partner-orbit::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 92%;
          width: min(610px, 82vw);
          height: clamp(10rem, 20vw, 13.5rem);
          border-radius: 50% 50% 0 0 / 100% 100% 0 0;
          border-top: 1px solid rgba(148,163,184,0.34);
          border-left: 1px solid rgba(148,163,184,0.1);
          border-right: 1px solid rgba(148,163,184,0.1);
          transform: translate(-50%, -100%);
          background:
            radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.44), transparent 62%);
          opacity: 0.8;
        }

        .global-partner-orbit::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 92%;
          width: min(610px, 82vw);
          height: clamp(10rem, 20vw, 13.5rem);
          border-radius: 50% 50% 0 0 / 100% 100% 0 0;
          border-top: 2px solid transparent;
          border-image: linear-gradient(90deg, transparent, rgba(32,80,227,0.35), rgba(16,185,129,0.3), transparent) 1;
          transform: translate(-50%, -100%);
          filter: blur(0.4px);
          animation: global-arch-shimmer 4.8s ease-in-out infinite;
        }

        .global-partner-bubble {
          position: absolute;
          left: 50%;
          top: 91%;
          width: var(--bubble-size);
          height: var(--bubble-size);
          display: grid;
          place-items: center;
          border-radius: 999px;
          color: #ffffff;
          background:
            radial-gradient(circle at 28% 18%, rgba(255,255,255,0.76), transparent 26%),
            var(--bubble-color);
          box-shadow:
            0 18px 34px color-mix(in srgb, var(--bubble-color), transparent 72%),
            inset 0 1px 2px rgba(255,255,255,0.5);
          transform:
            translate(-50%, -50%)
            rotate(var(--bubble-angle))
            translateY(calc(var(--arch-radius) * -1))
            rotate(var(--bubble-counter));
          animation: global-bubble-necklace-loop 12s linear infinite;
          animation-delay: var(--bubble-delay);
        }

        .global-partner-bubble::after {
          content: "";
          position: absolute;
          inset: -0.38rem;
          border-radius: inherit;
          border: 1px solid color-mix(in srgb, var(--bubble-color), transparent 70%);
          opacity: 0.36;
          animation: global-bubble-ring 2.8s ease-in-out infinite;
          animation-delay: var(--bubble-delay);
        }

        .global-partner-section .global-partner-header {
          z-index: 4;
          width: min(520px, calc(100% - 2rem));
          margin: clamp(-0.8rem, -1vw, 0rem) auto 0;
          text-align: center;
          animation: global-copy-rise 0.8s ease-out both;
        }

        .global-partner-section .global-partner-header > span {
          min-height: 1.55rem;
          padding: 0 0.62rem;
          color: rgba(15,23,42,0.52);
          background: rgba(255,255,255,0.72);
          border-color: rgba(226,232,240,0.72);
          font-size: 0.52rem;
          font-weight: 400;
          letter-spacing: 0.1em;
        }

        .global-partner-section .global-partner-header i {
          display: none;
        }

        .global-partner-section .global-partner-header h2 {
          max-width: 460px;
          margin: 0.72rem auto 0;
          color: #0f172a;
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.02;
          font-weight: 400;
          letter-spacing: -0.052em;
        }

        .global-partner-section .global-partner-header p {
          max-width: 330px;
          margin-top: 0.72rem;
          color: rgba(15,23,42,0.58);
          font-size: 0.78rem;
          line-height: 1.48;
          font-weight: 300;
        }

        .global-partner-section .global-partner-header button {
          margin-top: 0.8rem;
          min-height: 2rem;
          border-radius: 999px;
          padding: 0 0.82rem;
          color: #0f172a;
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(226,232,240,0.88);
          box-shadow: 0 10px 24px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.88);
          font-size: 0.72rem;
          font-weight: 400;
          transition: transform 0.24s ease, box-shadow 0.24s ease;
        }

        .global-partner-section .global-partner-header button:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(32,80,227,0.12), inset 0 1px 0 rgba(255,255,255,0.9);
        }

        .global-link-card {
          position: relative;
          z-index: 4;
          width: min(430px, calc(100% - 2rem));
          border-radius: 1rem;
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(226,232,240,0.78);
          box-shadow:
            0 24px 54px rgba(15,23,42,0.08),
            inset 0 1px 0 rgba(255,255,255,0.92);
          backdrop-filter: blur(24px) saturate(1.12);
          -webkit-backdrop-filter: blur(24px) saturate(1.12);
          animation: global-card-float 6.2s ease-in-out infinite;
        }

        .global-link-card-top {
          min-height: 2.55rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0 0.85rem;
          border-bottom: 1px solid rgba(226,232,240,0.68);
        }

        .global-link-card-top div {
          display: inline-flex;
          align-items: center;
          gap: 0.48rem;
          min-width: 0;
        }

        .global-link-avatar {
          width: 1.45rem;
          height: 1.45rem;
          display: grid;
          place-items: center;
          border-radius: 999px;
          color: #ffffff;
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
        }

        .global-link-card-top strong {
          color: #0f172a;
          font-size: 0.72rem;
          font-weight: 420;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .global-link-card-top small {
          border-radius: 999px;
          padding: 0.22rem 0.42rem;
          color: #8b5cf6;
          background: rgba(139,92,246,0.08);
          border: 1px solid rgba(139,92,246,0.1);
          font-size: 0.5rem;
          font-weight: 400;
          letter-spacing: 0.08em;
        }

        .global-link-card-body {
          padding: 0.8rem;
        }

        .global-link-card-body > span {
          display: block;
          color: rgba(15,23,42,0.66);
          font-size: 0.62rem;
          font-weight: 400;
          margin-bottom: 0.52rem;
        }

        .global-link-card-body div {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 0.62rem;
        }

        .global-link-card-body em {
          border-radius: 999px;
          padding: 0.28rem 0.5rem;
          color: rgba(15,23,42,0.58);
          background: rgba(248,250,252,0.9);
          border: 1px solid rgba(226,232,240,0.7);
          font-size: 0.56rem;
          font-style: normal;
        }

        .global-link-card-body p {
          min-height: 2rem;
          display: flex;
          align-items: center;
          gap: 0.38rem;
          margin: 0;
          border-radius: 0.58rem;
          padding: 0 0.58rem;
          color: rgba(15,23,42,0.62);
          background: rgba(255,255,255,0.82);
          border: 1px solid rgba(226,232,240,0.74);
          font-size: 0.68rem;
          font-weight: 300;
        }

        @media (max-width: 640px) {
          .global-partner-section .global-partner-shell {
            min-height: 28rem;
            padding: 1.65rem 0.75rem 5.3rem !important;
          }

          .global-partner-section .global-partner-header {
            margin: 0 auto;
            width: min(340px, 100%);
          }

          .global-partner-section .global-partner-header h2 {
            font-size: clamp(1.86rem, 8.2vw, 2.45rem) !important;
            line-height: 1.06 !important;
          }

          .global-partner-section .global-partner-header p {
            max-width: 280px;
            font-size: 0.72rem !important;
          }

          .global-partner-bubble {
            width: calc(var(--bubble-size) * 0.78);
            height: calc(var(--bubble-size) * 0.78);
          }

          .global-partner-orbit {
            top: 12.2rem;
            width: min(370px, 94vw);
            height: 10rem;
            --arch-radius: clamp(5.8rem, 28vw, 7.4rem);
          }

          .global-circuit-line {
            top: 76%;
            width: 33%;
          }
        }

        @keyframes global-bubble-float {
          0%, 100% { transform: translate(-50%, -50%) translate3d(0, 0, 0) scale(1); }
          50% { transform: translate(-50%, -50%) translate3d(0, -0.45rem, 0) scale(1.06); }
        }

        @keyframes global-bubble-arch-float {
          0%, 100% {
            transform:
              translate(-50%, -50%)
              rotate(var(--bubble-angle))
              translateY(calc(var(--arch-radius) * -1))
              rotate(var(--bubble-counter))
              translate3d(0, 0, 0)
              scale(1);
          }
          50% {
            transform:
              translate(-50%, -50%)
              rotate(var(--bubble-angle))
              translateY(calc(var(--arch-radius) * -1))
              rotate(var(--bubble-counter))
              translate3d(0, -0.42rem, 0)
              scale(1.06);
          }
        }

        @keyframes global-bubble-necklace-loop {
          0% {
            transform:
              translate(-50%, -50%)
              rotate(var(--bubble-angle))
              translateY(calc(var(--arch-radius) * -1))
              rotate(var(--bubble-counter));
          }
          100% {
            transform:
              translate(-50%, -50%)
              rotate(calc(var(--bubble-angle) + 360deg))
              translateY(calc(var(--arch-radius) * -1))
              rotate(calc(var(--bubble-counter) - 360deg));
          }
        }

        @keyframes global-arch-sway {
          0%, 100% { transform: translateX(-50%) rotate(-0.6deg); }
          50% { transform: translateX(-50%) rotate(0.6deg); }
        }

        @keyframes global-arch-shimmer {
          0%, 100% { opacity: 0.22; filter: blur(0.7px); }
          50% { opacity: 0.82; filter: blur(0); }
        }

        @keyframes global-bubble-ring {
          0%, 100% { transform: scale(0.92); opacity: 0.2; }
          50% { transform: scale(1.12); opacity: 0.46; }
        }

        @keyframes global-card-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -0.35rem, 0); }
        }

        @keyframes global-copy-rise {
          from { opacity: 0; transform: translateY(0.8rem); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* --- Minimal Professional Client Strip --- */
        .global-partner-section .global-partner-shell {
          min-height: auto;
          display: block;
          padding: clamp(1.55rem, 4vw, 3rem) 0 !important;
          border-radius: clamp(1.55rem, 3.4vw, 2.6rem) !important;
          background:
            radial-gradient(circle at 16% 8%, rgba(255,255,255,0.92), transparent 20rem),
            linear-gradient(135deg, rgba(255,255,255,0.78), rgba(248,250,252,0.56));
          border: 1px solid rgba(255,255,255,0.84);
          box-shadow:
            0 22px 64px rgba(15,23,42,0.06),
            inset 0 1px 0 rgba(255,255,255,0.94);
          backdrop-filter: blur(28px) saturate(1.1);
          -webkit-backdrop-filter: blur(28px) saturate(1.1);
        }

        .global-partner-section .global-partner-shell::before {
          background:
            linear-gradient(90deg, rgba(32,80,227,0.04) 1px, transparent 1px),
            linear-gradient(180deg, rgba(15,23,42,0.025) 1px, transparent 1px);
          background-size: 52px 52px;
          opacity: 0.48;
        }

        .global-partner-section .global-partner-header {
          width: min(720px, calc(100% - 2rem));
          margin: 0 auto clamp(1.05rem, 3vw, 1.85rem);
          text-align: center;
        }

        .global-partner-section .global-partner-header > span {
          min-height: 2rem;
          padding: 0 0.8rem;
          color: #2050e3;
          background: rgba(255,255,255,0.68);
          border: 1px solid rgba(255,255,255,0.84);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.9);
          font-size: 0.66rem;
          font-weight: 420;
          letter-spacing: 0.08em;
        }

        .global-partner-section .global-partner-header i {
          display: inline-block;
          width: 0.44rem;
          height: 0.44rem;
          border-radius: 999px;
          background: #10b981;
          box-shadow: 0 0 0 0.24rem rgba(16,185,129,0.12);
        }

        .global-partner-section .global-partner-header h2 {
          max-width: 680px;
          margin: 0.86rem auto 0;
          color: #0f172a;
          font-size: clamp(2rem, 5vw, 4.7rem);
          line-height: 0.98;
          font-weight: 300;
          letter-spacing: -0.055em;
        }

        .global-partner-section .global-partner-header p {
          max-width: 540px;
          margin: 0.92rem auto 0;
          color: rgba(15,23,42,0.58);
          font-size: clamp(0.88rem, 1.4vw, 1rem);
          line-height: 1.58;
          font-weight: 300;
        }

        .global-client-strip {
          position: relative;
          z-index: 2;
          overflow: hidden;
          padding: 0.38rem 0;
          mask-image: linear-gradient(to right, transparent, black 11%, black 89%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 11%, black 89%, transparent);
        }

        .global-client-strip.is-secondary {
          opacity: 0.72;
        }

        .global-client-rail {
          display: flex;
          align-items: center;
          gap: 0.72rem;
          width: max-content;
          padding-left: 1rem;
          animation: global-client-marquee 34s linear infinite;
          will-change: transform;
        }

        .global-client-rail.is-reverse {
          animation: global-client-marquee-reverse 38s linear infinite;
        }

        .global-client-strip:hover .global-client-rail {
          animation-play-state: paused;
        }

        .global-client-logo {
          min-width: clamp(8.5rem, 16vw, 12rem);
          min-height: 3.1rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          border-radius: 999px;
          color: rgba(15,23,42,0.72);
          background: rgba(255,255,255,0.58);
          border: 1px solid rgba(255,255,255,0.78);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.9);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .global-client-logo svg {
          color: #2050e3;
        }

        .global-client-logo span {
          font-size: 0.9rem;
          font-weight: 420;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }

        .global-trust-row {
          width: min(760px, calc(100% - 2rem));
          margin: clamp(0.9rem, 2.5vw, 1.5rem) auto 0;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .global-trust-row span {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.48rem;
          border-radius: 999px;
          padding: 0.62rem 0.9rem;
          color: rgba(15,23,42,0.86);
          background: rgba(255,255,255,0.78);
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow:
            0 10px 26px rgba(15,23,42,0.055),
            inset 0 1px 0 rgba(255,255,255,0.96);
          font-size: 0.78rem;
          font-weight: 420;
        }

        .global-trust-row span::before {
          content: "";
          width: 0.42rem;
          height: 0.42rem;
          flex: 0 0 auto;
          border-radius: 999px;
          background: linear-gradient(135deg, #2050e3, #10b981);
          box-shadow: 0 0 0 0.22rem rgba(32,80,227,0.08);
        }

        @media (max-width: 640px) {
          .global-partner-section .global-partner-shell {
            min-height: auto;
            padding: 1.35rem 0 1.25rem !important;
          }

          .global-partner-section .global-partner-header {
            width: min(340px, calc(100% - 1.5rem));
            margin-bottom: 0.95rem;
          }

          .global-partner-section .global-partner-header h2 {
            font-size: clamp(1.85rem, 9vw, 2.65rem) !important;
            line-height: 1.04 !important;
          }

          .global-partner-section .global-partner-header p {
            font-size: 0.82rem !important;
            max-width: 310px;
          }

          .global-client-rail {
            gap: 0.55rem;
            animation-duration: 28s;
          }

          .global-client-logo {
            min-width: 8.3rem;
            min-height: 2.85rem;
          }

          .global-client-logo span {
            font-size: 0.82rem;
          }

          .global-trust-row {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            padding: 0 0.9rem 0.1rem;
            scrollbar-width: none;
          }

          .global-trust-row::-webkit-scrollbar {
            display: none;
          }

          .global-trust-row span {
            flex: 0 0 auto;
            font-size: 0.72rem;
          }
        }

        @keyframes global-client-marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes global-client-marquee-reverse {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        /* --- Marquee Animations --- */
        .mask-edges-horizontal {
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-x-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        @keyframes global-logo-scroll-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }

        @keyframes global-logo-scroll-right {
          0% { transform: translate3d(-33.333%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        @keyframes global-partner-glow {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate3d(-1rem, 0.8rem, 0) scale(1.08); opacity: 0.95; }
        }

        .animate-scroll-x {
          animation: scroll-x 40s linear infinite;
        }

        .animate-scroll-x-reverse {
          animation: scroll-x-reverse 40s linear infinite;
        }

        /* --- Warm Compressed FAQ Glass --- */
        .faq-warm-glass {
          padding: clamp(1rem, 3vw, 2.25rem);
          border: 1px solid rgba(255,255,255,0.82);
          border-radius: 2rem;
          background:
            radial-gradient(circle at 8% 12%, rgba(251,146,60,0.2), transparent 30%),
            radial-gradient(circle at 92% 82%, rgba(52,211,153,0.16), transparent 32%),
            linear-gradient(135deg, rgba(255,247,237,0.9), rgba(250,245,255,0.76) 48%, rgba(240,253,250,0.8));
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.94), 0 22px 60px rgba(124,45,18,0.08);
          backdrop-filter: blur(18px) saturate(1.12);
          -webkit-backdrop-filter: blur(18px) saturate(1.12);
          overflow: hidden;
        }

        .faq-warm-aura {
          background: linear-gradient(135deg, rgba(249,115,22,0.24), rgba(250,204,21,0.14), rgba(16,185,129,0.18));
        }

        .faq-kicker {
          color: #9a3412;
          border: 1px solid rgba(251,146,60,0.3);
          background: rgba(255,255,255,0.58);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.92), 0 8px 24px rgba(154,52,18,0.06);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .faq-kicker-dot {
          background: #f97316;
          box-shadow: 0 0 0 0.3rem rgba(249,115,22,0.12);
        }

        .faq-accent-title {
          background-image: linear-gradient(100deg, #ea580c, #d97706 48%, #059669);
        }

        .faq-glass-card {
          background: rgba(255,255,255,0.5);
          border-color: rgba(255,255,255,0.78);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 8px 24px rgba(124,45,18,0.045);
          backdrop-filter: blur(14px) saturate(1.08);
          -webkit-backdrop-filter: blur(14px) saturate(1.08);
        }

        .faq-glass-card:hover,
        .faq-glass-card.is-active {
          background: rgba(255,255,255,0.74);
          border-color: rgba(251,146,60,0.38);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.94), 0 16px 34px rgba(154,52,18,0.09);
        }

        .faq-question {
          color: #374151;
        }

        .faq-question.is-active {
          color: #9a3412;
        }

        .faq-chevron {
          color: #78716c;
          border-color: rgba(255,255,255,0.86);
          background: rgba(255,255,255,0.68);
        }

        .faq-chevron.is-active {
          color: #fff;
          border-color: #f97316;
          background: #f97316;
          box-shadow: 0 8px 20px rgba(249,115,22,0.2);
        }

        .faq-divider {
          background: linear-gradient(90deg, rgba(249,115,22,0.32), rgba(16,185,129,0.1), transparent);
        }

        /* --- FAQ Portrait Video --- */
        .faq-video-orbit {
          filter: drop-shadow(0 28px 58px rgba(124,45,18,0.13));
        }

        .faq-video-ring {
          border-radius: 1.8rem;
          background:
            conic-gradient(from 120deg, rgba(249,115,22,0.38), rgba(250,204,21,0.28), rgba(255,255,255,0.82), rgba(16,185,129,0.32), rgba(249,115,22,0.38));
          box-shadow:
            inset 0 1px 3px rgba(255,255,255,0.75),
            inset 0 -18px 34px rgba(249,115,22,0.1),
            0 18px 54px rgba(124,45,18,0.12);
        }

        .faq-video-ring::before {
          content: "";
          position: absolute;
          inset: 0.35rem;
          border-radius: inherit;
          background: rgba(255,255,255,0.34);
          backdrop-filter: blur(18px) saturate(1.35);
          -webkit-backdrop-filter: blur(18px) saturate(1.35);
          border: 1px solid rgba(255,255,255,0.58);
        }

        .faq-video-circle {
          border-radius: 1.45rem !important;
          clip-path: none;
          overflow: hidden !important;
          border: 1px solid rgba(255,255,255,0.72);
          background: rgba(255,255,255,0.18);
          box-shadow: inset 0 1px 5px rgba(255,255,255,0.65), 0 18px 48px rgba(15,23,42,0.12);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transform: translateZ(0);
          contain: layout paint;
        }

        .faq-video-circle video {
          border-radius: 1.4rem !important;
          clip-path: none;
          transform: translateZ(0);
        }

        .faq-video-badge {
          border: 1px solid rgba(255,255,255,0.7);
          background: rgba(255,247,237,0.78);
          backdrop-filter: blur(18px) saturate(1.3);
          -webkit-backdrop-filter: blur(18px) saturate(1.3);
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.86), 0 14px 30px rgba(124,45,18,0.1);
          animation: faq-badge-float 4.8s ease-in-out infinite;
        }

        .faq-badge-text {
          color: #9a3412;
        }

        /* --- Refracted Beyond Design Typography --- */
        .beyond-black-glass {
          background:
            linear-gradient(110deg, rgba(255,255,255,0.08), transparent 22%),
            linear-gradient(250deg, rgba(32,80,227,0.24), transparent 36%),
            linear-gradient(0deg, #000 0%, #050609 46%, #000 100%);
        }

        .beyond-black-glass::before,
        .beyond-black-glass::after {
          content: "";
          position: absolute;
          inset: -18%;
          pointer-events: none;
        }

        .beyond-black-glass::before {
          background: repeating-linear-gradient(90deg, rgba(255,255,255,0.09) 0 1px, transparent 1px 96px);
          animation: refract-background-slide 11s linear infinite;
          opacity: 0.28;
        }

        .beyond-black-glass::after {
          background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.16) 48%, transparent 66%);
          animation: refract-sheen 7.5s ease-in-out infinite;
          opacity: 0.5;
        }

        .beyond-refraction-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 54px 54px;
          opacity: 0.16;
          transform: perspective(900px) rotateX(56deg) translateY(-18%);
          transform-origin: 50% 0;
          animation: refract-grid 8s ease-in-out infinite alternate;
        }

        .beyond-scanline {
          background: linear-gradient(180deg, transparent 0%, rgba(52,211,153,0.16) 47%, rgba(255,255,255,0.22) 50%, transparent 54%);
          animation: vertical-scan 5.8s cubic-bezier(0.22, 1, 0.36, 1) infinite;
          mix-blend-mode: screen;
          opacity: 0.85;
        }

        .glass-blade {
          position: absolute;
          top: -12%;
          bottom: -12%;
          width: 11%;
          border-left: 1px solid rgba(255,255,255,0.14);
          border-right: 1px solid rgba(255,255,255,0.06);
          background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.11), rgba(255,255,255,0.02));
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transform: skewX(-13deg) translateX(-20%);
          animation: blade-drift 7s ease-in-out infinite;
          opacity: 0.44;
        }

        .glass-blade-0 { left: 4%; animation-delay: -0.4s; }
        .glass-blade-1 { left: 18%; animation-delay: -1.2s; }
        .glass-blade-2 { left: 31%; animation-delay: -2s; }
        .glass-blade-3 { left: 45%; animation-delay: -2.8s; }
        .glass-blade-4 { left: 58%; animation-delay: -3.6s; }
        .glass-blade-5 { left: 72%; animation-delay: -4.4s; }
        .glass-blade-6 { left: 86%; animation-delay: -5.2s; }

        .wego-lockup {
          display: flex;
          gap: 0.02em;
          color: white;
          text-shadow: 0 22px 60px rgba(0,0,0,0.6);
        }

        .wego-letter {
          display: inline-block;
          transform-origin: 50% 80%;
          animation: wego-letter-fold 4.8s cubic-bezier(0.22, 1, 0.36, 1) infinite;
          will-change: transform, opacity, filter;
        }

        .wego-letter-1 { animation-delay: 0.12s; color: rgba(255,255,255,0.9); }
        .wego-letter-2 { animation-delay: 0.24s; color: rgba(255,255,255,0.82); margin-left: 0.16em; }
        .wego-letter-3 { animation-delay: 0.36s; color: rgba(255,255,255,0.74); }

        .kinetic-word {
          width: 100%;
          text-align: center;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 0.82;
          letter-spacing: 0;
          font-size: clamp(4.6rem, 15vw, 13rem);
          will-change: transform, clip-path, opacity;
        }

        .kinetic-word-primary {
          color: white;
          animation: kinetic-primary 6.4s cubic-bezier(0.22, 1, 0.36, 1) infinite;
          text-shadow: 0 26px 70px rgba(0,0,0,0.58);
        }

        .kinetic-word-secondary {
          margin-top: -0.14em;
          color: transparent;
          -webkit-text-stroke: 1.4px rgba(255,255,255,0.78);
          animation: kinetic-secondary 6.4s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }

        .kinetic-word-shadow {
          margin-top: -0.16em;
          color: rgba(52,211,153,0.13);
          -webkit-text-stroke: 1px rgba(52,211,153,0.35);
          animation: kinetic-shadow 6.4s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }

        .refract-chip {
          min-height: 3.2rem;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.07);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.22), 0 18px 42px rgba(0,0,0,0.22);
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0 1rem;
          color: rgba(255,255,255,0.72);
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          animation: chip-refract 4.8s ease-in-out infinite;
        }

        .refract-chip-1 { animation-delay: 0.3s; }
        .refract-chip-2 { animation-delay: 0.6s; }
        .refract-chip-3 { animation-delay: 0.9s; }

        /* --- Poster Typography Beyond Design Section --- */
        .beyond-modern {
          font-family: var(--font-body);
          background: #020302 !important;
        }

        .beyond-modern-stage {
          min-height: min(44vw, 38rem);
          border-radius: 0;
          background:
            radial-gradient(circle at 82% 72%, rgba(76,255,166,0.08), transparent 17rem),
            linear-gradient(180deg, #020302 0%, #050505 58%, #020302 100%);
          border: 0;
          box-shadow: none;
        }

        .beyond-modern-stage::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 9;
          pointer-events: none;
          opacity: 0.3;
          mix-blend-mode: lighten;
          background:
            linear-gradient(100deg, transparent 0 44%, rgba(255,255,255,0.16) 48%, rgba(86,247,165,0.16) 50%, rgba(255,255,255,0.08) 52%, transparent 58%),
            repeating-linear-gradient(180deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 5.2rem);
          animation: beyond-stage-scan 8.5s ease-in-out infinite;
        }

        .beyond-type-stack {
          position: absolute;
          inset: -0.25rem 0 auto 0;
          z-index: 5;
          user-select: none;
        }

        .beyond-modern-we,
        .beyond-word-row {
          color: #fff;
          font-family: var(--font-body);
          font-weight: 900;
          letter-spacing: 0;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .beyond-modern-we {
          margin: 0;
          padding-left: 1.6vw;
          font-size: clamp(7rem, 15.8vw, 17.8rem);
          line-height: 0.84;
          animation: beyond-heading-pulse 7.2s ease-in-out infinite;
        }

        .beyond-word-rows {
          display: grid;
          gap: 0;
          margin-top: clamp(0.9rem, 1.35vw, 1.5rem);
          overflow: visible;
        }

        .beyond-word-row {
          font-size: clamp(5.6rem, 9.2vw, 11.7rem);
          line-height: 0.84;
          animation: beyond-type-slice 7.8s ease-in-out infinite;
        }

        .beyond-word-row-1 {
          padding-left: 1.8vw;
        }

        .beyond-word-row-2 {
          padding-left: 1.75vw;
          transform: translateY(-0.03em);
          opacity: 0.98;
          animation-delay: -1.1s;
        }

        .beyond-word-row-3 {
          padding-left: 1.75vw;
          transform: translateY(-0.12em);
          opacity: 0.98;
          animation-delay: -2.2s;
        }

        .beyond-word-row-4 {
          padding-left: 1.75vw;
          transform: translateY(-0.2em);
          opacity: 0.96;
          animation-delay: -3.3s;
        }

        .beyond-word-row-5 {
          padding-left: 1.75vw;
          transform: translateY(-0.28em);
          opacity: 0.9;
          animation-delay: -4.4s;
        }

        .beyond-logo-badge {
          position: absolute;
          right: 1.45rem;
          bottom: 1.35rem;
          z-index: 18;
          width: clamp(4.8rem, 6.4vw, 7.2rem);
          aspect-ratio: 1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12), rgba(255,255,255,0.025) 42%, rgba(0,0,0,0) 67%);
          box-shadow:
            0 0 2.2rem rgba(86,247,165,0.3),
            0 0 4rem rgba(255,255,255,0.08),
            inset 0 0 0 1px rgba(255,255,255,0.18);
          animation:
            beyond-logo-float 5.6s ease-in-out infinite,
            beyond-logo-neon 4.8s ease-in-out infinite;
        }

        .beyond-logo-badge::before {
          content: "";
          position: absolute;
          inset: -0.38rem;
          border-radius: inherit;
          background:
            conic-gradient(
              from 0deg,
              transparent 0deg,
              #55ff8a,
              #ffffff,
              #55ff8a,
              transparent 168deg,
              transparent 360deg
            );
          filter: blur(0.04rem) saturate(1.15);
          animation: beyond-logo-ring 5.2s linear infinite;
        }

        .beyond-logo-badge::after {
          content: "";
          position: absolute;
          inset: 0.34rem;
          border-radius: inherit;
          background:
            radial-gradient(circle at 28% 22%, rgba(255,255,255,0.16), transparent 18%),
            #020302;
          box-shadow:
            inset 0 0 1.4rem rgba(255,255,255,0.08),
            inset 0 0 0 1px rgba(255,255,255,0.12);
        }

        .beyond-logo-badge img {
          position: relative;
          z-index: 2;
          width: 60%;
          height: 60%;
          object-fit: contain;
          display: block;
          filter:
            drop-shadow(0 0 0.5rem rgba(86,247,165,0.65))
            drop-shadow(0 0 1rem rgba(255,255,255,0.16));
          animation:
            beyond-logo-breathe 4.8s ease-in-out infinite;
        }

        .beyond-mobile-poster {
          display: none;
        }

        /* --- Cutting-Edge Creative Agency Section --- */
        .agency-edge-section {
          background: #f8f8f5;
          color: #121920;
          font-family: var(--font-body);
        }

        .agency-edge-shell {
          position: relative;
          width: min(100%, 78rem);
          margin: 0 auto;
          min-height: 31rem;
          display: flex;
          align-items: center;
          padding: clamp(3rem, 7vw, 5.5rem) clamp(1.25rem, 5vw, 4.5rem);
          background:
            repeating-linear-gradient(90deg, rgba(15,23,42,0.055) 0 1px, transparent 1px 9.2rem),
            linear-gradient(180deg, #fbfbf8 0%, #f4f4f0 100%);
        }

        .agency-edge-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.5;
          background:
            linear-gradient(105deg, transparent 0 35%, rgba(255,255,255,0.65) 45%, transparent 56%),
            radial-gradient(circle at 19% 28%, rgba(54,211,120,0.13), transparent 13rem),
            radial-gradient(circle at 78% 66%, rgba(255,196,67,0.14), transparent 15rem);
          animation: agency-section-sheen 10s ease-in-out infinite;
        }

        .agency-edge-grid {
          position: relative;
          z-index: 2;
          width: 100%;
          display: grid;
          grid-template-columns: minmax(16rem, 0.9fr) minmax(18rem, 1fr);
          align-items: center;
          gap: clamp(2rem, 5vw, 4.6rem);
        }

        .agency-collage {
          width: min(28vw, 20rem);
          min-width: 17rem;
          aspect-ratio: 1;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.5rem;
          justify-self: end;
          transform-origin: 50% 50%;
          animation: agency-collage-rise 0.9s cubic-bezier(.2,.8,.2,1) both, agency-collage-drift 7s ease-in-out 1s infinite;
        }

        .agency-collage-tile {
          position: relative;
          overflow: hidden;
          background-image: url('/assets/beyond/creative-agency-art.svg');
          background-size: 205% auto;
          background-repeat: no-repeat;
          background-color: #242424;
          filter: saturate(1.02) contrast(1.02);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
          transform: translateZ(0);
          animation: agency-tile-breathe 5.8s ease-in-out infinite;
        }

        .agency-collage-tile::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 72% 18%, rgba(255,216,62,0.2), transparent 18%),
            linear-gradient(145deg, transparent, rgba(0,0,0,0.08));
          mix-blend-mode: screen;
          opacity: 0.58;
          transform: translateX(-18%);
          animation: agency-tile-light 4.8s ease-in-out infinite;
        }

        .agency-collage-tile span {
          display: none;
        }

        .agency-collage-tile.tile-one {
          border-radius: 50%;
          background-position: 23% 20%;
        }

        .agency-collage-tile.tile-two {
          border-radius: 1.6rem 1.6rem 0.35rem 0.35rem;
          background-position: 70% 22%;
          animation-delay: -0.4s;
        }

        .agency-collage-tile.tile-three {
          border-radius: 1.6rem 0.35rem 0.35rem 1.6rem;
          background-position: 24% 76%;
          animation-delay: -0.8s;
        }

        .agency-collage-tile.tile-four {
          border-radius: 0.35rem 1.6rem 1.6rem 0.35rem;
          background-position: 72% 76%;
          animation-delay: -1.2s;
        }

        .agency-edge-copy {
          max-width: 29rem;
          animation: agency-copy-rise 0.86s cubic-bezier(.2,.8,.2,1) 0.14s both;
        }

        .agency-edge-copy h2 {
          position: relative;
          margin: 0;
          max-width: 28rem;
          color: #101820;
          font-size: clamp(2.35rem, 4.55vw, 4rem);
          line-height: 0.96;
          font-weight: 620;
          letter-spacing: 0;
          text-transform: uppercase;
          overflow: hidden;
        }

        .agency-edge-copy h2::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(100deg, transparent 0 34%, rgba(255,255,255,0.78) 45%, transparent 58%);
          transform: translateX(-115%);
          mix-blend-mode: screen;
          animation: agency-heading-scan 5.6s ease-in-out 1.1s infinite;
        }

        .agency-edge-copy h2 span {
          display: block;
          width: max-content;
          margin-bottom: 0.55rem;
          padding: 0.42rem 0.7rem 0.38rem;
          border: 1px solid rgba(16,24,32,0.18);
          border-radius: 999px;
          color: rgba(16,24,32,0.72);
          font-size: clamp(0.72rem, 1vw, 0.9rem);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          animation: agency-pill-pop 0.72s cubic-bezier(.2,.9,.2,1.1) 0.28s both;
        }

        .agency-edge-copy p {
          margin: 1.35rem 0 0;
          max-width: 31rem;
          color: rgba(16,24,32,0.58);
          font-size: 0.86rem;
          line-height: 1.6;
          font-weight: 400;
          animation: agency-text-fade 0.9s ease 0.34s both;
        }

        .agency-edge-marker {
          position: absolute;
          right: clamp(2rem, 8vw, 6rem);
          bottom: clamp(2rem, 5vw, 4rem);
          width: 2.3rem;
          aspect-ratio: 1;
          opacity: 0.34;
          animation: agency-marker-spin 12s linear infinite;
        }

        .agency-edge-marker::before,
        .agency-edge-marker::after {
          content: "";
          position: absolute;
          inset: 0;
          border: 1px solid rgba(16,24,32,0.12);
        }

        .agency-edge-marker::after {
          width: 0;
          height: 0;
          border: 0;
          left: -0.18rem;
          top: 0.85rem;
          border-top: 0.42rem solid transparent;
          border-bottom: 0.42rem solid transparent;
          border-right: 0.78rem solid rgba(255,117,139,0.42);
        }

        @keyframes agency-section-sheen {
          0%, 100% { transform: translateX(-8%); opacity: 0.34; }
          50% { transform: translateX(8%); opacity: 0.62; }
        }

        @keyframes agency-collage-rise {
          0% { opacity: 0; transform: translateY(1.4rem) scale(0.97) rotate(-2deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
        }

        @keyframes agency-collage-drift {
          0%, 100% { translate: 0 0; rotate: 0deg; }
          50% { translate: 0 -0.5rem; rotate: -1deg; }
        }

        @keyframes agency-tile-breathe {
          0%, 100% { transform: scale(1); filter: saturate(1.02) contrast(1.02); }
          50% { transform: scale(1.025); filter: saturate(1.12) contrast(1.04); }
        }

        @keyframes agency-tile-light {
          0%, 100% { opacity: 0.42; transform: translateX(-20%) rotate(0deg); }
          50% { opacity: 0.7; transform: translateX(16%) rotate(2deg); }
        }

        @keyframes agency-copy-rise {
          0% { opacity: 0; transform: translateY(1rem); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes agency-heading-scan {
          0%, 62%, 100% { transform: translateX(-115%); opacity: 0; }
          72% { opacity: 0.9; }
          88% { transform: translateX(115%); opacity: 0; }
        }

        @keyframes agency-pill-pop {
          0% { opacity: 0; transform: translateY(0.4rem) scale(0.92); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes agency-text-fade {
          0% { opacity: 0; transform: translateY(0.5rem); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes agency-marker-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .agency-edge-shell::before,
          .agency-collage,
          .agency-collage-tile,
          .agency-collage-tile::before,
          .agency-edge-copy,
          .agency-edge-copy h2::after,
          .agency-edge-copy h2 span,
          .agency-edge-copy p,
          .agency-edge-marker {
            animation: none !important;
          }
        }

        /* --- Service Features Dashboard Section --- */
        .service-feature-section {
          position: relative;
          background:
            radial-gradient(circle at 14% 18%, rgba(126, 236, 194, 0.44), transparent 17rem),
            radial-gradient(circle at 82% 16%, rgba(126, 164, 255, 0.28), transparent 19rem),
            radial-gradient(circle at 52% 88%, rgba(255, 225, 157, 0.42), transparent 22rem),
            linear-gradient(135deg, #f4faf7 0%, #f8fbff 48%, #f8f5ff 100%);
          color: #0e1117;
          font-family: var(--font-body);
          padding: clamp(3rem, 7vw, 5.75rem) 1rem;
        }

        .service-feature-section::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.58;
          background-image:
            linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px);
          background-size: 4.75rem 4.75rem;
          mask-image: radial-gradient(circle at center, #000 0%, transparent 72%);
          -webkit-mask-image: radial-gradient(circle at center, #000 0%, transparent 72%);
        }

        .service-feature-section::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(64rem, 94vw);
          height: min(36rem, 70vw);
          border-radius: 999px;
          transform: translate(-50%, -50%) rotate(-8deg);
          background: rgba(255,255,255,0.32);
          border: 1px solid rgba(255,255,255,0.62);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.82);
          filter: blur(0.1px);
          pointer-events: none;
        }

        .service-feature-shell {
          position: relative;
          z-index: 1;
          width: min(100%, 52rem);
          margin: 0 auto;
        }

        .service-feature-dashboard {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.45rem;
        }

        .service-feature-topbar,
        .service-feature-grid,
        .service-feature-bottom {
          display: grid;
          gap: 1.45rem;
        }

        .service-feature-topbar {
          grid-template-columns: minmax(0, 1.6fr) minmax(10rem, 1.15fr) 8rem;
          align-items: stretch;
        }

        .service-feature-grid {
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.88fr);
        }

        .service-feature-bottom {
          grid-template-columns: 8.6rem minmax(0, 1fr);
          align-items: stretch;
        }

        .service-feature-duration,
        .service-feature-book,
        .service-feature-avatar,
        .service-feature-card,
        .service-feature-plus {
          border-radius: 2.1rem;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.72), rgba(255,255,255,0.4));
          border: 1px solid rgba(255,255,255,0.78);
          box-shadow:
            0 22px 52px rgba(28, 58, 89, 0.09),
            inset 0 1px 0 rgba(255,255,255,0.95),
            inset 0 -18px 36px rgba(15,23,42,0.035);
          backdrop-filter: blur(22px) saturate(1.24);
          -webkit-backdrop-filter: blur(22px) saturate(1.24);
          overflow: hidden;
        }

        .service-feature-duration {
          min-height: 7.4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.08rem;
          color: rgba(15,23,42,0.46);
          background:
            radial-gradient(circle at 20% 0%, rgba(70, 232, 174, 0.42), transparent 42%),
            linear-gradient(145deg, rgba(255,255,255,0.78), rgba(255,255,255,0.45));
        }

        .service-feature-duration strong {
          color: #07110f;
          font-size: clamp(2.25rem, 4.5vw, 3.1rem);
          line-height: 1;
          font-weight: 720;
          letter-spacing: -0.035em;
        }

        .service-feature-duration span {
          font-size: 0.72rem;
          font-weight: 850;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .service-feature-duration small {
          color: rgba(15,23,42,0.38);
          font-size: 0.82rem;
          font-weight: 680;
          letter-spacing: -0.02em;
        }

        .service-feature-book {
          appearance: none;
          border: 1px solid rgba(255,255,255,0.78);
          font-family: inherit;
          padding: 0.9rem 1rem;
          min-height: 7.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-align: center;
          font-size: clamp(1.05rem, 2.4vw, 1.65rem);
          font-weight: 680;
          letter-spacing: -0.035em;
          background:
            radial-gradient(circle at 82% 18%, rgba(255, 232, 120, 0.96), transparent 30%),
            radial-gradient(circle at 22% 18%, rgba(59, 255, 172, 0.7), transparent 36%),
            linear-gradient(145deg, #00b877 0%, #2050e3 48%, #8f5bff 100%);
          box-shadow:
            0 24px 54px rgba(32,80,227,0.18),
            inset 0 1px 0 rgba(255,255,255,0.42);
          transition: transform 0.28s ease, filter 0.28s ease;
        }

        .service-feature-book:hover {
          transform: translateY(-0.2rem);
          filter: saturate(1.08) brightness(1.03);
        }

        .service-feature-avatar {
          min-height: 7.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at 50% 50%, rgba(46, 255, 174, 0.42), transparent 54%),
            linear-gradient(145deg, rgba(8,15,14,0.92), rgba(17,24,39,0.78));
        }

        .service-feature-avatar img {
          width: 4.7rem;
          height: 4.7rem;
          border-radius: 50%;
          object-fit: contain;
          padding: 0.72rem;
          background: rgba(255,255,255,0.06);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.18),
            0 20px 34px rgba(0,0,0,0.2),
            0 0 42px rgba(46,255,174,0.35);
          animation: none;
        }

        .service-feature-card {
          position: relative;
          min-height: 17.2rem;
          padding: clamp(1.5rem, 4vw, 2rem);
        }

        .service-feature-clock {
          background:
            radial-gradient(circle at 18% 16%, rgba(255, 221, 120, 0.78), transparent 29%),
            radial-gradient(circle at 82% 28%, rgba(45, 219, 168, 0.72), transparent 42%),
            linear-gradient(145deg, rgba(255,255,255,0.8), rgba(255,255,255,0.42));
        }

        .service-feature-service-icon {
          width: 5.7rem;
          height: 5.7rem;
          border-radius: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #05261a;
          background: rgba(255,255,255,0.48);
          border: 1px solid rgba(255,255,255,0.74);
          box-shadow:
            0 18px 40px rgba(24, 159, 118, 0.16),
            inset 0 1px 0 rgba(255,255,255,0.95);
        }

        .service-feature-note {
          position: absolute;
          left: 1.35rem;
          right: 1.35rem;
          bottom: 1.15rem;
          padding: 1.18rem 1.28rem;
          border-radius: 1.65rem;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.92);
          box-shadow:
            0 16px 34px rgba(24, 159, 118, 0.12),
            inset 0 -4px 0 rgba(0,184,119,0.5);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .service-feature-note span,
        .service-feature-label,
        .service-feature-message span {
          display: block;
          color: rgba(15,23,42,0.28);
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .service-feature-note p,
        .service-feature-message p {
          margin: 0.28rem 0 0;
          color: rgba(15,23,42,0.58);
          font-size: clamp(0.98rem, 2.1vw, 1.14rem);
          line-height: 1.26;
          font-weight: 460;
          letter-spacing: -0.025em;
        }

        .service-feature-note strong,
        .service-feature-message strong {
          color: #0b0f16;
          font-weight: 800;
        }

        .service-feature-folder {
          min-height: 17.2rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .service-feature-menu {
          position: absolute;
          top: 1.55rem;
          right: 1.45rem;
          display: grid;
          gap: 0.34rem;
        }

        .service-feature-menu span {
          width: 0.34rem;
          height: 0.34rem;
          border-radius: 50%;
          background: #05070a;
        }

        .service-feature-folder-icon {
          position: absolute;
          top: 2rem;
          left: 1.75rem;
          width: 6.2rem;
          height: 5.1rem;
          border-radius: 1.35rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.88);
          background:
            radial-gradient(circle at 18% 12%, rgba(255, 232, 122, 0.9), transparent 34%),
            linear-gradient(180deg, #34d399 0%, #2050e3 72%);
          box-shadow: 0 22px 42px rgba(32,80,227,0.2);
        }

        .service-feature-folder h3 {
          margin: 0.26rem 0 0;
          color: #05070a;
          font-size: clamp(1.75rem, 3.7vw, 2.45rem);
          line-height: 1;
          font-weight: 720;
          letter-spacing: -0.055em;
        }

        .service-feature-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.42rem;
          margin-top: 1rem;
          color: rgba(15,23,42,0.36);
          font-size: 0.76rem;
          font-weight: 760;
        }

        .service-feature-meta span {
          padding: 0.4rem 0.62rem;
          border-radius: 999px;
          background: rgba(15,23,42,0.045);
        }

        .service-feature-plus {
          min-height: 8.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background:
            radial-gradient(circle at 25% 20%, rgba(255, 232, 122, 0.88), transparent 34%),
            linear-gradient(145deg, #052e24, #0ea5e9 54%, #2050e3);
          animation: servicePulseTile 4.2s ease-in-out infinite;
        }

        .service-feature-message {
          appearance: none;
          border: 1px solid rgba(255,255,255,0.78);
          font-family: inherit;
          min-height: 8.8rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          text-align: left;
          padding: 1.35rem 1.65rem;
          cursor: pointer;
          transition: transform 0.28s ease, box-shadow 0.28s ease, background 0.28s ease;
        }

        .service-feature-message:hover {
          transform: translateY(-0.18rem);
          background: rgba(255,255,255,0.72);
          box-shadow:
            0 28px 70px rgba(32,80,227,0.13),
            inset 0 1px 0 rgba(255,255,255,0.95);
        }

        .service-feature-message small {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          margin-top: 0.68rem;
          color: #2050e3;
          font-size: 0.82rem;
          font-weight: 720;
          letter-spacing: -0.02em;
        }

        @keyframes leafLogoFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
            filter: hue-rotate(0deg) saturate(1.1);
          }
          50% {
            transform: translateY(-0.28rem) rotate(5deg) scale(1.05);
            filter: hue-rotate(34deg) saturate(1.35);
          }
        }

        @keyframes servicePulseTile {
          0%, 100% {
            transform: translateY(0);
            filter: saturate(1);
          }
          50% {
            transform: translateY(-0.18rem);
            filter: saturate(1.25);
          }
        }

        @media (max-width: 720px) {
          .service-feature-section {
            padding: 2.2rem 1rem;
          }

          .service-feature-dashboard {
            gap: 1rem;
          }

          .service-feature-topbar {
            grid-template-columns: minmax(0, 1fr) 5.8rem;
            gap: 1rem;
          }

          .service-feature-duration {
            grid-column: 1;
            grid-row: 1;
          }

          .service-feature-book {
            grid-column: 1 / -1;
            grid-row: 2;
          }

          .service-feature-avatar {
            grid-column: 2;
            grid-row: 1;
            display: flex;
            min-height: 5.8rem;
            border-radius: 1.55rem;
          }

          .service-feature-avatar img {
            width: 3.35rem;
            height: 3.35rem;
            padding: 0.5rem;
          }

          .service-feature-duration,
          .service-feature-book {
            min-height: 5.8rem;
            border-radius: 1.55rem;
          }

          .service-feature-book {
            min-height: 4.65rem;
            font-size: 1.08rem;
            line-height: 1.08;
            padding: 0.7rem;
          }

          .service-feature-grid,
          .service-feature-bottom {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .service-feature-card {
            min-height: 12.9rem;
            border-radius: 1.65rem;
          }

          .service-feature-clock {
            min-height: auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1.05rem;
          }

          .service-feature-clock .service-feature-note {
            position: relative;
            left: auto;
            right: auto;
            bottom: auto;
            width: 100%;
            margin-top: 0;
          }

          .service-feature-folder {
            min-height: auto;
            padding-top: 1.05rem;
            justify-content: flex-start;
            gap: 0.72rem;
          }

          .service-feature-folder-icon {
            position: relative;
            top: auto;
            left: auto;
            width: 4.9rem;
            height: 4rem;
            border-radius: 1.08rem;
            order: 1;
          }

          .service-feature-menu {
            top: 1.05rem;
            right: 1.12rem;
          }

          .service-feature-label {
            order: 2;
            margin-top: 0.1rem;
          }

          .service-feature-folder h3 {
            order: 3;
            font-size: 1.62rem;
            letter-spacing: -0.045em;
            max-width: 12rem;
          }

          .service-feature-meta {
            order: 4;
            margin-top: 0.15rem;
          }

          .service-feature-bottom {
            grid-template-columns: 5.8rem 1fr;
          }

          .service-feature-plus,
          .service-feature-message {
            min-height: 6.4rem;
            border-radius: 1.55rem;
          }

          .service-feature-service-icon {
            width: 4.7rem;
            height: 4.7rem;
            border-radius: 1.45rem;
          }

          .service-feature-message {
            padding: 1rem 1.12rem;
          }

          .service-feature-note {
            left: 1rem;
            right: 1rem;
            bottom: 1rem;
            padding: 1rem;
            border-radius: 1.35rem;
          }

          .service-feature-note p,
          .service-feature-message p {
            font-size: 0.94rem;
            line-height: 1.28;
          }

          .service-feature-message small {
            margin-top: 0.48rem;
            font-size: 0.74rem;
          }
        }

        /* --- Leaf Advantage Media Wall --- */
        .home-about-shell {
          background:
            radial-gradient(circle at 16% 18%, rgba(191,246,226,0.78), transparent 20rem),
            radial-gradient(circle at 84% 22%, rgba(219,214,255,0.7), transparent 22rem),
            radial-gradient(circle at 64% 86%, rgba(255,239,195,0.72), transparent 20rem),
            linear-gradient(135deg, rgba(255,255,255,0.88), rgba(238,250,249,0.68));
          border: 1px solid rgba(255,255,255,0.82);
          box-shadow: 0 26px 80px rgba(15,118,110,0.1), inset 0 1px 0 rgba(255,255,255,0.86);
          backdrop-filter: blur(34px);
          -webkit-backdrop-filter: blur(34px);
        }

        .advantage-showcase {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          align-items: center;
          gap: 2rem;
          min-height: 42rem;
          padding: 3.2rem;
          overflow: hidden;
          border-radius: 2.5rem;
        }

        .advantage-copy {
          position: relative;
          z-index: 5;
          max-width: 27rem;
        }

        .advantage-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          border-radius: 999px;
          padding: 0.62rem 0.88rem;
          margin-bottom: 1.35rem;
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(255,255,255,0.9);
          color: #2050e3;
          box-shadow: 0 12px 28px rgba(32,80,227,0.08);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .advantage-pill span {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background: #2050e3;
          box-shadow: 0 0 0 0 rgba(32,80,227,0.32);
        }

        .advantage-pill strong {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .advantage-copy h2 {
          color: #101827;
          font-size: 3.55rem;
          line-height: 1.02;
          font-weight: 650;
          margin-bottom: 1.25rem;
        }

        .advantage-copy p {
          color: rgba(17,24,39,0.62);
          font-size: 1.02rem;
          line-height: 1.65;
          font-weight: 350;
        }

        .advantage-stat-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.7rem;
          margin: 1.55rem 0;
        }

        .advantage-stat-card {
          min-height: 5.35rem;
          border-radius: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.6rem;
          padding: 0.85rem;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.82), rgba(255,255,255,0.5)),
            radial-gradient(circle at 22% 18%, rgba(20,184,166,0.12), transparent 58%);
          border: 1px solid rgba(255,255,255,0.88);
          box-shadow: 0 14px 34px rgba(15,118,110,0.08), inset 0 1px 0 rgba(255,255,255,0.88);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .advantage-stat-card span {
          color: #0f766e;
          font-size: 1.38rem;
          font-weight: 750;
          line-height: 1;
        }

        .advantage-stat-card strong {
          color: rgba(17,24,39,0.58);
          font-size: 0.72rem;
          font-weight: 650;
          line-height: 1.2;
        }

        .advantage-action {
          min-height: 3rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          border-radius: 999px;
          padding: 0 1.2rem;
          background: #111827;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 650;
          box-shadow: 0 14px 32px rgba(17,24,39,0.16);
          transition: transform 0.28s ease, background 0.28s ease;
        }

        .advantage-action:hover {
          transform: translateY(-2px);
          background: #2050e3;
        }

        .advantage-media-stage {
          position: relative;
          z-index: 4;
          min-height: 37rem;
          perspective: 1000px;
        }

        .advantage-glow-orb {
          position: absolute;
          inset: 11% 8% 12% 6%;
          border-radius: 50%;
          background:
            radial-gradient(circle at 50% 50%, rgba(20,184,166,0.24), transparent 55%),
            radial-gradient(circle at 36% 40%, rgba(129,140,248,0.22), transparent 44%);
          filter: blur(18px);
          animation: advantage-glow-shift 7s ease-in-out infinite;
        }

        .advantage-grid-lines {
          position: absolute;
          inset: 3rem 2rem;
          border-radius: 2.2rem;
          background:
            linear-gradient(90deg, rgba(32,80,227,0.08) 1px, transparent 1px),
            linear-gradient(0deg, rgba(32,80,227,0.06) 1px, transparent 1px);
          background-size: 2rem 2rem;
          mask-image: radial-gradient(circle at 50% 50%, black, transparent 70%);
          -webkit-mask-image: radial-gradient(circle at 50% 50%, black, transparent 70%);
          opacity: 0.75;
        }

        .advantage-orbit-cloud {
          position: absolute;
          inset: 0;
          transform-origin: 50% 50%;
        }

        .advantage-hero-reel {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 15rem;
          aspect-ratio: 9 / 16;
          transform: translate(-50%, -50%) rotate(-2deg);
          overflow: hidden;
          border-radius: 2rem;
          border: 0.42rem solid rgba(255,255,255,0.74);
          background: #050914;
          box-shadow: 0 32px 80px rgba(15,23,42,0.28), 0 0 0 1px rgba(32,80,227,0.12);
        }

        .advantage-hero-reel video,
        .advantage-orbit-card video,
        .advantage-orbit-card img,
        .advantage-mobile-card video,
        .advantage-mobile-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .advantage-orbit-card {
          position: absolute;
          width: 8.3rem;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          border-radius: 1.35rem;
          border: 0.26rem solid rgba(255,255,255,0.7);
          background: #050914;
          box-shadow: 0 20px 45px rgba(15,23,42,0.16);
        }

        .advantage-orbit-card-1 { left: 2%; top: 4%; transform: rotate(-8deg); animation-delay: -0.8s; }
        .advantage-orbit-card-2 { right: 3%; top: 7%; transform: rotate(7deg); animation-delay: -1.6s; }
        .advantage-orbit-card-3 { left: -1%; top: 39%; transform: rotate(6deg); animation-delay: -2.1s; }
        .advantage-orbit-card-4 { right: -2%; top: 39%; transform: rotate(-7deg); animation-delay: -2.8s; }
        .advantage-orbit-card-5 { left: 12%; bottom: 2%; transform: rotate(8deg); animation-delay: -3.4s; }
        .advantage-orbit-card-6 { right: 14%; bottom: 0%; transform: rotate(-5deg); animation-delay: -4s; }
        .advantage-orbit-card-7 { left: 38%; top: -2%; transform: rotate(4deg) scale(0.82); animation-delay: -4.8s; }
        .advantage-orbit-card-8 { left: 41%; bottom: -3%; transform: rotate(-4deg) scale(0.82); animation-delay: -5.3s; }

        .advantage-mobile-strip {
          display: none;
        }

        @media (max-width: 639px) {
          .home-about-section > .advantage-showcase {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.1rem !important;
            min-height: auto;
            padding: 1.05rem !important;
            border-radius: 1.65rem;
          }

          .advantage-copy {
            max-width: 100%;
            order: 2;
          }

          .advantage-pill {
            margin-bottom: 0.85rem;
            padding: 0.5rem 0.72rem;
          }

          .advantage-pill strong {
            font-size: 0.64rem;
          }

          .advantage-copy h2 {
            font-size: 2rem !important;
            line-height: 1.05 !important;
            margin-bottom: 0.75rem !important;
          }

          .advantage-copy p {
            font-size: 0.9rem;
            line-height: 1.55;
          }

          .advantage-stat-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.55rem;
            margin: 1rem 0;
          }

          .advantage-stat-card {
            min-height: 3.85rem;
            border-radius: 1rem;
          }

          .advantage-action {
            width: 100%;
            min-height: 2.8rem;
          }

          .advantage-media-stage {
            order: 1;
            min-height: 27.5rem;
            width: 100%;
            overflow: hidden;
            border-radius: 1.35rem;
          }

          .advantage-grid-lines {
            inset: 1rem;
            border-radius: 1.2rem;
          }

          .advantage-hero-reel {
            width: 10.4rem;
            border-radius: 1.55rem;
            border-width: 0.32rem;
            top: 50%;
          }

          .advantage-orbit-cloud {
            display: block;
            inset: 0.3rem;
          }

          .advantage-mobile-strip {
            display: none;
          }

          .advantage-orbit-card {
            width: 4.9rem;
            border-radius: 0.9rem;
            border-width: 0.18rem;
            box-shadow: 0 13px 24px rgba(15,23,42,0.15);
          }

          .advantage-orbit-card-1 { left: 4%; top: 7%; }
          .advantage-orbit-card-2 { right: 4%; top: 8%; }
          .advantage-orbit-card-3 { left: 2%; top: 40%; }
          .advantage-orbit-card-4 { right: 2%; top: 40%; }
          .advantage-orbit-card-5 { left: 13%; bottom: 5%; }
          .advantage-orbit-card-6 { right: 13%; bottom: 5%; }
          .advantage-orbit-card-7 { left: 39%; top: 2%; }
          .advantage-orbit-card-8 { left: 39%; bottom: 1%; }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .advantage-showcase {
            grid-template-columns: 1fr;
            min-height: auto;
            padding: 2.2rem;
          }

          .advantage-copy {
            max-width: 38rem;
          }

          .advantage-media-stage {
            min-height: 38rem;
          }
        }

        /* --- Leaf Advantage: Atelier Gallery Direction --- */
        .home-about-shell {
          background:
            radial-gradient(circle at 14% 22%, rgba(218,238,229,0.62), transparent 21rem),
            radial-gradient(circle at 86% 18%, rgba(230,233,238,0.78), transparent 24rem),
            radial-gradient(circle at 48% 96%, rgba(245,238,226,0.75), transparent 23rem),
            linear-gradient(135deg, #eef4f1 0%, #f7f7f4 50%, #e9efec 100%) !important;
          border: 1px solid rgba(255,255,255,0.78) !important;
          box-shadow: 0 26px 80px rgba(42,54,48,0.1), inset 0 1px 0 rgba(255,255,255,0.9) !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }

        .advantage-showcase {
          display: block !important;
          min-height: 35rem !important;
          padding: 1.25rem !important;
          border-radius: 2.35rem !important;
          overflow: hidden;
        }

        .advantage-media-stage {
          position: relative;
          min-height: 32rem !important;
          width: 100%;
          overflow: hidden;
          border-radius: 1.55rem !important;
          background: rgba(250,250,248,0.78);
          border: 1px solid rgba(255,255,255,0.92);
          box-shadow: 0 18px 54px rgba(31,41,55,0.08), inset 0 1px 0 rgba(255,255,255,0.94);
          perspective: 1200px;
        }

        .advantage-media-stage::before,
        .advantage-media-stage::after {
          display: none !important;
        }

        .advantage-media-stage::before {
          width: 48rem;
          height: 18rem;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -48%) rotate(-1deg);
        }

        .advantage-media-stage::after {
          width: 35rem;
          height: 13rem;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -48%) rotate(4deg);
          opacity: 0.55;
        }

        .advantage-gallery-topline {
          position: relative;
          z-index: 80;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1rem 1.1rem 0;
        }

        .advantage-gallery-topline > span {
          color: rgba(13,17,23,0.68);
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 0.5rem 0.8rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(17,24,39,0.06);
        }

        .advantage-gallery-center {
          position: absolute;
          z-index: 70;
          left: 50%;
          top: 39%;
          width: min(32rem, 76%);
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.25rem 1.45rem;
          border-radius: 1.2rem;
          background: rgba(250,250,248,0.82);
          border: 1px solid rgba(255,255,255,0.86);
          box-shadow: 0 16px 42px rgba(17,24,39,0.08);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .advantage-gallery-center h2 {
          color: #0b0f16;
          font-size: 2.85rem;
          line-height: 1.02;
          margin-bottom: 0.7rem;
          text-transform: uppercase;
        }

        .advantage-gallery-center p {
          color: rgba(17,24,39,0.58);
          font-size: 0.95rem;
          line-height: 1.55;
          max-width: 24rem;
          margin-bottom: 0;
        }

        .advantage-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 999px;
          padding: 0.45rem 0.72rem;
          margin-bottom: 1rem;
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(17,24,39,0.06);
          color: rgba(17,24,39,0.66);
          box-shadow: none;
        }

        .advantage-pill span {
          width: 0.42rem;
          height: 0.42rem;
          border-radius: 50%;
          background: #111827;
          box-shadow: none;
        }

        .advantage-pill strong {
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .advantage-action {
          width: auto !important;
          min-height: 2.35rem !important;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.45rem;
          padding: 0 0.95rem !important;
          background: #050505;
          color: #fff;
          font-size: 0.76rem;
          font-weight: 650;
          box-shadow: none;
          transition: transform 0.28s ease, background 0.28s ease;
        }

        .advantage-action:hover {
          transform: translateY(-2px);
          background: #1f2937;
        }

        .advantage-cylinder-carousel {
          position: absolute;
          inset: 3.2rem 0 4.7rem;
          z-index: 16;
          display: grid;
          place-items: center;
          overflow: hidden;
        }

        .advantage-cylinder-track {
          position: relative;
          display: grid;
          place-items: center;
          will-change: transform;
        }

        .advantage-cylinder-card {
          grid-area: 1 / 1;
          object-fit: cover;
          overflow: hidden;
          border-radius: 1.05rem;
          border: 0.16rem solid rgba(255,255,255,0.82) !important;
          background: rgba(255,255,255,0.72) !important;
          box-shadow: 0 22px 52px rgba(28, 39, 34, 0.2) !important;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .advantage-cylinder-track {
            animation: ry 128s linear infinite !important;
          }
        }

        .advantage-stat-grid {
          position: absolute;
          z-index: 75;
          left: 50%;
          bottom: 0.82rem;
          width: min(42rem, calc(100% - 1.7rem));
          transform: translateX(-50%);
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          gap: 0;
          margin: 0 !important;
          padding: 0.34rem;
          overflow: hidden;
          border-radius: 999px;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.9), rgba(245,255,248,0.72)),
            radial-gradient(circle at 18% 50%, rgba(84, 224, 139, 0.24), transparent 38%),
            radial-gradient(circle at 84% 50%, rgba(32, 80, 227, 0.1), transparent 42%);
          border: 1px solid rgba(255,255,255,0.86);
          box-shadow: 0 18px 44px rgba(24,42,33,0.13), inset 0 1px 0 rgba(255,255,255,0.96);
          backdrop-filter: blur(22px) saturate(1.18);
          -webkit-backdrop-filter: blur(22px) saturate(1.18);
        }

        .advantage-stat-card {
          position: relative;
          min-height: 3.35rem !important;
          border-radius: 999px !important;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 0.58rem;
          padding: 0.48rem 0.74rem;
          background: transparent;
          border: 0;
          box-shadow: none;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }

        .advantage-stat-card::before {
          content: "";
          position: absolute;
          right: 0;
          top: 20%;
          width: 1px;
          height: 60%;
          border-radius: 999px;
          background: linear-gradient(180deg, transparent, rgba(8,22,13,0.18), transparent);
        }

        .advantage-stat-card:last-child::before {
          display: none;
        }

        .advantage-stat-card span {
          color: #06130b;
          font-size: 1.45rem;
          font-weight: 850;
          line-height: 1;
          margin-top: 0;
          white-space: nowrap;
          letter-spacing: -0.02em;
        }

        .advantage-stat-card-experience span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.38rem;
          font-size: 1.12rem;
          line-height: 1;
        }

        .advantage-stat-card-experience {
          flex-direction: column;
          gap: 0.2rem;
        }

        .advantage-stat-card-experience span em {
          display: inline-block;
          font-style: normal;
          white-space: nowrap;
        }

        .advantage-stat-card-experience strong {
          max-width: none;
          white-space: nowrap;
        }

        .advantage-stat-card strong {
          color: rgba(7,18,12,0.55);
          font-size: 0.54rem;
          font-weight: 700;
          line-height: 1.05;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          max-width: 5.2rem;
        }

        @media (max-width: 639px) {
          .home-about-section > .advantage-showcase {
            padding: 0.95rem !important;
            border-radius: 1.65rem !important;
          }

          .advantage-media-stage {
            min-height: 32rem !important;
            border-radius: 1.25rem !important;
          }

          .advantage-media-stage::before {
            width: 25rem;
            height: 12rem;
            top: 42%;
          }

          .advantage-media-stage::after {
            width: 19rem;
            height: 8rem;
            top: 42%;
          }

          .advantage-gallery-topline {
            padding: 0.78rem 0.75rem 0;
          }

          .advantage-gallery-topline > span {
            font-size: 0.62rem;
            padding: 0.42rem 0.62rem;
          }

          .advantage-gallery-center {
            top: 36%;
            width: 86%;
            padding: 0.95rem 0.85rem;
            border-radius: 1rem;
          }

          .advantage-gallery-center h2 {
            font-size: 1.38rem !important;
            line-height: 1.05 !important;
            margin-bottom: 0.45rem !important;
          }

          .advantage-gallery-center p {
            font-size: 0.68rem;
            line-height: 1.35;
          }

          .advantage-pill {
            margin-bottom: 0.65rem;
            padding: 0.38rem 0.58rem;
          }

          .advantage-action {
            min-height: 2rem !important;
            font-size: 0.68rem;
          }

          .advantage-cylinder-carousel {
            inset: 7.5rem 0 5.2rem;
          }

          .advantage-cylinder-card {
            border-radius: 0.78rem;
            border-width: 0.12rem !important;
            box-shadow: 0 14px 30px rgba(28, 39, 34, 0.18) !important;
          }

          .advantage-stat-grid {
            bottom: 0.78rem;
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            gap: 0;
            width: calc(100% - 1.25rem);
            padding: 0.28rem;
            overflow-x: hidden;
            overflow-y: hidden;
            border-radius: 1.4rem;
          }

          .advantage-stat-card {
            min-height: 3.18rem !important;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.3rem;
            padding: 0.52rem 0.34rem;
            border-radius: 1.1rem !important;
            text-align: center;
          }

          .advantage-stat-card::before {
            right: 0;
            top: 24%;
            width: 1px;
            height: 52%;
          }

          .advantage-stat-card span {
            font-size: clamp(0.84rem, 3.7vw, 1.04rem);
            line-height: 1.05;
            margin-top: 0;
          }

          .advantage-stat-card-experience {
            gap: 0.34rem;
          }

          .advantage-stat-card-experience span {
            flex-direction: column;
            gap: 0.18rem;
            font-size: clamp(0.68rem, 3.1vw, 0.82rem);
            line-height: 1.08;
          }

          .advantage-stat-card-experience strong {
            max-width: 3.55rem;
            white-space: normal;
          }

          .advantage-stat-card strong {
            font-size: clamp(0.42rem, 1.9vw, 0.5rem);
            max-width: 3.55rem;
            letter-spacing: 0.015em;
            line-height: 1.12;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .advantage-showcase {
            padding: 1.2rem !important;
          }

          .advantage-media-stage {
            min-height: 31rem !important;
          }

          .advantage-gallery-center h2 {
            font-size: 2.75rem;
          }

          .advantage-cylinder-carousel {
            inset-inline: -2rem;
          }
        }

        @media (max-width: 639px) {
          .advantage-glow-orb,
          .home-faq-section [class*="blur-[100px]"],
          .wa-floating-button .blur-md,
          .wa-floating-button [class*="blur-[20px]"] {
            filter: blur(22px) !important;
          }

          .faq-video-ring,
          .faq-video-badge,
          .wa-floating-body,
          .animate-blob,
          .animate-bounce-x {
            animation: none !important;
          }

          .faq-video-circle video {
            transform: translateZ(0);
          }
        }

        /* --- Reference-Inspired Footer --- */
        .footer-brucira {
          min-height: auto;
          font-family: var(--font-body);
          letter-spacing: 0;
          background: #24b9df !important;
          color: #fff;
        }

        .footer-brucira * {
          letter-spacing: 0 !important;
        }

        .footer-brucira-field {
          background:
            radial-gradient(circle at 14% 22%, rgba(255,255,255,0.18), transparent 10rem),
            linear-gradient(135deg, #21b5dc 0%, #28c1e7 48%, #20b5de 100%);
        }

        .footer-brucira-field::before {
          content: "";
          position: absolute;
          left: -6rem;
          bottom: 2rem;
          width: 22rem;
          height: 10rem;
          border: 3px dashed rgba(7,26,42,0.18);
          border-color: rgba(7,26,42,0.18) transparent transparent rgba(7,26,42,0.18);
          border-radius: 50%;
          transform: rotate(28deg);
          animation: footer-doodle-float 10s ease-in-out infinite;
        }

        .footer-brucira-field::after {
          content: "";
          position: absolute;
          right: 2rem;
          top: -2rem;
          width: 24rem;
          height: 9rem;
          border: 3px dashed rgba(7,26,42,0.16);
          border-color: rgba(7,26,42,0.16) rgba(7,26,42,0.16) transparent transparent;
          border-radius: 50%;
          transform: rotate(10deg);
          animation: footer-doodle-float 12s ease-in-out infinite reverse;
        }

        .footer-reference-card {
          position: relative;
          overflow: hidden;
          min-height: 39rem;
          border-radius: 2.9rem;
          background:
            radial-gradient(circle at 18% 52%, rgba(42,55,72,0.28), transparent 18rem),
            linear-gradient(145deg, #070b13 0%, #060a12 52%, #04070d 100%);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 32px 80px rgba(5,18,28,0.34), inset 0 0 0 6px rgba(255,255,255,0.025);
          padding: 4.2rem 4.75rem 2.1rem;
        }

        .footer-reference-card::before {
          content: "";
          position: absolute;
          inset: 1rem;
          border-radius: 2.35rem;
          border: 1px solid rgba(255,255,255,0.055);
          pointer-events: none;
        }

        .footer-orbit {
          position: absolute;
          pointer-events: none;
          border: 1px solid rgba(255,255,255,0.05);
          opacity: 0.75;
        }

        .footer-orbit-one {
          left: 5.5rem;
          top: 10.5rem;
          width: 12rem;
          height: 6rem;
          border-radius: 50%;
          transform: rotate(8deg);
        }

        .footer-orbit-two {
          right: 5rem;
          bottom: 4rem;
          width: 16rem;
          height: 8rem;
          border-radius: 50%;
          transform: rotate(-10deg);
        }

        .footer-quick-area {
          position: relative;
          z-index: 2;
        }

        .footer-kicker {
          color: #d8a769;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 1.65rem;
        }

        .footer-tab-row {
          display: grid;
          grid-template-columns: 1.1fr 1fr 0.7fr 1.2fr 0.65fr;
          align-items: center;
          gap: 1.05rem;
          max-width: 55rem;
          margin-bottom: 1.4rem;
        }

        .footer-tab-pill {
          min-height: 3rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.42rem;
          border-radius: 1rem;
          color: rgba(255,255,255,0.88);
          font-size: 1.05rem;
          font-weight: 500;
          background: transparent;
          transition: transform 0.25s ease, color 0.25s ease, background 0.25s ease;
        }

        .footer-tab-pill:hover {
          color: #35cdf5;
          background: rgba(255,255,255,0.04);
          transform: translateY(-2px);
        }

        .footer-tab-active {
          justify-content: space-between;
          padding: 0 1rem;
          color: #35cdf5;
          background: rgba(17,25,36,0.96);
          box-shadow: 0 12px 26px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.05);
        }

        .footer-subnav-bar {
          max-width: 51rem;
          min-height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 0.75rem;
          padding: 0.7rem 1.25rem;
          border-radius: 0.45rem;
          background: rgba(13,20,31,0.98);
          border: 1px solid rgba(255,255,255,0.04);
          box-shadow: 0 16px 38px rgba(0,0,0,0.22);
        }

        .footer-subnav-link {
          color: rgba(255,255,255,0.82);
          font-size: 0.78rem;
          font-weight: 450;
          white-space: nowrap;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .footer-subnav-link:hover {
          color: #35cdf5;
          transform: translateY(-1px);
        }

        .footer-contact-stage {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.95fr);
          align-items: end;
          gap: 2.6rem;
          margin-top: 4.5rem;
        }

        .footer-contact-panel {
          min-height: 18rem;
          border-radius: 2rem 2rem 0 0;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(8,13,22,0.74);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
          padding: 4rem 4rem 2.6rem;
        }

        .footer-contact-line {
          display: grid;
          grid-template-columns: 2rem minmax(0, 1fr);
          align-items: center;
          gap: 1rem;
          color: rgba(255,255,255,0.64);
          font-size: 1rem;
          line-height: 1.35;
          margin-top: 1.25rem;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .footer-contact-line svg,
        .footer-contact-line > div {
          color: rgba(255,255,255,0.22);
        }

        .footer-contact-line:hover {
          color: #fff;
          transform: translateX(3px);
        }

        .footer-contact-email {
          color: #fff;
          font-size: 1.3rem;
          font-weight: 650;
        }

        .footer-tilt-card {
          min-height: 15rem;
          border-radius: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 1rem;
          color: #fff;
          background: rgba(8,13,22,0.72);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 22px 60px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05);
          transform: rotate(5deg) translateY(-1.4rem);
          transition: transform 0.35s ease, border-color 0.35s ease;
        }

        .footer-tilt-card:hover {
          transform: rotate(2deg) translateY(-1.85rem);
          border-color: rgba(53,205,245,0.28);
        }

        .footer-tilt-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          font-size: 1.35rem;
        }

        .footer-tilt-card p {
          color: rgba(255,255,255,0.68);
          font-size: 0.72rem;
        }

        .footer-social-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.35rem;
          margin-top: 0.7rem;
        }

        .footer-social-dot {
          width: 1.45rem;
          height: 1.45rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 800;
          opacity: 0.88;
          transition: transform 0.25s ease, color 0.25s ease;
        }

        .footer-social-dot:hover {
          color: #35cdf5;
          transform: translateY(-2px);
        }

        .footer-reference-bottom {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 1.2rem;
          color: rgba(255,255,255,0.36);
          font-size: 0.78rem;
        }

        .footer-reference-bottom a {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: #35cdf5;
          font-weight: 650;
        }

        @media (max-width: 639px) {
          .agency-edge-shell {
            min-height: auto;
            padding: 2.4rem 1.15rem 2.7rem;
            background:
              repeating-linear-gradient(90deg, rgba(15,23,42,0.05) 0 1px, transparent 1px 4.6rem),
              linear-gradient(180deg, #fbfbf8 0%, #f4f4f0 100%);
          }

          .agency-edge-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .agency-collage {
            width: min(76vw, 18rem);
            min-width: 0;
            justify-self: center;
            gap: 0.38rem;
          }

          .agency-collage-tile.tile-two {
            border-radius: 1.35rem 1.35rem 0.28rem 0.28rem;
          }

          .agency-collage-tile.tile-three {
            border-radius: 1.35rem 0.28rem 0.28rem 1.35rem;
          }

          .agency-collage-tile.tile-four {
            border-radius: 0.28rem 1.35rem 1.35rem 0.28rem;
          }

          .agency-edge-copy {
            max-width: 100%;
            text-align: left;
          }

          .agency-edge-copy h2 {
            max-width: 21rem;
            font-size: clamp(2rem, 9.4vw, 2.9rem);
            line-height: 1;
          }

          .agency-edge-copy h2 span {
            margin-bottom: 0.48rem;
            font-size: 0.68rem;
          }

          .agency-edge-copy p {
            max-width: 21rem;
            margin-top: 1rem;
            font-size: 0.76rem;
            line-height: 1.55;
          }

          .agency-edge-marker {
            right: 1rem;
            bottom: 1rem;
            width: 1.8rem;
          }

          .beyond-modern > .relative.z-10 {
            padding: 0 !important;
          }

          .beyond-modern-stage {
            min-height: 27.75rem;
            border-radius: 0;
          }

          .beyond-modern-stage::before {
            display: none;
          }

          .beyond-type-stack {
            display: none;
          }

          .beyond-mobile-poster {
            position: absolute;
            inset: 0;
            z-index: 5;
            display: block;
            overflow: hidden;
            background:
              radial-gradient(circle at 86% 78%, rgba(86,247,165,0.1), transparent 8rem),
              #020302;
            color: #fff;
            user-select: none;
          }

          .beyond-mobile-poster::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 2;
            pointer-events: none;
            opacity: 0.28;
            mix-blend-mode: lighten;
            background:
              linear-gradient(100deg, transparent 0 40%, rgba(255,255,255,0.14) 47%, rgba(86,247,165,0.18) 50%, transparent 58%),
              repeating-linear-gradient(180deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 3.75rem);
            animation: beyond-stage-scan 7s ease-in-out infinite;
          }

          .beyond-mobile-poster h2,
          .beyond-mobile-stack span {
            position: relative;
            z-index: 3;
            display: block;
            margin: 0;
            color: #fff;
            font-family: var(--font-body);
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0;
            white-space: nowrap;
          }

          .beyond-mobile-poster h2 {
            padding: 0.95rem 0 0 1rem;
            font-size: clamp(4.65rem, 20.6vw, 5.4rem);
            line-height: 0.92;
            animation: beyond-heading-pulse 6.2s ease-in-out infinite;
          }

          .beyond-mobile-stack {
            position: absolute;
            left: 1rem;
            right: 0;
            z-index: 3;
          }

          .beyond-mobile-stack-beyond {
            top: 6.45rem;
          }

          .beyond-mobile-stack-design {
            top: 18.95rem;
          }

          .beyond-mobile-stack span {
            font-size: clamp(4.75rem, 20.8vw, 5.62rem);
            line-height: 0.78;
            animation: beyond-type-slice 6.8s ease-in-out infinite;
          }

          .beyond-mobile-stack-design span {
            font-size: clamp(4.85rem, 21vw, 5.7rem);
            line-height: 0.8;
          }

          .beyond-mobile-stack span:nth-child(2) {
            animation-delay: -0.85s;
          }

          .beyond-mobile-stack span:nth-child(3) {
            animation-delay: -1.7s;
          }

          .beyond-mobile-stack span:nth-child(4) {
            animation-delay: -2.55s;
          }

          .beyond-logo-badge {
            left: auto;
            top: auto;
            bottom: 1.1rem;
            right: 0.78rem;
            width: 4.65rem;
          }

          .beyond-logo-badge::before {
            inset: -0.28rem;
          }

          .beyond-logo-badge::after {
            inset: 0.32rem;
          }

          .footer-brucira {
            border-radius: 1.45rem 1.45rem 0 0;
          }

          .footer-brucira > .relative {
            padding-top: 1.2rem !important;
            padding-bottom: 4.4rem !important;
          }

          .footer-brucira .grid > * {
            min-width: 0;
          }

          .footer-reference-card {
            min-height: auto;
            border-radius: 1.6rem;
            padding: 1.65rem 1rem 1rem;
          }

          .footer-reference-card::before {
            inset: 0.55rem;
            border-radius: 1.25rem;
          }

          .footer-orbit-one,
          .footer-orbit-two {
            opacity: 0.35;
          }

          .footer-kicker {
            font-size: 0.64rem;
            margin-bottom: 0.9rem;
          }

          .footer-tab-row {
            grid-template-columns: 1fr 1fr;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
          }

          .footer-tab-pill {
            min-height: 2.55rem;
            border-radius: 0.85rem;
            font-size: 0.82rem;
            padding: 0 0.55rem;
          }

          .footer-tab-active {
            grid-column: 1 / -1;
            justify-content: center;
          }

          .footer-subnav-bar {
            min-height: 0;
            justify-content: flex-start;
            overflow-x: auto;
            gap: 1rem;
            padding: 0.8rem 0.9rem;
            border-radius: 0.75rem;
          }

          .footer-subnav-link {
            font-size: 0.72rem;
          }

          .footer-contact-stage {
            grid-template-columns: 1fr;
            gap: 0.95rem;
            margin-top: 1.6rem;
          }

          .footer-contact-panel {
            min-height: auto;
            border-radius: 1.25rem;
            padding: 1.45rem 1rem;
          }

          .footer-contact-line {
            grid-template-columns: 1.55rem minmax(0, 1fr);
            gap: 0.75rem;
            font-size: 0.84rem;
            margin-top: 0.9rem;
          }

          .footer-contact-email {
            font-size: 0.96rem;
          }

          .footer-tilt-card {
            min-height: 11rem;
            border-radius: 1.25rem;
            transform: rotate(0deg);
            gap: 0.75rem;
          }

          .footer-tilt-card:hover {
            transform: translateY(-0.25rem);
          }

          .footer-tilt-brand {
            font-size: 1.05rem;
          }

          .footer-social-row {
            gap: 0.8rem;
          }

          .footer-reference-bottom {
            flex-wrap: wrap;
            align-items: flex-start;
            padding-top: 0.9rem;
            font-size: 0.72rem;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .footer-reference-card {
            padding: 3rem 2rem 1.4rem;
          }

          .footer-tab-row {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .footer-tab-active {
            grid-column: span 1;
          }

          .footer-contact-stage {
            grid-template-columns: 1fr;
            margin-top: 3rem;
          }

          .footer-contact-panel {
            padding: 2.5rem;
          }

          .footer-tilt-card {
            transform: rotate(2deg);
          }
        }

        /* --- Editorial Landscape Footer --- */
        .footer-editorial {
          min-height: 33.8rem;
          color: #181b17;
          background:
            radial-gradient(circle at 18% 24%, rgba(77,119,57,0.08), transparent 16rem),
            linear-gradient(180deg, #fbfbfa 0%, #f6f7f3 100%);
          font-family: var(--font-body);
          letter-spacing: 0;
        }

        .footer-editorial * {
          letter-spacing: 0 !important;
        }

        .footer-editorial-inner {
          position: relative;
          min-height: 33.8rem;
          max-width: 76.8rem;
          margin: 0 auto;
          padding: 4.35rem 4.9rem 2rem;
          overflow: hidden;
        }

        .footer-editorial-top,
        .footer-editorial-right,
        .footer-editorial-bottom {
          position: relative;
          z-index: 3;
        }

        .footer-editorial-top {
          width: min(23.5rem, 42vw);
          padding: 1.15rem 1.25rem;
          border-radius: 1.65rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.52), rgba(255,255,255,0.16));
          border: 1px solid rgba(255,255,255,0.54);
          box-shadow: 0 18px 44px rgba(56,77,45,0.08), inset 0 1px 0 rgba(255,255,255,0.82);
          backdrop-filter: blur(18px) saturate(1.14);
          -webkit-backdrop-filter: blur(18px) saturate(1.14);
        }

        .footer-editorial-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.56rem;
          margin-bottom: 1.2rem;
          color: #151815;
          font-size: 1.03rem;
          font-weight: 650;
        }

        .footer-brand-mark {
          width: 1.7rem;
          height: 1.7rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #fff;
          background: #151815;
          box-shadow: inset 0 0 0 0.35rem #f7f8f4;
        }

        .footer-brand-mark > div {
          color: #fff;
        }

        .footer-editorial-copy {
          max-width: 21rem;
          margin: 0 0 1.25rem;
          color: #252820;
          font-size: clamp(1.02rem, 1.15vw, 1.16rem);
          line-height: 1.45;
          font-family: var(--font-body);
          font-weight: 400;
        }

        .footer-email-pill {
          width: min(21rem, 100%);
          height: 2.55rem;
          display: flex;
          align-items: center;
          gap: 0.38rem;
          padding: 0.24rem 0.24rem 0.24rem 1.25rem;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(255,255,255,0.78), rgba(255,255,255,0.42));
          border: 1px solid rgba(24,27,23,0.09);
          box-shadow: 0 16px 36px rgba(24,27,23,0.08), inset 0 1px 0 rgba(255,255,255,0.96);
          backdrop-filter: blur(20px) saturate(1.18);
          -webkit-backdrop-filter: blur(20px) saturate(1.18);
        }

        .footer-email-pill input {
          min-width: 0;
          flex: 1;
          height: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: #1f231d;
          font-size: 0.9rem;
          font-family: var(--font-body);
        }

        .footer-email-pill input::placeholder {
          color: rgba(31,35,29,0.44);
        }

        .footer-email-pill button {
          height: 2.08rem;
          min-width: 5.7rem;
          border-radius: 999px;
          color: #fff;
          font-size: 0.86rem;
          font-weight: 600;
          background:
            radial-gradient(circle at 20% 18%, rgba(255,255,255,0.36), transparent 2.6rem),
            linear-gradient(135deg, #2b3028, #11140f);
          box-shadow: 0 8px 18px rgba(17,20,15,0.24);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .footer-email-pill button:hover {
          transform: translateY(-1px);
          box-shadow: 0 11px 22px rgba(17,20,15,0.3);
        }

        .footer-editorial-right {
          position: absolute;
          top: 5.35rem;
          right: 4.9rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2.05rem;
        }

        .footer-social-circles {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.74rem;
        }

        .footer-social-circle {
          width: 2.48rem;
          height: 2.48rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #4d7739;
          background: linear-gradient(135deg, rgba(255,255,255,0.64), rgba(255,255,255,0.22));
          border: 1px solid rgba(83,124,59,0.48);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.84), 0 12px 26px rgba(72,108,51,0.09);
          backdrop-filter: blur(18px) saturate(1.16);
          -webkit-backdrop-filter: blur(18px) saturate(1.16);
          transition: transform 0.22s ease, background 0.22s ease, color 0.22s ease;
        }

        .footer-social-circle:hover {
          color: #fff;
          background: #4d7739;
          transform: translateY(-3px);
        }

        .footer-editorial-nav {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(1.4rem, 3vw, 2.7rem);
          color: #181b17;
          padding: 0.66rem 0.9rem;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(255,255,255,0.42), rgba(255,255,255,0.13));
          border: 1px solid rgba(255,255,255,0.46);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.72);
          backdrop-filter: blur(14px) saturate(1.1);
          -webkit-backdrop-filter: blur(14px) saturate(1.1);
        }

        .footer-editorial-nav button {
          color: currentColor;
          font-family: var(--font-body);
          font-size: 0.96rem;
          font-weight: 430;
          transition: color 0.22s ease, transform 0.22s ease;
        }

        .footer-editorial-nav button:hover {
          color: #4d7739;
          transform: translateY(-2px);
        }

        .footer-landscape-art {
          position: absolute;
          z-index: 1;
          left: 50%;
          bottom: 0;
          width: max(112vw, 84rem);
          max-width: none;
          height: min(29.5rem, 82%);
          transform: translateX(-50%);
          object-fit: cover;
          object-position: center bottom;
          pointer-events: none;
          user-select: none;
        }

        .footer-editorial-inner::after {
          content: "";
          position: absolute;
          z-index: 2;
          left: 0;
          right: 0;
          bottom: 0;
          height: 9.8rem;
          background:
            radial-gradient(ellipse at 50% 98%, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.7) 34%, transparent 72%),
            linear-gradient(180deg, transparent 0%, rgba(247,248,244,0.34) 48%, #fbfbfa 96%);
          pointer-events: none;
        }

        .footer-editorial-bottom {
          position: absolute;
          left: 4.9rem;
          right: 4.9rem;
          bottom: 1.55rem;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 1rem;
          color: rgba(24,27,23,0.72);
          font-family: var(--font-body);
          font-size: 0.82rem;
          text-align: center;
        }

        .footer-editorial-bottom a {
          color: rgba(24,27,23,0.76);
          transition: color 0.22s ease;
        }

        .footer-editorial-bottom a:first-child {
          justify-self: start;
        }

        .footer-editorial-bottom a:last-child {
          justify-self: end;
        }

        .footer-editorial-bottom a:hover {
          color: #4d7739;
        }

        @media (max-width: 639px) {
          .footer-editorial {
            min-height: 32.5rem;
            border-radius: 1.35rem 1.35rem 0 0;
          }

          .footer-editorial-inner {
            min-height: 32.5rem;
            padding: 1.55rem 1.2rem 1.15rem;
          }

          .footer-editorial-top {
            width: 100%;
          }

          .footer-editorial-brand {
            margin-bottom: 0.95rem;
          }

          .footer-editorial-copy {
            max-width: 18.75rem;
            margin-bottom: 1.25rem;
            font-size: 0.92rem;
            line-height: 1.48;
          }

          .footer-email-pill {
            width: min(20.8rem, 100%);
            height: 2.5rem;
          }

          .footer-email-pill button {
            min-width: 5rem;
          }

          .footer-editorial-right {
            position: relative;
            top: auto;
            right: auto;
            align-items: flex-start;
            gap: 1.25rem;
            margin-top: 1.1rem;
          }

          .footer-social-circles {
            justify-content: flex-start;
            gap: 0.62rem;
          }

          .footer-social-circle {
            width: 2.34rem;
            height: 2.34rem;
          }

          .footer-editorial-nav {
            width: 100%;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 0.8rem 1.05rem;
          }

          .footer-editorial-nav button {
            font-size: 0.82rem;
          }

          .footer-landscape-art {
            height: 17.8rem;
            width: 205vw;
            object-position: 48% bottom;
          }

          .footer-editorial-inner::after {
            height: 8.5rem;
          }

          .footer-editorial-bottom {
            left: 1.2rem;
            right: 1.2rem;
            bottom: 1rem;
            grid-template-columns: 1fr;
            gap: 0.32rem;
            text-align: left;
            font-size: 0.67rem;
          }

          .footer-editorial-bottom a:first-child,
          .footer-editorial-bottom a:last-child {
            justify-self: start;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .footer-editorial-inner {
            padding: 3.2rem 2.4rem 1.5rem;
          }

          .footer-editorial-top {
            width: min(22rem, 48vw);
          }

          .footer-editorial-right {
            right: 2.4rem;
            top: 4.1rem;
          }

          .footer-editorial-nav {
            gap: 1.3rem;
          }

          .footer-editorial-bottom {
            left: 2.4rem;
            right: 2.4rem;
          }
        }

        /* --- Minimal Studio Footer --- */
        .footer-studio {
          color: #101411;
          background:
            linear-gradient(115deg, rgba(255,255,255,0.86), rgba(242,249,239,0.78)),
            linear-gradient(180deg, #f7faf3 0%, #ecf4e9 100%);
          font-family: var(--font-body);
          letter-spacing: 0;
        }

        .footer-studio * {
          letter-spacing: 0 !important;
        }

        .footer-studio-inner {
          position: relative;
          max-width: 78rem;
          min-height: 25.5rem;
          margin: 0 auto;
          padding: clamp(1.4rem, 3vw, 2.65rem) clamp(1.05rem, 4.5vw, 4rem) 1.25rem;
          display: flex;
          flex-direction: column;
          gap: clamp(1.1rem, 2.4vw, 2rem);
        }

        .footer-studio-inner::before {
          content: "";
          position: absolute;
          inset: 0 clamp(1.05rem, 4.5vw, 4rem);
          border-top: 1px solid rgba(16,20,17,0.12);
          pointer-events: none;
        }

        .footer-studio-top,
        .footer-studio-main,
        .footer-studio-links,
        .footer-studio-bottom {
          position: relative;
          z-index: 2;
        }

        .footer-studio-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 1.1rem;
        }

        .footer-studio-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.64rem;
          font-size: 1.08rem;
          font-weight: 720;
          color: #0f1410;
        }

        .footer-studio-brand span {
          width: 2.35rem;
          height: 2.35rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #f8fff8;
          background: #101411;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.18);
        }

        .footer-studio-status {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.52rem 0.78rem;
          border-radius: 999px;
          color: rgba(16,20,17,0.66);
          font-size: 0.78rem;
          font-weight: 560;
          background: rgba(255,255,255,0.48);
          border: 1px solid rgba(255,255,255,0.7);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.86);
          backdrop-filter: blur(18px) saturate(1.18);
          -webkit-backdrop-filter: blur(18px) saturate(1.18);
        }

        .footer-studio-status i {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background: #25d366;
          box-shadow: 0 0 0 0.32rem rgba(37,211,102,0.12);
        }

        .footer-studio-main {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.36fr);
          align-items: end;
          gap: clamp(1.4rem, 5vw, 4.5rem);
          margin-top: auto;
        }

        .footer-studio-copy p {
          margin: 0 0 0.9rem;
          color: rgba(16,20,17,0.48);
          font-size: 0.78rem;
          font-weight: 780;
          text-transform: uppercase;
        }

        .footer-studio-copy h2 {
          max-width: 52rem;
          color: #0a0f0b;
          font-size: clamp(2.55rem, 6.35vw, 5.65rem);
          line-height: 0.94;
          font-weight: 520;
          text-wrap: balance;
        }

        .footer-studio-contact {
          display: flex;
          flex-direction: column;
          gap: 0.72rem;
          padding: 1.05rem;
          border-radius: 1.35rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.66), rgba(255,255,255,0.22));
          border: 1px solid rgba(255,255,255,0.78);
          box-shadow: 0 20px 46px rgba(45,82,52,0.12), inset 0 1px 0 rgba(255,255,255,0.88);
          backdrop-filter: blur(22px) saturate(1.2);
          -webkit-backdrop-filter: blur(22px) saturate(1.2);
        }

        .footer-studio-contact span {
          color: rgba(16,20,17,0.48);
          font-size: 0.73rem;
          font-weight: 760;
          text-transform: uppercase;
        }

        .footer-studio-contact a {
          color: #101411;
          font-size: 0.92rem;
          font-weight: 650;
          overflow-wrap: anywhere;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .footer-studio-contact a:hover {
          color: #256d38;
          transform: translateX(0.18rem);
        }

        .footer-studio-links {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.9rem 0;
          border-top: 1px solid rgba(16,20,17,0.1);
          border-bottom: 1px solid rgba(16,20,17,0.1);
        }

        .footer-studio-links nav,
        .footer-studio-socials {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.55rem;
        }

        .footer-studio-links button,
        .footer-studio-socials a {
          min-height: 2.15rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: rgba(16,20,17,0.72);
          background: rgba(255,255,255,0.32);
          border: 1px solid rgba(255,255,255,0.54);
          font-size: 0.78rem;
          font-weight: 650;
          transition: transform 0.2s ease, color 0.2s ease, background 0.2s ease;
        }

        .footer-studio-links button {
          padding: 0 0.88rem;
        }

        .footer-studio-socials a {
          width: 2.15rem;
        }

        .footer-studio-links button:hover,
        .footer-studio-socials a:hover {
          color: #fff;
          background: #101411;
          transform: translateY(-2px);
        }

        .footer-studio-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          color: rgba(16,20,17,0.48);
          font-size: 0.76rem;
          padding-bottom: 0.2rem;
        }

        @media (max-width: 639px) {
          .footer-studio-inner {
            min-height: 34rem;
            padding: 1.2rem 1.05rem 1rem;
            gap: 1.35rem;
          }

          .footer-studio-inner::before {
            inset: 0 1.05rem;
          }

          .footer-studio-top {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.85rem;
            padding-top: 1rem;
          }

          .footer-studio-status {
            width: 100%;
            justify-content: center;
          }

          .footer-studio-main {
            grid-template-columns: 1fr;
            align-items: stretch;
            gap: 1.2rem;
          }

          .footer-studio-copy h2 {
            font-size: clamp(2rem, 9.4vw, 2.65rem);
            line-height: 1.02;
          }

          .footer-studio-contact {
            padding: 1rem;
          }

          .footer-studio-links {
            align-items: stretch;
            flex-direction: column;
            gap: 0.85rem;
          }

          .footer-studio-links nav {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.55rem;
          }

          .footer-studio-links button {
            width: 100%;
          }

          .footer-studio-socials {
            justify-content: center;
          }

          .footer-studio-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.28rem;
          }
        }

        /* --- Mint Motion Footer --- */
        .footer-mint {
          min-height: clamp(24.5rem, 44vw, 34rem);
          display: flex;
          align-items: center;
          color: #18231e;
          background:
            radial-gradient(circle at 28% 18%, rgba(255,255,255,0.18), transparent 16rem),
            radial-gradient(circle at 78% 72%, rgba(12,93,54,0.18), transparent 18rem),
            linear-gradient(135deg, #42df9b 0%, #4ae1a2 50%, #34d58d 100%);
          font-family: var(--font-body);
          letter-spacing: 0;
        }

        .footer-mint * {
          letter-spacing: 0 !important;
        }

        .footer-mint::before {
          content: "";
          position: absolute;
          inset: -20%;
          background:
            linear-gradient(115deg, transparent 0 35%, rgba(255,255,255,0.14) 43%, transparent 51%),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.055) 0 1px, transparent 1px 6.4rem);
          opacity: 0.42;
          animation: footer-mint-sheen 12s ease-in-out infinite;
          pointer-events: none;
        }

        .footer-mint-shell {
          position: relative;
          z-index: 2;
          width: min(74rem, calc(100% - clamp(1.5rem, 7vw, 7rem)));
          margin: 0 auto;
        }

        .footer-mint-card {
          position: relative;
          min-height: clamp(19.5rem, 31vw, 26rem);
          overflow: hidden;
          border-radius: clamp(1.3rem, 2.5vw, 2.3rem);
          padding: clamp(1.15rem, 2.15vw, 1.95rem);
          background:
            linear-gradient(135deg, rgba(255,255,255,0.28), rgba(255,255,255,0.07)),
            rgba(80,229,163,0.42);
          border: 1px solid rgba(255,255,255,0.34);
          box-shadow:
            0 26px 80px rgba(8,99,58,0.22),
            inset 0 1px 0 rgba(255,255,255,0.42),
            inset 0 0 44px rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(6,88,49,0.08);
          backdrop-filter: blur(28px) saturate(1.38);
          -webkit-backdrop-filter: blur(28px) saturate(1.38);
        }

        .footer-mint-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          border-radius: inherit;
          background:
            radial-gradient(circle at 18% 84%, rgba(255,255,255,0.22), transparent 13rem),
            radial-gradient(circle at 76% 20%, rgba(9,61,38,0.1), transparent 15rem);
          animation: footer-mint-breathe 8s ease-in-out infinite;
        }

        .footer-mint-top,
        .footer-mint-chips,
        .footer-mint-bottom {
          position: relative;
          z-index: 3;
        }

        .footer-mint-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          color: rgba(20,31,26,0.78);
          font-size: clamp(0.88rem, 1.35vw, 1.1rem);
          font-weight: 520;
        }

        .footer-mint-credit {
          display: inline-block;
          max-width: min(31rem, 58%);
          animation: footer-text-rise 0.9s cubic-bezier(.2,.8,.2,1) both;
        }

        .footer-mint-top a {
          color: rgba(20,31,26,0.84);
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .footer-mint-top a:hover {
          color: #07100c;
          transform: translateY(-1px);
        }

        .footer-mint-live {
          display: inline-flex;
          align-items: center;
          gap: 0.52rem;
          padding: 0.48rem 0.68rem;
          border-radius: 999px;
          color: #07100c !important;
          background: rgba(255,255,255,0.34);
          border: 1px solid rgba(255,255,255,0.45);
          box-shadow: 0 12px 28px rgba(7,77,43,0.1), inset 0 1px 0 rgba(255,255,255,0.5);
          backdrop-filter: blur(16px) saturate(1.25);
          -webkit-backdrop-filter: blur(16px) saturate(1.25);
        }

        .footer-mint-live i {
          position: relative;
          width: 0.58rem;
          height: 0.58rem;
          border-radius: 50%;
          background: ${isStudioOnline ? '#0f2219' : '#d84f3f'};
          box-shadow: ${isStudioOnline ? '0 0 0 0.28rem rgba(15,34,25,0.1), 0 0 18px rgba(15,34,25,0.28)' : '0 0 0 0.28rem rgba(216,79,63,0.14), 0 0 18px rgba(216,79,63,0.26)'};
        }

        .footer-mint-live i::after {
          content: "";
          position: absolute;
          inset: -0.42rem;
          border-radius: inherit;
          border: 1px solid ${isStudioOnline ? 'rgba(15,34,25,0.42)' : 'rgba(216,79,63,0.46)'};
          animation: footer-live-pulse 1.7s ease-out infinite;
        }

        .footer-mint-live span {
          font-weight: 720;
        }

        .footer-mint-live em {
          color: rgba(7,16,12,0.58);
          font-style: normal;
          font-size: 0.78em;
        }

        .footer-mint-chips {
          position: absolute;
          left: 10%;
          right: 7%;
          bottom: clamp(3.85rem, 7.1vw, 6rem);
          min-height: 7rem;
        }

        .footer-mint-chip {
          position: absolute;
          min-height: 2.85rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 1.25rem;
          border-radius: 999px;
          color: rgba(19,31,25,0.78);
          font-size: clamp(0.95rem, 1.45vw, 1.25rem);
          font-weight: 520;
          background: rgba(83,229,166,0.38);
          border: 1px solid rgba(12,58,37,0.42);
          box-shadow: 0 12px 28px rgba(12,88,51,0.12), inset 0 1px 0 rgba(255,255,255,0.18);
          backdrop-filter: blur(14px) saturate(1.2);
          -webkit-backdrop-filter: blur(14px) saturate(1.2);
          transform: rotate(var(--chip-rotate));
          animation:
            footer-chip-drop 0.9s cubic-bezier(.2,.9,.2,1.08) both,
            footer-chip-float 5.8s ease-in-out 1s infinite;
          transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;
        }

        .footer-mint-chip:hover {
          color: #07100c;
          background: rgba(255,255,255,0.32);
          transform: translateY(-0.25rem) rotate(var(--chip-rotate));
        }

        .footer-mint-chip-1 { left: 8%; top: 1.35rem; animation-delay: 0.05s, 1.05s; }
        .footer-mint-chip-2 { left: 28%; top: 0.2rem; animation-delay: 0.18s, 1.18s; }
        .footer-mint-chip-3 { left: 44%; top: 3.4rem; animation-delay: 0.3s, 1.3s; }
        .footer-mint-chip-4 { right: 22%; top: 1.35rem; animation-delay: 0.42s, 1.42s; }
        .footer-mint-chip-5 { right: 2%; top: 2.4rem; animation-delay: 0.55s, 1.55s; }

        .footer-mint-wordmark {
          position: absolute;
          z-index: 2;
          left: clamp(1.15rem, 3vw, 2.2rem);
          right: clamp(1.15rem, 3vw, 2.2rem);
          bottom: clamp(-1.25rem, -2.15vw, -0.35rem);
          color: #202020;
          font-size: clamp(8.6rem, 26vw, 22rem);
          line-height: 0.72;
          font-weight: 780;
          white-space: nowrap;
          letter-spacing: -0.08em !important;
          transform: translateX(-0.04em);
          filter: drop-shadow(0 16px 28px rgba(5,61,35,0.16));
          pointer-events: none;
          user-select: none;
          animation: footer-wordmark-lift 7s ease-in-out infinite;
        }

        .footer-mint-bottom {
          position: absolute;
          left: clamp(1.35rem, 2.5vw, 2.25rem);
          right: clamp(1.35rem, 2.5vw, 2.25rem);
          bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          color: rgba(20,31,26,0.76);
          font-size: 0.78rem;
          font-weight: 650;
          padding: 0.52rem 0.7rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.24);
          border: 1px solid rgba(255,255,255,0.34);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.34);
          backdrop-filter: blur(14px) saturate(1.18);
          -webkit-backdrop-filter: blur(14px) saturate(1.18);
        }

        .footer-mint-bottom a {
          color: #07100c;
          font-weight: 720;
          text-decoration: none;
        }

        @media (max-width: 639px) {
          .footer-mint {
            min-height: 28rem;
            align-items: stretch;
          }

          .footer-mint-shell {
            width: calc(100% - 1.1rem);
            display: flex;
            align-items: center;
            padding: 0.55rem 0;
          }

          .footer-mint-card {
            width: 100%;
            min-height: 25.8rem;
            padding: 1.05rem;
            border-radius: 1.25rem;
          }

          .footer-mint-top {
            align-items: flex-start;
            font-size: 0.76rem;
            gap: 0.65rem;
          }

          .footer-mint-credit {
            max-width: 13.8rem;
            line-height: 1.2;
          }

          .footer-mint-live {
            flex-shrink: 0;
            padding: 0.44rem 0.55rem;
            gap: 0.42rem;
          }

          .footer-mint-live span {
            max-width: 4rem;
            line-height: 1.05;
          }

          .footer-mint-live em {
            display: inline;
            font-size: 0.68rem;
          }

          .footer-mint-chips {
            left: 0.8rem;
            right: 0.8rem;
            bottom: 6.95rem;
            min-height: 9rem;
          }

          .footer-mint-chip {
            min-height: 2.35rem;
            padding: 0 0.86rem;
            font-size: 0.82rem;
          }

          .footer-mint-chip-1 { left: 1%; top: 0.95rem; }
          .footer-mint-chip-2 { left: 33%; top: 0.2rem; }
          .footer-mint-chip-3 { left: 22%; top: 3.55rem; }
          .footer-mint-chip-4 { right: 1%; top: 3.1rem; }
          .footer-mint-chip-5 { right: 15%; top: 6.45rem; }

          .footer-mint-wordmark {
            left: 0.9rem;
            bottom: 2.45rem;
            font-size: clamp(6.3rem, 35vw, 8.4rem);
            line-height: 0.76;
          }

          .footer-mint-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.24rem;
            bottom: 0.72rem;
            font-size: 0.66rem;
            padding: 0.58rem 0.7rem;
            border-radius: 0.9rem;
          }
        }

        @keyframes footer-chip-drop {
          0% { opacity: 0; translate: 0 -4.8rem; scale: 0.92; }
          68% { opacity: 1; translate: 0 0.28rem; scale: 1.02; }
          100% { opacity: 1; translate: 0 0; scale: 1; }
        }

        @keyframes footer-chip-float {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -0.58rem; }
        }

        @keyframes footer-mint-sheen {
          0%, 100% { transform: translateX(-3%) rotate(0deg); opacity: 0.32; }
          50% { transform: translateX(3%) rotate(1deg); opacity: 0.5; }
        }

        @keyframes footer-mint-breathe {
          0%, 100% { opacity: 0.62; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.03); }
        }

        @keyframes footer-live-pulse {
          0% { transform: scale(0.65); opacity: 0.85; }
          100% { transform: scale(1.75); opacity: 0; }
        }

        @keyframes footer-text-rise {
          0% { opacity: 0; transform: translateY(0.85rem); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes footer-wordmark-lift {
          0%, 100% { transform: translateX(-0.04em) translateY(0); }
          50% { transform: translateX(-0.04em) translateY(-0.22rem); }
        }

        /* --- Black Editorial Footer --- */
        .footer-clinic {
          min-height: clamp(31rem, 52vw, 43rem);
          color: #fff;
          background:
            radial-gradient(circle at 14% 22%, rgba(67, 255, 166, 0.12), transparent 14rem),
            radial-gradient(circle at 82% 18%, rgba(255, 255, 255, 0.08), transparent 18rem),
            linear-gradient(180deg, #020302 0%, #000 100%);
          font-family: var(--font-body);
          letter-spacing: 0;
        }

        .footer-clinic * {
          letter-spacing: 0 !important;
        }

        .footer-clinic-inner {
          position: relative;
          z-index: 2;
          max-width: 78rem;
          min-height: clamp(31rem, 52vw, 43rem);
          margin: 0 auto;
          padding: clamp(1.55rem, 3.2vw, 3rem) clamp(1.25rem, 4.5vw, 4rem) 1.35rem;
          display: flex;
          flex-direction: column;
        }

        .footer-clinic-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 999px;
          filter: blur(24px);
          opacity: 0.58;
        }

        .footer-clinic-glow-one {
          width: 17rem;
          height: 17rem;
          left: -7rem;
          top: 4rem;
          background: rgba(58, 255, 151, 0.14);
        }

        .footer-clinic-glow-two {
          width: 22rem;
          height: 22rem;
          right: -9rem;
          bottom: -8rem;
          background: rgba(255,255,255,0.08);
        }

        .footer-clinic-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          width: fit-content;
          font-size: clamp(1.35rem, 2.4vw, 2rem);
          line-height: 1;
          font-weight: 600;
          color: #fff;
        }

        .footer-clinic-logo {
          width: 2.15rem;
          height: 2.15rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.75rem;
          color: #fff;
          background:
            radial-gradient(circle at 32% 24%, rgba(255,255,255,0.9), transparent 0.28rem),
            linear-gradient(135deg, rgba(42,255,152,0.92), rgba(29,92,255,0.95));
          box-shadow: 0 0 28px rgba(47,255,152,0.28), inset 0 1px 0 rgba(255,255,255,0.55);
        }

        .footer-clinic-rule {
          height: 1px;
          margin: clamp(1.55rem, 3.1vw, 2.7rem) 0 clamp(1.5rem, 2.7vw, 2.2rem);
          background: linear-gradient(90deg, rgba(255,255,255,0.38), rgba(255,255,255,0.18), rgba(255,255,255,0.04));
        }

        .footer-clinic-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(20rem, 0.8fr);
          align-items: start;
          gap: clamp(1.5rem, 5vw, 5rem);
          position: relative;
          z-index: 3;
        }

        .footer-clinic-cta {
          width: min(28rem, 100%);
          padding: 1.25rem;
          border-radius: 1.55rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.025));
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 22px 60px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.14);
          backdrop-filter: blur(20px) saturate(1.25);
          -webkit-backdrop-filter: blur(20px) saturate(1.25);
        }

        .footer-clinic-cta h3 {
          margin: 0 0 1.25rem;
          color: rgba(255,255,255,0.72);
          font-size: clamp(1.45rem, 2.3vw, 2.2rem);
          line-height: 1.22;
          font-weight: 350;
        }

        .footer-clinic-cta h3 span {
          display: block;
          color: #fff;
          font-weight: 650;
        }

        .footer-clinic-button {
          min-height: 2.65rem;
          width: fit-content;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          padding: 0 1.15rem;
          border-radius: 999px;
          color: #080908;
          background: #fff;
          font-size: 0.88rem;
          font-weight: 650;
          box-shadow: 0 14px 30px rgba(255,255,255,0.14), inset 0 1px 0 rgba(255,255,255,0.85);
          transition: transform 0.24s ease, box-shadow 0.24s ease;
        }

        .footer-clinic-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 38px rgba(255,255,255,0.2), inset 0 1px 0 rgba(255,255,255,0.9);
        }

        .footer-clinic-menu {
          justify-self: end;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1.45rem;
          padding: 1.05rem;
          border-radius: 1.45rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.025));
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.12);
          backdrop-filter: blur(18px) saturate(1.2);
          -webkit-backdrop-filter: blur(18px) saturate(1.2);
        }

        .footer-clinic-nav {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(1.1rem, 2.3vw, 2rem);
        }

        .footer-clinic-nav button {
          color: rgba(255,255,255,0.72);
          font-size: 0.86rem;
          font-weight: 450;
          transition: color 0.22s ease, transform 0.22s ease;
        }

        .footer-clinic-nav button:hover {
          color: #fff;
          transform: translateY(-2px);
        }

        .footer-clinic-socials {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.68rem;
        }

        .footer-clinic-social {
          width: 2.18rem;
          height: 2.18rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #fff;
          font-size: 0.74rem;
          font-weight: 750;
          background: linear-gradient(135deg, rgba(255,255,255,0.11), rgba(255,255,255,0.025));
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.18);
          backdrop-filter: blur(14px) saturate(1.25);
          -webkit-backdrop-filter: blur(14px) saturate(1.25);
          transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease;
        }

        .footer-clinic-social:hover {
          transform: translateY(-3px);
          border-color: rgba(91,255,166,0.72);
          background: rgba(91,255,166,0.16);
        }

        .footer-clinic-wordmark {
          margin-top: auto;
          width: 100%;
          color: #fff;
          font-size: clamp(4.7rem, 12.1vw, 10.7rem);
          line-height: 0.82;
          font-weight: 420;
          white-space: nowrap;
          letter-spacing: -0.065em !important;
          transform: translateY(0.2rem);
          text-shadow: 0 0 48px rgba(255,255,255,0.06);
        }

        .footer-clinic-bottom {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 1rem;
          align-items: center;
          padding-top: 0.95rem;
          color: rgba(255,255,255,0.46);
          font-size: 0.74rem;
        }

        .footer-clinic-bottom a {
          color: rgba(255,255,255,0.56);
          transition: color 0.22s ease;
        }

        .footer-clinic-bottom a:first-child {
          justify-self: start;
        }

        .footer-clinic-bottom a:last-child {
          justify-self: end;
        }

        .footer-clinic-bottom a:hover {
          color: #fff;
        }

        @media (max-width: 639px) {
          .footer-clinic {
            min-height: 39rem;
            border-radius: 1.25rem 1.25rem 0 0;
          }

          .footer-clinic-inner {
            min-height: 39rem;
            padding: 1.55rem 1.1rem 1.05rem;
          }

          .footer-clinic-brand {
            font-size: 1.35rem;
          }

          .footer-clinic-rule {
            margin: 1.45rem 0 1.6rem;
          }

          .footer-clinic-grid {
            grid-template-columns: 1fr;
            gap: 1.45rem;
          }

          .footer-clinic-cta {
            width: 100%;
            padding: 1.15rem;
            border-radius: 1.35rem;
          }

          .footer-clinic-cta h3 {
            font-size: 1.42rem;
            margin-bottom: 1.05rem;
          }

          .footer-clinic-menu {
            width: 100%;
            align-items: flex-start;
            gap: 1.2rem;
            padding: 0.15rem 0.15rem 0;
            border: 0;
            background: transparent;
            box-shadow: none;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
          }

          .footer-clinic-nav {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.7rem;
          }

          .footer-clinic-nav button {
            min-height: 2.45rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            color: rgba(255,255,255,0.78);
            background: rgba(255,255,255,0.045);
            border: 1px solid rgba(255,255,255,0.08);
            font-size: 0.82rem;
          }

          .footer-clinic-socials {
            width: 100%;
            justify-content: center;
            gap: 0.82rem;
            padding-top: 0.1rem;
          }

          .footer-clinic-social {
            width: 2.35rem;
            height: 2.35rem;
          }

          .footer-clinic-wordmark {
            font-size: clamp(3.35rem, 17vw, 4.7rem);
            line-height: 0.88;
            white-space: normal;
            max-width: 19rem;
            margin-top: 2.1rem;
            transform: translateY(0);
          }

          .footer-clinic-bottom {
            grid-template-columns: 1fr;
            gap: 0.5rem;
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid rgba(255,255,255,0.12);
            font-size: 0.7rem;
            line-height: 1.35;
          }

          .footer-clinic-bottom a:first-child,
          .footer-clinic-bottom a:last-child {
            justify-self: start;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .footer-clinic-grid {
            grid-template-columns: 1fr;
          }

          .footer-clinic-menu {
            justify-self: start;
            align-items: flex-start;
          }

          .footer-clinic-nav,
          .footer-clinic-socials {
            justify-content: flex-start;
          }

          .footer-clinic-wordmark {
            font-size: clamp(5.2rem, 15vw, 8.3rem);
          }
        }

        @keyframes service-core-breathe {
          0%, 100% { transform: scale(0.94) rotate(0deg); border-radius: 1rem 1.35rem 1.15rem 1.45rem; }
          50% { transform: scale(1.08) rotate(7deg); border-radius: 1.45rem 1rem 1.5rem 1.08rem; }
        }

        @keyframes service-orbit-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes refract-background-slide {
          0% { transform: translateX(-6%); }
          100% { transform: translateX(6%); }
        }

        @keyframes refract-sheen {
          0%, 100% { transform: translateX(-35%) rotate(0deg); opacity: 0.25; }
          50% { transform: translateX(35%) rotate(1deg); opacity: 0.58; }
        }

        @keyframes refract-grid {
          0% { transform: perspective(900px) rotateX(56deg) translateY(-18%) scale(1); }
          100% { transform: perspective(900px) rotateX(58deg) translateY(-22%) scale(1.04); }
        }

        @keyframes vertical-scan {
          0% { transform: translateY(-110%); }
          55%, 100% { transform: translateY(110%); }
        }

        @keyframes blade-drift {
          0%, 100% { transform: skewX(-13deg) translateX(-22%); }
          50% { transform: skewX(-13deg) translateX(18%); }
        }

        @keyframes wego-letter-fold {
          0%, 100% { transform: translateY(0) rotateX(0deg); opacity: 0.72; filter: blur(0px); }
          38% { transform: translateY(-0.14em) rotateX(24deg); opacity: 1; filter: blur(0px); }
          58% { transform: translateY(0.08em) rotateX(-18deg); opacity: 0.82; filter: blur(0.5px); }
        }

        @keyframes kinetic-primary {
          0%, 100% { transform: translateX(0) scaleX(1); clip-path: inset(0 0 0 0); }
          32% { transform: translateX(-0.06em) scaleX(1.03); clip-path: inset(0 3% 0 0); }
          62% { transform: translateX(0.04em) scaleX(0.98); clip-path: inset(0 0 0 4%); }
        }

        @keyframes kinetic-secondary {
          0%, 100% { transform: translateX(0.08em); opacity: 0.72; }
          40% { transform: translateX(-0.04em); opacity: 1; }
          68% { transform: translateX(0.13em); opacity: 0.58; }
        }

        @keyframes kinetic-shadow {
          0%, 100% { transform: translateY(0.03em) scaleY(0.92); opacity: 0.75; }
          50% { transform: translateY(-0.01em) scaleY(1.05); opacity: 1; }
        }

        @keyframes chip-refract {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes beyond-stage-scan {
          0%, 100% { transform: translateX(-64%) skewX(-5deg); opacity: 0.08; }
          42% { opacity: 0.32; }
          58% { transform: translateX(64%) skewX(-5deg); opacity: 0.2; }
          76% { transform: translateX(16%) skewX(3deg); opacity: 0.1; }
        }

        @keyframes beyond-heading-pulse {
          0%, 100% {
            opacity: 1;
            text-shadow: 0 0 0 rgba(255,255,255,0);
            clip-path: inset(0 0 0 0);
          }
          35% {
            opacity: 0.96;
            text-shadow: 0 0 1.2rem rgba(86,247,165,0.18);
            clip-path: inset(0 0.7% 0 0);
          }
          54% {
            opacity: 1;
            text-shadow: 0 0 1.8rem rgba(255,255,255,0.08);
            clip-path: inset(0 0 0 0.8%);
          }
        }

        @keyframes beyond-type-slice {
          0%, 100% {
            opacity: 0.96;
            text-shadow: none;
            clip-path: inset(0 0 0 0);
          }
          32% {
            opacity: 1;
            text-shadow: 0 0 1rem rgba(86,247,165,0.12);
            clip-path: inset(0 0 72% 0);
          }
          34% {
            clip-path: inset(34% 0 28% 0);
          }
          36% {
            clip-path: inset(72% 0 0 0);
          }
          39%, 78% {
            text-shadow: none;
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes beyond-logo-ring {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes beyond-logo-float {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          50% { transform: translate3d(0, -0.34rem, 0) rotate(-2deg) scale(1.035); }
        }

        @keyframes beyond-logo-breathe {
          0%, 100% { transform: scale(0.98) rotate(0deg); opacity: 0.9; }
          50% { transform: scale(1.08) rotate(-2deg); opacity: 1; }
        }

        @keyframes beyond-logo-neon {
          0%, 100% {
            box-shadow:
              0 0 1.8rem rgba(86,247,165,0.2),
              0 0 3.8rem rgba(255,255,255,0.08),
              inset 0 0 0 1px rgba(255,255,255,0.18);
          }
          50% {
            box-shadow:
              0 0 2.4rem rgba(86,247,165,0.34),
              0 0 4.4rem rgba(255,255,255,0.12),
              inset 0 0 0 1px rgba(255,255,255,0.24);
          }
        }

        @keyframes footer-sheen {
          0%, 100% { transform: translateX(-38%) rotate(0deg); }
          50% { transform: translateX(38%) rotate(1deg); }
        }

        @keyframes footer-track-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes footer-cartoon-pan {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(48px, 24px, 0); }
        }

        @keyframes footer-doodle-float {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(8deg); }
          50% { transform: translate3d(-0.45rem, 0.35rem, 0) rotate(12deg); }
        }

        @keyframes reel-frame-float {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(-0.7deg); }
          50% { transform: translate3d(0, -0.45rem, 0) rotate(0.7deg); }
        }

        @keyframes reel-ring-spin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.04); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes advantage-glow-shift {
          0%, 100% { transform: translate3d(-2%, 1%, 0) scale(1); opacity: 0.9; }
          50% { transform: translate3d(2%, -1%, 0) scale(1.08); opacity: 1; }
        }

        @keyframes advantage-strip-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes header-status-rotate {
          0% { opacity: 0; transform: translateY(0.65rem); }
          8%, 28% { opacity: 1; transform: translateY(0); }
          36%, 100% { opacity: 0; transform: translateY(-0.65rem); }
        }

        @keyframes header-status-pulse {
          0% { transform: scale(1); }
          70% { transform: scale(1.18); box-shadow: 0 0 0 0.72rem rgba(34,197,94,0), 0 0 18px rgba(34,197,94,0.5); }
          100% { transform: scale(1); }
        }

        @keyframes header-status-pulse-offline {
          0% { transform: scale(1); }
          70% { transform: scale(1.18); box-shadow: 0 0 0 0.72rem rgba(245,158,11,0), 0 0 18px rgba(245,158,11,0.45); }
          100% { transform: scale(1); }
        }

        @keyframes header-status-sheen {
          0%, 100% { transform: translateX(-70%); opacity: 0.12; }
          48% { opacity: 0.42; }
          70% { transform: translateX(70%); opacity: 0.08; }
        }

        @keyframes header-status-colorflow {
          0%, 100% { opacity: 0.72; filter: hue-rotate(0deg) saturate(1); }
          50% { opacity: 1; filter: hue-rotate(8deg) saturate(1.15); }
        }

        @keyframes footer-meter-pulse {
          0%, 100% { filter: brightness(1); transform: scaleX(0.96); transform-origin: left center; }
          50% { filter: brightness(1.22); transform: scaleX(1); transform-origin: left center; }
        }

        @keyframes footer-liquid-drift {
          0%, 100% { transform: translate3d(-2%, -1%, 0) scale(1); }
          50% { transform: translate3d(2%, 1.5%, 0) scale(1.05); }
        }

        @keyframes footer-glass-pass {
          0%, 100% { transform: translateX(-32%) rotate(0deg); opacity: 0.25; }
          50% { transform: translateX(32%) rotate(1deg); opacity: 0.75; }
        }

        @keyframes faq-ring-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes faq-badge-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        /* --- Portfolio Media Gallery --- */
        .portfolio-page {
          max-width: min(92rem, calc(100% - 1rem)) !important;
          color: #0f172a;
        }

        .portfolio-page::before {
          content: "";
          position: absolute;
          inset: -4rem -10vw auto;
          height: 38rem;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(circle at 16% 16%, rgba(32,80,227,0.14), transparent 28%),
            radial-gradient(circle at 82% 12%, rgba(16,185,129,0.16), transparent 26%),
            radial-gradient(circle at 46% 44%, rgba(245,158,11,0.1), transparent 24%),
            linear-gradient(180deg, rgba(248,250,252,0.96), rgba(255,255,255,0));
          filter: blur(28px);
        }

        .portfolio-page::after {
          content: "";
          position: absolute;
          inset: 20rem -8vw auto;
          height: 52rem;
          z-index: -1;
          pointer-events: none;
          opacity: 0.8;
          background:
            radial-gradient(circle at 10% 18%, rgba(16,185,129,0.12), transparent 18rem),
            radial-gradient(circle at 80% 24%, rgba(244,63,94,0.1), transparent 16rem),
            radial-gradient(circle at 52% 70%, rgba(245,158,11,0.1), transparent 20rem);
          filter: blur(36px);
        }

        .portfolio-hero {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(24rem, 0.72fr);
          gap: clamp(1rem, 2.4vw, 2rem);
          align-items: center;
          margin-bottom: clamp(1.15rem, 3vw, 2.2rem);
        }

        .portfolio-feed-header {
          grid-template-columns: minmax(0, 1fr);
          max-width: 76rem;
          margin-inline: auto;
        }

        .portfolio-hero-copy {
          padding: clamp(1.35rem, 2.6vw, 2.25rem);
          border-radius: clamp(1.35rem, 3vw, 2.25rem);
          background:
            radial-gradient(circle at 8% 4%, rgba(255,255,255,0.94), transparent 17rem),
            radial-gradient(circle at 82% 0%, rgba(16,185,129,0.18), transparent 17rem),
            radial-gradient(circle at 22% 100%, rgba(32,80,227,0.1), transparent 18rem),
            linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.46));
          border: 1px solid rgba(255,255,255,0.82);
          box-shadow:
            0 22px 60px rgba(15,23,42,0.08),
            inset 0 1px 0 rgba(255,255,255,0.95);
          backdrop-filter: blur(24px) saturate(1.25);
          -webkit-backdrop-filter: blur(24px) saturate(1.25);
        }

        .portfolio-feed-header .portfolio-hero-copy {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(18rem, 0.95fr);
          gap: clamp(1rem, 3vw, 2rem);
          align-items: stretch;
          padding: clamp(1.1rem, 2.4vw, 1.55rem);
          color: #0f172a;
          background:
            radial-gradient(circle at 7% 8%, rgba(253,186,116,0.34), transparent 18rem),
            radial-gradient(circle at 42% -8%, rgba(236,72,153,0.16), transparent 17rem),
            radial-gradient(circle at 90% 8%, rgba(32,80,227,0.16), transparent 18rem),
            linear-gradient(135deg, rgba(255,255,255,0.94), rgba(248,250,252,0.72));
          border: 1px solid rgba(255,255,255,0.86);
          box-shadow:
            0 28px 80px rgba(15,23,42,0.08),
            inset 0 1px 0 rgba(255,255,255,0.95);
        }

        .portfolio-feed-header .portfolio-hero-copy::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.36;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px);
          background-size: 2.6rem 2.6rem;
          mask-image: linear-gradient(90deg, rgba(0,0,0,0.82), transparent 75%);
        }

        .portfolio-feed-header .portfolio-hero-copy::after {
          content: "";
          position: absolute;
          width: 8rem;
          height: 8rem;
          right: 5%;
          top: 12%;
          border-radius: 999px;
          border: 1px solid rgba(236,72,153,0.16);
          box-shadow:
            0 0 0 1.2rem rgba(236,72,153,0.08),
            0 0 0 2.3rem rgba(253,186,116,0.08);
          animation: portfolio-console-orbit 8s ease-in-out infinite;
          pointer-events: none;
        }

        .portfolio-feed-header .portfolio-consent-note {
          position: relative;
          z-index: 1;
          grid-column: 2;
          grid-row: 1 / span 3;
          align-self: stretch;
          margin-top: 0;
          min-height: 100%;
          align-items: start;
        }

        .portfolio-feed-header .portfolio-metrics {
          position: relative;
          z-index: 1;
          grid-column: 1 / -1;
        }

        .portfolio-feed-intro {
          position: relative;
          z-index: 1;
          align-self: center;
        }

        .portfolio-kicker {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          padding: 0.46rem 0.72rem;
          border-radius: 999px;
          color: #0f172a;
          background:
            linear-gradient(#fff, #fff) padding-box,
            linear-gradient(135deg, #f97316, #ec4899, #2050e3) border-box;
          border: 1px solid transparent;
          font-size: 0.68rem;
          font-weight: 750;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          box-shadow: 0 16px 34px rgba(236,72,153,0.12), inset 0 1px 0 rgba(255,255,255,0.95);
          animation: portfolio-kicker-pop 4.6s ease-in-out infinite;
        }

        .portfolio-kicker > div {
          position: relative;
          z-index: 1;
          flex: 0 0 auto;
          color: #0f172a;
          filter: drop-shadow(0 1px 0 rgba(255,255,255,0.8));
        }

        .portfolio-kicker::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 0 32%, rgba(255,255,255,0.8) 48%, transparent 64%);
          transform: translateX(-120%);
          animation: portfolio-kicker-sheen 4.8s ease-in-out infinite;
        }

        .portfolio-kicker::before {
          content: "";
          display: none;
        }

        .portfolio-hero h1 {
          max-width: 12ch;
          margin: 0;
          color: #0f172a;
          font-size: clamp(3rem, 5.7vw, 5.65rem);
          line-height: 0.9;
          letter-spacing: -0.058em;
          font-weight: 520;
        }

        .portfolio-hero p {
          max-width: 38rem;
          margin-top: 1.2rem;
          color: rgba(15,23,42,0.62);
          font-size: clamp(0.98rem, 1.5vw, 1.18rem);
          line-height: 1.62;
          font-weight: 390;
        }

        .portfolio-feed-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: 1.15rem;
        }

        .portfolio-feed-tags span {
          display: inline-flex;
          align-items: center;
          gap: 0.38rem;
          min-height: 2rem;
          padding: 0 0.7rem;
          border-radius: 999px;
          color: rgba(15,23,42,0.72);
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(226,232,240,0.86);
          box-shadow: 0 10px 24px rgba(15,23,42,0.05), inset 0 1px 0 rgba(255,255,255,0.94);
          font-size: 0.68rem;
          font-weight: 760;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          animation: portfolio-tag-drift 5s ease-in-out infinite;
        }

        .portfolio-feed-tags span:nth-child(2) {
          animation-delay: -1.3s;
        }

        .portfolio-feed-tags span:nth-child(3) {
          animation-delay: -2.6s;
        }

        .portfolio-consent-note {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 3.4rem minmax(0, 1fr);
          gap: 1rem;
          align-items: center;
          margin-top: 1.15rem;
          padding: clamp(1.1rem, 2vw, 1.6rem);
          border-radius: 1.35rem;
          background:
            radial-gradient(circle at 0% 0%, rgba(253,186,116,0.18), transparent 12rem),
            linear-gradient(135deg, rgba(255,255,255,0.96), rgba(255,247,237,0.82));
          border: 1px solid rgba(253,186,116,0.34);
          box-shadow:
            0 22px 52px rgba(15,23,42,0.08),
            inset 0 1px 0 rgba(255,255,255,0.96);
        }

        .portfolio-consent-note::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.58;
          background: linear-gradient(110deg, transparent 0 42%, rgba(236,72,153,0.12) 50%, transparent 58%);
          animation: portfolio-note-slide 7.5s ease-in-out infinite;
          pointer-events: none;
        }

        .portfolio-consent-note span,
        .portfolio-consent-note p {
          position: relative;
          z-index: 1;
        }

        .portfolio-consent-symbol {
          position: relative;
          z-index: 1;
          width: 3.2rem;
          height: 3.2rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #fff;
          background: linear-gradient(135deg, #f97316, #ec4899);
          box-shadow: 0 16px 36px rgba(236,72,153,0.2), inset 0 1px 0 rgba(255,255,255,0.44);
        }

        .portfolio-consent-note span {
          color: #be123c;
          font-size: clamp(0.76rem, 0.9vw, 0.9rem);
          font-weight: 850;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .portfolio-consent-note p {
          max-width: none;
          margin: 0.35rem 0 0;
          color: rgba(15,23,42,0.68);
          font-size: clamp(0.9rem, 1.05vw, 1.05rem);
          line-height: 1.62;
          font-weight: 520;
        }

        .portfolio-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.78rem;
          margin-top: 1.05rem;
          padding: 0.52rem;
          border-radius: 1.45rem;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(226,232,240,0.86);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.92), 0 16px 40px rgba(15,23,42,0.06);
        }

        .portfolio-metrics div {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 2.4rem minmax(0, 1fr);
          column-gap: 0.7rem;
          row-gap: 0.14rem;
          align-items: end;
          min-height: 6rem;
          padding: 1rem;
          border-radius: 1.05rem;
          background:
            radial-gradient(circle at 18% 10%, rgba(236,72,153,0.11), transparent 52%),
            linear-gradient(145deg, rgba(255,255,255,0.95), rgba(248,250,252,0.78));
          border: 1px solid rgba(226,232,240,0.9);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.94), 0 14px 30px rgba(15,23,42,0.05);
        }

        .portfolio-metrics div::after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(32,80,227,0.42), rgba(16,185,129,0.38), transparent);
          transform: translateX(-100%);
          animation: portfolio-metric-scan 5.5s ease-in-out infinite;
        }

        .portfolio-metrics div:nth-child(2)::after {
          animation-delay: -1.4s;
        }

        .portfolio-metrics div:nth-child(3)::after {
          animation-delay: -2.8s;
        }

        .portfolio-metrics svg {
          grid-row: span 2;
          align-self: start;
          width: 2.4rem;
          height: 2.4rem;
          padding: 0.52rem;
          border-radius: 999px;
          color: #2050e3;
          background: rgba(239,246,255,0.9);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.95), 0 10px 20px rgba(32,80,227,0.12);
          animation: portfolio-symbol-float 4.2s ease-in-out infinite;
        }

        .portfolio-metrics div:nth-child(2) svg {
          color: #10b981;
          background: rgba(236,253,245,0.92);
          animation-delay: -1.2s;
        }

        .portfolio-metrics div:nth-child(3) svg {
          color: #f59e0b;
          background: rgba(255,251,235,0.92);
          animation-delay: -2.4s;
        }

        .portfolio-metrics strong,
        .portfolio-metrics span {
          display: block;
        }

        .portfolio-metrics strong {
          color: #0f172a;
          font-size: clamp(1.6rem, 2.55vw, 2.55rem);
          line-height: 0.92;
          font-weight: 620;
        }

        .portfolio-metrics span {
          grid-column: 2;
          margin-top: 0;
          color: rgba(15,23,42,0.48);
          font-size: 0.62rem;
          font-weight: 750;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .portfolio-hero-stage {
          position: relative;
          min-height: clamp(22rem, 34vw, 29rem);
          border-radius: clamp(1.5rem, 3vw, 2.35rem);
          overflow: hidden;
          background:
            radial-gradient(circle at 28% 18%, rgba(32,80,227,0.16), transparent 12rem),
            radial-gradient(circle at 72% 68%, rgba(245,158,11,0.16), transparent 14rem),
            linear-gradient(135deg, rgba(255,255,255,0.74), rgba(241,245,249,0.5));
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow:
            0 30px 80px rgba(15,23,42,0.1),
            inset 0 1px 0 rgba(255,255,255,0.92);
          backdrop-filter: blur(22px) saturate(1.25);
          -webkit-backdrop-filter: blur(22px) saturate(1.25);
        }

        .portfolio-hero-stage::before {
          content: "";
          position: absolute;
          inset: 1rem;
          border-radius: inherit;
          border: 1px dashed rgba(32,80,227,0.18);
          animation: portfolio-stage-breathe 7s ease-in-out infinite;
        }

        .portfolio-feature-card {
          position: absolute;
          overflow: hidden;
          border-radius: 1.45rem;
          background: rgba(255,255,255,0.56);
          border: 1px solid rgba(255,255,255,0.82);
          box-shadow:
            0 24px 58px rgba(15,23,42,0.14),
            inset 0 1px 0 rgba(255,255,255,0.9);
          animation: portfolio-float-card 6.5s ease-in-out infinite;
        }

        .portfolio-feature-card video,
        .portfolio-feature-card img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
          background: linear-gradient(135deg, #f8fafc, #e5e7eb);
        }

        .portfolio-media-frame video,
        .portfolio-media-frame img {
          width: 100%;
          height: 100%;
          display: block;
        }

        .portfolio-feature-card div {
          position: absolute;
          left: 0.8rem;
          right: 0.8rem;
          bottom: 0.8rem;
          padding: 0.72rem 0.78rem;
          border-radius: 1rem;
          color: #fff;
          background: rgba(15,23,42,0.52);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(18px) saturate(1.25);
          -webkit-backdrop-filter: blur(18px) saturate(1.25);
        }

        .portfolio-feature-card span,
        .portfolio-feature-card strong {
          display: block;
        }

        .portfolio-feature-card span {
          font-size: 0.58rem;
          font-weight: 800;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          opacity: 0.76;
        }

        .portfolio-feature-card strong {
          margin-top: 0.18rem;
          font-size: 0.9rem;
          font-weight: 620;
          line-height: 1.1;
        }

        .portfolio-feature-card.feature-1 {
          inset: 8% 26% auto 8%;
          height: 47%;
          z-index: 3;
        }

        .portfolio-feature-card.feature-2 {
          right: 7%;
          top: 18%;
          width: 38%;
          height: 54%;
          z-index: 2;
          transform: rotate(4deg);
          animation-delay: -1.5s;
        }

        .portfolio-feature-card.feature-3 {
          left: 18%;
          bottom: 7%;
          width: 48%;
          height: 36%;
          z-index: 4;
          transform: rotate(-3deg);
          animation-delay: -3s;
        }

        .portfolio-filter-shell {
          position: sticky;
          top: 4.8rem;
          z-index: 30;
          margin-bottom: 1.2rem;
          padding: 0.5rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.68);
          border: 1px solid rgba(255,255,255,0.86);
          box-shadow:
            0 18px 46px rgba(15,23,42,0.08),
            inset 0 1px 0 rgba(255,255,255,0.9);
          backdrop-filter: blur(24px) saturate(1.25);
          -webkit-backdrop-filter: blur(24px) saturate(1.25);
        }

        .portfolio-filter-track {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }

        .portfolio-filter-track::-webkit-scrollbar {
          display: none;
        }

        .portfolio-filter-track button {
          min-height: 2.72rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.46rem;
          flex: 0 0 auto;
          padding: 0 0.9rem;
          border-radius: 999px;
          color: rgba(15,23,42,0.58);
          background: rgba(255,255,255,0.52);
          border: 1px solid rgba(255,255,255,0.74);
          font-size: 0.72rem;
          font-weight: 760;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: transform 0.24s ease, background 0.24s ease, color 0.24s ease, box-shadow 0.24s ease;
        }

        .portfolio-filter-track button small {
          min-width: 1.4rem;
          min-height: 1.4rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(15,23,42,0.07);
          font-size: 0.66rem;
          font-weight: 800;
        }

        .portfolio-filter-track button:hover,
        .portfolio-filter-track button.is-active {
          transform: translateY(-1px);
          color: #fff;
          background:
            radial-gradient(circle at 20% 10%, rgba(255,255,255,0.35), transparent 28%),
            linear-gradient(135deg, #111827, #2050e3);
          box-shadow: 0 16px 32px rgba(32,80,227,0.2);
        }

        .portfolio-filter-track button.is-active small {
          background: rgba(255,255,255,0.18);
        }

        .portfolio-showcase-note {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(15rem, 0.42fr);
          gap: 1rem;
          align-items: end;
          margin: 1.35rem 0 1rem;
        }

        .portfolio-showcase-note span {
          display: inline-block;
          margin-bottom: 0.35rem;
          color: #2050e3;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .portfolio-showcase-note h2 {
          color: #0f172a;
          font-size: clamp(1.8rem, 4vw, 3.5rem);
          line-height: 0.96;
          letter-spacing: -0.052em;
          font-weight: 560;
        }

        .portfolio-showcase-note p {
          color: rgba(15,23,42,0.55);
          font-size: 0.9rem;
          line-height: 1.55;
        }

        .portfolio-feed-shell {
          display: block;
          max-width: 76rem;
          margin-inline: auto;
        }

        .portfolio-feed-main {
          width: 100%;
          min-width: 0;
        }

        .portfolio-stories-row {
          display: flex;
          gap: 0.72rem;
          overflow-x: auto;
          padding: 0.8rem;
          margin-bottom: 1rem;
          border-radius: 1.35rem;
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(226,232,240,0.88);
          box-shadow: 0 16px 38px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.92);
          scrollbar-width: none;
        }

        .portfolio-stories-row::-webkit-scrollbar {
          display: none;
        }

        .portfolio-stories-row button {
          flex: 0 0 auto;
          width: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.42rem;
          color: rgba(15,23,42,0.68);
          font-size: 0.62rem;
          font-weight: 780;
          letter-spacing: -0.01em;
        }

        .portfolio-stories-row button > span {
          width: 4.1rem;
          height: 4.1rem;
          display: grid;
          place-items: center;
          padding: 0.18rem;
          border-radius: 999px;
          background: conic-gradient(from 120deg, #2050e3, #10b981, #f59e0b, #ef4444, #2050e3);
          box-shadow: 0 12px 28px rgba(32,80,227,0.14);
        }

        .portfolio-stories-row img,
        .portfolio-stories-row video {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: inherit;
          object-fit: cover;
          background: #0f172a;
          border: 2px solid rgba(255,255,255,0.95);
        }

        .portfolio-feed-sidebar {
          position: sticky;
          top: 5.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .portfolio-profile-card,
        .portfolio-side-note,
        .portfolio-side-cart {
          border-radius: 1.15rem;
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(226,232,240,0.9);
          box-shadow: 0 18px 40px rgba(15,23,42,0.07), inset 0 1px 0 rgba(255,255,255,0.92);
          backdrop-filter: blur(18px) saturate(1.22);
          -webkit-backdrop-filter: blur(18px) saturate(1.22);
        }

        .portfolio-profile-card {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.9rem;
        }

        .portfolio-profile-logo {
          width: 3.1rem;
          height: 3.1rem;
          display: grid;
          place-items: center;
          border-radius: 999px;
          color: #fff;
          background: #0f172a;
        }

        .portfolio-profile-card span,
        .portfolio-profile-card strong {
          display: block;
        }

        .portfolio-profile-card span {
          color: rgba(15,23,42,0.52);
          font-size: 0.72rem;
          font-weight: 760;
        }

        .portfolio-profile-card strong {
          color: #0f172a;
          font-size: 0.95rem;
          font-weight: 650;
        }

        .portfolio-side-note {
          display: flex;
          gap: 0.65rem;
          padding: 0.9rem;
          color: rgba(15,23,42,0.6);
          font-size: 0.82rem;
          line-height: 1.45;
        }

        .portfolio-side-note svg {
          flex: 0 0 auto;
          color: #2050e3;
        }

        .portfolio-side-cart {
          min-height: 3.2rem;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.6rem;
          padding: 0 0.85rem;
          color: #fff;
          background:
            radial-gradient(circle at 22% 10%, rgba(255,255,255,0.28), transparent 34%),
            linear-gradient(135deg, #111827, #2050e3);
          font-size: 0.82rem;
          font-weight: 800;
        }

        .portfolio-side-cart span {
          width: 1.55rem;
          height: 1.55rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #2050e3;
          background: #fff;
          font-size: 0.74rem;
          font-weight: 900;
        }

        .portfolio-gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(1rem, 2.4vw, 1.35rem);
          align-items: start;
        }

        .portfolio-media-card {
          min-height: auto;
          display: flex;
          flex-direction: column;
          gap: 0.72rem;
          padding: 0.68rem;
          border-radius: 1.35rem;
          background: #ffffff;
          border: 1px solid rgba(226,232,240,0.92);
          box-shadow: 0 10px 26px rgba(15,23,42,0.06);
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          animation: none;
          animation-delay: var(--portfolio-delay);
          transition: box-shadow 0.18s ease;
        }

        .portfolio-media-card:hover {
          transform: none;
          box-shadow: 0 14px 34px rgba(15,23,42,0.08);
        }

        .portfolio-media-card.tone-blue { --portfolio-tone: rgba(32,80,227,0.16); }
        .portfolio-media-card.tone-green { --portfolio-tone: rgba(16,185,129,0.18); }
        .portfolio-media-card.tone-violet { --portfolio-tone: rgba(139,92,246,0.16); }
        .portfolio-media-card.tone-orange { --portfolio-tone: rgba(245,158,11,0.18); }
        .portfolio-media-card.tone-rose { --portfolio-tone: rgba(244,63,94,0.14); }

        .portfolio-media-card.span-wide {
          grid-column: auto;
        }

        .portfolio-media-card.span-tall {
          grid-row: auto;
          min-height: auto;
        }

        .portfolio-media-frame {
          position: relative;
          flex: 1 1 auto;
          aspect-ratio: var(--portfolio-ratio, 4 / 5);
          min-height: 0;
          overflow: hidden;
          border-radius: 1.1rem;
          background: #f8fafc;
          box-shadow: none;
          isolation: isolate;
        }

        .portfolio-media-card.span-tall .portfolio-media-frame {
          min-height: 0;
        }

        .portfolio-media-card.span-wide .portfolio-media-frame {
          min-height: 0;
        }

        .portfolio-media-card.ratio-reel {
          --portfolio-ratio: 9 / 16;
        }

        .portfolio-media-card.ratio-landscape {
          --portfolio-ratio: 16 / 9;
        }

        .portfolio-media-card.ratio-photo {
          --portfolio-ratio: 4 / 5;
        }

        .portfolio-media-card.ratio-square {
          --portfolio-ratio: 1 / 1;
        }

        .portfolio-media-frame::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          display: none;
        }

        .portfolio-media-frame video,
        .portfolio-media-frame img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain !important;
          background: transparent !important;
          transition: filter 0.5s ease;
        }

        .portfolio-media-frame img {
          transform: none;
          object-position: center 48%;
        }

        .portfolio-media-frame video {
          transform: none;
        }

        .portfolio-media-card:hover .portfolio-media-frame video,
        .portfolio-media-card:hover .portfolio-media-frame img {
          transform: none;
          filter: saturate(1.06) contrast(1.03);
        }

        .portfolio-card-glow {
          position: absolute;
          inset: auto -18% -18% -18%;
          height: 45%;
          z-index: 2;
          pointer-events: none;
          display: none;
          background: transparent;
        }

        .portfolio-card-type {
          position: absolute;
          left: 0.72rem;
          top: 0.72rem;
          z-index: 4;
          display: inline-flex;
          align-items: center;
          gap: 0.38rem;
          padding: 0.42rem 0.62rem;
          border-radius: 999px;
          color: #fff;
          background: rgba(15,23,42,0.54);
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(16px) saturate(1.25);
          -webkit-backdrop-filter: blur(16px) saturate(1.25);
          font-size: 0.62rem;
          font-weight: 820;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .portfolio-audio-toggle {
          position: absolute;
          right: 0.75rem;
          bottom: 0.75rem;
          z-index: 5;
          width: 2.4rem;
          height: 2.4rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #fff;
          background: rgba(15,23,42,0.62);
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow: 0 14px 34px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.16);
          backdrop-filter: blur(16px) saturate(1.24);
          -webkit-backdrop-filter: blur(16px) saturate(1.24);
          transition: transform 0.22s ease, background 0.22s ease;
        }

        .portfolio-audio-toggle:hover,
        .portfolio-audio-toggle.is-unmuted {
          transform: scale(1.06);
          background: rgba(32,80,227,0.82);
        }

        .portfolio-page .portfolio-hero-copy,
        .portfolio-page .portfolio-hero-stage,
        .portfolio-page .portfolio-feature-card div,
        .portfolio-page .portfolio-filter-shell,
        .portfolio-page .portfolio-profile-card,
        .portfolio-page .portfolio-side-note,
        .portfolio-page .portfolio-side-cart,
        .portfolio-page .portfolio-card-type,
        .portfolio-page .portfolio-audio-toggle {
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }

        .portfolio-page .portfolio-feed-tags span,
        .portfolio-page .portfolio-kicker,
        .portfolio-page .portfolio-consent-note::before,
        .portfolio-page .portfolio-metrics div::after,
        .portfolio-page .portfolio-metrics svg,
        .portfolio-page .portfolio-feed-header .portfolio-hero-copy::after,
        .portfolio-page .portfolio-hero-stage::before,
        .portfolio-page .portfolio-feature-card {
          animation: none !important;
        }

        .portfolio-social-actions {
          position: absolute;
          right: 0.72rem;
          top: 0.72rem;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.42rem;
        }

        .portfolio-post-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.8rem;
          padding: 0.14rem 0.18rem 0;
          color: #050505;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }

        .portfolio-action-cluster {
          display: inline-flex;
          align-items: center;
          gap: 1.05rem;
          min-width: 0;
        }

        .portfolio-like-button,
        .portfolio-share-button,
        .portfolio-reference-button {
          min-height: 2.3rem;
          min-width: auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.26rem;
          padding: 0;
          border-radius: 0;
          color: #0f172a;
          background: transparent;
          border: 0;
          box-shadow: none;
          font-size: 0.78rem;
          font-weight: 760;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
          transition: transform 0.18s ease, color 0.18s ease, opacity 0.18s ease;
          will-change: transform;
        }

        .portfolio-reference-button {
          width: 2.35rem;
          height: 2.35rem;
          flex: 0 0 2.35rem;
          margin-left: auto;
          color: #0f172a;
        }

        .portfolio-like-button span,
        .portfolio-share-button span {
          display: inline-flex;
          color: currentColor;
          font-size: 0.95rem;
          line-height: 1;
          font-weight: 780;
          letter-spacing: -0.035em;
          font-variant-numeric: tabular-nums;
          transform: translateY(-0.01rem);
        }

        .portfolio-action-icon {
          width: 1.92rem;
          height: 1.92rem;
          display: block;
          flex: 0 0 auto;
          overflow: visible;
          shape-rendering: geometricPrecision;
          filter: drop-shadow(0 1px 0 rgba(255,255,255,0.78));
          transform: translateZ(0);
        }

        .portfolio-reference-button .portfolio-action-icon {
          width: 1.98rem;
          height: 1.98rem;
        }

        .portfolio-cart-icon {
          transform: translateY(-0.03rem);
        }

        .portfolio-like-button:hover,
        .portfolio-like-button.is-liked {
          transform: translateY(-1px) scale(1.08);
          color: #ef4444;
          background: transparent;
        }

        .portfolio-share-button:hover,
        .portfolio-share-button.is-shared {
          transform: translateY(-1px) scale(1.08);
          color: #2050e3;
          background: transparent;
        }

        .portfolio-reference-button:hover,
        .portfolio-reference-button.is-selected {
          transform: translateY(-1px) scale(1.08);
          color: #7c3aed;
          background: transparent;
        }

        .portfolio-like-button:active,
        .portfolio-share-button:active,
        .portfolio-reference-button:active {
          transform: scale(0.94);
          opacity: 0.82;
        }

        .portfolio-post-meta {
          display: none;
          align-items: center;
          justify-content: space-between;
          gap: 0.6rem;
          margin-top: -0.38rem;
          padding: 0 0.18rem;
        }

        .portfolio-post-meta strong,
        .portfolio-post-meta span {
          color: rgba(15,23,42,0.62);
          font-size: 0.72rem;
          line-height: 1.2;
          font-weight: 700;
        }

        .portfolio-post-meta span {
          color: rgba(15,23,42,0.42);
          font-weight: 620;
        }

        .portfolio-card-copy {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.8rem;
          padding: 0 0.16rem 0.12rem;
        }

        .portfolio-card-copy span,
        .portfolio-card-copy small {
          color: rgba(15,23,42,0.48);
          font-size: 0.62rem;
          font-weight: 820;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .portfolio-card-copy h3 {
          margin-top: 0.2rem;
          color: #0f172a;
          font-size: 0.96rem;
          line-height: 1.15;
          font-weight: 620;
          letter-spacing: -0.02em;
        }

        .portfolio-card-copy p {
          margin-top: 0.15rem;
          color: rgba(15,23,42,0.52);
          font-size: 0.78rem;
          line-height: 1.35;
          font-weight: 520;
        }

        .portfolio-card-copy small {
          flex: 0 0 auto;
          padding: 0.36rem 0.5rem;
          border-radius: 999px;
          background: rgba(15,23,42,0.06);
        }

        .reference-floating-cart {
          position: fixed;
          right: 1rem;
          bottom: 6.35rem;
          z-index: 62;
          min-height: 3.25rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          padding: 0 0.9rem;
          border-radius: 999px;
          color: #fff;
          background:
            radial-gradient(circle at 22% 12%, rgba(255,255,255,0.42), transparent 32%),
            linear-gradient(135deg, rgba(32,80,227,0.86), rgba(14,165,233,0.68));
          border: 1px solid rgba(255,255,255,0.42);
          box-shadow:
            0 22px 54px rgba(32,80,227,0.28),
            inset 0 1px 0 rgba(255,255,255,0.42);
          backdrop-filter: blur(20px) saturate(1.35);
          -webkit-backdrop-filter: blur(20px) saturate(1.35);
          transition: transform 0.24s ease, box-shadow 0.24s ease;
        }

        .reference-floating-cart:hover {
          transform: translateY(-3px);
          box-shadow:
            0 28px 64px rgba(32,80,227,0.34),
            inset 0 1px 0 rgba(255,255,255,0.48);
        }

        .reference-floating-cart.is-pulsing {
          animation: reference-cart-pop 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reference-floating-cart strong {
          font-size: 0.78rem;
          font-weight: 820;
          letter-spacing: 0.04em;
        }

        .reference-cart-count {
          width: 1.4rem;
          height: 1.4rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #2050e3;
          background: #fff;
          font-size: 0.72rem;
          font-weight: 900;
          box-shadow: 0 8px 18px rgba(15,23,42,0.16);
        }

        .reference-cart-page {
          max-width: min(78rem, calc(100% - 1rem)) !important;
          color: #0f172a;
        }

        .reference-cart-page .reference-cart-panel {
          width: 100%;
          max-height: none;
          overflow: visible;
          padding: 0;
          background: transparent;
          border: 0;
          box-shadow: none;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }

        .reference-cart-page .reference-cart-head > button {
          width: auto;
          min-height: 2.85rem;
          padding: 0 1.05rem;
          border-radius: 0.62rem;
          color: #fff;
          background: #2874f0;
          border: 1px solid rgba(40,116,240,0.2);
          box-shadow: 0 12px 28px rgba(40,116,240,0.18);
          font-size: 0.74rem;
          font-weight: 850;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .reference-cart-overlay {
          position: fixed;
          inset: 0;
          z-index: 110;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background:
            radial-gradient(circle at 78% 12%, rgba(32,80,227,0.24), transparent 22rem),
            radial-gradient(circle at 12% 82%, rgba(16,185,129,0.18), transparent 18rem),
            rgba(15,23,42,0.34);
          backdrop-filter: blur(18px) saturate(1.2);
          -webkit-backdrop-filter: blur(18px) saturate(1.2);
        }

        .reference-cart-panel {
          width: min(68rem, 100%);
          max-height: min(45rem, calc(100vh - 2rem));
          overflow: auto;
          border-radius: 1.75rem;
          padding: clamp(1rem, 2.4vw, 1.5rem);
          background:
            radial-gradient(circle at 8% 0%, rgba(32,80,227,0.12), transparent 18rem),
            radial-gradient(circle at 92% 6%, rgba(16,185,129,0.12), transparent 18rem),
            linear-gradient(145deg, rgba(248,250,252,0.96), rgba(241,245,249,0.9));
          border: 1px solid rgba(255,255,255,0.92);
          box-shadow:
            0 30px 90px rgba(15,23,42,0.22),
            inset 0 1px 0 rgba(255,255,255,0.92);
          backdrop-filter: blur(28px) saturate(1.28);
          -webkit-backdrop-filter: blur(28px) saturate(1.28);
        }

        .reference-cart-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
          padding: clamp(1rem, 2.4vw, 1.35rem);
          border-radius: 0.95rem;
          color: #0f172a;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.96), rgba(248,250,252,0.92)),
            radial-gradient(circle at 0% 0%, rgba(40,116,240,0.12), transparent 18rem);
          border: 1px solid rgba(226,232,240,0.95);
          box-shadow: 0 16px 40px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.95);
        }

        .reference-cart-head span {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.42rem;
          color: #2874f0;
          font-size: 0.68rem;
          font-weight: 850;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .reference-cart-head h2 {
          color: #0f172a;
          font-size: clamp(2rem, 4.2vw, 3.45rem);
          line-height: 0.98;
          font-weight: 620;
          letter-spacing: -0.05em;
        }

        .reference-cart-head p {
          max-width: 38rem;
          margin-top: 0.5rem;
          color: rgba(15,23,42,0.56);
          line-height: 1.5;
        }

        .reference-cart-head > button {
          width: 2.6rem;
          height: 2.6rem;
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #fff;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow: 0 12px 28px rgba(15,23,42,0.08);
        }

        .reference-cart-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(22rem, 0.42fr);
          gap: 1rem;
          align-items: start;
        }

        .reference-selected-list {
          display: flex;
          flex-direction: column;
          gap: 0.72rem;
          align-content: start;
        }

        .reference-list-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1rem;
          border-radius: 0.9rem;
          background: #fff;
          border: 1px solid rgba(226,232,240,0.95);
          box-shadow: 0 12px 30px rgba(15,23,42,0.06);
        }

        .reference-list-head span,
        .reference-list-head small {
          color: rgba(15,23,42,0.46);
          font-size: 0.68rem;
          font-weight: 820;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .reference-list-head strong {
          display: block;
          margin-top: 0.18rem;
          color: #0f172a;
          font-size: 1.05rem;
          font-weight: 680;
          letter-spacing: -0.02em;
        }

        .reference-list-head button,
        .reference-empty-card button,
        .reference-appointment-card button {
          min-height: 2.35rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 0.82rem;
          border-radius: 999px;
          color: #2874f0;
          background: rgba(40,116,240,0.08);
          border: 1px solid rgba(40,116,240,0.12);
          font-size: 0.7rem;
          font-weight: 850;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .reference-service-summary {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.68rem;
        }

        .reference-service-chip,
        .reference-appointment-card,
        .reference-empty-card {
          border-radius: 0.95rem;
          background:
            radial-gradient(circle at 10% 0%, rgba(40,116,240,0.12), transparent 7rem),
            #fff;
          border: 1px solid rgba(226,232,240,0.95);
          box-shadow: 0 12px 30px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.92);
        }

        .reference-service-chip {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          min-height: 4.6rem;
          padding: 0.85rem;
        }

        .reference-service-chip svg {
          flex: 0 0 auto;
          color: #2874f0;
        }

        .reference-service-chip span {
          display: block;
          min-width: 0;
        }

        .reference-service-chip strong,
        .reference-appointment-card strong,
        .reference-empty-card strong {
          display: block;
          color: #0f172a;
          font-size: 0.92rem;
          line-height: 1.08;
          font-weight: 760;
          letter-spacing: -0.025em;
        }

        .reference-service-chip small,
        .reference-appointment-card p,
        .reference-empty-card p {
          display: block;
          margin-top: 0.22rem;
          color: rgba(15,23,42,0.52);
          font-size: 0.72rem;
          line-height: 1.35;
        }

        .reference-appointment-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.85rem;
          padding: 1rem;
        }

        .reference-appointment-card span {
          display: block;
          color: rgba(15,23,42,0.46);
          font-size: 0.66rem;
          font-weight: 850;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.28rem;
        }

        .reference-empty-card {
          grid-column: 1 / -1;
          padding: 1rem;
        }

        .reference-empty-card button {
          margin-top: 0.75rem;
        }

        .reference-selected-card {
          display: grid;
          grid-template-columns: minmax(8rem, 10rem) minmax(0, 1fr);
          align-items: stretch;
          overflow: hidden;
          border-radius: 0.9rem;
          background: #fff;
          border: 1px solid rgba(226,232,240,0.95);
          box-shadow: 0 12px 30px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.9);
        }

        .reference-selected-card > div {
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background:
            radial-gradient(circle at 20% 10%, rgba(40,116,240,0.16), transparent 5rem),
            linear-gradient(135deg, #f8fafc, #e5e7eb);
        }

        .reference-selected-card.ratio-reel { --portfolio-ratio: 9 / 16; }
        .reference-selected-card.ratio-landscape { --portfolio-ratio: 16 / 9; }
        .reference-selected-card.ratio-photo { --portfolio-ratio: 4 / 5; }
        .reference-selected-card.ratio-square { --portfolio-ratio: 1 / 1; }

        .reference-selected-card video,
        .reference-selected-card img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
        }

        .reference-selected-card section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1rem;
        }

        .reference-selected-card span,
        .reference-selected-card button {
          font-size: 0.62rem;
          font-weight: 820;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .reference-selected-card span {
          color: rgba(15,23,42,0.46);
        }

        .reference-selected-card strong {
          display: block;
          margin: 0.18rem 0 0.34rem;
          color: #0f172a;
          font-size: 1.02rem;
          line-height: 1.12;
        }

        .reference-selected-card p {
          color: rgba(15,23,42,0.52);
          font-size: 0.82rem;
          line-height: 1.38;
        }

        .reference-selected-card button {
          color: #2874f0;
          align-self: flex-start;
          margin-top: 0.72rem;
          padding: 0;
          border-radius: 999px;
          background: transparent;
          font-weight: 900;
        }

        .reference-enquiry-form {
          position: sticky;
          top: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.74rem;
          padding: 1rem;
          border-radius: 0.95rem;
          background: #fff;
          border: 1px solid rgba(226,232,240,0.95);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.92), 0 16px 36px rgba(15,23,42,0.08);
        }

        .reference-order-summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.85rem;
          padding: 0.88rem;
          border-radius: 0.82rem;
          color: #0f172a;
          background:
            radial-gradient(circle at 18% 10%, rgba(40,116,240,0.14), transparent 42%),
            linear-gradient(145deg, #f8fafc, #eef2ff);
          border: 1px solid rgba(226,232,240,0.94);
          box-shadow: 0 12px 28px rgba(15,23,42,0.06);
        }

        .reference-order-summary span {
          display: block;
          color: rgba(15,23,42,0.48);
          font-size: 0.62rem;
          font-weight: 850;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .reference-order-summary strong {
          display: block;
          margin-top: 0.1rem;
          font-size: 2rem;
          line-height: 1;
          font-weight: 760;
        }

        .reference-order-summary p {
          max-width: 12rem;
          color: rgba(15,23,42,0.58);
          font-size: 0.78rem;
          line-height: 1.35;
          text-align: right;
        }

        .reference-enquiry-form label {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          color: rgba(15,23,42,0.62);
          font-size: 0.68rem;
          font-weight: 850;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .reference-enquiry-form input,
        .reference-enquiry-form textarea {
          width: 100%;
          border-radius: 0.9rem;
          padding: 0.82rem 0.9rem;
          color: #0f172a;
          background: rgba(255,255,255,0.84);
          border: 1px solid rgba(226,232,240,0.9);
          outline: none;
          font-size: 0.9rem;
          font-weight: 520;
          letter-spacing: 0;
          text-transform: none;
        }

        .reference-enquiry-form textarea {
          resize: vertical;
        }

        .reference-submit-button {
          min-height: 3rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border: 0;
          border-radius: 999px;
          color: #fff;
          background:
            radial-gradient(circle at 22% 15%, rgba(255,255,255,0.32), transparent 30%),
            linear-gradient(135deg, #2050e3, #10b981);
          box-shadow: 0 18px 38px rgba(32,80,227,0.22);
          font-size: 0.88rem;
          font-weight: 780;
          cursor: pointer;
        }

        .reference-submit-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 0.55rem;
          margin-top: 0.3rem;
        }

        .reference-whatsapp-button {
          min-height: 3rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.38rem;
          padding: 0 0.85rem;
          border-radius: 999px;
          color: #0f172a;
          background: rgba(255,255,255,0.82);
          border: 1px solid rgba(203,213,225,0.86);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.96), 0 10px 24px rgba(15,23,42,0.06);
          font-size: 0.78rem;
          font-weight: 820;
        }

        .reference-submit-button.is-disabled,
        .reference-whatsapp-button.is-disabled {
          pointer-events: none;
          opacity: 0.45;
        }

        .reference-enquiry-form > p {
          color: rgba(15,23,42,0.48);
          font-size: 0.76rem;
          line-height: 1.45;
          text-align: center;
        }

        .reference-enquiry-form > p.reference-form-success {
          color: #047857;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.16);
          border-radius: 0.75rem;
          padding: 0.7rem;
          font-weight: 760;
        }

        .reference-enquiry-form > p.reference-form-error {
          color: #b91c1c;
          background: rgba(248,113,113,0.1);
          border: 1px solid rgba(248,113,113,0.16);
          border-radius: 0.75rem;
          padding: 0.7rem;
          font-weight: 760;
        }

        /* Commerce-style enquiry cart redesign */
        .reference-cart-page {
          background:
            radial-gradient(circle at 8% 4%, rgba(255,214,102,0.18), transparent 18rem),
            radial-gradient(circle at 82% 7%, rgba(32,80,227,0.16), transparent 20rem),
            radial-gradient(circle at 50% 100%, rgba(16,185,129,0.14), transparent 22rem);
          border-radius: 2rem;
        }

        .reference-cart-page .reference-cart-panel {
          position: relative;
          overflow: hidden;
          padding: clamp(0.7rem, 2vw, 1rem);
          border-radius: 1.55rem;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.72), rgba(239,246,255,0.52)),
            radial-gradient(circle at 6% 0%, rgba(255,214,102,0.18), transparent 18rem);
          border: 1px solid rgba(255,255,255,0.82);
          box-shadow: 0 28px 80px rgba(15,23,42,0.1), inset 0 1px 0 rgba(255,255,255,0.94);
        }

        .reference-cart-page .reference-cart-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(32,80,227,0.045) 1px, transparent 1px),
            linear-gradient(180deg, rgba(16,185,129,0.04) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, black, transparent 82%);
          -webkit-mask-image: linear-gradient(to bottom, black, transparent 82%);
        }

        .reference-cart-page .reference-cart-panel > * {
          position: relative;
          z-index: 1;
        }

        .reference-cart-head {
          background:
            radial-gradient(circle at 8% 0%, rgba(255,214,102,0.34), transparent 14rem),
            radial-gradient(circle at 92% 18%, rgba(32,80,227,0.16), transparent 16rem),
            linear-gradient(135deg, rgba(255,255,255,0.96), rgba(248,250,252,0.88));
          border-radius: 1.25rem;
        }

        .reference-cart-head h2 {
          font-weight: 560;
        }

        .reference-cart-grid {
          grid-template-columns: minmax(0, 1.08fr) minmax(21rem, 0.42fr);
        }

        .reference-selected-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.78rem;
        }

        .reference-list-head,
        .reference-appointment-card,
        .reference-empty-card {
          grid-column: 1 / -1;
        }

        .reference-list-head {
          background:
            radial-gradient(circle at 0% 0%, rgba(40,116,240,0.12), transparent 10rem),
            linear-gradient(135deg, rgba(255,255,255,0.96), rgba(248,250,252,0.9));
          border-radius: 1.05rem;
        }

        .reference-service-summary {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.78rem;
        }

        .reference-service-chip {
          position: relative;
          min-height: 5.35rem;
          padding-right: 2.9rem;
          border-radius: 1.05rem;
          background:
            radial-gradient(circle at 0% 0%, rgba(16,185,129,0.16), transparent 8rem),
            linear-gradient(135deg, rgba(255,255,255,0.96), rgba(240,253,250,0.78));
        }

        .reference-service-chip > button {
          position: absolute;
          right: 0.72rem;
          top: 50%;
          transform: translateY(-50%);
          width: 2rem;
          height: 2rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #ef4444;
          background: rgba(254,242,242,0.94);
          border: 1px solid rgba(248,113,113,0.18);
          box-shadow: 0 8px 18px rgba(239,68,68,0.1);
        }

        .reference-appointment-card {
          background:
            radial-gradient(circle at 0% 0%, rgba(255,214,102,0.24), transparent 12rem),
            linear-gradient(135deg, rgba(255,255,255,0.96), rgba(255,251,235,0.82));
        }

        .reference-selected-card {
          grid-template-columns: 7.6rem minmax(0, 1fr);
          min-height: 8rem;
          border-radius: 1.05rem;
          background:
            radial-gradient(circle at 0% 0%, rgba(32,80,227,0.1), transparent 10rem),
            #fff;
        }

        .reference-selected-card > div {
          aspect-ratio: auto;
          min-height: 100%;
        }

        .reference-enquiry-form {
          border-radius: 1.15rem;
          background:
            radial-gradient(circle at 18% 0%, rgba(32,80,227,0.12), transparent 11rem),
            linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,250,252,0.92));
        }

        .reference-order-summary {
          background:
            radial-gradient(circle at 16% 0%, rgba(255,214,102,0.34), transparent 8rem),
            linear-gradient(145deg, #ffffff, #eff6ff);
          border-radius: 1rem;
        }

        .reference-submit-button {
          background:
            radial-gradient(circle at 22% 15%, rgba(255,255,255,0.36), transparent 30%),
            linear-gradient(135deg, #ff8a00, #2874f0 52%, #10b981);
          box-shadow: 0 18px 42px rgba(40,116,240,0.24);
        }

        .reference-success-hero {
          position: relative;
          overflow: hidden;
          display: grid;
          justify-items: center;
          gap: 0.42rem;
          padding: 1.1rem 0.85rem;
          border-radius: 1.05rem;
          color: #052e16;
          background:
            radial-gradient(circle at 18% 0%, rgba(255,255,255,0.9), transparent 5rem),
            linear-gradient(135deg, rgba(220,252,231,0.98), rgba(219,234,254,0.92));
          border: 1px solid rgba(134,239,172,0.42);
          box-shadow: 0 18px 40px rgba(16,185,129,0.14), inset 0 1px 0 rgba(255,255,255,0.92);
          animation: reference-success-rise 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .reference-success-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 0 32%, rgba(255,255,255,0.55) 45%, transparent 58% 100%);
          animation: reference-success-shine 1.8s ease-out infinite;
        }

        .reference-success-orbit {
          position: relative;
          z-index: 1;
          width: 3rem;
          height: 3rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: #fff;
          background: linear-gradient(135deg, #10b981, #2874f0);
          box-shadow: 0 12px 30px rgba(16,185,129,0.24);
          animation: reference-success-pulse 1.8s ease-in-out infinite;
        }

        .reference-success-hero strong,
        .reference-success-hero p {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .reference-success-hero strong {
          color: #052e16;
          font-size: 1.05rem;
          line-height: 1;
          font-weight: 820;
        }

        .reference-success-hero p {
          max-width: 18rem;
          color: rgba(5,46,22,0.7);
          font-size: 0.82rem;
          line-height: 1.35;
        }

        .reference-cart-page .reference-cart-head {
          box-shadow:
            0 18px 48px rgba(40,116,240,0.1),
            inset 0 1px 0 rgba(255,255,255,0.98);
        }

        .reference-cart-page .reference-list-head,
        .reference-cart-page .reference-service-chip,
        .reference-cart-page .reference-appointment-card,
        .reference-cart-page .reference-selected-card,
        .reference-cart-page .reference-enquiry-form {
          backdrop-filter: blur(18px) saturate(1.12);
          -webkit-backdrop-filter: blur(18px) saturate(1.12);
        }

        .reference-cart-page .reference-list-head:first-child {
          background:
            radial-gradient(circle at 0% 0%, rgba(255,214,102,0.28), transparent 10rem),
            linear-gradient(135deg, rgba(255,255,255,0.98), rgba(239,246,255,0.92));
        }

        .reference-service-chip {
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }

        .reference-service-chip:hover {
          transform: translateY(-0.12rem);
          border-color: rgba(16,185,129,0.3);
          box-shadow: 0 18px 40px rgba(15,23,42,0.08), 0 0 0 0.35rem rgba(16,185,129,0.055);
        }

        .reference-service-chip > button:hover,
        .reference-selected-card button:hover,
        .reference-list-head button:hover,
        .reference-appointment-card button:hover,
        .reference-empty-card button:hover {
          transform: translateY(-0.08rem);
        }

        .reference-service-chip > button,
        .reference-selected-card button,
        .reference-list-head button,
        .reference-appointment-card button,
        .reference-empty-card button {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .reference-selected-card {
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .reference-selected-card:hover {
          transform: translateY(-0.12rem);
          box-shadow: 0 18px 44px rgba(15,23,42,0.09), inset 0 1px 0 rgba(255,255,255,0.94);
        }

        .reference-submit-button {
          position: relative;
          overflow: hidden;
        }

        .reference-submit-button::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 0 34%, rgba(255,255,255,0.38) 48%, transparent 62% 100%);
          transform: translateX(-130%);
        }

        .reference-submit-button.is-sending::before,
        .reference-submit-button.is-sent::before {
          animation: reference-success-shine 1.35s ease-in-out infinite;
        }

        .reference-submit-button > svg,
        .reference-submit-button {
          isolation: isolate;
        }

        .reference-submit-button.is-sent {
          background:
            radial-gradient(circle at 22% 15%, rgba(255,255,255,0.38), transparent 30%),
            linear-gradient(135deg, #10b981, #2874f0);
          box-shadow: 0 18px 42px rgba(16,185,129,0.22);
          opacity: 1;
        }

        .reference-enquiry-form > p:last-child {
          border-radius: 0.82rem;
          padding: 0.72rem;
          background: rgba(248,250,252,0.76);
          border: 1px solid rgba(226,232,240,0.82);
        }

        /* Plain final enquiry cart */
        .reference-cart-page {
          max-width: min(74rem, calc(100% - 1rem)) !important;
          border-radius: 0;
          background:
            radial-gradient(circle at 0% 0%, rgba(37,99,235,0.1), transparent 16rem),
            radial-gradient(circle at 100% 0%, rgba(245,158,11,0.12), transparent 15rem),
            radial-gradient(circle at 100% 100%, rgba(16,185,129,0.1), transparent 18rem),
            #f8fafc;
        }

        .reference-cart-page .reference-cart-panel {
          position: relative;
          overflow: hidden;
          padding: clamp(0.75rem, 2vw, 1.1rem);
          border-radius: 1.1rem;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 12px 30px rgba(15,23,42,0.06);
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }

        .reference-cart-page .reference-cart-panel::before {
          display: block;
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(135deg, rgba(37,99,235,0.16), transparent 22%) top left / 18rem 18rem no-repeat,
            linear-gradient(225deg, rgba(245,158,11,0.18), transparent 24%) top right / 16rem 16rem no-repeat,
            linear-gradient(315deg, rgba(16,185,129,0.14), transparent 24%) bottom right / 18rem 18rem no-repeat;
          opacity: 0.82;
        }

        .reference-cart-page .reference-cart-panel::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 0.28rem;
          background: linear-gradient(90deg, #2563eb, #f59e0b, #10b981);
          pointer-events: none;
        }

        .reference-cart-head {
          margin-bottom: 1rem;
          padding: clamp(1rem, 2vw, 1.25rem);
          border-radius: 0.85rem;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 8px 18px rgba(15,23,42,0.035);
        }

        .reference-cart-head span {
          color: #2563eb;
        }

        .reference-cart-head h2 {
          font-size: clamp(1.85rem, 4vw, 3rem);
          line-height: 1;
          font-weight: 650;
          letter-spacing: -0.04em;
        }

        .reference-cart-head p {
          color: #64748b;
        }

        .reference-cart-page .reference-cart-head > button,
        .reference-list-head button,
        .reference-empty-card button,
        .reference-appointment-card button {
          min-height: 2.5rem;
          width: auto;
          height: auto;
          padding: 0 0.9rem;
          border-radius: 0.65rem;
          color: #0f172a;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          box-shadow: none;
          font-size: 0.72rem;
          font-weight: 850;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .reference-cart-grid {
          grid-template-columns: minmax(0, 1.15fr) minmax(21rem, 0.45fr);
          gap: 1rem;
        }

        .reference-list-head,
        .reference-cart-page .reference-list-head:first-child,
        .reference-service-chip,
        .reference-appointment-card,
        .reference-empty-card,
        .reference-selected-card,
        .reference-enquiry-form,
        .reference-order-summary {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          box-shadow: none;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }

        .reference-list-head {
          border-left: 4px solid #2563eb;
        }

        .reference-list-head {
          border-radius: 0.8rem;
          padding: 0.95rem;
        }

        .reference-list-head strong {
          font-size: 1rem;
          font-weight: 720;
        }

        .reference-service-summary {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.7rem;
        }

        .reference-service-chip {
          min-height: 4.85rem;
          border-radius: 0.85rem;
          padding: 0.85rem 2.75rem 0.85rem 0.85rem;
          border-left: 4px solid #10b981;
        }

        .reference-service-chip:hover,
        .reference-selected-card:hover {
          transform: none;
          border-color: #cbd5e1;
          box-shadow: none;
        }

        .reference-service-chip > button {
          width: 1.9rem;
          height: 1.9rem;
          color: #dc2626;
          background: #fff1f2;
          border: 1px solid #fecdd3;
          box-shadow: none;
        }

        .reference-appointment-card {
          border-radius: 0.85rem;
          border-left: 4px solid #f59e0b;
        }

        .reference-selected-card {
          grid-template-columns: 7rem minmax(0, 1fr);
          min-height: 7.3rem;
          border-radius: 0.85rem;
          border-left: 4px solid #2563eb;
        }

        .reference-selected-card > div {
          min-height: 100%;
          background: #f1f5f9;
        }

        .reference-selected-card section {
          padding: 0.85rem;
        }

        .reference-selected-card strong {
          font-weight: 760;
        }

        .reference-enquiry-form {
          position: sticky;
          top: 0.75rem;
          border-radius: 0.95rem;
          padding: 1rem;
          border-top: 4px solid #2563eb;
        }

        .reference-order-summary {
          border-radius: 0.8rem;
          background: #f8fafc;
        }

        .reference-submit-button {
          min-height: 3.05rem;
          border-radius: 0.72rem;
          background: #2563eb;
          box-shadow: none;
          font-weight: 850;
        }

        .reference-submit-button.is-sent {
          background: #059669;
          box-shadow: none;
        }

        .reference-whatsapp-button {
          border-radius: 0.72rem;
          background: #ffffff;
          border: 1px solid #d1d5db;
          box-shadow: none;
        }

        .reference-success-hero {
          border-radius: 0.85rem;
          background: #ecfdf5;
          border: 1px solid #bbf7d0;
          box-shadow: none;
        }

        /* Services page flat performance pass */
        .services-liquid-pill,
        .services-liquid-filter,
        .services-liquid-command,
        .services-liquid-row,
        .services-liquid-tag,
        .services-liquid-item,
        .services-liquid-media,
        .services-liquid-badge,
        .services-liquid-phase,
        .services-liquid-phase-icon,
        .services-liquid-arrow {
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          isolation: auto !important;
        }

        .services-liquid-pill,
        .services-liquid-filter,
        .services-liquid-row,
        .services-liquid-tag,
        .services-liquid-item,
        .services-liquid-phase {
          background: #ffffff !important;
          border: 1px solid #e5e7eb !important;
          box-shadow: 0 8px 22px rgba(15,23,42,0.04) !important;
        }

        .services-liquid-filter.is-active,
        .services-liquid-row.is-active {
          border-color: rgba(16,185,129,0.42) !important;
          box-shadow: 0 10px 26px rgba(16,185,129,0.08) !important;
        }

        .services-liquid-filter.is-active {
          color: #ffffff !important;
          background: linear-gradient(135deg, #0f172a, #059669) !important;
          border-color: rgba(5,150,105,0.72) !important;
          box-shadow: 0 12px 28px rgba(5,150,105,0.18) !important;
        }

        .services-liquid-command {
          background: #0f172a !important;
          border: 1px solid rgba(15,23,42,0.92) !important;
          box-shadow: 0 14px 34px rgba(15,23,42,0.14) !important;
        }

        .services-liquid-arrow,
        .services-liquid-phase-icon {
          background: #10b981 !important;
          border-color: rgba(16,185,129,0.55) !important;
          box-shadow: none !important;
        }

        .services-liquid-row::before,
        .services-liquid-strip::before,
        .services-liquid-ambient,
        .services-showcase-ambient {
          display: none !important;
          animation: none !important;
        }

        .services-liquid-item:hover,
        .services-liquid-phase:hover {
          transform: none !important;
          box-shadow: 0 10px 26px rgba(15,23,42,0.06) !important;
        }

        /* Marketplace-style final cart */
        .reference-cart-trust-strip {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.65rem;
          margin: 0 0 1rem;
        }

        .reference-cart-trust-strip span {
          min-height: 2.9rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          padding: 0 0.75rem;
          border-radius: 0.75rem;
          color: #0f172a;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          font-size: 0.74rem;
          font-weight: 820;
          letter-spacing: 0.02em;
        }

        .reference-cart-trust-strip svg {
          color: #2563eb;
          flex: 0 0 auto;
        }

        .reference-checkout-summary {
          display: grid;
          gap: 0.58rem;
          padding: 0.85rem;
          border-radius: 0.8rem;
          background: #fff;
          border: 1px solid #e5e7eb;
        }

        .reference-checkout-summary div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          color: #64748b;
          font-size: 0.82rem;
          font-weight: 650;
        }

        .reference-checkout-summary strong {
          color: #0f172a;
          font-weight: 820;
        }

        .reference-checkout-summary .is-total {
          margin-top: 0.25rem;
          padding-top: 0.68rem;
          border-top: 1px dashed #cbd5e1;
          color: #0f172a;
        }

        .reference-checkout-summary .is-total strong::before {
          content: "₹";
        }

        .reference-privacy-note {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          padding: 0.82rem;
          border-radius: 0.8rem;
          color: #334155;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          font-size: 0.78rem;
          line-height: 1.48;
          font-weight: 560;
        }

        .reference-privacy-note svg {
          color: #2563eb;
          flex: 0 0 auto;
          margin-top: 0.1rem;
        }

        .reference-cart-page .reference-cart-panel {
          box-shadow: 0 16px 42px rgba(15,23,42,0.07);
        }

        .reference-enquiry-form {
          gap: 0.82rem;
        }

        @media (max-width: 1023px) {
          .reference-cart-trust-strip {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .reference-cart-trust-strip span {
            justify-content: flex-start;
          }

          .portfolio-hero {
            grid-template-columns: 1fr;
          }

          .portfolio-feed-header .portfolio-hero-copy {
            grid-template-columns: 1fr;
          }

          .portfolio-feed-header .portfolio-consent-note {
            grid-column: auto;
            grid-row: auto;
          }

          .portfolio-hero h1 {
            max-width: 13ch;
          }

          .portfolio-gallery-grid {
            grid-template-columns: 1fr;
          }

          .reference-cart-grid {
            grid-template-columns: 1fr;
          }

          .reference-enquiry-form {
            position: relative;
            top: auto;
          }
        }

        @media (max-width: 639px) {
          .portfolio-page {
            padding-top: 1rem !important;
          }

          .portfolio-hero-copy {
            padding: 1rem;
            border-radius: 1.35rem;
          }

          .portfolio-hero h1 {
            max-width: 10ch;
            font-size: clamp(2.85rem, 15vw, 4.4rem);
            line-height: 0.92;
          }

          .portfolio-hero p {
            font-size: 0.92rem;
            line-height: 1.52;
          }

          .portfolio-consent-note {
            grid-template-columns: 2.5rem minmax(0, 1fr);
            gap: 0.58rem;
            margin-top: 0.95rem;
            padding: 0.85rem;
            border-radius: 1rem;
          }

          .portfolio-consent-symbol {
            width: 2.24rem;
            height: 2.24rem;
          }

          .portfolio-consent-note p {
            font-size: 0.76rem;
            line-height: 1.48;
          }

          .portfolio-metrics {
            grid-template-columns: 1fr;
            gap: 0.55rem;
            padding: 0.45rem;
            border-radius: 1.05rem;
          }

          .portfolio-metrics div {
            display: grid;
            grid-template-columns: 2rem minmax(0, 1fr);
            align-items: center;
            min-height: auto;
            padding: 0.78rem;
            border-radius: 0.85rem;
          }

          .portfolio-metrics svg {
            width: 2rem;
            height: 2rem;
            padding: 0.45rem;
          }

          .portfolio-metrics strong {
            font-size: 1.35rem;
          }

          .portfolio-showcase-note {
            grid-template-columns: 1fr;
            gap: 0.45rem;
          }

          .portfolio-showcase-note h2 {
            font-size: 2rem;
          }

          .portfolio-gallery-grid {
            grid-template-columns: 1fr;
            gap: 0.78rem;
          }

          .portfolio-media-card,
          .portfolio-media-card.span-wide,
          .portfolio-media-card.span-tall {
            grid-column: auto;
            grid-row: auto;
            min-height: auto;
            border-radius: 1.2rem;
            animation: none;
            transition: none;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            box-shadow: 0 12px 30px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.92);
          }

          .portfolio-media-frame,
          .portfolio-media-card.span-wide .portfolio-media-frame,
          .portfolio-media-card.span-tall .portfolio-media-frame,
          .portfolio-media-card.is-video .portfolio-media-frame {
            min-height: 0;
          }

          .portfolio-media-frame::before {
            opacity: 0.18;
          }

          .portfolio-card-glow {
            opacity: 0.48;
          }

          .portfolio-media-card:hover {
            transform: none;
          }

          .reference-floating-cart {
            right: 0.85rem;
            bottom: calc(11.25rem + env(safe-area-inset-bottom));
            min-height: 2.95rem;
            padding: 0 0.72rem;
          }

          .reference-floating-cart strong {
            display: none;
          }

          .reference-cart-overlay {
            align-items: flex-end;
            padding: 0.65rem;
          }

          .reference-cart-panel {
            max-height: calc(100vh - 1.3rem);
            border-radius: 1.35rem;
          }

          .reference-cart-page .reference-cart-panel {
            max-height: none;
            border-radius: 1.15rem;
            padding: 0.58rem;
          }

          .reference-cart-head {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.65rem;
            border-radius: 0.9rem;
          }

          .reference-cart-grid {
            grid-template-columns: 1fr;
          }

          .reference-selected-list {
            max-height: none;
            overflow: visible;
            grid-template-columns: 1fr;
          }

          .reference-selected-card {
            grid-template-columns: 6.25rem minmax(0, 1fr);
            min-height: 7.25rem;
          }

          .reference-list-head {
            align-items: flex-start;
            flex-direction: column;
            padding: 0.9rem;
          }

          .reference-service-summary {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.55rem;
          }

          .reference-service-chip {
            min-height: 6.8rem;
            align-items: flex-start;
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.75rem 2.35rem 0.75rem 0.75rem;
          }

          .reference-service-chip strong {
            font-size: 0.82rem;
          }

          .reference-service-chip small {
            font-size: 0.66rem;
            line-height: 1.28;
          }

          .reference-appointment-card {
            align-items: flex-start;
            flex-direction: column;
          }

          .reference-enquiry-form {
            position: relative;
            top: auto;
            padding: 0.82rem;
          }

          .reference-submit-row {
            grid-template-columns: 1fr;
          }

          .reference-order-summary {
            align-items: flex-start;
            flex-direction: column;
          }

          .reference-order-summary p {
            max-width: none;
            text-align: left;
          }
        }

        @media (max-width: 430px) {
          .reference-service-summary {
            grid-template-columns: 1fr;
          }

          .reference-service-chip {
            min-height: 4.9rem;
            flex-direction: row;
            align-items: center;
          }
        }

        @keyframes portfolio-stage-breathe {
          0%, 100% { transform: scale(0.985); opacity: 0.62; }
          50% { transform: scale(1.01); opacity: 1; }
        }

        @keyframes portfolio-float-card {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -0.65rem; }
        }

        @keyframes portfolio-card-rise {
          from {
            opacity: 0;
            transform: translateY(1rem) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes portfolio-note-slide {
          0%, 100% { transform: translateX(-58%); opacity: 0.22; }
          50% { transform: translateX(58%); opacity: 0.72; }
        }

        @keyframes portfolio-kicker-sheen {
          0%, 100% { transform: translateX(-120%); opacity: 0; }
          42% { opacity: 0.65; }
          58% { transform: translateX(120%); opacity: 0; }
        }

        @keyframes portfolio-kicker-pop {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-0.12rem); }
        }

        @keyframes portfolio-kicker-dot {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0.28rem rgba(236,72,153,0.12); }
          50% { transform: scale(1.18); box-shadow: 0 0 0 0.42rem rgba(236,72,153,0.08); }
        }

        @keyframes portfolio-symbol-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-0.16rem) rotate(-4deg); }
        }

        @keyframes portfolio-tag-drift {
          0%, 100% { transform: translateY(0); opacity: 0.84; }
          50% { transform: translateY(-0.18rem); opacity: 1; }
        }

        @keyframes portfolio-console-orbit {
          0%, 100% { transform: translate3d(0,0,0) scale(1); opacity: 0.65; }
          50% { transform: translate3d(-0.65rem,0.45rem,0) scale(1.06); opacity: 1; }
        }

        @keyframes portfolio-metric-scan {
          0%, 100% { transform: translateX(-100%); opacity: 0; }
          38% { opacity: 0.85; }
          62% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes reference-cart-pop {
          0% { transform: translateY(0) scale(1); box-shadow: 0 22px 54px rgba(32,80,227,0.28), inset 0 1px 0 rgba(255,255,255,0.42); }
          35% { transform: translateY(-0.45rem) scale(1.12); box-shadow: 0 34px 76px rgba(32,80,227,0.42), 0 0 0 0.8rem rgba(32,80,227,0.12), inset 0 1px 0 rgba(255,255,255,0.55); }
          100% { transform: translateY(0) scale(1); box-shadow: 0 22px 54px rgba(32,80,227,0.28), inset 0 1px 0 rgba(255,255,255,0.42); }
        }

        @keyframes reference-success-rise {
          from {
            opacity: 0;
            transform: translateY(0.65rem) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes reference-success-shine {
          0% { transform: translateX(-130%); opacity: 0; }
          35% { opacity: 1; }
          72%, 100% { transform: translateX(130%); opacity: 0; }
        }

        @keyframes reference-success-pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 12px 30px rgba(16,185,129,0.24);
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 18px 38px rgba(40,116,240,0.28);
          }
        }

        .header-status-rotator span {
          transform: none;
          animation-name: header-status-fade;
          animation-timing-function: linear;
        }

        .mobile-tabbar {
          transform: translateZ(0);
          contain: layout paint;
        }

        .mobile-tabbar button {
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
          will-change: background-color, color;
        }

        .mobile-tabbar svg {
          pointer-events: none;
        }

        .portfolio-media-card {
          content-visibility: auto;
          contain-intrinsic-size: 720px;
        }

        .portfolio-media-frame video {
          will-change: auto;
        }

        @keyframes header-status-fade {
          0%, 30% {
            opacity: 1;
            visibility: visible;
            transform: none;
          }
          33%, 100% {
            opacity: 0;
            visibility: hidden;
            transform: none;
          }
        }

        @media (max-width: 639px) {
          html,
          body,
          #root {
            max-width: 100%;
            overflow-x: hidden;
          }

          .leaf-loader-screen {
            background: #050505;
          }

          .leaf-loader-video-wall {
            display: none;
          }

          .leaf-loader-mobile-reel {
            position: absolute;
            inset: 0;
            display: block;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #050914;
            border: 0;
            border-radius: 0;
            box-shadow: none;
          }

          .leaf-loader-mobile-reel::before {
            opacity: 0.52;
          }

          .leaf-loader-mobile-reel::after {
            opacity: 0.09;
          }

          nav {
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }

          .mobile-tabbar {
            background: rgba(255,255,255,0.94) !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            box-shadow: 0 10px 28px rgba(15,23,42,0.12) !important;
          }

          .mobile-tabbar button {
            transition: color 0.12s ease, background-color 0.12s ease !important;
            transform: none !important;
            will-change: auto !important;
          }

          .mobile-tabbar button:hover,
          .mobile-tabbar button:active {
            transform: none !important;
          }

          .header-status-card::before,
          .header-status-card::after {
            display: none !important;
          }

          .header-status-rotator span {
            display: none;
            opacity: 0;
            visibility: hidden;
            animation: none !important;
          }

          .header-status-rotator span:first-child {
            display: block;
            opacity: 1;
            visibility: visible;
          }

          .portfolio-page {
            width: 100% !important;
            max-width: 100% !important;
            padding-left: 0.72rem !important;
            padding-right: 0.72rem !important;
            overflow-x: hidden !important;
          }

          .portfolio-feed-shell,
          .portfolio-feed-main,
          .portfolio-gallery-grid {
            width: 100% !important;
            max-width: 100% !important;
            overflow-x: hidden !important;
          }

          .portfolio-gallery-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 0.8rem !important;
          }

          .portfolio-hero-copy {
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }

          .portfolio-media-card,
          .portfolio-media-card.span-wide,
          .portfolio-media-card.span-tall {
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            grid-column: auto !important;
            grid-row: auto !important;
            animation: none !important;
            transition: none !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            background: #ffffff !important;
            box-shadow: 0 10px 24px rgba(15,23,42,0.07) !important;
            contain: layout paint;
          }

          .portfolio-media-frame,
          .portfolio-media-card.span-wide .portfolio-media-frame,
          .portfolio-media-card.span-tall .portfolio-media-frame,
          .portfolio-media-card.is-video .portfolio-media-frame {
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            min-height: 0 !important;
            box-shadow: none !important;
            background: #f8fafc !important;
          }

          .portfolio-media-frame::before,
          .portfolio-card-glow {
            display: none !important;
          }

          .portfolio-card-type,
          .portfolio-audio-toggle,
          .wa-floating-body {
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }

          .portfolio-media-card:hover {
            transform: none !important;
          }

          .portfolio-page::before,
          .portfolio-page::after,
          .portfolio-feed-header .portfolio-hero-copy::after,
          .portfolio-consent-note::before,
          .portfolio-metrics div::after,
          .portfolio-kicker::after {
            animation: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
            scroll-behavior: auto !important;
          }
        }

        /* --- Beyond Design Marquee Animations --- */
        @keyframes marquee-left-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee-right-fast {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee-left-fast {
          animation: marquee-left-fast 40s linear infinite;
        }

        .animate-marquee-right-fast {
          animation: marquee-right-fast 40s linear infinite;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fadeInDown 0.6s ease-out forwards; }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { 
          animation: slideUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards; 
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(8px); }
        }
        .animate-bounce-x { animation: bounce-x 2s infinite ease-in-out; }

        @keyframes float-rotate-1 {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        .animate-float-rotate-1 {
          animation: float-rotate-1 5s ease-in-out infinite;
        }

        /* --- 3D Logo Animations --- */
        .perspective-wrapper {
          perspective: 1000px;
        }
        
        .logo-3d-box {
          transform-style: preserve-3d;
          animation: float3d 6s ease-in-out infinite;
          box-shadow: inset 2px 2px 10px rgba(255,255,255,0.2);
        }
        
        .logo-3d-img {
          transform: translateZ(20px) scale(1.1);
          filter: drop-shadow(-4px 8px 6px rgba(0,0,0,0.3));
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.6s ease;
        }

        .logo-3d-box-container {
           transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .group:hover .logo-3d-box-container {
          transform: scale(1.15);
        }

        .group:hover .logo-3d-img {
          transform: translateZ(45px) scale(1.2);
          filter: drop-shadow(-8px 16px 12px rgba(0,0,0,0.4));
        }

        @media (max-width: 639px) {
          nav .perspective-wrapper {
            perspective: none !important;
          }

          nav .logo-3d-box,
          nav .logo-3d-img,
          nav .logo-3d-box-container {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            filter: none !important;
          }
        }

        /* --- Final clarity pass: mobile header, launch cloud, and simple cart --- */
        .launch-choice-guide {
          position: relative;
          overflow: hidden;
          margin: 0;
          padding: clamp(1rem, 2.6vw, 1.35rem);
          border-radius: 1.15rem;
          background:
            radial-gradient(circle at 8% 0%, rgba(32,80,227,0.1), transparent 18rem),
            radial-gradient(circle at 92% 0%, rgba(16,185,129,0.12), transparent 18rem),
            linear-gradient(135deg, rgba(255,255,255,0.86), rgba(241,245,249,0.62));
          border: 1px solid rgba(255,255,255,0.86);
          box-shadow: 0 18px 54px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.92);
        }

        .launch-section-heading p {
          max-width: 48rem;
          margin-top: 0.55rem;
          color: rgba(15,23,42,0.58);
          font-size: 0.95rem;
          line-height: 1.55;
          font-weight: 360;
        }

        .launch-choice-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .launch-choice-card {
          position: relative;
          min-height: 17rem;
          display: flex;
          flex-direction: column;
          gap: 0.62rem;
          padding: 1rem;
          border-radius: 1rem;
          color: #0f172a;
          background: rgba(255,255,255,0.76);
          border: 1px solid rgba(226,232,240,0.86);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.9);
        }

        .launch-choice-index {
          position: absolute;
          right: 0.88rem;
          top: 0.72rem;
          color: rgba(15,23,42,0.16);
          font-size: 2.2rem;
          line-height: 1;
          font-weight: 700;
        }

        .launch-choice-icon {
          width: 2.65rem;
          height: 2.65rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.78rem;
          color: #ffffff;
          background: linear-gradient(135deg, #2050e3, #10b981);
          box-shadow: 0 14px 28px rgba(32,80,227,0.16);
        }

        .launch-choice-card > span {
          width: max-content;
          max-width: 100%;
          border-radius: 999px;
          padding: 0.28rem 0.5rem;
          color: #1d4ed8;
          background: rgba(219,234,254,0.76);
          font-size: 0.62rem;
          font-weight: 760;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .launch-choice-card h3 {
          max-width: 14rem;
          color: #0f172a;
          font-size: 1.3rem;
          line-height: 1.05;
          font-weight: 560;
          letter-spacing: -0.035em;
        }

        .launch-choice-card p {
          color: rgba(15,23,42,0.58);
          font-size: 0.86rem;
          line-height: 1.5;
          font-weight: 360;
        }

        .launch-choice-card div:last-child {
          display: flex;
          flex-wrap: wrap;
          gap: 0.38rem;
          margin-top: auto;
        }

        .launch-choice-card small {
          border-radius: 999px;
          padding: 0.32rem 0.48rem;
          color: rgba(15,23,42,0.68);
          background: rgba(248,250,252,0.86);
          border: 1px solid rgba(226,232,240,0.86);
          font-size: 0.66rem;
          font-weight: 640;
        }

        .reference-cart-page {
          max-width: min(72rem, calc(100% - 1rem)) !important;
          background: #f1f3f6 !important;
          border-radius: 0 !important;
        }

        .reference-cart-page .reference-cart-panel {
          padding: 0 !important;
          overflow: visible !important;
          border-radius: 0.55rem !important;
          background: transparent !important;
          border: 0 !important;
          box-shadow: none !important;
        }

        .reference-cart-page .reference-cart-panel::before,
        .reference-cart-page .reference-cart-panel::after {
          display: none !important;
        }

        .reference-cart-head,
        .reference-cart-trust-strip span,
        .reference-cart-steps,
        .reference-list-head,
        .reference-service-chip,
        .reference-appointment-card,
        .reference-empty-card,
        .reference-selected-card,
        .reference-enquiry-form,
        .reference-order-summary,
        .reference-checkout-summary,
        .reference-privacy-note {
          background: #ffffff !important;
          border: 1px solid #e0e5ee !important;
          box-shadow: 0 1px 2px rgba(15,23,42,0.04) !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }

        .reference-cart-head {
          margin-bottom: 0.75rem !important;
          border-radius: 0.55rem !important;
          padding: 1.05rem 1.15rem !important;
          border-top: 4px solid #2874f0 !important;
        }

        .reference-cart-head h2 {
          font-size: clamp(1.65rem, 3.4vw, 2.6rem) !important;
          font-weight: 680 !important;
          letter-spacing: -0.035em !important;
        }

        .reference-cart-head p {
          max-width: 44rem !important;
          color: #64748b !important;
          font-size: 0.92rem !important;
        }

        .reference-cart-head > button {
          color: #ffffff !important;
          background: #2874f0 !important;
          border-color: #2874f0 !important;
          border-radius: 0.38rem !important;
        }

        .reference-cart-trust-strip {
          margin-bottom: 0.75rem !important;
        }

        .reference-cart-steps {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.55rem;
          margin-bottom: 0.75rem;
          padding: 0.7rem;
          border-radius: 0.55rem;
        }

        .reference-cart-steps span {
          min-height: 2.35rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.38rem;
          border-radius: 0.36rem;
          color: #334155;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          font-size: 0.74rem;
          font-weight: 780;
        }

        .reference-cart-steps svg {
          color: #2874f0;
        }

        .reference-cart-grid {
          grid-template-columns: minmax(0, 1fr) minmax(20rem, 0.38fr) !important;
          gap: 0.75rem !important;
        }

        .reference-selected-list,
        .reference-service-summary {
          gap: 0.65rem !important;
        }

        .reference-list-head,
        .reference-appointment-card,
        .reference-empty-card,
        .reference-service-chip,
        .reference-selected-card,
        .reference-enquiry-form {
          border-radius: 0.55rem !important;
        }

        .reference-list-head {
          border-left: 4px solid #2874f0 !important;
        }

        .reference-list-head button,
        .reference-empty-card button,
        .reference-appointment-card button,
        .reference-selected-card button {
          border-radius: 0.34rem !important;
          color: #2874f0 !important;
          background: #f5f8ff !important;
          border-color: #d9e7ff !important;
        }

        .reference-service-chip {
          border-left: 4px solid #10b981 !important;
          min-height: 4.35rem !important;
        }

        .reference-appointment-card {
          border-left: 4px solid #f59e0b !important;
        }

        .reference-selected-card {
          grid-template-columns: 6.5rem minmax(0, 1fr) !important;
          border-left: 4px solid #2874f0 !important;
        }

        .reference-enquiry-form {
          top: 0.75rem !important;
          border-top: 4px solid #2874f0 !important;
        }

        .reference-form-title {
          padding: 0.85rem;
          border-radius: 0.5rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }

        .reference-form-title span {
          display: block;
          color: #2874f0;
          font-size: 0.64rem;
          font-weight: 850;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .reference-form-title strong {
          display: block;
          margin-top: 0.12rem;
          color: #0f172a;
          font-size: 1.05rem;
          font-weight: 760;
        }

        .reference-form-title p {
          margin-top: 0.22rem;
          color: #64748b;
          font-size: 0.78rem;
          line-height: 1.4;
        }

        .reference-enquiry-form input,
        .reference-enquiry-form textarea {
          border-radius: 0.42rem !important;
          background: #ffffff !important;
        }

        .reference-submit-button,
        .reference-whatsapp-button {
          border-radius: 0.42rem !important;
        }

        @media (max-width: 900px) {
          .launch-choice-grid {
            grid-template-columns: 1fr;
          }

          .reference-cart-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 639px) {
          nav {
            gap: 0.55rem !important;
          }

          .header-status-card {
            width: min(17.6rem, calc(100vw - 4.1rem)) !important;
            min-height: 3.12rem !important;
            padding: 0 !important;
            gap: 0 !important;
            border-radius: 999px !important;
          }

          .header-status-copy {
            min-width: 0 !important;
            padding: 0.48rem 0.48rem 0.46rem 0.76rem !important;
            gap: 0.08rem !important;
          }

          .header-status-topline {
            gap: 0.28rem !important;
            justify-content: flex-start !important;
          }

          .header-status-copy strong {
            font-size: 0.78rem !important;
            line-height: 1 !important;
            letter-spacing: 0.02em !important;
          }

          .header-status-topline small {
            padding: 0.16rem 0.28rem !important;
            font-size: 0.45rem !important;
            line-height: 1 !important;
          }

          .header-status-rotator {
            display: block !important;
            height: 0.9rem !important;
            overflow: hidden !important;
            background: transparent !important;
          }

          .header-status-rotator span {
            display: block !important;
            max-width: 100% !important;
            padding: 0 !important;
            color: rgba(15,23,42,0.74) !important;
            font-size: 0.52rem !important;
            line-height: 0.9rem !important;
            font-weight: 700 !important;
            letter-spacing: 0.055em !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            white-space: nowrap !important;
          }

          .header-status-action {
            min-width: 4.85rem !important;
            margin: 0.22rem !important;
            padding: 0 0.42rem !important;
            font-size: 0.48rem !important;
            letter-spacing: 0.07em !important;
          }

          .launch-choice-guide {
            padding: 0.85rem;
            border-radius: 1.05rem;
          }

          .launch-choice-card {
            min-height: auto;
            padding: 0.9rem;
          }

          .reference-cart-page {
            max-width: 100% !important;
            padding-top: 1rem !important;
          }

          .reference-cart-head {
            align-items: flex-start !important;
            flex-direction: column !important;
          }

          .reference-cart-head > button {
            width: 100% !important;
          }

          .reference-cart-trust-strip,
          .reference-cart-steps,
          .reference-service-summary {
            grid-template-columns: 1fr !important;
          }

          .reference-selected-list {
            display: flex !important;
            flex-direction: column !important;
          }

          .reference-selected-card {
            grid-template-columns: 5.8rem minmax(0, 1fr) !important;
          }

          .reference-submit-row {
            grid-template-columns: 1fr !important;
          }
        }

        /* --- Portfolio Editorial Collage --- */
        .portfolio-collage-page {
          width: 100% !important;
          max-width: none !important;
          margin: 0 !important;
          padding-inline: clamp(1rem, 3.5vw, 4.5rem) !important;
          color: #f5f5f5 !important;
          background: #171717;
          isolation: isolate;
        }

        .portfolio-collage-page::before,
        .portfolio-collage-page::after {
          display: none;
        }

        .portfolio-collage-page .portfolio-hero {
          max-width: 88rem;
          margin: 0 auto 2rem;
        }

        .portfolio-collage-page .portfolio-feed-header .portfolio-hero-copy {
          display: block;
          min-height: min(43rem, 62vh);
          padding: clamp(2.2rem, 7vw, 7rem) 0 1rem;
          color: #f5f5f5;
          background: transparent;
          border: 0;
          border-radius: 0;
          box-shadow: none;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }

        .portfolio-collage-page .portfolio-feed-header .portfolio-hero-copy::before,
        .portfolio-collage-page .portfolio-feed-header .portfolio-hero-copy::after {
          display: none;
        }

        .portfolio-collage-page .portfolio-feed-intro {
          max-width: 50rem;
        }

        .portfolio-collage-page .portfolio-kicker {
          margin-bottom: 1.5rem;
          color: rgba(255,255,255,0.78);
          background: transparent;
          border-color: rgba(255,255,255,0.26);
          box-shadow: none;
          animation: portfolio-collage-flicker 7s ease-in-out infinite;
        }

        .portfolio-collage-page .portfolio-kicker > div {
          color: #f5f5f5;
        }

        .portfolio-collage-page .portfolio-hero h1 {
          max-width: 8.6ch;
          color: #f5f5f5;
          font-size: clamp(3.7rem, 8vw, 8.5rem);
          line-height: 0.86;
          letter-spacing: -0.065em;
          font-weight: 350;
        }

        .portfolio-collage-page .portfolio-hero p {
          max-width: 31rem;
          margin-top: 2rem;
          color: rgba(255,255,255,0.58);
          font-size: clamp(0.95rem, 1.4vw, 1.2rem);
          line-height: 1.55;
        }

        .portfolio-collage-page .portfolio-feed-tags,
        .portfolio-collage-page .portfolio-metrics {
          display: none;
        }

        .portfolio-collage-page .portfolio-feed-header .portfolio-consent-note {
          display: flex;
          max-width: 34rem;
          margin-top: 4rem;
          padding: 0.95rem 0 0.95rem 1rem;
          color: rgba(255,255,255,0.62);
          background: transparent;
          border: 0;
          border-left: 1px solid rgba(255,255,255,0.3);
          box-shadow: none;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }

        .portfolio-collage-page .portfolio-consent-note::before {
          display: none;
        }

        .portfolio-collage-page .portfolio-consent-symbol {
          width: 2.25rem;
          height: 2.25rem;
          color: #171717;
          background: #f5f5f5;
          box-shadow: none;
        }

        .portfolio-collage-page .portfolio-consent-note span {
          color: rgba(255,255,255,0.85);
        }

        .portfolio-collage-page .portfolio-consent-note p {
          color: rgba(255,255,255,0.52);
        }

        .portfolio-collage-page .portfolio-feed-shell {
          max-width: 88rem;
          margin: 0 auto;
          padding-bottom: 2rem;
        }

        .portfolio-collage-page .portfolio-showcase-note {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 2rem;
          margin: 0 0 1.25rem;
          padding: 0 0 1rem;
          color: #f5f5f5;
          background: transparent;
          border: 0;
          border-bottom: 1px solid rgba(255,255,255,0.18);
          box-shadow: none;
        }

        .portfolio-collage-page .portfolio-showcase-note span {
          color: rgba(255,255,255,0.42);
        }

        .portfolio-collage-page .portfolio-showcase-note h2 {
          color: #f5f5f5;
          font-size: clamp(1.35rem, 2.6vw, 2.2rem);
          font-weight: 400;
          letter-spacing: -0.04em;
        }

        .portfolio-collage-page .portfolio-showcase-note p {
          max-width: 24rem;
          color: rgba(255,255,255,0.48);
        }

        .portfolio-collage-page .portfolio-gallery-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 0.9rem;
          align-items: start;
        }

        .portfolio-collage-page .portfolio-media-card,
        .portfolio-collage-page .portfolio-media-card.span-wide,
        .portfolio-collage-page .portfolio-media-card.span-tall {
          position: relative;
          display: flex;
          break-inside: avoid;
          min-width: 0;
          min-height: 0;
          margin: 0;
          padding: 0;
          gap: 0;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 0.42rem;
          background: #232323;
          box-shadow: none;
          animation: portfolio-collage-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--portfolio-delay);
          transition: border-color 0.28s ease, transform 0.28s ease;
        }

        .portfolio-collage-page .portfolio-media-card:hover {
          transform: translateY(-0.35rem);
          border-color: rgba(255,255,255,0.48);
          box-shadow: 0 18px 36px rgba(0,0,0,0.26);
        }

        .portfolio-collage-page .portfolio-media-frame,
        .portfolio-collage-page .portfolio-media-card.span-wide .portfolio-media-frame,
        .portfolio-collage-page .portfolio-media-card.span-tall .portfolio-media-frame,
        .portfolio-collage-page .portfolio-media-card.is-video .portfolio-media-frame {
          width: 100%;
          aspect-ratio: var(--portfolio-ratio, 4 / 5);
          border-radius: 0;
          background: #232323;
        }

        .portfolio-collage-page .portfolio-media-frame video,
        .portfolio-collage-page .portfolio-media-frame img {
          object-fit: contain !important;
          background: #232323 !important;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), filter 0.6s ease;
        }

        .portfolio-collage-page .portfolio-media-card:hover .portfolio-media-frame video,
        .portfolio-collage-page .portfolio-media-card:hover .portfolio-media-frame img {
          transform: scale(1.035);
          filter: saturate(1.08) contrast(1.04);
        }

        .portfolio-collage-page .portfolio-card-type {
          top: 0.65rem;
          left: 0.65rem;
          padding: 0.34rem 0.52rem;
          color: rgba(255,255,255,0.78);
          background: rgba(0,0,0,0.48);
          border-color: rgba(255,255,255,0.2);
          box-shadow: none;
          font-size: 0.56rem;
          letter-spacing: 0.12em;
        }

        .portfolio-collage-page .portfolio-audio-toggle {
          top: 0.62rem;
          right: 0.62rem;
          width: 2rem;
          height: 2rem;
          color: #f5f5f5;
          background: rgba(0,0,0,0.5);
          border-color: rgba(255,255,255,0.24);
          box-shadow: none;
        }

        .portfolio-collage-page .portfolio-card-glow {
          display: block;
          inset: auto 0 0;
          height: 48%;
          background: linear-gradient(180deg, transparent, rgba(0,0,0,0.76));
          z-index: 2;
        }

        .portfolio-collage-page .portfolio-card-copy {
          position: absolute;
          inset: auto 0 0;
          z-index: 4;
          min-height: 0;
          padding: 3rem 0.75rem 0.75rem;
          color: #fff;
          background: linear-gradient(180deg, transparent, rgba(0,0,0,0.78));
        }

        .portfolio-collage-page .portfolio-card-copy span {
          color: rgba(255,255,255,0.58);
          font-size: 0.52rem;
          letter-spacing: 0.14em;
        }

        .portfolio-collage-page .portfolio-card-copy h3 {
          margin-top: 0.18rem;
          color: #fff;
          font-size: clamp(0.78rem, 1vw, 1rem);
          line-height: 1.08;
          font-weight: 500;
        }

        .portfolio-collage-page .portfolio-card-copy p {
          margin-top: 0.2rem;
          color: rgba(255,255,255,0.58);
          font-size: 0.58rem;
          line-height: 1.25;
        }

        .portfolio-collage-page .portfolio-post-actions {
          position: absolute;
          top: 0.58rem;
          right: 0.58rem;
          z-index: 5;
          width: auto;
          margin: 0;
          padding: 0.28rem 0.34rem;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px;
          color: #fff;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .portfolio-collage-page .portfolio-action-cluster {
          gap: 0.22rem;
        }

        .portfolio-collage-page .portfolio-like-button,
        .portfolio-collage-page .portfolio-share-button,
        .portfolio-collage-page .portfolio-reference-button {
          min-width: 2.05rem;
          height: 2.05rem;
          gap: 0.18rem;
          padding: 0 0.28rem;
          color: rgba(255,255,255,0.9);
          background: transparent;
          border: 0;
          box-shadow: none;
        }

        .portfolio-collage-page .portfolio-like-button span,
        .portfolio-collage-page .portfolio-share-button span {
          color: inherit;
          font-size: 0.57rem;
        }

        .portfolio-collage-page .portfolio-like-button.is-liked {
          color: #ff647f;
        }

        .portfolio-collage-page .portfolio-reference-button.is-selected {
          color: #f8c66f;
        }

        @keyframes portfolio-collage-rise {
          from { opacity: 0; transform: translateY(2rem); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes portfolio-collage-flicker {
          0%, 100% { opacity: 0.78; }
          48% { opacity: 1; }
          52% { opacity: 0.62; }
          56% { opacity: 0.92; }
        }

        @media (max-width: 1100px) {
          .portfolio-collage-page .portfolio-gallery-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .portfolio-collage-page {
            padding-inline: 0.72rem !important;
            padding-top: 0 !important;
            padding-bottom: 8.8rem !important;
          }

          .portfolio-collage-page .portfolio-feed-header .portfolio-hero-copy {
            min-height: auto;
            padding: 2.5rem 0.25rem 1.5rem;
          }

          .portfolio-collage-page .portfolio-hero h1 {
            max-width: 8.5ch;
            font-size: clamp(3rem, 15vw, 5.25rem);
          }

          .portfolio-collage-page .portfolio-hero p {
            max-width: 22rem;
            margin-top: 1.35rem;
            font-size: 0.86rem;
          }

          .portfolio-collage-page .portfolio-feed-header .portfolio-consent-note {
            margin-top: 2rem;
            padding-left: 0.75rem;
          }

          .portfolio-collage-page .portfolio-showcase-note {
            display: block;
            margin-bottom: 0.8rem;
          }

          .portfolio-collage-page .portfolio-showcase-note p {
            margin-top: 0.45rem;
            font-size: 0.74rem;
          }

          .portfolio-collage-page .portfolio-gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.58rem;
          }

          .portfolio-collage-page .portfolio-media-card,
          .portfolio-collage-page .portfolio-media-card.span-wide,
          .portfolio-collage-page .portfolio-media-card.span-tall {
            border-radius: 0.3rem;
            animation: portfolio-collage-rise 0.58s cubic-bezier(0.22, 1, 0.36, 1) both;
          }

          .portfolio-collage-page .portfolio-card-copy {
            padding: 2.3rem 0.5rem 0.5rem;
          }

          .portfolio-collage-page .portfolio-card-copy h3 {
            font-size: 0.68rem;
          }

          .portfolio-collage-page .portfolio-card-copy p,
          .portfolio-collage-page .portfolio-card-copy span {
            font-size: 0.48rem;
          }

          .portfolio-collage-page .portfolio-post-actions {
            top: 0.38rem;
            right: 0.38rem;
            padding: 0.18rem;
          }

          .portfolio-collage-page .portfolio-like-button,
          .portfolio-collage-page .portfolio-share-button,
          .portfolio-collage-page .portfolio-reference-button {
            min-width: 1.75rem;
            height: 1.75rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-collage-page .portfolio-media-card,
          .portfolio-collage-page .portfolio-kicker {
            animation: none !important;
          }
        }

        /* --- Portfolio Bento Workspace --- */
        body:has(.portfolio-bento-page) {
          background: #b8b8bc;
        }

        .portfolio-bento-page {
          width: min(96rem, calc(100% - 3rem)) !important;
          min-height: calc(100vh - 8rem);
          margin: 2rem auto 7rem !important;
          padding: 0.58rem !important;
          display: grid;
          grid-template-columns: minmax(19rem, 0.78fr) minmax(0, 1.62fr);
          align-items: start;
          gap: 0.58rem;
          color: #f7f7f4 !important;
          background: #111214;
          border: 1px solid rgba(17,18,20,0.92);
          border-radius: 0.82rem;
          box-shadow: 0 2.2rem 5.5rem rgba(34,34,40,0.22);
          overflow: visible;
        }

        .portfolio-bento-page::before,
        .portfolio-bento-page::after {
          display: none !important;
        }

        .portfolio-bento-page .portfolio-hero {
          position: sticky;
          top: 5.2rem;
          z-index: 2;
          width: 100%;
          max-width: none;
          margin: 0;
          align-self: start;
        }

        .portfolio-bento-page .portfolio-feed-header .portfolio-hero-copy {
          min-height: min(47rem, calc(100vh - 6.5rem));
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: clamp(1.35rem, 3vw, 2.4rem);
          color: #f7f7f4;
          background:
            radial-gradient(circle at 72% 68%, rgba(142,127,255,0.22), transparent 10rem),
            linear-gradient(145deg, #5a5864, #4f4d58 70%, #46454f);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 0.68rem;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .portfolio-bento-page .portfolio-feed-header .portfolio-hero-copy::before {
          content: "";
          position: absolute;
          display: block;
          width: 5.5rem;
          height: 5.5rem;
          right: 16%;
          bottom: 23%;
          border-radius: 50%;
          background: conic-gradient(from 25deg, #8f7cff, #67d8d0, #f5c464, #8f7cff);
          box-shadow: 0 0 0 0.7rem rgba(255,255,255,0.06);
          animation: portfolio-bento-orbit 8s linear infinite;
        }

        .portfolio-bento-page .portfolio-feed-header .portfolio-hero-copy::after {
          content: "LEAF / 2026";
          position: absolute;
          display: block;
          right: 1.4rem;
          bottom: 1.2rem;
          color: rgba(255,255,255,0.36);
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.16em;
        }

        .portfolio-bento-page .portfolio-feed-intro {
          max-width: none;
        }

        .portfolio-bento-page .portfolio-kicker {
          width: fit-content;
          margin-bottom: clamp(2.2rem, 6vh, 4.5rem);
          padding: 0;
          color: rgba(255,255,255,0.78);
          background: transparent;
          border: 0;
          border-radius: 0;
          box-shadow: none;
          animation: none;
        }

        .portfolio-bento-page .portfolio-kicker::after {
          display: none;
        }

        .portfolio-bento-page .portfolio-hero h1 {
          max-width: 8.3ch;
          color: #fff;
          font-size: clamp(3.15rem, 5vw, 5.8rem);
          line-height: 0.91;
          letter-spacing: -0.06em;
          font-weight: 520;
        }

        .portfolio-bento-page .portfolio-hero p {
          max-width: 21rem;
          margin-top: 1.45rem;
          color: rgba(255,255,255,0.65);
          font-size: 0.84rem;
          line-height: 1.5;
        }

        .portfolio-bento-page .portfolio-feed-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: 1.3rem;
        }

        .portfolio-bento-page .portfolio-feed-tags span {
          color: rgba(255,255,255,0.78);
          background: rgba(17,18,20,0.22);
          border-color: rgba(255,255,255,0.13);
          box-shadow: none;
          animation: none;
        }

        .portfolio-bento-page .portfolio-feed-header .portfolio-consent-note {
          position: relative;
          z-index: 2;
          max-width: 21rem;
          margin-top: auto;
          padding: 1rem;
          display: grid;
          grid-template-columns: 2.25rem minmax(0, 1fr);
          gap: 0.65rem;
          color: rgba(255,255,255,0.68);
          background: rgba(17,18,20,0.2);
          border: 1px solid rgba(255,255,255,0.11);
          border-radius: 0.72rem;
        }

        .portfolio-bento-page .portfolio-consent-symbol {
          color: #565360;
          background: #f7f7f4;
        }

        .portfolio-bento-page .portfolio-consent-note p {
          color: rgba(255,255,255,0.5);
          font-size: 0.68rem;
          line-height: 1.42;
        }

        .portfolio-bento-page .portfolio-feed-shell {
          width: 100%;
          max-width: none;
          margin: 0;
          padding: 0;
        }

        .portfolio-bento-page .portfolio-showcase-note {
          position: relative;
          min-height: 15.5rem;
          margin: 0 0 0.58rem;
          padding: clamp(1.3rem, 3vw, 2.2rem);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          overflow: hidden;
          color: #17171b;
          background:
            radial-gradient(circle at 30% 96%, rgba(248,196,116,0.55), transparent 8rem),
            linear-gradient(145deg, #dedcff, #c7c5fa);
          border: 1px solid rgba(255,255,255,0.36);
          border-radius: 0.68rem;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.42);
        }

        .portfolio-bento-page .portfolio-showcase-note::before {
          content: "LEAF";
          position: absolute;
          left: 1.25rem;
          bottom: -0.2rem;
          color: rgba(23,23,27,0.09);
          font-size: clamp(5rem, 12vw, 10rem);
          line-height: 0.72;
          font-weight: 800;
          letter-spacing: -0.08em;
        }

        .portfolio-bento-page .portfolio-showcase-note > div,
        .portfolio-bento-page .portfolio-showcase-note > p {
          position: relative;
          z-index: 1;
          width: min(100%, 25rem);
        }

        .portfolio-bento-page .portfolio-showcase-note span {
          color: rgba(23,23,27,0.48);
        }

        .portfolio-bento-page .portfolio-showcase-note h2 {
          max-width: 12ch;
          margin-top: 0.45rem;
          color: #17171b;
          font-size: clamp(2rem, 4vw, 4.3rem);
          line-height: 0.94;
          font-weight: 520;
          letter-spacing: -0.055em;
        }

        .portfolio-bento-page .portfolio-showcase-note p {
          margin-top: 1rem;
          color: rgba(23,23,27,0.58);
          font-size: 0.74rem;
        }

        .portfolio-bento-page .portfolio-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          grid-auto-flow: dense;
          grid-auto-rows: 10.5rem;
          gap: 0.58rem;
        }

        .portfolio-bento-page .portfolio-media-card,
        .portfolio-bento-page .portfolio-media-card.span-wide,
        .portfolio-bento-page .portfolio-media-card.span-tall {
          width: auto;
          height: auto;
          min-height: 0;
          grid-column: auto;
          grid-row: span 1;
          border-radius: 0.68rem;
          border-color: rgba(255,255,255,0.12);
          background: #292a2e;
          box-shadow: none;
          transform: none;
          overflow: hidden;
        }

        .portfolio-bento-page .portfolio-media-card.span-wide {
          grid-column: span 2;
        }

        .portfolio-bento-page .portfolio-media-card.span-tall {
          grid-row: span 2;
        }

        .portfolio-bento-page .portfolio-media-card:nth-child(6n + 2) {
          background: #5350d8;
        }

        .portfolio-bento-page .portfolio-media-card:nth-child(6n + 4) {
          background: #ad724d;
        }

        .portfolio-bento-page .portfolio-media-card:nth-child(6n + 5) {
          background: #d4d1ff;
        }

        .portfolio-bento-page .portfolio-media-card:hover {
          transform: translateY(-0.22rem);
          border-color: rgba(255,255,255,0.46);
          box-shadow: 0 1.2rem 2.4rem rgba(0,0,0,0.22);
        }

        .portfolio-bento-page .portfolio-media-frame,
        .portfolio-bento-page .portfolio-media-card.span-wide .portfolio-media-frame,
        .portfolio-bento-page .portfolio-media-card.span-tall .portfolio-media-frame,
        .portfolio-bento-page .portfolio-media-card.is-video .portfolio-media-frame {
          width: 100%;
          height: 100%;
          min-height: 0;
          aspect-ratio: auto;
          background: transparent;
        }

        .portfolio-bento-page .portfolio-media-frame video,
        .portfolio-bento-page .portfolio-media-frame img {
          width: 100%;
          height: 100%;
          object-fit: contain !important;
          background: transparent !important;
        }

        .portfolio-bento-page .portfolio-card-copy {
          padding: 3rem 0.72rem 0.65rem;
          background: linear-gradient(180deg, transparent, rgba(0,0,0,0.72));
        }

        .portfolio-bento-page .portfolio-audio-toggle {
          top: auto;
          right: 0.55rem;
          bottom: 4rem;
        }

        .portfolio-bento-page .portfolio-post-actions {
          opacity: 0;
          transform: translateY(-0.35rem);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .portfolio-bento-page .portfolio-media-card:hover .portfolio-post-actions,
        .portfolio-bento-page .portfolio-media-card:focus-within .portfolio-post-actions {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes portfolio-bento-orbit {
          to { transform: rotate(360deg); }
        }

        @supports (animation-timeline: view()) {
          .portfolio-bento-page .portfolio-media-card {
            animation: portfolio-bento-reveal linear both;
            animation-timeline: view();
            animation-range: entry 3% cover 25%;
          }
        }

        @keyframes portfolio-bento-reveal {
          from { opacity: 0; transform: translateY(1.5rem) scale(0.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 980px) {
          .portfolio-bento-page {
            grid-template-columns: 1fr;
            width: min(48rem, calc(100% - 1.5rem)) !important;
          }

          .portfolio-bento-page .portfolio-hero {
            position: relative;
            top: auto;
          }

          .portfolio-bento-page .portfolio-feed-header .portfolio-hero-copy {
            min-height: 31rem;
          }
        }

        @media (max-width: 639px) {
          .portfolio-bento-page {
            width: calc(100% - 0.7rem) !important;
            margin: 0.4rem auto 7.5rem !important;
            padding: 0.38rem !important;
            gap: 0.38rem;
            border-radius: 0.68rem;
          }

          .portfolio-bento-page .portfolio-feed-header .portfolio-hero-copy {
            min-height: 28rem;
            padding: 1.15rem;
            border-radius: 0.55rem;
          }

          .portfolio-bento-page .portfolio-kicker {
            margin-bottom: 2.4rem;
          }

          .portfolio-bento-page .portfolio-hero h1 {
            max-width: 8.4ch;
            font-size: clamp(3.2rem, 16vw, 4.7rem);
          }

          .portfolio-bento-page .portfolio-feed-header .portfolio-consent-note {
            max-width: 100%;
            margin-top: auto;
          }

          .portfolio-bento-page .portfolio-showcase-note {
            min-height: 13rem;
            margin-bottom: 0.38rem;
            padding: 1rem;
            border-radius: 0.55rem;
          }

          .portfolio-bento-page .portfolio-showcase-note h2 {
            font-size: clamp(2rem, 10vw, 3rem);
          }

          .portfolio-bento-page .portfolio-gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-auto-rows: 9.25rem;
            gap: 0.38rem;
          }

          .portfolio-bento-page .portfolio-media-card,
          .portfolio-bento-page .portfolio-media-card.span-wide,
          .portfolio-bento-page .portfolio-media-card.span-tall {
            border-radius: 0.5rem;
          }

          .portfolio-bento-page .portfolio-media-card.span-wide {
            grid-column: span 2;
          }

          .portfolio-bento-page .portfolio-post-actions {
            opacity: 1;
            transform: none;
          }

          .portfolio-bento-page .portfolio-action-cluster span {
            display: none;
          }

          .portfolio-bento-page .portfolio-card-copy h3 {
            font-size: 0.72rem;
          }

          .portfolio-bento-page .portfolio-card-copy p {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-bento-page .portfolio-feed-header .portfolio-hero-copy::before,
          .portfolio-bento-page .portfolio-media-card {
            animation: none !important;
          }
        }

        /* Natural-ratio media wall: no overlays, cropping, or forced frames. */
        .portfolio-bento-page .portfolio-gallery-grid {
          display: block !important;
          columns: 3 13rem;
          column-gap: 0.58rem;
        }

        .portfolio-bento-page .portfolio-media-card,
        .portfolio-bento-page .portfolio-media-card.span-wide,
        .portfolio-bento-page .portfolio-media-card.span-tall {
          display: inline-block !important;
          width: 100% !important;
          height: auto !important;
          min-height: 0 !important;
          margin: 0 0 0.58rem !important;
          padding: 0 !important;
          break-inside: avoid;
          vertical-align: top;
          overflow: hidden;
          background: #242529;
        }

        .portfolio-bento-page .portfolio-media-frame,
        .portfolio-bento-page .portfolio-media-card.span-wide .portfolio-media-frame,
        .portfolio-bento-page .portfolio-media-card.span-tall .portfolio-media-frame,
        .portfolio-bento-page .portfolio-media-card.is-video .portfolio-media-frame {
          display: block;
          width: 100% !important;
          height: auto !important;
          min-height: 0 !important;
          aspect-ratio: auto !important;
          overflow: hidden;
          background: #242529 !important;
        }

        .portfolio-bento-page .portfolio-media-frame img,
        .portfolio-bento-page .portfolio-media-frame video {
          position: static !important;
          display: block !important;
          width: 100% !important;
          height: auto !important;
          max-width: 100%;
          aspect-ratio: auto !important;
          object-fit: contain !important;
          object-position: center !important;
          transform: none !important;
          filter: none !important;
          background: #242529 !important;
        }

        .portfolio-bento-page .portfolio-media-card:hover .portfolio-media-frame img,
        .portfolio-bento-page .portfolio-media-card:hover .portfolio-media-frame video {
          transform: none !important;
          filter: none !important;
        }

        @media (max-width: 639px) {
          .portfolio-bento-page .portfolio-gallery-grid {
            columns: 2 9rem;
            column-gap: 0.38rem;
          }

          .portfolio-bento-page .portfolio-media-card,
          .portfolio-bento-page .portfolio-media-card.span-wide,
          .portfolio-bento-page .portfolio-media-card.span-tall {
            margin-bottom: 0.38rem !important;
          }
        }

        /* Colorful project-order cart */
        .reference-cart-page {
          width: min(74rem, calc(100% - 1.5rem)) !important;
          max-width: 74rem !important;
          margin: 1rem auto 7rem !important;
          padding: clamp(0.7rem, 1.6vw, 1.15rem) !important;
          border-radius: 1.4rem !important;
          background:
            linear-gradient(135deg, rgba(229,244,255,0.94), rgba(255,246,228,0.9) 52%, rgba(235,255,242,0.94)) !important;
          border: 1px solid rgba(255,255,255,0.96) !important;
          box-shadow: 0 1.4rem 4rem rgba(15,23,42,0.09) !important;
        }

        .reference-cart-page .reference-cart-panel {
          padding: 0 !important;
          background: transparent !important;
          border: 0 !important;
          box-shadow: none !important;
        }

        .reference-cart-head {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 0.8rem !important;
          padding: clamp(1.2rem, 3vw, 2rem) !important;
          overflow: hidden;
          color: #ffffff;
          border: 0 !important;
          border-radius: 1.15rem !important;
          background:
            linear-gradient(120deg, #113f31 0%, #176b4c 54%, #2050e3 140%) !important;
          box-shadow: 0 1rem 2.6rem rgba(17,63,49,0.18) !important;
        }

        .reference-cart-head::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 0.32rem;
          background: linear-gradient(90deg, #a7f3d0, #fef08a, #f9a8d4, #93c5fd);
        }

        .reference-cart-head > div,
        .reference-cart-head > button {
          position: relative;
          z-index: 1;
        }

        .reference-cart-head span {
          color: rgba(255,255,255,0.72) !important;
        }

        .reference-cart-head h2 {
          margin-top: 0.45rem;
          color: #ffffff !important;
          font-size: clamp(2rem, 4vw, 3.45rem) !important;
          line-height: 0.98 !important;
          font-weight: 520 !important;
          letter-spacing: -0.05em !important;
        }

        .reference-cart-head p {
          max-width: 43rem !important;
          margin-top: 0.65rem;
          color: rgba(255,255,255,0.7) !important;
          font-size: 0.86rem !important;
          line-height: 1.55;
        }

        .reference-cart-head > button {
          flex: 0 0 auto;
          min-height: 2.75rem;
          padding: 0 1rem !important;
          color: #113f31 !important;
          background: #ffffff !important;
          border: 1px solid rgba(255,255,255,0.9) !important;
          border-radius: 0.7rem !important;
          box-shadow: 0 0.6rem 1.4rem rgba(0,0,0,0.12) !important;
        }

        .reference-cart-order-meta {
          width: max-content;
          max-width: 100%;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin-top: 1rem;
          padding: 0.36rem;
          border-radius: 0.62rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.16);
        }

        .reference-cart-order-meta span,
        .reference-cart-order-meta strong {
          padding: 0.35rem 0.55rem;
          color: rgba(255,255,255,0.78) !important;
          font-size: 0.67rem;
          line-height: 1;
          font-weight: 720;
        }

        .reference-cart-order-meta strong {
          color: #103f31 !important;
          background: #c9f7d9;
          border-radius: 0.38rem;
        }

        .reference-cart-trust-strip {
          display: grid !important;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.62rem !important;
          margin-bottom: 0.8rem !important;
        }

        .reference-cart-trust-strip span {
          min-height: 3.15rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.48rem;
          padding: 0.65rem !important;
          color: #164e3b !important;
          border: 1px solid rgba(22,78,59,0.08) !important;
          border-radius: 0.8rem !important;
          background: #dff8e8 !important;
          box-shadow: none !important;
          font-size: 0.72rem;
          font-weight: 760;
        }

        .reference-cart-trust-strip span:nth-child(2) {
          color: #7c3d12 !important;
          background: #fff1cf !important;
        }

        .reference-cart-trust-strip span:nth-child(3) {
          color: #3146a8 !important;
          background: #e5eaff !important;
        }

        .reference-cart-trust-strip span:nth-child(4) {
          color: #8a2d58 !important;
          background: #ffe5f0 !important;
        }

        .reference-cart-steps {
          position: relative;
          display: grid !important;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.6rem !important;
          margin-bottom: 0.8rem !important;
          padding: 0.7rem !important;
          border: 1px solid rgba(20,45,38,0.08) !important;
          border-radius: 0.9rem !important;
          background: rgba(255,255,255,0.82) !important;
          box-shadow: 0 0.5rem 1.5rem rgba(15,23,42,0.04) !important;
        }

        .reference-cart-steps span {
          position: relative;
          z-index: 1;
          min-height: 2.75rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.42rem;
          color: #334155;
          background: #ffffff;
          border: 1px solid #e4e8ef;
          border-radius: 0.62rem;
          font-size: 0.71rem;
          font-weight: 760;
        }

        .reference-cart-steps span:nth-child(1) svg { color: #059669; }
        .reference-cart-steps span:nth-child(2) svg { color: #f59e0b; }
        .reference-cart-steps span:nth-child(3) svg { color: #6366f1; }
        .reference-cart-steps span:nth-child(4) svg { color: #ec4899; }

        .reference-cart-grid {
          display: grid !important;
          grid-template-columns: minmax(0, 1.12fr) minmax(19rem, 0.58fr) !important;
          align-items: start;
          gap: 0.8rem !important;
        }

        .reference-selected-list {
          display: flex;
          flex-direction: column;
          gap: 0.68rem !important;
        }

        .reference-list-head,
        .reference-service-chip,
        .reference-appointment-card,
        .reference-empty-card,
        .reference-selected-card,
        .reference-enquiry-form {
          border: 1px solid rgba(15,23,42,0.08) !important;
          border-radius: 0.85rem !important;
          background: #ffffff !important;
          box-shadow: 0 0.45rem 1.35rem rgba(15,23,42,0.045) !important;
        }

        .reference-list-head {
          padding: 0.9rem 1rem !important;
          border-left: 0.3rem solid #2050e3 !important;
        }

        .reference-list-head span {
          color: #2050e3 !important;
        }

        .reference-list-head strong {
          color: #111827;
          font-weight: 650;
        }

        .reference-list-head button,
        .reference-empty-card button,
        .reference-appointment-card button,
        .reference-selected-card button {
          color: #174fc7 !important;
          background: #edf4ff !important;
          border: 1px solid #d9e7ff !important;
          border-radius: 0.5rem !important;
        }

        .reference-service-summary {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.62rem !important;
        }

        .reference-service-chip {
          min-height: 5rem !important;
          display: grid !important;
          grid-template-columns: 2.35rem minmax(0, 1fr) 1.85rem;
          align-items: center;
          gap: 0.68rem !important;
          padding: 0.72rem !important;
          border-left: 0 !important;
          background: linear-gradient(135deg, #ffffff, #f3fbf6) !important;
        }

        .reference-service-chip > svg {
          width: 2.35rem;
          height: 2.35rem;
          padding: 0.58rem;
          color: #ffffff;
          border-radius: 0.66rem;
          background: linear-gradient(135deg, #16a36d, #2050e3);
        }

        .reference-service-chip strong {
          color: #111827;
          font-size: 0.82rem;
        }

        .reference-service-chip small {
          display: block;
          margin-top: 0.15rem;
          color: #7a8492;
          font-size: 0.67rem;
          line-height: 1.28;
        }

        .reference-service-chip > button {
          width: 1.85rem;
          height: 1.85rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #dc2626;
          background: #fff1f2;
          border: 1px solid #ffe4e6;
          border-radius: 50%;
        }

        .reference-appointment-card {
          padding: 1rem !important;
          border-left: 0.3rem solid #f59e0b !important;
          background: linear-gradient(120deg, #ffffff, #fff9e9) !important;
        }

        .reference-appointment-card > div > span {
          color: #a16207 !important;
        }

        .reference-selected-card {
          grid-template-columns: minmax(7rem, 0.34fr) minmax(0, 1fr) !important;
          padding: 0.55rem !important;
          border-left: 0 !important;
        }

        .reference-selected-card > div {
          overflow: hidden;
          border-radius: 0.62rem;
          background: #eef2f7;
        }

        .reference-selected-card img,
        .reference-selected-card video {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }

        .reference-enquiry-form {
          position: sticky;
          top: 0.75rem !important;
          gap: 0.72rem !important;
          padding: 0.9rem !important;
          overflow: hidden;
          border-top: 0.3rem solid #2050e3 !important;
          background: #ffffff !important;
        }

        .reference-order-summary {
          margin: -0.9rem -0.9rem 0;
          padding: 1rem !important;
          color: #ffffff;
          border: 0 !important;
          border-radius: 0 !important;
          background: linear-gradient(110deg, #2050e3, #7447da) !important;
          box-shadow: none !important;
        }

        .reference-order-summary span,
        .reference-order-summary strong,
        .reference-order-summary p {
          color: #ffffff !important;
        }

        .reference-order-summary p {
          opacity: 0.72;
        }

        .reference-checkout-summary {
          padding: 0.75rem !important;
          border: 1px solid #eceff4 !important;
          border-radius: 0.68rem !important;
          background: #f8fafc !important;
          box-shadow: none !important;
        }

        .reference-checkout-summary .is-total {
          margin-top: 0.35rem;
          padding-top: 0.65rem;
          color: #05734e;
          border-top: 1px dashed #cbd5e1;
        }

        .reference-checkout-summary .is-total strong::before {
          content: "₹";
        }

        .reference-form-title {
          padding: 0.8rem !important;
          background: #fff7e6 !important;
          border: 1px solid #fde7b0 !important;
          border-radius: 0.68rem !important;
        }

        .reference-form-title span {
          color: #a16207 !important;
        }

        .reference-enquiry-form label {
          color: #344054;
          font-size: 0.7rem;
          font-weight: 720;
        }

        .reference-enquiry-form input,
        .reference-enquiry-form textarea {
          margin-top: 0.3rem;
          border: 1px solid #dfe4ec !important;
          border-radius: 0.58rem !important;
          background: #ffffff !important;
          box-shadow: inset 0 1px 2px rgba(15,23,42,0.03);
        }

        .reference-enquiry-form input:focus,
        .reference-enquiry-form textarea:focus {
          border-color: #2050e3 !important;
          box-shadow: 0 0 0 3px rgba(32,80,227,0.1) !important;
          outline: none;
        }

        .reference-privacy-note {
          color: #315f4b;
          border: 1px solid #cbe9d9 !important;
          border-radius: 0.68rem !important;
          background: #eefaf3 !important;
          box-shadow: none !important;
        }

        .reference-submit-button {
          color: #ffffff !important;
          background: linear-gradient(110deg, #2050e3, #7447da) !important;
          border: 0 !important;
          border-radius: 0.62rem !important;
          box-shadow: 0 0.65rem 1.35rem rgba(32,80,227,0.18) !important;
        }

        .reference-whatsapp-button {
          color: #0b6b48 !important;
          background: #e7f8ee !important;
          border: 1px solid #c8ecd7 !important;
          border-radius: 0.62rem !important;
        }

        @media (max-width: 900px) {
          .reference-cart-grid {
            grid-template-columns: 1fr !important;
          }

          .reference-enquiry-form {
            position: relative;
            top: auto !important;
          }
        }

        @media (max-width: 639px) {
          .reference-cart-page {
            width: calc(100% - 0.65rem) !important;
            margin-top: 0.45rem !important;
            padding: 0.45rem !important;
            border-radius: 1rem !important;
          }

          .reference-cart-head {
            align-items: stretch !important;
            flex-direction: column !important;
            gap: 1rem;
            padding: 1.15rem !important;
            border-radius: 0.85rem !important;
          }

          .reference-cart-head h2 {
            font-size: 2.25rem !important;
          }

          .reference-cart-head > button {
            width: 100%;
          }

          .reference-cart-order-meta {
            width: 100%;
            align-items: stretch;
            flex-direction: column;
          }

          .reference-cart-order-meta span,
          .reference-cart-order-meta strong {
            text-align: center;
          }

          .reference-cart-trust-strip {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 0.45rem !important;
          }

          .reference-cart-trust-strip span {
            min-height: 3.5rem;
            padding: 0.55rem 0.35rem !important;
            text-align: center;
            font-size: 0.62rem;
          }

          .reference-cart-steps {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 0.42rem !important;
            padding: 0.48rem !important;
          }

          .reference-cart-steps span {
            min-height: 2.6rem;
            font-size: 0.64rem;
          }

          .reference-service-summary {
            grid-template-columns: 1fr !important;
          }

          .reference-list-head,
          .reference-appointment-card {
            align-items: flex-start !important;
            gap: 0.7rem;
          }

          .reference-selected-card {
            grid-template-columns: 5.7rem minmax(0, 1fr) !important;
          }

          .reference-submit-row {
            grid-template-columns: 1fr !important;
          }
        }

        /* Editorial Studio Heads selector */
        .studio-heads-section {
          padding: 0 !important;
          background: #111214 !important;
          border-radius: 1.2rem;
        }

        .studio-heads-shell {
          min-height: auto !important;
          padding: clamp(1rem, 2.4vw, 2rem) !important;
          overflow: hidden;
          border: 0 !important;
          border-radius: 1.2rem !important;
          background: #f8f8f6 !important;
          box-shadow: none !important;
        }

        .studio-heads-shell::before,
        .studio-heads-shell::after {
          display: none !important;
        }

        .studio-heads-editorial {
          display: grid;
          grid-template-columns: 5rem minmax(15rem, 0.82fr) minmax(18rem, 1.18fr);
          align-items: center;
          gap: clamp(1rem, 2.6vw, 2.3rem);
          min-height: 32rem;
          padding: clamp(1rem, 2vw, 1.6rem);
          border: 1px solid #e5e7eb;
          background: #ffffff;
        }

        .studio-heads-vertical-title {
          justify-self: center;
          color: #27303d;
          font-size: 1.65rem;
          line-height: 1;
          font-weight: 700;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          letter-spacing: 0;
        }

        .studio-heads-featured-portrait {
          width: 100%;
          aspect-ratio: 4 / 5.15;
          overflow: hidden;
          background: #e5e7eb;
          animation: studio-head-editorial-in 0.48s ease both;
        }

        .studio-heads-featured-portrait img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center 24%;
        }

        .studio-heads-featured-copy {
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .studio-heads-featured-copy > span {
          color: #4b5563;
          font-size: 1.2rem;
          font-weight: 760;
        }

        .studio-heads-featured-copy > small {
          margin-top: 0.95rem;
          color: #2050e3;
          font-size: 0.69rem;
          line-height: 1;
          font-weight: 760;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .studio-heads-featured-copy h2 {
          margin-top: 0.38rem;
          color: #202734;
          font-size: clamp(2.2rem, 4vw, 4.4rem);
          line-height: 0.92;
          font-weight: 520;
          letter-spacing: -0.055em;
        }

        .studio-heads-featured-copy > p {
          max-width: 28rem;
          margin-top: 1rem;
          color: #687181;
          font-size: 0.86rem;
          line-height: 1.6;
        }

        .studio-heads-selector {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 6rem));
          gap: 0.7rem;
          margin-top: 2.2rem;
        }

        .studio-heads-selector button {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          padding: 0;
          border: 2px solid transparent;
          background: #e5e7eb;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .studio-heads-selector button:hover,
        .studio-heads-selector button.is-active {
          transform: translateY(-0.18rem);
          border-color: #2050e3;
        }

        .studio-heads-selector img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center 22%;
        }

        .studio-heads-selector button span {
          position: absolute;
          left: 0.35rem;
          right: 0.35rem;
          bottom: 0.35rem;
          padding: 0.28rem;
          color: #111827;
          background: rgba(255,255,255,0.9);
          font-size: 0.55rem;
          font-weight: 760;
          text-align: center;
        }

        .studio-heads-note {
          display: flex !important;
          justify-content: center;
          gap: 0.5rem !important;
          margin-top: 0.8rem !important;
          padding: 0 !important;
          border: 0 !important;
          background: transparent !important;
        }

        .studio-heads-note span {
          padding: 0.42rem 0.68rem !important;
          color: #4b5563 !important;
          background: #ffffff !important;
          border: 1px solid #e5e7eb !important;
          border-radius: 0.35rem !important;
          font-size: 0.58rem !important;
        }

        @keyframes studio-head-editorial-in {
          from { opacity: 0; transform: translateY(0.8rem); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Simplified delivery dashboard */
        .projects-simple-page,
        .projects-simple-page * {
          font-family: inherit;
        }

        .projects-simple-page {
          max-width: 72rem !important;
        }

        .projects-simple-shell {
          padding: clamp(0.8rem, 2vw, 1.35rem);
          border: 1px solid #e4e8ee;
          border-radius: 1.15rem;
          background: #f4f6f8;
        }

        .projects-simple-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1.5rem;
          padding: clamp(1rem, 2.4vw, 1.6rem);
          border: 1px solid #e5e7eb;
          border-radius: 0.85rem;
          background: #ffffff;
        }

        .projects-simple-head > div:first-child > span,
        .projects-simple-section-head > span {
          display: inline-flex;
          align-items: center;
          gap: 0.38rem;
          color: #2050e3;
          font-size: 0.65rem;
          font-weight: 780;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .projects-simple-head h1 {
          margin-top: 0.45rem;
          color: #111827;
          font-size: clamp(2.35rem, 5vw, 4.6rem);
          line-height: 0.94;
          font-weight: 480;
          letter-spacing: -0.055em;
        }

        .projects-simple-head p {
          max-width: 34rem;
          margin-top: 0.65rem;
          color: #697386;
          font-size: 0.84rem;
          line-height: 1.55;
        }

        .projects-simple-status {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          gap: 0.25rem 0.5rem;
          min-width: 12rem;
          padding: 0.7rem 0.8rem;
          border: 1px solid #d7eadf;
          border-radius: 0.65rem;
          background: #effaf3;
        }

        .projects-simple-status i {
          grid-row: span 2;
          width: 0.55rem;
          height: 0.55rem;
          border-radius: 50%;
          background: #16a36d;
        }

        .projects-simple-status span,
        .projects-simple-status strong {
          color: #315f4b;
          font-size: 0.64rem;
          line-height: 1.15;
        }

        .projects-simple-status strong {
          font-size: 0.72rem;
        }

        .projects-simple-cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.7rem;
          margin-top: 0.7rem;
        }

        .projects-simple-card {
          min-height: 17rem;
          display: flex;
          flex-direction: column;
          padding: 1rem;
          border: 1px solid #e4e8ee;
          border-radius: 0.85rem;
          background: #ffffff;
        }

        .projects-simple-card.tone-2 { background: #f2f5ff; }
        .projects-simple-card.tone-3 { background: #fff7e8; }

        .projects-simple-card-icon {
          width: 2.65rem;
          height: 2.65rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          border-radius: 0.65rem;
          background: #133f31;
        }

        .projects-simple-card.tone-2 .projects-simple-card-icon { background: #2050e3; }
        .projects-simple-card.tone-3 .projects-simple-card-icon { background: #d97706; }

        .projects-simple-card > span {
          margin-top: 1rem;
          color: #7a8492;
          font-size: 0.6rem;
          font-weight: 760;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        .projects-simple-card h2 {
          margin-top: 0.35rem;
          color: #111827;
          font-size: 1.3rem;
          line-height: 1.08;
          font-weight: 590;
        }

        .projects-simple-card p {
          margin-top: 0.55rem;
          color: #6b7280;
          font-size: 0.75rem;
          line-height: 1.48;
        }

        .projects-simple-meta {
          display: flex;
          justify-content: space-between;
          gap: 0.5rem;
          margin-top: auto;
          padding-top: 0.9rem;
        }

        .projects-simple-meta strong,
        .projects-simple-meta small {
          color: #334155;
          font-size: 0.65rem;
          font-weight: 690;
        }

        .projects-simple-meta small { color: #7a8492; }

        .projects-simple-progress,
        .projects-simple-roadmap article > i {
          height: 0.34rem;
          display: block;
          margin-top: 0.65rem;
          overflow: hidden;
          border-radius: 999px;
          background: #e5e7eb;
        }

        .projects-simple-progress b,
        .projects-simple-roadmap article > i b {
          height: 100%;
          display: block;
          border-radius: inherit;
          background: #2050e3;
        }

        .projects-simple-lower {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(16rem, 0.65fr);
          gap: 0.7rem;
          margin-top: 0.7rem;
        }

        .projects-simple-roadmap,
        .projects-simple-next {
          padding: 1rem;
          border: 1px solid #e4e8ee;
          border-radius: 0.85rem;
          background: #ffffff;
        }

        .projects-simple-section-head h2 {
          margin-top: 0.28rem;
          color: #111827;
          font-size: 1.25rem;
          font-weight: 590;
        }

        .projects-simple-roadmap > article {
          display: grid;
          grid-template-columns: 2.25rem minmax(0, 1fr) minmax(5rem, 0.45fr);
          align-items: center;
          gap: 0.7rem;
          padding: 0.8rem 0;
          border-bottom: 1px solid #edf0f3;
        }

        .projects-simple-roadmap > article:last-child { border-bottom: 0; }

        .projects-simple-roadmap > article > div {
          width: 2.25rem;
          height: 2.25rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #2050e3;
          border-radius: 0.55rem;
          background: #edf4ff;
        }

        .projects-simple-roadmap article section strong,
        .projects-simple-roadmap article section span {
          display: block;
          color: #1f2937;
          font-size: 0.74rem;
          font-weight: 650;
        }

        .projects-simple-roadmap article section span {
          margin-top: 0.18rem;
          color: #8a94a3;
          font-size: 0.64rem;
          font-weight: 500;
        }

        .projects-simple-next > article {
          margin-top: 0.65rem;
          padding: 0.8rem;
          border-radius: 0.65rem;
          background: #f4f7ff;
        }

        .projects-simple-next > article:last-child { background: #fff6e6; }

        .projects-simple-next article span,
        .projects-simple-next article strong,
        .projects-simple-next article p {
          display: block;
        }

        .projects-simple-next article span {
          color: #2050e3;
          font-size: 0.58rem;
          font-weight: 770;
          text-transform: uppercase;
        }

        .projects-simple-next article strong {
          margin-top: 0.28rem;
          color: #111827;
          font-size: 0.82rem;
        }

        .projects-simple-next article p {
          margin-top: 0.18rem;
          color: #7a8492;
          font-size: 0.66rem;
        }

        /* Simplified Launch Cloud */
        .launch-simple-page {
          max-width: 72rem !important;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          color: #111827;
        }

        .launch-simple-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(18rem, 0.72fr);
          gap: 1rem;
          padding: clamp(1.2rem, 3vw, 2.2rem);
          border: 1px solid #dfe5ea;
          border-radius: 1rem;
          background: #f4f8f6;
        }

        .launch-simple-hero > div > span,
        .launch-simple-heading > span,
        .launch-simple-included > div:first-child > span {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: #15704f;
          font-size: 0.65rem;
          font-weight: 780;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .launch-simple-hero h1 {
          max-width: 13ch;
          margin-top: 0.6rem;
          color: #111827;
          font-size: clamp(2.6rem, 5.7vw, 5.4rem);
          line-height: 0.92;
          font-weight: 430;
          letter-spacing: -0.06em;
        }

        .launch-simple-hero > div > p {
          max-width: 34rem;
          margin-top: 1rem;
          color: #687181;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .launch-simple-hero > div > button,
        .launch-simple-plans article > button,
        .launch-simple-cta button {
          min-height: 2.75rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          margin-top: 1.2rem;
          padding: 0 1rem;
          color: #ffffff;
          border: 0;
          border-radius: 0.55rem;
          background: #111827;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .launch-simple-hero > aside {
          padding: 0.8rem;
          border: 1px solid #dbe5df;
          border-radius: 0.8rem;
          background: #ffffff;
        }

        .launch-simple-live {
          display: flex;
          align-items: center;
          gap: 0.42rem;
          padding: 0.65rem;
          color: #315f4b;
          border-radius: 0.55rem;
          background: #eefaf3;
          font-size: 0.68rem;
          font-weight: 670;
        }

        .launch-simple-live i {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background: #16a36d;
        }

        .launch-simple-live i.is-offline { background: #f97316; }
        .launch-simple-live strong { margin-left: auto; }

        .launch-simple-hero aside > article {
          display: grid;
          grid-template-columns: 2rem minmax(0, 1fr);
          gap: 0.65rem;
          padding: 0.85rem 0.25rem;
          border-bottom: 1px solid #edf0f2;
        }

        .launch-simple-hero aside > article:last-child { border-bottom: 0; }

        .launch-simple-hero aside > article > span {
          width: 2rem;
          height: 2rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          border-radius: 50%;
          background: #2050e3;
          font-size: 0.68rem;
          font-weight: 760;
        }

        .launch-simple-hero aside article strong {
          color: #111827;
          font-size: 0.8rem;
        }

        .launch-simple-hero aside article p {
          margin-top: 0.16rem;
          color: #7a8492;
          font-size: 0.66rem;
          line-height: 1.4;
        }

        .launch-simple-section {
          padding: clamp(1rem, 2.5vw, 1.5rem);
          border: 1px solid #e3e7eb;
          border-radius: 1rem;
          background: #ffffff;
        }

        .launch-simple-heading h2,
        .launch-simple-included h2,
        .launch-simple-cta h2 {
          margin-top: 0.32rem;
          color: #111827;
          font-size: clamp(1.7rem, 3.4vw, 3rem);
          line-height: 1;
          font-weight: 480;
          letter-spacing: -0.045em;
        }

        .launch-simple-heading > p {
          max-width: 38rem;
          margin-top: 0.5rem;
          color: #7a8492;
          font-size: 0.8rem;
          line-height: 1.5;
        }

        .launch-simple-guide,
        .launch-simple-plans {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.65rem;
          margin-top: 1rem;
        }

        .launch-simple-guide article,
        .launch-simple-plans article,
        .launch-simple-providers article {
          padding: 0.9rem;
          border: 1px solid #e4e8ed;
          border-radius: 0.75rem;
          background: #f8fafb;
        }

        .launch-simple-guide article > svg {
          color: #2050e3;
        }

        .launch-simple-guide article > span,
        .launch-simple-plans article > span {
          display: block;
          margin-top: 0.7rem;
          color: #2050e3;
          font-size: 0.58rem;
          font-weight: 760;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .launch-simple-guide h3,
        .launch-simple-plans h3 {
          margin-top: 0.35rem;
          color: #111827;
          font-size: 1rem;
          line-height: 1.15;
          font-weight: 590;
        }

        .launch-simple-guide p,
        .launch-simple-plans p,
        .launch-simple-providers p {
          margin-top: 0.45rem;
          color: #737d8c;
          font-size: 0.7rem;
          line-height: 1.48;
        }

        .launch-simple-plans article:nth-child(2) {
          color: #ffffff;
          border-color: #2050e3;
          background: #2050e3;
        }

        .launch-simple-plans article:nth-child(2) span,
        .launch-simple-plans article:nth-child(2) h3,
        .launch-simple-plans article:nth-child(2) p,
        .launch-simple-plans article:nth-child(2) strong,
        .launch-simple-plans article:nth-child(2) small,
        .launch-simple-plans article:nth-child(2) li {
          color: #ffffff;
        }

        .launch-simple-plans article > strong,
        .launch-simple-plans article > small {
          display: block;
        }

        .launch-simple-plans article > strong {
          margin-top: 0.8rem;
          color: #111827;
          font-size: 1.45rem;
          font-weight: 590;
        }

        .launch-simple-plans article > small {
          margin-top: 0.18rem;
          color: #8a94a3;
          font-size: 0.62rem;
        }

        .launch-simple-plans ul {
          display: grid;
          gap: 0.4rem;
          margin-top: 0.85rem;
        }

        .launch-simple-plans li {
          display: flex;
          align-items: flex-start;
          gap: 0.38rem;
          color: #4b5563;
          font-size: 0.66rem;
          line-height: 1.35;
        }

        .launch-simple-plans article > button {
          width: 100%;
          margin-top: 1rem;
          background: #111827;
        }

        .launch-simple-plans article:nth-child(2) > button {
          color: #2050e3;
          background: #ffffff;
        }

        .launch-simple-providers {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.65rem;
          margin-top: 1rem;
        }

        .launch-simple-providers article > div {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          color: #111827;
          font-size: 0.78rem;
        }

        .launch-simple-providers article > section {
          display: flex;
          flex-wrap: wrap;
          gap: 0.32rem;
          margin-top: 0.7rem;
        }

        .launch-simple-providers article > section span {
          padding: 0.3rem 0.45rem;
          color: #4b5563;
          border: 1px solid #e2e8f0;
          border-radius: 0.35rem;
          background: #ffffff;
          font-size: 0.58rem;
          font-weight: 650;
        }

        .launch-simple-included,
        .launch-simple-cta {
          display: grid;
          grid-template-columns: minmax(14rem, 0.6fr) minmax(0, 1.4fr);
          align-items: center;
          gap: 1rem;
          padding: clamp(1rem, 2.5vw, 1.5rem);
          border: 1px solid #dfe6e2;
          border-radius: 1rem;
          background: #f0f8f3;
        }

        .launch-simple-included > div:last-child {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.45rem;
        }

        .launch-simple-included > div:last-child span {
          display: flex;
          align-items: center;
          gap: 0.38rem;
          padding: 0.55rem;
          color: #315f4b;
          border-radius: 0.45rem;
          background: #ffffff;
          font-size: 0.65rem;
          font-weight: 650;
        }

        .launch-simple-cta {
          grid-template-columns: 1fr auto;
          color: #ffffff;
          border-color: #111827;
          background: #111827;
        }

        .launch-simple-cta span,
        .launch-simple-cta h2 { color: #ffffff; }
        .launch-simple-cta button { margin-top: 0; color: #111827; background: #ffffff; }

        /* Cart clarity */
        .reference-cart-page {
          background: #f4f6f8 !important;
          box-shadow: none !important;
        }

        .reference-cart-head {
          color: #111827 !important;
          border: 1px solid #e2e7ed !important;
          border-top: 0.3rem solid #2050e3 !important;
          background: #ffffff !important;
          box-shadow: none !important;
        }

        .reference-cart-head::after,
        .reference-cart-order-meta {
          display: none !important;
        }

        .reference-cart-head span { color: #2050e3 !important; }
        .reference-cart-head h2 { color: #111827 !important; }
        .reference-cart-head p { color: #6b7280 !important; }

        .reference-cart-head > button {
          color: #ffffff !important;
          background: #2050e3 !important;
          border-color: #2050e3 !important;
          box-shadow: none !important;
        }

        .reference-cart-simple-status {
          display: grid;
          grid-template-columns: auto minmax(1rem, 1fr) auto minmax(1rem, 1fr) auto;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 0.8rem;
          padding: 0.75rem 0.9rem;
          border: 1px solid #e2e7ed;
          border-radius: 0.75rem;
          background: #ffffff;
        }

        .reference-cart-simple-status span {
          display: inline-flex;
          align-items: center;
          gap: 0.38rem;
          color: #334155;
          font-size: 0.68rem;
          font-weight: 690;
          white-space: nowrap;
        }

        .reference-cart-simple-status span svg { color: #2050e3; }

        .reference-cart-simple-status i {
          height: 1px;
          background: #d7dde5;
        }

        .reference-service-summary {
          grid-template-columns: 1fr !important;
        }

        .reference-service-chip {
          min-height: 4.5rem !important;
          background: #ffffff !important;
        }

        .reference-simple-summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.75rem;
          border: 1px solid #dfe5ec;
          border-radius: 0.65rem;
          background: #f8fafc;
        }

        .reference-simple-summary > div {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          color: #475569;
          font-size: 0.68rem;
          font-weight: 650;
        }

        .reference-simple-summary strong {
          color: #08724e;
          font-size: 0.72rem;
        }

        .reference-form-title {
          background: #ffffff !important;
          border-color: #e2e7ed !important;
        }

        /* Stable status copy on every viewport. */
        .header-status-rotator span,
        .header-status-rotator span:first-child {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          transform: none !important;
          animation: header-status-react-in 0.36s ease both !important;
        }

        @keyframes header-status-react-in {
          from { opacity: 0; transform: translateY(0.35rem); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Stable portfolio feed: no scroll-linked movement or touch interception. */
        .portfolio-bento-page .portfolio-media-card,
        .portfolio-bento-page .portfolio-media-card.span-wide,
        .portfolio-bento-page .portfolio-media-card.span-tall {
          animation: none !important;
          transition: none !important;
          transform: none !important;
          content-visibility: visible !important;
          contain: none !important;
          touch-action: pan-y;
        }

        .portfolio-bento-page .portfolio-media-frame,
        .portfolio-bento-page .portfolio-media-frame img,
        .portfolio-bento-page .portfolio-media-frame video {
          touch-action: pan-y;
        }

        .portfolio-bento-page .portfolio-media-frame video {
          pointer-events: none;
        }

        @media (max-width: 900px) {
          .projects-simple-cards,
          .projects-simple-lower,
          .launch-simple-hero,
          .launch-simple-included {
            grid-template-columns: 1fr;
          }

          .launch-simple-guide,
          .launch-simple-plans {
            grid-template-columns: repeat(3, minmax(16rem, 78vw));
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 0.35rem;
          }

          .launch-simple-guide article,
          .launch-simple-plans article {
            scroll-snap-align: start;
          }
        }

        @media (max-width: 639px) {
          .studio-heads-shell {
            padding: 0.45rem !important;
          }

          .studio-heads-editorial {
            grid-template-columns: 2rem minmax(0, 0.94fr) minmax(0, 1.06fr);
            gap: 0.48rem;
            min-height: 22rem;
            padding: 0.55rem;
          }

          .studio-heads-vertical-title {
            font-size: 0.92rem;
          }

          .studio-heads-featured-copy > span {
            font-size: 0.82rem;
          }

          .studio-heads-featured-copy > small {
            margin-top: 0.45rem;
            font-size: 0.43rem;
            letter-spacing: 0.035em;
          }

          .studio-heads-featured-copy h2 {
            margin-top: 0.22rem;
            font-size: clamp(1.35rem, 8vw, 2rem);
          }

          .studio-heads-featured-copy > p {
            margin-top: 0.45rem;
            font-size: 0.54rem;
            line-height: 1.4;
          }

          .studio-heads-selector {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.3rem;
            margin-top: 0.75rem;
          }

          .studio-heads-selector button span {
            left: 0.18rem;
            right: 0.18rem;
            bottom: 0.18rem;
            padding: 0.18rem;
            font-size: 0.38rem;
          }

          .studio-heads-note {
            display: grid !important;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 0.3rem !important;
          }

          .studio-heads-note span {
            padding: 0.35rem 0.22rem !important;
            font-size: 0.4rem !important;
            text-align: center;
          }

          .projects-simple-page,
          .launch-simple-page {
            padding-top: 0.65rem !important;
          }

          .projects-simple-shell {
            padding: 0.45rem;
            border-radius: 0.85rem;
          }

          .projects-simple-head {
            align-items: stretch;
            flex-direction: column;
            padding: 0.9rem;
          }

          .projects-simple-head h1 {
            font-size: 2.45rem;
          }

          .projects-simple-status {
            min-width: 0;
          }

          .projects-simple-cards {
            grid-template-columns: 1fr;
          }

          .projects-simple-card {
            min-height: 14rem;
          }

          .projects-simple-roadmap > article {
            grid-template-columns: 2.1rem minmax(0, 1fr);
          }

          .projects-simple-roadmap > article > i {
            grid-column: 2;
            width: 100%;
            margin-top: 0;
          }

          .launch-simple-page {
            gap: 0.55rem;
          }

          .launch-simple-hero,
          .launch-simple-section,
          .launch-simple-included,
          .launch-simple-cta {
            padding: 0.9rem;
            border-radius: 0.75rem;
          }

          .launch-simple-hero h1 {
            font-size: 2.75rem;
          }

          .launch-simple-guide,
          .launch-simple-plans {
            grid-template-columns: repeat(3, minmax(15rem, 84vw));
          }

          .launch-simple-providers,
          .launch-simple-included > div:last-child {
            grid-template-columns: 1fr;
          }

          .launch-simple-cta {
            grid-template-columns: 1fr;
          }

          .launch-simple-cta button {
            width: 100%;
            margin-top: 0.7rem;
          }

          .reference-cart-simple-status {
            grid-template-columns: 1fr;
            gap: 0.38rem;
          }

          .reference-cart-simple-status span {
            min-height: 2.35rem;
            justify-content: center;
            border-radius: 0.45rem;
            background: #f8fafc;
          }

          .reference-cart-simple-status i {
            display: none;
          }

          .header-status-rotator span,
          .header-status-rotator span:first-child {
            animation: header-status-react-in 0.3s ease both !important;
          }

          .portfolio-bento-page .portfolio-gallery-grid {
            display: grid !important;
            grid-template-columns: minmax(0, 1fr) !important;
            columns: auto !important;
            gap: 0.52rem !important;
          }

          .portfolio-bento-page .portfolio-media-card,
          .portfolio-bento-page .portfolio-media-card.span-wide,
          .portfolio-bento-page .portfolio-media-card.span-tall {
            display: block !important;
            width: 100% !important;
            margin: 0 !important;
          }

          .portfolio-bento-page .portfolio-media-frame video,
          .portfolio-bento-page .portfolio-media-frame img {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
          }

          html {
            -webkit-overflow-scrolling: touch;
          }
        }

        /* July editorial leadership direction */
        .studio-heads-section {
          width: 100vw !important;
          margin-left: 50% !important;
          transform: translateX(-50%) !important;
          padding: clamp(2.6rem, 6vw, 5.5rem) clamp(1rem, 5vw, 5rem) 0 !important;
          background: #050610 !important;
          overflow: hidden;
        }

        .studio-heads-shell {
          width: min(78rem, 100%) !important;
          margin: 0 auto !important;
          padding: 0 !important;
          border: 0 !important;
          border-radius: 0 !important;
          background: transparent !important;
          box-shadow: none !important;
        }

        .studio-heads-shell::before { display: none !important; }

        .studio-heads-arch-header {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.72fr);
          align-items: start;
          gap: clamp(2rem, 7vw, 7rem);
          padding: 0 clamp(0rem, 3vw, 2rem) clamp(2.3rem, 5vw, 4.8rem);
        }

        .studio-heads-arch-header h2 {
          max-width: 12ch;
          color: #f7f4ec;
          font-family: var(--font-display);
          font-size: clamp(2.6rem, 5.6vw, 5.8rem);
          font-weight: 420;
          line-height: 0.96;
          letter-spacing: -0.055em;
        }

        .studio-heads-arch-header h2 em {
          color: #ffc83d;
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 500;
          font-style: normal;
          letter-spacing: -0.035em;
        }

        .studio-heads-arch-header p {
          max-width: 31rem;
          color: rgba(247,244,236,0.62);
          font-size: clamp(0.82rem, 1.25vw, 1rem);
          font-weight: 400;
          line-height: 1.65;
        }

        .studio-heads-arch-header button {
          min-height: 2.75rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          margin-top: 1.15rem;
          padding: 0 1rem;
          color: #f7f4ec;
          border: 1px solid rgba(255,255,255,0.34);
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          font-size: 0.72rem;
          font-weight: 600;
          transition: color 0.25s ease, background 0.25s ease, transform 0.25s ease;
        }

        .studio-heads-arch-header button:hover {
          color: #050610;
          background: #ffc83d;
          transform: translateY(-2px);
        }

        .studio-heads-arch-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: end;
          gap: clamp(0.7rem, 2vw, 1.5rem);
          padding: 0 clamp(0rem, 5vw, 5rem);
        }

        .studio-head-arch {
          position: relative;
          min-height: clamp(31rem, 54vw, 44rem);
          overflow: hidden;
          border-radius: 999px 999px 0 0;
          isolation: isolate;
          background: #efb4c9;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.38);
        }

        .studio-head-arch-2 { background: #cfd9d6; }

        .studio-head-arch::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(180deg, transparent 42%, rgba(4,5,12,0.1) 68%, rgba(4,5,12,0.78));
          pointer-events: none;
        }

        .studio-head-arch img {
          position: absolute;
          inset: auto 0 0;
          z-index: 0;
          width: 100%;
          height: 79%;
          object-fit: cover;
          object-position: center top;
          filter: grayscale(0.92) contrast(1.04);
          transform: scale(1.02);
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), filter 0.45s ease;
        }

        .studio-head-arch:hover img {
          filter: grayscale(0.2) contrast(1.02);
          transform: scale(1.055);
        }

        .studio-head-arch-copy {
          position: absolute;
          top: clamp(1.1rem, 2vw, 1.65rem);
          left: 50%;
          z-index: 2;
          width: 82%;
          text-align: center;
          transform: translateX(-50%);
        }

        .studio-head-arch-copy span,
        .studio-head-arch-copy h3,
        .studio-head-arch-copy p { display: block; }

        .studio-head-arch-copy span {
          color: rgba(5,6,16,0.52);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.16em;
        }

        .studio-head-arch-copy h3 {
          margin-top: 0.42rem;
          color: #090a13;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.6rem, 3vw, 2.7rem);
          font-weight: 500;
          line-height: 1;
          letter-spacing: -0.025em;
        }

        .studio-head-arch-copy p {
          margin-top: 0.35rem;
          color: rgba(5,6,16,0.7);
          font-size: 0.7rem;
          font-weight: 500;
        }

        .studio-head-arch > small {
          position: absolute;
          right: 1.4rem;
          bottom: 1.2rem;
          left: 1.4rem;
          z-index: 3;
          color: rgba(255,255,255,0.76);
          font-size: 0.66rem;
          line-height: 1.4;
          text-align: center;
        }

        .studio-heads-note {
          margin: 0 !important;
          padding: 1.15rem 0 1.35rem !important;
          border: 0 !important;
          background: transparent !important;
        }

        .studio-heads-note span {
          color: rgba(247,244,236,0.52) !important;
          border-color: rgba(255,255,255,0.12) !important;
          background: rgba(255,255,255,0.04) !important;
        }

        /* Delivery: mint glass with a warm signal accent */
        body:has(.projects-simple-page) {
          background: #e6f0ed;
        }

        .projects-simple-page {
          max-width: 74rem !important;
          color: #14231f;
        }

        .projects-simple-shell {
          position: relative;
          overflow: hidden;
          padding: clamp(0.75rem, 1.6vw, 1.1rem);
          border: 1px solid rgba(255,255,255,0.76);
          border-radius: 1.6rem;
          background:
            radial-gradient(circle at 7% 5%, rgba(255,199,95,0.34), transparent 17rem),
            radial-gradient(circle at 92% 8%, rgba(70,207,165,0.3), transparent 20rem),
            rgba(234,245,241,0.78);
          backdrop-filter: blur(18px) saturate(1.25);
          -webkit-backdrop-filter: blur(18px) saturate(1.25);
          box-shadow: 0 2rem 5rem rgba(31,73,60,0.12), inset 0 1px 0 rgba(255,255,255,0.9);
        }

        .projects-simple-head,
        .projects-simple-card,
        .projects-simple-roadmap,
        .projects-simple-next,
        .projects-delivery-signal {
          border: 1px solid rgba(255,255,255,0.78);
          background: rgba(255,255,255,0.56);
          backdrop-filter: blur(15px) saturate(1.2);
          -webkit-backdrop-filter: blur(15px) saturate(1.2);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.94), 0 1rem 2.4rem rgba(39,82,67,0.07);
        }

        .projects-simple-head { border-radius: 1.25rem; }

        .projects-simple-head h1 {
          color: #14231f;
          font-family: var(--font-display);
          font-weight: 430;
          letter-spacing: -0.05em;
        }

        .projects-simple-head > div:first-child > span,
        .projects-simple-section-head > span,
        .projects-delivery-signal-copy > span {
          color: #13795d;
        }

        .projects-simple-card {
          position: relative;
          border-radius: 1.1rem;
          background: rgba(255,255,255,0.58) !important;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease;
        }

        .projects-simple-card:hover {
          transform: translateY(-0.35rem);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.96), 0 1.4rem 2.8rem rgba(39,82,67,0.13);
        }

        .projects-simple-card-icon {
          color: #143d32;
          background: rgba(108,225,185,0.35) !important;
          border: 1px solid rgba(255,255,255,0.78);
          box-shadow: 0 0.8rem 1.7rem rgba(31,155,116,0.16);
          animation: delivery-icon-breathe 3.6s ease-in-out infinite;
        }

        .projects-simple-card.tone-2 .projects-simple-card-icon {
          color: #7b4b00;
          background: rgba(255,201,91,0.44) !important;
          animation-delay: -1.2s;
        }

        .projects-simple-card.tone-3 .projects-simple-card-icon {
          color: #52439b;
          background: rgba(185,171,255,0.4) !important;
          animation-delay: -2.4s;
        }

        .projects-simple-card h2,
        .projects-simple-section-head h2,
        .projects-simple-next article strong,
        .projects-simple-roadmap article section strong { color: #14231f; }

        .projects-simple-progress b,
        .projects-simple-roadmap article > i b { background: linear-gradient(90deg, #25b889, #ffbd59); }

        .projects-simple-roadmap,
        .projects-simple-next { border-radius: 1.1rem; }

        .projects-simple-next > article {
          border: 1px solid rgba(255,255,255,0.75);
          background: rgba(212,242,231,0.58);
        }

        .projects-simple-next > article:last-child { background: rgba(255,228,177,0.58); }

        .projects-delivery-signal {
          display: grid;
          grid-template-columns: 8.5rem minmax(0, 0.9fr) minmax(18rem, 1.1fr);
          align-items: center;
          gap: clamp(1rem, 3vw, 2.5rem);
          margin-top: 0.72rem;
          padding: clamp(1rem, 2.6vw, 1.7rem);
          border-radius: 1.1rem;
        }

        .projects-delivery-orbit {
          position: relative;
          width: 7.3rem;
          aspect-ratio: 1;
          display: grid;
          place-items: center;
          color: #13795d;
          border: 1px solid rgba(19,121,93,0.18);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.92), rgba(153,229,203,0.25));
        }

        .projects-delivery-orbit::before {
          content: "";
          position: absolute;
          inset: 0.8rem;
          border: 1px dashed rgba(19,121,93,0.28);
          border-radius: 50%;
          animation: delivery-orbit-spin 12s linear infinite;
        }

        .projects-delivery-orbit i {
          position: absolute;
          width: 2rem;
          height: 2rem;
          display: grid;
          place-items: center;
          color: #14231f;
          border-radius: 50%;
          background: #fff4d8;
          box-shadow: 0 0.55rem 1.2rem rgba(60,87,77,0.14);
        }

        .projects-delivery-orbit i:nth-of-type(1) { top: -0.15rem; left: 2.65rem; }
        .projects-delivery-orbit i:nth-of-type(2) { right: -0.05rem; bottom: 1rem; background: #e5dcff; }
        .projects-delivery-orbit i:nth-of-type(3) { left: -0.05rem; bottom: 1rem; background: #c9f3e4; }

        .projects-delivery-signal-copy h2 {
          margin-top: 0.35rem;
          color: #14231f;
          font-size: clamp(1.35rem, 2.4vw, 2.15rem);
          font-weight: 470;
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .projects-delivery-signal-copy p {
          margin-top: 0.65rem;
          color: #63746e;
          font-size: 0.72rem;
          line-height: 1.5;
        }

        .projects-delivery-events { display: grid; gap: 0.5rem; }

        .projects-delivery-events article {
          display: grid;
          grid-template-columns: 2rem 1fr;
          gap: 0.65rem;
          align-items: center;
          padding: 0.65rem;
          border: 1px solid rgba(255,255,255,0.78);
          border-radius: 0.75rem;
          background: rgba(255,255,255,0.48);
        }

        .projects-delivery-events article > span {
          color: #13795d;
          font-size: 0.61rem;
          font-weight: 750;
          letter-spacing: 0.1em;
        }

        .projects-delivery-events strong { display: block; color: #14231f; font-size: 0.73rem; }
        .projects-delivery-events p { margin-top: 0.1rem; color: #7b8a85; font-size: 0.61rem; }

        @keyframes delivery-icon-breathe {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-0.3rem) rotate(2deg); }
        }

        @keyframes delivery-orbit-spin { to { transform: rotate(360deg); } }

        /* Launch Cloud: lilac and coral liquid glass */
        body:has(.launch-simple-page) { background: #eeeaf4; }

        .launch-simple-page {
          max-width: 74rem !important;
          gap: 0.9rem;
          color: #211d2c;
        }

        .launch-simple-hero,
        .launch-simple-section,
        .launch-simple-included,
        .launch-simple-cta {
          border: 1px solid rgba(255,255,255,0.78);
          border-radius: 1.45rem;
          background:
            radial-gradient(circle at 92% 4%, rgba(255,153,138,0.32), transparent 17rem),
            radial-gradient(circle at 8% 92%, rgba(166,139,255,0.27), transparent 19rem),
            rgba(255,255,255,0.52);
          backdrop-filter: blur(18px) saturate(1.25);
          -webkit-backdrop-filter: blur(18px) saturate(1.25);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.96), 0 1.6rem 3.8rem rgba(82,62,113,0.09);
        }

        .launch-simple-hero h1,
        .launch-simple-heading h2,
        .launch-simple-included h2,
        .launch-simple-cta h2 {
          color: #211d2c;
          font-family: var(--font-display);
          font-weight: 430;
          letter-spacing: -0.052em;
        }

        .launch-simple-hero > div > span,
        .launch-simple-heading > span,
        .launch-simple-included > div:first-child > span { color: #7657c8; }

        .launch-simple-hero > aside {
          border-color: rgba(255,255,255,0.8);
          border-radius: 1.1rem;
          background: rgba(255,255,255,0.5);
          backdrop-filter: blur(13px);
          -webkit-backdrop-filter: blur(13px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.9);
        }

        .launch-simple-live { color: #6248aa; background: rgba(228,219,255,0.62); }

        .launch-simple-hero aside > article > span {
          color: #4a325f;
          background: linear-gradient(135deg, #ffd1c9, #cfc1ff);
          box-shadow: 0 0.65rem 1.3rem rgba(122,83,177,0.16);
        }

        .launch-simple-guide article,
        .launch-simple-plans article,
        .launch-simple-providers article {
          border-color: rgba(255,255,255,0.82);
          border-radius: 1rem;
          background: rgba(255,255,255,0.54);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.92);
          transition: transform 0.32s cubic-bezier(0.22,1,0.36,1), box-shadow 0.32s ease;
        }

        .launch-simple-guide article:hover,
        .launch-simple-plans article:hover,
        .launch-simple-providers article:hover {
          transform: translateY(-0.28rem);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.96), 0 1.2rem 2.5rem rgba(90,64,126,0.12);
        }

        .launch-simple-guide article > svg,
        .launch-simple-guide article > span,
        .launch-simple-plans article > span { color: #7657c8; }

        .launch-simple-plans article:nth-child(2) {
          border-color: rgba(255,255,255,0.42);
          background: linear-gradient(145deg, rgba(95,67,161,0.94), rgba(205,105,141,0.9));
          box-shadow: 0 1.25rem 2.8rem rgba(109,65,145,0.2), inset 0 1px 0 rgba(255,255,255,0.28);
        }

        .launch-simple-providers article > section span {
          color: #554b63;
          border-color: rgba(118,87,200,0.14);
          background: rgba(248,245,255,0.78);
        }

        .launch-simple-included > div:last-child span {
          color: #55436f;
          background: rgba(255,255,255,0.62);
        }

        .launch-simple-cta {
          color: #fff;
          border-color: rgba(255,255,255,0.18);
          background:
            radial-gradient(circle at 87% 18%, rgba(255,184,126,0.34), transparent 13rem),
            linear-gradient(135deg, #31263f, #67518b);
        }

        .launch-simple-cta span,
        .launch-simple-cta h2 { color: #fff; }

        /* Schedule: clean white and lavender journey system */
        body:has(.schedule-dashboard-v2) { background: #ececef; }

        .schedule-dashboard-v2 .schedule-hero,
        .schedule-dashboard-v2 .schedule-panel {
          border-color: rgba(255,255,255,0.82);
          background:
            radial-gradient(circle at 12% 8%, rgba(213,176,255,0.38), transparent 15rem),
            rgba(250,250,250,0.7);
          backdrop-filter: blur(16px) saturate(1.15);
          -webkit-backdrop-filter: blur(16px) saturate(1.15);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.96), 0 1.4rem 3.2rem rgba(55,52,66,0.08);
        }

        .schedule-dashboard-v2 .schedule-hero::before {
          background: radial-gradient(circle, rgba(187,129,255,0.32), transparent 66%);
          animation: none;
        }

        .schedule-dashboard-v2 .schedule-hero::after { opacity: 0.18; }

        .schedule-dashboard-v2 .schedule-kicker {
          color: #6f43a7;
          border-color: rgba(142,94,204,0.2);
          background: rgba(255,255,255,0.66);
        }

        .schedule-dashboard-v2 .schedule-date-card.is-selected {
          color: #fff;
          border-color: #8c55d5;
          background: linear-gradient(145deg, #b778ef, #7f4fc8);
          box-shadow: 0 1rem 2rem rgba(127,79,200,0.2);
        }

        .schedule-dashboard-v2 .schedule-date-card.is-selected span { color: rgba(255,255,255,0.78); }

        .schedule-dashboard-v2 .schedule-slot-card.is-selected {
          border-color: rgba(154,104,216,0.45);
          background: rgba(239,224,255,0.76);
          box-shadow: 0 1rem 2rem rgba(127,79,200,0.12);
        }

        .schedule-dashboard-v2 .schedule-time-pill {
          color: #6f43a7;
          border-color: rgba(142,94,204,0.2);
          background: rgba(237,221,255,0.62);
        }

        .schedule-dashboard-v2 .schedule-appointment-summary {
          background: linear-gradient(135deg, #1c1b20, #3c3348);
        }

        .schedule-dashboard-v2 .schedule-appointment-summary span { color: #ddb8ff; }

        .schedule-dashboard-v2 .schedule-appointment-summary .schedule-final-cart-button {
          color: #201c25;
          border-color: #ead8ff;
          background: #ead8ff;
        }

        /* Mobile portfolio keeps the desktop masonry rhythm without cropping. */
        @media (max-width: 639px) {
          .portfolio-bento-page .portfolio-gallery-grid {
            display: block !important;
            columns: 2 9.25rem !important;
            column-gap: 0.42rem !important;
          }

          .portfolio-bento-page .portfolio-media-card,
          .portfolio-bento-page .portfolio-media-card.span-wide,
          .portfolio-bento-page .portfolio-media-card.span-tall {
            display: inline-block !important;
            width: 100% !important;
            height: auto !important;
            margin: 0 0 0.42rem !important;
            break-inside: avoid !important;
          }

          .portfolio-bento-page .portfolio-media-frame,
          .portfolio-bento-page .portfolio-media-frame img,
          .portfolio-bento-page .portfolio-media-frame video {
            width: 100% !important;
            height: auto !important;
            min-height: 0 !important;
            aspect-ratio: auto !important;
            object-fit: contain !important;
          }

          .portfolio-bento-page .portfolio-post-actions {
            transform: scale(0.84) !important;
            transform-origin: top right !important;
          }
        }

        @media (max-width: 760px) {
          .studio-heads-section {
            padding: 2.4rem 0.65rem 0 !important;
          }

          .studio-heads-arch-header {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 0 0.2rem 1.8rem;
          }

          .studio-heads-arch-header h2 {
            max-width: 10ch;
            font-size: clamp(2.45rem, 12vw, 4.2rem);
          }

          .studio-heads-arch-header p { font-size: 0.76rem; }

          .studio-heads-arch-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.42rem;
            padding: 0;
          }

          .studio-head-arch {
            min-height: clamp(19rem, 92vw, 27rem);
          }

          .studio-head-arch img {
            height: 77%;
            object-position: center top;
          }

          .studio-head-arch-copy {
            top: 1.15rem;
            width: 88%;
          }

          .studio-head-arch-copy h3 { font-size: clamp(1.15rem, 6vw, 1.7rem); }
          .studio-head-arch-copy p { font-size: 0.5rem; }

          .studio-head-arch > small {
            right: 0.55rem;
            bottom: 0.65rem;
            left: 0.55rem;
            font-size: 0.48rem;
            line-height: 1.28;
          }

          .studio-heads-note {
            display: grid !important;
            grid-template-columns: repeat(3, minmax(0,1fr));
            gap: 0.3rem !important;
          }

          .studio-heads-note span {
            padding: 0.4rem 0.2rem !important;
            font-size: 0.42rem !important;
            text-align: center;
          }

          .projects-simple-shell,
          .launch-simple-hero,
          .launch-simple-section,
          .launch-simple-included,
          .launch-simple-cta,
          .schedule-dashboard-v2 .schedule-hero,
          .schedule-dashboard-v2 .schedule-panel {
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }

          .projects-simple-shell { border-radius: 1.05rem; }

          .projects-simple-card:hover,
          .launch-simple-guide article:hover,
          .launch-simple-plans article:hover,
          .launch-simple-providers article:hover { transform: none; }

          .projects-simple-card-icon { animation: none; }

          .projects-delivery-signal {
            grid-template-columns: 5.5rem minmax(0, 1fr);
            padding: 0.85rem;
          }

          .projects-delivery-orbit { width: 5rem; }
          .projects-delivery-orbit::before { animation: none; }
          .projects-delivery-orbit i { width: 1.55rem; height: 1.55rem; }
          .projects-delivery-orbit i:nth-of-type(1) { left: 1.75rem; }
          .projects-delivery-events { grid-column: 1 / -1; }

          .launch-simple-hero,
          .launch-simple-section,
          .launch-simple-included,
          .launch-simple-cta { border-radius: 1rem; }

          .schedule-dashboard-v2 .schedule-hero,
          .schedule-dashboard-v2 .schedule-panel { border-radius: 1.15rem !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .projects-simple-card-icon,
          .projects-delivery-orbit::before { animation: none !important; }
        }

        /* Editorial poster leadership system */
        .studio-heads-section {
          padding: clamp(3rem, 6vw, 5.75rem) clamp(1rem, 5vw, 5rem) clamp(2rem, 4vw, 3.5rem) !important;
          background: #050505 !important;
        }

        .studio-heads-poster-header {
          display: grid;
          grid-template-columns: minmax(7.5rem, 0.36fr) minmax(0, 1fr) minmax(15rem, 0.68fr);
          align-items: end;
          gap: clamp(1rem, 4vw, 4rem);
          margin-bottom: clamp(1.8rem, 4vw, 3.5rem);
          color: #f5f5f0;
        }

        .studio-heads-poster-header > span {
          color: rgba(255,255,255,0.54);
          font-size: 0.62rem;
          font-weight: 650;
          letter-spacing: 0;
        }

        .studio-heads-poster-header h2 {
          color: #f5f5f0;
          font-family: var(--font-display);
          font-size: clamp(2.35rem, 5.4vw, 5.4rem);
          font-weight: 420;
          line-height: 0.94;
          letter-spacing: 0;
        }

        .studio-heads-poster-header h2 em {
          color: #4e31ff;
          font-family: Georgia, "Times New Roman", serif;
          font-style: normal;
          font-weight: 500;
          letter-spacing: 0;
        }

        .studio-heads-poster-header p {
          max-width: 28rem;
          color: rgba(255,255,255,0.56);
          font-size: clamp(0.75rem, 1.1vw, 0.94rem);
          line-height: 1.55;
        }

        .studio-heads-poster-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(0.7rem, 1.65vw, 1.35rem);
          align-items: stretch;
        }

        .studio-head-poster {
          position: relative;
          display: grid;
          grid-template-rows: minmax(0, 1fr) auto;
          min-width: 0;
          aspect-ratio: 0.72;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.16);
          background: #111111;
          isolation: isolate;
        }

        .studio-head-poster-media {
          position: relative;
          min-height: 0;
          overflow: hidden;
          background: #171717;
        }

        .studio-head-poster-media::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.03), transparent 62%, rgba(0,0,0,0.2));
          pointer-events: none;
        }

        .studio-head-poster-media > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 22%;
          filter: saturate(0.72) contrast(1.03);
          transform: scale(1.015);
          transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), filter 0.45s ease;
        }

        .studio-head-poster:hover .studio-head-poster-media > img {
          filter: saturate(1) contrast(1.02);
          transform: scale(1.055);
        }

        .studio-head-poster-media > span {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          z-index: 2;
          padding: 0.34rem 0.48rem;
          color: #fff;
          background: rgba(0,0,0,0.72);
          border: 1px solid rgba(255,255,255,0.2);
          font-size: 0.52rem;
          font-weight: 700;
          letter-spacing: 0;
        }

        .studio-head-poster-copy {
          position: relative;
          z-index: 3;
          min-height: clamp(8rem, 14vw, 11rem);
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: end;
          gap: 0.8rem;
          padding: clamp(0.85rem, 2vw, 1.35rem);
          color: #fff;
          background: #4e31ff;
        }

        .studio-head-poster-copy > p {
          grid-column: 1 / -1;
          align-self: start;
          margin: 0;
          font-family: var(--font-display);
          font-size: clamp(1.7rem, 3.65vw, 3.7rem);
          font-weight: 430;
          line-height: 0.82;
          letter-spacing: 0;
        }

        .studio-head-poster-copy > div {
          display: grid;
          min-width: 0;
          gap: 0.12rem;
        }

        .studio-head-poster-copy strong {
          font-size: clamp(0.68rem, 1.1vw, 0.88rem);
          font-weight: 700;
          letter-spacing: 0;
        }

        .studio-head-poster-copy small {
          overflow: hidden;
          font-size: clamp(0.46rem, 0.72vw, 0.6rem);
          line-height: 1.2;
          opacity: 0.72;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .studio-head-poster-copy > i {
          width: 1.7rem;
          height: 1.7rem;
          border-radius: 50%;
          background: #fff;
          box-shadow: inset 0 0 0 0.42rem currentColor;
        }

        .studio-head-poster-paper .studio-head-poster-copy {
          color: #080808;
          background: #f2f1ec;
        }

        .studio-head-poster-paper .studio-head-poster-copy > i {
          color: #f2f1ec;
          background: #4e31ff;
        }

        .studio-head-poster-duo .studio-head-poster-copy {
          color: #f5f5f0;
          background: #0b0b0b;
        }

        .studio-head-poster-duo .studio-head-poster-copy > i {
          color: #0b0b0b;
          background: #fff;
        }

        .studio-head-poster-duo-media {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .studio-head-poster-duo-media > img {
          width: 100%;
          min-width: 0;
          object-position: center top;
        }

        .studio-head-poster-duo-media > img + img {
          border-left: 1px solid rgba(255,255,255,0.22);
        }

        .studio-heads-poster-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-top: clamp(1.1rem, 2.5vw, 2rem);
          color: rgba(255,255,255,0.55);
        }

        .studio-heads-poster-footer p {
          font-size: clamp(0.58rem, 0.85vw, 0.72rem);
        }

        .studio-heads-poster-footer button {
          min-height: 2.5rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.42rem;
          padding: 0 0.9rem;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.32);
          background: transparent;
          font-size: 0.58rem;
          font-weight: 700;
          transition: color 0.24s ease, background 0.24s ease;
        }

        .studio-heads-poster-footer button:hover {
          color: #050505;
          background: #fff;
        }

        /* Layered status text crossfades without line stacking. */
        .header-status-rotator {
          position: relative !important;
          isolation: isolate;
        }

        .header-status-rotator span,
        .header-status-rotator span:first-child {
          position: absolute !important;
          inset: 0 !important;
          display: flex !important;
          align-items: center;
          width: 100%;
          padding: 0 !important;
          opacity: 0 !important;
          visibility: hidden !important;
          transform: translateY(42%) scale(0.985) !important;
          animation: none !important;
          transition: opacity 0.58s ease, transform 0.58s cubic-bezier(0.22, 1, 0.36, 1), visibility 0s linear 0.58s;
          pointer-events: none;
        }

        .header-status-rotator span.is-active,
        .header-status-rotator span.is-active:first-child {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(0) scale(1) !important;
          transition-delay: 0.08s, 0.08s, 0s;
        }

        @media (max-width: 760px) {
          .studio-heads-section {
            padding: 2.8rem 0 2rem !important;
          }

          .studio-heads-poster-header {
            grid-template-columns: 1fr;
            gap: 0.7rem;
            padding: 0 1rem;
            margin-bottom: 1.45rem;
          }

          .studio-heads-poster-header h2 {
            max-width: 9ch;
            font-size: clamp(2.6rem, 13vw, 4rem);
          }

          .studio-heads-poster-header p {
            max-width: 31rem;
            font-size: 0.72rem;
          }

          .studio-heads-poster-grid {
            display: flex;
            gap: 0.62rem;
            padding: 0 1rem 0.65rem;
            overflow-x: auto;
            overscroll-behavior-inline: contain;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
          }

          .studio-heads-poster-grid::-webkit-scrollbar { display: none; }

          .studio-head-poster {
            width: min(72vw, 19rem);
            min-width: min(72vw, 19rem);
            aspect-ratio: 0.7;
            scroll-snap-align: center;
          }

          .studio-head-poster-copy {
            min-height: 7.8rem;
          }

          .studio-head-poster-copy > p {
            font-size: clamp(1.9rem, 10vw, 2.7rem);
          }

          .studio-heads-poster-footer {
            align-items: flex-start;
            margin: 0.85rem 1rem 0;
          }

          .studio-heads-poster-footer p { max-width: 48%; }

          .header-status-rotator span,
          .header-status-rotator span:first-child {
            font-size: 0.52rem !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .studio-head-poster-media > img,
          .header-status-rotator span { transition: none !important; }
        }

        /* Compact marketplace-style project cart. */
        .reference-cart-page {
          max-width: 72rem !important;
          padding-top: 1.25rem !important;
          background: #f1f3f6 !important;
        }

        .reference-cart-page .reference-cart-panel {
          padding: 0 !important;
          border: 0 !important;
          border-radius: 0 !important;
          background: transparent !important;
          box-shadow: none !important;
        }

        .reference-cart-page .reference-cart-panel::before,
        .reference-cart-page .reference-cart-panel::after {
          display: none !important;
        }

        .reference-cart-page .reference-cart-head {
          min-height: 0 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 1rem !important;
          margin-bottom: 0.6rem !important;
          padding: 0.9rem 1rem !important;
          border: 0 !important;
          border-left: 0.3rem solid #2874f0 !important;
          border-radius: 0.3rem !important;
          background: #ffffff !important;
        }

        .reference-cart-page .reference-cart-head > div {
          min-width: 0;
        }

        .reference-cart-page .reference-cart-head span {
          margin-bottom: 0.2rem !important;
          color: #2874f0 !important;
          font-size: 0.58rem !important;
        }

        .reference-cart-page .reference-cart-head h2 {
          font-size: clamp(1.25rem, 2.2vw, 1.75rem) !important;
          line-height: 1.05 !important;
        }

        .reference-cart-page .reference-cart-head p {
          max-width: 45rem !important;
          margin-top: 0.28rem !important;
          font-size: 0.68rem !important;
          line-height: 1.45 !important;
        }

        .reference-cart-page .reference-cart-head > button {
          min-width: 7.2rem !important;
          min-height: 2.35rem !important;
          padding: 0 0.8rem !important;
          border-radius: 0.25rem !important;
          color: #2874f0 !important;
          border: 1px solid #dbe4f3 !important;
          background: #ffffff !important;
          font-size: 0.62rem !important;
          box-shadow: none !important;
        }

        .reference-cart-page .reference-cart-simple-status {
          margin-bottom: 0.6rem !important;
          padding: 0.62rem 1rem !important;
          border: 0 !important;
          border-radius: 0.3rem !important;
          box-shadow: none !important;
        }

        .reference-cart-page .reference-cart-grid {
          display: grid !important;
          grid-template-columns: minmax(0, 1fr) 20rem !important;
          align-items: start !important;
          gap: 0.65rem !important;
        }

        .reference-cart-page .reference-selected-list,
        .reference-cart-page .reference-enquiry-form {
          padding: 0 !important;
          border: 0 !important;
          border-radius: 0.3rem !important;
          background: #ffffff !important;
          box-shadow: none !important;
        }

        .reference-cart-page .reference-selected-list {
          display: grid !important;
          gap: 0 !important;
        }

        .reference-cart-page .reference-list-head {
          min-height: 3.1rem !important;
          margin: 0 !important;
          padding: 0.65rem 0.9rem !important;
          border: 0 !important;
          border-bottom: 1px solid #eef0f3 !important;
          border-radius: 0 !important;
          background: #ffffff !important;
        }

        .reference-cart-page .reference-list-head span,
        .reference-cart-page .reference-appointment-card span {
          font-size: 0.52rem !important;
        }

        .reference-cart-page .reference-list-head strong,
        .reference-cart-page .reference-appointment-card strong {
          font-size: 0.74rem !important;
        }

        .reference-cart-page .reference-list-head button,
        .reference-cart-page .reference-appointment-card button {
          color: #2874f0 !important;
          border: 0 !important;
          background: transparent !important;
          font-size: 0.57rem !important;
          box-shadow: none !important;
        }

        .reference-cart-page .reference-service-summary {
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 0 !important;
          margin: 0 !important;
        }

        .reference-cart-page .reference-service-chip {
          min-height: 4rem !important;
          margin: 0 !important;
          padding: 0.65rem 0.8rem !important;
          border: 0 !important;
          border-right: 1px solid #eef0f3 !important;
          border-bottom: 1px solid #eef0f3 !important;
          border-radius: 0 !important;
          background: #ffffff !important;
          box-shadow: none !important;
        }

        .reference-cart-page .reference-service-chip > svg {
          width: 1.8rem !important;
          height: 1.8rem !important;
          padding: 0.4rem !important;
          color: #2874f0 !important;
          border-radius: 0.25rem !important;
          background: #eef4ff !important;
          box-shadow: none !important;
        }

        .reference-cart-page .reference-service-chip strong {
          font-size: 0.68rem !important;
        }

        .reference-cart-page .reference-service-chip small {
          display: block !important;
          margin-top: 0.08rem !important;
          font-size: 0.55rem !important;
          line-height: 1.25 !important;
        }

        .reference-cart-page .reference-appointment-card {
          min-height: 4.3rem !important;
          margin: 0 !important;
          padding: 0.7rem 0.9rem !important;
          border: 0 !important;
          border-bottom: 1px solid #eef0f3 !important;
          border-radius: 0 !important;
          background: #fbfcff !important;
          box-shadow: none !important;
        }

        .reference-cart-page .reference-appointment-card p {
          margin-top: 0.12rem !important;
          font-size: 0.57rem !important;
        }

        .reference-cart-page .reference-selected-card {
          display: grid !important;
          grid-template-columns: 5.2rem minmax(0, 1fr) !important;
          min-height: 6rem !important;
          margin: 0 !important;
          padding: 0.65rem 0.9rem !important;
          border: 0 !important;
          border-bottom: 1px solid #eef0f3 !important;
          border-radius: 0 !important;
          background: #ffffff !important;
          box-shadow: none !important;
        }

        .reference-cart-page .reference-selected-card > div {
          width: 5.2rem !important;
          height: 4.7rem !important;
          border-radius: 0.25rem !important;
          background: #f6f7f9 !important;
        }

        .reference-cart-page .reference-selected-card img,
        .reference-cart-page .reference-selected-card video {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain !important;
        }

        .reference-cart-page .reference-selected-card section {
          align-self: center !important;
          padding: 0 0 0 0.72rem !important;
        }

        .reference-cart-page .reference-selected-card section span,
        .reference-cart-page .reference-selected-card section p,
        .reference-cart-page .reference-selected-card section button {
          font-size: 0.55rem !important;
        }

        .reference-cart-page .reference-selected-card section strong {
          font-size: 0.72rem !important;
        }

        .reference-cart-page .reference-enquiry-form {
          position: sticky !important;
          top: 5.25rem !important;
          display: grid !important;
          gap: 0.62rem !important;
          padding: 0.9rem !important;
        }

        .reference-cart-page .reference-simple-summary,
        .reference-cart-page .reference-form-title,
        .reference-cart-page .reference-privacy-note {
          margin: 0 !important;
          padding: 0.65rem !important;
          border-radius: 0.25rem !important;
          box-shadow: none !important;
        }

        .reference-cart-page .reference-form-title strong {
          font-size: 0.82rem !important;
        }

        .reference-cart-page .reference-form-title p,
        .reference-cart-page .reference-privacy-note p,
        .reference-cart-page .reference-enquiry-form > p {
          font-size: 0.56rem !important;
          line-height: 1.4 !important;
        }

        .reference-cart-page .reference-enquiry-form label {
          gap: 0.25rem !important;
          font-size: 0.58rem !important;
        }

        .reference-cart-page .reference-enquiry-form input,
        .reference-cart-page .reference-enquiry-form textarea {
          min-height: 2.5rem !important;
          padding: 0.6rem 0.68rem !important;
          border: 1px solid #dfe3e8 !important;
          border-radius: 0.25rem !important;
          background: #ffffff !important;
          font-size: 0.68rem !important;
          box-shadow: none !important;
        }

        .reference-cart-page .reference-enquiry-form textarea {
          min-height: 5rem !important;
          resize: vertical !important;
        }

        .reference-cart-page .reference-submit-row {
          display: grid !important;
          grid-template-columns: 1fr auto !important;
          gap: 0.45rem !important;
        }

        .reference-cart-page .reference-submit-button,
        .reference-cart-page .reference-whatsapp-button {
          min-height: 2.65rem !important;
          border-radius: 0.25rem !important;
          font-size: 0.62rem !important;
          box-shadow: none !important;
        }

        .reference-cart-page .reference-submit-button {
          color: #ffffff !important;
          background: #fb641b !important;
        }

        .reference-cart-page .reference-whatsapp-button {
          color: #08724e !important;
          border: 1px solid #b9dfd1 !important;
          background: #ffffff !important;
        }

        @media (max-width: 820px) {
          .reference-cart-page {
            padding-top: 0.7rem !important;
          }

          .reference-cart-page .reference-cart-grid {
            grid-template-columns: 1fr !important;
          }

          .reference-cart-page .reference-enquiry-form {
            position: static !important;
          }
        }

        @media (max-width: 560px) {
          .reference-cart-page .reference-cart-head {
            align-items: flex-start !important;
            padding: 0.8rem !important;
          }

          .reference-cart-page .reference-cart-head p {
            max-width: 25rem !important;
            font-size: 0.61rem !important;
          }

          .reference-cart-page .reference-cart-head > button {
            min-width: auto !important;
            padding: 0 0.55rem !important;
            white-space: nowrap !important;
          }

          .reference-cart-page .reference-cart-simple-status {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 0.25rem !important;
            padding: 0.55rem !important;
          }

          .reference-cart-page .reference-cart-simple-status i {
            display: none !important;
          }

          .reference-cart-page .reference-cart-simple-status span {
            justify-content: center !important;
            font-size: 0.48rem !important;
            white-space: normal !important;
            text-align: center !important;
          }

          .reference-cart-page .reference-service-summary {
            grid-template-columns: 1fr !important;
          }

          .reference-cart-page .reference-service-chip {
            border-right: 0 !important;
          }

          .reference-cart-page .reference-submit-row {
            grid-template-columns: 1fr !important;
          }
        }

        /* Project request tracker: compact glass treatment with real form steps. */
        .reference-cart-page {
          width: min(70rem, calc(100% - 1.5rem)) !important;
          max-width: 70rem !important;
          margin: 0.75rem auto 7.5rem !important;
          padding: clamp(0.65rem, 1.4vw, 1rem) !important;
          border: 1px solid rgba(255,255,255,0.82) !important;
          border-radius: 0.75rem !important;
          background: #e9edf1 !important;
          box-shadow: 0 1.1rem 3rem rgba(24,39,57,0.11) !important;
        }

        .reference-cart-page .reference-cart-head {
          position: relative !important;
          overflow: hidden !important;
          min-height: 10.25rem !important;
          padding: clamp(1.15rem, 3vw, 2rem) !important;
          border: 1px solid rgba(255,255,255,0.96) !important;
          border-left: 0 !important;
          border-radius: 0.75rem !important;
          background: rgba(255,255,255,0.74) !important;
          box-shadow: inset 0 1px rgba(255,255,255,0.92), 0 1rem 2.3rem rgba(27,43,61,0.1) !important;
        }

        .reference-cart-page .reference-cart-head::before {
          content: "";
          position: absolute;
          width: 13rem;
          height: 13rem;
          right: -4rem;
          top: -6rem;
          border: 1px solid rgba(72,125,115,0.16);
          border-radius: 50%;
          box-shadow: 0 0 0 2.2rem rgba(255,255,255,0.2), 0 0 0 4.6rem rgba(128,183,168,0.09);
          pointer-events: none;
        }

        .reference-cart-page .reference-cart-head h2 {
          position: relative;
          z-index: 1;
          color: #15211e !important;
          font-size: clamp(1.85rem, 4vw, 3.1rem) !important;
          font-weight: 650 !important;
          letter-spacing: 0 !important;
        }

        .reference-cart-page .reference-cart-head span,
        .reference-cart-page .reference-cart-head p {
          position: relative;
          z-index: 1;
          color: #58716a !important;
        }

        .reference-cart-page .reference-cart-head span {
          font-size: 0.6rem !important;
          font-weight: 740 !important;
          letter-spacing: 0.08em !important;
          text-transform: uppercase;
        }

        .reference-cart-page .reference-cart-head p {
          max-width: 31rem !important;
          font-size: 0.72rem !important;
        }

        .reference-cart-page .reference-cart-head > button {
          position: relative;
          z-index: 1;
          min-width: 7rem !important;
          color: #146b50 !important;
          border: 1px solid rgba(27,111,81,0.22) !important;
          border-radius: 999px !important;
          background: rgba(255,255,255,0.78) !important;
          box-shadow: 0 0.35rem 1rem rgba(31,58,50,0.08) !important;
        }

        .reference-cart-page .reference-cart-simple-status {
          position: relative !important;
          display: grid !important;
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          gap: 0 !important;
          min-height: 5.35rem;
          margin: 0.68rem 0 !important;
          padding: 0.75rem 0.55rem 0.55rem !important;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.9) !important;
          border-radius: 0.75rem !important;
          background: rgba(255,255,255,0.78) !important;
          box-shadow: inset 0 1px rgba(255,255,255,0.95), 0 0.7rem 1.8rem rgba(24,39,57,0.07) !important;
        }

        .reference-cart-page .reference-progress-track {
          position: absolute;
          left: calc(16.666% + 0.25rem);
          right: calc(16.666% + 0.25rem);
          top: 1.45rem;
          height: 0.45rem;
          overflow: hidden;
          border-radius: 999px;
          background: #dfe7e4;
        }

        .reference-cart-page .reference-progress-track i {
          display: block !important;
          width: 50%;
          height: 100%;
          border-radius: inherit;
          background: #18ad76;
          box-shadow: 0 0 1rem rgba(24,173,118,0.28);
        }

        .reference-cart-page .reference-cart-simple-status span {
          position: relative;
          z-index: 1;
          display: grid !important;
          grid-template-columns: 1.75rem 1fr;
          grid-template-rows: auto auto;
          column-gap: 0.42rem;
          align-items: center;
          justify-content: center !important;
          color: #71817c !important;
          font-size: 0.62rem !important;
          font-weight: 720 !important;
          text-align: left !important;
          white-space: nowrap !important;
        }

        .reference-cart-page .reference-cart-simple-status span b {
          grid-row: span 2;
          width: 1.75rem;
          height: 1.75rem;
          display: grid;
          place-items: center;
          color: #91a49d;
          border: 1px solid #dce6e2;
          border-radius: 50%;
          background: #f6faf8;
          box-shadow: 0 0.3rem 0.7rem rgba(39,74,62,0.05);
        }

        .reference-cart-page .reference-cart-simple-status span em {
          align-self: end;
          color: #9aaba5;
          font-size: 0.48rem;
          font-style: normal;
          font-weight: 760;
        }

        .reference-cart-page .reference-cart-simple-status span.is-complete,
        .reference-cart-page .reference-cart-simple-status span.is-current {
          color: #1e302a !important;
        }

        .reference-cart-page .reference-cart-simple-status span.is-complete b,
        .reference-cart-page .reference-cart-simple-status span.is-current b {
          color: #ffffff;
          border-color: #159766;
          background: #159766;
          box-shadow: 0 0.35rem 0.9rem rgba(21,151,102,0.25);
        }

        .reference-cart-page .reference-cart-simple-status span.is-current b {
          animation: project-step-pulse 2s ease-in-out infinite;
        }

        .reference-cart-page .reference-cart-simple-status span.is-complete em,
        .reference-cart-page .reference-cart-simple-status span.is-current em {
          color: #159766;
        }

        .reference-cart-page .reference-cart-simple-status > i {
          display: none !important;
        }

        .reference-cart-page .reference-selected-list,
        .reference-cart-page .reference-enquiry-form {
          border: 1px solid rgba(255,255,255,0.92) !important;
          border-radius: 0.75rem !important;
          background: rgba(255,255,255,0.84) !important;
          box-shadow: inset 0 1px rgba(255,255,255,0.9), 0 0.7rem 1.8rem rgba(24,39,57,0.07) !important;
        }

        .reference-cart-page .reference-list-head,
        .reference-cart-page .reference-service-chip,
        .reference-cart-page .reference-appointment-card,
        .reference-cart-page .reference-selected-card {
          background: transparent !important;
        }

        .reference-cart-page .reference-enquiry-form {
          padding: 0.9rem !important;
        }

        .reference-cart-page .reference-simple-summary {
          color: #144a39 !important;
          border: 1px solid rgba(19,129,89,0.13) !important;
          background: #edfbf4 !important;
        }

        .reference-cart-page .reference-submit-button {
          color: #ffffff !important;
          background: #159766 !important;
          box-shadow: 0 0.65rem 1.35rem rgba(21,151,102,0.25) !important;
        }

        @keyframes project-step-pulse {
          0%, 100% { box-shadow: 0 0.35rem 0.9rem rgba(21,151,102,0.25); }
          50% { box-shadow: 0 0.35rem 1.2rem rgba(21,151,102,0.44), 0 0 0 0.28rem rgba(21,151,102,0.1); }
        }

        /* Shared moving glass indicator keeps tab transitions smooth on every device. */
        .mobile-tabbar {
          position: relative !important;
          isolation: isolate;
          gap: 0 !important;
          padding: 0.32rem !important;
          border-color: rgba(255,255,255,0.78) !important;
          background: rgba(242,247,250,0.9) !important;
          box-shadow: 0 0.9rem 2.4rem rgba(22,39,54,0.14), inset 0 1px rgba(255,255,255,0.95) !important;
        }

        .mobile-tabbar-active-glass {
          position: absolute;
          z-index: 0;
          top: 0.32rem;
          bottom: 0.32rem;
          left: 0.32rem;
          width: calc((100% - 0.64rem) / 6);
          border: 1px solid rgba(255,255,255,0.92);
          border-radius: 1.15rem;
          background: rgba(255,255,255,0.82);
          box-shadow: 0 0.45rem 1rem rgba(37,88,148,0.16), inset 0 1px rgba(255,255,255,1);
          transform: translate3d(var(--active-nav-offset), 0, 0);
          transition: transform 520ms cubic-bezier(0.22, 1, 0.36, 1), width 260ms ease;
          pointer-events: none;
        }

        .mobile-tabbar-item {
          z-index: 1;
          flex: 1 1 0 !important;
          width: auto !important;
          color: #8d98a8 !important;
          background: transparent !important;
          box-shadow: none !important;
          transition: color 300ms ease, transform 420ms cubic-bezier(0.22, 1, 0.36, 1) !important;
        }

        .mobile-tabbar-item[class*="bg-[#2050E3]"] {
          color: #1763d3 !important;
          background: transparent !important;
          box-shadow: none !important;
          transform: translateY(-0.06rem) scale(1.08);
        }

        .mobile-tabbar-item svg {
          filter: drop-shadow(0 1px rgba(255,255,255,0.8));
        }

        @media (min-width: 640px) {
          .mobile-tabbar {
            width: 19.2rem !important;
          }
        }

        @media (max-width: 560px) {
          .reference-cart-page .reference-cart-head {
            min-height: 0 !important;
          }

          .reference-cart-page .reference-cart-head > button {
            min-width: 5.7rem !important;
            font-size: 0.54rem !important;
          }

          .reference-cart-page .reference-cart-simple-status {
            min-height: 5.7rem;
            padding-inline: 0.25rem !important;
          }

          .reference-cart-page .reference-cart-simple-status span {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
            justify-items: center;
            gap: 0.1rem;
            font-size: 0.5rem !important;
            text-align: center !important;
          }

          .reference-cart-page .reference-cart-simple-status span b {
            grid-row: auto;
          }

          .reference-cart-page .reference-cart-simple-status span em {
            align-self: auto;
          }

          .reference-cart-page .reference-progress-track {
            left: calc(16.666% + 0.7rem);
            right: calc(16.666% + 0.7rem);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reference-cart-page .reference-cart-simple-status span.is-current b,
          .mobile-tabbar-active-glass,
          .mobile-tabbar-item { animation: none !important; transition: none !important; }
        }

        /* Reference-matched checkout hero. */
        .request-checkout-page {
          padding: clamp(0.75rem, 1.8vw, 1.25rem) !important;
          background: #dfe7ec !important;
        }

        .request-checkout-hero {
          width: min(100%, 43rem);
          margin: 0 auto 0.85rem;
          padding: clamp(1.15rem, 3vw, 2rem);
          border: 1px solid rgba(255,255,255,0.94);
          border-radius: 0.75rem;
          background: rgba(246,249,250,0.82);
          box-shadow: inset 0 1px rgba(255,255,255,1), 0 1.35rem 3rem rgba(22,41,54,0.17);
        }

        .request-checkout-heading {
          margin-bottom: 1rem;
        }

        .request-checkout-heading > span {
          display: block;
          margin-bottom: 0.3rem;
          color: #3c685c;
          font-size: 0.58rem;
          font-weight: 780;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .request-checkout-heading h2 {
          color: #0e1714;
          font-size: clamp(2rem, 5vw, 3.35rem);
          font-weight: 720;
          line-height: 0.98;
          letter-spacing: 0;
        }

        .request-goal-card {
          position: relative;
          margin-bottom: 1.2rem;
          padding: 0.95rem;
          border: 1px solid rgba(255,255,255,0.96);
          border-radius: 0.7rem;
          background: rgba(255,255,255,0.9);
          box-shadow: 0 0.8rem 1.8rem rgba(27,46,57,0.08), inset 0 1px rgba(255,255,255,1);
        }

        .request-goal-card::after {
          content: "";
          position: absolute;
          left: 2.1rem;
          bottom: -0.58rem;
          width: 1.1rem;
          height: 1.1rem;
          border-right: 1px solid rgba(255,255,255,0.95);
          border-bottom: 1px solid rgba(255,255,255,0.95);
          background: #ffffff;
          transform: rotate(45deg);
        }

        .request-goal-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.7rem;
          color: #17231f;
          font-size: 0.72rem;
          font-weight: 740;
        }

        .request-goal-content {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto 2rem;
          align-items: center;
          gap: 0.55rem;
          padding: 0.55rem;
          border-radius: 0.55rem;
          background: #f1f3f4;
        }

        .request-goal-content > span,
        .request-goal-content > strong {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 0.38rem;
          color: #78847f;
          font-size: 0.66rem;
          font-weight: 650;
        }

        .request-goal-content > span svg {
          flex: 0 0 auto;
          color: #ffffff;
          padding: 0.15rem;
          border-radius: 50%;
          background: #19a772;
        }

        .request-goal-content > strong {
          color: #243a33;
          white-space: nowrap;
        }

        .request-goal-content > button {
          width: 2rem;
          height: 2rem;
          display: grid;
          place-items: center;
          color: #1a7357;
          border: 1px solid #d7e2de;
          border-radius: 0.35rem;
          background: #ffffff;
        }

        .request-progress-shell {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          align-items: start;
          margin-top: 0.35rem;
          padding-top: 0.1rem;
        }

        .request-progress-shell::before,
        .request-progress-fill {
          content: "";
          position: absolute;
          left: 12.5%;
          right: 12.5%;
          top: 1rem;
          height: 0.58rem;
          border-radius: 999px;
        }

        .request-progress-shell::before {
          background: #dde4e1;
        }

        .request-progress-fill {
          z-index: 0;
          right: 37.5%;
          background: #1cb681;
          box-shadow: 0 0 1.25rem rgba(28,182,129,0.3);
        }

        .request-progress-shell > span {
          position: relative;
          z-index: 1;
          display: grid;
          justify-items: center;
          gap: 0.15rem;
          color: #8c9692;
          text-align: center;
        }

        .request-progress-shell > span b {
          width: 2.05rem;
          height: 2.05rem;
          display: grid;
          place-items: center;
          color: #a5afab;
          border: 1px solid #dce3e0;
          border-radius: 50%;
          background: #eef2f0;
        }

        .request-progress-shell > span em {
          color: #8e9b96;
          font-size: 0.48rem;
          font-style: normal;
          font-weight: 740;
        }

        .request-progress-shell > span strong {
          font-size: 0.63rem;
          font-weight: 680;
          white-space: nowrap;
        }

        .request-progress-shell > span.is-complete,
        .request-progress-shell > span.is-current {
          color: #13241e;
        }

        .request-progress-shell > span.is-complete b,
        .request-progress-shell > span.is-current b {
          color: #ffffff;
          border-color: #159f6d;
          background: #159f6d;
          box-shadow: 0 0.45rem 1rem rgba(21,159,109,0.24);
        }

        .request-progress-shell > span.is-current b {
          background: #28c994;
          animation: request-current-step 1.9s ease-in-out infinite;
        }

        .request-progress-shell > span.is-complete em,
        .request-progress-shell > span.is-current em {
          color: #159f6d;
        }

        .request-checkout-tip {
          width: max-content;
          max-width: 100%;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin: 1rem auto 0;
          padding: 0.5rem 0.75rem;
          color: #53635e;
          border: 1px solid rgba(69,98,88,0.1);
          border-radius: 999px;
          background: rgba(255,255,255,0.58);
          font-size: 0.58rem;
          line-height: 1.3;
        }

        .request-checkout-tip svg {
          flex: 0 0 auto;
          color: #12a66f;
        }

        .request-checkout-page .reference-cart-grid {
          grid-template-columns: minmax(0, 1fr) 20rem !important;
        }

        @keyframes request-current-step {
          0%, 100% { box-shadow: 0 0.45rem 1rem rgba(21,159,109,0.24); }
          50% { box-shadow: 0 0.55rem 1.3rem rgba(21,159,109,0.42), 0 0 0 0.28rem rgba(21,159,109,0.11); }
        }

        /* Blue liquid selection requested for the bottom navigation. */
        .mobile-tabbar {
          overflow: hidden;
          background: rgba(242,247,255,0.88) !important;
        }

        .mobile-tabbar-active-glass {
          overflow: hidden;
          border-color: rgba(255,255,255,0.7) !important;
          background: #2050e3 !important;
          box-shadow: 0 0.7rem 1.4rem rgba(32,80,227,0.3), inset 0 1px rgba(255,255,255,0.48) !important;
        }

        .mobile-tabbar-active-glass::before,
        .mobile-tabbar-active-glass::after {
          content: "";
          position: absolute;
          pointer-events: none;
        }

        .mobile-tabbar-active-glass::before {
          inset: -50% -90%;
          background: linear-gradient(108deg, transparent 36%, rgba(255,255,255,0.18) 45%, rgba(255,255,255,0.62) 50%, rgba(255,255,255,0.12) 56%, transparent 66%);
          animation: nav-liquid-sheen 2.8s ease-in-out infinite;
        }

        .mobile-tabbar-active-glass::after {
          left: 14%;
          right: 14%;
          top: 0.2rem;
          height: 0.34rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.34);
          filter: blur(0.12rem);
        }

        .mobile-tabbar-item.is-active {
          color: #ffffff !important;
          background: transparent !important;
          box-shadow: none !important;
          transform: translateY(-0.06rem) scale(1.08) !important;
        }

        .mobile-tabbar-item.is-active svg {
          filter: drop-shadow(0 0.15rem 0.26rem rgba(8,30,94,0.24));
        }

        @keyframes nav-liquid-sheen {
          0%, 18% { transform: translateX(-38%); opacity: 0; }
          35% { opacity: 1; }
          72%, 100% { transform: translateX(38%); opacity: 0; }
        }

        @media (max-width: 820px) {
          .request-checkout-page .reference-cart-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 560px) {
          .request-checkout-page {
            width: calc(100% - 0.75rem) !important;
            padding: 0.45rem !important;
          }

          .request-checkout-hero {
            padding: 1rem 0.75rem 0.9rem;
          }

          .request-checkout-heading h2 {
            font-size: clamp(1.9rem, 10vw, 2.6rem);
          }

          .request-goal-content {
            grid-template-columns: minmax(0, 1fr) 2rem;
          }

          .request-goal-content > strong {
            grid-column: 1;
            grid-row: 2;
          }

          .request-goal-content > button {
            grid-column: 2;
            grid-row: 1 / span 2;
          }

          .request-progress-shell > span strong {
            font-size: 0.51rem;
          }

          .request-checkout-tip {
            width: 100%;
            justify-content: center;
            padding-inline: 0.55rem;
            text-align: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .request-progress-shell > span.is-current b,
          .mobile-tabbar-active-glass::before { animation: none !important; }
        }

        /* Clear, professional cart typography. */
        .request-checkout-heading > span {
          font-size: 0.68rem !important;
          font-weight: 650 !important;
          letter-spacing: 0.08em !important;
        }

        .request-checkout-heading h2 {
          font-size: clamp(2.25rem, 5vw, 3.65rem) !important;
          font-weight: 620 !important;
          line-height: 1.02 !important;
        }

        .request-goal-topline {
          font-size: 0.8rem !important;
          font-weight: 650 !important;
        }

        .request-goal-content > span,
        .request-goal-content > strong {
          font-size: 0.74rem !important;
          font-weight: 580 !important;
        }

        .request-progress-shell > span em {
          font-size: 0.54rem !important;
        }

        .request-progress-shell > span strong {
          font-size: 0.7rem !important;
          font-weight: 600 !important;
        }

        .request-checkout-tip {
          font-size: 0.68rem !important;
        }

        .reference-cart-page .reference-list-head span,
        .reference-cart-page .reference-appointment-card span {
          font-size: 0.61rem !important;
          letter-spacing: 0.06em !important;
        }

        .reference-cart-page .reference-list-head strong,
        .reference-cart-page .reference-appointment-card strong,
        .reference-cart-page .reference-selected-card section strong {
          font-size: 0.86rem !important;
          font-weight: 620 !important;
        }

        .reference-cart-page .reference-selected-card section span,
        .reference-cart-page .reference-selected-card section p,
        .reference-cart-page .reference-selected-card section button {
          font-size: 0.65rem !important;
        }

        .reference-cart-page .reference-form-title strong {
          font-size: 1rem !important;
          font-weight: 620 !important;
        }

        .reference-cart-page .reference-form-title p,
        .reference-cart-page .reference-privacy-note p,
        .reference-cart-page .reference-enquiry-form > p {
          font-size: 0.67rem !important;
          line-height: 1.5 !important;
        }

        .reference-cart-page .reference-enquiry-form label {
          font-size: 0.68rem !important;
          font-weight: 600 !important;
        }

        .reference-cart-page .reference-enquiry-form input,
        .reference-cart-page .reference-enquiry-form textarea {
          font-size: 0.8rem !important;
        }

        .reference-cart-page .reference-submit-button,
        .reference-cart-page .reference-whatsapp-button {
          font-size: 0.72rem !important;
          font-weight: 620 !important;
        }

        @media (max-width: 560px) {
          .request-checkout-heading h2 {
            font-size: clamp(2rem, 10vw, 2.7rem) !important;
          }

          .request-progress-shell > span strong {
            font-size: 0.58rem !important;
          }
        }

        /* Studio Heads — dev.io-inspired editorial portrait stage */
        .studio-heads-section {
          padding: clamp(1rem, 2.2vw, 1.75rem) !important;
          background: #e9e9e7 !important;
        }

        .studio-heads-section .studio-heads-shell {
          width: min(100%, 92rem);
          margin: 0 auto;
          padding: clamp(1rem, 2.4vw, 2.2rem) clamp(1rem, 3.2vw, 3.2rem) 0 !important;
          overflow: hidden !important;
          border: 0 !important;
          border-radius: clamp(1rem, 2vw, 1.8rem) !important;
          color: #f8f8f4;
          background: #050505 !important;
          box-shadow: 0 1.8rem 5rem rgba(0, 0, 0, 0.14) !important;
        }

        .studio-heads-utility {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-bottom: clamp(1.6rem, 3vw, 2.7rem);
          color: rgba(255, 255, 255, 0.68);
          font-size: 0.57rem;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .studio-heads-section .studio-heads-poster-header {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(16rem, 0.8fr);
          align-items: end;
          gap: clamp(2rem, 7vw, 7.5rem);
          margin: 0 0 clamp(2rem, 4vw, 3.8rem) !important;
          color: #f8f8f4;
        }

        .studio-heads-poster-header > div:first-child > span {
          display: block;
          margin-bottom: 0.75rem;
          color: rgba(255, 255, 255, 0.64);
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .studio-heads-section .studio-heads-poster-header h2 {
          max-width: 11ch;
          margin: 0;
          color: #f8f8f4;
          font-family: var(--font-display);
          font-size: clamp(3.25rem, 7.5vw, 7.7rem);
          font-weight: 510;
          line-height: 0.82;
          letter-spacing: -0.055em;
        }

        .studio-heads-section .studio-heads-poster-header h2 em {
          color: #f8f8f4;
          font-family: inherit;
          font-style: normal;
          font-weight: inherit;
        }

        .studio-heads-poster-intro {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-bottom: 0.25rem;
        }

        .studio-heads-section .studio-heads-poster-intro p {
          max-width: 28rem;
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          font-size: clamp(0.74rem, 1vw, 0.92rem);
          line-height: 1.65;
        }

        .studio-heads-poster-intro button {
          min-height: 2.65rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.42rem;
          margin-top: 1rem;
          padding: 0 1.1rem;
          color: #060606;
          border: 0;
          border-radius: 999px;
          background: #f8f8f4;
          font-size: 0.59rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          transition: transform 0.22s ease, background 0.22s ease;
        }

        .studio-heads-poster-intro button:hover {
          transform: translateY(-0.16rem);
          background: #ffc82f;
        }

        .studio-heads-section .studio-heads-poster-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: end;
          gap: clamp(0.85rem, 2vw, 1.7rem);
          max-width: 64rem;
          margin: 0 auto;
          padding: 0;
          overflow: visible;
        }

        .studio-heads-section .studio-head-poster {
          width: 100%;
          min-width: 0;
          aspect-ratio: 0.77;
          display: block;
          overflow: hidden;
          border: 0;
          border-radius: 48% 48% 0 0 / 24% 24% 0 0;
          background: #ff9fc5;
          isolation: isolate;
          scroll-snap-align: none;
        }

        .studio-heads-section .studio-head-poster-xandra {
          background: #f0eadf;
        }

        .studio-heads-section .studio-head-poster-media {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: transparent;
        }

        .studio-heads-section .studio-head-poster-media::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(180deg, rgba(255,255,255,0.08), transparent 28%, rgba(0,0,0,0.09));
          pointer-events: none;
        }

        .studio-heads-section .studio-head-poster-media::after {
          display: none;
        }

        .studio-heads-section .studio-head-poster-media > img {
          position: absolute;
          inset: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center 24%;
          filter: grayscale(1) contrast(1.1) brightness(1.04);
          mix-blend-mode: normal;
          image-rendering: auto;
          transform: scale(1.005);
          transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .studio-heads-section .studio-head-poster-jibin .studio-head-poster-media > img {
          object-position: 54% 17%;
        }

        .studio-heads-section .studio-head-poster-xandra .studio-head-poster-media > img {
          object-position: 47% 16%;
        }

        .studio-heads-section .studio-head-poster:hover .studio-head-poster-media > img {
          filter: grayscale(1) contrast(1.1) brightness(1.04);
          transform: scale(1.035);
        }

        .studio-head-poster-label {
          position: absolute;
          top: clamp(1.6rem, 4vw, 3.4rem);
          left: 50%;
          z-index: 4;
          display: grid;
          gap: 0.2rem;
          color: #080808;
          text-align: center;
          transform: translateX(-50%);
        }

        .studio-head-poster-label strong {
          font-size: clamp(0.68rem, 1vw, 0.86rem);
          line-height: 1;
          font-weight: 850;
          letter-spacing: 0.04em;
        }

        .studio-head-poster-label small {
          min-width: max-content;
          font-size: clamp(0.48rem, 0.65vw, 0.58rem);
          line-height: 1.2;
          font-weight: 650;
        }

        .studio-heads-section .studio-head-poster-media > span {
          top: auto;
          right: 0.8rem;
          bottom: 0.8rem;
          left: auto;
          z-index: 4;
          padding: 0;
          color: rgba(0,0,0,0.5);
          border: 0;
          background: transparent;
          font-size: 0.6rem;
          font-weight: 800;
        }

        .studio-heads-section .studio-heads-poster-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin: 0 !important;
          padding: 1rem 0 1.1rem;
          color: rgba(255,255,255,0.48);
          border-top: 1px solid rgba(255,255,255,0.16);
        }

        .studio-heads-section .studio-heads-poster-footer p,
        .studio-heads-section .studio-heads-poster-footer span {
          max-width: none;
          margin: 0;
          font-size: 0.52rem;
          font-weight: 700;
          letter-spacing: 0.07em;
        }

        @media (max-width: 760px) {
          .studio-heads-section {
            padding: 0.7rem !important;
          }

          .studio-heads-section .studio-heads-shell {
            padding: 1rem 0.85rem 0 !important;
            border-radius: 1.15rem !important;
          }

          .studio-heads-utility {
            padding-bottom: 1.8rem;
            font-size: 0.47rem;
          }

          .studio-heads-utility span:nth-child(2) {
            display: none;
          }

          .studio-heads-section .studio-heads-poster-header {
            grid-template-columns: 1fr;
            gap: 1.15rem;
            margin-bottom: 1.5rem !important;
            padding: 0;
          }

          .studio-heads-section .studio-heads-poster-header h2 {
            max-width: 9ch;
            font-size: clamp(3rem, 15.5vw, 5.25rem);
            line-height: 0.84;
          }

          .studio-heads-section .studio-heads-poster-intro p {
            max-width: 30rem;
            font-size: 0.72rem;
          }

          .studio-heads-poster-intro button {
            min-height: 2.45rem;
            margin-top: 0.85rem;
            padding: 0 0.95rem;
          }

          .studio-heads-section .studio-heads-poster-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0.75rem;
            padding: 0;
            overflow: visible;
          }

          .studio-heads-section .studio-head-poster {
            width: 100%;
            min-width: 0;
            aspect-ratio: 0.83;
            border-radius: 48% 48% 0.9rem 0.9rem / 26% 26% 0.9rem 0.9rem;
          }

          .studio-heads-section .studio-head-poster-media > img {
            width: 100%;
            height: 100%;
            transform: none;
          }

          .studio-heads-section .studio-head-poster-jibin .studio-head-poster-media > img {
            object-position: 52% 17%;
          }

          .studio-heads-section .studio-head-poster-xandra .studio-head-poster-media > img {
            object-position: 47% 14%;
          }

          .studio-heads-section .studio-head-poster:hover .studio-head-poster-media > img {
            transform: none;
          }

          .studio-head-poster-label {
            top: 1.8rem;
          }

          .studio-heads-section .studio-heads-poster-footer {
            align-items: flex-start;
            padding: 0.9rem 0;
          }

          .studio-heads-section .studio-heads-poster-footer p {
            max-width: 64%;
            line-height: 1.5;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .studio-heads-section .studio-head-poster-media > img,
          .studio-heads-poster-intro button {
            transition: none !important;
          }
        }

        /* Studio Heads — OnProfit-inspired capsule composition */
        .studio-heads-section {
          padding: clamp(0.75rem, 2vw, 1.5rem) !important;
          background: #e8ebe8 !important;
        }

        .studio-heads-section .studio-heads-shell {
          min-height: clamp(43rem, 74vw, 57rem);
          display: flex;
          flex-direction: column;
          padding: clamp(1.2rem, 3vw, 2.7rem) !important;
          border-radius: clamp(1rem, 2vw, 1.8rem) !important;
          color: #eafff5;
          background:
            radial-gradient(circle at 50% 52%, rgba(34, 245, 154, 0.055), transparent 31%),
            #00130d !important;
          box-shadow: 0 2rem 5rem rgba(0, 25, 16, 0.18) !important;
        }

        .studio-heads-profit-heading {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: start;
          gap: 0.7rem 2rem;
        }

        .studio-heads-profit-heading > span {
          grid-column: 1 / -1;
          color: #65d9a6;
          font-size: 0.58rem;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .studio-heads-profit-heading h2 {
          max-width: 9ch;
          margin: 0;
          color: #f4fff9;
          font-family: var(--font-display);
          font-size: clamp(2.3rem, 5vw, 5.25rem);
          font-weight: 520;
          line-height: 0.86;
          letter-spacing: -0.055em;
        }

        .studio-heads-profit-heading p {
          max-width: 20rem;
          margin: 0;
          color: rgba(224, 255, 241, 0.58);
          font-size: clamp(0.68rem, 0.9vw, 0.82rem);
          line-height: 1.6;
          text-align: right;
        }

        .studio-heads-profit-board {
          width: min(100%, 48rem);
          display: grid;
          gap: clamp(0.7rem, 1.5vw, 1.05rem);
          margin: auto;
          padding: clamp(2rem, 5vw, 4rem) 0;
        }

        .studio-heads-profit-row {
          display: grid;
          align-items: center;
          gap: clamp(0.65rem, 1.5vw, 1rem);
        }

        .studio-heads-profit-row-top {
          grid-template-columns: minmax(0, 1.45fr) minmax(13rem, 0.72fr);
        }

        .studio-heads-profit-row-middle {
          grid-template-columns: minmax(13rem, 0.76fr) minmax(0, 1.42fr);
        }

        .studio-heads-profit-row-bottom {
          grid-template-columns: 4.7rem minmax(14rem, 1fr) minmax(15rem, 1.1fr);
        }

        .studio-heads-copy-pill,
        .studio-heads-highlight-pill,
        .studio-heads-skill-pill,
        .studio-heads-person-pill,
        .studio-heads-brand-pill {
          position: relative;
          overflow: hidden;
          border-radius: 999px;
        }

        .studio-heads-copy-pill {
          min-height: clamp(5.3rem, 8vw, 6.6rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0.8rem 1.5rem;
          color: #eafff5;
          background: #0a5445;
          text-align: center;
        }

        .studio-heads-copy-pill span,
        .studio-heads-copy-pill strong {
          font-size: clamp(1rem, 2vw, 1.4rem);
          line-height: 1.05;
          font-weight: 470;
          letter-spacing: -0.025em;
        }

        .studio-heads-copy-pill strong {
          color: #48f29f;
          font-weight: 700;
        }

        .studio-heads-person-pill {
          min-height: clamp(5.3rem, 8vw, 6.6rem);
          display: flex;
          align-items: center;
          color: #002117;
          background: #36f49b;
          isolation: isolate;
        }

        .studio-heads-person-pill > div {
          position: relative;
          z-index: 3;
          display: grid;
          gap: 0.2rem;
        }

        .studio-heads-person-pill strong {
          font-size: clamp(0.68rem, 1vw, 0.86rem);
          line-height: 1;
          font-weight: 850;
          letter-spacing: 0.04em;
        }

        .studio-heads-person-pill small {
          max-width: 10rem;
          font-size: clamp(0.45rem, 0.65vw, 0.56rem);
          line-height: 1.25;
          font-weight: 680;
        }

        .studio-heads-person-pill img {
          position: absolute;
          z-index: 2;
          display: block;
          object-fit: cover;
          image-rendering: auto;
          filter: contrast(1.04) saturate(0.92);
        }

        .studio-heads-person-pill.is-xandra {
          justify-content: flex-start;
          padding: 0 47% 0 1.2rem;
        }

        .studio-heads-person-pill.is-xandra img {
          width: 52%;
          height: 114%;
          right: 0;
          bottom: -8%;
          border-radius: 999px;
          object-position: 48% 17%;
        }

        .studio-heads-highlight-pill {
          min-height: clamp(4.7rem, 7vw, 5.8rem);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.8rem 1.2rem;
          color: #002117;
          background: #71d7a4;
          font-size: clamp(0.84rem, 1.4vw, 1.1rem);
          line-height: 1.05;
          font-weight: 830;
          text-align: center;
          letter-spacing: -0.02em;
        }

        .studio-heads-skill-pill {
          min-height: clamp(4.7rem, 7vw, 5.8rem);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.48rem, 1.4vw, 0.9rem);
          padding: 0.8rem 1.4rem;
          color: #157e58;
          background: #ddf5e4;
        }

        .studio-heads-skill-pill span {
          font-size: clamp(0.5rem, 0.75vw, 0.63rem);
          font-weight: 850;
          letter-spacing: 0.05em;
        }

        .studio-heads-skill-pill i {
          width: 0.26rem;
          height: 0.26rem;
          border-radius: 50%;
          background: #6ecf9e;
        }

        .studio-heads-leaf-mark {
          width: 4.7rem;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a7f7d0;
          border-radius: 50%;
          background: #0a5445;
          font-size: 1rem;
          font-weight: 900;
          letter-spacing: -0.08em;
        }

        .studio-heads-person-pill.is-jibin {
          min-height: clamp(4.8rem, 7.2vw, 5.9rem);
          justify-content: flex-end;
          padding: 0 1.1rem 0 53%;
        }

        .studio-heads-person-pill.is-jibin img {
          width: 56%;
          height: 126%;
          left: 0;
          bottom: -18%;
          border-radius: 999px;
          object-position: 55% 17%;
        }

        .studio-heads-brand-pill {
          min-height: clamp(4.8rem, 7.2vw, 5.9rem);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          padding: 0 1.35rem;
          color: #f6fff9;
          border: 2px solid #68e7ad;
          background: transparent;
          font-family: var(--font-display);
          font-size: clamp(0.83rem, 1.5vw, 1.2rem);
          font-weight: 720;
          letter-spacing: -0.02em;
          transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }

        .studio-heads-brand-pill:hover {
          color: #002117;
          background: #68e7ad;
          transform: translateY(-0.14rem);
        }

        .studio-heads-profit-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 1rem;
          color: rgba(205, 255, 231, 0.43);
          border-top: 1px solid rgba(110, 228, 173, 0.17);
        }

        .studio-heads-profit-footer span,
        .studio-heads-profit-footer p {
          margin: 0;
          font-size: 0.49rem;
          line-height: 1.3;
          font-weight: 750;
          letter-spacing: 0.08em;
        }

        @media (max-width: 760px) {
          .studio-heads-section {
            padding: 0.55rem !important;
          }

          .studio-heads-section .studio-heads-shell {
            min-height: calc(100svh - 1.1rem);
            padding: 1.05rem 0.85rem !important;
            border-radius: 1rem !important;
          }

          .studio-heads-profit-heading {
            grid-template-columns: 1fr;
            gap: 0.55rem;
          }

          .studio-heads-profit-heading > span {
            font-size: 0.48rem;
          }

          .studio-heads-profit-heading h2 {
            max-width: 10ch;
            font-size: clamp(2.1rem, 10.5vw, 3.4rem);
          }

          .studio-heads-profit-heading p {
            max-width: 22rem;
            font-size: 0.62rem;
            text-align: left;
          }

          .studio-heads-profit-board {
            gap: 0.55rem;
            padding: 2rem 0;
          }

          .studio-heads-profit-row {
            gap: 0.5rem;
          }

          .studio-heads-profit-row-top {
            grid-template-columns: minmax(0, 1.38fr) minmax(7.5rem, 0.7fr);
          }

          .studio-heads-profit-row-middle {
            grid-template-columns: minmax(7.6rem, 0.8fr) minmax(0, 1.45fr);
          }

          .studio-heads-profit-row-bottom {
            grid-template-columns: 3.45rem minmax(7.8rem, 0.9fr) minmax(8.7rem, 1fr);
          }

          .studio-heads-copy-pill,
          .studio-heads-person-pill {
            min-height: 4.65rem;
          }

          .studio-heads-highlight-pill,
          .studio-heads-skill-pill,
          .studio-heads-person-pill.is-jibin,
          .studio-heads-brand-pill {
            min-height: 4.1rem;
          }

          .studio-heads-copy-pill {
            padding: 0.6rem 0.75rem;
          }

          .studio-heads-copy-pill span,
          .studio-heads-copy-pill strong {
            font-size: clamp(0.72rem, 3vw, 0.92rem);
          }

          .studio-heads-person-pill.is-xandra {
            padding: 0 48% 0 0.72rem;
          }

          .studio-heads-person-pill.is-jibin {
            padding: 0 0.6rem 0 55%;
          }

          .studio-heads-person-pill strong {
            font-size: 0.56rem;
          }

          .studio-heads-person-pill small {
            font-size: 0.39rem;
          }

          .studio-heads-highlight-pill {
            padding: 0.55rem 0.7rem;
            font-size: clamp(0.58rem, 2.4vw, 0.74rem);
          }

          .studio-heads-skill-pill {
            gap: 0.34rem;
            padding: 0.55rem 0.7rem;
          }

          .studio-heads-skill-pill span {
            font-size: clamp(0.36rem, 1.55vw, 0.46rem);
          }

          .studio-heads-leaf-mark {
            width: 3.45rem;
            font-size: 0.76rem;
          }

          .studio-heads-brand-pill {
            gap: 0.25rem;
            padding: 0 0.55rem;
            border-width: 1.5px;
            font-size: clamp(0.54rem, 2.1vw, 0.7rem);
          }

          .studio-heads-brand-pill svg {
            width: 0.72rem;
            height: 0.72rem;
          }

          .studio-heads-profit-footer {
            gap: 0.55rem;
            padding-top: 0.75rem;
          }

          .studio-heads-profit-footer span,
          .studio-heads-profit-footer p {
            font-size: 0.39rem;
          }

          .studio-heads-profit-footer p {
            text-align: center;
          }
        }

        @media (max-width: 390px) {
          .studio-heads-profit-row-bottom {
            grid-template-columns: 3.25rem minmax(7.2rem, 0.9fr) minmax(7.7rem, 1fr);
          }

          .studio-heads-leaf-mark {
            width: 3.25rem;
          }

          .studio-heads-person-pill strong {
            font-size: 0.51rem;
          }

          .studio-heads-person-pill small {
            font-size: 0.35rem;
          }
        }

        /* Studio Heads — indigo editorial leadership gallery */
        .studio-heads-section {
          padding: clamp(0.65rem, 1.8vw, 1.4rem) !important;
          background: #e9e9ee !important;
        }

        .studio-heads-section .studio-heads-shell {
          min-height: clamp(43rem, 66vw, 54rem);
          display: flex;
          flex-direction: column;
          padding: clamp(1.25rem, 3vw, 2.8rem) clamp(1rem, 4vw, 4rem) clamp(1.1rem, 2vw, 1.8rem) !important;
          overflow: hidden !important;
          border: 0 !important;
          border-radius: clamp(1rem, 2vw, 1.75rem) !important;
          color: #f5f5ff;
          background:
            radial-gradient(circle at 50% 33%, rgba(55, 56, 255, 0.18), transparent 29%),
            linear-gradient(180deg, #050426 0%, #02021a 100%) !important;
          box-shadow: 0 2rem 5rem rgba(8, 8, 54, 0.2) !important;
        }

        .studio-heads-indigo-heading {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .studio-heads-indigo-heading::before {
          content: "";
          position: absolute;
          top: -1rem;
          width: clamp(15rem, 38vw, 29rem);
          aspect-ratio: 1;
          z-index: -1;
          border: 1px solid rgba(130, 131, 255, 0.12);
          border-radius: 50%;
          pointer-events: none;
        }

        .studio-heads-indigo-heading > span {
          margin-bottom: 1rem;
          color: #7f80e9;
          font-size: 0.56rem;
          line-height: 1;
          font-weight: 780;
          letter-spacing: 0.11em;
        }

        .studio-heads-indigo-heading h2 {
          margin: 0;
          color: #f7f7ff;
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5.5vw, 5.5rem);
          line-height: 0.9;
          font-weight: 440;
          letter-spacing: -0.055em;
        }

        .studio-heads-indigo-heading p {
          margin: 0.35rem 0 0;
          color: #8182e7;
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3.8vw, 3.8rem);
          line-height: 0.92;
          font-style: normal;
          font-weight: 330;
          letter-spacing: -0.055em;
        }

        .studio-heads-indigo-stage {
          position: relative;
          z-index: 4;
          width: min(100%, 70rem);
          display: block;
          margin: auto;
          padding: clamp(3rem, 6vw, 5.6rem) 0 clamp(1.5rem, 3vw, 2.5rem);
        }

        .studio-heads-indigo-track {
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.03fr) minmax(0, 0.9fr);
          align-items: end;
          gap: clamp(0.75rem, 1.8vw, 1.35rem);
        }

        .studio-heads-indigo-card {
          position: relative;
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgba(142, 143, 255, 0.16);
          border-radius: 0.9rem;
          background: #0a0946;
          box-shadow: 0 1.3rem 3rem rgba(0, 0, 20, 0.28);
          isolation: isolate;
        }

        .studio-heads-indigo-card-person {
          aspect-ratio: 0.72;
        }

        .studio-heads-indigo-card-person::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          background:
            linear-gradient(180deg, rgba(5, 4, 38, 0.04) 38%, rgba(3, 3, 28, 0.88) 100%),
            linear-gradient(135deg, rgba(44, 42, 255, 0.08), rgba(0, 0, 36, 0.06));
          pointer-events: none;
        }

        .studio-heads-indigo-card-person::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 3;
          opacity: 0.24;
          background-image:
            linear-gradient(rgba(133, 134, 255, 0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(133, 134, 255, 0.09) 1px, transparent 1px);
          background-size: 2.4rem 2.4rem;
          mask-image: linear-gradient(180deg, transparent 0%, #000 52%, #000 100%);
          pointer-events: none;
        }

        .studio-heads-indigo-image {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, #181784 0%, #070632 100%);
        }

        .studio-heads-indigo-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          image-rendering: auto;
          filter: contrast(1.03) saturate(1.02) brightness(1.025);
          backface-visibility: hidden;
          transform: translateZ(0);
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), filter 0.35s ease;
        }

        .studio-heads-indigo-card-person.is-jibin .studio-heads-indigo-image img {
          object-position: 55% 18%;
        }

        .studio-heads-indigo-card-person.is-xandra .studio-heads-indigo-image img {
          object-position: 47% 15%;
        }

        .studio-heads-indigo-card-person:hover .studio-heads-indigo-image img {
          filter: contrast(1.04) saturate(1.06) brightness(1.03);
          transform: scale(1.05);
        }

        .studio-heads-indigo-person-copy {
          position: absolute;
          right: 1rem;
          bottom: 1rem;
          left: 1rem;
          z-index: 5;
          display: grid;
          gap: 0.15rem;
          color: #ffffff;
        }

        .studio-heads-indigo-person-copy strong {
          font-size: clamp(0.9rem, 1.5vw, 1.2rem);
          line-height: 1;
          font-weight: 570;
          letter-spacing: -0.03em;
        }

        .studio-heads-indigo-person-copy small {
          color: #8f90ef;
          font-size: clamp(0.48rem, 0.66vw, 0.59rem);
          font-weight: 650;
        }

        .studio-heads-indigo-card-note {
          aspect-ratio: 0.72;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(1rem, 2vw, 1.5rem);
          color: #f5f5ff;
          border-color: rgba(148, 149, 255, 0.34);
          background:
            radial-gradient(circle at 90% 5%, rgba(126, 124, 255, 0.44), transparent 31%),
            linear-gradient(150deg, #342de0 0%, #171177 62%, #0c093e 100%);
          transform: translateY(-1.3rem);
        }

        .studio-heads-indigo-grid {
          position: absolute;
          inset: 0;
          opacity: 0.3;
          background-image:
            linear-gradient(rgba(255,255,255,0.11) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.11) 1px, transparent 1px);
          background-size: 2.25rem 2.25rem;
          pointer-events: none;
        }

        .studio-heads-indigo-card-note > div:not(.studio-heads-indigo-grid),
        .studio-heads-indigo-card-note footer {
          position: relative;
          z-index: 2;
        }

        .studio-heads-indigo-card-note > div > span {
          display: block;
          color: #c3c3ff;
          font-size: 0.5rem;
          line-height: 1.25;
          font-weight: 800;
          letter-spacing: 0.09em;
        }

        .studio-heads-indigo-card-note h3 {
          max-width: 11ch;
          margin: 0.65rem 0 0;
          font-family: var(--font-display);
          font-size: clamp(1.45rem, 2.8vw, 2.8rem);
          line-height: 0.92;
          font-weight: 500;
          letter-spacing: -0.05em;
        }

        .studio-heads-indigo-card-note p {
          max-width: 28rem;
          margin: clamp(2.3rem, 6vw, 6rem) 0 0;
          color: rgba(240, 240, 255, 0.72);
          font-size: clamp(0.58rem, 0.82vw, 0.71rem);
          line-height: 1.55;
        }

        .studio-heads-indigo-card-note footer {
          display: flex;
          flex-wrap: wrap;
          gap: 0.38rem;
        }

        .studio-heads-indigo-card-note footer span {
          padding: 0.34rem 0.5rem;
          color: #ddddff;
          border: 1px solid rgba(232, 232, 255, 0.28);
          border-radius: 999px;
          font-size: 0.44rem;
          font-weight: 750;
          letter-spacing: 0.06em;
        }

        .studio-heads-indigo-control {
          position: absolute;
          top: 52%;
          z-index: 7;
          width: 2.35rem;
          height: 2.35rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b9b9ff;
          border: 1px solid rgba(151, 152, 255, 0.26);
          border-radius: 50%;
          background: rgba(8, 7, 53, 0.76);
          font-family: Arial, sans-serif;
          font-size: 1.2rem;
          line-height: 1;
          cursor: pointer;
          transform: translateY(-50%);
        }

        .studio-heads-indigo-control-left { left: -3.3rem; }
        .studio-heads-indigo-control-right { right: -3.3rem; }

        .studio-heads-indigo-footer {
          display: grid;
          grid-template-columns: auto minmax(6rem, 16rem) auto 1fr;
          align-items: center;
          gap: 0.7rem;
          color: #7778d3;
        }

        .studio-heads-indigo-footer > span {
          font-size: 0.48rem;
          font-weight: 800;
        }

        .studio-heads-indigo-footer > i {
          height: 1px;
          display: block;
          overflow: hidden;
          background: rgba(121, 122, 216, 0.24);
        }

        .studio-heads-indigo-footer > i b {
          width: 34%;
          height: 100%;
          display: block;
          background: #b6b7ff;
        }

        .studio-heads-indigo-footer button {
          justify-self: end;
          min-height: 2.5rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.42rem;
          padding: 0 0.9rem;
          color: #eeeeff;
          border: 1px solid rgba(146, 147, 255, 0.32);
          border-radius: 999px;
          background: rgba(39, 37, 149, 0.26);
          font-size: 0.54rem;
          font-weight: 760;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .studio-heads-indigo-footer button:hover {
          background: #3530dc;
          transform: translateY(-0.12rem);
        }

        @media (max-width: 760px) {
          .studio-heads-section {
            padding: 0.5rem !important;
          }

          .studio-heads-section .studio-heads-shell {
            min-height: auto;
            padding: 1.35rem 0 1rem !important;
            border-radius: 1rem !important;
          }

          .studio-heads-indigo-heading {
            padding: 0 1rem;
          }

          .studio-heads-indigo-heading::before {
            top: -0.8rem;
            width: 15rem;
          }

          .studio-heads-indigo-heading > span {
            margin-bottom: 0.7rem;
            font-size: 0.45rem;
          }

          .studio-heads-indigo-heading h2 {
            font-size: clamp(2.15rem, 11vw, 3.55rem);
          }

          .studio-heads-indigo-heading p {
            max-width: 13ch;
            margin-top: 0.22rem;
            font-size: clamp(1.65rem, 8vw, 2.65rem);
          }

          .studio-heads-indigo-stage {
            display: block;
            margin: 0;
            padding: 3.4rem 2.65rem 1.3rem;
            overflow: hidden;
            touch-action: pan-y;
          }

          .studio-heads-indigo-track {
            display: flex;
            align-items: stretch;
            gap: 0.7rem;
            transform: translate3d(var(--studio-translate), 0, 0);
            transition: transform 0.52s cubic-bezier(0.22, 1, 0.36, 1);
            will-change: transform;
          }

          .studio-heads-indigo-card {
            width: calc(50% - 0.35rem);
            min-width: calc(50% - 0.35rem);
            flex: 0 0 calc(50% - 0.35rem);
            border-radius: 0.8rem;
          }

          .studio-heads-indigo-card-note {
            width: calc(50% - 0.35rem);
            min-width: calc(50% - 0.35rem);
            padding: 0.72rem;
            transform: none;
          }

          .studio-heads-indigo-card-note h3 {
            max-width: none;
            font-size: clamp(0.88rem, 4.3vw, 1.2rem);
            line-height: 0.96;
          }

          .studio-heads-indigo-card-note p {
            display: none;
          }

          .studio-heads-indigo-card-note > div > span {
            font-size: 0.35rem;
          }

          .studio-heads-indigo-card-note footer {
            gap: 0.2rem;
          }

          .studio-heads-indigo-card-note footer span {
            padding: 0.24rem 0.3rem;
            font-size: 0.31rem;
          }

          .studio-heads-indigo-person-copy {
            right: 0.85rem;
            bottom: 0.85rem;
            left: 0.85rem;
          }

          .studio-heads-indigo-person-copy strong {
            font-size: 0.72rem;
          }

          .studio-heads-indigo-person-copy small {
            font-size: 0.37rem;
          }

          .studio-heads-indigo-control {
            top: 55%;
            width: 2.2rem;
            height: 2.2rem;
            display: flex;
            color: #ffffff;
            background: rgba(20, 18, 104, 0.9);
            box-shadow: 0 0.6rem 1.5rem rgba(0,0,30,0.3);
          }

          .studio-heads-indigo-control-left { left: 0.2rem; }
          .studio-heads-indigo-control-right { right: 0.2rem; }

          .studio-heads-indigo-footer {
            grid-template-columns: auto minmax(4rem, 1fr) auto;
            padding: 0 1rem;
          }

          .studio-heads-indigo-footer button {
            grid-column: 1 / -1;
            justify-self: stretch;
            min-height: 2.65rem;
            margin-top: 0.25rem;
          }

          .studio-heads-indigo-image img {
            filter: contrast(1.025) saturate(1.04) brightness(1.03);
            transform: translateZ(0);
          }

          .studio-heads-indigo-card-person:hover .studio-heads-indigo-image img {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .studio-heads-indigo-image img,
          .studio-heads-indigo-track,
          .studio-heads-indigo-footer button {
            transition: none !important;
          }
        }

        /* Project cart — clean ecommerce checkout direction */
        .reference-cart-page.request-checkout-page {
          max-width: 78rem !important;
          padding: clamp(0.75rem, 2vw, 1.4rem) !important;
          border-radius: 1.65rem !important;
          background: #e5e5e5 !important;
        }

        .request-checkout-page .request-checkout-hero {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(15rem, 0.36fr);
          align-items: center;
          gap: 1rem 2rem;
          padding: clamp(1rem, 2.2vw, 1.7rem) !important;
          border: 1px solid #ececec !important;
          border-radius: 1.2rem !important;
          background: #ffffff !important;
          box-shadow: none !important;
        }

        .request-checkout-page .request-checkout-hero::before,
        .request-checkout-page .request-checkout-hero::after {
          display: none !important;
        }

        .request-checkout-page .request-checkout-heading {
          min-width: 0;
        }

        .request-checkout-page .request-checkout-heading span {
          color: #7a7a7a !important;
          font-size: 0.52rem !important;
          line-height: 1 !important;
          font-weight: 750 !important;
          letter-spacing: 0.08em !important;
          text-transform: uppercase;
        }

        .request-checkout-page .request-checkout-heading h2 {
          margin: 0.35rem 0 0 !important;
          color: #0c0c0c !important;
          font-size: clamp(1.55rem, 3vw, 2.45rem) !important;
          line-height: 1 !important;
          font-weight: 580 !important;
          letter-spacing: -0.04em !important;
        }

        .request-checkout-page .request-goal-card {
          min-height: 0 !important;
          padding: 0.75rem 0.85rem !important;
          border: 1px solid #e7e7e7 !important;
          border-radius: 0.65rem !important;
          background: #fafafa !important;
          box-shadow: none !important;
        }

        .request-checkout-page .request-goal-topline,
        .request-checkout-page .request-goal-content {
          gap: 0.45rem !important;
        }

        .request-checkout-page .request-goal-topline span,
        .request-checkout-page .request-goal-content span,
        .request-checkout-page .request-goal-content strong {
          color: #545454 !important;
          font-size: 0.58rem !important;
          line-height: 1.25 !important;
          font-weight: 650 !important;
        }

        .request-checkout-page .request-goal-content button {
          width: 1.7rem !important;
          height: 1.7rem !important;
          color: #111111 !important;
          border: 1px solid #dedede !important;
          border-radius: 50% !important;
          background: #ffffff !important;
        }

        .request-checkout-page .request-progress-shell {
          position: relative;
          grid-column: 1 / -1;
          width: min(100%, 31rem) !important;
          display: grid !important;
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          align-items: start !important;
          gap: 0 !important;
          margin: 0.35rem auto 0 !important;
          padding: 0 !important;
          border: 0 !important;
          background: transparent !important;
          box-shadow: none !important;
        }

        .request-checkout-page .request-progress-shell::before {
          content: "";
          position: absolute;
          top: 0.72rem;
          right: 16.66%;
          left: 16.66%;
          height: 1px;
          background: #dddddd;
        }

        .request-checkout-page .request-progress-fill {
          position: absolute !important;
          top: 0.72rem !important;
          left: 16.66% !important;
          width: 33.33% !important;
          height: 1px !important;
          border-radius: 0 !important;
          background: #111111 !important;
        }

        .request-checkout-page .request-progress-shell > span {
          position: relative;
          z-index: 2;
          min-width: 0 !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          gap: 0.34rem !important;
          padding: 0 !important;
          color: #9a9a9a !important;
          border: 0 !important;
          background: transparent !important;
        }

        .request-checkout-page .request-progress-shell > span b {
          width: 1.45rem !important;
          height: 1.45rem !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          color: #8a8a8a !important;
          border: 1px solid #d9d9d9 !important;
          border-radius: 50% !important;
          background: #ffffff !important;
          box-shadow: none !important;
        }

        .request-checkout-page .request-progress-shell > span b svg {
          width: 0.67rem;
          height: 0.67rem;
        }

        .request-checkout-page .request-progress-shell > span em {
          display: none !important;
        }

        .request-checkout-page .request-progress-shell > span strong {
          color: #777777 !important;
          font-size: 0.5rem !important;
          line-height: 1 !important;
          font-weight: 650 !important;
        }

        .request-checkout-page .request-progress-shell > span.is-current b,
        .request-checkout-page .request-progress-shell > span.is-complete b {
          color: #ffffff !important;
          border-color: #101010 !important;
          background: #101010 !important;
        }

        .request-checkout-page .request-progress-shell > span.is-current strong,
        .request-checkout-page .request-progress-shell > span.is-complete strong {
          color: #111111 !important;
        }

        .request-checkout-page .request-checkout-tip {
          grid-column: 1 / -1;
          margin: 0.15rem 0 0 !important;
          color: #888888 !important;
          font-size: 0.55rem !important;
          line-height: 1.4 !important;
          text-align: center;
        }

        .reference-cart-page.request-checkout-page .reference-cart-panel {
          margin-top: 0.75rem !important;
          padding: clamp(0.85rem, 2vw, 1.35rem) !important;
          border: 1px solid #ececec !important;
          border-radius: 1.2rem !important;
          background: #ffffff !important;
          box-shadow: none !important;
        }

        .reference-cart-page.request-checkout-page .reference-cart-panel::before,
        .reference-cart-page.request-checkout-page .reference-cart-panel::after {
          display: none !important;
        }

        .request-checkout-page .reference-cart-grid {
          display: grid !important;
          grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr) !important;
          align-items: start !important;
          gap: clamp(1rem, 3vw, 2.4rem) !important;
        }

        .request-checkout-page .reference-selected-list,
        .request-checkout-page .reference-enquiry-form {
          min-width: 0;
          padding: 0 !important;
          border: 0 !important;
          border-radius: 0 !important;
          background: transparent !important;
          box-shadow: none !important;
        }

        .request-checkout-page .reference-enquiry-form {
          padding-left: clamp(1rem, 2.5vw, 2rem) !important;
          border-left: 1px solid #eeeeee !important;
        }

        .request-checkout-page .reference-list-head,
        .request-checkout-page .reference-appointment-card {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 1rem !important;
          min-height: 0 !important;
          margin: 0 0 0.55rem !important;
          padding: 0.65rem 0.75rem !important;
          border: 1px solid #ededed !important;
          border-radius: 0.55rem !important;
          background: #fafafa !important;
        }

        .request-checkout-page .reference-list-head span,
        .request-checkout-page .reference-appointment-card span {
          color: #858585 !important;
          font-size: 0.48rem !important;
          font-weight: 720 !important;
          letter-spacing: 0.05em !important;
          text-transform: uppercase;
        }

        .request-checkout-page .reference-list-head strong,
        .request-checkout-page .reference-appointment-card strong {
          color: #171717 !important;
          font-size: 0.72rem !important;
          line-height: 1.2 !important;
          font-weight: 680 !important;
        }

        .request-checkout-page .reference-list-head button,
        .request-checkout-page .reference-appointment-card button {
          min-height: 1.8rem !important;
          padding: 0 0.55rem !important;
          color: #5e5e5e !important;
          border: 1px solid #dddddd !important;
          border-radius: 0.35rem !important;
          background: #ffffff !important;
          font-size: 0.48rem !important;
          font-weight: 650 !important;
        }

        .request-checkout-page .reference-service-summary {
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 0.45rem !important;
          margin-bottom: 0.65rem !important;
        }

        .request-checkout-page .reference-service-chip {
          min-height: 4.25rem !important;
          display: grid !important;
          grid-template-columns: 2.6rem minmax(0, 1fr) auto !important;
          align-items: center !important;
          gap: 0.7rem !important;
          padding: 0.55rem !important;
          border: 1px solid #ededed !important;
          border-radius: 0.55rem !important;
          background: #ffffff !important;
          box-shadow: none !important;
        }

        .request-checkout-page .reference-service-chip > svg {
          width: 2.6rem !important;
          height: 2.6rem !important;
          padding: 0.72rem !important;
          color: #151515 !important;
          border-radius: 0.45rem !important;
          background: #f1f1f1 !important;
        }

        .request-checkout-page .reference-service-chip strong {
          color: #111111 !important;
          font-size: 0.7rem !important;
          line-height: 1.15 !important;
          font-weight: 670 !important;
        }

        .request-checkout-page .reference-service-chip small {
          color: #7b7b7b !important;
          font-size: 0.5rem !important;
          line-height: 1.35 !important;
        }

        .request-checkout-page .reference-service-chip > button {
          width: 1.6rem !important;
          height: 1.6rem !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          color: #8b8b8b !important;
          border: 0 !important;
          border-radius: 50% !important;
          background: #f3f3f3 !important;
        }

        .request-checkout-page .reference-appointment-card p {
          margin-top: 0.18rem !important;
          color: #777777 !important;
          font-size: 0.5rem !important;
          line-height: 1.35 !important;
        }

        .request-checkout-page .reference-selected-card {
          display: grid !important;
          grid-template-columns: 5rem minmax(0, 1fr) !important;
          gap: 0.7rem !important;
          min-height: 5rem !important;
          margin-bottom: 0.5rem !important;
          padding: 0.45rem !important;
          border: 1px solid #ededed !important;
          border-radius: 0.55rem !important;
          background: #ffffff !important;
          box-shadow: none !important;
        }

        .request-checkout-page .reference-selected-card > div {
          min-height: 4rem !important;
          border-radius: 0.4rem !important;
        }

        .request-checkout-page .reference-selected-card img,
        .request-checkout-page .reference-selected-card video {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }

        .request-checkout-page .reference-selected-card section span,
        .request-checkout-page .reference-selected-card section p,
        .request-checkout-page .reference-selected-card section button {
          font-size: 0.48rem !important;
        }

        .request-checkout-page .reference-selected-card section strong {
          color: #151515 !important;
          font-size: 0.68rem !important;
        }

        .request-checkout-page .reference-simple-summary {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 0.75rem !important;
          margin: 0 0 0.75rem !important;
          padding: 0.75rem !important;
          border: 1px solid #e5e5e5 !important;
          border-radius: 0.55rem !important;
          background: #fafafa !important;
        }

        .request-checkout-page .reference-simple-summary span,
        .request-checkout-page .reference-simple-summary strong {
          color: #1b1b1b !important;
          font-size: 0.6rem !important;
          font-weight: 700 !important;
        }

        .request-checkout-page .reference-form-title {
          margin-bottom: 0.75rem !important;
          padding: 0 !important;
          border: 0 !important;
          background: transparent !important;
        }

        .request-checkout-page .reference-form-title > span {
          color: #888888 !important;
          font-size: 0.48rem !important;
          font-weight: 760 !important;
          text-transform: uppercase;
        }

        .request-checkout-page .reference-form-title strong {
          color: #111111 !important;
          font-size: 0.98rem !important;
          font-weight: 650 !important;
        }

        .request-checkout-page .reference-form-title p,
        .request-checkout-page .reference-enquiry-form > p,
        .request-checkout-page .reference-privacy-note p {
          color: #777777 !important;
          font-size: 0.52rem !important;
          line-height: 1.45 !important;
        }

        .request-checkout-page .reference-enquiry-form label {
          gap: 0.3rem !important;
          color: #4d4d4d !important;
          font-size: 0.56rem !important;
          font-weight: 650 !important;
        }

        .request-checkout-page .reference-enquiry-form input,
        .request-checkout-page .reference-enquiry-form textarea {
          min-height: 2.55rem !important;
          padding: 0.65rem 0.72rem !important;
          color: #111111 !important;
          border: 1px solid #dedede !important;
          border-radius: 0.45rem !important;
          background: #ffffff !important;
          font-size: 0.68rem !important;
          box-shadow: none !important;
        }

        .request-checkout-page .reference-enquiry-form textarea {
          min-height: 5.2rem !important;
        }

        .request-checkout-page .reference-privacy-note {
          margin: 0.75rem 0 !important;
          padding: 0.65rem !important;
          border: 1px solid #ececec !important;
          border-radius: 0.45rem !important;
          background: #fafafa !important;
        }

        .request-checkout-page .reference-submit-row {
          display: grid !important;
          grid-template-columns: 1fr !important;
          gap: 0.45rem !important;
        }

        .request-checkout-page .reference-submit-button,
        .request-checkout-page .reference-whatsapp-button {
          min-height: 2.8rem !important;
          border-radius: 0.42rem !important;
          font-size: 0.62rem !important;
          font-weight: 700 !important;
        }

        .request-checkout-page .reference-submit-button {
          color: #ffffff !important;
          border: 1px solid #090909 !important;
          background: #090909 !important;
        }

        .request-checkout-page .reference-whatsapp-button {
          color: #252525 !important;
          border: 1px solid #dddddd !important;
          background: #ffffff !important;
        }

        @media (max-width: 820px) {
          .request-checkout-page .request-checkout-hero {
            grid-template-columns: 1fr;
          }

          .request-checkout-page .request-goal-card {
            width: 100%;
          }

          .request-checkout-page .reference-cart-grid {
            grid-template-columns: 1fr !important;
          }

          .request-checkout-page .reference-enquiry-form {
            padding-top: 1rem !important;
            padding-left: 0 !important;
            border-top: 1px solid #eeeeee !important;
            border-left: 0 !important;
          }
        }

        @media (max-width: 560px) {
          .reference-cart-page.request-checkout-page {
            padding: 0.5rem !important;
            border-radius: 1rem !important;
          }

          .request-checkout-page .request-checkout-hero,
          .reference-cart-page.request-checkout-page .reference-cart-panel {
            padding: 0.8rem !important;
            border-radius: 0.8rem !important;
          }

          .request-checkout-page .request-checkout-heading h2 {
            font-size: 1.65rem !important;
          }

          .request-checkout-page .request-progress-shell {
            margin-top: 0.55rem !important;
          }

          .request-checkout-page .reference-service-chip {
            grid-template-columns: 2.35rem minmax(0, 1fr) auto !important;
          }

          .request-checkout-page .reference-service-chip > svg {
            width: 2.35rem !important;
            height: 2.35rem !important;
          }

          .request-checkout-page .reference-list-head,
          .request-checkout-page .reference-appointment-card {
            align-items: flex-start !important;
          }

          .request-checkout-page .reference-selected-card {
            grid-template-columns: 4.4rem minmax(0, 1fr) !important;
          }
        }

        @keyframes float3d {
          0%, 100% { 
            transform: rotateX(15deg) rotateY(-20deg) translateY(0px); 
            box-shadow: -8px 12px 15px -3px rgba(32, 80, 227, 0.3), inset 2px 2px 5px rgba(255,255,255,0.3); 
          }
          50% { 
            transform: rotateX(-10deg) rotateY(20deg) translateY(-8px); 
            box-shadow: 8px 15px 20px -3px rgba(32, 80, 227, 0.3), inset -2px -2px 5px rgba(255,255,255,0.3); 
          }
        }
      `}} />
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
