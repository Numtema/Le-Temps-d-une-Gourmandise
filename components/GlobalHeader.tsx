'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Phone, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { BUSINESS_DATA } from '@/lib/business-data';
import { GourmetRibbon } from './GourmetRibbon';
import { MobileMenu } from './MobileMenu';

export function GlobalHeader() {
  const pathname = usePathname();
  const { totalCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/la-carte', label: 'La Carte' },
    { href: '/offres', label: 'Offres' },
    { href: '/la-boutique', label: 'La Boutique' },
    { href: '/infos-pratiques', label: 'Horaires & Infos' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[#2c1a19] text-[#fff9f5] text-xs py-2 px-4 transition-colors border-b border-[#8d7078]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 bg-[#9b4f67] text-white px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase shadow-xs">
              <Sparkles className="w-3 h-3" /> Fécamp
            </span>
            <span className="hidden sm:inline text-[#f6d8df]">
              {BUSINESS_DATA.address} · Ouvert dès 9h30
            </span>
            <span className="sm:hidden text-[#f6d8df]">
              Pause sucrée & salée à Fécamp
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-[11px] sm:text-xs">
            <a
              href={`tel:${BUSINESS_DATA.phoneIntl}`}
              className="flex items-center gap-1.5 hover:text-[#dfa0b1] transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-[#dfa0b1]" />
              <span>{BUSINESS_DATA.phone}</span>
            </a>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:flex items-center gap-1 text-[#faf6f4]/80">
              <Clock className="w-3 h-3 text-[#dfa0b1]" />
              {BUSINESS_DATA.scheduleEffectiveDate}
            </span>
          </div>
        </div>
      </div>

      {/* Main Floating Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'liquid-glass shadow-sm py-2.5'
            : 'bg-[#faf6f4]/90 backdrop-blur-md py-3.5 border-b border-[#8d7078]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9b4f67] rounded-xl p-1"
          >
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 shrink-0 rounded-full overflow-hidden shadow-xs ring-2 ring-[#f6d8df] group-hover:scale-105 transition-transform duration-300 bg-[#fffdfc]">
              <Image
                src="/images/logo-premium-creme.png"
                alt="Logo Le Temps d’une Gourmandise Fécamp"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-gourmand font-extrabold text-lg sm:text-xl tracking-tight text-[#2c1a19] leading-tight group-hover:text-[#9b4f67] transition-colors">
                Le Temps d’une Gourmandise
              </span>
              <span className="text-[11px] text-[#543734]/80 font-medium tracking-wide flex items-center gap-1.5">
                <span className="font-script-gourmand text-base text-[#9b4f67] font-bold">Fécamp</span>
                <span>·</span>
                <span className="text-[#9b4f67] font-semibold text-[11px]">Pause Sucrée & Salée</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#9b4f67] font-semibold bg-[#f6d8df]/70 shadow-xs'
                      : 'text-[#543734] hover:text-[#2c1a19] hover:bg-[#fdf2f4]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#9b4f67] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Ma Pause Gourmande CTA */}
            <button
              onClick={() => setIsCartOpen(true)}
              type="button"
              aria-label="Voir Ma Pause Gourmande"
              className="relative flex items-center gap-2 bg-[#9b4f67] hover:bg-[#813d52] text-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm shadow-sm hover:shadow-md transition-all active:scale-98"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Ma Pause</span>
              {totalCount > 0 && (
                <span className="bg-white text-[#9b4f67] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden p-2 rounded-full text-[#543734] hover:bg-[#f6d8df]/50 focus:outline-none focus:ring-2 focus:ring-[#9b4f67] transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#9b4f67]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
