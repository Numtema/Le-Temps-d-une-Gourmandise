'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Sparkles, Utensils, Heart, ArrowRight } from 'lucide-react';
import { CATALOG } from '@/lib/catalog';
import { useCart } from '@/lib/cart-context';

export function InteractivePicks() {
  const { setQuickViewItem, addItem } = useCart();
  
  // Pick specific items that highlight the menu's best
  const featuredWaffle = CATALOG.find((c) => c.id === 'gaufre-liegeoise') || CATALOG[1];
  const featuredSandwich = CATALOG.find((c) => c.id === 'sandwich-poulet-curry') || CATALOG[2];
  const featuredDrink = CATALOG.find((c) => c.id === 'chocolat-chaud-maison') || CATALOG[3];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#2c1a19] via-[#35201f] to-[#2c1a19] text-[#fff9f5] relative overflow-hidden">
      {/* Warm ambient radial gradients with subtle float */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#9b4f67]/35 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#8d7078]/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
        {/* Header with Viewport Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#9b4f67] text-white px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Coup de Cœur de la Maison</span>
            </div>
            <h2 className="font-serif-gourmand font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Le Trio Signature de Fécamp
            </h2>
            <p className="text-xs sm:text-sm text-[#f6d8df]/85 max-w-xl leading-relaxed">
              Trois piliers qui font le bonheur de nos habitués au quotidien. Préparés minute, servis chauds ou glacés pour une pause inoubliable face à l’église Saint-Étienne.
            </p>
          </div>

          <motion.div whileHover={{ x: 4 }}>
            <Link
              href="/la-carte"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#dfa0b1] hover:text-white transition-colors self-start md:self-auto group"
            >
              <span>Explorer la carte intégrale</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* 3 Featured Signature Banners with Staggered Viewport Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Gaufre Liégeoise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, scale: 1.015 }}
            className="group rounded-3xl overflow-hidden liquid-glass-dark border border-white/15 hover:border-[#dfa0b1]/50 shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="relative h-60 overflow-hidden">
              <Image
                src="/images/gaufres-reelles.png"
                alt="Gaufres chaudes de Liège à Fécamp"
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a19] via-[#2c1a19]/25 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#9b4f67] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                Incontournable
              </div>
              <div className="absolute bottom-3 right-4 font-serif-gourmand font-extrabold text-2xl text-[#dfa0b1]">
                {featuredWaffle?.priceFormatted || '3,80 €'}
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <h3 className="font-serif-gourmand font-bold text-xl text-white group-hover:text-[#dfa0b1] transition-colors">
                  Gaufres Dorées & Croustillantes
                </h3>
                <p className="text-xs text-[#f6d8df]/80 leading-relaxed">
                  Pâte levée pur beurre, perles de sucre caramélisées à la cuisson, chantilly ou chocolat fondu sur demande.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 border-t border-white/10">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  type="button"
                  onClick={() => featuredWaffle && setQuickViewItem(featuredWaffle)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                >
                  Personnaliser
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => featuredWaffle && addItem(featuredWaffle, 1)}
                  className="py-2.5 px-4 rounded-xl bg-[#9b4f67] hover:bg-[#813d52] text-xs font-semibold text-white transition-colors shadow-sm"
                >
                  Ajouter
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Sandwich Toasté Minute */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, scale: 1.015 }}
            className="group rounded-3xl overflow-hidden liquid-glass-dark border border-white/15 hover:border-[#dfa0b1]/50 shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="relative h-60 overflow-hidden">
              <Image
                src="/images/sandwich-reel.png"
                alt="Sandwich chaud toasté minute à Fécamp"
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a19] via-[#2c1a19]/25 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#8a9b54] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                Midi Chaud
              </div>
              <div className="absolute bottom-3 right-4 font-serif-gourmand font-extrabold text-2xl text-[#dfa0b1]">
                {featuredSandwich?.priceFormatted || '5,50 €'}
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <h3 className="font-serif-gourmand font-bold text-xl text-white group-hover:text-[#dfa0b1] transition-colors">
                  Sandwichs Chauds Toastés
                </h3>
                <p className="text-xs text-[#f6d8df]/80 leading-relaxed">
                  Baguette croustillante garnie d’ingrédients frais, fondue de fromage et toastée à cœur à votre commande.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 border-t border-white/10">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  type="button"
                  onClick={() => featuredSandwich && setQuickViewItem(featuredSandwich)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                >
                  Personnaliser
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => featuredSandwich && addItem(featuredSandwich, 1)}
                  className="py-2.5 px-4 rounded-xl bg-[#9b4f67] hover:bg-[#813d52] text-xs font-semibold text-white transition-colors shadow-sm"
                >
                  Ajouter
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Brownies & Brookies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, scale: 1.015 }}
            className="group rounded-3xl overflow-hidden liquid-glass-dark border border-white/15 hover:border-[#dfa0b1]/50 shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="relative h-60 overflow-hidden">
              <Image
                src="/images/brownies-brookies.png"
                alt="Brownies et Brookies maison Le Temps d'une Gourmandise"
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a19] via-[#2c1a19]/25 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#c58a52] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                Pâtisserie Maison
              </div>
              <div className="absolute bottom-3 right-4 font-serif-gourmand font-extrabold text-2xl text-[#dfa0b1]">
                3,20 €
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <h3 className="font-serif-gourmand font-bold text-xl text-white group-hover:text-[#dfa0b1] transition-colors">
                  Brookies & Brownies Fondants
                </h3>
                <p className="text-xs text-[#f6d8df]/80 leading-relaxed">
                  Le croustillant du cookie aux pépites de chocolat posé sur un cœur de brownie fondant au chocolat intense.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 border-t border-white/10">
                <Link
                  href="/la-carte?cat=sucre"
                  className="flex-1 text-center py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                >
                  Voir les saveurs
                </Link>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/la-carte?cat=sucre"
                    className="inline-block py-2.5 px-4 rounded-xl bg-[#9b4f67] hover:bg-[#813d52] text-xs font-semibold text-white transition-colors shadow-sm"
                  >
                    Choisir
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

