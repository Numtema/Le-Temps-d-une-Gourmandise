'use client';

import React from 'react';
import { Sparkles, Heart, Coffee, Utensils, Award } from 'lucide-react';

const MARQUEE_ITEMS = [
  { text: 'Vu dans Paris-Normandie', icon: Award },
  { text: 'Gaufres dorées minute', icon: Sparkles },
  { text: 'Sandwichs chauds toastés', icon: Utensils },
  { text: 'Recommandé Restaurant Guru 5.0 ★', icon: Award },
  { text: 'Glaces Mövenpick de maître glacier', icon: Sparkles },
  { text: 'Chocolat chaud maison onctueux', icon: Coffee },
  { text: 'Brookies & Brownies fondants', icon: Heart },
  { text: 'TripAdvisor 4.8 ★ Avis vérifiés', icon: Award },
  { text: '4 Place Saint-Étienne · Fécamp', icon: Sparkles },
  { text: 'Sur place & À emporter', icon: Utensils },
  { text: 'Commande WhatsApp directe', icon: Heart },
];

export function LiveTicker() {
  return (
    <div className="bg-[#2c1a19] text-[#fff9f5] border-y border-[#8d7078]/30 py-3 overflow-hidden relative shadow-inner">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#2c1a19] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#2c1a19] to-transparent z-10 pointer-events-none" />
      
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Loop twice for continuous marquee */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 mx-6 group cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfa0b1]" />
              <span className="font-serif-gourmand text-xs sm:text-sm tracking-wide text-[#fff9f5]/90 font-medium group-hover:text-[#dfa0b1] transition-colors">
                {item.text}
              </span>
              <Icon className="w-3.5 h-3.5 text-[#dfa0b1] opacity-90" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
