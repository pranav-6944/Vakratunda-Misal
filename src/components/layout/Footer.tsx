import React from 'react';
import { Phone, MapPin, Globe, Clock, Heart } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurant';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-terracotta-deep text-parchment-200 pt-16 pb-24 md:pb-16 border-t border-terracotta-border/50 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-saffron/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-terracotta-border/40">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/Logo.png"
                alt="Vakratunda Misal"
                className="w-14 h-14 rounded-full border border-saffron/50 shadow-md object-contain bg-parchment-50/10 p-0.5"
              />
              <div>
                <h3 className="marathi-headline text-2xl md:text-3xl font-bold text-parchment-50">
                  वक्रतुंड मिसळ व भेळ
                </h3>
                <p className="text-xs uppercase tracking-widest text-saffron-light font-semibold">
                  Authentic Maharashtrian Flavours · Alandi, Pune
                </p>
              </div>
            </div>

            <p className="text-sm text-parchment-400 max-w-md leading-relaxed">
              Serving handcrafted, slow-simmered Maharashtrian Misal Pav, crisp matki bhel, and kadak cutting chai in the holy city of Alandi.
            </p>

            <div className="pt-2 flex items-center gap-2 text-turmeric font-devanagariSans text-sm">
              <span className="text-lg">“</span>
              <span>{restaurantInfo.marathiTagline}</span>
              <span className="text-lg">”</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-parchment-100">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-parchment-400">
              <li>
                <a href="#signature" className="hover:text-saffron-light transition-colors">
                  Signature Dish (खास मिसळ)
                </a>
              </li>
              <li>
                <a href="#anatomy" className="hover:text-saffron-light transition-colors">
                  Misal Anatomy (घटक रचना)
                </a>
              </li>
              <li>
                <a href="#spicemeter" className="hover:text-saffron-light transition-colors">
                  Interactive Spice Meter (तिखट मीटर)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-saffron-light transition-colors">
                  Full Menu & Prices (मेनू व दर)
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-saffron-light transition-colors">
                  Our Story (आमची गोष्ट)
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-saffron-light transition-colors">
                  Customer Reviews (परीक्षणे)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-parchment-100">
              Visit & Contact
            </h4>
            <div className="space-y-2.5 text-sm text-parchment-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-saffron shrink-0 mt-0.5" />
                <span>{restaurantInfo.address.full}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-turmeric shrink-0" />
                <span>Daily: 7:00 AM – 10:00 PM</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${restaurantInfo.phone1Raw}`} className="hover:text-white">
                  {restaurantInfo.phone1}
                </a>
                <span className="text-terracotta-border">/</span>
                <a href={`tel:${restaurantInfo.phone2Raw}`} className="hover:text-white">
                  {restaurantInfo.phone2}
                </a>
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={restaurantInfo.socials.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-terracotta-card hover:bg-saffron text-parchment-200 hover:text-white transition-all"
                title="Google Maps"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={restaurantInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-terracotta-card hover:bg-saffron text-parchment-200 hover:text-white transition-all"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-parchment-500">
          <p>© 2026 Vakratunda Misal. All Rights Reserved. Alandi, Pune.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-chili fill-chili" />
            <span>for Maharashtrian street food lovers</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
