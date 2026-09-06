'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tag, Sparkles, CheckCircle2, ArrowRight, Clock, MapPin, ShoppingBag } from 'lucide-react';
import { CATALOG } from '@/lib/catalog';
import { useCart } from '@/lib/cart-context';
import { GourmetRibbon } from '@/components/GourmetRibbon';

export default function OffresPage() {
  const { setQuickViewItem } = useCart();

  const formuleCookie = CATALOG.find((c) => c.id === 'formule-cookie-rentree');
  const formuleDonut = CATALOG.find((c) => c.id === 'formule-donut-rentree');

  return (
    <div className="bg-[#fff9f5] min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#f9dde4] text-[#b92555] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>Offres & Formules Rentrée</span>
          </div>

          <h1 className="font-serif-gourmand font-bold text-3xl sm:text-4xl lg:text-5xl text-[#2e1714]">
            Les offres du moment.
          </h1>

          <p className="text-xs sm:text-sm text-[#5a2d27] leading-relaxed">
            Pour accompagner vos pauses matinales, méridiennes ou le goûter,
            Le Temps d’une Gourmandise vous propose ses petites formules à prix tout doux à Fécamp.
          </p>

          <GourmetRibbon variant="line" color="#d94a73" className="w-32 mx-auto" />
        </div>

        {/* Big Offer Bento Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Formule Cookie */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#5a2d27]/10 shadow-sm flex flex-col justify-between">
            <div className="relative h-64 bg-[#f9dde4]">
              <Image
                src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop"
                alt="Formule Cookie plus boisson"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 bg-[#b92555] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                Offre Rentrée
              </div>
              <div className="absolute bottom-4 right-4 bg-white/95 text-[#b92555] font-serif-gourmand font-extrabold text-2xl px-4 py-2 rounded-2xl shadow-md">
                2,50 €
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h2 className="font-serif-gourmand font-bold text-2xl text-[#2e1714]">
                  Formule Cookie + Boisson
                </h2>
                <p className="text-xs sm:text-sm text-[#5a2d27] leading-relaxed">
                  Un délicieux cookie aux pépites de chocolat fondant accompagné d’une boisson au choix, chaude (café, chocolat chaud) ou canette fraîche.
                </p>

                <div className="space-y-2 pt-2 border-t border-[#5a2d27]/10 text-xs text-[#5a2d27]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b92555] shrink-0" />
                    <span>Cookie chocolat fondant préparé chaque jour</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b92555] shrink-0" />
                    <span>Boisson au choix : café, thé, chocolat, canette 33cl</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b92555] shrink-0" />
                    <span>Sur place ou à emporter</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (formuleCookie) setQuickViewItem(formuleCookie);
                }}
                className="w-full py-3.5 rounded-2xl bg-[#b92555] hover:bg-[#951d45] text-white font-semibold text-sm shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Ajouter à ma pause (2,50 €)</span>
              </button>
            </div>
          </div>

          {/* Card 2: Formule Donut */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#5a2d27]/10 shadow-sm flex flex-col justify-between">
            <div className="relative h-64 bg-[#f9dde4]">
              <Image
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop"
                alt="Formule Donut plus boisson"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 bg-[#b92555] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                Offre Rentrée
              </div>
              <div className="absolute bottom-4 right-4 bg-white/95 text-[#b92555] font-serif-gourmand font-extrabold text-2xl px-4 py-2 rounded-2xl shadow-md">
                2,00 €
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h2 className="font-serif-gourmand font-bold text-2xl text-[#2e1714]">
                  Formule Donut + Boisson
                </h2>
                <p className="text-xs sm:text-sm text-[#5a2d27] leading-relaxed">
                  Un donut gourmand au sucre ou au chocolat avec une boisson chaude ou canette fraîche de votre choix pour seulement 2€ !
                </p>

                <div className="space-y-2 pt-2 border-t border-[#5a2d27]/10 text-xs text-[#5a2d27]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b92555] shrink-0" />
                    <span>Donut moelleux au sucre ou nappé de chocolat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b92555] shrink-0" />
                    <span>Canette fraîche au choix ou boisson chaude</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b92555] shrink-0" />
                    <span>Idéal pour le goûter ou la récréation</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (formuleDonut) setQuickViewItem(formuleDonut);
                }}
                className="w-full py-3.5 rounded-2xl bg-[#b92555] hover:bg-[#951d45] text-white font-semibold text-sm shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Ajouter à ma pause (2,00 €)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Practical Terms Notice */}
        <div className="bg-[#fffdfc] rounded-3xl p-6 sm:p-8 border border-[#5a2d27]/10 space-y-3 max-w-3xl mx-auto text-xs text-[#5a2d27] leading-relaxed">
          <h3 className="font-serif-gourmand font-bold text-base text-[#2e1714]">
            Conditions & Disponibilités
          </h3>
          <p>
            • Offres valables pendant la période de rentrée dans la limite des stocks disponibles du jour.
          </p>
          <p>
            • Les boissons incluses dans les formules comprennent les canettes standards (33cl), cafés expresso, allongés et chocolats chauds classiques.
          </p>
          <p>
            • Lors de votre commande via le site, vous sélectionnez vos parfums et options préférées. La boutique confirme ensuite la disponibilité exacte sur WhatsApp.
          </p>
        </div>

        {/* Navigation to full catalog */}
        <div className="text-center pt-4">
          <Link
            href="/la-carte"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#fff3f6] text-[#b92555] border border-[#b92555]/30 px-6 py-3 rounded-full font-semibold text-sm transition-colors"
          >
            <span>Découvrir toute la carte</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
