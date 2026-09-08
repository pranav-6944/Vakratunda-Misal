import React from 'react';
import { motion } from 'framer-motion';
import { Flame, MapPin, Phone, Sparkles } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurant';
import { SteamEffect } from '../ui/SteamEffect';
import confetti from 'canvas-confetti';

export const FinalCTA: React.FC = () => {
  const triggerSpiceConfetti = () => {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#D9531E', '#B91C1C', '#EAB308', '#2D5A27'],
    });
  };

  return (
    <section className="relative py-28 bg-terracotta-deep text-parchment-100 overflow-hidden">
      {/* Background Image with Dark Heat Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Misal.png"
          alt="Misal Pav Background"
          className="w-full h-full object-cover object-center opacity-25 filter blur-xs contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-terracotta-deep via-terracotta-deep/80 to-terracotta-deep/90" />
      </div>

      {/* Steam simulation across CTA */}
      <SteamEffect intensity="medium" className="z-10" />

      {/* Warm Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-chili/25 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 space-y-8">
        {/* Chili Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-chili/20 border border-chili/40 text-saffron-light text-xs font-bold uppercase tracking-widest"
        >
          <Flame className="w-4 h-4 text-chili animate-pulse" />
          <span>The Real Taste Awaits You</span>
        </motion.div>

        {/* Huge Statement */}
        <div className="space-y-3">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-parchment-50 tracking-tight serif-headline uppercase">
            Hungry Yet? <span className="text-chili">🌶️</span>
          </h2>
          <p className="marathi-headline text-3xl sm:text-4xl md:text-5xl font-bold text-turmeric">
            चला, गरमागरम मिसळ खाऊया !
          </p>
          <p className="text-base sm:text-xl text-parchment-300 max-w-xl mx-auto font-medium">
            Come get your misal. Fresh sprouted matki, bubbling red tari, crispy farsan and buttery pav are ready in Alandi.
          </p>
        </div>

        {/* High Conversion CTA Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href={restaurantInfo.socials.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            onClick={triggerSpiceConfetti}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-saffron to-chili hover:from-saffron-light hover:to-chili-light text-white font-bold text-lg shadow-chili hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2.5"
            data-cursor="GO"
          >
            <MapPin className="w-5 h-5 text-turmeric" />
            <span>Get Directions</span>
          </a>

          <a
            href={`tel:${restaurantInfo.phone1Raw}`}
            onClick={triggerSpiceConfetti}
            className="px-8 py-4 rounded-full bg-parchment-50/10 hover:bg-parchment-50/20 border-2 border-parchment-300 text-parchment-50 font-bold text-lg backdrop-blur-sm transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2.5"
            data-cursor="CALL"
          >
            <Phone className="w-5 h-5 text-saffron-light" />
            <span>Call: {restaurantInfo.phone1}</span>
          </a>
        </div>

        <p className="text-xs text-parchment-400 font-devanagariSans pt-2">
          आळंदी रोड, विश्वेश्वर नगर · सकाळी ७ ते रात्री १० · दररोज सुरू
        </p>
      </div>
    </section>
  );
};
