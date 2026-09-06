'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Clock,
  Heart,
  Coffee,
  Sparkles,
  CheckCircle2,
  Navigation,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import { BUSINESS_DATA } from '@/lib/business-data';
import { GourmetRibbon } from '@/components/GourmetRibbon';

export default function LaBoutiquePage() {
  return (
    <div className="bg-[#faf6f4] min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 liquid-glass text-[#813d52] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/80">
            <MapPin className="w-3.5 h-3.5" />
            <span>Fécamp · Place Saint-Étienne</span>
          </div>

          <h1 className="font-serif-gourmand font-bold text-3xl sm:text-4xl lg:text-5xl text-[#2c1a19]">
            Le Temps d’une Gourmandise, à Fécamp.
          </h1>

          <p className="text-xs sm:text-sm text-[#543734] leading-relaxed">
            Située au 4 place Saint-Étienne, notre boutique vous ouvre ses portes
            pour une pause sucrée ou salée en toute convivialité.
          </p>

          <GourmetRibbon variant="line" color="#813d52" className="w-32 mx-auto" />
        </div>

        {/* Big Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Photos side */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-lg bg-[#2c1a19] border border-white/80 group">
              <Image
                src="/images/facade-boutique.png"
                alt="Façade authentique de la boutique Le Temps d’une Gourmandise à Fécamp"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute top-4 left-4 liquid-glass px-3.5 py-1.5 rounded-full text-xs font-bold text-[#2c1a19] shadow-sm border border-white/80">
                📍 4 place Saint-Étienne
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-44 rounded-2xl overflow-hidden bg-[#2c1a19] border border-white/80 shadow-xs group">
                <Image
                  src="/images/interieur-comptoir.png"
                  alt="Comptoir et salon de thé chaleureux"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden bg-[#2c1a19] border border-white/80 shadow-xs group">
                <Image
                  src="/images/vitrine-produits.png"
                  alt="Vitrine gourmande du jour"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>
            </div>
          </div>

          {/* Story & Essence side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider font-bold text-[#813d52]">
                L’esprit du lieu
              </span>
              <h2 className="font-serif-gourmand font-bold text-2xl sm:text-3xl text-[#2c1a19]">
                Une vraie pause bien méritée
              </h2>
              <p className="text-xs sm:text-sm text-[#543734] leading-relaxed">
                Le Temps d’une Gourmandise est né d’une envie simple : créer à Fécamp
                un lieu où chacun peut faire une halte apaisante, que ce soit pour
                un déjeuner rapide le midi ou un goûter partagé en famille l’après-midi.
              </p>
              <p className="text-xs sm:text-sm text-[#543734] leading-relaxed">
                Ici, pas de chichi : un accueil souriant, des recettes gourmandes
                préparées avec générosité et des prix qui restent doux pour tous les gourmands.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-[#8d7078]/15 text-xs sm:text-sm text-[#2c1a19]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#813d52]" />
                <span>Accueil chaleureux & ambiance reposante</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#813d52]" />
                <span>Sandwichs chauds toastés minute & salades fraîches</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#813d52]" />
                <span>Gaufres moelleuses, brookies et vrai chocolat chaud</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#813d52]" />
                <span>Sur place en salle ou à emporter</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  BUSINESS_DATA.name + ' ' + BUSINESS_DATA.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#813d52] hover:bg-[#6e293f] text-white px-5 py-3 rounded-full text-xs font-semibold shadow-xs transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Voir l’itinéraire</span>
              </a>

              <a
                href={`tel:${BUSINESS_DATA.phoneIntl}`}
                className="inline-flex items-center gap-2 liquid-glass hover:bg-[#f6d8df]/40 text-[#543734] border border-white/80 px-5 py-3 rounded-full text-xs font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#813d52]" />
                <span>Appeler : {BUSINESS_DATA.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Practical info & Hours Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Coordonnées & Accès */}
          <div className="liquid-glass rounded-3xl p-8 border border-white/90 shadow-sm space-y-4">
            <h3 className="font-serif-gourmand font-bold text-xl text-[#2c1a19] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#813d52]" />
              <span>Accès & Coordonnées</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-[#543734]">
              <div>
                <p className="font-semibold text-[#2c1a19]">Adresse :</p>
                <p>{BUSINESS_DATA.address}</p>
                <p className="text-xs text-[#543734]/70 mt-0.5">
                  Face à l’église Saint-Étienne, stationnement à proximité.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#2c1a19]">Téléphone :</p>
                <p>
                  <a href={`tel:${BUSINESS_DATA.phoneIntl}`} className="text-[#813d52] underline font-medium">
                    {BUSINESS_DATA.phone}
                  </a>
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#2c1a19]">Email :</p>
                <p>
                  <a href={`mailto:${BUSINESS_DATA.email}`} className="text-[#813d52] underline">
                    {BUSINESS_DATA.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Horaires de la boutique */}
          <div className="liquid-glass rounded-3xl p-8 border border-white/90 shadow-sm space-y-4">
            <h3 className="font-serif-gourmand font-bold text-xl text-[#2c1a19] flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#813d52]" />
              <span>Horaires de la boutique</span>
            </h3>

            <p className="text-xs text-[#543734]/80 italic">
              {BUSINESS_DATA.scheduleEffectiveDate}
            </p>

            <div className="space-y-2 text-xs font-mono">
              {BUSINESS_DATA.schedule.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between py-1 border-b border-[#8d7078]/15 last:border-none"
                >
                  <span className="font-sans font-semibold text-[#2c1a19]">
                    {item.day}
                  </span>
                  <span className="text-[#543734]">
                    {item.closes ? `${item.opens} – ${item.closes}` : item.opens}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA to Menu */}
        <div className="bg-gradient-to-r from-[#2c1a19] to-[#543734] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl border border-white/20">
          <h3 className="font-serif-gourmand font-bold text-2xl sm:text-3xl">
            Prêt pour votre pause gourmande ?
          </h3>
          <p className="text-xs sm:text-sm text-[#f6d8df]/85 max-w-lg mx-auto leading-relaxed">
            Consultez notre carte, personnalisez vos envies et envoyez directement
            votre demande pour un retrait rapide à la boutique.
          </p>
          <div className="pt-2">
            <Link
              href="/la-carte"
              className="inline-flex items-center gap-2 bg-[#813d52] hover:bg-[#6e293f] text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-md transition-colors"
            >
              <span>Voir la carte des délices</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
