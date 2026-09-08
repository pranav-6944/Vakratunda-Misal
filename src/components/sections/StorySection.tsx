import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { restaurantInfo } from '../../data/restaurant';
import { Sparkles, Utensils, Flame, Heart, CheckCircle2 } from 'lucide-react';

interface StoryStep {
  step: string;
  title: string;
  marathiTitle: string;
  desc: string;
  image: string;
  highlight: string;
}

export const StorySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const steps: StoryStep[] = [
    {
      step: '01',
      title: 'The Sacred Sprout & Whole Spices',
      marathiTitle: 'ताजी मोड आलेली मटकी व गोडा मसाला',
      desc: 'Our journey begins in the early hours of dawn. Premium moth beans are germinated naturally, paired with stone flower (dagad phool), roasted copra, and freshly pounded Maharashtrian spices.',
      image: '/images/Traditional-Spice-Board.png',
      highlight: 'Organic sprouted matki, natural protein & freshly roasted spices'
    },
    {
      step: '02',
      title: 'The Simmering Kat / Tari Pour',
      marathiTitle: 'मंद आचेवर उकळणारा वाफाळलेला कट',
      desc: 'The defining soul of Vakratunda Misal. Simmered for hours in large brass and steel vessels until the red aromatic oil layer (tari) separates, served bubbling hot from the mini handi.',
      image: '/images/Dramatic-Rassa-Pour.png',
      highlight: 'Deep crimson rassa with authentic Maharashtrian fire'
    },
    {
      step: '03',
      title: 'Artisanal Double Farsan & Crunch',
      marathiTitle: 'कुरकुरीत फरसाण, कांदा व लिंबू',
      desc: 'Crisp gram flour sev, papdi, and golden roasted peanuts made to hold their crunch even when drenched in fiery rassa, accompanied by diced onions and fresh lemon.',
      image: '/images/Misal.png',
      highlight: 'Double crisp texture that absorbs the rassa'
    },
    {
      step: '04',
      title: 'The Grand Alandi Thali',
      marathiTitle: 'गरमागरम वाफाळलेली संपूर्ण थाळी',
      desc: 'Plated with fresh pillowy pav from the local Alandi bakery, diced local onions, a fresh wedge of lemon, dahi to cool the palate, and piping hot steel bucket rassa.',
      image: '/images/Misal1.png',
      highlight: 'Brought to your table with authentic Maharashtrian warmth'
    }
  ];

  const currentStep = steps[activeStepIndex];

  return (
    <section id="story" className="py-24 bg-terracotta-deep text-parchment-100 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-saffron/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-chili/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-4 py-1 rounded-full bg-saffron/20 border border-saffron/30 text-turmeric font-bold text-xs uppercase tracking-widest">
            From Our Kitchen To Your Plate
          </span>
          <h2 className="marathi-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-parchment-50 leading-tight">
            “चव अशी, की पुन्हा यावंसं वाटेल.”
          </h2>
          <p className="text-parchment-300 text-sm sm:text-base font-normal">
            Every plate that leaves our kitchen at 7:00 AM follows a sacred preparation ritual that hasn't changed since day one.
          </p>
        </div>

        {/* Interactive Sticky Storytelling Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Fixed / Morphing Dish Imagery (6 cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-terracotta-border/80 bg-terracotta-deep group flex items-center justify-center">
              <AnimatePresence mode="wait">
                {/* Ambient Blurred Backdrop */}
                <motion.img
                  key={`bg-${currentStep.step}`}
                  src={currentStep.image}
                  alt=""
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.35 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 pointer-events-none select-none"
                />
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {/* Whole Food / Spice Board Photo 100% Contained & Uncropped */}
                <motion.img
                  key={currentStep.step}
                  src={currentStep.image}
                  alt={currentStep.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 w-full h-full object-contain object-center p-3 sm:p-4 filter drop-shadow-xl"
                />
              </AnimatePresence>

              {/* Step indicator on image */}
              <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-terracotta-deep/85 backdrop-blur-md border border-saffron/40 text-saffron-light text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-turmeric" />
                <span>Phase {currentStep.step} · {currentStep.title.split(' ')[1]}</span>
              </div>

              {/* Bottom bar on image */}
              <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-2xl bg-terracotta-deep/90 backdrop-blur-md border border-terracotta-border flex items-center justify-between shadow-lg">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-turmeric block">
                    Kitchen Benchmark
                  </span>
                  <p className="text-xs font-semibold text-parchment-100">
                    {currentStep.highlight}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Story Steps (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {steps.map((item, idx) => {
              const isActive = idx === activeStepIndex;

              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-terracotta-card/90 border-saffron shadow-warm-lg scale-102'
                      : 'bg-terracotta-card/30 border-terracotta-border/50 hover:border-terracotta-border hover:bg-terracotta-card/50'
                  }`}
                  data-cursor={`STEP ${item.step}`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-2xl sm:text-3xl font-black serif-headline shrink-0 ${
                        isActive ? 'text-saffron-light' : 'text-parchment-500'
                      }`}
                    >
                      {item.step}
                    </span>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3
                          className={`marathi-headline text-xl sm:text-2xl font-bold ${
                            isActive ? 'text-parchment-50' : 'text-parchment-300'
                          }`}
                        >
                          {item.marathiTitle}
                        </h3>
                        <span className="text-xs text-saffron-light font-medium">
                          ({item.title})
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-parchment-300 leading-relaxed pt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
