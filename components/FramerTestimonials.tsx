'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  Quote,
  MessageCircle,
  CheckCircle2,
  ThumbsUp,
  Award,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { BUSINESS_DATA } from '@/lib/business-data';

type PlatformFilter = 'all' | 'tripadvisor' | 'facebook' | 'google';

export function FramerTestimonials() {
  const [filter, setFilter] = useState<PlatformFilter>('all');
  const [activeReviewId, setActiveReviewId] = useState<string | null>(null);
  const [likedReviews, setLikedReviews] = useState<Record<string, number>>({
    'tripadvisor-1': 14,
    'tripadvisor-2': 8,
    'facebook-1': 19,
    'facebook-2': 11,
    'facebook-3': 15,
    'google-1': 7,
  });

  const quotes = BUSINESS_DATA.quotes || [];

  const filteredQuotes = quotes.filter((q) => {
    if (filter === 'all') return true;
    return q.platform === filter;
  });

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedReviews((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'tripadvisor':
        return (
          <span className="w-5 h-5 rounded-full bg-[#00AA6C] text-white flex items-center justify-center text-[10px] font-bold">
            TA
          </span>
        );
      case 'facebook':
        return (
          <span className="w-5 h-5 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-[10px] font-bold">
            f
          </span>
        );
      case 'google':
        return (
          <span className="w-5 h-5 rounded-full bg-[#EA4335] text-white flex items-center justify-center text-[10px] font-bold">
            G
          </span>
        );
      default:
        return <Star className="w-4 h-4 text-amber-500 fill-current" />;
    }
  };

  const getPlatformLabel = (platform: string) => {
    switch (platform) {
      case 'tripadvisor':
        return 'TripAdvisor';
      case 'facebook':
        return 'Facebook';
      case 'google':
        return 'Google Avis';
      default:
        return 'Avis Vérifié';
    }
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#faf6f4] via-[#fdf2f4]/50 to-[#faf6f4] border-t border-[#8d7078]/15">
      {/* Decorative fluid blur backdrops */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#8d7078]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#9b4f67]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
        {/* Header with Trust Stats */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 liquid-glass text-[#8d7078] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-2xs">
              <Award className="w-3.5 h-3.5 text-[#9b4f67]" />
              <span>Avis & Retours d’Expérience Authentiques</span>
            </div>

            <h2 className="font-serif-gourmand font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2c1a19] tracking-tight">
              Ce que nos gourmands en disent.
            </h2>

            <p className="text-xs sm:text-sm text-[#543734] leading-relaxed">
              De la file d’attente matinale saluée par nos visiteurs jusqu’au vrai chocolat onctueux et aux viennoiseries généreuses, découvrez les témoignages de notre communauté à Fécamp.
            </p>
          </div>

          {/* Aggregate Rating Scoreboard Card */}
          <div className="liquid-glass-card p-4 sm:p-5 rounded-3xl border border-white/90 shadow-sm flex items-center gap-5 shrink-0">
            <div className="text-center pr-4 border-r border-[#8d7078]/20">
              <p className="font-serif-gourmand font-extrabold text-3xl text-[#2c1a19]">4.9</p>
              <div className="flex items-center justify-center text-amber-500 my-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-[10px] text-[#543734]/80 font-medium">Moyenne générale</p>
            </div>

            <div className="space-y-1 text-xs text-[#543734]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-semibold text-[#2c1a19]">100% Retours Réels</span>
              </div>
              <p className="text-[11px] text-[#8d7078] font-medium">TripAdvisor · Facebook · Google</p>
              <div className="text-[10px] text-[#543734]/70 pt-0.5">
                Boutique place Saint-Étienne
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Platform Filter Buttons (Framer style tabs with layoutId) */}
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 pt-2">
          {[
            { id: 'all', label: 'Tous les avis', count: quotes.length },
            { id: 'tripadvisor', label: 'TripAdvisor (4.8 ★)', count: quotes.filter(q => q.platform === 'tripadvisor').length },
            { id: 'facebook', label: 'Facebook (622 abonnés)', count: quotes.filter(q => q.platform === 'facebook').length },
            { id: 'google', label: 'Google Avis (4.6 ★)', count: quotes.filter(q => q.platform === 'google').length },
          ].map((tab) => {
            const isSelected = filter === tab.id;
            return (
              <motion.button
                key={tab.id}
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setFilter(tab.id as PlatformFilter)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 z-10 ${
                  isSelected
                    ? 'text-white shadow-sm'
                    : 'liquid-glass text-[#543734] hover:bg-white border border-white/80'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeTestimonialTab"
                    className="absolute inset-0 bg-[#9b4f67] rounded-full -z-10 shadow-xs"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-[#8d7078]/10 text-[#8d7078]'
                  }`}
                >
                  {tab.count}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Animated Grid Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredQuotes.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -20 }}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveReviewId(activeReviewId === item.id ? null : item.id)}
                className={`group liquid-glass-card rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                  activeReviewId === item.id
                    ? 'border-[#9b4f67] ring-2 ring-[#9b4f67]/20 shadow-xl bg-white/95'
                    : 'border-white/90 hover:border-[#9b4f67]/40 hover:shadow-lg'
                }`}
              >
                {/* Floating Quote watermark */}
                <div className="absolute top-4 right-4 text-[#8d7078]/10 group-hover:text-[#9b4f67]/20 transition-colors pointer-events-none">
                  <Quote className="w-12 h-12" />
                </div>

                <div className="space-y-4 relative">
                  {/* Author Header Bar */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#8d7078] to-[#9b4f67] text-white flex items-center justify-center font-serif-gourmand font-bold text-base shadow-sm ring-2 ring-white"
                      >
                        {item.author.charAt(0)}
                      </motion.div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-serif-gourmand font-bold text-base text-[#2c1a19]">
                            {item.author}
                          </h3>
                          {item.verified && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          )}
                        </div>
                        <p className="text-[11px] text-[#8d7078] font-medium">
                          {item.location} {item.date ? `· ${item.date}` : ''}
                        </p>
                      </div>
                    </div>

                    {/* Platform Logo Badge */}
                    <div className="shrink-0 flex items-center gap-1 bg-white/80 px-2 py-1 rounded-full border border-white/90 shadow-2xs text-[10px] font-semibold text-[#543734]">
                      {getPlatformIcon(item.platform)}
                      <span className="hidden sm:inline">{getPlatformLabel(item.platform)}</span>
                    </div>
                  </div>

                  {/* Star Rating & Context */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center text-amber-500">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    {item.context && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#9b4f67] bg-[#9b4f67]/10 px-2 py-0.5 rounded-full">
                        {item.context}
                      </span>
                    )}
                  </div>

                  {/* Review Title */}
                  {item.title && (
                    <h4 className="font-serif-gourmand font-bold text-base text-[#2c1a19] leading-snug">
                      « {item.title} »
                    </h4>
                  )}

                  {/* Review Body */}
                  <p className="text-xs sm:text-sm text-[#452c2a] leading-relaxed font-normal">
                    {item.text}
                  </p>

                  {/* Highlight Pill */}
                  {item.highlight && (
                    <div className="inline-flex items-center gap-1.5 bg-[#fdf2f4] text-[#9b4f67] text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-[#f6d8df]">
                      <Sparkles className="w-3 h-3 shrink-0" />
                      <span>{item.highlight}</span>
                    </div>
                  )}

                  {/* Official Owner Response (Céline) if available */}
                  {item.ownerResponse && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-3 p-3.5 rounded-2xl bg-[#faf6f4] border border-[#8d7078]/20 space-y-1.5 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#9b4f67] text-white flex items-center justify-center text-[9px] font-bold">
                          LG
                        </div>
                        <span className="font-bold text-[#2c1a19] text-[11px]">
                          Réponse de Céline Almon (Fondatrice)
                        </span>
                      </div>
                      <p className="text-[11px] text-[#543734] italic pl-7">
                        « {item.ownerResponse} »
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Footer Action of Card */}
                <div className="mt-4 pt-3.5 border-t border-[#8d7078]/15 flex items-center justify-between text-xs">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={(e) => handleLike(item.id, e)}
                    className="flex items-center gap-1.5 text-[#8d7078] hover:text-[#9b4f67] font-medium transition-colors bg-white/60 hover:bg-white px-2.5 py-1 rounded-full border border-white/80"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Utile ({likedReviews[item.id] || 10})</span>
                  </motion.button>

                  <span className="text-[11px] text-[#8d7078]/80 font-medium">
                    {item.source}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Community Callout & Review Button */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/90 shadow-md text-center max-w-2xl mx-auto space-y-4">
          <div className="w-10 h-10 rounded-full bg-[#9b4f67] text-white flex items-center justify-center mx-auto shadow-sm">
            <MessageCircle className="w-5 h-5" />
          </div>

          <h3 className="font-serif-gourmand font-bold text-xl sm:text-2xl text-[#2c1a19]">
            Vous avez dégusté nos gourmandises à Fécamp ?
          </h3>

          <p className="text-xs sm:text-sm text-[#543734] max-w-md mx-auto leading-relaxed">
            Partagez votre expérience et soutenez le fait maison en laissant un mot sur nos plateformes officielles.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://www.facebook.com/p/Le-temps-dune-gourmandise-61585143640440/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#1565d8] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-xs transition-colors"
            >
              <span>Avis Facebook (+620 abonnés)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://www.tripadvisor.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00AA6C] hover:bg-[#008f5a] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-xs transition-colors"
            >
              <span>Avis TripAdvisor</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
