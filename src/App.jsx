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
// Home page editorial system — must follow MobilePerf so its flat paper
// surfaces win over the shared glass treatments.
import './HomeIgnite.css';
import { useSectionReveals } from './HomeReveals';
import SplitFlapText from './SplitFlapText';
import ProfileCard from './ProfileCard';
import Stepper, { Step } from './Stepper';
import InfiniteSpiral from './InfiniteSpiral';
import Masonry from './Masonry';
import OptionWheel from './OptionWheel';
import SiteShowcase from './SiteShowcase';
import './PortfolioEditorial.css';
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
  Plus,
  Sun,
  Moon
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

const ThemeSwitch = ({ theme, onToggle, iconSize = 16 }) => {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="header-theme-switch"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Sun size={iconSize} className={`theme-switch-sun ${isDark ? '' : 'is-active'}`} />
      <Moon size={iconSize} className={`theme-switch-moon ${isDark ? 'is-active' : ''}`} />
    </button>
  );
};

const DockNavigation = ({ items, activeId, onNavigate }) => {
  const dockRef = useRef(null);
  const animationFrameRef = useRef(null);
  const baseSize = 48;
  const distance = 92;
  const magnification = 1.58;

  const animateDock = () => {
    const dock = dockRef.current;
    if (!dock) {
      animationFrameRef.current = null;
      return;
    }

    let isMoving = false;
    dock.querySelectorAll('[data-dock-wrap]').forEach((wrapper) => {
      const current = Number(wrapper.dataset.currentSize || baseSize);
      const target = Number(wrapper.dataset.targetSize || baseSize);
      const next = current + (target - current) * 0.18;
      const settled = Math.abs(target - next) < 0.08;
      const size = settled ? target : next;

      wrapper.dataset.currentSize = String(size);
      wrapper.style.width = `${size}px`;
      const button = wrapper.querySelector('[data-dock-item]');
      if (button) button.style.setProperty('--dock-size', `${size}px`);
      if (!settled) isMoving = true;
    });

    animationFrameRef.current = isMoving ? requestAnimationFrame(animateDock) : null;
  };

  const startDockAnimation = () => {
    if (animationFrameRef.current === null) {
      animationFrameRef.current = requestAnimationFrame(animateDock);
    }
  };

  const setDockTargets = (getSize) => {
    const dock = dockRef.current;
    if (!dock) return;
    dock.querySelectorAll('[data-dock-wrap]').forEach((wrapper, index) => {
      wrapper.dataset.targetSize = String(getSize(wrapper, index));
    });
    startDockAnimation();
  };

  const resetDock = () => {
    setDockTargets(() => baseSize);
  };

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch') return;
    const dock = dockRef.current;
    if (!dock) return;

    setDockTargets((wrapper) => {
      const rect = wrapper.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const delta = Math.abs(event.clientX - center);
      const gaussian = (magnification - 1) * Math.exp(-(delta * delta) / (2 * distance * distance)) + 1;
      return Math.min(baseSize * magnification, baseSize * gaussian);
    });
  };

  useEffect(() => {
    resetDock();
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={dockRef}
      className="leaf-dock"
      role="navigation"
      aria-label="Primary navigation"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetDock}
    >
      {items.map((item) => {
        const IconComponent = item.icon;
        const isActive = activeId === item.id;
        return (
          <div className="leaf-dock-item-wrap" data-dock-wrap key={item.id}>
            <button
              type="button"
              data-dock-item
              className={`leaf-dock-item ${isActive ? 'is-active' : ''}`}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => onNavigate(item.id)}
            >
              <IconComponent />
              {item.hasNotification && <i className="leaf-dock-notification"></i>}
            </button>
            <span className="leaf-dock-tooltip" aria-hidden="true">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};

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
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const savedTheme = window.localStorage.getItem('leaf-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [activeAd, setActiveAd] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [activeCategory, setActiveCategory] = useState('uiux'); 
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);
  const [selectedScheduleType, setSelectedScheduleType] = useState('discovery');
  const [selectedLaunchPlan, setSelectedLaunchPlan] = useState(1);
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
  const localAdVideo = "/assets/media/leaf-ad-carousel.mp4";
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
  useEffect(() => {
    const node = headsRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setHeadsVisible(true);
      return;
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
  }, []);

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
    const timer = window.setInterval(() => {
      setFloatingActionMode((mode) => mode === 'whatsapp' ? 'cart' : 'whatsapp');
    }, 3400);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem('leaf-theme', theme);
  }, [theme]);

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

  // Entrance animations for the home page sections. This call previously sat
  // inside the account block and was removed with it, leaving the hook
  // imported but never invoked — so nothing ever received .ig-reveal.
  useSectionReveals(activeNav === 'home');

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
      name: 'Mallugrapher UK',
      url: 'https://mallugrapheruk.com',
      services: ['Web design', 'Development'],
      note: 'Portfolio site for a Plymouth-based photographer.',
      image: ''
    },
    {
      name: 'NAINU Boutique',
      url: 'https://nainuboutique.shop',
      services: ['Web design', 'Development', 'E-commerce'],
      note: 'Online store for an Indian clothing boutique.',
      image: ''
    },
    {
      name: 'UNIQ Floors',
      url: 'https://jibinchacko.online',
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
      /* cleartax.in sends x-frame-options: SAMEORIGIN, so it cannot be shown
         live in a frame the way the others are — the card falls back to the
         domain panel and the link still opens the real site. */
      name: 'ClearTax',
      url: 'https://cleartax.in',
      services: ['Design'],
      note: '',
      image: '',
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
  /* Both the advantage cylinder and the portfolio dome render these images at
     roughly 250px wide, so they load the 640px thumbnails instead of the
     multi-megabyte originals. */
  /* Same reason as masonryItems: a new array each render restarted the
     spiral's observers and animation loop every few seconds. */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const advantageSpiralImages = useMemo(
    () => leafAdvantageMedia.slice(0, 10).map((item) => ({ src: toThumb(item.src), alt: item.label })),
    []
  );

  /* The studio sign-off. Defined once and rendered at the end of more than one
     route, so the pages visitors actually land on all close the same way
     instead of stopping dead after their last section. */
  const studioFooter = (
    <section className="home-status-marquee-section relative left-1/2 w-screen -translate-x-1/2 z-10" aria-label="Leaf Creationism live project status">
      <div className="status-footer-shell">
        <div className="status-footer-glow status-footer-glow-one" aria-hidden="true" />
        <div className="status-footer-glow status-footer-glow-two" aria-hidden="true" />

        <div className="status-footer-topline">
          <span>Leaf Creationism / studio signal</span>
          <span className={`status-footer-live ${isStudioOnline ? 'is-live' : 'is-offline'}`}>
            <i aria-hidden="true" />
            {isStudioOnline ? 'Available for new projects' : 'Brief queue open'}
          </span>
        </div>

        <div className="status-footer-hero">
          <div>
            <p>One focused creative team.</p>
            <h2>Ideas in.<br /><span>Impact out.</span></h2>
          </div>
          <a className="status-footer-cta" href="mailto:leafcreationism@gmail.com">
            <span>Start a project</span>
            <b><ArrowUpRight size={21} /></b>
          </a>
        </div>

        <div className="status-footer-metrics" aria-label="Studio performance">
          <article>
            <span>01 / Launches</span>
            <strong>124</strong>
            <p>Products launched</p>
          </article>
          <article>
            <span>02 / Network</span>
            <strong>86</strong>
            <p>Global partners</p>
          </article>
          <article>
            <span>03 / Trust</span>
            <strong>98%</strong>
            <p>Client retention</p>
          </article>
          <article>
            <span>04 / Experience</span>
            <strong>{studioActiveYears}Y</strong>
            <p>{studioActiveExtraDays} days beyond</p>
          </article>
        </div>

        <div className="status-footer-contact-rail">
          <span>© {currentTime.getFullYear()} Leaf Creationism</span>
          <a href="mailto:leafcreationism@gmail.com">leafcreationism@gmail.com</a>
          <a href="tel:+918589038479">+91 85890 38479</a>
          <span>{indiaTimeLabel} IST</span>
        </div>
      </div>
    </section>
  );

  return (
    <div
      className="app-shell min-h-screen bg-[#FDFDFD] text-gray-800 font-sans relative overflow-hidden selection:bg-[#2050E3] selection:text-white"
      /* Drives the editorial cream canvas, scoped so only the home page
         adopts it and every other route keeps its existing surface. */
      data-route={activeNav}
    >
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
          <ThemeSwitch
            theme={theme}
            onToggle={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
            iconSize={15}
          />
          <button className="header-status-action" type="button" onClick={() => navigateTo('workspace')}>
            CONTACT US
          </button>
        </div>
      </nav>

      {/* Main Content - Home View */}
      {activeNav === 'home' && (
        <main className="home-screen max-w-6xl mx-auto px-4 sm:px-6 pt-0 sm:pt-4 pb-0 relative z-10 animate-fade-in flex flex-col gap-16 lg:gap-24">
          
          {/* SECTION 1: Top Hero (Two Columns - Completely separated from About) */}
          <div className="home-hero-layout grid grid-cols-1 gap-8 items-center relative z-20">

            {/* Hero Text, Ads, and Services Icons */}
            <div className="home-hero-copy w-full max-w-2xl mx-auto pt-2 sm:pt-4 lg:pt-8 flex flex-col gap-6 lg:gap-8">
              
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
              {/* Type-led hero: eyebrow, a plain statement of what the studio
                  does and who for, then two actions. No ornament. */}
              <div className="home-welcome-copy ig-hero">
                <span className="ig-eyebrow">Creative studio · Kerala, India</span>

                {/* Four words instead of a sentence. What the studio makes is
                    named in the line underneath and again in the service grid,
                    so the headline's job is to be worth stopping for rather
                    than to list everything. */}
                <h1 className="ig-display ig-display-short">
                  We build the reason<br />
                  people <em>choose you.</em>
                </h1>

                <p className="ig-lede">
                  UI/UX, web and mobile development, branding, AI advertising and motion —
                  delivered by one focused team, from first sketch to launch day.
                </p>

                {/* Services on a departure board: the page's one moving
                    element, and it puts the studio's range above the fold
                    instead of leaving it to the grid further down. */}
                <div className="ig-board">
                  <span className="ig-eyebrow">What we do</span>
                  <SplitFlapText
                    words={['UI/UX', 'WEBSITES', 'MOBILE APPS', 'AI ADS', 'BRANDING', 'MOTION']}
                    padTo={11}
                    charset="alpha"
                    tileColor="#14161a"
                    textColor="#ffffff"
                    tileRadius={6}
                    gap={4}
                    fontSize={26}
                    flipsPerChar={6}
                    cycleDelay={2200}
                  />
                </div>

                <div className="ig-actions">
                  <button type="button" className="ig-btn ig-btn-solid" onClick={() => navigateTo('workspace')}>
                    Start a project
                  </button>
                  <button type="button" className="ig-btn ig-btn-line" onClick={() => navigateTo('portfolio')}>
                    See our work
                  </button>
                </div>

                <dl className="ig-facts">
                  <div className="ig-fact">
                    <span className="ig-fact-index" aria-hidden="true">01</span>
                    <dt>8</dt>
                    <dd>services under<br />one roof</dd>
                  </div>
                  <div className="ig-fact">
                    <span className="ig-fact-index" aria-hidden="true">02</span>
                    <dt>10</dt>
                    <dd>cities served<br />across Kerala</dd>
                  </div>
                  <div className="ig-fact">
                    <span className="ig-fact-index" aria-hidden="true">03</span>
                    <dt>1</dt>
                    <dd>team, idea<br />to launch</dd>
                  </div>
                </dl>
              </div>

              {/* Elastic Service Stack */}
              <div className="service-icon-shell elastic-service-shell">
                <ElasticServiceStack
                  items={serviceCategories}
                  onSelect={openServiceModal}
                  itemSize={isMobileViewport ? 78 : 100}
                  overlap={isMobileViewport ? 30 : 38}
                  pushForce={isMobileViewport ? 12 : 16}
                />
              </div>
            </div>

          </div>


          {/* Positioning statement — two columns, hairline rule, no card. */}
          <section className="ig-statement" aria-label="How Leaf Creationism works">
            <div>
              <span className="ig-eyebrow">How we work</span>
              <h2>One team, from first sketch to <em>launch day</em>.</h2>
            </div>
            <div>
              <p>
                No account managers and no handoffs to a junior team. The people who design
                and direct your project are the ones you talk to — through strategy, design,
                build and launch.
              </p>

              {/* The three promises, each on its own accent marker, so the
                  claim reads as specific rather than as a paragraph. */}
              <ul className="ig-promises">
                <li><span>01</span>You talk to the people doing the work</li>
                <li><span>02</span>One team across design, build and launch</li>
                <li><span>03</span>A written quote before anything starts</li>
              </ul>

              <button type="button" className="ig-btn ig-btn-solid" onClick={() => navigateTo('workspace')}>
                Start a project
              </button>
            </div>
          </section>

          {/* Process — what actually happens after an enquiry. The page went
              from a one-line "how we work" straight to the service grid, so a
              visitor never learned what they would be buying. Deliverables are
              described rather than durations, since timings vary per project
              and an invented number would be a claim we cannot stand behind. */}
          <section className="ig-process" aria-label="How a Leaf Creationism project runs">
            <div className="ig-process-head">
              <span className="ig-eyebrow">How a project runs</span>
              <h2>Five stages, and you see the work at every one.</h2>
              <p>
                No black box and no month of silence. Each stage ends with something
                you can look at, comment on, and sign off before the next begins.
              </p>
            </div>

            <div className="ig-stage-picker">
              <OptionWheel
                className="ig-stage-wheel"
                items={projectStages.map((stage) => stage.title)}
                defaultSelected={0}
                onChange={(index) => setActiveStageIndex(index)}
                fontSize={isMobileViewport ? 2.2 : 3.6}
                spacing={1.5}
                tilt={7}
                blur={1.4}
                fade={0.3}
                minOpacity={0.12}
                inset={isMobileViewport ? 12 : 24}
                textColor="var(--ig-soft)"
                activeColor="var(--ig-ink)"
              />

              {/* The selected stage, in full. Announced politely so the change
                  reaches a screen reader without interrupting. */}
              <div className="ig-stage-detail" aria-live="polite">
                <span className="ig-stage-n">{activeStage.n}</span>
                <h3>{activeStage.title}</h3>
                <p>{activeStage.body}</p>
                <span className="ig-stage-out">{activeStage.out}</span>
              </div>
            </div>

            <p className="ig-stage-hint" aria-hidden="true">Drag or scroll the list</p>
          </section>

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

                {/* A helix of the work, turning past the viewer. Supplied by
                    the owner and safe where the ring was not: it computes its
                    own depth and emits translate3d/scale only, with no
                    transform-style: preserve-3d anywhere — which is the thing
                    mobile Safari and Chrome fail to paint on this site. Drag
                    or scroll moves it too, so it is not only decoration. */}
                <InfiniteSpiral
                  className="adv-spiral"
                  items={advantageSpiralImages}
                  animationMode="all"
                  speed={0.42}
                  cardsPerTurn={7}
                  /* The component scales everything down by how much of the
                     card height its box can hold, so a shorter card keeps the
                     spiral at full size instead of shrinking it into a huddle
                     in the middle. Radius is what spreads it across the
                     stage. */
                  cardWidth={isMobileViewport ? 96 : 134}
                  cardHeight={isMobileViewport ? 136 : 190}
                  radius={isMobileViewport ? 132 : 330}
                  verticalSpacing={isMobileViewport ? 46 : 68}
                  cardRadius={isMobileViewport ? 12 : 16}
                  centerScale={1.14}
                  edgeFade={0.34}
                  /* Per-frame blur on up to ten cards is a real cost on weak
                     GPUs. The edge fade alone reads the same on a phone. */
                  edgeBlur={isMobileViewport ? 0 : 4}
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
          {/* SECTION 3: Studio Heads — editorial numbered profiles */}
          <section
            className={`heads ${headsVisible ? 'is-visible' : ''}`}
            aria-label="Leaf Creationism leadership"
            ref={headsRef}
          >
            <header className="heads-head">
              <span className="heads-eyebrow">Studio Heads</span>
              <h2>Two people behind<br />every single launch.</h2>
              <p>
                No account managers, no handoffs to a junior team. The people who design and
                direct your project are the ones you talk to.
              </p>
            </header>

            <div className="heads-grid">
              {studioHeads.map((person) => (
                <ProfileCard
                  key={person.name}
                  className="heads-profile"
                  avatarUrl={person.image}
                  name={person.name}
                  title={person.role}
                  handle={person.name.toLowerCase().replace(/[^a-z]/g, '')}
                  status="Leaf Creationism"
                  contactText="Work with us"
                  behindGlowColor="rgba(32, 80, 227, 0.5)"
                  innerGradient="linear-gradient(145deg, #1c2740 0%, #2050e3 100%)"
                  grainUrl=""
                  iconUrl=""
                  onContactClick={() => navigateTo('workspace')}
                />
              ))}
            </div>

            <p className="heads-swipe-hint" aria-hidden="true">
              <i></i> Swipe to meet the team
            </p>

            <footer className="heads-foot">
              <p>
                <strong>One studio. Two creative heads.</strong> From brand direction and product
                systems to campaigns and launches, every decision stays close to the people
                leading the work.
              </p>
              <button type="button" onClick={() => navigateTo('workspace')}>
                Work with the studio <ArrowUpRight size={15} />
              </button>
            </footer>
          </section>


          {/* SECTION 3.1: Service Suite — gradient card design, real services */}
          <section className="c1-section" aria-label="Leaf Creationism services">
            <div className="c1-container">
              <span className="c1-badge">Service Suite</span>
              <h2 className="c1-title">Everything your brand needs, from one studio.</h2>
              <p className="c1-subtitle">
                Eight core services covering strategy, design,
                <br />
                engineering, and advertising.
              </p>

              <div className="c1-svc-grid">
                {serviceCategories.map((service, index) => {
                  const ServiceIcon = service.icon;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      className="c1-svc-card"
                      data-accent={index % 4}
                      onClick={() => openServiceModal(service.id)}
                      aria-label={`View ${service.name} service`}
                    >
                      <span className="c1-svc-icon">
                        <ServiceIcon size={22} strokeWidth={1.9} />
                      </span>
                      <h3>{service.name}</h3>
                      <p>{serviceTaglines[service.id]}</p>
                      <span className="c1-svc-cta">
                        Learn more
                        <ArrowRight size={14} strokeWidth={2} />
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="c1-actions">
                <button type="button" className="c1-btn" onClick={() => navigateTo('workspace')}>
                  Book a strategy call
                </button>
                <button type="button" className="c1-btn is-ghost" onClick={() => navigateTo('services')}>
                  Explore all services
                </button>
              </div>
            </div>
          </section>

          {/* Tools — a capability signal that costs nothing to verify, unlike a
              client logo wall, which needs permission we do not have yet.
              Named as text rather than logos: these are third-party marks, and
              a plain wordmark list suits a type-led page anyway. */}
          <section className="ig-tools" aria-label="Tools and platforms Leaf Creationism builds with">
            <span className="ig-eyebrow">What we build with</span>
            <div className="ig-tool-groups">
              {[
                { label: 'Design', items: ['Figma', 'Adobe Creative Cloud', 'Blender', 'After Effects'] },
                { label: 'Build', items: ['React', 'Next.js', 'Webflow', 'Framer', 'WordPress', 'Shopify'] },
                { label: 'Launch', items: ['Vercel', 'Netlify', 'AWS', 'Cloudflare', 'Google Cloud'] }
              ].map((group, groupIndex) => (
                <div className="ig-tool-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <ul>
                    {group.items.map((item, itemIndex) => (
                      <li
                        key={item}
                        /* Deterministic rather than random: the same chip lands
                           at the same angle on every visit, and on a re-render
                           nothing jumps. */
                        style={{
                          '--fall-delay': `${(groupIndex * 4 + itemIndex) * 55}ms`,
                          '--fall-rot': `${(((groupIndex * 7 + itemIndex * 37) % 11) - 5)}deg`
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

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
                 <p className="faq-intro-copy text-gray-600 font-light text-base lg:text-lg leading-relaxed mb-7 max-w-md">
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
          
          {studioFooter}

          {/* Closing band on the alternate surface. */}
          <section className="ig-band" aria-label="Start a project with Leaf Creationism">
            <span className="ig-eyebrow">Next step</span>
            <h2>Planning a new website or campaign? Let's talk.</h2>
            <p>
              Tell us what you are building. We come back with a written quote, a timeline,
              and the team who would actually do the work.
            </p>
            <div className="ig-actions">
              <button type="button" className="ig-btn ig-btn-solid" onClick={() => navigateTo('workspace')}>
                Start a project
              </button>
              <button type="button" className="ig-btn ig-btn-line" onClick={() => navigateTo('launch')}>
                Explore Launch Cloud
              </button>
            </div>
          </section>
        </main>
      )}

      {/* Services View */}
      {activeNav === 'services' && (
        <main className="services-page max-w-6xl mx-auto px-5 sm:px-6 pt-10 sm:pt-14 pb-32 relative z-10 animate-fade-in">
          <div className="mb-10 sm:mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="services-liquid-pill inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 w-fit">
                <Layers size={14} className="text-emerald-500" />
                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-emerald-600">Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-gray-900 leading-[1.02]">
                Idea to launch, <span className="font-medium">nothing outsourced.</span>
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

          {/* The band shows whichever discipline is selected above. It used to
              be a stock 3D render of a computer mouse — nothing to do with the
              studio, the page, or the filters, which made the buttons above it
              look like they did nothing. */}
          <section className="services-showcase-shell relative overflow-visible text-white mb-12 sm:mb-16">
            <div className="relative z-10">
              <div className="services-showcase-track services-showcase-single-track">
                <div className="services-showcase-card services-single-showcase-card group/story">
                  <div className="services-showcase-video">
                    {capabilities.map((cap, idx) => (
                      <img
                        key={`showcase-${cap.id}`}
                        src={cap.image}
                        alt={activeCapability === idx ? `${cap.title} at Leaf Creationism` : ''}
                        aria-hidden={activeCapability !== idx}
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          activeCapability === idx ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                    <span className="services-showcase-caption">
                      <em>{String(activeCapability + 1).padStart(2, '0')}</em>
                      {capabilities[activeCapability]?.title}
                    </span>
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
                const ServiceIcon = service.icon;
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
                      <span className="store-card-icon"><ServiceIcon size={28} strokeWidth={1.7} /></span>
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
                  Sites we designed, built and launched. Each one loads live below,
                  so what you are looking at is the real page as it runs today.
                </p>
              </div>

              {/* One site at a time, big enough to read. The old stack showed six
                  360px cards at once — none of them legible — and it needed
                  preserve-3d, which mobile Safari and Chrome fail to paint here. */}
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

          {studioFooter}
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
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Project Cart & Launch Flow</h1>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#05070c] border border-white/10 text-xs font-semibold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{selectedServiceItems.length} service{selectedServiceItems.length === 1 ? '' : 's'}</span>
              <span className="opacity-40">•</span>
              <span>{selectedReferenceItems.length} reference{selectedReferenceItems.length === 1 ? '' : 's'}</span>
              <span className="opacity-40">•</span>
              <strong className="text-emerald-400">₹0 due now</strong>
            </div>
          </section>

          {/* Luxury Animated Stepper */}
          <Stepper
            initialStep={1}
            stepLabels={['Services', 'Strategy Call', 'References', 'Contact']}
            onFinalStepCompleted={() => {
              const submitBtn = document.getElementById('reference-cart-submit-btn');
              if (submitBtn) submitBtn.click();
            }}
          >
            {/* STEP 1: Core Services */}
            <Step>
              <div className="step-content-head">
                <div>
                  <h3>Selected Service Suite</h3>
                  <p>Choose the core creative and engineering services for your project.</p>
                </div>
                <button type="button" className="step-action-btn" onClick={() => navigateTo('home')}>
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
                    <p>Go back to Home and choose services in Build Your Project, or continue with your custom brief.</p>
                    <button type="button" onClick={() => navigateTo('home')}>Choose services</button>
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

                <div className="workspace-date-label">
                  <span>Pick a date</span>
                  <small>Next seven studio days</small>
                </div>
                <div className="workspace-date-strip" aria-label="Choose appointment day">
                  {appointmentDays.map((day) => (
                    <button
                      key={day.id}
                      type="button"
                      onClick={() => setSelectedAppointmentDay(day.id)}
                      className={selectedAppointmentDay === day.id ? 'is-selected' : ''}
                      aria-pressed={selectedAppointmentDay === day.id}
                    >
                      <span>{day.label}</span>
                      <strong>{day.date.split(' ')[0]}</strong>
                      <small>{day.date.split(' ')[1]}</small>
                    </button>
                  ))}
                </div>

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
              </div>

              <div className="reference-appointment-card">
                <div>
                  <span>Online Consultation</span>
                  <strong>{selectedSchedule.title}</strong>
                  <p>{selectedAppointment.full} / {selectedSlot.time} IST / {selectedSlot.note}</p>
                </div>
              </div>
            </Step>

            {/* STEP 3: Portfolio References */}
            <Step>
              <div className="step-content-head">
                <div>
                  <h3>Visual Inspiration & References (Optional)</h3>
                  <p>Saved portfolio references to guide the aesthetic direction.</p>
                </div>
                <button type="button" className="step-action-btn" onClick={() => navigateTo('portfolio')}>
                  <Plus size={14} />
                  <span>Browse Work</span>
                </button>
              </div>

              <div className="reference-references-container pt-2">
                {selectedReferenceItems.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                ) : (
                  <div className="reference-empty-card">
                    <strong>No visual references added yet</strong>
                    <p>You can add visual references from our portfolio gallery, or skip to contact details.</p>
                    <button type="button" onClick={() => navigateTo('portfolio')}>Explore Portfolio</button>
                  </div>
                )}
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
                {formStatus === 'reference-sent' && (
                  <div className="reference-success-hero" role="status">
                    <div className="reference-success-orbit">
                      <Check size={22} />
                    </div>
                    <strong>Request received</strong>
                    <p>We will reach you within 24 hours. Your data is safe with us.</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label>
                    Name
                    <input
                      name="Name"
                      type="text"
                      required
                      value={referenceForm.name}
                      onChange={(event) => updateReferenceField('name', event.target.value)}
                      placeholder="Your full name"
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
                </div>

                <label>
                  WhatsApp Phone Number
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
                    placeholder="Tell us about your brand, product, or campaign vision."
                    rows="3"
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
                    id="reference-cart-submit-btn"
                    type="submit"
                    className={`reference-submit-button ${!canSubmitReferenceEnquiry ? 'is-disabled' : ''} ${formStatus === 'sending' ? 'is-sending' : ''} ${formStatus === 'reference-sent' ? 'is-sent' : ''}`}
                    disabled={!canSubmitReferenceEnquiry || formStatus === 'sending' || formStatus === 'reference-sent'}
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

                {formStatus === 'reference-sent' && (
                  <p className="reference-form-success">Enquiry sent. We received your services, appointment, references, and contact details.</p>
                )}
                {formStatus === 'error' && (
                  <p className="reference-form-error">Could not send right now. Please try again or use WhatsApp.</p>
                )}
              </form>
            </Step>
          </Stepper>
        </main>
      )}

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


      {/* Full Screen Service Details Modal - Liquid Glass UI */}
      {showServiceModal && (
        <div className="service-detail-modal fixed inset-0 z-[100] overflow-y-auto animate-slide-up font-sans hide-scrollbar bg-[#f8f9fc]">
          
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
              <button
                type="button"
                onClick={() => enquireAboutService(activeCategoryData?.id)}
                className="px-5 sm:px-6 py-2.5 rounded-full bg-[#2050E3] text-white text-xs sm:text-sm font-medium hover:bg-blue-700 hover:shadow-[0_4px_15px_rgba(32,80,227,0.4)] transition-all transform hover:-translate-y-0.5"
              >
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
                <button
                  type="button"
                  onClick={() => document.getElementById('service-process')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="w-full sm:w-fit inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full premium-glass hover:bg-white/80 text-gray-900 text-sm sm:text-lg font-medium transition-all duration-300 group hover:shadow-lg hover:-translate-y-1 border border-white/60"
                >
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2050E3] flex items-center justify-center text-white group-hover:scale-110 transition-transform shrink-0">
                     <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                  </span>
                  See how we do it
                </button>
              </div>

              <div className="w-full lg:w-1/2 relative h-[260px] sm:h-[450px] lg:h-[550px] animate-fade-in mt-4 lg:mt-0" style={{ animationDelay: '0.2s' }}>
                 <div className="service-editorial-media absolute inset-0 overflow-hidden">
                   <img src={activeCategoryData?.img} alt={`${activeCategoryData?.name} editorial illustration`} loading="eager" decoding="async" fetchpriority="high" className="w-full h-full" />
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

            <div className="w-full" id="service-process">
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
                   type="button"
                   onClick={() => enquireAboutService(activeCategoryData?.id)}
                   className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-3.5 sm:py-5 rounded-full bg-gray-900 text-white text-sm sm:text-lg font-medium hover:bg-[#2050E3] hover:shadow-[0_10px_30px_rgba(32,80,227,0.3)] hover:-translate-y-1 transition-all duration-300 relative z-10 group"
                 >
                   Enquire about {activeCategoryData?.name} <ArrowUpRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                 </button>
               </div>
            </div>

          </div>
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
