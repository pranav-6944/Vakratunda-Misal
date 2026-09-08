import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone } from 'lucide-react';

export const MenuExperience: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-parchment-200/60 bg-grain relative overflow-hidden border-t border-b border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-saffron">
            Original Alandi Menu & Prices
          </span>
          <h2 className="marathi-headline text-4xl sm:text-5xl md:text-6xl font-bold text-terracotta">
            अस्सल चवीचा मेनू फलक
          </h2>
          <p className="text-base sm:text-lg text-terracotta/75">
            Authentic editorial menu directly from our restaurant board. Pure vegetarian delights cooked fresh throughout the day.
          </p>
        </div>

        {/* The Menu Image */}
        <div className="w-full flex justify-center relative">
          {/* Ambient shadow/blur behind */}
          <div className="absolute inset-0 bg-saffron/10 blur-[80px] rounded-full pointer-events-none" />

          <img
            src="/images/Menu.png"
            alt="Vakratunda Misal Menu"
            className="relative z-10 w-full max-w-3xl h-auto rounded-2xl shadow-warm-lg border-4 border-parchment-50 object-contain"
          />
        </div>

        {/* Call to action for the new interactive Menu Page */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/menu"
            className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg sm:text-xl shadow-lg transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-3"
          >
            <Smartphone className="w-5 h-5" />
            <span>Order via WhatsApp</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
