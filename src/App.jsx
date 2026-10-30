import React, { useState, useEffect, useMemo, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.css';
import './styles.css';
import './ServiceSuite.css';
import './CoreFeatures.css';
import './ServiceStore.css';
import './StudioHeads.css';
import './DarkMode.css';
// Last import wins the cascade — this strips backdrop blur and ambient
// animation on phones, where they are the main cause of scroll jank.
import './MobilePerf.css';
// Home page editorial foundation, followed by the new glass direction below.
import './HomeIgnite.css';
/* Retained for lower home sections; GlassRefresh restyles its visual system. */
import './HomeSlush.css';
import Stepper, { Step } from './Stepper';
import LeafMark from './LeafMark';
import LoadingScreen from './LoadingScreen';
import EnquiryTicket from './EnquiryTicket';
import Masonry from './Masonry';
import SiteShowcase from './SiteShowcase';
import './PortfolioEditorial.css';
import './GlassRefresh.css';
import DovetailHome from './DovetailHome';
import DovetailServices from './DovetailServices';
import './DovetailTheme.css';
import './PaperButtons.css';
import './StoreGlassCards.css';
import './GlowButtons.css';
import './SiteTypography.css';
import ContactPage from './ContactPage';
import LetterGlitch from './LetterGlitch';
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
  Sparkles,
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
  MapPin,
  Send,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Volume2,
  VolumeX,
  ShoppingBag,
  Store,
  Server,
  Cloud,
  Database,
  Film,
  Activity,
  Plus
} from 'lucide-react';

// Custom Icon Component using the company logo
/* The mark now lives in LeafMark so the before/after handle can use the same
   one; this alias keeps every existing call site working. */
const LeafIcon = LeafMark;

// Standardized WhatsApp Vector Icon
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const DockNavigation = ({ items, activeId, onNavigate }) => (
  <nav className="leaf-dock" aria-label="Bottom navigation">
    {items.map((item) => {
      const Icon = item.icon;
      const active = activeId === item.id;
      return (
        <button
          key={item.id}
          type="button"
          className={`leaf-dock-item ${active ? 'is-active' : ''}`}
          aria-label={item.label}
          aria-current={active ? 'page' : undefined}
          onClick={() => onNavigate(item.id)}
        >
          <Icon aria-hidden="true" />
          <span className="leaf-dock-label">{item.label}</span>
        </button>
      );
    })}
  </nav>
);

