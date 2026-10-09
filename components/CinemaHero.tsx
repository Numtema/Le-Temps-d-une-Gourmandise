'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Star,
  Sparkles,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
  ChevronRight,
  Heart,
  Award,
  Play,
  Pause,
  Flame,
  Coffee,
} from 'lucide-react';
import { BUSINESS_DATA } from '@/lib/business-data';
import { useCart } from '@/lib/cart-context';
import { CATALOG } from '@/lib/catalog';
import { GourmetRibbon } from './GourmetRibbon';

interface HeroSlide {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  badge: string;
  image: string;
  tagline: string;
  catalogId?: string;
  tags: string[];
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'gaufres',
    tabLabel: '🧇 Gaufres Dorées',
    title: 'Gaufres Croustillantes & Moelleuses',
    subtitle: 'Fait minute sous vos yeux à Fécamp',
    description: 'Cuites sur place, dorées à cœur avec leur sucre perlé fondant. Nappage chocolat chaud maison, caramel beurre salé ou chantilly onctueuse.',
    price: 'Dès 3,80 €',
    badge: 'Spécialité Maison',
    image: '/images/gaufres-reelles.png',
    tagline: 'Le parfum irrésistible de la place Saint-Étienne',
    catalogId: 'gaufre-liegeoise-artisanale',
    tags: ['Cuisson minute', 'Pâte fraîche', 'Gourmandise réconfort'],
  },
  {
    id: 'sandwichs',
    tabLabel: '🥪 Midi Toasté',
    title: 'Sandwichs Chauds Toastés Minute',
    subtitle: 'Pain croustillant & garnitures généreuses',
    description: 'Préparés avec des ingrédients frais, toastés à la commande pour une pause déjeuner chaleureuse et réconfortante à prix tout doux.',
    price: 'Dès 4,90 €',
    badge: 'Pause Déjeuner Fraîcheur',
    image: '/images/sandwich-reel.png',
    tagline: 'Sur place ou à emporter pour le midi',
    catalogId: 'sandwich-chaud-toast',
    tags: ['Toasté à la commande', 'Ingrédients locaux', 'Formule avec boisson'],
  },
  {
    id: 'chocolat-brookies',
    tabLabel: '🍫 Chocolat & Brookies',
    title: 'Vrai Chocolat Chaud & Brookies',
    subtitle: 'Pur chocolat fondu & gâteaux faits maison',
    description: 'Comme le soulignent nos habitués : un vrai chocolat onctueux, dense et velouté, accompagné de nos brookies et brownies fondants sortis du four.',
    price: 'Dès 3,50 €',
    badge: 'Coup de Cœur Clients',
    image: '/images/brownies-brookies.png',
    tagline: 'Salué dans les avis TripAdvisor & Facebook',
    catalogId: 'brookie-fondant-maison',
    tags: ['Pur chocolat noir', 'Fait maison', 'Recette signature'],
  },
  {
    id: 'movenpick',
    tabLabel: '🍨 Glaces Mövenpick',
    title: 'Glaces d’Exception Mövenpick',
    subtitle: 'Crèmes glacées suisses & sorbets intenses',
    description: 'Saveurs raffinées servies en cornets croustillants ou en coupes gourmandes garnies de coulis et chantilly pour une pause fraîche.',
    price: 'Dès 2,80 €',
    badge: 'Maître Glacier Suisse',
    image: '/images/cup-glace-movenpick.png',
    tagline: 'Sélection premium pour petits et grands',
    catalogId: 'coupe-glacee-movenpick-signature',
    tags: ['100% naturel', 'Saveurs intenses', 'Cornets croustillants'],
  },
];

