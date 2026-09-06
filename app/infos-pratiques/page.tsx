'use client';

import React from 'react';
import Link from 'next/link';
import {
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import { BUSINESS_DATA } from '@/lib/business-data';
import { GourmetRibbon } from '@/components/GourmetRibbon';

export default function InfosPratiquesPage() {
  const faqs = [
    {
      q: 'Comment fonctionne la commande via le site et WhatsApp ?',
      a: 'Vous choisissez vos articles sur le site dans « Ma Pause Gourmande ». Cliquez ensuite sur « Envoyer ma demande sur WhatsApp ». Un message pré-rempli s’ouvre avec vos choix, votre nom et l’heure de retrait souhaitée. La boutique vous répond rapidement pour confirmer la disponibilité et valider l’heure de retrait.',
    },
    {
      q: 'Y a-t-il un paiement en ligne ?',
      a: 'Non, aucun paiement n’est prélevé sur le site. Vous réglez directement sur place à la boutique lors du retrait de votre commande.',
    },
    {
      q: 'Peut-on consommer sur place ?',
      a: 'Absolument ! Notre salon dispose de places assises chaleureuses et accueillantes pour savourer votre déjeuner ou votre goûter sur place. Tous nos produits sont également disponibles à emporter.',
    },
    {
      q: 'Combien de temps à l’avance faut-il envoyer sa demande ?',
      a: 'Idéalement 15 à 30 minutes avant l’heure souhaitée pour le midi afin que nous puissions toaster vos sandwichs ou préparer vos gaufres et smoothies à temps.',
    },
    {
      q: 'La boutique est-elle ouverte le dimanche ?',
      a: 'L’ouverture du dimanche varie selon les périodes et les saisons. Nous vous conseillons de nous contacter au préalable au 06 72 92 72 84 ou sur WhatsApp pour confirmer l’ouverture.',
    },
  ];

  return (
    <div className="bg-[#fff9f5] min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#f9dde4] text-[#b92555] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>Horaires & Fonctionnement</span>
          </div>

          <h1 className="font-serif-gourmand font-bold text-3xl sm:text-4xl lg:text-5xl text-[#2e1714]">
            Horaires & Infos pratiques
          </h1>

          <p className="text-xs sm:text-sm text-[#5a2d27] leading-relaxed">
            Retrouvez tous les détails utiles pour organiser votre visite ou votre retrait
            au Temps d’une Gourmandise à Fécamp.
          </p>

          <GourmetRibbon variant="line" color="#d94a73" className="w-32 mx-auto" />
        </div>

        {/* Exceptional Notice Box */}
        {BUSINESS_DATA.exceptionalNotice.active && (
          <div className="bg-[#fff3f6] rounded-3xl p-6 sm:p-7 border border-[#f9dde4] flex items-start gap-4 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-[#b92555] text-white flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif-gourmand font-bold text-base text-[#2e1714]">
                {BUSINESS_DATA.exceptionalNotice.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5a2d27] leading-relaxed">
                {BUSINESS_DATA.exceptionalNotice.message}
              </p>
            </div>
          </div>
        )}

        {/* Schedule Table & Location */}
        <div className="grid md:grid-cols-12 gap-8">
          {/* Table */}
          <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#5a2d27]/10 shadow-xs space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="font-serif-gourmand font-bold text-xl text-[#2e1714] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#b92555]" />
                <span>Horaires hebdomadaires</span>
              </h2>
              <span className="text-[11px] font-mono text-[#b92555] bg-[#f9dde4]/60 px-2.5 py-1 rounded-full font-semibold">
                {BUSINESS_DATA.scheduleEffectiveDate}
              </span>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm font-mono">
              {BUSINESS_DATA.schedule.map((slot) => {
                const isExtended = slot.day === 'Mercredi' || slot.day === 'Samedi';
                return (
                  <div
                    key={slot.day}
                    className={`flex items-center justify-between p-3 rounded-xl border ${
                      isExtended
                        ? 'bg-[#fff3f6] border-[#f9dde4] font-semibold text-[#b92555]'
                        : 'bg-[#fff9f5] border-[#5a2d27]/10 text-[#2e1714]'
                    }`}
                  >
                    <span className="font-sans font-medium">{slot.day}</span>
                    <span className="font-mono">
                      {slot.closes ? `${slot.opens} → ${slot.closes}` : slot.opens}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-[#5a2d27]/70 italic">
              * Mercredi et samedi : ouverture en continu l’après-midi pour votre goûter jusqu’à 17h15 !
            </p>
          </div>

          {/* Quick Contact & Address */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#5a2d27]/10 shadow-xs space-y-4">
              <h3 className="font-serif-gourmand font-bold text-lg text-[#2e1714] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#b92555]" />
                <span>Adresse & Accès</span>
              </h3>

              <p className="text-xs sm:text-sm text-[#5a2d27] leading-relaxed">
                <strong>{BUSINESS_DATA.name}</strong>
                <br />
                {BUSINESS_DATA.address}
                <br />
                76400 Fécamp, Normandie
              </p>

              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    BUSINESS_DATA.name + ' ' + BUSINESS_DATA.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#b92555] hover:bg-[#951d45] text-white py-3 rounded-2xl text-xs font-semibold shadow-xs transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Ouvrir dans Google Maps</span>
                </a>
              </div>
            </div>

            <div className="bg-[#fffdfc] rounded-3xl p-6 sm:p-8 border border-[#5a2d27]/10 shadow-xs space-y-3">
              <h3 className="font-serif-gourmand font-bold text-lg text-[#2e1714] flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#b92555]" />
                <span>Une question directe ?</span>
              </h3>
              <p className="text-xs text-[#5a2d27]">
                Appelez-nous directement à la boutique pendant nos heures d’ouverture :
              </p>
              <a
                href={`tel:${BUSINESS_DATA.phoneIntl}`}
                className="inline-block text-lg font-serif-gourmand font-bold text-[#b92555] hover:underline"
              >
                {BUSINESS_DATA.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Ordering Flow Step by Step */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#5a2d27]/10 shadow-xs space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider font-bold text-[#b92555]">
              Simplicité & Rapidité
            </span>
            <h2 className="font-serif-gourmand font-bold text-2xl sm:text-3xl text-[#2e1714]">
              Comment commander votre pause ?
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-[#fff9f5] p-5 rounded-2xl border border-[#5a2d27]/10 space-y-2">
              <span className="w-7 h-7 rounded-full bg-[#b92555] text-white font-mono font-bold text-xs flex items-center justify-center">
                1
              </span>
              <h4 className="font-serif-gourmand font-bold text-base text-[#2e1714]">
                Choisissez sur le site
              </h4>
              <p className="text-xs text-[#5a2d27] leading-relaxed">
                Parcourez la carte, choisissez vos garnitures ou parfums et ajoutez à « Ma Pause Gourmande ».
              </p>
            </div>

            <div className="bg-[#fff9f5] p-5 rounded-2xl border border-[#5a2d27]/10 space-y-2">
              <span className="w-7 h-7 rounded-full bg-[#b92555] text-white font-mono font-bold text-xs flex items-center justify-center">
                2
              </span>
              <h4 className="font-serif-gourmand font-bold text-base text-[#2e1714]">
                Envoyez sur WhatsApp
              </h4>
              <p className="text-xs text-[#5a2d27] leading-relaxed">
                Le message est préparé avec vos articles, votre prénom et l’heure de retrait souhaitée.
              </p>
            </div>

            <div className="bg-[#fff9f5] p-5 rounded-2xl border border-[#5a2d27]/10 space-y-2">
              <span className="w-7 h-7 rounded-full bg-[#b92555] text-white font-mono font-bold text-xs flex items-center justify-center">
                3
              </span>
              <h4 className="font-serif-gourmand font-bold text-base text-[#2e1714]">
                Retirez avec le sourire
              </h4>
              <p className="text-xs text-[#5a2d27] leading-relaxed">
                La boutique confirme votre commande. Vos gourmandises vous attendent toutes chaudes ou fraîches !
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-serif-gourmand font-bold text-2xl sm:text-3xl text-[#2e1714]">
              Foire aux questions
            </h2>
            <p className="text-xs sm:text-sm text-[#5a2d27]">
              Tout ce que vous voulez savoir avant votre pause.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#5a2d27]/10 shadow-xs space-y-2"
              >
                <h4 className="font-serif-gourmand font-bold text-base text-[#2e1714] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#b92555] shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#5a2d27] pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Menu */}
        <div className="text-center pt-4">
          <Link
            href="/la-carte"
            className="inline-flex items-center gap-2 bg-[#b92555] hover:bg-[#951d45] text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-md transition-colors"
          >
            <span>Composer ma pause gourmande</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
