import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurant';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 bg-parchment-50/95 backdrop-blur-md border-t border-parchment-300 shadow-[0_-8px_25px_rgba(46,28,20,0.15)]">
      <div className="flex items-center gap-1.5 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${restaurantInfo.phone1Raw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-terracotta text-white font-semibold text-xs shadow-warm active:scale-98 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-turmeric shrink-0" />
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[9px] text-parchment-300 uppercase tracking-wider font-normal">
              Call
            </span>
            <span className="text-[11px] font-bold text-parchment-50 truncate">
              073507 28284
            </span>
          </div>
        </a>

        {/* WhatsApp Order Button */}
        <a
          href={restaurantInfo.whatsappOrderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs shadow-sm active:scale-98 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[9px] text-emerald-100 uppercase tracking-wider font-normal font-devanagariSans">
              पार्सल
            </span>
            <span className="text-[11px] font-bold text-white">
              WhatsApp
            </span>
          </div>
        </a>

        {/* Directions Button */}
        <a
          href="/#location"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-saffron to-chili text-white font-semibold text-xs shadow-saffron active:scale-98 transition-all"
        >
          <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[9px] text-parchment-100 uppercase tracking-wider font-normal font-devanagariSans">
              आळंदी
            </span>
            <span className="text-[11px] font-bold text-white">
              Directions
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