const ElasticServiceStack = ({
  items,
  onSelect,
  itemSize = 66,
  overlap = 28,
  pushForce = 12
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const activeIndex = hoveredIndex ?? 0;
  const springEasing = 'linear(0, 0.79 14.4%, 1.026 22.4%, 1.164 31.2%, 1.207 38.2%, 1.208 46.2%, 1.033 80%, 1)';

  return (
    <div className="elastic-service-section">
      <div
        className="elastic-service-stack"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {items.map((item, index) => {
          const IconComponent = item.icon;
          const isHovered = hoveredIndex === index;
          let translateX = 0;
          let scale = 1;
          let zIndex = index;

          if (hoveredIndex !== null) {
            if (index > hoveredIndex) {
              translateX = Math.min(pushForce * (items.length - index - 1), overlap);
            } else if (index < hoveredIndex) {
              translateX = -Math.min(pushForce * index, overlap);
            } else {
              scale = 1.24;
              zIndex = 100;
            }
          }

          return (
            <button
              key={item.id}
              type="button"
              className={`elastic-service-item ${isHovered ? 'is-hovered' : ''}`}
              style={{
                '--elastic-size': `${itemSize}px`,
                marginLeft: index === 0 ? 0 : `-${overlap}px`,
                transform: `translateX(${translateX}px) scale(${scale})`,
                transitionTimingFunction: springEasing,
                zIndex
              }}
              aria-label={`Open ${item.name}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              onPointerDown={() => setHoveredIndex(index)}
              onClick={() => onSelect(item.id)}
            >
              <IconComponent size={26} strokeWidth={1.55} aria-hidden="true" />
            </button>
          );
        })}
      </div>

      <div className="elastic-service-caption" aria-live="polite">
        <strong>{items[activeIndex]?.name}</strong>
        <span>Tap to view service</span>
      </div>
    </div>
  );
};

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

/**
 * Map a full-size portfolio asset to its 640px thumbnail.
 * Generated thumbnails live in /assets/portfolio/thumbs and are always .jpg.
 * Non-portfolio paths are returned untouched.
 */
const toThumb = (src) => {
  if (!src || !src.includes('/assets/portfolio/')) return src;
  if (src.includes('/thumbs/')) return src;
  if (!/\.(jpg|jpeg|png|webp)$/i.test(src)) return src;
  return `/assets/portfolio/thumbs/${src.split('/').pop().replace(/\.[^.]+$/, '.jpg')}`;
};

const navPathMap = {
  home: '/',
  services: '/services',
  workspace: '/workspace',
  launch: '/launch-cloud',
  portfolio: '/portfolio',
  contact: '/contact',
  referenceCart: '/cart'
};

const pathNavMap = Object.entries(navPathMap).reduce((map, [nav, path]) => {
  map[path] = nav;
  return map;
}, {
  '/schedule': 'workspace',
  '/projects': 'workspace'
});

const getNavFromPath = () => {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return pathNavMap[path] || 'home';
};

const pageSeo = {
  contact: {
    path: '/contact',
    title: 'Contact | Start a Project with Leaf Creationism',
    description: 'Tell Leaf Creationism about your branding, design, website or advertising project.'
  },
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
  workspace: {
    path: '/workspace',
    title: 'Service Store | Buy UI/UX, Web, App, Branding & Ads | Leaf Creationism',
    description: 'Browse Leaf Creationism services with starting prices and delivery timelines. Add services to your cart and send one enquiry to get a written quote.'
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


const App = () => {
  const [activeNav, setActiveNav] = useState(getNavFromPath);
  const [headerHidden, setHeaderHidden] = useState(false);

  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      if (current < 80) setHeaderHidden(false);
      else if (Math.abs(current - previous) > 5) setHeaderHidden(current > previous);
      previous = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const [completedSteps, setCompletedSteps] = useState([]);
  /* Which boxes were left empty on the last submit, and the ticket the enquiry
     came back with. */
  /* The loading veil. `phase` is 'in' while it covers the page and 'out' for
     the length of its fade, so the element survives long enough to animate
     away instead of vanishing. */
  const [loaderPhase, setLoaderPhase] = useState('in');
  const [loaderQuick, setLoaderQuick] = useState(false);
  const loaderTimers = useRef({ hold: null, fade: null });
  const [referenceErrors, setReferenceErrors] = useState({});
  const [enquiryTicket, setEnquiryTicket] = useState(null);
  const [activeCategory, setActiveCategory] = useState('uiux'); 
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);
  const [selectedScheduleType, setSelectedScheduleType] = useState('discovery');
  const [selectedLaunchPlan, setSelectedLaunchPlan] = useState(1);
  const [selectedAppointmentDay, setSelectedAppointmentDay] = useState(1);
  const [selectedAppointmentTime, setSelectedAppointmentTime] = useState('11:30 AM');
  const [bookingMonthOffset, setBookingMonthOffset] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [likedPortfolioItems, setLikedPortfolioItems] = useState([]);
  const [sharedPortfolioItem, setSharedPortfolioItem] = useState('');
  const [unmutedPortfolioItems, setUnmutedPortfolioItems] = useState([]);
  const [portfolioAudioAvailability, setPortfolioAudioAvailability] = useState({});
  const [portfolioMediaRatios, setPortfolioMediaRatios] = useState({});
  const [referencePortfolioItems, setReferencePortfolioItems] = useState([]);
  const [referenceCartPulse, setReferenceCartPulse] = useState(false);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [floatingActionMode, setFloatingActionMode] = useState('whatsapp');
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
  const [storeFilter, setStoreFilter] = useState('All');
  const [headsVisible, setHeadsVisible] = useState(false);
  const headsRef = useRef(null);
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
  const localFaqVideo = "/assets/media/faq-vantadrop.mp4";
  const localServicesHeroVideo = "/assets/media/services-hero-showcase.mp4";
  const studioHeads = [
    {
      name: 'JIBIN CHACKO',
      role: 'Founder / Creative Head',
      image: '/assets/team/jibin-founder-hq.jpg',
      alt: 'Jibin Chacko, Founder and Creative Head of Leaf Creationism',
      description: 'Leads creative systems, product direction, client strategy, and launch execution.'
    },
    {
      name: 'JUNE MARY',
      role: 'Creative Head / Mentor',
      image: '/assets/team/xandra-creative-head.jpg',
      alt: 'June Mary, Creative Head and Mentor at Leaf Creationism',
      description: 'Shapes visual direction, premium taste, storytelling, and brand experience mentoring.'
    }
  ];

  // Reveal the Studio Heads section once, the first time it scrolls into
  // view. transform/opacity only — cheap to animate, no layout thrash.
  //
  // Keyed on the route. It used to attach once, on first mount: leave the home
  // page before reaching this section and come back, and the section remounted
  // as a new element that nothing was observing — so it never revealed, and
  // the heading and footer sat at opacity 0 for the rest of the visit. Once it
  // has revealed it stays revealed; the state outlives the remount.
  useEffect(() => {
    if (activeNav !== 'home' || headsVisible) return undefined;
    const node = headsRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setHeadsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [activeNav, headsVisible]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFloatingActionMode((mode) => mode === 'whatsapp' ? 'cart' : 'whatsapp');
    }, 3400);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.dataset.theme = 'dark';
    document.documentElement.style.colorScheme = 'dark';
    window.localStorage.setItem('leaf-theme', 'dark');
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const syncFromPath = () => {
      const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
      if (currentPath === '/schedule' || currentPath === '/projects') {
        window.history.replaceState({ activeNav: 'workspace' }, '', navPathMap.workspace);
      }
      setActiveNav(getNavFromPath());
    };
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


  const toggleStep = (id) => {
    setCompletedSteps(prev => 
      prev.includes(id) ? prev.filter(stepId => stepId !== id) : [...prev, id]
    );
  };

  /* Shows the veil for `hold`, then fades it. Every call clears the previous
     timers, so rapid navigation cannot leave two schedules racing — and there
     is no branch that sets the veil without also scheduling its removal. */
  const runLoader = (hold, quick = false) => {
    window.clearTimeout(loaderTimers.current.hold);
    window.clearTimeout(loaderTimers.current.fade);
    setLoaderQuick(quick);
    setLoaderPhase('in');
    loaderTimers.current.hold = window.setTimeout(() => {
      setLoaderPhase('out');
      loaderTimers.current.fade = window.setTimeout(() => setLoaderPhase('done'), 450);
    }, hold);
  };

  /* First arrival waits for the device rather than for a number picked in
     advance: the veil lifts once the page has actually finished loading, which
     is what the counter in the corner is reporting.
     
     Two bounds around that. FLOOR keeps it up long enough for the mark to
     finish drawing (1.9s lands inside the drawing's hold phase, 0.45 to 0.66
     of its 3s cycle) so a warm cache does not flash the veil half-drawn. CEIL
     is the safety net: one stalled image must never trap a visitor behind a
     loading screen, so past six seconds it lifts regardless. */
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      runLoader(400);
      return () => {
        window.clearTimeout(loaderTimers.current.hold);
        window.clearTimeout(loaderTimers.current.fade);
      };
    }

    const FLOOR = 1900;
    const CEIL = 6000;
    const startedAt = Date.now();
    let settled = false;

    setLoaderQuick(false);
    setLoaderPhase('in');

    const lift = () => {
      if (settled) return;
      settled = true;
      const remaining = Math.max(0, FLOOR - (Date.now() - startedAt));
      loaderTimers.current.hold = window.setTimeout(() => {
        setLoaderPhase('out');
        loaderTimers.current.fade = window.setTimeout(() => setLoaderPhase('done'), 450);
      }, remaining);
    };

    if (document.readyState === 'complete') lift();
    else window.addEventListener('load', lift, { once: true });
    const ceiling = window.setTimeout(lift, CEIL);

    return () => {
      window.removeEventListener('load', lift);
      window.clearTimeout(ceiling);
      window.clearTimeout(loaderTimers.current.hold);
      window.clearTimeout(loaderTimers.current.fade);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateTo = (id, options = {}) => {
    /* Between pages it is a curtain, not a performance. The loader runs its
       quick variant, which fits the whole sequence into the shorter hold
       instead of stopping part-way through it. */
    if (id !== activeNav) runLoader(1250, true);
    setActiveNav(id);
    if (typeof window !== 'undefined') {
      const nextPath = navPathMap[id] || '/';
      if (window.location.pathname !== nextPath) {
        window.history[options.replace ? 'replaceState' : 'pushState']({ activeNav: id }, '', nextPath);
      }
    }
    window.setTimeout(() => window.scrollTo(0, 0), 0);
  };

  // Entrance animations for the home page sections. This call previously sat
  // inside the account block and was removed with it, leaving the hook
  // imported but never invoked — so nothing ever received .ig-reveal.

  /* The five delivery stages. Shared by the wheel, which selects one, and the
     panel, which shows it in full — the wheel fades and blurs everything it is
     not pointing at, so it can never be the only place this content lives. */
  const projectStages = [
    {
      n: '01',
      title: 'Discovery',
      body: 'We dig into the brief, the audience, the competition and what success actually looks like for you.',
      out: 'Scope, goals, written quote'
    },
    {
      n: '02',
      title: 'Direction',
      body: 'Structure before decoration — sitemap, user flows and wireframes, plus the visual direction.',
      out: 'Wireframes, moodboard'
    },
    {
      n: '03',
      title: 'Design',
      body: 'The interface, brand system and every screen or asset, designed to a system rather than page by page.',
      out: 'Full design files'
    },
    {
      n: '04',
      title: 'Build',
      body: 'Development, CMS setup, integrations and the performance and SEO work that makes it rank and load.',
      out: 'Staging site to review'
    },
    {
      n: '05',
      title: 'Launch',
      body: 'Testing across devices, deployment, analytics, and a handover so your team can run it without us.',
      out: 'Live site, training'
    }
  ];
  const activeStage = projectStages[activeStageIndex] || projectStages[0];

  const solutionsList = [
    { id: 'uiux', title: 'UI/UX Design', desc: 'User-centric interfaces', icon: PenTool },
    { id: 'web', title: 'Websites & Apps', desc: 'Scalable digital platforms', icon: MonitorSmartphone },
    { id: 'ai', title: 'AI Ads', desc: 'Smart, targeted campaigns', icon: Sparkles },
    { id: 'adv', title: 'Advertising', desc: 'Brand growth strategies', icon: Megaphone },
    { id: 'brand', title: 'Branding', desc: 'Identity systems', icon: LeafIcon },
    { id: 'apps', title: 'Mobile Apps', desc: 'Native-feeling products', icon: Smartphone },
    { id: 'nocode', title: 'No Code Web', desc: 'Fast visual builds', icon: Blocks },
    { id: 'shopify', title: 'Shopify Dev', desc: 'Conversion stores', icon: ShoppingBag },
    // Launch Cloud plans — added to the cart the same way as a service when
    // chosen from the Launch Cloud "Three clear levels" grid.
    { id: 'launch-web', title: 'Web Launch', desc: 'Launch Cloud · for websites', icon: Globe },
    { id: 'launch-business', title: 'Business Cloud', desc: 'Launch Cloud · for web apps', icon: Database },
    { id: 'launch-scale', title: 'Scale Stack', desc: 'Launch Cloud · for custom stacks', icon: Server },
  ];

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'workspace', label: 'Service Store', icon: Store, hasNotification: true },
    { id: 'launch', label: 'Launch Cloud', icon: Server },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
  ];

  const serviceCategories = [
    { 
      id: 'uiux', name: 'UI/UX Design', icon: PenTool,
      title: "Making Apps Less Annoying.",
      heroDesc: "Stop giving your users a digital headache. We design interfaces so intuitive, even your grandma's cat could order pizza on them.",
      img: "/assets/services/uiux-3d.jpg",
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
      img: "/assets/services/web-3d.jpg",
      problem: "Your website currently takes 14 seconds to load, half the buttons lead to 404 pages, and it looks like a Picasso painting when viewed on a mobile phone.",
      solution: "We build scalable, lightning-fast digital platforms using modern tech stacks. If a user blinks, the page has already loaded. Mobile responsive isn't a feature; it's a religion here.",
      process: [
        { step: "01", title: "Architecture", desc: "Planning the database and backend so it doesn't collapse when you get more than 3 visitors." },
        { step: "02", title: "Typing Fast", desc: "Our devs drink dangerous amounts of energy drinks and turn coffee into functional code." },
        { step: "03", title: "Bug Squashing", desc: "We aggressively hunt down glitches so your users don't have to." }
      ]
    },
    {
      id: 'ai', name: 'AI Ads', icon: Sparkles,
      title: "Robots Finding Customers.",
      heroDesc: "We unleash algorithmic sorcery to target people who didn't even know they wanted your product yet.",
      img: "/assets/services/ai-ads-3d.jpg",
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
      img: "/assets/services/advertising-3d.jpg",
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
      img: "/assets/services/branding-3d.jpg",
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
      img: "/assets/services/mobile-apps-3d.jpg",
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
      img: "/assets/services/nocode-web-3d.jpg",
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
      img: "/assets/services/shopify-3d.jpg",
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

  /* ------------------------------------------------------------------
     STORE PRICING — THESE ARE YOURS TO SET.
     Starting prices only: every card says "Starting from" and the flow
     still ends in a written quote, so none of this is a commitment. The
     numbers were lowered to entry points a small business will actually
     click on, keeping the same order between services, and set just under
     a round figure because that is what reads as a price rather than an
     estimate. Change any of them to your real floor.
     ------------------------------------------------------------------ */
  const servicePricing = {
    uiux: {
      from: 17999, weeks: '2-3 weeks', group: 'Design',
      includes: ['User research & flows', 'Wireframes & prototypes', 'Full UI design system']
    },
    web: {
      from: 24999, weeks: '3-4 weeks', group: 'Development',
      includes: ['Mobile-responsive build', 'Speed & Core Web Vitals', 'On-page SEO setup']
    },
    ai: {
      from: 12999, weeks: '1-2 weeks', group: 'Marketing', badge: 'Fastest delivery',
      includes: ['AI-generated ad creatives', 'Meta & Google campaign setup', 'A/B testing framework']
    },
    adv: {
      from: 19999, weeks: '2-4 weeks', group: 'Marketing',
      includes: ['Campaign strategy', 'Creative direction & copy', 'Performance reporting']
    },
    brand: {
      from: 27999, weeks: '3-5 weeks', group: 'Design',
      includes: ['Logo & visual identity', 'Colour & type system', 'Brand guideline document']
    },
    apps: {
      from: 54999, weeks: '6-10 weeks', group: 'Development',
      includes: ['iOS & Android build', 'Backend, API & database', 'App Store submission']
    },
    nocode: {
      from: 11999, weeks: '1-2 weeks', group: 'Development', badge: 'Best value',
      includes: ['Webflow / Framer build', 'CMS you can edit yourself', 'Training & handover']
    },
    shopify: {
      from: 32999, weeks: '3-5 weeks', group: 'Development',
      includes: ['Custom theme build', 'Checkout optimisation', 'Payment gateway setup']
    }
  };

  const formatInr = (value) =>
    typeof value === 'number' ? `₹${value.toLocaleString('en-IN')}` : 'On request';

  /* Short, factual one-liners for the service grid. The heroDesc copy is
     deliberately jokey and too long to scan in a card. */
  const serviceTaglines = {
    uiux: 'Interfaces for apps, websites, dashboards, and products.',
    web: 'Fast, responsive websites and web applications.',
    ai: 'AI-generated ad creatives and performance campaigns.',
    adv: 'Campaign strategy, creative direction, and media.',
    brand: 'Logos, identity systems, and brand guidelines.',
    apps: 'Native iOS and Android mobile applications.',
    nocode: 'Webflow, Framer, and WordPress builds you can edit.',
    shopify: 'Storefronts, product pages, and checkout flows.'
  };

  // Warm the service modal images so the modal opens instantly.
  // Skipped on phones and on metered/slow connections: prefetching every
  // service image competes with the page itself for a limited connection,
  // which is exactly what made mobile feel sluggish.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isMobileViewport) return;

    const connection = navigator.connection;
    if (connection?.saveData) return;
    if (connection?.effectiveType && /2g|slow-2g|3g/.test(connection.effectiveType)) return;

    const timer = window.setTimeout(() => {
      serviceCategories.forEach(({ img }) => {
        if (!img) return;
        const serviceImage = new Image();
        serviceImage.decoding = 'async';
        serviceImage.src = img;
      });
    }, 1500);

    return () => window.clearTimeout(timer);
  }, [isMobileViewport]);

  const capabilities = [
    {
      id: 'strategy',
      title: 'Strategy',
      desc: 'We turn loose ideas into a clear product, brand, and growth direction before design or code begins.',
      tags: ['Research', 'Architecture', 'Positioning'],
      items: ['Research', 'Software Architecture', 'UI/UX Auditing', 'Product Strategy', 'Creative Strategy', 'Marketing and Competitive Analysis'],
      image: '/assets/capabilities/strategy-cartoon.jpg'
    },
    {
      id: 'brand',
      title: 'Brand & Campaign',
      desc: 'We shape how the brand looks, moves, sounds, and shows up across campaigns, launches, and everyday content.',
      tags: ['Brand Systems', 'Motion', 'Campaigns'],
      items: ['Explainer Videos', '3D Motion Design', 'Illustration and Iconography', 'Branding Strategy and Positioning'],
      image: '/assets/capabilities/brand-campaign-cartoon.jpg'
    },
    {
      id: 'product',
      title: 'Product',
      desc: 'We design digital products with usable flows, polished interfaces, fast prototypes, and a personality people remember.',
      tags: ['UX/UI', 'Prototyping', 'Systems'],
      items: ['Motion Design System', 'Prototyping and Iterative Testing', 'Personality and Tonality Setup', 'UX/UI Design'],
      image: '/assets/capabilities/product-cartoon.jpg'
    },
    {
      id: 'engineering',
      title: 'Engineering',
      desc: 'We build the product layer behind the brand: fast websites, apps, stores, AI workflows, and cloud-ready systems.',
      tags: ['Web', 'Apps', 'AI/ML'],
      items: ['DevOps and Cloud Management', 'Shopify Development', 'App Development', 'Web Development', 'AI/ML', 'Framer Development'],
      image: '/assets/capabilities/engineering-cartoon.jpg'
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

  /**
   * Send the visitor straight into an enquiry for one specific service.
   * Every service surface (homepage stack, service modal, /cart?service=) routes
   * through here so the submitted enquiry always names the service requested.
   */
  const enquireAboutService = (id) => {
    if (id) {
      setCompletedSteps((steps) => (steps.includes(id) ? steps : [...steps, id]));
      setReferenceCartPulse(true);
      window.setTimeout(() => setReferenceCartPulse(false), 900);
    }
    setShowServiceModal(false);
    navigateTo('referenceCart');
  };

  const launchPlanIds = ['launch-web', 'launch-business', 'launch-scale'];

  /**
   * "Choose plan" on Launch Cloud goes straight to the cart with that plan
   * already added — no separate checkout page. Only one Launch Cloud plan
   * can be in the cart at a time (they're alternative hosting tiers, not
   * services you'd combine), so picking a new one swaps out any previous one.
   */
  const chooseLaunchPlan = (plan, index) => {
    setCompletedSteps((steps) => {
      const withoutOtherPlans = steps.filter((id) => !launchPlanIds.includes(id));
      return [...withoutOtherPlans, plan.id];
    });
    setSelectedLaunchPlan(index);
    setReferenceCartPulse(true);
    window.setTimeout(() => setReferenceCartPulse(false), 900);
    navigateTo('referenceCart');
  };

  // Deep links such as /cart?service=uiux (used by the static SEO layer and by
  // ad campaigns) preselect that service so the lead is attributed correctly.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const requested = new URLSearchParams(window.location.search).get('service');
    if (!requested) return;
    if (!solutionsList.some((service) => service.id === requested)) return;
    setCompletedSteps((steps) => (steps.includes(requested) ? steps : [...steps, requested]));
  }, []);

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
      dateObj: day,
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
  const bookingMonth = new Date(currentTime.getFullYear(), currentTime.getMonth() + bookingMonthOffset, 1);
  const bookingCalendarStart = new Date(bookingMonth);
  bookingCalendarStart.setDate(1 - ((bookingMonth.getDay() + 6) % 7));
  const bookingCalendarDays = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(bookingCalendarStart);
    date.setDate(bookingCalendarStart.getDate() + index);
    const appointment = appointmentDays.find((day) => day.dateObj.toDateString() === date.toDateString());
    return { date, appointment, inMonth: date.getMonth() === bookingMonth.getMonth() };
  });
  const maxBookingMonthOffset = (appointmentDays[6].dateObj.getFullYear() - currentTime.getFullYear()) * 12
    + appointmentDays[6].dateObj.getMonth() - currentTime.getMonth();
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
      icon: Sparkles,
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
      id: 'launch-web',
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
      id: 'launch-business',
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
      id: 'launch-scale',
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
      icon: Sparkles,
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
  /* ---------------------------------------------------------------------
     Website work.

     ADD YOUR SITES HERE. Each entry needs a name and a url; everything else
     is optional. Drop a screenshot into /assets/portfolio/websites/ and set
     `image` to its path — without one the card falls back to a typographic
     panel showing the domain, so an entry never looks broken while you wait
     for a screenshot.

     Only real, live, permitted client sites belong in this list.
     --------------------------------------------------------------------- */
  const websiteProjects = [
    {
      name: 'ORU CODE',
      url: 'https://orucode.online',
      services: ['Web design', 'Development'],
      note: 'Free website design library and UI components, made in Kerala.',
      image: ''
    },
    {
      name: 'Mallugrapher UK',
      url: 'https://mallugrapheruk.com',
      services: ['Web design', 'Development'],
      note: 'Portfolio site for a Plymouth-based photographer.',
      image: ''
    },
    {
      name: 'NAINU Boutique',
      url: 'https://nainuboutique.com',
      services: ['Web design', 'Development', 'E-commerce'],
      note: 'Online store for an Indian clothing boutique.',
      image: ''
    },
    {
      name: 'UNIQ Floors',
      url: 'https://leafcreationism.online',
      services: ['Web design', 'Development'],
      note: 'Site for a wood, LVT and laminate flooring supplier.',
      image: ''
    },
    {
      name: 'COVEO',
      url: 'https://coveomusic.com',
      services: ['Web design', 'Development'],
      note: 'Site for an audio and visual project.',
      image: ''
    },
    {
      name: 'Vero Studio',
      url: 'https://www.verostudio.com',
      services: ['Web design', 'Development'],
      note: 'Studio website.',
      image: ''
    },
    {
      name: 'Friends Tax Point',
      url: 'https://friendstaxpoint.com',
      services: ['Web design', 'Development'],
      note: 'Site for a tax, GST and compliance consultancy.',
      image: ''
    },
    {
      /* cleartax.in, wearrae.in and underneat.in all refuse to be framed
         (x-frame-options SAMEORIGIN / DENY), so a live frame shows nothing.
         Each carries a screenshot of its home page instead; the link still
         opens the real site. Retake the screenshot if the site changes. */
      name: 'ClearTax',
      url: 'https://cleartax.in',
      services: ['Design'],
      note: '',
      image: '/assets/portfolio/websites/cleartax.jpg',
      preview: false
    },
    {
      name: 'Rae',
      url: 'https://wearrae.in',
      services: ['Web design', 'Development', 'E-commerce'],
      note: 'Online store for a women’s fashion label.',
      image: '/assets/portfolio/websites/wearrae.jpg',
      preview: false
    },
    {
      name: 'UNDERNEAT',
      url: 'https://underneat.in',
      services: ['Web design', 'Development', 'E-commerce'],
      note: 'Online store for a lingerie and shapewear brand.',
      image: '/assets/portfolio/websites/underneat.jpg',
      preview: false
    },
    {
      name: 'Leaf Creationism',
      url: 'https://leafcreationism.in',
      services: ['Web design', 'Development', 'SEO'],
      note: 'Our own studio site — design system, build, and search setup.',
      image: ''
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
  /* The dome renders each image at roughly 250px wide, so it loads 640px
     thumbnails rather than the full-resolution originals. Serving the
     originals here meant ~20MB of downloads just to fill the sphere. */
  const domeGalleryImages = portfolioItems
    .filter((item) => item.type === 'image')
    .map((item) => ({ src: toThumb(item.src), alt: item.title }));
  // Portfolio content is static; keep the carousel list stable across app updates.
  const homeCarouselItems = useMemo(() => portfolioItems
    .filter((item) => item.type === 'image')
    .map((item) => ({ src: toThumb(item.src), alt: item.title, title: item.title, subtitle: item.category })), []);
  /* Masonry expects { id, img, height }. Height drives the stagger: taking it
     from each piece's own span keeps the columns uneven, which is the point of
     a masonry layout, and keeps a given piece the same size on every visit. */
  /* Every public piece, images and video alike. The grid previously filtered
     to images only, so fourteen video works never appeared at all. Heights are
     no longer guessed here — the grid measures each item and sizes its tile to
     the real proportions, which is what stops artwork being cropped. */
  /* Memoised, and this matters more than it looks. Two intervals in this
     component — the ad carousel and the floating action button — re-render the
     whole app every few seconds. Rebuilt fresh each time, this array arrived at
     the grid as a new identity, so the grid re-measured all sixty pieces,
     recomputed its layout and re-ran GSAP across every tile, several times a
     minute, forever. The contents never change, so the identity should not
     either. */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const masonryItems = useMemo(() => portfolioItems.map((item) => ({
    id: item.src,
    img: toThumb(item.src),
    src: item.src,
    /* A still of each video's opening frame, so the tile is never blank on a
       phone before the video itself has loaded. */
    poster: item.type === 'video'
      ? `/assets/portfolio/thumbs/${item.src.split('/').pop().replace(/\.[^.]+$/, '.jpg')}`
      : undefined,
    type: item.type,
    title: item.title,
    category: item.category
  })), []);
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
      return result;
    } catch (error) {
      setFormStatus('error');
      return null;
    }
  };

  /* Every box is required, so the submit says which ones are missing rather
     than sitting there disabled with no explanation. */
  const validateReferenceForm = () => {
    const errors = {};
    if (!referenceForm.name.trim()) errors.name = 'Please add your name';
    if (!referenceForm.email.trim()) errors.email = 'Please add an email we can reply to';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(referenceForm.email.trim())) {
      errors.email = 'That email address does not look right';
    }
    if (!referenceForm.phone.trim()) errors.phone = 'Please add a number we can reach you on';
    if (!referenceForm.project.trim()) errors.project = 'Tell us what you want to build';
    return errors;
  };
  /* The gate both submit paths go through: the form's own button and the
     stepper's final one. Returns false when anything is missing, after marking
     the boxes and putting the cursor in the first of them — a long form on a
     phone should not leave the visitor hunting for the problem. */
  const guardReferenceForm = () => {
    const errors = validateReferenceForm();
    setReferenceErrors(errors);
    if (!Object.keys(errors).length) return true;

    setFormStatus('incomplete');
    const first = ['name', 'email', 'phone', 'project'].find((field) => errors[field]);
    document.querySelector(`[data-field="${first}"]`)?.focus();
    return false;
  };

  const submitReferenceEnquiry = async (event) => {
    event.preventDefault();
    if (!guardReferenceForm()) return;

    const result = await submitResendForm({
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

    if (result?.success) {
      /* The id is the studio's own reference for this enquiry — the same one
         printed in both emails — so the client's ticket and our inbox agree. */
      setEnquiryTicket({
        id: result.requestId || 'LEAF-REQUEST',
        name: referenceForm.name.trim(),
        date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
        services: selectedServiceItems.length ? `${selectedServiceItems.length} selected` : 'To discuss',
        references: selectedReferenceItems.length ? `${selectedReferenceItems.length} saved` : 'None yet'
      });
      setReferenceErrors({});
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
  /* The studio sign-off. Defined once and rendered at the end of more than one
     route, so the pages visitors actually land on all close the same way
     instead of stopping dead after their last section. */
  const studioFooter = (
    <footer className="dt-footer" aria-label="Leaf Creationism footer">
      <div className="dt-footer-grid dt-container"><div className="dt-footer-brand"><strong>Leaf Creationism</strong><p>An independent creative studio in Kerala, India. Strategy, design and technology under one roof.</p></div><div><strong>EXPLORE</strong><a href="/">Home</a><a href="/services">Services</a><a href="/portfolio">Our work</a></div><div><strong>PLAN</strong><a href="/workspace">Service store</a><a href="/launch-cloud">Launch Cloud</a><a href="/cart">Project cart</a></div><div><strong>SAY HELLO</strong><a href="mailto:leafcreationism@gmail.com">Email us ↗</a><a href="tel:+918589038479">+91 85890 38479</a><a href="https://share.google/JWbzJVOLgpjNOATfm" target="_blank" rel="noopener noreferrer">Kerala, India ↗</a></div></div>
      <div className="dt-footer-bottom dt-container"><span>© {currentTime.getFullYear()} Leaf Creationism</span><span>{isStudioOnline ? 'STUDIO OPEN' : 'BRIEF QUEUE OPEN'} · {indiaTimeLabel} IST</span></div>
    </footer>
  );

  return (
    <div
      className="app-shell min-h-screen bg-[#FDFDFD] text-gray-800 font-sans relative overflow-hidden selection:bg-[#2050E3] selection:text-white"
      /* Drives the editorial cream canvas, scoped so only the home page
         adopts it and every other route keeps its existing surface. */
      data-route={activeNav}
    >
      <LetterGlitch className="leaf-site-glitch" glitchColors={['#799fff','#61dca3']} baseColor="#8d9cb8" fontSize={14} spacing={0.6} density={0.9} baseOpacity={0.16} glitchAmount={0.5} speed={1} cursorRadius={140} clickEffect="tear" flow={0.5} dpr={1.5} aria-hidden="true" />
      {loaderPhase !== 'done' && <LoadingScreen leaving={loaderPhase === 'out'} quick={loaderQuick} />}
      {/* Soft Background Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-b from-[#FAE696]/20 to-transparent blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-[#D0F5E5]/30 to-transparent blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-[20%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#DFE4F4]/40 to-transparent blur-3xl -z-10 pointer-events-none"></div>

      <nav className={`dt-nav${headerHidden ? ' dt-nav-hidden' : ''}`} aria-label="Main navigation">
        <button className="dt-brand" type="button" onClick={() => navigateTo('home')}><img src={localLeafLogoWhite} alt=""/><span>Leaf Creationism</span></button>
        <div className={`dt-header-status ${isStudioOnline ? 'is-online' : 'is-offline'}`}>
          <div className="dt-header-time" aria-label={`Studio time ${indiaTimeLabel} India Standard Time`}>
            <div className="dt-header-time-line"><strong>{indiaTimeLabel}</strong><span>{isStudioOnline ? 'OPEN TILL 9 PM' : 'OPENS 10 AM'}</span></div>
            <small>{isStudioOnline ? 'LEAF ONLINE NOW' : 'QUEUE OPENS NEXT WINDOW'}</small>
          </div>
          <button className="dt-nav-cta" type="button" onClick={() => navigateTo('contact')}>CONTACT US</button>
        </div>
      </nav>

      {/* Home */}
      {activeNav === 'home' && <DovetailHome navigateTo={navigateTo} openServiceModal={openServiceModal} serviceCategories={serviceCategories} serviceTaglines={serviceTaglines} studioHeads={studioHeads} websiteProjects={websiteProjects} portfolioImages={homeCarouselItems} />}

      {activeNav === 'contact' && <ContactPage />}

      {/* Services */}
      {activeNav === 'services' && <DovetailServices capabilities={capabilities} serviceCategories={serviceCategories} navigateTo={navigateTo} openServiceModal={openServiceModal} />}

      {/* Unified Schedule + Delivery Workspace */}
      {/* SERVICE STORE — browse services like products, add to cart or buy now */}
      {activeNav === 'workspace' && (
        <main className="store-page max-w-6xl mx-auto px-4 sm:px-6 pt-5 sm:pt-10 pb-36 relative z-10 animate-fade-in">
          <header className="store-head">
            <div>
              <span className="store-eyebrow">
                <Store size={13} /> Leaf Creationism / Service Store
              </span>
              <h1>Know the price<br />before you enquire.</h1>
              <p>
                Eight services, clear starting prices, real delivery windows. Add what you
                need to the cart and send a single enquiry — we reply with a written quote
                within 2 hours during studio hours.
              </p>
              <div className="store-head-trust">
                <span><Check size={13} /> Written quote first</span>
                <span><Check size={13} /> Fixed delivery windows</span>
                <span><Check size={13} /> One in-house team</span>
              </div>
            </div>
            <button type="button" className="store-cart-chip" onClick={() => navigateTo('referenceCart')}>
              <span className="store-cart-chip-icon">
                <ShoppingBag size={18} />
                {selectedServiceItems.length > 0 && (
                  <i aria-hidden="true">{selectedServiceItems.length}</i>
                )}
              </span>
              <span className="store-cart-chip-copy">
                <strong>
                  {selectedServiceItems.length === 0
                    ? 'Your cart is empty'
                    : `${selectedServiceItems.length} ${selectedServiceItems.length === 1 ? 'service' : 'services'} added`}
                </strong>
                <small>{selectedServiceItems.length === 0 ? 'Add a service to begin' : 'Review & send enquiry'}</small>
              </span>
              <ArrowRight size={16} />
            </button>
          </header>

          <div className="store-filters" role="group" aria-label="Filter services">
            {['All', 'Design', 'Development', 'Marketing'].map((group) => (
              <button
                key={group}
                type="button"
                className={storeFilter === group ? 'is-active' : ''}
                onClick={() => setStoreFilter(group)}
                aria-pressed={storeFilter === group}
              >
                {group}
              </button>
            ))}
          </div>

          <div className="store-grid">
            {serviceCategories
              .filter((service) => storeFilter === 'All' || servicePricing[service.id]?.group === storeFilter)
              .map((service, index) => {
                const price = servicePricing[service.id];
                const inCart = completedSteps.includes(service.id);
                return (
                  <article
                    key={service.id}
                    className={`store-card ${inCart ? 'is-in-cart' : ''}`}
                    data-accent={index % 4}
                  >
                    {price?.badge && <em className="store-card-badge">{price.badge}</em>}

                    <button
                      type="button"
                      className="store-card-media"
                      onClick={() => openServiceModal(service.id)}
                      aria-label={`View ${service.name} details`}
                    >
                      <span className="store-card-glass" aria-hidden="true" />
                      <span className="store-card-group">{price?.group}</span>
                      <span className="store-card-view">View details <ArrowUpRight size={12} /></span>
                    </button>

                    <div className="store-card-body">
                      <h2>{service.name}</h2>
                      <p>{serviceTaglines[service.id]}</p>

                      <ul className="store-card-includes">
                        {price?.includes?.map((item) => (
                          <li key={item}><Check size={12} /> {item}</li>
                        ))}
                      </ul>

                      <div className="store-card-price">
                        <span className="store-price-label">Starting from</span>
                        <strong>{formatInr(price?.from ?? 0)}</strong>
                        <small><Clock size={11} /> Delivery in {price?.weeks}</small>
                      </div>
                    </div>

                    <div className="store-card-actions">
                      <button
                        type="button"
                        className={`store-btn is-cart ${inCart ? 'is-added' : ''}`}
                        onClick={() => toggleStep(service.id)}
                        aria-pressed={inCart}
                      >
                        {inCart ? <><Check size={16} /> Added</> : <><Plus size={16} /> Add to cart</>}
                      </button>
                      <button
                        type="button"
                        className="store-btn is-buy"
                        onClick={() => enquireAboutService(service.id)}
                      >
                        Buy now
                      </button>
                    </div>
                  </article>
                );
              })}
          </div>

          <section className="store-assurance">
            {[
              [Shield, 'Transparent pricing', 'A written quote is agreed before work begins — no surprise costs later.'],
              [Clock, 'Clear timelines', 'Every service ships to an agreed delivery window.'],
              [Check, 'One team, end to end', 'Design, build, and campaigns handled in house.']
            ].map(([Icon, title, text]) => (
              <div key={title}>
                <span><Icon size={18} /></span>
                <div>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </div>
              </div>
            ))}
          </section>

          <section className="store-callout">
            <div>
              <span>Not sure what you need?</span>
              <h2>Book a free 25-minute discovery call.</h2>
              <p>We map scope, budget, and the best first step — no obligation.</p>
            </div>
            <a href={appointmentWhatsAppHref} target="_blank" rel="noopener noreferrer">
              Talk on WhatsApp <ArrowUpRight size={16} />
            </a>
          </section>
        </main>
      )}

      {/* Retired standalone calendar view */}
      {false && activeNav === 'calendar' && (
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
                <LeafIcon size={42} />
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

      {/* Retired standalone projects view */}
      {false && activeNav === 'projects' && (
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
                <LeafIcon size={33} />
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
                  <LeafIcon size={36} />
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
              <button type="button" onClick={() => navigateTo('workspace')}>Plan my launch <ArrowUpRight size={16} /></button>
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
              {launchPlans.map((plan, index) => {
                const PlanIcon = plan.icon;
                const isSelected = selectedLaunchPlan === index;
                return (
                  <article
                    key={plan.id}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isSelected}
                    className={isSelected ? 'is-selected' : ''}
                    onClick={() => setSelectedLaunchPlan(index)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setSelectedLaunchPlan(index);
                      }
                    }}
                  >
                    {plan.badge && <em className="launch-tier-badge">{plan.badge}</em>}
                    <div className="launch-tier-top">
                      {PlanIcon && <span className="launch-tier-icon"><PlanIcon size={18} /></span>}
                      <span className="launch-tier-label">{plan.label}</span>
                    </div>
                    <h3>{plan.title}</h3>
                    <p>{plan.desc}</p>
                    <strong>{plan.price}</strong>
                    <small>{plan.priceNote}</small>
                    <ul>{plan.items.map((item) => <li key={item}><Check size={14} /> {item}</li>)}</ul>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        chooseLaunchPlan(plan, index);
                      }}
                    >
                      {isSelected ? <><Check size={15} /> Selected · Continue</> : 'Choose plan'}
                    </button>
                  </article>
                );
              })}
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
            <button type="button" onClick={() => navigateTo('workspace')}>Book a launch call <ArrowRight size={16} /></button>
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
                <button onClick={() => navigateTo('workspace')}>Start launch plan <ArrowRight size={15} /></button>
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
                <button onClick={() => navigateTo('workspace')}>Plan my launch <ArrowUpRight size={16} /></button>
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
        /* Editorial layout: black on white, type-led, one section per idea.
           The old bento frame boxed the work into a narrow right-hand column,
           which is what made the media look cropped and the sites unreadable.
           Here every section runs the full width of the page, in order:
           title, overview, note, websites, archive, facts, footer. */
        <main className="portfolio-editorial-page relative z-10 animate-fade-in">
          <section className="pe-title">
            <span className="pe-label">( Leaf Creationism / Portfolio )</span>
            <h1>Selected work</h1>
          </section>

          <section className="pe-para">
            <span className="pe-label">( Overview )</span>
            <p className="pe-statement">
              One studio for motion, 3D worlds, AI ads, graphic systems, and the
              websites they run on — built to move brands forward.
            </p>
          </section>

          <section className="pe-note">
            <span className="pe-label">( Notes )</span>
            <p className="pe-statement">
              Many projects stay private. Everything on this page is shown with
              client permission.
            </p>
          </section>

          {websiteProjects.length > 0 && (
            <section className="pe-section" aria-label="Website projects by Leaf Creationism">
              <div className="pe-head">
                <div>
                  <span className="pe-num">01</span>
                  <span className="pe-label">( Websites )</span>
                </div>
                <p>
                  Sites we designed, built and launched. Select a project to visit the website.
                </p>
              </div>

              <SiteShowcase sites={websiteProjects} />
            </section>
          )}

          <section className="pe-section" aria-label="Portfolio archive">
            <div className="pe-head pe-head-right">
              <div>
                <span className="pe-num">02</span>
                <span className="pe-label">( Archive )</span>
              </div>
              <p>
                {portfolioItems.length} public pieces, stills and films together.
                Keep scrolling for the whole archive; tap any piece to add it to
                your references.
              </p>
            </div>

            {/* Every tile is sized to its own media, so nothing is cropped, and
                clicking one adds it to the reference cart the enquiry form
                already reads. */}
            <Masonry
              items={masonryItems}
              selectedIds={referencePortfolioItems}
              onItemClick={(item) => {
                const match = portfolioItems.find((entry) => entry.src === item.id);
                if (match) togglePortfolioReference(match);
              }}
              animateFrom="bottom"
              scaleOnHover
              hoverScale={0.97}
              /* The intro blurs each tile from 10px to 0. Sixty animated blurs
                 is the single most expensive thing on this page for a low-end
                 phone, and it buys a moment of polish nobody asked for — the
                 tiles still fade and rise there. */
              blurToFocus={!isMobileViewport}
            />
          </section>

          <section className="pe-facts" aria-label="Portfolio at a glance">
            <div>
              <span>( 01 )</span>
              <strong>{portfolioItems.length}</strong>
              <p>Public works in this archive</p>
            </div>
            <div>
              <span>( 02 )</span>
              <strong>{portfolioItems.filter((item) => item.type === 'video').length}</strong>
              <p>Video pieces, playing on hover</p>
            </div>
            <div>
              <span>( 03 )</span>
              <strong>{websiteProjects.length}</strong>
              <p>Websites designed, built and launched</p>
            </div>
            <div>
              <span>( 04 )</span>
              <strong>Private</strong>
              <p>Client-first archive — permission before publication</p>
            </div>
          </section>

        </main>
      )}

      {activeNav === 'referenceCart' && (
        <main className="reference-cart-page request-checkout-page max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-36 relative z-10 animate-fade-in">
          {/* Top Hero Banner */}
          <section className="cart-stepper-header mb-6 rounded-[2rem] bg-[#090d16] border border-white/10 p-6 flex flex-wrap items-center justify-between gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#153bb5] to-[#406af5] flex items-center justify-center text-white shadow-[0_8px_20px_rgba(32,80,227,0.35)]">
                <ShoppingBag size={24} />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#60a5fa] uppercase block">Leaf Creationism / Project Cart</span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Your project, beautifully planned.</h1>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#05070c] border border-white/10 text-xs font-semibold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{selectedServiceItems.length} service{selectedServiceItems.length === 1 ? '' : 's'}</span>
              <span className="opacity-40">•</span>
              <strong className="text-emerald-400">₹0 due now</strong>
            </div>
          </section>

          {/* Luxury Animated Stepper */}
          <Stepper
            initialStep={1}
            stepLabels={['Services', 'Strategy Call', 'Contact']}
            /* Two faults here, both fixed by never letting the stepper
               "complete".

               It used to mark the flow finished the instant this button was
               pressed and only then trigger the submit, so an empty form
               showed a completed stepper and sent nothing. And its completed
               state renders no content at all — which would have thrown away
               the ticket, since the ticket appears inside this last step.

               So the button submits and the stepper stays where it is: an
               invalid form shows its errors, a valid one shows the ticket. */
            onBeforeFinalStep={() => {
              submitReferenceEnquiry({ preventDefault: () => {} });
              return false;
            }}
          >
            {/* STEP 1: Core Services */}
            <Step>
              <div className="step-content-head">
                <div>
                  <h3>Selected Service Suite</h3>
                  <p>Choose the core creative and engineering services for your project.</p>
                </div>
                <button type="button" className="step-action-btn" onClick={() => navigateTo('workspace')}>
                  <Plus size={14} />
                  <span>Add Services</span>
                </button>
              </div>

              <div className="reference-service-summary pt-2">
                {selectedServiceItems.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedServiceItems.map((service) => {
                      const ServiceIcon = service.icon;
                      return (
                        <div className="reference-service-chip" key={service.id}>
                          <ServiceIcon size={18} />
                          <span>
                            <strong>{service.title}</strong>
                            <small>{service.desc}</small>
                          </span>
                          <button type="button" onClick={() => toggleStep(service.id)} aria-label={`Remove ${service.title}`}>
                            <X size={14} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="reference-empty-card">
                    <strong>No service selected yet</strong>
                    <p>Choose services from the store, or continue with your custom brief.</p>
                    <button type="button" onClick={() => navigateTo('workspace')}>Choose services</button>
                  </div>
                )}
              </div>
            </Step>

            {/* STEP 2: Strategy Call — picked right here, no separate page */}
            <Step>
              <div className="step-content-head">
                <div>
                  <h3>Strategy Consultation & Schedule</h3>
                  <p>Pick a session type, date, and time with the Leaf creative directors.</p>
                </div>
              </div>

              <div className="studio-workspace reference-schedule-picker">
                <div className="workspace-call-types" role="group" aria-label="Choose call type">
                  {scheduleTypes.map((type) => {
                    const TypeIcon = type.icon;
                    const isSelected = selectedScheduleType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        className={isSelected ? 'is-selected' : ''}
                        onClick={() => setSelectedScheduleType(type.id)}
                        aria-pressed={isSelected}
                      >
                        <TypeIcon size={17} />
                        <span><strong>{type.title}</strong><small>{type.time}</small></span>
                        {isSelected && <Check size={15} />}
                      </button>
                    );
                  })}
                </div>

                <div className="glass-booking-layout">
                <div className="glass-booking-date">
                <div className="workspace-date-label">
                  <span>Pick a date</span>
                  <small>Next seven studio days</small>
                </div>
                <div className="glass-booking-calendar" aria-label="Choose appointment day">
                  <div className="glass-booking-calendar-head">
                    <strong>{bookingMonth.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</strong>
                    <div>
                      <button type="button" onClick={() => setBookingMonthOffset((month) => Math.max(0, month - 1))} disabled={bookingMonthOffset === 0} aria-label="Previous month"><ChevronLeft size={17} /></button>
                      <button type="button" onClick={() => setBookingMonthOffset((month) => Math.min(maxBookingMonthOffset, month + 1))} disabled={bookingMonthOffset >= maxBookingMonthOffset} aria-label="Next month"><ChevronRight size={17} /></button>
                    </div>
                  </div>
                  <div className="glass-booking-calendar-grid">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => <span className="glass-calendar-weekday" key={`${day}-${index}`}>{day}</span>)}
                    {bookingCalendarDays.map(({ date, appointment, inMonth }) => (
                      <button
                        key={date.toDateString()}
                        type="button"
                        onClick={() => appointment && setSelectedAppointmentDay(appointment.id)}
                        disabled={!appointment || !inMonth}
                        className={`${selectedAppointmentDay === appointment?.id ? 'is-selected' : ''} ${inMonth ? '' : 'is-outside'}`}
                        aria-label={`${date.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}${appointment && inMonth ? ', available' : ', unavailable in this month view'}`}
                        aria-pressed={Boolean(appointment && inMonth && selectedAppointmentDay === appointment.id)}
                      >{date.getDate()}</button>
                    ))}
                  </div>
                  <p><span /> Available for a studio call <b>{selectedAppointment.full}</b></p>
                </div>
                </div>

                <div className="glass-booking-times">
                <div className="workspace-date-label">
                  <span>Pick a time</span>
                  <small>Fixed IST slots</small>
                </div>
                <div className="workspace-time-grid" aria-label="Choose appointment time">
                  {appointmentSlots.map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setSelectedAppointmentTime(slot.time)}
                      className={selectedAppointmentTime === slot.time ? 'is-selected' : ''}
                      aria-pressed={selectedAppointmentTime === slot.time}
                    >
                      <strong>{slot.time}</strong>
                      <span>{slot.label}</span>
                    </button>
                  ))}
                </div>
                <div className="glass-booking-note"><Check size={16} /> No payment is required to request a call.</div>
                </div>
                </div>
              </div>

              <div className="reference-appointment-card">
                <div>
                  <span>Online Consultation</span>
                  <strong>{selectedSchedule.title}</strong>
                  <p>{selectedAppointment.full} / {selectedSlot.time} IST / {selectedSlot.note}</p>
                </div>
              </div>
            </Step>

            {/* STEP 4: Client Contact & Project Brief */}
            <Step>
              <div className="step-content-head">
                <div>
                  <h3>Client Contact & Project Brief</h3>
                  <p>Tell us about your brand and where we should send the proposal.</p>
                </div>
              </div>

              <form
                className="reference-enquiry-form"
                onSubmit={submitReferenceEnquiry}
              >
                {formStatus === 'reference-sent' && enquiryTicket && (
                  <div className="reference-ticket-panel">
                    <div className="reference-success-orbit">
                      <Check size={22} />
                    </div>
                    <strong>Request received</strong>
                    <p>
                      Your ticket is below and a copy is on its way to your inbox.
                      Quote <b>{enquiryTicket.id}</b> if you write to us.
                    </p>
                    <EnquiryTicket ticket={enquiryTicket} />
                  </div>
                )}

                {formStatus === 'incomplete' && (
                  <p className="reference-form-alert" role="alert">
                    Please fill every box before sending — we need all of it to write you a
                    proper quote.
                  </p>
                )}

                {/* The boxes come down once the request is in. Leaving an empty
                    form under the ticket read as though the ticket had been
                    issued before anything was filled in — and invited a second,
                    blank submission. */}
                {!enquiryTicket && (
                <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label>
                    Name
                    <input
                      name="Name"
                      data-field="name"
                      type="text"
                      aria-invalid={Boolean(referenceErrors.name)}
                      className={referenceErrors.name ? 'is-missing' : undefined}
                      value={referenceForm.name}
                      onChange={(event) => updateReferenceField('name', event.target.value)}
                      placeholder="Your full name"
                    />
                    {referenceErrors.name && <em className="field-error">{referenceErrors.name}</em>}
                  </label>
                  <label>
                    Gmail / Email
                    <input
                      name="Email"
                      data-field="email"
                      type="email"
                      aria-invalid={Boolean(referenceErrors.email)}
                      className={referenceErrors.email ? 'is-missing' : undefined}
                      value={referenceForm.email}
                      onChange={(event) => updateReferenceField('email', event.target.value)}
                      placeholder="you@gmail.com"
                    />
                    {referenceErrors.email && <em className="field-error">{referenceErrors.email}</em>}
                  </label>
                </div>

                <label>
                  WhatsApp Phone Number
                  <input
                    name="Phone"
                    data-field="phone"
                    type="tel"
                    aria-invalid={Boolean(referenceErrors.phone)}
                    className={referenceErrors.phone ? 'is-missing' : undefined}
                    value={referenceForm.phone}
                    onChange={(event) => updateReferenceField('phone', event.target.value)}
                    placeholder="+91 ..."
                  />
                  {referenceErrors.phone && <em className="field-error">{referenceErrors.phone}</em>}
                </label>

                <label>
                  What do you want to create?
                  <textarea
                    name="Project brief"
                    data-field="project"
                    aria-invalid={Boolean(referenceErrors.project)}
                    className={referenceErrors.project ? 'is-missing' : undefined}
                    value={referenceForm.project}
                    onChange={(event) => updateReferenceField('project', event.target.value)}
                    placeholder="Tell us about your brand, product, or campaign vision."
                    rows="3"
                  />
                  {referenceErrors.project && <em className="field-error">{referenceErrors.project}</em>}
                </label>

                <div className="reference-privacy-note">
                  <Shield size={18} />
                  <p>
                    Privacy policy: we use your details only to understand your enquiry and contact you about this project. Your data, references, and brief stay confidential with Leaf Creationism.
                  </p>
                </div>

                <div className="reference-submit-row">
                  <button
                    id="reference-cart-submit-btn"
                    type="submit"
                    /* Never disabled for an empty form: pressing it is how a
                       visitor finds out what is missing. */
                    className={`reference-submit-button ${formStatus === 'sending' ? 'is-sending' : ''} ${formStatus === 'reference-sent' ? 'is-sent' : ''}`}
                    disabled={formStatus === 'sending' || formStatus === 'reference-sent'}
                  >
                    {formStatus === 'reference-sent' ? <Check size={18} /> : <Mail size={18} />}
                    {formStatus === 'sending' ? 'Preparing request...' : formStatus === 'reference-sent' ? 'Sent - 24h reply' : 'Submit Project Request'}
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
                </>
                )}

                {formStatus === 'reference-sent' && (
                  <p className="reference-form-success">Enquiry sent. We have your services, appointment, references and contact details — a copy of this ticket is on its way to your inbox.</p>
                )}
                {formStatus === 'error' && (
                  <p className="reference-form-error">Could not send right now. Please try again or use WhatsApp.</p>
                )}
              </form>
            </Step>
          </Stepper>
        </main>
      )}

      {studioFooter}

      {/* One morphing action circle: WhatsApp changes into project cart */}
      <button
        type="button"
        className={`unified-floating-action is-${floatingActionMode} ${referenceCartPulse ? 'is-pulsing' : ''}`}
        onClick={() => {
          if (floatingActionMode === 'whatsapp') {
            window.open('https://wa.me/918589038479', '_blank', 'noopener,noreferrer');
            return;
          }
          navigateTo('referenceCart');
        }}
        aria-label={floatingActionMode === 'whatsapp'
          ? 'Chat with Leaf Creationism on WhatsApp'
          : `Open project cart${hasEnquiryCartIntent ? ` with ${selectedServiceItems.length + selectedReferenceItems.length} selections` : ''}`
        }
        title={floatingActionMode === 'whatsapp' ? 'WhatsApp' : 'Project cart'}
      >
        <span className={`unified-floating-icon is-whatsapp ${floatingActionMode === 'whatsapp' ? 'is-active' : ''}`}>
          <WhatsAppIcon size={27} />
        </span>
        <span className={`unified-floating-icon is-cart ${floatingActionMode === 'cart' ? 'is-active' : ''}`}>
          <ShoppingBag size={26} />
        </span>
        {hasEnquiryCartIntent && (
          <strong className={floatingActionMode === 'cart' ? 'is-visible' : ''}>
            {selectedServiceItems.length + selectedReferenceItems.length}
          </strong>
        )}
      </button>

      {/* Floating Bottom Navigation */}
      <div className="leaf-dock-shell fixed bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-40 max-w-[calc(100vw-1.5rem)] pb-[env(safe-area-inset-bottom)]">
        <DockNavigation items={navItems} activeId={activeNav} onNavigate={navigateTo} />
      </div>


      {showServiceModal && activeCategoryData && (
        <div className="dt-modal" role="dialog" aria-modal="true" aria-labelledby="dt-modal-title">
          <div className="dt-modal-bar"><button type="button" className="dt-secondary" onClick={() => setShowServiceModal(false)}><X size={16}/> Close</button><span className="dt-eyebrow">LEAF / SERVICE DETAILS</span><button type="button" className="dt-primary" onClick={() => enquireAboutService(activeCategoryData.id)}>Get a quote <ArrowUpRight size={16}/></button></div>
          <div className="dt-container dt-modal-content"><span className="dt-eyebrow">OUR SERVICES / {activeCategoryData.name}</span><h1 id="dt-modal-title">{activeCategoryData.name}</h1><p className="dt-modal-lede">{serviceTaglines[activeCategoryData.id]}</p><div className="dt-modal-summary"><div><span className="dt-eyebrow">STARTING FROM</span><strong>{formatInr(servicePricing[activeCategoryData.id]?.from ?? 0)}</strong><p>A written quote is agreed before work begins.</p></div><div><span className="dt-eyebrow">DELIVERY WINDOW</span><strong>{servicePricing[activeCategoryData.id]?.weeks}</strong><p>Final timing depends on your project scope.</p></div></div><div className="dt-modal-includes"><span className="dt-eyebrow">WHAT'S INCLUDED</span><h2>Built around your brief.</h2><div>{servicePricing[activeCategoryData.id]?.includes?.map(item => <p key={item}><Check size={16}/>{item}</p>)}</div></div><button type="button" className="dt-primary" onClick={() => enquireAboutService(activeCategoryData.id)}>Enquire about {activeCategoryData.name} <ArrowUpRight size={16}/></button></div>
        </div>
      )}

    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
