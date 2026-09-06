'use client';

import React from 'react';
import Image from 'next/image';
import { Award, ExternalLink, Star, Newspaper } from 'lucide-react';

interface PressLogo {
  name: string;
  badge: string;
  source: string;
  description: string;
  url?: string;
  rating?: string;
  logoType: 'paris-normandie' | 'tripadvisor' | 'restaurant-guru' | 'facebook' | 'france-boulangerie';
}

const PRESS_ITEMS: PressLogo[] = [
  {
    name: 'Paris Normandie',
    badge: 'Presse Régionale',
    source: 'Article Spécial',
    description: '« Céline Almon ouvre Le Temps d’une Gourmandise à Fécamp : la restauration rapide au bon goût du fait maison »',
    url: 'https://www.paris-normandie.fr/id685270/article/2025-12-27/celine-almon-ouvre-le-temps-dune-gourmandise-fecamp-la-restauration-rapide-au',
    logoType: 'paris-normandie',
  },
  {
    name: 'Restaurant Guru',
    badge: 'Recommandé 2026',
    source: 'Note 5,0 / 5',
    description: '« Excellente adresse à Fécamp ! Accueil chaleureux, ambiance agréable, sandwichs et desserts gourmands. »',
    rating: '5.0 ★★★★★',
    url: 'https://fr.restaurantguru.com',
    logoType: 'restaurant-guru',
  },
  {
    name: 'TripAdvisor',
    badge: 'Certifié Avis Voyageurs',
    source: 'Note 4,8 / 5',
    description: '« Super endroit, friandises savoureuses, pauses salées et personnel aux petits soins. »',
    rating: '4.8 ★★★★★',
    url: 'https://www.tripadvisor.fr',
    logoType: 'tripadvisor',
  },
  {
    name: 'Facebook Officiel',
    badge: 'Communauté Fécamp',
    source: '+610 Abonnés',
    description: '« Vos avis comptent : retrouvez nos douceurs du jour, formules fraîches et horaires du mercredi & samedi ! »',
    rating: '5.0 ★★★★★',
    url: 'https://www.facebook.com/p/Le-temps-dune-gourmandise-61585143640440/',
    logoType: 'facebook',
  },
  {
    name: 'France Boulangerie',
    badge: 'Guide Artisans',
    source: 'Sélection Gourmande',
    description: '« Très belle adresse recommandée pour le déjeuner sur le pouce et les douceurs de l’après-midi. »',
    logoType: 'france-boulangerie',
  },
];

