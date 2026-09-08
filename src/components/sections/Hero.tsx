import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Flame, MapPin, Sparkles, Utensils } from 'lucide-react';
import { SteamEffect } from '../ui/SteamEffect';
import { restaurantInfo } from '../../data/restaurant';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const heroImages = [
    '/images/Misal.png',
    '/images/matki-bhel.png',
    '/images/Crispy-Kanda-Bhaji.png',
    '/images/Pohe-bhel.png'
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 14;
      const y = (e.clientY / innerHeight - 0.5) * 14;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, [heroImages.length]);

  const floatingWords = [
    { text: 'मिसळ', x: '10%', y: '22%', delay: 0, size: 'text-2xl md:text-3xl' },
    { text: 'झणझणीत', x: '82%', y: '18%', delay: 1, size: 'text-3xl md:text-4xl' },
    { text: 'तिखट', x: '14%', y: '68%', delay: 2, size: 'text-xl md:text-2xl' },
    { text: 'चव', x: '88%', y: '60%', delay: 0.5, size: 'text-2xl md:text-3xl' },
    { text: 'पुणेरी', x: '75%', y: '82%', delay: 1.5, size: 'text-xl md:text-2xl' },
    { text: 'अस्सल', x: '6%', y: '45%', delay: 2.5, size: 'text-xl md:text-2xl' },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-parchment-100 bg-grain pt-8 pb-16">
      {/* Decorative Warm Backlight Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-saffron/20 via-turmeric/15 to-transparent rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-chili/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Floating Marathi Cultural Words */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {floatingWords.map((word, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.35, 0.65, 0.35],
              y: [0, -14, 0],
              rotate: [0, idx % 2 === 0 ? 5 : -5, 0],
            }}
            transition={{
              duration: 7 + idx,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: word.delay,
            }}
            style={{
              left: word.x,
              top: word.y,
              transform: `translate(${mousePos.x * (idx % 2 === 0 ? 0.6 : -0.6)}px, ${mousePos.y * (idx % 2 === 0 ? 0.6 : -0.6)}px)`,
            }}
            className={`absolute font-devanagari font-bold text-terracotta/20 hover:text-saffron transition-colors duration-500 ${word.size}`}
          >
            {word.text}
          </motion.div>
        ))}
      </div>

      {/* Floating authentic emblem badge - Top Right Corner */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-4 right-4 lg:top-8 lg:right-12 z-30 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-parchment-50 p-1.5 shadow-warm-lg border-2 border-turmeric/60 pointer-events-auto"
      >
        <img
          src="/Logo.png"
          alt="Vakratunda Seal"
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left / Editorial Typography Block */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left relative z-10 py-10 lg:py-0">
            {/* Tags / Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-parchment-200/90 border border-saffron/30 text-saffron-dark text-xs sm:text-sm font-semibold shadow-xs">
                <Flame className="w-4 h-4 text-chili animate-pulse" />
                <span className="font-devanagariSans">अस्सल पुणेरी चव · आळंदी रोड</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-turmeric/15 border border-turmeric/40 text-terracotta text-xs sm:text-sm font-bold shadow-xs">
                <span>🪔</span>
                <span className="font-devanagariSans">समाधी मंदिरापासून ५ मिनिटे (1.2 km)</span>
              </div>
            </motion.div>

            {/* Main Marathi Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="space-y-1"
            >
              <h1 className="marathi-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-terracotta tracking-tight leading-[1.05]">
                वक्रतुंड मिसळ
              </h1>
              <p className="font-devanagariSans text-lg sm:text-xl text-saffron font-bold tracking-wide">
                खाताय ना ? खायलाच पाहीजे !
              </p>
            </motion.div>

            {/* Subhead & Story line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-terracotta/80 max-w-xl font-medium leading-relaxed"
            >
              {restaurantInfo.tagline}
              <span className="block text-sm sm:text-base text-terracotta/70 mt-1">
                Fresh sprouted matki, piping hot spicy tari, crisp double farsan, and butter pav crafted fresh every dawn in Alandi.
              </span>
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <a
                href={restaurantInfo.whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                data-cursor="WHATSAPP"
              >
                <span className="text-lg">💬</span>
                <span>WhatsApp Order / पार्सल</span>
              </a>

              <a
                href="#menu"
                className="px-6 py-3.5 rounded-full bg-saffron hover:bg-saffron-dark text-white font-bold text-base shadow-saffron hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                data-cursor="MENU"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Menu</span>
              </a>

              <a
                href="#location"
                className="px-6 py-3.5 rounded-full border-2 border-terracotta/40 hover:border-terracotta text-terracotta hover:bg-parchment-200 font-bold text-base transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                data-cursor="MAP"
              >
                <MapPin className="w-4 h-4 text-chili" />
                <span>Directions</span>
              </a>
            </motion.div>

            {/* Highlights metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-6 border-t border-parchment-300 flex items-center justify-center lg:justify-start gap-8 text-left"
            >
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-terracotta serif-headline">
                  4.1 ★
                </span>
                <span className="text-xs text-terracotta/70 font-medium">
                  39+ Google Reviews
                </span>
              </div>
              <div className="h-8 w-px bg-parchment-300" />
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-saffron serif-headline">
                  ₹120
                </span>
                <span className="text-xs text-terracotta/70 font-medium">
                  Signature Thali
                </span>
              </div>
              <div className="h-8 w-px bg-parchment-300" />
              <div>
                <span className="block text-2xl sm:text-3xl font-bold text-coriander serif-headline">
                  100%
                </span>
                <span className="text-xs text-terracotta/70 font-medium">
                  Pure Veg Daily Fresh
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right / Cinematic Misal Hero Image Showcase */}
          <div className="absolute inset-0 lg:relative lg:col-span-6 flex justify-center items-center pointer-events-none lg:pointer-events-auto opacity-80 lg:opacity-100 z-0 lg:z-auto overflow-hidden lg:overflow-visible">
            {/* Concentric Traditional Brass Ring Accent */}
            <div className="hidden lg:block absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full border border-saffron/25 animate-[spin_60s_linear_infinite]" />
            <div className="hidden lg:block absolute w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] rounded-full border border-dashed border-turmeric/30" />

            {/* Food Image Container with Subtle Zoom & Parallax */}
            <motion.div
              style={{
                transform: `translate(${mousePos.x * -0.7}px, ${mousePos.y * -0.7}px)`,
              }}
              className="relative z-10 w-full h-full lg:max-w-[440px] sm:max-w-[500px] lg:aspect-[4/5] lg:rounded-3xl overflow-hidden lg:shadow-warm-lg lg:border-4 border-parchment-50 lg:bg-parchment-100 flex items-center justify-center"
            >
              {/* Ambient Blurred Backdrop so letterbox/pillarbox blends naturally */}
              <img
                src={heroImages[currentImageIdx]}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 scale-110 pointer-events-none select-none transition-all duration-1000"
              />

              {/* Actual Authentic Vakratunda Misal Image - Fully Contained */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIdx}
                  src={heroImages[currentImageIdx]}
                  alt="Authentic Vakratunda Thali"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: [1, 1.03, 1] }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 0.8 },
                    scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
                  }}
                  className="absolute lg:relative z-10 w-full h-full object-cover lg:object-contain object-center filter drop-shadow-md p-0 lg:p-2.5 sm:p-3"
                />
              </AnimatePresence>

              {/* Steam particle overlay */}
              <SteamEffect intensity="high" />

              {/* Gradient vignette for readability at bottom */}
              <div className="hidden lg:block absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-terracotta-deep/80 via-terracotta-deep/30 to-transparent pointer-events-none z-10" />

              {/* Dish Badge on Image */}
              <div className="hidden lg:flex absolute bottom-3.5 left-3.5 right-3.5 z-20 p-3.5 rounded-2xl bg-parchment-50/92 backdrop-blur-md border border-parchment-200/80 shadow-warm items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-saffron">
                    Authentic Thali
                  </span>
                  <h3 className="marathi-headline text-base sm:text-lg font-bold text-terracotta leading-tight">
                    स्पे. वक्रतुंड मिसळ थाळी
                  </h3>
                  <p className="text-[11px] text-terracotta/70">
                    मटकी उसळ · झणझणीत कट · फरसाण · दही · पाव
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xl sm:text-2xl font-black text-saffron font-serif">
                    ₹120
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 flex justify-center">
          <a
            href="#signature"
            className="flex flex-col items-center gap-1.5 text-xs font-semibold text-terracotta/50 hover:text-saffron transition-colors"
            data-cursor="SCROLL"
          >
            <span className="uppercase tracking-widest text-[10px]">Scroll to discover</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-saffron" />
          </a>
        </div>
      </div>
    </section>
  );
};
