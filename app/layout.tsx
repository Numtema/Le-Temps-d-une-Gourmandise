import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/lib/cart-context';
import { GlobalHeader } from '@/components/GlobalHeader';
import { CartDrawer } from '@/components/CartDrawer';
import { CartDock } from '@/components/CartDock';
import { QuickViewModal } from '@/components/QuickViewModal';
import { Footer } from '@/components/Footer';
import { BUSINESS_DATA } from '@/lib/business-data';

export const metadata: Metadata = {
  title: 'Le Temps d’une Gourmandise | Pause sucrée & salée à Fécamp',
  description:
    'Pause gourmande sucrée et salée à Fécamp : sandwichs, gaufres, brownies, brookies, glaces, smoothies et boissons au 4 place Saint-Étienne.',
  openGraph: {
    title: 'Le Temps d’une Gourmandise | Pause sucrée & salée à Fécamp',
    description:
      'Pause gourmande sucrée et salée à Fécamp : sandwichs chauds & froids, gaufres, brownies, brookies, glaces et boissons.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Temps d’une Gourmandise | Fécamp',
    description:
      'Pause gourmande sucrée et salée à Fécamp. Commandez votre pause sur WhatsApp.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Restaurant',
        '@id': 'https://letempsdunegourmandise.fr/#restaurant',
        name: BUSINESS_DATA.name,
        description: BUSINESS_DATA.baseline,
        telephone: BUSINESS_DATA.phone,
        email: BUSINESS_DATA.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '4 place Saint-Étienne',
          addressLocality: 'Fécamp',
          postalCode: '76400',
          addressCountry: 'FR',
        },
        servesCuisine: ['Snack', 'Sandwiches', 'Pâtisserie', 'Glaces', 'Goûter'],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
            opens: '09:30',
            closes: '14:15',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Wednesday', 'Saturday'],
            opens: '09:30',
            closes: '17:15',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://letempsdunegourmandise.fr/#website',
        name: BUSINESS_DATA.name,
        url: 'https://letempsdunegourmandise.fr',
      },
    ],
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Fraunces:ital,opsz,wght@0,9..144,400..800;1,9..144,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col antialiased">
        <CartProvider>
          <GlobalHeader />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <CartDock />
          <QuickViewModal />
        </CartProvider>
      </body>
    </html>
  );
}