export function PressRecognition() {
  return (
    <section className="py-14 sm:py-20 relative overflow-hidden bg-gradient-to-b from-[#faf6f4] via-[#fdf2f4]/60 to-[#faf6f4] border-y border-[#8d7078]/15">
      {/* Decorative ambient liquid glows */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-80 h-80 bg-[#8d7078]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-80 h-80 bg-[#9b4f67]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-10">
        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass text-[#8d7078] text-xs font-semibold tracking-wide">
            <Award className="w-3.5 h-3.5 text-[#9b4f67]" />
            <span>Presse & Reconnaissance Locale</span>
          </div>
          <h2 className="font-serif-gourmand font-bold text-3xl sm:text-4xl text-[#2c1a19] tracking-tight">
            Vu dans la Presse & Recommandé à Fécamp
          </h2>
          <p className="text-xs sm:text-sm text-[#543734] leading-relaxed">
            De l’article élogieux dans <strong>Paris-Normandie</strong> aux avis enthousiastes sur TripAdvisor, Restaurant Guru et Facebook : découvrez ce que les médias et nos clients disent de nous.
          </p>
        </div>

        {/* Featured Paris Normandie Spotlight Card */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/80 shadow-lg relative overflow-hidden grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 relative h-52 sm:h-64 rounded-2xl overflow-hidden shadow-md group">
            <Image
              src="/images/paris-normandie-article.jpg"
              alt="Céline Almon dans l'article Paris-Normandie à Fécamp"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a19]/80 via-transparent to-transparent" />
            <div className="absolute top-3 left-3 bg-[#9b4f67] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Paris-Normandie · Édition Fécamp</span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
              Céline Almon au comptoir du 4 place Saint-Étienne
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-[#8d7078]/15 text-[#8d7078] text-xs font-bold px-2.5 py-0.5 rounded-full">
                À la une locale
              </span>
              <span className="text-xs text-[#543734]/70 font-medium">
                Écrit par la rédaction régionale
              </span>
            </div>

            <h3 className="font-serif-gourmand font-bold text-xl sm:text-2xl text-[#2c1a19] leading-snug">
              « Céline Almon ouvre Le Temps d’une Gourmandise à Fécamp : la restauration rapide au bon goût du fait maison »
            </h3>

            <p className="text-xs sm:text-sm text-[#543734] leading-relaxed">
              « Du chaud et du froid, des sandwichs toastés minute, des gaufres dorées et des douceurs maison dans une ambiance entre brocante et salon de thé face à l’église Saint-Étienne. »
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://www.paris-normandie.fr/id685270/article/2025-12-27/celine-almon-ouvre-le-temps-dune-gourmandise-fecamp-la-restauration-rapide-au"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#9b4f67] hover:bg-[#813d52] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Lire l’article complet</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[11px] text-[#8d7078] font-medium">
                Formules salées & sucrées dès 2,00 €
              </span>
            </div>
          </div>
        </div>

        {/* Logos & Platform Endorsement Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {/* Logo 1: Paris Normandie */}
          <div className="liquid-glass-card rounded-2xl p-5 border border-white/90 flex flex-col justify-between space-y-3 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#2c1a19] text-[#f6d8df] flex items-center justify-center font-serif font-black text-sm">
                  PN
                </div>
                <span className="font-serif-gourmand font-bold text-sm text-[#2c1a19]">
                  Paris Normandie
                </span>
              </div>
            </div>
            <p className="text-[11px] text-[#543734] leading-relaxed">
              Reportage officiel sur l’ouverture de Céline Almon à Fécamp.
            </p>
            <div className="text-[10px] uppercase font-bold text-[#9b4f67] tracking-wider pt-1 border-t border-[#8d7078]/10">
              Presse Régionale
            </div>
          </div>

          {/* Logo 2: TripAdvisor */}
          <div className="liquid-glass-card rounded-2xl p-5 border border-white/90 flex flex-col justify-between space-y-3 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#34e0a1]/20 text-[#00aa6c] flex items-center justify-center font-bold text-sm">
                  🦉
                </div>
                <span className="font-serif-gourmand font-bold text-sm text-[#2c1a19]">
                  TripAdvisor
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
              <span className="text-[#2c1a19] ml-1 text-[11px]">4,8 / 5</span>
            </div>
            <p className="text-[11px] text-[#543734] leading-relaxed">
              Friandises savoureuses, service souriant et pause appréciée.
            </p>
            <div className="text-[10px] uppercase font-bold text-[#00aa6c] tracking-wider pt-1 border-t border-[#8d7078]/10">
              Avis Voyageurs
            </div>
          </div>

          {/* Logo 3: Restaurant Guru */}
          <div className="liquid-glass-card rounded-2xl p-5 border border-white/90 flex flex-col justify-between space-y-3 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#ef4444]/15 text-[#ef4444] flex items-center justify-center font-black text-sm">
                  G
                </div>
                <span className="font-serif-gourmand font-bold text-sm text-[#2c1a19]">
                  Restaurant Guru
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
              <span className="text-[#2c1a19] ml-1 text-[11px]">5,0 / 5</span>
            </div>
            <p className="text-[11px] text-[#543734] leading-relaxed">
              Excellente adresse salée & sucrée recommandée à Fécamp.
            </p>
            <div className="text-[10px] uppercase font-bold text-[#ef4444] tracking-wider pt-1 border-t border-[#8d7078]/10">
              Recommandé 2026
            </div>
          </div>

          {/* Logo 4: Facebook Communauté */}
          <div className="liquid-glass-card rounded-2xl p-5 border border-white/90 flex flex-col justify-between space-y-3 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#1877f2]/15 text-[#1877f2] flex items-center justify-center font-bold text-sm">
                  f
                </div>
                <span className="font-serif-gourmand font-bold text-sm text-[#2c1a19]">
                  Facebook
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[#1877f2] text-xs font-semibold">
              <span>+610 abonnés à Fécamp</span>
            </div>
            <p className="text-[11px] text-[#543734] leading-relaxed">
              Avis 5,0/5 vérifiés, partages des habitués et carte du moment.
            </p>
            <div className="text-[10px] uppercase font-bold text-[#1877f2] tracking-wider pt-1 border-t border-[#8d7078]/10">
              Page Officielle
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
