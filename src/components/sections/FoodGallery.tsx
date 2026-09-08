import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../../data/gallery';
import { GalleryItem } from '../../types';
import { Maximize2, X, Sparkles } from 'lucide-react';

export const FoodGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-parchment-100 bg-grain relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-saffron">
            Visual Story
          </span>
          <h2 className="marathi-headline text-4xl sm:text-5xl md:text-6xl font-bold text-terracotta">
            पदार्थांची क्षणचित्रे
          </h2>
          <p className="text-base sm:text-lg text-terracotta/75">
            Photographs captured straight from our kitchen and dining tables in Alandi. Fresh food, steaming aromas, and honest flavors.
          </p>
        </div>

        {/* Masonry Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => {
            // Give different heights for authentic masonry feel
            const heightClasses =
              item.aspect === 'tall'
                ? 'aspect-[3/4]'
                : item.aspect === 'wide'
                ? 'aspect-[4/3]'
                : 'aspect-square';

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group relative rounded-3xl overflow-hidden shadow-warm border-2 border-parchment-300 bg-parchment-100 cursor-pointer transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center ${heightClasses}`}
                data-cursor="VIEW"
              >
                {/* Ambient Blurred Backdrop so letterbox/pillarbox fills with warm image tones */}
                <img
                  src={item.imageUrl}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-xl opacity-35 scale-110 pointer-events-none select-none"
                />

                {/* Uncropped Whole Food Photo */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="relative z-10 w-full h-full object-contain object-center p-3 group-hover:scale-105 transition-transform duration-500 filter drop-shadow-md"
                />

                {/* Bottom dark gradient for caption readability */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-terracotta-deep/90 via-terracotta-deep/40 to-transparent pointer-events-none z-20" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-30">
                  <span className="px-3 py-1 rounded-full bg-parchment-50/90 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-terracotta border border-parchment-200 shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Click to expand button */}
                <div className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-parchment-50/85 backdrop-blur-md flex items-center justify-center text-terracotta group-hover:bg-saffron group-hover:text-white transition-colors shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 z-30 space-y-0.5">
                  <h3 className="marathi-headline text-lg sm:text-xl font-bold text-parchment-50">
                    {item.marathiTitle}
                  </h3>
                  <p className="text-xs text-parchment-300 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 z-50 bg-terracotta-deep/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-pointer"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-parchment-50 rounded-3xl overflow-hidden shadow-2xl border-2 border-parchment-300"
              >
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-terracotta-deep/70 text-white hover:bg-terracotta-deep transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    className="w-full h-auto max-h-[65vh] object-contain"
                  />
                </div>

                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="marathi-headline text-2xl font-bold text-terracotta">
                      {activeItem.marathiTitle}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-saffron bg-saffron/10 px-3 py-1 rounded-full">
                      {activeItem.category}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-terracotta/75">
                    {activeItem.title}
                  </p>
                  <p className="text-xs sm:text-sm text-terracotta/70 leading-relaxed">
                    {activeItem.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
