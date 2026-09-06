import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, MessageCircle, Heart, Sparkles } from 'lucide-react';
import { BUSINESS_DATA } from '@/lib/business-data';
import { GourmetRibbon } from './GourmetRibbon';

export function Footer() {
  return (
    <footer className="bg-[#d4bcbc] text-[#2c1a19] pt-16 pb-12 border-t border-[#8d7078]/40 relative overflow-hidden">
      {/* Decorative top ribbon accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-12 h-12 rounded-full bg-[#813d52] flex items-center justify-center text-white shadow-lg ring-4 ring-[#d4bcbc]">
          <GourmetRibbon variant="heart" color="#fff" className="w-6 h-6" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden bg-[#fffdfc] ring-2 ring-[#813d52]/40 shadow-md">
                <Image
                  src="/images/logo-premium-creme.png"
                  alt="Le Temps d’une Gourmandise"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-gourmand font-extrabold text-xl tracking-tight text-[#2c1a19]">
                  Le Temps d’une Gourmandise
                </span>
                <span className="text-[11px] text-[#6e293f] font-semibold">Fécamp · Normandie</span>
              </div>
            </div>
            <p className="text-xs text-[#3e2326] leading-relaxed font-medium">
              Salon de thé & restauration rapide, sandwichs croustillants, gaufres, brookies et vrais chocolats onctueux au cœur de Fécamp.
              Une halte raffinée et chaleureuse pour savourer le moment présent.
            </p>
            <div className="pt-2">
              <GourmetRibbon variant="wave" color="#813d52" className="w-40" />
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif-gourmand font-bold text-base text-[#2c1a19] uppercase tracking-wider text-xs flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#813d52]" />
              <span>Explorer</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-[#3e2326] hover:text-[#813d52] font-semibold transition-colors flex items-center gap-1">
                  <span>Accueil</span>
                </Link>
              </li>
              <li>
                <Link href="/la-carte" className="text-[#3e2326] hover:text-[#813d52] font-semibold transition-colors flex items-center gap-1">
                  <span>La Carte des Délices</span>
                </Link>
              </li>
              <li>
                <Link href="/offres" className="text-[#3e2326] hover:text-[#813d52] font-semibold transition-colors flex items-center gap-1">
                  <span>Offres & Formules Rentrée</span>
                </Link>
              </li>
              <li>
                <Link href="/la-boutique" className="text-[#3e2326] hover:text-[#813d52] font-semibold transition-colors flex items-center gap-1">
                  <span>La Boutique à Fécamp</span>
                </Link>
              </li>
              <li>
                <Link href="/infos-pratiques" className="text-[#3e2326] hover:text-[#813d52] font-semibold transition-colors flex items-center gap-1">
                  <span>Horaires & Retrait</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#3e2326] hover:text-[#813d52] font-semibold transition-colors flex items-center gap-1">
                  <span>Nous Contacter</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Horaires */}
          <div className="space-y-3">
            <h4 className="font-serif-gourmand font-bold text-base text-[#2c1a19] uppercase tracking-wider text-xs flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#813d52]" />
              <span>Horaires d’accueil</span>
            </h4>
            <div className="text-xs space-y-1.5 text-[#2c1a19] font-mono">
              <div className="flex justify-between border-b border-[#8d7078]/30 pb-1">
                <span className="text-[#6e293f] font-semibold">Lun, Mar, Jeu, Ven</span>
                <span className="font-bold text-[#2c1a19]">09:30 – 14:15</span>
              </div>
              <div className="flex justify-between border-b border-[#8d7078]/30 pb-1">
                <span className="text-[#813d52] font-bold">Mercredi & Samedi</span>
                <span className="font-black text-[#813d52]">09:30 – 17:15</span>
              </div>
              <div className="flex justify-between pb-1 text-[#543734]/80">
                <span>Dimanche</span>
                <span className="font-semibold">À confirmer</span>
              </div>
            </div>
            <p className="text-[11px] text-[#543734] italic font-medium">
              {BUSINESS_DATA.scheduleEffectiveDate}
            </p>
          </div>

          {/* Col 4: Contact & Local */}
          <div className="space-y-3">
            <h4 className="font-serif-gourmand font-bold text-base text-[#2c1a19] uppercase tracking-wider text-xs flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#813d52]" />
              <span>Nous trouver</span>
            </h4>
            <div className="text-xs space-y-2 text-[#2c1a19]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#813d52] shrink-0 mt-0.5" />
                <span className="font-medium text-[#2c1a19]">{BUSINESS_DATA.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#813d52] shrink-0" />
                <a href={`tel:${BUSINESS_DATA.phoneIntl}`} className="hover:underline font-bold text-[#2c1a19]">
                  {BUSINESS_DATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#813d52] shrink-0" />
                <a href={`mailto:${BUSINESS_DATA.email}`} className="hover:underline truncate font-medium text-[#2c1a19]">
                  {BUSINESS_DATA.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${BUSINESS_DATA.whatsappPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Écrire sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal Disclaimer & Copyright */}
        <div className="pt-8 border-t border-[#8d7078]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3e2326]">
          <p className="font-medium">
            © {new Date().getFullYear()} Le Temps d’une Gourmandise · 4 place Saint-Étienne, 76400 Fécamp.
          </p>
          <div className="flex items-center gap-4 text-[11px] font-medium text-[#543734]">
            <span>Demande de commande avec confirmation humaine sur WhatsApp</span>
            <span>·</span>
            <span>Sans paiement en ligne</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
