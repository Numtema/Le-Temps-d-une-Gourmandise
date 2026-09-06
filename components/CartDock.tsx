'use client';

import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export function CartDock() {
  const { totalCount, totalEstimated, setIsCartOpen } = useCart();

  if (totalCount === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-30 lg:hidden animate-slide-up">
      <button
        type="button"
        onClick={() => setIsCartOpen(true)}
        className="w-full liquid-glass-dark text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-between border border-white/20 active:scale-98 transition-transform"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#9b4f67] flex items-center justify-center text-white relative shadow-sm">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-white text-[#9b4f67] font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
              {totalCount}
            </span>
          </div>
          <div className="text-left">
            <p className="text-xs text-[#dfa0b1]">Ma Pause Gourmande</p>
            <p className="font-serif-gourmand font-bold text-sm text-white">
              {totalEstimated.toFixed(2).replace('.', ',')} €
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-[#9b4f67] hover:bg-[#813d52] text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xs transition-colors">
          <span>Voir ma pause</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </button>
    </div>
  );
}
