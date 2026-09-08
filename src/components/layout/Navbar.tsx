import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurant';
import { getRestaurantStatus } from '../../utils/status';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const status = getRestaurantStatus();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Signature', marathi: 'खास मिसळ', href: '/#signature' },
    { name: 'Misal Anatomy', marathi: 'घटक रचना', href: '/#anatomy' },
    { name: 'Spice Meter', marathi: 'तिखट मीटर', href: '/#spicemeter' },
    { name: 'Full Menu', marathi: 'मेनू', href: '/menu' },
    { name: 'Reviews', marathi: 'परीक्षणे', href: '/#reviews' },
    { name: 'Location', marathi: 'पत्ता', href: '/#location' },
  ];

  return (
    <>
      {/* Top Banner with live status, temple proximity & phone */}
      <div className="bg-terracotta-dark text-parchment-200 text-xs py-1.5 px-4 border-b border-terracotta-border/40 relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              <span className="font-medium">{status.statusText}</span>
            </span>
            <span className="hidden sm:inline text-parchment-400">|</span>
            <span className="hidden sm:inline text-parchment-300 font-devanagariSans">
              {restaurantInfo.marathiTagline}
            </span>
            <span className="hidden lg:inline text-parchment-400">|</span>
            <span className="hidden lg:inline text-turmeric font-devanagariSans font-medium flex items-center gap-1">
              <span>🪔</span>
              <span>{restaurantInfo.templeInfo.marathiBadge}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${restaurantInfo.phone1Raw}`}
              className="inline-flex items-center gap-1.5 hover:text-saffron-light transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-saffron-light" />
              <span className="font-semibold">{restaurantInfo.phone1}</span>
            </a>
            <span className="hidden md:inline text-parchment-400">|</span>
            <span className="hidden md:inline text-parchment-300">Alandi, Pune</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-parchment-100/95 backdrop-blur-md shadow-warm py-2.5 border-b border-parchment-300/60'
            : 'bg-parchment-100/80 backdrop-blur-sm py-4 border-b border-parchment-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Typography */}
          <a href="/" className="flex items-center gap-3 group" data-cursor="HOME">
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-warm border-2 border-saffron/30 group-hover:border-saffron transition-all duration-300 group-hover:scale-105">
              <img
                src="/Logo.png"
                alt="Vakratunda Misal Logo"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="marathi-headline text-2xl md:text-3xl font-bold text-terracotta leading-none">
                  वक्रतुंड मिसळ
                </span>
              </div>
              <span className="text-[11px] md:text-xs font-semibold uppercase tracking-widest text-saffron">
                Alandi · Pune
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-sm font-medium text-terracotta hover:text-saffron hover:bg-parchment-200 transition-all duration-200 flex flex-col items-center"
              >
                <span>{link.name}</span>
                <span className="text-[10px] text-terracotta/60 font-devanagariSans -mt-0.5">
                  {link.marathi}
                </span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={restaurantInfo.whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs sm:text-sm font-bold rounded-full bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-sm flex items-center gap-1.5"
              data-cursor="ORDER"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Order</span>
            </a>
            <a
              href="/menu"
              className="px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-full border border-saffron text-saffron hover:bg-saffron hover:text-white transition-all duration-200 shadow-sm"
              data-cursor="MENU"
            >
              Menu
            </a>
            <a
              href="/#location"
              className="px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-full bg-saffron hover:bg-saffron-dark text-white transition-all duration-200 shadow-saffron flex items-center gap-1.5"
              data-cursor="GO"
            >
              <MapPin className="w-4 h-4" />
              <span>Directions</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-terracotta hover:bg-parchment-200 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed top-[102px] left-0 right-0 z-30 bg-parchment-50 border-b border-parchment-300 shadow-warm-lg overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="p-3 rounded-xl bg-parchment-200/70 flex flex-col gap-1.5 border border-parchment-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-terracotta flex items-center gap-2">
                    <Clock className="w-4 h-4 text-saffron" />
                    {status.statusText}
                  </span>
                  <span className="text-[11px] text-terracotta/70 font-devanagariSans">
                    ७:०० AM – १०:०० PM
                  </span>
                </div>
                <div className="text-[11px] text-saffron-dark font-devanagariSans font-medium flex items-center gap-1 pt-1 border-t border-parchment-300/60">
                  <span>🪔</span>
                  <span>{restaurantInfo.templeInfo.marathiBadge}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-1 pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-terracotta hover:bg-parchment-200 hover:text-saffron transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="text-sm text-saffron font-devanagariSans font-semibold">
                      {link.marathi}
                    </span>
                  </a>
                ))}
              </div>

              {/* Mobile Drawer CTAs */}
              <div className="pt-4 border-t border-parchment-300/70 space-y-2.5">
                <a
                  href={restaurantInfo.whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-sm hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Order on WhatsApp (पार्सल / जेवण)</span>
                </a>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={`tel:${restaurantInfo.phone1Raw}`}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-saffron text-saffron font-semibold text-sm hover:bg-saffron/10 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href="/#location"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-saffron text-white font-semibold text-sm shadow-saffron hover:bg-saffron-dark transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
