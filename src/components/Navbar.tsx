import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ACADEMY_BUSINESS_DETAILS } from '../data/testimonialsData';

interface NavbarProps {
  onOpenEnquire: (courseName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquire }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'courses', 'why-us', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Courses', href: '#courses', id: 'courses' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <nav
      id="main-navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-20">
        {/* Brand Logo */}
        <motion.a
          id="nav-brand-logo"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-2 group shrink-0"
          href="#home"
        >
          <img
            alt="Ayan Academy Logo"
            className="h-10 sm:h-11 object-contain transition-transform duration-300 group-hover:scale-105"
            src="/ayan_academy_logo.png"
          />
        </motion.a>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 relative py-1 group/nav ${
                  isActive ? 'text-[#082B6F] font-bold' : 'text-slate-600 hover:text-[#082B6F]'
                }`}
              >
                {link.name}
                {isActive ? (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#082B6F] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF7800] rounded-full transition-all duration-300 group-hover/nav:w-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Trailing Action */}
        <div className="hidden sm:flex items-center shrink-0">
          <motion.button
            id="nav-enquiry-btn"
            type="button"
            onClick={() => onOpenEnquire()}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="bg-[#FF7800] hover:bg-[#e06900] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5 group"
          >
            <span>Enquiry</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#082B6F] p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-base font-semibold transition-colors ${
                    activeSection === link.id
                      ? 'text-[#082B6F] pl-2 border-l-4 border-[#082B6F]'
                      : 'text-slate-700 hover:text-[#FF7800]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquire();
                  }}
                  className="w-full bg-[#FF7800] hover:bg-[#e06900] text-white py-2.5 rounded-xl font-bold text-center shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
