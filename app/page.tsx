'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Star,
  Sparkles,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Heart,
  ChevronRight,
  CheckCircle2,
  Tag,
} from 'lucide-react';
import { BUSINESS_DATA } from '@/lib/business-data';
import { CATALOG } from '@/lib/catalog';
import { useCart } from '@/lib/cart-context';
import { GourmetRibbon } from '@/components/GourmetRibbon';
import { GourmetClock } from '@/components/GourmetClock';
import { LiveTicker } from '@/components/LiveTicker';
import { InteractivePicks } from '@/components/InteractivePicks';
import { PressRecognition } from '@/components/PressRecognition';
import { CinemaHero } from '@/components/CinemaHero';
import { FramerTestimonials } from '@/components/FramerTestimonials';

export default function HomePage() {
  const { setQuickViewItem, addItem } = useCart();

  // Featured signatures from catalog
  const signatures = CATALOG.filter((c) => c.featured).slice(0, 6);

  return (
    <div className="space-y-0">
      {/* ── H01: CINEMA 16:9 HERO SECTION ── */}
      <CinemaHero />

      {/* ── LIVE TICKER MARQUEE ── */}
      <LiveTicker />

      {/* ── H02: HORLOGE GOURMANDE SECTION ── */}
      <GourmetClock />

      {/* ── H03: LES 4 UNIVERS GOURMANDS ── */}
      <section className="py-16 sm:py-24 bg-[#faf6f4] border-t border-[#8d7078]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-wider font-bold text-[#813d52]">
              Variété & Saveurs
            </span>
            <h2 className="font-serif-gourmand font-bold text-3xl sm:text-4xl text-[#2c1a19]">
              Sucré, salé… pourquoi choisir ?
            </h2>
            <p className="text-xs sm:text-sm text-[#543734]">
              Installez-vous à notre table ou emportez votre repas pour profiter des ruelles de Fécamp.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Univers 1: Salé (Real Sandwich Photo) */}
            <Link
              href="/la-carte?cat=sale"
              className="group relative rounded-3xl overflow-hidden h-80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-6 border border-[#8d7078]/20"
            >
              <Image
                src="/images/sandwich-reel.png"
                alt="Pause salée sandwichs et quiches à Fécamp"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a19]/90 via-[#2c1a19]/40 to-transparent" />
              <div className="relative text-white space-y-1">
                <span className="text-[11px] uppercase font-bold text-[#dfa0b1] tracking-wider">
                  Midi & Snacking
                </span>
                <h3 className="font-serif-gourmand font-bold text-2xl">
                  L’Univers Salé
                </h3>
                <p className="text-xs text-white/80 line-clamp-2">
                  Sandwichs chauds toastés minute, wraps frais, quiches dorées et salades.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#dfa0b1] pt-2 group-hover:underline">
                  <span>Explorer</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* Univers 2: Sucré (Real Gaufres Photo) */}
            <Link
              href="/la-carte?cat=sucre"
              className="group relative rounded-3xl overflow-hidden h-80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-6 border border-[#8d7078]/20"
            >
              <Image
                src="/images/gaufres-reelles.png"
                alt="Douceurs sucrées et gaufres dorées à Fécamp"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a19]/90 via-[#2c1a19]/40 to-transparent" />
              <div className="relative text-white space-y-1">
                <span className="text-[11px] uppercase font-bold text-[#dfa0b1] tracking-wider">
                  Goûter & Desserts
                </span>
                <h3 className="font-serif-gourmand font-bold text-2xl">
                  L’Univers Sucré
                </h3>
                <p className="text-xs text-white/80 line-clamp-2">
                  Gaufres croustillantes, brookies fondants, brownies, cookies et donuts.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#dfa0b1] pt-2 group-hover:underline">
                  <span>Explorer</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* Univers 3: Boissons & Smoothies (Real Smoothies Photo) */}
            <Link
              href="/la-carte?cat=boissons"
              className="group relative rounded-3xl overflow-hidden h-80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-6 border border-[#8d7078]/20"
            >
              <Image
                src="/images/smoothies.png"
                alt="Smoothies fruités et boissons fraîches à Fécamp"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a19]/90 via-[#2c1a19]/40 to-transparent" />
              <div className="relative text-white space-y-1">
                <span className="text-[11px] uppercase font-bold text-[#dfa0b1] tracking-wider">
                  Chaudes & Fraîches
                </span>
                <h3 className="font-serif-gourmand font-bold text-2xl">
                  Boissons & Fraîcheur
                </h3>
                <p className="text-xs text-white/80 line-clamp-2">
                  Vrai chocolat chaud onctueux, cafés arabica, thés fins et smoothies mixés.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#dfa0b1] pt-2 group-hover:underline">
                  <span>Explorer</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* Univers 4: Glaces Mövenpick (Real Mövenpick Cup Photo) */}
            <Link
              href="/la-carte?cat=glaces"
              className="group relative rounded-3xl overflow-hidden h-80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-6 border border-[#8d7078]/20"
            >
              <Image
                src="/images/cup-glace-movenpick.png"
                alt="Glaces Mövenpick d’exception à Fécamp"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a19]/90 via-[#2c1a19]/40 to-transparent" />
              <div className="relative text-white space-y-1">
                <span className="text-[11px] uppercase font-bold text-[#dfa0b1] tracking-wider">
                  Mövenpick Premium
                </span>
                <h3 className="font-serif-gourmand font-bold text-2xl">
                  Glaces & Coupes
                </h3>
                <p className="text-xs text-white/80 line-clamp-2">
                  Boules onctueuses de maître glacier, cornets croustillants et coupes gourmandes.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#dfa0b1] pt-2 group-hover:underline">
                  <span>Explorer</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── H04: SIGNATURES DU CHEF & DE LA BOUTIQUE ── */}
      <section className="py-16 sm:py-24 bg-[#fffdfc] border-t border-[#8d7078]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-bold text-[#813d52]">
                Incontournables
              </span>
              <h2 className="font-serif-gourmand font-bold text-3xl sm:text-4xl text-[#2c1a19]">
                Nos Signatures Gourmandes
              </h2>
              <p className="text-xs sm:text-sm text-[#543734] max-w-lg">
                Des recettes préparées avec amour, saluées par les habitués de la place Saint-Étienne.
              </p>
            </div>

            <Link
              href="/la-carte"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#813d52] hover:text-[#6e293f] hover:underline"
            >
              <span>Voir l’ensemble de la carte</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {signatures.map((item) => (
              <div
                key={item.id}
                className="group bg-[#fffdfc] liquid-glass-card rounded-3xl overflow-hidden border border-[#8d7078]/20 hover:border-[#813d52]/40 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 bg-[#f6d8df] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {item.badges.map((b) => (
                      <span
                        key={b}
                        className="bg-[#813d52] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif-gourmand font-bold text-lg text-[#2c1a19] group-hover:text-[#813d52] transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-serif-gourmand font-bold text-base text-[#813d52] shrink-0">
                        {item.priceFormatted || `${item.price?.toFixed(2).replace('.', ',')} €`}
                      </span>
                    </div>
                    <p className="text-xs text-[#543734] line-clamp-2">
                      {item.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-[#8d7078]/15">
                    <button
                      type="button"
                      onClick={() => setQuickViewItem(item)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-white hover:bg-[#faf6f4] text-xs font-semibold text-[#2c1a19] border border-[#8d7078]/20 transition-colors"
                    >
                      Détails & Choix
                    </button>
                    <button
                      type="button"
                      onClick={() => addItem(item, 1)}
                      className="py-2.5 px-4 rounded-xl bg-[#813d52] hover:bg-[#6e293f] text-xs font-semibold text-white shadow-xs transition-colors"
                    >
                      Ajouter
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUPS DE COEUR DE LA MAISON (TRIO SIGNATURE) ── */}
      <InteractivePicks />

      {/* ── H05: OFFRES DU MOMENT (FORMULES RENTRÉE) ── */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#faf6f4] via-[#fdf2f4] to-[#faf6f4] border-y border-[#8d7078]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 bg-[#813d52] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5" /> Offres Spéciales
            </span>
            <h2 className="font-serif-gourmand font-bold text-3xl sm:text-4xl text-[#2c1a19]">
              Les Petites Formules Gourmandes
            </h2>
            <p className="text-xs sm:text-sm text-[#543734]">
              Des pauses douces à petit prix pour accompagner votre rentrée et vos journées à Fécamp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Formule 1: Cookie */}
            <div className="bg-white liquid-glass rounded-3xl p-6 sm:p-8 shadow-sm border border-white/90 flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#813d52]">
                      Formule Cookie
                    </span>
                    <h3 className="font-serif-gourmand font-bold text-2xl text-[#2c1a19]">
                      1 Cookie + 1 Boisson
                    </h3>
                  </div>
                  <div className="bg-[#813d52] text-white font-serif-gourmand font-bold text-xl sm:text-2xl px-3.5 py-1.5 rounded-2xl shrink-0">
                    2,50 €
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#543734] leading-relaxed">
                  Un délicieux cookie croustillant aux pépites de chocolat fondant + une boisson au choix (chaude ou canette fraîche).
                </p>

                <ul className="space-y-1.5 text-xs text-[#543734]/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#813d52]" />
                    <span>Cookie au choix selon vitrine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#813d52]" />
                    <span>Café, chocolat chaud ou canette fraîche</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => {
                  const item = CATALOG.find((c) => c.id === 'formule-cookie-rentree');
                  if (item) setQuickViewItem(item);
                }}
                className="w-full py-3 rounded-2xl bg-[#813d52] hover:bg-[#6e293f] text-white font-semibold text-sm shadow-xs transition-colors"
              >
                Choisir cette formule (2,50 €)
              </button>
            </div>

            {/* Formule 2: Donut */}
            <div className="bg-white liquid-glass rounded-3xl p-6 sm:p-8 shadow-sm border border-white/90 flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#813d52]">
                      Formule Donut
                    </span>
                    <h3 className="font-serif-gourmand font-bold text-2xl text-[#2c1a19]">
                      1 Donut + 1 Boisson
                    </h3>
                  </div>
                  <div className="bg-[#813d52] text-white font-serif-gourmand font-bold text-xl sm:text-2xl px-3.5 py-1.5 rounded-2xl shrink-0">
                    2,00 €
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#543734] leading-relaxed">
                  Un donut gourmand sucré ou nappé de chocolat + une canette fraîche ou une boisson chaude au choix.
                </p>

                <ul className="space-y-1.5 text-xs text-[#543734]/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#813d52]" />
                    <span>Donut sucré ou chocolat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#813d52]" />
                    <span>Boisson fraîche ou chaude au choix</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => {
                  const item = CATALOG.find((c) => c.id === 'formule-donut-rentree');
                  if (item) setQuickViewItem(item);
                }}
                className="w-full py-3 rounded-2xl bg-[#813d52] hover:bg-[#6e293f] text-white font-semibold text-sm shadow-xs transition-colors"
              >
                Choisir cette formule (2,00 €)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── H06: IMMERSION VITRINE & SAVOIR-FAIRE EN IMAGES ── */}
      <section className="py-16 sm:py-20 bg-[#fffdfc] overflow-hidden border-t border-[#8d7078]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-bold text-[#813d52] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> En direct de nos étagères & vitrines
              </span>
              <h2 className="font-serif-gourmand font-bold text-3xl sm:text-4xl text-[#2c1a19]">
                Fraîcheur & Gourmandise au Quotidien
              </h2>
              <p className="text-xs sm:text-sm text-[#543734] max-w-lg">
                Des vitrines renouvelées chaque matin avec amour. Venez humer le parfum des gaufres et saliver devant nos quiches, salades et douceurs.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 liquid-glass border border-white/90 px-4 py-2 rounded-full text-xs font-semibold text-[#813d52]">
              <span>📍 Place Saint-Étienne, Fécamp</span>
            </div>
          </div>

          {/* Mosaic Gallery with Real Shop Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Vitrine du jour */}
            <div className="group relative rounded-3xl overflow-hidden h-80 shadow-md border border-[#8d7078]/20 flex flex-col justify-end p-6 bg-[#2c1a19]">
              <Image
                src="/images/vitrine-produits.png"
                alt="Vitrine gourmande du jour à Fécamp avec boissons, canettes et douceurs"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a19]/90 via-[#2c1a19]/30 to-transparent" />
              <div className="relative text-white space-y-1">
                <span className="text-[11px] uppercase font-bold text-[#dfa0b1] tracking-wider">
                  Vitrine Fraîcheur
                </span>
                <h3 className="font-serif-gourmand font-bold text-xl">
                  Boissons & Douceurs Fraîches
                </h3>
                <p className="text-xs text-[#f6d8df]/85">
                  Canettes fraîches, thés glacés, smoothies et accompagnements prêts à emporter.
                </p>
              </div>
            </div>

            {/* Card 2: Quiches & Salades */}
            <div className="group relative rounded-3xl overflow-hidden h-80 shadow-md border border-[#8d7078]/20 flex flex-col justify-end p-6 bg-[#2c1a19]">
              <Image
                src="/images/quiches-salades.png"
                alt="Quiches dorées maison et salades fraîches pour le déjeuner à Fécamp"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a19]/90 via-[#2c1a19]/30 to-transparent" />
              <div className="relative text-white space-y-1">
                <span className="text-[11px] uppercase font-bold text-[#dfa0b1] tracking-wider">
                  Midi Cuisiné
                </span>
                <h3 className="font-serif-gourmand font-bold text-xl">
                  Quiches Dorées & Salades
                </h3>
                <p className="text-xs text-[#f6d8df]/85">
                  Des parts généreuses, des pâtes croustillantes et des recettes de saison équilibrées.
                </p>
              </div>
            </div>

            {/* Card 3: Brownies & Brookies */}
            <div className="group relative rounded-3xl overflow-hidden h-80 shadow-md border border-[#8d7078]/20 flex flex-col justify-end p-6 bg-[#2c1a19]">
              <Image
                src="/images/brownies-brookies.png"
                alt="Brownies et brookies faits maison chez Le Temps d'une Gourmandise"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a19]/90 via-[#2c1a19]/30 to-transparent" />
              <div className="relative text-white space-y-1">
                <span className="text-[11px] uppercase font-bold text-[#dfa0b1] tracking-wider">
                  Pâtisserie Réconfort
                </span>
                <h3 className="font-serif-gourmand font-bold text-xl">
                  Brookies & Brownies Fondants
                </h3>
                <p className="text-xs text-[#f6d8df]/85">
                  Le mariage parfait entre brownie chocolat noir et cookie fondant aux pépites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VU DANS LA PRESSE & RECOMMANDATIONS (PARIS NORMANDIE, TRIPADVISOR, RESTAURANT GURU) ── */}
      <PressRecognition />

      {/* ── H08: AVIS CLIENTS FRAMER-STYLE TESTIMONIALS SHOWCASE ── */}
      <FramerTestimonials />

      {/* ── H09: LA BOUTIQUE À FÉCAMP ── */}
      <section className="py-16 sm:py-24 bg-[#faf6f4] border-t border-[#8d7078]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2c1a19] text-[#faf6f4] rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-12 border border-white/20">
            {/* Image side with real boutique facade & interior */}
            <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[460px] grid grid-rows-2">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/facade-boutique.png"
                  alt="Façade de la boutique Le Temps d’une Gourmandise au 4 place Saint-Étienne à Fécamp"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-[#813d52] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>4 place Saint-Étienne, Fécamp</span>
                </div>
              </div>
              <div className="relative w-full h-full overflow-hidden border-t-2 border-white/20">
                <Image
                  src="/images/interieur-comptoir.png"
                  alt="Comptoir gourmand et salon de thé intérieur à Fécamp"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-3 right-3 bg-[#2c1a19]/85 backdrop-blur-sm text-[#dfa0b1] px-3 py-1 rounded-full text-[11px] font-medium border border-white/10">
                  Salon convivial & comptoir du jour
                </div>
              </div>
            </div>

            {/* Info side */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#dfa0b1]/20 border border-[#dfa0b1]/30 px-3.5 py-1 rounded-full text-xs font-semibold text-[#dfa0b1]">
                  <Sparkles className="w-3.5 h-3.5 text-[#dfa0b1]" />
                  <span>Votre halte gourmande locale</span>
                </div>
                <h2 className="font-serif-gourmand font-bold text-3xl sm:text-4xl text-white">
                  Une pause au cœur de Fécamp
                </h2>
                <p className="text-xs sm:text-sm text-[#f6d8df]/85 leading-relaxed font-normal">
                  Installé face à l’église Saint-Étienne, Le Temps d’une Gourmandise vous
                  accueille avec le sourire. Que ce soit pour un déjeuner toasté minute
                  sur le pouce ou un goûter gaufre & chocolat onctueux, découvrez une vraie ambiance normande bienveillante et généreuse.
                </p>

                <div className="space-y-2.5 pt-2 text-xs text-[#faf6f4]/90">
                  <div className="flex items-center gap-2.5 bg-white/5 p-2 rounded-xl">
                    <Clock className="w-4 h-4 text-[#dfa0b1] shrink-0" />
                    <span>Lundi à Vendredi : <strong className="text-white">9h30 – 14h15</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-[#813d52]/40 border border-[#813d52]/60 p-2 rounded-xl">
                    <Clock className="w-4 h-4 text-[#dfa0b1] shrink-0" />
                    <span className="font-bold text-white">
                      Mercredi & Samedi (Goûter complet) : 9h30 – 17h15
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/5 p-2 rounded-xl">
                    <Phone className="w-4 h-4 text-[#dfa0b1] shrink-0" />
                    <span>Téléphone direct : <strong className="text-white">{BUSINESS_DATA.phone}</strong></span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    BUSINESS_DATA.name + ' ' + BUSINESS_DATA.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#813d52] hover:bg-[#6e293f] text-white px-5 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Itinéraire Google Maps</span>
                </a>

                <a
                  href={`tel:${BUSINESS_DATA.phoneIntl}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Appeler la boutique</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── H11: CTA FINAL ── */}
      <section className="py-16 sm:py-20 bg-[#faf6f4] text-center border-t border-[#8d7078]/15">
        <div className="max-w-2xl mx-auto px-4 space-y-5">
          <GourmetRibbon variant="heart" color="#813d52" className="w-8 h-8 mx-auto" />

          <h2 className="font-serif-gourmand font-bold text-3xl sm:text-4xl text-[#2c1a19]">
            Envie d’une pause gourmande ?
          </h2>

          <p className="text-xs sm:text-sm text-[#543734] leading-relaxed font-normal">
            Composez votre panier en quelques secondes, précisez l’heure de retrait souhaitée,
            et transmettez directement votre demande sur WhatsApp.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/la-carte"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#813d52] hover:bg-[#6e293f] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md transition-all active:scale-98"
            >
              <span>Composer ma pause</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${BUSINESS_DATA.whatsappPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Écrire sur WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
