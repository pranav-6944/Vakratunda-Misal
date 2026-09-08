import React from 'react';
import { Phone, MapPin, Clock, Navigation, CheckCircle, ExternalLink, Calendar, MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurant';
import { getRestaurantStatus } from '../../utils/status';

export const LocationSection: React.FC = () => {
  const status = getRestaurantStatus();

  return (
    <section id="location" className="py-24 bg-parchment-100 bg-grain relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-saffron">
            Find & Visit Us
          </span>
          <h2 className="marathi-headline text-4xl sm:text-5xl md:text-6xl font-bold text-terracotta">
            पत्ता आणि वेळ
          </h2>
          <p className="text-base sm:text-lg text-terracotta/75">
            Conveniently located on Alandi Road in Vishweshwar Nagar. Ample parking space and quick highway access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Practical Visit Details & Call CTAs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-parchment-50 border-2 border-parchment-300 shadow-warm">
            <div className="space-y-6">
              {/* Restaurant Name & Badge */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron/10 text-saffron text-xs font-bold uppercase tracking-wider">
                  <span className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                  <span>{status.statusText}</span>
                </div>

                <h3 className="marathi-headline text-3xl sm:text-4xl font-bold text-terracotta">
                  {restaurantInfo.name}
                </h3>
                <p className="font-devanagariSans text-base text-saffron font-bold">
                  {restaurantInfo.marathiName}
                </p>
              </div>

              {/* Address details */}
              <div className="space-y-4 pt-2 border-t border-parchment-200">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-parchment-200 text-saffron shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-terracotta/60 block">
                      Address
                    </span>
                    <p className="text-sm font-semibold text-terracotta leading-snug">
                      {restaurantInfo.address.line1}, {restaurantInfo.address.locality}, {restaurantInfo.address.city}, Maharashtra {restaurantInfo.address.pincode}
                    </p>
                    <span className="text-xs text-terracotta/70 font-devanagariSans block mt-0.5">
                      आळंदी रोड, विश्वेश्वर नगर, आळंदी, पुणे
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-parchment-200 text-turmeric-dark shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-terracotta/60 block">
                      Operating Hours
                    </span>
                    <p className="text-sm font-semibold text-terracotta">
                      {restaurantInfo.timing.display}
                    </p>
                    <span className="text-xs text-terracotta/70 block">
                      {restaurantInfo.timing.days}
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-parchment-200 text-emerald-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-terracotta/60 block">
                      Direct Phone
                    </span>
                    <div className="flex flex-wrap gap-2 text-sm font-bold text-terracotta mt-0.5">
                      <a href={`tel:${restaurantInfo.phone1Raw}`} className="hover:text-saffron transition-colors">
                        {restaurantInfo.phone1}
                      </a>
                      <span className="text-terracotta/40">/</span>
                      <a href={`tel:${restaurantInfo.phone2Raw}`} className="hover:text-saffron transition-colors">
                        {restaurantInfo.phone2}
                      </a>
                    </div>
                  </div>
                </div>
                {/* Temple Distance Highlight */}
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-turmeric/10 border border-turmeric/30">
                  <div className="p-2 rounded-xl bg-turmeric/20 text-terracotta shrink-0 text-base">
                    🪔
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-saffron block">
                      Alandi Mandir Proximity
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-terracotta font-devanagariSans">
                      {restaurantInfo.templeInfo.marathiBadge}
                    </p>
                    <span className="text-[11px] text-terracotta/70 block mt-0.5">
                      {restaurantInfo.templeInfo.englishBadge} · Quick 4-min drive on Alandi Rd
                    </span>
                  </div>
                </div>
              </div>

              {/* Visiting perks */}
              <div className="pt-2 space-y-2 text-xs text-terracotta/80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Two-wheeler & Car parking space available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Dine-in, Leak-Proof Takeaway & Family seating</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Bulk orders & pilgrim groups (वारकरी मंडळ) welcome</span>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="pt-6 mt-6 border-t border-parchment-200 flex flex-col sm:flex-row gap-2.5">
              <a
                href={restaurantInfo.whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all"
                data-cursor="ORDER"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>

              <a
                href={`tel:${restaurantInfo.phone1Raw}`}
                className="flex-1 py-3 px-3 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-bold text-xs sm:text-sm shadow-warm flex items-center justify-center gap-2 transition-all"
                data-cursor="CALL"
              >
                <Phone className="w-4 h-4 text-turmeric" />
                <span>Call Now</span>
              </a>

              <a
                href={restaurantInfo.socials.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-3 rounded-xl bg-saffron hover:bg-saffron-dark text-white font-bold text-xs sm:text-sm shadow-saffron flex items-center justify-center gap-2 transition-all"
                data-cursor="MAPS"
              >
                <Navigation className="w-4 h-4" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-warm-lg border-2 border-parchment-300 bg-parchment-200 relative min-h-[420px] flex flex-col">
            <iframe
              title="Vakratunda Misal Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.4578148332936!2d73.8895855!3d18.6712434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9b5a9392527%3A0xa159b38c06baecad!2sVakratunda%20Misal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full flex-1 border-0 min-h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Bottom floating bar */}
            <div className="p-4 bg-parchment-50 border-t border-parchment-300 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-terracotta/80">
                <MapPin className="w-4 h-4 text-saffron" />
                <span className="font-semibold">Vishweshwar Nagar, Alandi Rd</span>
              </div>
              <a
                href={restaurantInfo.socials.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-saffron hover:text-saffron-dark flex items-center gap-1 hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
