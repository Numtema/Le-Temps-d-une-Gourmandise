'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  Copy,
  Check,
  AlertCircle,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { BUSINESS_DATA } from '@/lib/business-data';
import { GourmetRibbon } from '@/components/GourmetRibbon';

export default function MaPausePage() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalCount,
    totalEstimated,
    customerInfo,
    setCustomerInfo,
    generateWhatsAppUrl,
    generateWhatsAppMessage,
  } = useCart();

  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleCopy = () => {
    const text = generateWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-[#fff9f5] min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#f9dde4] text-[#b92555] px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Récapitulatif</span>
          </div>

          <h1 className="font-serif-gourmand font-bold text-3xl sm:text-4xl text-[#2e1714]">
            Ma Pause Gourmande
          </h1>

          <p className="text-xs sm:text-sm text-[#5a2d27] max-w-md mx-auto">
            Vérifiez vos sélections avant d’envoyer votre demande de commande sur WhatsApp.
          </p>

          <GourmetRibbon variant="line" color="#d94a73" className="w-28 mx-auto" />
        </div>

        {items.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white rounded-3xl p-12 text-center border border-[#5a2d27]/10 shadow-xs space-y-4 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#f9dde4] text-[#b92555] mx-auto flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 opacity-70" />
            </div>
            <div className="space-y-1">
              <h2 className="font-serif-gourmand font-bold text-xl text-[#2e1714]">
                Votre pause attend sa première gourmandise
              </h2>
              <p className="text-xs text-[#5a2d27]/70">
                Sandwichs chauds, gaufres, brownies, glaces ou formules de rentrée.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/la-carte"
                className="inline-flex items-center gap-2 bg-[#b92555] hover:bg-[#951d45] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-xs transition-colors"
              >
                <span>Explorer la carte</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Column: Items List */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center justify-between text-xs text-[#5a2d27]/80 pb-1">
                <span>
                  Articles choisis ({totalCount})
                </span>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-[#b92555] hover:underline font-medium"
                >
                  Tout vider
                </button>
              </div>

              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-4 border border-[#5a2d27]/10 shadow-2xs flex gap-4"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#f9dde4] shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif-gourmand font-bold text-sm text-[#2e1714]">
                            {item.name}
                          </h3>
                          <span className="font-serif-gourmand font-bold text-sm text-[#b92555] shrink-0">
                            {(item.price * item.quantity).toFixed(2).replace('.', ',')} €
                          </span>
                        </div>

                        {Object.entries(item.selectedOptions).length > 0 && (
                          <p className="text-[11px] text-[#5a2d27]/80 mt-0.5">
                            {Object.entries(item.selectedOptions)
                              .map(([k, v]) => `${k}: ${v}`)
                              .join(' · ')}
                          </p>
                        )}

                        {item.note && (
                          <p className="text-[11px] italic text-[#5a2d27]/70 mt-0.5">
                            Note: {item.note}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2 bg-[#fff9f5] border border-[#5a2d27]/15 rounded-lg p-0.5">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center rounded text-[#5a2d27] hover:bg-[#f9dde4]"
                            aria-label="Diminuer la quantité"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-[#2e1714]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center rounded text-[#5a2d27] hover:bg-[#f9dde4]"
                            aria-label="Augmenter la quantité"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
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

              <div className="pt-2">
                <Link
                  href="/la-carte"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#b92555] hover:underline"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Ajouter d’autres gourmandises</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Customer Info & WhatsApp Hand-off */}
            <div className="md:col-span-5 space-y-6">
              {/* Customer Input Card */}
              <div className="bg-white rounded-3xl p-6 border border-[#5a2d27]/10 shadow-xs space-y-4">
                <h3 className="font-serif-gourmand font-bold text-base text-[#2e1714] flex items-center gap-2">
                  <User className="w-4 h-4 text-[#b92555]" />
                  <span>Vos coordonnées de retrait</span>
                </h3>

                <div>
                  <label
                    htmlFor="order-name"
                    className="block text-xs font-medium text-[#2e1714] mb-1"
                  >
                    Votre Prénom ou Nom *
                  </label>
                  <input
                    id="order-name"
                    type="text"
                    required
                    placeholder="Ex: Sophie"
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#5a2d27]/20 focus:border-[#b92555] focus:outline-none bg-[#fff9f5]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="order-time"
                    className="block text-xs font-medium text-[#2e1714] mb-1 flex items-center justify-between"
                  >
                    <span>Heure de retrait souhaitée</span>
                    <span className="text-[10px] text-[#5a2d27]/60">Optionnel</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-3.5 h-3.5 text-[#5a2d27]/50 absolute left-3 top-3" />
                    <input
                      id="order-time"
                      type="text"
                      placeholder="Ex: 12h30 ou 16h15"
                      value={customerInfo.pickupTime}
                      onChange={(e) =>
                        setCustomerInfo((prev) => ({
                          ...prev,
                          pickupTime: e.target.value,
                        }))
                      }
                      className="w-full pl-9 pr-3.5 py-2.5 text-xs rounded-xl border border-[#5a2d27]/20 focus:border-[#b92555] focus:outline-none bg-[#fff9f5]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="order-note"
                    className="block text-xs font-medium text-[#2e1714] mb-1 flex items-center justify-between"
                  >
                    <span>Note / Précision</span>
                    <span className="text-[10px] text-[#5a2d27]/60">Optionnel</span>
                  </label>
                  <textarea
                    id="order-note"
                    rows={2}
                    placeholder="Ex: sans oignons, réchauffé minute..."
                    value={customerInfo.note}
                    onChange={(e) =>
                      setCustomerInfo((prev) => ({ ...prev, note: e.target.value }))
                    }
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#5a2d27]/20 focus:border-[#b92555] focus:outline-none bg-[#fff9f5]"
                  />
                </div>
              </div>

              {/* Estimated Total & Actions */}
              <div className="bg-white rounded-3xl p-6 border border-[#5a2d27]/10 shadow-xs space-y-4">
                <div className="flex items-baseline justify-between border-b border-[#5a2d27]/10 pb-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#5a2d27]">
                    Total estimé
                  </span>
                  <span className="font-serif-gourmand font-bold text-3xl text-[#b92555]">
                    {totalEstimated.toFixed(2).replace('.', ',')} €
                  </span>
                </div>

                {/* WhatsApp Link button */}
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-4 rounded-2xl font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-98"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Envoyer ma demande sur WhatsApp</span>
                </a>

                {/* Fallback copy */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#5a2d27]/20 text-xs font-medium text-[#5a2d27] hover:bg-[#fff9f5] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-green-700 font-semibold">Message copié dans le presse-papier !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copier le texte du message</span>
                    </>
                  )}
                </button>

                {/* Preview accordion */}
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="text-xs text-[#b92555] hover:underline font-medium block text-center w-full"
                >
                  {showPreview ? 'Masquer le texte préparé' : 'Voir le texte envoyé à la boutique'}
                </button>

                {showPreview && (
                  <div className="p-3.5 bg-[#fff3f6] rounded-xl text-[11px] font-mono whitespace-pre-wrap text-[#2e1714] border border-[#f9dde4]">
                    {generateWhatsAppMessage()}
                  </div>
                )}

                {/* Human Confirmation Disclaimer */}
                <div className="bg-[#fff3f6] p-3.5 rounded-2xl border border-[#f9dde4] flex items-start gap-2.5 text-xs text-[#5a2d27]">
                  <AlertCircle className="w-4 h-4 text-[#b92555] shrink-0 mt-0.5" />
                  <p className="leading-snug">
                    <strong className="text-[#2e1714]">Note importante :</strong> Votre
                    demande est transmise sur WhatsApp. La boutique vous répondra
                    pour valider la disponibilité et le créneau de retrait.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
