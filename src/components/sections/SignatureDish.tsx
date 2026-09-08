import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurant';
import {
  TariBucketIcon,
  MaharashtrianChiliIcon,
  SproutedMatkiIcon,
  BakeryPavIcon,
  AlandiTempleIcon,
} from '../icons/CulturalIcons';

export const SignatureDish: React.FC = () => {
  return (
    <section id="signature" className="py-24 bg-parchment-200/50 bg-grain relative overflow-hidden border-t border-b border-parchment-300">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-saffron/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Huge Misal Image Showcase */}
          <div className="absolute inset-0 lg:relative lg:col-span-7 flex justify-center items-center pointer-events-none lg:pointer-events-auto opacity-80 lg:opacity-100 z-0 lg:z-auto">
            <div className="relative w-full h-full lg:w-auto lg:h-auto">
              {/* Decorative Frame Behind */}
              <div className="hidden lg:block absolute -inset-4 bg-terracotta/5 rounded-3xl -rotate-1 border border-saffron/20 pointer-events-none" />

              <div className="relative w-full h-full lg:rounded-2xl overflow-hidden lg:shadow-warm-lg lg:border-2 border-parchment-200 lg:bg-parchment-50 flex flex-col items-center justify-center">
                {/* Ambient Blurred Backdrop so letterbox/pillarbox blends naturally */}
                <img
                  src="/images/Misal1.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-110 pointer-events-none select-none"
                />

                {/* Main Food Photo - 100% Fully Contained & Uncropped */}
                <div className="relative z-10 w-full h-full lg:h-auto flex items-center justify-center p-0 lg:p-3 sm:p-5">
                  <img
                    src="/images/Misal1.png"
                    alt="Special Vakratunda Misal Thali"
                    className="w-full h-full lg:h-auto max-h-none lg:max-h-[580px] object-cover lg:object-contain object-center drop-shadow-xl lg:rounded-xl transform hover:scale-102 transition-transform duration-700"
                  />

                  {/* Corner Stamp */}
                  <div className="hidden lg:flex absolute top-6 left-6 px-3.5 py-1.5 rounded-xl bg-terracotta-deep/85 backdrop-blur-md border border-turmeric/40 text-turmeric text-xs font-bold uppercase tracking-wider items-center gap-2 shadow-md">
                    <AlandiTempleIcon className="w-4 h-4 text-saffron-light" />
                    <span>Original Recipe · Alandi</span>
                  </div>
                </div>

                {/* Bottom Caption Pill - docked cleanly at bottom so it never covers the food */}
                <div className="hidden lg:flex relative z-10 w-full p-4 bg-parchment-100/95 backdrop-blur-md border-t border-parchment-300 items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-600 ring-2 ring-emerald-300 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-terracotta font-devanagariSans">
                        १००% अस्सल शाकाहारी मटकी उसळ थाळी
                      </p>
                      <p className="text-[11px] text-terracotta/70">
                        Served with hot rassa, soft pav, chopped salad, fresh dahi & sweet
                      </p>
                    </div>
                  </div>
                  <span className="text-xl font-black text-saffron serif-headline shrink-0">
                    ₹120
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High Editorial Typography Content */}
          <div className="lg:col-span-5 space-y-6 relative z-10 py-10 lg:py-0 px-2 sm:px-4 lg:px-0">
            <div className="space-y-2">
              <span className="text-5xl md:text-6xl font-black text-saffron/20 serif-headline select-none">
                01
              </span>
              <p className="text-xs uppercase font-bold tracking-[0.25em] text-saffron">
                THE SIGNATURE FEAST
              </p>
              <h2 className="marathi-headline text-4xl sm:text-5xl md:text-6xl font-bold text-terracotta leading-tight">
                वक्रतुंड मिसळ
              </h2>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-terracotta/80 leading-relaxed font-medium pt-4 pb-2">
              A traditional Maharashtrian misal prepared for people who love bold, unapologetic flavours. Tender sprouted moth beans slow-simmered in cold-pressed peanut oil with roasted stone flower and dry coconut masala, served with our signature piping hot red kat.
            </p>

            {/* Price and CTAs */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <div>
                <span className="block text-xs uppercase tracking-wider text-terracotta/60 font-semibold">
                  Complete Plate
                </span>
                <span className="text-4xl font-black text-terracotta serif-headline">
                  ₹120
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={restaurantInfo.whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                  data-cursor="ORDER"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Order</span>
                </a>

                <a
                  href="#location"
                  className="px-5 py-3 rounded-full bg-saffron hover:bg-saffron-dark text-white font-bold text-xs sm:text-sm shadow-saffron transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                  data-cursor="VISIT"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Visit Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
