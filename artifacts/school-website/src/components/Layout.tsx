import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

const ROUTES = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/vision', label: 'Vision & Mission' },
  { path: '/academics', label: 'Academics' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/transport', label: 'Transport & Facilities' },
  { path: '/contact', label: 'Contact Us' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans text-foreground bg-background">
      {/* Top Header Strip */}
      <div className="bg-primary text-primary-foreground py-2 px-4 sm:px-6 lg:px-8 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-primary-foreground/90 font-medium">
            <a href="tel:03462257660" className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone className="w-4 h-4" /> 0346 2257660 | 0308 5652708
            </a>
            <span className="hidden sm:inline opacity-50">|</span>
            <a href="https://wa.me/923429196601" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
              <FaWhatsapp className="w-4 h-4" /> 0342 9196601
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-secondary transition-colors"><FaFacebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-secondary transition-colors"><FaInstagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-secondary transition-colors"><FaTiktok className="w-4 h-4" /></a>
            <a href="#" className="hover:text-secondary transition-colors"><FaYoutube className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-border bg-background/95 backdrop-blur-md ${
          isScrolled ? 'py-3 shadow-sm' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary group-hover:border-primary transition-colors bg-white shrink-0">
              <img src="/images/logo.jpg" alt="AlGhazali Public School Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-primary leading-tight">
                AlGhazali Public School
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                & College Dhakki DIKhan
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 xl:gap-5">
            {ROUTES.map((route) => {
              const isActive = location === route.path;
              return (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`text-xs xl:text-sm font-semibold tracking-wide transition-colors hover:text-secondary relative py-2 px-1 xl:px-0 whitespace-nowrap ${
                    isActive ? 'text-secondary' : 'text-primary/90'
                  }`}
                >
                  {route.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary hover:text-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed top-[110px] sm:top-[120px] left-0 right-0 bg-background border-b border-border shadow-lg z-40 max-h-[calc(100vh-120px)] overflow-y-auto"
          >
            <nav className="flex flex-col p-4">
              {ROUTES.map((route) => {
                const isActive = location === route.path;
                return (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={`p-4 border-b border-border/50 text-base font-semibold ${
                      isActive ? 'text-secondary bg-muted/50' : 'text-primary'
                    }`}
                  >
                    {route.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative w-full overflow-hidden">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-[6px] border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/20 bg-white shrink-0">
                  <img src="/images/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-xl leading-tight">AlGhazali</span>
                  <span className="text-xs text-primary-foreground/70 uppercase tracking-widest">Public School</span>
                </div>
              </div>
              <p className="text-primary-foreground/80 mt-2 text-sm leading-relaxed">
                25 Years of Educational Excellence in the Chah Malwana & DIKhan region. Preparing patriotic, responsible leaders for Pakistan's future.
              </p>
              <div className="font-serif italic text-secondary text-lg mt-2 font-medium">
                "إياك نعبد وإياك نستعين"
              </div>
            </div>

            <div>
              <h3 className="font-serif font-bold text-lg mb-6 text-white relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-secondary"></span>
              </h3>
              <ul className="space-y-3">
                {ROUTES.slice(0, 5).map(route => (
                  <li key={route.path}>
                    <Link href={route.path} className="text-primary-foreground/80 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-bold text-lg mb-6 text-white relative inline-block">
                Contact
                <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-secondary"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/80 text-sm leading-relaxed">
                    Chah Malwana, Tehsil Paharpur, District Dera Ismail Khan, KPK, Pakistan
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary shrink-0" />
                  <div className="flex flex-col">
                    <a href="tel:03462257660" className="text-primary-foreground/80 hover:text-white text-sm">0346 2257660</a>
                    <a href="tel:03085652708" className="text-primary-foreground/80 hover:text-white text-sm">0308 5652708</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <FaWhatsapp className="w-5 h-5 text-secondary shrink-0" />
                  <a href="https://wa.me/923429196601" className="text-primary-foreground/80 hover:text-white text-sm">0342 9196601</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-bold text-lg mb-6 text-white relative inline-block">
                Follow Us
                <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-secondary"></span>
              </h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary transition-colors">
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary transition-colors">
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>Copyright &copy; {new Date().getFullYear()} AlGhazali Public School & College. All rights reserved.</p>
            <p>Designed for excellence in education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
