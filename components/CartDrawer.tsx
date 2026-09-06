'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  MessageCircle,
  Copy,
  Check,
  AlertCircle,
  Clock,
  User,
  ArrowRight,
} from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { BUSINESS_DATA } from '@/lib/business-data';

export function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalCount,
    totalEstimated,
    isCartOpen,
    setIsCartOpen,
    customerInfo,
    setCustomerInfo,
    generateWhatsAppUrl,
    generateWhatsAppMessage,
  } = useCart();

  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  if (!isCartOpen) return null;

  const handleCopy = () => {
    const text = generateWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-[#2e1714]/60 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fff9f5] shadow-2xl flex flex-col border-l border-[#5a2d27]/10">
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#5a2d27]/10 bg-[#fffdfc] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#f9dde4] text-[#b92555] flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif-gourmand font-bold text-lg text-[#2e1714]">
                  Ma Pause Gourmande
                </h2>
                <p className="text-xs text-[#5a2d27]/70">
                  {totalCount} {totalCount > 1 ? 'articles sélectionnés' : 'article sélectionné'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              type="button"
              className="p-2 rounded-full text-[#5a2d27] hover:bg-[#f9dde4]/50 focus:outline-none transition-colors"
              aria-label="Fermer le panier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#f9dde4] text-[#b92555] mx-auto flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 opacity-70" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif-gourmand font-bold text-lg text-[#2e1714]">
                    Votre pause attend sa première gourmandise
                  </h3>
                  <p className="text-xs text-[#5a2d27]/70 max-w-xs mx-auto">
                    Découvrez nos sandwichs chauds, gaufres croustillantes, brownies fondants et formules de rentrée.
                  </p>
                </div>
                <Link
                  href="/la-carte"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center gap-2 bg-[#b92555] hover:bg-[#951d45] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-xs transition-colors"
                >
                  <span>Explorer la carte</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <>
                {/* List of Cart Items */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#5a2d27]/70 pb-1">
                    <span>Vos gourmandises</span>
                    <button
                      onClick={clearCart}
                      type="button"
                      className="text-[#b92555] hover:underline font-medium"
                    >
                      Tout vider
                    </button>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 bg-[#fffdfc] p-3 rounded-2xl border border-[#5a2d27]/10 shadow-2xs"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#f9dde4]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>

                      {/* Info & Qty */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-serif-gourmand font-bold text-sm text-[#2e1714] truncate">
                              {item.name}
                            </h4>
                            <span className="font-semibold text-sm text-[#b92555] shrink-0">
                              {(item.price * item.quantity).toFixed(2).replace('.', ',')} €
                            </span>
                          </div>

                          {Object.entries(item.selectedOptions).length > 0 && (
                            <p className="text-[11px] text-[#5a2d27]/80 line-clamp-1 mt-0.5">
                              {Object.entries(item.selectedOptions)
                                .map(([k, v]) => `${k}: ${v}`)
                                .join(' · ')}
                            </p>
                          )}

                          {item.note && (
                            <p className="text-[11px] italic text-[#5a2d27]/70 truncate">
                              Note: {item.note}
                            </p>
                          )}
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-1.5 bg-[#fff9f5] border border-[#5a2d27]/15 rounded-lg p-0.5">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              type="button"
                              className="w-6 h-6 flex items-center justify-center rounded text-[#5a2d27] hover:bg-[#f9dde4]"
                              aria-label="Diminuer la quantité"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-bold text-[#2e1714]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              type="button"
                              className="w-6 h-6 flex items-center justify-center rounded text-[#5a2d27] hover:bg-[#f9dde4]"
                              aria-label="Augmenter la quantité"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            type="button"
                            className="text-[#5a2d27]/40 hover:text-red-600 p-1"
                            aria-label="Supprimer cet article"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Details Form */}
                <div className="bg-[#fffdfc] p-4 rounded-2xl border border-[#5a2d27]/10 space-y-3">
                  <h4 className="text-xs uppercase font-bold text-[#5a2d27] tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#b92555]" />
                    <span>Pour votre retrait</span>
                  </h4>

                  <div>
                    <label
                      htmlFor="drawer-customer-name"
                      className="block text-xs font-medium text-[#2e1714] mb-1"
                    >
                      Votre Prénom ou Nom *
                    </label>
                    <input
                      id="drawer-customer-name"
                      type="text"
                      placeholder="Ex: Sophie"
                      value={customerInfo.name}
                      onChange={(e) =>
                        setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#5a2d27]/20 focus:border-[#b92555] focus:outline-none bg-[#fff9f5]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="drawer-customer-time"
                      className="block text-xs font-medium text-[#2e1714] mb-1 flex items-center justify-between"
                    >
                      <span>Heure de retrait souhaitée</span>
                      <span className="text-[10px] text-[#5a2d27]/60">Optionnel</span>
                    </label>
                    <div className="relative">
                      <Clock className="w-3.5 h-3.5 text-[#5a2d27]/50 absolute left-3 top-2.5" />
                      <input
                        id="drawer-customer-time"
                        type="text"
                        placeholder="Ex: 12h30 ou 16h15"
                        value={customerInfo.pickupTime}
                        onChange={(e) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            pickupTime: e.target.value,
                          }))
                        }
                        className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-[#5a2d27]/20 focus:border-[#b92555] focus:outline-none bg-[#fff9f5]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="drawer-customer-note"
                      className="block text-xs font-medium text-[#2e1714] mb-1 flex items-center justify-between"
                    >
                      <span>Note ou précision</span>
                      <span className="text-[10px] text-[#5a2d27]/60">Optionnel</span>
                    </label>
                    <textarea
                      id="drawer-customer-note"
                      rows={2}
                      placeholder="Ex: sans oignons, réchauffé minute..."
                      value={customerInfo.note}
                      onChange={(e) =>
                        setCustomerInfo((prev) => ({ ...prev, note: e.target.value }))
                      }
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#5a2d27]/20 focus:border-[#b92555] focus:outline-none bg-[#fff9f5]"
                    />
                  </div>
                </div>

                {/* Message preview toggle */}
                <div>
                  <button
                    type="button"
                    onClick={() => setShowPreview(!showPreview)}
                    className="text-xs text-[#b92555] hover:underline font-medium flex items-center gap-1"
                  >
                    <span>{showPreview ? 'Masquer le texte' : 'Aperçu du message WhatsApp'}</span>
                  </button>

                  {showPreview && (
                    <div className="mt-2 p-3 bg-[#fff3f6] rounded-xl text-[11px] font-mono whitespace-pre-wrap text-[#2e1714] border border-[#f9dde4]">
                      {generateWhatsAppMessage()}
                    </div>
                  )}
                </div>

                {/* Safety & Human validation disclaimer */}
                <div className="bg-[#fff3f6] p-3 rounded-xl border border-[#f9dde4] flex items-start gap-2 text-xs text-[#5a2d27]">
                  <AlertCircle className="w-4 h-4 text-[#b92555] shrink-0 mt-0.5" />
                  <p className="leading-snug">
                    <strong className="text-[#2e1714]">Confirmation humaine :</strong> Votre
                    demande est transmise directement sur WhatsApp. La boutique vous
                    confirmera la disponibilité et l’heure de retrait.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#5a2d27]/10 bg-[#fffdfc] space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#5a2d27]">
                  Total estimé
                </span>
                <span className="font-serif-gourmand font-bold text-2xl text-[#b92555]">
                  {totalEstimated.toFixed(2).replace('.', ',')} €
                </span>
              </div>

              {/* Primary WhatsApp Action */}
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-4 rounded-2xl font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Envoyer ma demande sur WhatsApp</span>
              </a>

              {/* Fallback Copy Button */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-[#5a2d27]/20 text-xs font-medium text-[#5a2d27] hover:bg-[#fff9f5] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-green-700 font-semibold">Message copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copier le message</span>
                    </>
                  )}
                </button>

                <Link
                  href="/la-carte"
                  onClick={() => setIsCartOpen(false)}
                  className="flex items-center justify-center py-2 px-3 rounded-xl bg-[#f9dde4]/60 hover:bg-[#f9dde4] text-xs font-medium text-[#b92555] transition-colors"
                >
                  <span>Continuer</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
