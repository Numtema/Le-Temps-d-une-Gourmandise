'use client';

import React, { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ShoppingBag,
  Plus,
  Minus,
  Check,
  AlertCircle,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { CATALOG, CatalogItem } from '@/lib/catalog';
import { useCart } from '@/lib/cart-context';
import { GourmetRibbon } from '@/components/GourmetRibbon';

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const product = CATALOG.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  const { addItem, setIsCartOpen, setQuickViewItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    if (product.options) {
      product.options.forEach((group) => {
        if (group.choices.length > 0) {
          defaults[group.name] = group.choices[0].label;
        }
      });
    }
    return defaults;
  });
  const [note, setNote] = useState('');
  const [added, setAdded] = useState(false);

  // Compute unit price
  let currentUnitPrice = product.price ?? 0;
  if (product.options) {
    product.options.forEach((group) => {
      const chosen = selectedOptions[group.name];
      if (chosen) {
        const choice = group.choices.find((c) => c.label === chosen);
        if (choice?.extraPrice) {
          currentUnitPrice += choice.extraPrice;
        }
      }
    });
  }

  const totalLinePrice = currentUnitPrice * quantity;

  const handleAdd = () => {
    addItem(product, quantity, selectedOptions, note);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Cross-sell suggestions (excluding current item)
  const suggestions = CATALOG.filter((c) => c.id !== product.id).slice(0, 3);

  return (
    <div className="bg-[#fff9f5] min-h-screen py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#5a2d27]/70">
          <Link href="/" className="hover:text-[#b92555] transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/la-carte" className="hover:text-[#b92555] transition-colors">
            La Carte
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#2e1714] font-semibold truncate">
            {product.name}
          </span>
        </nav>

        {/* Product Detail Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#5a2d27]/10 shadow-sm grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Product Image */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden bg-[#f9dde4] shadow-xs">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                {product.badges.map((b) => (
                  <span
                    key={b}
                    className="bg-[#b92555] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-center text-xs text-[#5a2d27]/70 italic">
              Servi avec attention chez Le Temps d’une Gourmandise à Fécamp.
            </p>
          </div>

          {/* Right: Info & Controls */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#b92555]">
                  {product.category.toUpperCase()}
                </span>
                <h1 className="font-serif-gourmand font-bold text-2xl sm:text-3xl lg:text-4xl text-[#2e1714] mt-1 leading-tight">
                  {product.name}
                </h1>

                <div className="flex items-baseline gap-3 mt-2">
                  <span className="font-serif-gourmand font-bold text-3xl text-[#b92555]">
                    {currentUnitPrice.toFixed(2).replace('.', ',')} €
                  </span>
                  <span className="text-xs text-[#5a2d27]/60">prix unitaire</span>
                </div>
              </div>

              <p className="text-sm text-[#5a2d27] leading-relaxed">
                {product.description}
              </p>

              {/* Options selection */}
              {product.options && product.options.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-[#5a2d27]/10">
                  {product.options.map((optGroup) => (
                    <div key={optGroup.name} className="space-y-2">
                      <label className="block text-xs font-bold text-[#2e1714] uppercase tracking-wider">
                        {optGroup.name}
                      </label>
                      <div className="grid gap-2">
                        {optGroup.choices.map((choice) => {
                          const isSelected = selectedOptions[optGroup.name] === choice.label;
                          return (
                            <button
                              key={choice.label}
                              type="button"
                              onClick={() =>
                                setSelectedOptions((prev) => ({
                                  ...prev,
                                  [optGroup.name]: choice.label,
                                }))
                              }
                              className={`text-left px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-between border transition-all ${
                                isSelected
                                  ? 'border-[#b92555] bg-[#f9dde4]/50 font-medium text-[#2e1714]'
                                  : 'border-[#5a2d27]/15 bg-white text-[#5a2d27] hover:border-[#b92555]/40'
                              }`}
                            >
                              <span>{choice.label}</span>
                              {choice.extraPrice && (
                                <span className="font-semibold text-[#b92555]">
                                  +{choice.extraPrice.toFixed(2).replace('.', ',')} €
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Note for kitchen */}
              <div className="pt-2">
                <label
                  htmlFor="product-note"
                  className="block text-xs font-semibold text-[#2e1714] mb-1"
                >
                  Précision / Note facultative
                </label>
                <input
                  id="product-note"
                  type="text"
                  placeholder="Ex: bien chaud, sans chantilly..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#5a2d27]/20 focus:border-[#b92555] focus:outline-none bg-[#fff9f5]"
                />
              </div>

              {/* Allergens notice */}
              {product.allergens && product.allergens.length > 0 && (
                <div className="pt-2 flex items-start gap-2 text-xs text-[#5a2d27]/80 bg-[#fff3f6] p-3 rounded-xl border border-[#f9dde4]">
                  <AlertCircle className="w-4 h-4 text-[#b92555] shrink-0 mt-0.5" />
                  <p>
                    <strong>Allergènes présents :</strong> {product.allergens.join(', ')}.
                    Pour toute question sur la composition, contactez-nous en boutique.
                  </p>
                </div>
              )}
            </div>

            {/* Stepper + Add CTA */}
            <div className="pt-6 border-t border-[#5a2d27]/10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-[#fff9f5] border border-[#5a2d27]/15 rounded-full p-1.5">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center rounded-full text-[#5a2d27] hover:bg-[#f9dde4]"
                    aria-label="Diminuer la quantité"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-bold text-sm text-[#2e1714]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full text-[#5a2d27] hover:bg-[#f9dde4]"
                    aria-label="Augmenter la quantité"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAdd}
                  className={`flex-1 py-4 px-6 rounded-full font-semibold text-sm shadow-md transition-all active:scale-98 flex items-center justify-center gap-2 ${
                    added
                      ? 'bg-green-600 text-white'
                      : 'bg-[#b92555] hover:bg-[#951d45] text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Ajouté à ma pause !</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>
                        Ajouter à ma pause · {totalLinePrice.toFixed(2).replace('.', ',')} €
                      </span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-[#5a2d27]/70 pt-1">
                <Link
                  href="/la-carte"
                  className="inline-flex items-center gap-1.5 hover:text-[#b92555] font-medium"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Retour à toute la carte</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsCartOpen(true)}
                  className="text-[#b92555] font-semibold hover:underline"
                >
                  Voir Ma Pause Gourmande →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cross-Sell Suggestions */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-gourmand font-bold text-2xl text-[#2e1714]">
              Avec ceci ?
            </h3>
            <Link
              href="/la-carte"
              className="text-xs font-semibold text-[#b92555] hover:underline"
            >
              Voir tout
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {suggestions.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden border border-[#5a2d27]/10 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div
                  onClick={() => setQuickViewItem(item)}
                  className="relative h-44 bg-[#f9dde4] cursor-pointer overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="font-serif-gourmand font-bold text-sm text-[#2e1714] truncate">
                      {item.name}
                    </h4>
                    <span className="font-serif-gourmand font-bold text-xs text-[#b92555]">
                      {item.priceFormatted || `${item.price?.toFixed(2).replace('.', ',')} €`}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => addItem(item, 1)}
                    className="w-full py-2 rounded-xl bg-[#fff9f5] hover:bg-[#b92555] hover:text-white text-xs font-semibold text-[#b92555] border border-[#b92555]/30 transition-colors"
                  >
                    Ajouter (+1)
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
