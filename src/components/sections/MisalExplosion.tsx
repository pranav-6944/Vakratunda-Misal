import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { misalIngredients } from '../../data/gallery';
import { Sparkles, Info, Check, Flame } from 'lucide-react';

export const MisalExplosion: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeIngredient = selectedId 
    ? misalIngredients.find((ing) => ing.id === selectedId) 
    : null;

  const activeData = activeIngredient || {
    id: 'all',
    marathiName: 'अस्सल मिसळ थाळी',
    name: 'Vakratunda Special Misal',
    flavorNote: 'A perfect symphony of textures and flavors',
    description: 'The complete Vakratunda experience. Every element carefully orchestrated to form the perfect harmony of crunch, heat, earthiness, and zest.'
  };

  const currentImage = activeIngredient?.image || '/images/Anatomy-All.png';

  return (
    <section id="anatomy" className="py-24 bg-parchment-100 bg-grain relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-saffron">
            2D Interactive Composition
          </span>
          <h2 className="marathi-headline text-4xl sm:text-5xl md:text-6xl font-bold text-terracotta">
            मिसळीची अंतर्गत रचना
          </h2>
          <p className="text-base sm:text-lg text-terracotta/75">
            Anatomy of the perfect bowl. Every layer is carefully orchestrated to balance crunch, heat, texture, and aroma. Click any element to deconstruct the secret.
          </p>
        </div>

        {/* Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Interactive Dish Centerpiece (7 cols) */}
          <div className="lg:col-span-7 relative flex justify-center items-center">
            {/* Ambient Background Warm Glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-saffron/15 blur-[80px] pointer-events-none" />

            {/* Central Circular Platter View */}
            <div className="relative w-full max-w-[480px] aspect-square rounded-full border-4 border-parchment-300/80 p-6 bg-parchment-200/50 shadow-warm-lg flex items-center justify-center">
              {/* Central Bowl Photo */}
              <div className="relative w-4/5 h-4/5 rounded-full overflow-hidden border-4 border-parchment-50 shadow-warm bg-parchment-100 flex items-center justify-center">
                {/* Ambient Blurred Backdrop */}
                <img
                  src={currentImage}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-xl opacity-35 scale-110 pointer-events-none select-none transition-all duration-500"
                />
                {/* Whole Dish Photo Contained */}
                <img
                  src={currentImage}
                  alt="Vakratunda Misal Anatomy"
                  className="relative z-10 w-full h-full object-contain object-center filter contrast-105 p-1 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-terracotta/10 mix-blend-multiply pointer-events-none z-20" />
              </div>

              {/* Process Arrows */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" overflow="visible">
                <defs>
                  <marker id="arrowhead" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
                    <polygon points="0 0, 4 2, 0 4" fill="#eab308" />
                  </marker>
                </defs>
                {misalIngredients.map((_, i) => {
                  if (i === misalIngredients.length - 1) return null;
                  
                  const startAngle = (i / misalIngredients.length) * 2 * Math.PI - Math.PI / 2;
                  const endAngle = ((i + 1) / misalIngredients.length) * 2 * Math.PI - Math.PI / 2;
                  
                  const gap = 0.25; 
                  const a1 = startAngle + gap;
                  const a2 = endAngle - gap;
                  
                  const r = 46;
                  const cx = 50, cy = 50;
                  
                  const x1 = cx + r * Math.cos(a1);
                  const y1 = cy + r * Math.sin(a1);
                  const x2 = cx + r * Math.cos(a2);
                  const y2 = cy + r * Math.sin(a2);
                  
                  return (
                    <path
                      key={`arrow-${i}`}
                      d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
                      fill="none"
                      stroke="#eab308"
                      strokeWidth="0.5"
                      strokeDasharray="1.5 1.5"
                      markerEnd="url(#arrowhead)"
                    />
                  );
                })}
              </svg>

              {/* Interactive Ingredient Pins Placed Geometrically Around Dish */}
              {misalIngredients.map((ing, index) => {
                const isSelected = ing.id === selectedId || (selectedId === null && ing.id === 'all');

                const angle = (index / misalIngredients.length) * 2 * Math.PI - Math.PI / 2;
                const x = 50 + 46 * Math.cos(angle);
                const y = 50 + 46 * Math.sin(angle);
                const pos = { left: `${x}%`, top: `${y}%` };

                return (
                  <div
                    key={ing.id}
                    style={{ top: pos.top, left: pos.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <button
                      onClick={() => setSelectedId(ing.id)}
                      className={`group relative flex items-center justify-center transition-all duration-300 ${
                        isSelected ? 'scale-125' : 'hover:scale-110'
                      }`}
                      aria-label={`View ${ing.name}`}
                    >
                      {/* Pulse Ring */}
                      <span
                        className={`absolute inset-0 rounded-full animate-ping opacity-60 ${
                          isSelected ? 'bg-chili' : 'bg-saffron group-hover:bg-chili'
                        }`}
                      />

                      {/* Button Core */}
                      <span
                        className={`relative w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-xs font-bold shadow-warm border-2 transition-colors ${
                          isSelected
                            ? 'bg-chili border-white text-white shadow-chili'
                            : 'bg-parchment-50 border-saffron text-terracotta hover:bg-saffron hover:text-white'
                        }`}
                      >
                        <Flame className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-saffron'}`} />
                      </span>

                      {/* Tooltip Label */}
                      <span
                        className={`absolute top-full mt-1.5 whitespace-nowrap px-2.5 py-1 rounded-md text-[11px] font-bold shadow-md transition-all ${
                          isSelected
                            ? 'bg-terracotta text-white ring-1 ring-saffron'
                            : 'bg-parchment-50/95 text-terracotta opacity-80 group-hover:opacity-100'
                        }`}
                      >
                        {ing.marathiName.split(' ')[0]}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Deep-Dive Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-parchment-50 border-2 border-parchment-300 shadow-warm relative overflow-hidden">
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-parchment-200">
                <span className="text-xs uppercase tracking-widest font-bold text-saffron flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Layer Analysis</span>
                </span>
                <span className="text-xs font-mono text-terracotta/50">
                  {selectedId === null ? `${misalIngredients.length} / ${misalIngredients.length}` : `${misalIngredients.findIndex((i) => i.id === selectedId) + 1} / ${misalIngredients.length}`}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 pt-4"
                >
                  <div>
                    <h3 className="marathi-headline text-2xl sm:text-3xl font-bold text-terracotta">
                      {activeData.marathiName}
                    </h3>
                    <p className="text-sm font-serif text-saffron font-medium">
                      {activeData.name}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-parchment-200/70 border border-parchment-300">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta/70 block">
                      Flavor Signature
                    </span>
                    <p className="text-sm font-semibold text-terracotta mt-0.5">
                      {activeData.flavorNote}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-terracotta/80 leading-relaxed">
                    {activeData.description}
                  </p>

                  {/* Interactive Ingredient Selector Pills */}
                  <div className="pt-4 border-t border-parchment-200 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta/60 block">
                      Inspect All Components:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {misalIngredients.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSelectedId(item.id === 'all' ? null : item.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            (item.id === selectedId) || (selectedId === null && item.id === 'all')
                              ? 'bg-saffron text-white shadow-sm'
                              : 'bg-parchment-200 text-terracotta hover:bg-parchment-300'
                          }`}
                        >
                          {item.name.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
