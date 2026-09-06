'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, Phone, Clock, ShoppingBag, X, MessageCircle } from 'lucide-react';
import { BUSINESS_DATA } from '@/lib/business-data';
import { useCart } from '@/lib/cart-context';
import { GourmetRibbon } from './GourmetRibbon';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const pathname = usePathname();
  const { totalCount, totalEstimated, setIsCartOpen } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#faf6f4] animate-fade-in overflow-y-auto">
      {/* Header bar inside menu */}
      <div className="flex items-center justify-between p-4 border-b border-[#8d7078]/15 liquid-glass">
        <div className="flex items-center gap-2.5">
          <div className="relative w-9 h-9 rounded-full overflow-hidden bg-[#fffdfc] ring-2 ring-[#f6d8df]">
            <Image
              src="/images/logo-premium-creme.png"
              alt="Logo Le Temps d’une Gourmandise"
              fill
              className="object-contain p-0.5"
            />
          </div>
          <span className="font-serif-gourmand font-bold text-base text-[#2c1a19]">
            Le Temps d’une Gourmandise
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer le menu"
          className="p-2 rounded-full text-[#543734] hover:bg-[#f6d8df]/50 focus:outline-none"
        >
          <X className="w-6 h-6 text-[#9b4f67]" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 px-6 py-8 flex flex-col justify-between">
        <nav className="space-y-4">
          <p className="text-xs uppercase font-semibold text-[#8d7078] tracking-wider">
            Navigation
          </p>
          <div className="space-y-2">
            {links.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl text-lg font-serif-gourmand transition-all ${
                    isActive
                      ? 'bg-[#f6d8df] text-[#9b4f67] font-bold shadow-xs'
                      : 'text-[#2c1a19] hover:bg-[#fdf2f4]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-sans text-[#9b4f67]/70 font-mono">
                      0{idx + 1}
                    </span>
                    <span>{link.label}</span>
                  </div>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#9b4f67]" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom Cart Action & Practical info */}
        <div className="mt-8 pt-6 border-t border-[#8d7078]/15 space-y-4">
          <button
            type="button"
            onClick={() => {
              onClose();
              setIsCartOpen(true);
            }}
            className="w-full flex items-center justify-between bg-[#9b4f67] hover:bg-[#813d52] text-white p-4 rounded-2xl shadow-md font-medium transition-colors"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <span>Ma Pause Gourmande</span>
            </div>
            <div className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
              {totalCount > 0 ? `${totalCount} art. · ${totalEstimated.toFixed(2).replace('.', ',')} €` : '0 article'}
            </div>
          </button>

          <div className="liquid-glass p-4 rounded-2xl border border-white/80 space-y-2 text-xs text-[#543734]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#9b4f67] shrink-0" />
              <span>{BUSINESS_DATA.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#9b4f67] shrink-0" />
              <a href={`tel:${BUSINESS_DATA.phoneIntl}`} className="underline font-semibold">
                {BUSINESS_DATA.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#9b4f67] shrink-0" />
              <span>{BUSINESS_DATA.scheduleEffectiveDate} (dès 9h30)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