export function CinemaHero() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const { addItem, setQuickViewItem } = useCart();
  const activeSlide = HERO_SLIDES[activeSlideIndex];

  const SLIDE_DURATION = 6000; // 6 seconds per slide

  useEffect(() => {
    if (isPaused) return;

    const interval = 50; // Update every 50ms
    const step = (interval / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveSlideIndex((current) => (current + 1) % HERO_SLIDES.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, activeSlideIndex]);

  const selectSlide = (idx: number) => {
    setActiveSlideIndex(idx);
    setProgress(0);
  };

  const handleQuickAdd = () => {
    if (activeSlide.catalogId) {
      const item = CATALOG.find((c) => c.id === activeSlide.catalogId);
      if (item) {
        addItem(item, 1);
      }
    }
  };

  const handleOpenDetails = () => {
    if (activeSlide.catalogId) {
      const item = CATALOG.find((c) => c.id === activeSlide.catalogId);
      if (item) {
        setQuickViewItem(item);
      }
    }
  };

  return (
    <section className="relative pt-6 sm:pt-10 pb-14 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#faf6f4] via-[#fffdfc] to-[#faf6f4]">
      {/* Decorative ambient radial gradients & animated floating particles */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-br from-[#f6d8df]/50 to-[#d4bcbc]/35 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-[#9b4f67]/15 rounded-full blur-3xl pointer-events-none"
      />

      {/* Floating Animated Confectionery Sparks */}
      <motion.div
        animate={{ y: [-5, 5, -5], rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:block absolute top-24 left-[10%] text-[#813d52]/40 pointer-events-none"
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
      <motion.div
        animate={{ y: [6, -6, 6], rotate: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden md:block absolute top-36 right-[12%] text-[#8d7078]/40 pointer-events-none"
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-8">
        {/* Top Header & Tagline Banner with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          {/* Badges Cluster */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 liquid-glass text-[#6e293f] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-2xs border border-white/90 cursor-default"
            >
              <GourmetRibbon variant="heart" color="#813d52" className="w-3.5 h-3.5" />
              <span>Fécamp · Normandie · 4 place Saint-Étienne</span>
            </motion.div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="https://www.paris-normandie.fr/id685270/article/2025-12-27/celine-almon-ouvre-le-temps-dune-gourmandise-fecamp-la-restauration-rapide-au"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#8d7078]/15 hover:bg-[#8d7078]/25 text-[#2c1a19] px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors"
            >
              <span>📰 Vu dans Paris-Normandie</span>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-1.5 bg-[#d4bcbc]/60 text-[#2c1a19] px-3 py-1.5 rounded-full text-xs font-bold shadow-2xs cursor-default"
            >
              <div className="flex text-amber-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span>4.9 / 5</span>
            </motion.div>
          </div>

          {/* Grand Master Title */}
          <h1 className="font-serif-gourmand font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#2c1a19] tracking-tight leading-[1.08]">
            Prenez le temps{' '}
            <span className="relative inline-block text-[#813d52]">
              d’une vraie gourmandise.
              <span className="block absolute -bottom-1.5 left-0 w-full">
                <GourmetRibbon variant="line" color="#c26982" className="w-full h-3" />
              </span>
            </span>
          </h1>

          {/* Editorial Sub-promise */}
          <p className="text-sm sm:text-base text-[#452c2a] max-w-2xl mx-auto leading-relaxed font-normal">
            Le salon de thé & restauration rapide chaleureux de <strong>Céline Almon</strong> face à l’église Saint-Étienne. Gaufres dorées minute, sandwichs chauds croustillants, viennoiseries généreuses, vrai chocolat fondu et glaces Mövenpick.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/la-carte"
                className="inline-flex items-center justify-center gap-2.5 bg-[#813d52] hover:bg-[#6e293f] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>Explorer toute la carte</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <a
                href={`https://wa.me/${BUSINESS_DATA.whatsappPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Commander sur WhatsApp</span>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/la-boutique"
                className="inline-flex items-center justify-center gap-2 liquid-glass hover:bg-white text-[#2c1a19] border border-white/90 px-5 py-3.5 rounded-full font-semibold text-sm transition-colors shadow-xs"
              >
                <MapPin className="w-4 h-4 text-[#813d52]" />
                <span>Venir à la boutique</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* ── CINEMA 16:9 MASTER SHOWCASE WITH MOTION ── */}
        <div
          className="space-y-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Interactive Cinema Carousel Tabs with Silk sliding layoutId pill */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {HERO_SLIDES.map((slide, idx) => {
              const isSelected = activeSlideIndex === idx;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => selectSlide(idx)}
                  className={`relative px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 z-10 ${
                    isSelected
                      ? 'text-white shadow-md scale-102'
                      : 'liquid-glass text-[#452c2a] hover:bg-white border border-white/80'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCinemaTab"
                      className="absolute inset-0 bg-[#813d52] rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span>{slide.tabLabel}</span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-ping" />
                  )}
                </button>
              );
            })}
          </div>

          {/* 16:9 Panoramic Theater Frame with Smooth Transition */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border-4 sm:border-8 border-white/90 bg-[#2c1a19] group">
            {/* Auto-Slide Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/15 z-30 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#dfa0b1] via-[#813d52] to-amber-300"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                {/* Master Photography */}
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-103 transition-transform duration-1000"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />

                {/* Cinematic Vignette & Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c100f] via-[#2c1a19]/50 to-transparent opacity-90 sm:opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1c100f]/80 via-transparent to-[#1c100f]/60" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex flex-wrap items-center gap-2 z-10">
                  <motion.span
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="bg-[#813d52] text-white text-[11px] sm:text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{activeSlide.badge}</span>
                  </motion.span>

                  <motion.span
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    className="hidden sm:inline-flex liquid-glass-dark text-[#dfa0b1] text-xs font-semibold px-3 py-1 rounded-full border border-white/20"
                  >
                    {activeSlide.tagline}
                  </motion.span>
                </div>

                {/* Top Right Live Shop Indicator & Pause/Play hint */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex items-center gap-2 z-10">
                  <div className="liquid-glass-dark text-white px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold flex items-center gap-2 shadow-lg">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Prêt en quelques minutes</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsPaused(!isPaused)}
                    title={isPaused ? 'Reprendre le défilement' : 'Mettre en pause'}
                    className="liquid-glass-dark text-white p-1.5 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Bottom Content Bar Overlay with Staggered Elements */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.45 }}
                  className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 bg-[#2c1a19]/80 backdrop-blur-md p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl"
                >
                  {/* Text Details */}
                  <div className="space-y-2 max-w-xl text-white">
                    <div className="flex items-center gap-2 text-xs text-[#dfa0b1] font-semibold uppercase tracking-wider">
                      <span>{activeSlide.subtitle}</span>
                      <span>·</span>
                      <span className="text-white font-bold">{activeSlide.price}</span>
                    </div>

                    <h2 className="font-serif-gourmand font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                      {activeSlide.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#f6d8df]/90 leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                      {activeSlide.description}
                    </p>

                    {/* Feature tags */}
                    <div className="hidden sm:flex flex-wrap items-center gap-2 pt-1">
                      {activeSlide.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/10 text-white text-[11px] px-2.5 py-0.5 rounded-lg font-medium border border-white/10"
                        >
                          ✓ {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions on Slide */}
                  <div className="flex items-center gap-3 shrink-0">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      onClick={handleOpenDetails}
                      className="flex-1 sm:flex-none px-5 py-3 rounded-2xl bg-white/15 hover:bg-white/25 text-white border border-white/30 text-xs sm:text-sm font-bold transition-colors backdrop-blur-sm"
                    >
                      Détails & Ingrédients
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      type="button"
                      onClick={handleQuickAdd}
                      className="flex-1 sm:flex-none px-6 py-3 rounded-2xl bg-[#813d52] hover:bg-[#6e293f] text-white text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <span>Ajouter au panier</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick 3-Card Value Banner under Cinema with Spring motion on hover */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
            <motion.div
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="liquid-glass-card rounded-2xl p-4 border border-white/90 flex items-center gap-3 shadow-2xs cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#813d52] text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-xs">
                ☕
              </div>
              <div>
                <p className="font-serif-gourmand font-bold text-sm text-[#2c1a19]">Salon de thé & Snacking</p>
                <p className="text-[11px] text-[#543734]">Sur place avec le sourire ou à emporter</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="liquid-glass-card rounded-2xl p-4 border border-white/90 flex items-center gap-3 shadow-2xs cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#813d52] text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-xs">
                ⏱️
              </div>
              <div>
                <p className="font-serif-gourmand font-bold text-sm text-[#2c1a19]">Dès 09h30 chaque matin</p>
                <p className="text-[11px] text-[#543734]">Mercredi & Samedi jusqu’à 17h15</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="liquid-glass-card rounded-2xl p-4 border border-white/90 flex items-center gap-3 shadow-2xs cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-xs">
                💬
              </div>
              <div>
                <p className="font-serif-gourmand font-bold text-sm text-[#2c1a19]">Commande WhatsApp</p>
                <p className="text-[11px] text-[#543734]">Confirmation humaine directe sans file</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

