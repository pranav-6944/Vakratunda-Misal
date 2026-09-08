import React from 'react';
import { motion } from 'framer-motion';
import { Package, ShieldCheck, Flame, MessageCircle, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurant';

export const ParcelFeature: React.FC = () => {
  return (
    <section className="py-20 bg-parchment-50 bg-grain relative overflow-hidden border-t border-b border-parchment-300">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-saffron/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-parchment-100/90 border-2 border-parchment-300 p-8 sm:p-12 shadow-warm relative overflow-hidden">
          {/* Accent Ribbon */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron/15 text-saffron-dark text-xs font-bold uppercase tracking-wider mb-6">
            <Package className="w-4 h-4 text-saffron" />
            <span>विशेष पार्सल सुविधा · Travel Safe Parcel</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="marathi-headline text-3xl sm:text-4xl md:text-5xl font-bold text-terracotta leading-tight">
                {restaurantInfo.parcelInfo.title}
              </h2>
              <p className="text-base sm:text-lg text-terracotta/80 font-medium">
                Going home to Pune, PCMC, or traveling back after Alandi temple darshan? Take the authentic Vakratunda taste with you without worrying about spills!
              </p>

              {/* 4 Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-parchment-50 border border-parchment-300 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-saffron font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Double-Sealed Tari Pouch</span>
                  </div>
                  <p className="text-xs text-terracotta/75 font-devanagariSans">
                    उकळणारा गरम कट/रस्सा खास लिक-प्रूफ पाऊचमध्ये, दुचाकीवरही अजिबात गळती नाही.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-parchment-50 border border-parchment-300 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-saffron font-bold text-sm">
                    <Sparkles className="w-4 h-4 text-turmeric" />
                    <span>100% Separate Farsan</span>
                  </div>
                  <p className="text-xs text-terracotta/75 font-devanagariSans">
                    फरसाण, मटकी व शेव वेगळे पॅक केले जातात जेणेकरून खाताना कुरकुरीतपणा कायम राहील.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-parchment-50 border border-parchment-300 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-saffron font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Fresh Soft Pav</span>
                  </div>
                  <p className="text-xs text-terracotta/75 font-devanagariSans">
                    स्थानिक बेकरीचे ताजे लादी पाव व्यवस्थित पॅक करून दिले जातात.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-parchment-50 border border-parchment-300 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-saffron font-bold text-sm">
                    <Flame className="w-4 h-4 text-chili" />
                    <span>Onion & Lemon Kit</span>
                  </div>
                  <p className="text-xs text-terracotta/75 font-devanagariSans">
                    कांदा आणि रसरशीत लिंबाची फोड स्वतंत्र दिली जाते.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Action Card */}
            <div className="lg:col-span-5 bg-terracotta-dark text-parchment-100 p-6 sm:p-8 rounded-3xl shadow-warm-lg space-y-6 border border-terracotta-border">
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-light">
                  Quick Pre-Order & Takeaway
                </span>
                <h3 className="marathi-headline text-2xl sm:text-3xl font-bold text-parchment-50">
                  पार्सल आधीच तयार ठेवा !
                </h3>
                <p className="text-xs text-parchment-300 leading-relaxed">
                  Call or WhatsApp us 15 minutes before reaching to have your hot parcels packed and ready for pickup. No waiting time!
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={restaurantInfo.whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5"
                  data-cursor="WHATSAPP"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Order on WhatsApp (व्हॉट्सॲप)</span>
                </a>

                <a
                  href={`tel:${restaurantInfo.phone1Raw}`}
                  className="w-full py-3.5 px-5 rounded-2xl bg-terracotta-card hover:bg-terracotta-card/80 border border-terracotta-border text-parchment-100 font-bold text-sm flex items-center justify-center gap-2.5 transition-all"
                >
                  <Phone className="w-4 h-4 text-turmeric" />
                  <span>Call to Pack: {restaurantInfo.phone1}</span>
                </a>
              </div>

              <div className="pt-2 border-t border-terracotta-border/50 text-[11px] text-parchment-400 flex items-center justify-between">
                <span>⚡ Ready in 10–15 mins</span>
                <span>📦 Bulk Yatra orders accepted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
