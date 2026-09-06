'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_DATA } from '@/lib/business-data';
import { GourmetRibbon } from '@/components/GourmetRibbon';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#fff9f5] min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#f9dde4] text-[#b92555] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Échange & Convivialité</span>
          </div>

          <h1 className="font-serif-gourmand font-bold text-3xl sm:text-4xl lg:text-5xl text-[#2e1714]">
            Contactez la boutique.
          </h1>

          <p className="text-xs sm:text-sm text-[#5a2d27] leading-relaxed">
            Une question sur un produit, une commande pour un événement ou simplement envie de nous dire un mot doux ? Nous sommes à votre écoute.
          </p>

          <GourmetRibbon variant="line" color="#d94a73" className="w-32 mx-auto" />
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-12 gap-8">
          {/* Left: Direct Contact Channels */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#5a2d27]/10 shadow-xs space-y-5">
              <h2 className="font-serif-gourmand font-bold text-xl text-[#2e1714]">
                Nos coordonnées
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#5a2d27]">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f9dde4] flex items-center justify-center text-[#b92555] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2e1714]">Adresse</p>
                    <p>{BUSINESS_DATA.address}</p>
                    <p className="text-[11px] text-[#5a2d27]/70">
                      Face à l’église Saint-Étienne
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f9dde4] flex items-center justify-center text-[#b92555] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2e1714]">Téléphone</p>
                    <a
                      href={`tel:${BUSINESS_DATA.phoneIntl}`}
                      className="text-[#b92555] font-semibold hover:underline"
                    >
                      {BUSINESS_DATA.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f9dde4] flex items-center justify-center text-[#b92555] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2e1714]">Email</p>
                    <a
                      href={`mailto:${BUSINESS_DATA.email}`}
                      className="text-[#b92555] hover:underline break-all"
                    >
                      {BUSINESS_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f9dde4] flex items-center justify-center text-[#b92555] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2e1714]">Ouverture</p>
                    <p>Dès 9h30 chaque matin</p>
                    <p className="text-[11px] text-[#5a2d27]/70">
                      Mercredi & samedi jusqu’à 17h15
                    </p>
                  </div>
                </div>
              </div>

              {/* Fast WhatsApp Call-out */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${BUSINESS_DATA.whatsappPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-4 rounded-2xl font-semibold text-xs sm:text-sm shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Discuter en direct sur WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#5a2d27]/10 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-gourmand font-bold text-2xl text-[#2e1714]">
                  Merci pour votre message !
                </h3>
                <p className="text-xs sm:text-sm text-[#5a2d27] max-w-sm mx-auto leading-relaxed">
                  Nous avons bien reçu votre demande et nous vous répondrons dans les meilleurs délais.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', message: '' });
                  }}
                  className="text-xs font-semibold text-[#b92555] underline hover:text-[#951d45]"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="font-serif-gourmand font-bold text-xl text-[#2e1714]">
                  Laissez-nous un message
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-[#2e1714] mb-1"
                    >
                      Nom ou Prénom *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#5a2d27]/20 focus:border-[#b92555] focus:outline-none bg-[#fff9f5]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-medium text-[#2e1714] mb-1"
                    >
                      Téléphone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="06 XX XX XX XX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#5a2d27]/20 focus:border-[#b92555] focus:outline-none bg-[#fff9f5]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-[#2e1714] mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="votre.email@exemple.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#5a2d27]/20 focus:border-[#b92555] focus:outline-none bg-[#fff9f5]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-[#2e1714] mb-1"
                  >
                    Votre message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Bonjour, je souhaiterais savoir si..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#5a2d27]/20 focus:border-[#b92555] focus:outline-none bg-[#fff9f5]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#b92555] hover:bg-[#951d45] text-white py-3 px-6 rounded-2xl font-semibold text-xs sm:text-sm shadow-xs transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer ma demande</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
