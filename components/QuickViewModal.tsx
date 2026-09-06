'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Plus, Minus, Check, ShoppingBag, AlertCircle } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { CatalogItem } from '@/lib/catalog';

interface QuickViewInnerProps {
  item: CatalogItem;
  onClose: () => void;
}

function QuickViewModalInner({ item, onClose }: QuickViewInnerProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    if (item.options) {
      item.options.forEach((group) => {
        if (group.choices.length > 0) {
          defaults[group.name] = group.choices[0].label;
        }
      });
    }
    return defaults;
  });
  const [note, setNote] = useState('');
  const [addedFeedback, setAddedFeedback] = useState(false);

  // Calculate current unit price including selected options with extra price
  let currentUnitPrice = item.price ?? 0;
  if (item.options) {
    item.options.forEach((group) => {
      const chosen = selectedOptions[group.name];
      if (chosen) {
        const choice = group.choices.find((c) => c.label === chosen);
        if (choice?.extraPrice) {
          currentUnitPrice += choice.extraPrice;
        }
      }
    });
  }

  const totalPrice = currentUnitPrice * quantity;

  const handleAddToCart = () => {
    addItem(item, quantity, selectedOptions, note);
    setAddedFeedback(true);
    setTimeout(() => {
      setAddedFeedback(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-8 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#2e1714]/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#fff9f5] rounded-3xl shadow-2xl overflow-hidden border border-[#5a2d27]/10 animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Fermer l'aperçu"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#2e1714] flex items-center justify-center shadow-sm focus:outline-none transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image side */}
          <div className="relative h-64 md:h-full min-h-[260px] bg-[#f9dde4]">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
              {item.badges.map((b) => (
                <span
                  key={b}
                  className="bg-[#b92555] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Details side */}
          <div className="p-6 md:p-7 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#b92555]">
                  {item.category.toUpperCase()}
                </p>
                <h3 className="font-serif-gourmand font-bold text-xl md:text-2xl text-[#2e1714] leading-snug">
                  {item.name}
                </h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif-gourmand font-bold text-2xl text-[#b92555]">
                    {currentUnitPrice.toFixed(2).replace('.', ',')} €
                  </span>
                  <span className="text-xs text-[#5a2d27]/60">prix unitaire</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5a2d27] leading-relaxed">
                {item.description}
              </p>

              {/* Options selection */}
              {item.options && item.options.length > 0 && (
                <div className="space-y-3 pt-2 border-t border-[#5a2d27]/10">
                  {item.options.map((optGroup) => (
                    <div key={optGroup.name} className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#2e1714]">
                        {optGroup.name}
                      </label>
                      <div className="space-y-1">
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
                              className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between border transition-all ${
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

              {/* Note */}
              <div className="pt-2">
                <input
                  type="text"
                  placeholder="Précision (ex: sans chantilly...)"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-xl border border-[#5a2d27]/20 focus:border-[#b92555] focus:outline-none bg-white"
                />
              </div>

              {/* Allergens indicator */}
              {item.allergens && item.allergens.length > 0 && (
                <div className="pt-2 text-[11px] text-[#5a2d27]/70 flex items-start gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-[#b92555] shrink-0 mt-0.5" />
                  <span>
                    <strong>Allergènes :</strong> {item.allergens.join(', ')}
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Actions: Stepper + Add CTA */}
            <div className="pt-4 border-t border-[#5a2d27]/10 space-y-3">
              <div className="flex items-center justify-between gap-4">
                {/* Quantity Stepper */}
                <div className="flex items-center gap-2 bg-white border border-[#5a2d27]/15 rounded-full p-1 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 flex items-center justify-center rounded-full text-[#5a2d27] hover:bg-[#f9dde4]"
                    aria-label="Moins"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-7 text-center font-bold text-sm text-[#2e1714]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 flex items-center justify-center rounded-full text-[#5a2d27] hover:bg-[#f9dde4]"
                    aria-label="Plus"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add CTA */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-full text-sm font-semibold shadow-md transition-all active:scale-98 ${
                    addedFeedback
                      ? 'bg-green-600 text-white'
                      : 'bg-[#b92555] hover:bg-[#951d45] text-white'
                  }`}
                >
                  {addedFeedback ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Ajouté avec délice !</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>
                        Ajouter · {totalPrice.toFixed(2).replace('.', ',')} €
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function QuickViewModal() {
  const { quickViewItem, setQuickViewItem } = useCart();

  if (!quickViewItem) return null;

  return (
    <QuickViewModalInner
      key={quickViewItem.id}
      item={quickViewItem}
      onClose={() => setQuickViewItem(null)}
    />
  );
}
