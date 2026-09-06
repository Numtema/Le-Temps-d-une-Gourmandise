'use client';

import React, { useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Sparkles, ArrowRight, Coffee, Sandwich, IceCream } from 'lucide-react';
import { TIME_BUCKETS } from '@/lib/business-data';
import { CATALOG } from '@/lib/catalog';
import { useCart } from '@/lib/cart-context';
import { GourmetRibbon } from './GourmetRibbon';

function getCurrentHourBucket(): string {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 11) return 'morning';
  if (hour >= 11 && hour < 14) return 'lunch';
  if (hour >= 14 && hour < 18) return 'afternoon';
  return 'fresh';
}

function subscribeTime(callback: () => void) {
  const interval = setInterval(callback, 60000);
  window.addEventListener('focus', callback);
  return () => {
    clearInterval(interval);
    window.removeEventListener('focus', callback);
  };
}

function getTimeSnapshot(): string {
  return getCurrentHourBucket();
}

function getServerSnapshot(): string {
  return 'afternoon';
}

export function GourmetClock() {
  const autoBucketId = useSyncExternalStore(subscribeTime, getTimeSnapshot, getServerSnapshot);
  const [manualBucketId, setManualBucketId] = useState<string | null>(null);
  const activeBucketId = manualBucketId ?? autoBucketId;
  const { setQuickViewItem, addItem } = useCart();

  const activeBucket =
    TIME_BUCKETS.find((b) => b.id === activeBucketId) || TIME_BUCKETS[0];

  const suggestedProducts = CATALOG.filter((item) =>
    activeBucket.items.includes(item.id)
  );

  const getBucketIcon = (id: string) => {
    switch (id) {
      case 'morning':
        return <Coffee className="w-4 h-4" />;
      case 'lunch':
        return <Sandwich className="w-4 h-4" />;
      case 'afternoon':
        return <Sparkles className="w-4 h-4" />;
      case 'fresh':
        return <IceCream className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#faf6f4] via-[#fffdfc] to-[#faf6f4] border-y border-[#8d7078]/15 overflow-hidden">
      {/* Background soft ambiance */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f6d8df]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8d7078]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 liquid-glass text-[#8d7078] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Clock className="w-3.5 h-3.5 text-[#9b4f67]" />
            <span>L’Horloge Gourmande</span>
          </div>

          <h2 className="font-serif-gourmand font-bold text-3xl sm:text-4xl lg:text-5xl text-[#2c1a19] leading-tight">
            Chaque heure a sa gourmandise.
          </h2>

          <p className="text-[#543734] text-sm sm:text-base leading-relaxed">
            Le matin, le midi, au goûter ou simplement quand l’envie arrive :
            découvrez les suggestions idéales pour votre pause du moment.
          </p>

          <div className="pt-1">
            <GourmetRibbon variant="line" color="#c26982" className="w-32 mx-auto" />
          </div>
        </div>

        {/* Time Bucket Navigation Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {TIME_BUCKETS.map((bucket) => {
            const isSelected = activeBucketId === bucket.id;
            return (
              <button
                key={bucket.id}
                type="button"
                onClick={() => setManualBucketId(bucket.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#9b4f67] text-white shadow-md scale-102'
                    : 'liquid-glass text-[#543734] hover:bg-[#fdf2f4] border border-white/80'
                }`}
              >
                {getBucketIcon(bucket.id)}
                <span>{bucket.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-[#8d7078]/10 text-[#543734]/80'
                  }`}
                >
                  {bucket.hours}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Bucket Editorial Banner */}
        <div className="mt-8 liquid-glass p-6 sm:p-8 rounded-3xl border border-white/90 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#9b4f67]">
              {activeBucket.badge}
            </span>
            <h3 className="font-serif-gourmand font-bold text-2xl sm:text-3xl text-[#2c1a19]">
              {activeBucket.headline}
            </h3>
            <p className="text-xs sm:text-sm text-[#543734] max-w-xl">
              {activeBucket.desc}
            </p>
          </div>

          <Link
            href="/la-carte"
            className="shrink-0 inline-flex items-center gap-2 bg-[#9b4f67] text-white hover:bg-[#813d52] px-5 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-sm transition-colors"
          >
            <span>Toute la carte</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Suggested Product Cards Grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {suggestedProducts.map((item) => (
            <div
              key={item.id}
              className="group liquid-glass-card rounded-3xl overflow-hidden border border-white/80 hover:border-[#9b4f67]/40 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Product Thumbnail */}
              <div className="relative h-48 sm:h-52 bg-[#f6d8df] overflow-hidden">
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
                      className="bg-[#9b4f67] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="font-serif-gourmand font-bold text-lg text-[#2c1a19] group-hover:text-[#9b4f67] transition-colors">
                      {item.name}
                    </h4>
                    <span className="font-serif-gourmand font-bold text-base text-[#9b4f67] shrink-0">
                      {item.priceFormatted || `${item.price?.toFixed(2).replace('.', ',')} €`}
                    </span>
                  </div>
                  <p className="text-xs text-[#543734] line-clamp-2 leading-relaxed">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-[#8d7078]/15">
                  <button
                    type="button"
                    onClick={() => setQuickViewItem(item)}
                    className="flex-1 py-2.5 px-3 rounded-xl liquid-glass hover:bg-white text-xs font-semibold text-[#2c1a19] border border-white/80 transition-colors shadow-2xs"
                  >
                    Détails & Choix
                  </button>

                  <button
                    type="button"
                    onClick={() => addItem(item, 1)}
                    className="py-2.5 px-4 rounded-xl bg-[#9b4f67] hover:bg-[#813d52] text-xs font-semibold text-white shadow-xs transition-colors"
                    aria-label={`Ajouter ${item.name}`}
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
  );
}
