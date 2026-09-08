import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, ShieldAlert, Sparkles, Coffee, Heart } from 'lucide-react';

interface SpiceLevel {
  id: string;
  name: string;
  marathiName: string;
  chiliCount: number;
  badge: string;
  headline: string;
  description: string;
  recommendation: string;
  bgGradient: string;
  themeColor: string;
}

export const SpiceMeter: React.FC = () => {
  const [activeLevelId, setActiveLevelId] = useState<string>('zingy');

  const spiceLevels: SpiceLevel[] = [
    {
      id: 'mild',
      name: 'MILD',
      marathiName: 'सौम्य चव',
      chiliCount: 1,
      badge: 'Family & First-Timers',
      headline: 'Gentle Warmth & Full Flavor',
      description: 'Prepared with mild aromatic spices and rich peanut gravy. Perfect for children, elders, or anyone wanting authentic Maharashtrian flavor without a heavy sweat.',
      recommendation: 'Pairs best with Special Dahi Misal or Kanda Pohe.',
      bgGradient: 'from-amber-950/20 via-amber-900/10 to-parchment-100',
      themeColor: '#D97706',
    },
    {
      id: 'medium',
      name: 'MEDIUM',
      marathiName: 'मध्यम तिखट',
      chiliCount: 2,
      badge: 'Pune Classic Balance',
      headline: 'The Authentic Pune Sweet Spot',
      description: 'The golden mean. Balances the sharpness of roasted red chilies with the nutty depth of dry coconut and sprouted matki. Leaves a pleasant, lingering buzz.',
      recommendation: 'Pairs perfectly with our crisp Kanda Bhaji & hot Pav.',
      bgGradient: 'from-orange-950/25 via-saffron/15 to-parchment-100',
      themeColor: '#D9531E',
    },
    {
      id: 'zingy',
      name: 'ZINGY',
      marathiName: 'झणझणीत',
      chiliCount: 3,
      badge: 'True Connoisseur Choice',
      headline: 'Awakens Every Single Tastebud',
      description: 'The real deal. Brewed with fiery Lavangi and Byadgi chilies and stone flower masala. Bubbling crimson tarri that gives you the genuine Pune misal kick!',
      recommendation: 'Keep a chilled glass of Masala Taak or Solkadhi ready on the side.',
      bgGradient: 'from-red-950/35 via-chili/20 to-parchment-100',
      themeColor: '#B91C1C',
    },
    {
      id: 'fire',
      name: 'KOLHAPURI FIRE',
      marathiName: 'अंगार (कोल्हापुरी झटका)',
      chiliCount: 5,
      badge: 'Not For The Weak-Hearted 🔥',
      headline: 'Pure Adrenaline & Scorching Rassa',
      description: 'Extremely spicy! Made with triple-tempered red rassa and crushed black pepper. Strictly for true spice warriors who order extra kat and smile through the tears.',
      recommendation: 'Mandatory Double Taak & Extra Pav recommended before attempting.',
      bgGradient: 'from-stone-950 via-red-950/70 to-parchment-100',
      themeColor: '#991B1B',
    },
  ];

  const currentLevel = spiceLevels.find((l) => l.id === activeLevelId) || spiceLevels[2];

  return (
    <section
      id="spicemeter"
      className="py-24 relative overflow-hidden transition-colors duration-700 bg-parchment-100"
    >
      {/* Dynamic Background Atmosphere based on active heat */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${currentLevel.bgGradient} transition-all duration-700 pointer-events-none opacity-90`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-saffron">
            Customise Your Experience
          </span>
          <h2 className="marathi-headline text-4xl sm:text-5xl md:text-6xl font-bold text-terracotta">
            तुम्हाला किती तिखट आवडते ?
          </h2>
          <p className="text-base sm:text-lg text-terracotta/80">
            How spicy do you like it? Choose your heat tolerance level below and we customize your rassa right in our kitchen.
          </p>
        </div>

        {/* Spice Level Selection Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {spiceLevels.map((lvl) => {
            const isSelected = lvl.id === activeLevelId;

            return (
              <button
                key={lvl.id}
                onClick={() => setActiveLevelId(lvl.id)}
                className={`p-5 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center text-center relative ${
                  isSelected
                    ? 'bg-parchment-50 border-chili shadow-warm-lg scale-105 ring-2 ring-chili/30'
                    : 'bg-parchment-100/70 border-parchment-300 hover:border-saffron hover:bg-parchment-50'
                }`}
                data-cursor={lvl.name}
              >
                {/* Chili Emoji / SVG Array */}
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: lvl.chiliCount }).map((_, i) => (
                    <motion.span
                      key={i}
                      animate={isSelected ? { scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
                      className="text-xl sm:text-2xl"
                    >
                      🌶️
                    </motion.span>
                  ))}
                  {lvl.id === 'fire' && <span className="text-xl sm:text-2xl">🔥</span>}
                </div>

                <span className="text-base sm:text-lg font-black tracking-wider text-terracotta">
                  {lvl.name}
                </span>

                <span className="font-devanagariSans text-xs font-semibold text-saffron mt-0.5">
                  {lvl.marathiName}
                </span>

                {isSelected && (
                  <motion.div
                    layoutId="spice-indicator"
                    className="absolute -bottom-2 w-4 h-4 bg-chili rotate-45 rounded-xs"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Details Card for Active Spice Level */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLevel.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="max-w-3xl mx-auto rounded-3xl bg-parchment-50/95 border-2 border-parchment-300 shadow-warm-lg p-6 sm:p-10 relative overflow-hidden"
          >
            {/* Corner Fire Effect */}
            <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-20">
              <Flame className="w-24 h-24 text-chili" />
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-chili/10 text-chili text-xs font-bold uppercase tracking-wider">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>{currentLevel.badge}</span>
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="marathi-headline text-3xl sm:text-4xl font-bold text-terracotta">
                  {currentLevel.marathiName} — {currentLevel.headline}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-terracotta/80 leading-relaxed font-normal">
                {currentLevel.description}
              </p>

              <div className="p-4 rounded-xl bg-parchment-200/80 border border-parchment-300 flex items-start gap-3 mt-4">
                <Sparkles className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-terracotta font-medium">
                  <span className="font-bold text-saffron uppercase tracking-wider block sm:inline mr-1">
                    Kitchen Pairing:
                  </span>
                  {currentLevel.recommendation}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
