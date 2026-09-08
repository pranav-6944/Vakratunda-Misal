import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { restaurantReviews } from '../../data/reviews';
import { restaurantInfo } from '../../data/restaurant';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, ExternalLink } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState<number>(0);

  const handlePrev = () => {
    setScrollIndex((prev) => (prev > 0 ? prev - 1 : restaurantReviews.length - 1));
  };

  const handleNext = () => {
    setScrollIndex((prev) => (prev < restaurantReviews.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="reviews" className="py-24 bg-parchment-200/50 bg-grain relative overflow-hidden border-t border-b border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Overall Google Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-saffron">
              Verified Patron Feedback
            </span>
            <h2 className="marathi-headline text-4xl sm:text-5xl md:text-6xl font-bold text-terracotta">
              ग्राहकांची प्रामाणिक मते
            </h2>
            <p className="text-base sm:text-lg text-terracotta/75 max-w-xl">
              Genuine feedback from people who have visited Vakratunda Misal in Alandi. No fake reviews, only real love for authentic taste.
            </p>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-4 p-5 rounded-3xl bg-parchment-50 border-2 border-parchment-300 shadow-warm shrink-0">
            <div className="text-center">
              <span className="block text-4xl font-black text-terracotta serif-headline">
                {restaurantInfo.rating}
              </span>
              <div className="flex items-center gap-0.5 text-turmeric mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-turmeric" />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-parchment-300" />
            <div>
              <span className="text-sm font-bold text-terracotta block">
                Google Business
              </span>
              <span className="text-xs text-terracotta/70 font-medium">
                Based on {restaurantInfo.reviewCount} customer reviews
              </span>
              <a
                href={restaurantInfo.socials.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-saffron font-semibold flex items-center gap-1 mt-0.5 hover:underline"
              >
                <span>Read on Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Controlled Review Cards Carousel/Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {restaurantReviews.map((rev, index) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 sm:p-7 rounded-3xl bg-parchment-50 border-2 border-parchment-300 shadow-warm flex flex-col justify-between relative group hover:border-saffron/60 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Rating Stars & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-turmeric">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-turmeric" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-saffron bg-saffron/10 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{rev.badge}</span>
                    </span>
                  </div>

                  {/* Marathi Snippet */}
                  {rev.marathiSnippet && (
                    <p className="marathi-headline text-lg font-bold text-terracotta">
                      “{rev.marathiSnippet}”
                    </p>
                  )}

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-terracotta/75 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 mt-6 border-t border-parchment-200 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-terracotta">
                      {rev.author}
                    </h3>
                    <span className="text-[11px] text-terracotta/60 font-medium">
                      {rev.date} · {rev.source}
                    </span>
                  </div>
                  <Quote className="w-6 h-6 text-saffron/20 group-hover:text-saffron/40 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
