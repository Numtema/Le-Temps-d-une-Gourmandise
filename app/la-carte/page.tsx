'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Search,
  SlidersHorizontal,
  Plus,
  ShoppingBag,
  Sparkles,
  Sandwich,
  Cake,
  Coffee,
  IceCream,
  Tag,
  Flame,
  Check,
} from 'lucide-react';
import { CATALOG, CATEGORIES, CatalogItem } from '@/lib/catalog';
import { useCart } from '@/lib/cart-context';
import { GourmetRibbon } from '@/components/GourmetRibbon';

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const { setQuickViewItem, addItem } = useCart();
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return CATALOG.filter((item) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all'
          ? true
          : item.categories.includes(selectedCategory);

      // Search query filter
      const matchesSearch =
        searchQuery.trim() === ''
          ? true
          : item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleQuickAdd = (item: CatalogItem) => {
    addItem(item, 1);
    setJustAddedId(item.id);
    setTimeout(() => setJustAddedId(null), 1000);
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'sale':
        return <Sandwich className="w-3.5 h-3.5" />;
      case 'sucre':
        return <Cake className="w-3.5 h-3.5" />;
      case 'boissons':
        return <Coffee className="w-3.5 h-3.5" />;
      case 'glaces':
        return <IceCream className="w-3.5 h-3.5" />;
      case 'formules':
        return <Tag className="w-3.5 h-3.5" />;
      case 'nouveautes':
        return <Flame className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="bg-[#faf6f4] min-h-screen pb-20">
      {/* ── CATALOG HERO ── */}
      <section className="bg-gradient-to-b from-[#fdf2f4]/80 via-[#faf6f4] to-[#faf6f4] pt-10 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#8d7078]/15 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f6d8df]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center space-y-4 relative">
          <div className="inline-flex items-center gap-2 liquid-glass text-[#8d7078] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#9b4f67]" />
            <span>La Carte Gourmande</span>
          </div>

          <h1 className="font-serif-gourmand font-bold text-3xl sm:text-4xl lg:text-5xl text-[#2c1a19]">
            La carte, selon votre envie.
          </h1>

          <p className="text-xs sm:text-sm text-[#543734] max-w-xl mx-auto leading-relaxed">
            Salé, sucré, boissons, glaces Mövenpick et formules : explorez la sélection et
            composez votre pause. Ajoutez vos articles puis transmettez votre demande en 1 clic sur WhatsApp.
          </p>

          <GourmetRibbon variant="line" color="#c26982" className="w-32 mx-auto" />

          {/* Search bar */}
          <div className="max-w-md mx-auto pt-2">
            <div className="relative">
              <Search className="w-4 h-4 text-[#543734]/50 absolute left-4 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher une gourmandise (sandwich, gaufre, brookie...)"
                className="w-full pl-11 pr-4 py-2.5 liquid-glass border border-white/90 rounded-full text-xs sm:text-sm text-[#2c1a19] placeholder-[#543734]/50 focus:outline-none focus:border-[#9b4f67] focus:ring-2 focus:ring-[#f6d8df] shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY CATEGORY RAIL ── */}
      <div className="sticky top-[61px] z-30 liquid-glass py-3 border-b border-[#8d7078]/15 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                  isSelected
                    ? 'bg-[#9b4f67] text-white shadow-sm'
                    : 'liquid-glass text-[#543734] hover:bg-[#fdf2f4] border border-white/80'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── PRODUCT GRID ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-between pb-4 text-xs text-[#543734]">
          <span>
            Affichage de <strong>{filteredItems.length}</strong>{' '}
            {filteredItems.length > 1 ? 'gourmandises' : 'gourmandise'}
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#9b4f67] hover:underline font-semibold"
            >
              Effacer la recherche
            </button>
          )}
        </div>

        {filteredItems.length === 0 ? (
          <div className="liquid-glass-card rounded-3xl p-12 text-center border border-white/90 space-y-4 my-8">
            <p className="font-serif-gourmand font-bold text-xl text-[#2c1a19]">
              Rien ici pour l’instant
            </p>
            <p className="text-xs text-[#543734] max-w-sm mx-auto">
              Aucun produit ne correspond à votre recherche. Essayez un autre mot-clé ou réinitialisez les filtres.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="bg-[#9b4f67] hover:bg-[#813d52] text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-xs"
            >
              Voir toute la carte
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group liquid-glass-card rounded-3xl overflow-hidden border border-white/80 hover:border-[#9b4f67]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Media Container */}
                <div>
                  <div
                    onClick={() => setQuickViewItem(item)}
                    className="relative h-48 bg-[#f6d8df] overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {item.badges.map((badge) => (
                        <span
                          key={badge}
                          className="bg-[#9b4f67] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-baseline justify-between gap-2">
                      <Link
                        href={`/la-carte/${item.slug}`}
                        className="font-serif-gourmand font-bold text-base text-[#2c1a19] group-hover:text-[#9b4f67] transition-colors leading-snug line-clamp-1"
                      >
                        {item.name}
                      </Link>
                      <span className="font-serif-gourmand font-bold text-sm text-[#9b4f67] shrink-0">
                        {item.priceFormatted || `${item.price?.toFixed(2).replace('.', ',')} €`}
                      </span>
                    </div>

                    <p className="text-xs text-[#543734]/80 line-clamp-2 leading-relaxed">
                      {item.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Footer action buttons */}
                <div className="p-4 pt-0 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuickViewItem(item)}
                    className="flex-1 py-2 px-3 rounded-xl liquid-glass hover:bg-white text-xs font-semibold text-[#2c1a19] border border-white/80 transition-colors shadow-2xs"
                  >
                    Détails
                  </button>

                  <button
                    type="button"
                    onClick={() => handleQuickAdd(item)}
                    className={`py-2 px-3.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-all ${
                      justAddedId === item.id
                        ? 'bg-green-600 text-white'
                        : 'bg-[#9b4f67] hover:bg-[#813d52] text-white shadow-xs'
                    }`}
                    aria-label={`Ajouter ${item.name} au panier`}
                  >
                    {justAddedId === item.id ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Ajouter</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#fff9f5]">
          <div className="text-center space-y-3">
            <div className="w-10 h-10 border-4 border-[#b92555] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="font-serif-gourmand font-semibold text-[#2e1714]">
              Chargement de la carte...
            </p>
          </div>
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
