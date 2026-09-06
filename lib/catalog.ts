export interface ProductOption {
  name: string;
  choices: { label: string; extraPrice?: number }[];
}

export interface CatalogItem {
  id: string;
  slug: string;
  name: string;
  kind: 'product' | 'product_family' | 'offer_product';
  category: 'sucre' | 'sale' | 'boissons' | 'glaces' | 'formules' | 'nouveautes';
  categories: string[];
  shortDescription: string;
  description: string;
  price: number | null;
  priceFormatted?: string;
  currency: 'EUR';
  image: string;
  badges: string[];
  available: boolean;
  orderable: boolean;
  options?: ProductOption[];
  allergens?: string[];
  sourceNotes?: string;
  featured?: boolean;
}

export const CATEGORIES = [
  { id: 'all', label: 'Tout', icon: 'Sparkles' },
  { id: 'sale', label: 'Salé', icon: 'Sandwich' },
  { id: 'sucre', label: 'Sucré', icon: 'Cake' },
  { id: 'boissons', label: 'Boissons', icon: 'Coffee' },
  { id: 'glaces', label: 'Glaces', icon: 'IceCream' },
  { id: 'formules', label: 'Formules', icon: 'Tag' },
  { id: 'nouveautes', label: 'Nouveautés', icon: 'Flame' },
];

export const CATALOG: CatalogItem[] = [
  {
    id: 'formule-cookie-rentree',
    slug: 'formule-cookie-boisson',
    name: 'Formule Cookie + Boisson',
    kind: 'offer_product',
    category: 'formules',
    categories: ['sucre', 'boissons', 'formules'],
    shortDescription: '1 cookie aux pépites de chocolat + 1 boisson au choix (chaude ou canette fraîche).',
    description: 'Une petite pause gourmande à petit prix ! Savourez notre délicieux cookie aux pépites de chocolat fondant, accompagné d’un café, thé ou d’une canette fraîche au choix.',
    price: 2.50,
    priceFormatted: '2,50 €',
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop',
    badges: ['Offre Rentrée', 'Top Prix'],
    available: true,
    orderable: true,
    featured: true,
    options: [
      {
        name: 'Boisson au choix',
        choices: [
          { label: 'Canette fraîche (Coca, Ice Tea, Oasis)' },
          { label: 'Café expresso ou allongé' },
          { label: 'Chocolat chaud réconfortant' },
          { label: 'Thé parfumé' },
          { label: 'Eau minérale' },
        ],
      },
    ],
    allergens: ['Gluten', 'Œufs', 'Lait', 'Soja'],
  },
  {
    id: 'formule-donut-rentree',
    slug: 'formule-donut-boisson',
    name: 'Formule Donut + Boisson',
    kind: 'offer_product',
    category: 'formules',
    categories: ['sucre', 'boissons', 'formules'],
    shortDescription: '1 donut sucré ou chocolat + 1 boisson au choix, chaude ou canette.',
    description: 'Pour bien commencer la rentrée et vos pauses matinales ou de l’après-midi : 1 donut moelleux au choix + 1 canette ou boisson chaude pour 2€ tout rond !',
    price: 2.00,
    priceFormatted: '2,00 €',
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop',
    badges: ['Offre Rentrée', '2€ Tout Rond'],
    available: true,
    orderable: true,
    featured: true,
    options: [
      {
        name: 'Parfum Donut',
        choices: [
          { label: 'Donut au Sucre' },
          { label: 'Donut Chocolat nappé' },
        ],
      },
      {
        name: 'Boisson au choix',
        choices: [
          { label: 'Canette fraîche au choix' },
          { label: 'Café expresso' },
          { label: 'Chocolat chaud' },
          { label: 'Eau fraîche' },
        ],
      },
    ],
    allergens: ['Gluten', 'Lait', 'Œufs', 'Soja'],
  },
  {
    id: 'brownie',
    slug: 'brownie',
    name: 'Brownie Chocolat Intense',
    kind: 'product',
    category: 'nouveautes',
    categories: ['sucre', 'nouveautes'],
    shortDescription: 'Une douceur intensément chocolatée, moelleuse à cœur et fondante.',
    description: 'Moelleux, fondant et généreusement chocolaté. Parfait pour une pause réconfortante à tout moment de la journée chez Le Temps d’une Gourmandise.',
    price: 3.20,
    priceFormatted: '3,20 €',
    currency: 'EUR',
    image: '/images/brownies-brookies.png',
    badges: ['Nouveauté', 'Gourmandise'],
    available: true,
    orderable: true,
    featured: true,
    options: [
      {
        name: 'Option gourmande',
        choices: [
          { label: 'Nature' },
          { label: 'Supplément coulis chocolat (+0,50€)', extraPrice: 0.50 },
          { label: 'Supplément chantilly (+0,50€)', extraPrice: 0.50 },
        ],
      },
    ],
    allergens: ['Gluten', 'Lait', 'Œufs'],
  },
  {
    id: 'brookie',
    slug: 'brookie',
    name: 'Brookie Fondant Cookie-Brownie',
    kind: 'product',
    category: 'nouveautes',
    categories: ['sucre', 'nouveautes'],
    shortDescription: 'Le mariage divin entre la texture croustillante du cookie et le fondant du brownie.',
    description: 'Pourquoi choisir entre un cookie et un brownie ? Notre brookie réunit une base de brownie riche en cacao et un topping cookie doré aux pépites craquantes.',
    price: 3.50,
    priceFormatted: '3,50 €',
    currency: 'EUR',
    image: '/images/brownies-brookies.png',
    badges: ['Nouveauté', 'Coup de Cœur'],
    available: true,
    orderable: true,
    featured: true,
    options: [
      {
        name: 'Finition',
        choices: [
          { label: 'Nature' },
          { label: 'Nappage caramel beurre salé (+0,50€)', extraPrice: 0.50 },
        ],
      },
    ],
    allergens: ['Gluten', 'Lait', 'Œufs', 'Fruits à coque'],
  },
  {
    id: 'sandwich-chaud-froid',
    slug: 'sandwichs-chauds-froids',
    name: 'Sandwichs Chauds & Froids',
    kind: 'product_family',
    category: 'sale',
    categories: ['sale'],
    shortDescription: 'Baguette croustillante garnie d’ingrédients savoureux, toastée ou fraîche.',
    description: 'Pour votre déjeuner sur place ou à emporter à Fécamp. Pain croustillant, garnitures gourmandes préparées chaque jour.',
    price: 4.90,
    priceFormatted: 'Dès 4,90 €',
    currency: 'EUR',
    image: '/images/sandwich-reel.png',
    badges: ['Midi Gourmand'],
    available: true,
    orderable: true,
    featured: true,
    options: [
      {
        name: 'Type de préparation',
        choices: [
          { label: 'Chaud toasté minute' },
          { label: 'Frais classique' },
        ],
      },
      {
        name: 'Recette du jour',
        choices: [
          { label: 'Poulet rôti, mayonnaise douce, salade' },
          { label: 'Jambon blanc de qualité, emmental, beurre' },
          { label: 'Thon mayonnaise aux fines herbes & crudités' },
          { label: 'Chèvre doux, miel & noix toasté' },
        ],
      },
    ],
    allergens: ['Gluten', 'Lait', 'Poisson selon recette'],
  },
  {
    id: 'gaufres',
    slug: 'gaufres',
    name: 'Gaufres Croustillantes & Moelleuses',
    kind: 'product_family',
    category: 'sucre',
    categories: ['sucre'],
    shortDescription: 'Gaufres servies chaudes, légères à l’intérieur et croustillantes dehors.',
    description: 'Une des stars plébiscitées par nos clients à Fécamp ! Préparée à la commande, sublimée par du sucre glace, du Nutella généreux ou de la chantilly onctueuse.',
    price: 3.80,
    priceFormatted: 'Dès 3,80 €',
    currency: 'EUR',
    image: '/images/gaufres-reelles.png',
    badges: ['Incontournable', 'Fait Minute'],
    available: true,
    orderable: true,
    featured: true,
    options: [
      {
        name: 'Garniture',
        choices: [
          { label: 'Sucre glace classique' },
          { label: 'Chocolat Nutella (+0,50€)', extraPrice: 0.50 },
          { label: 'Caramel au beurre salé (+0,50€)', extraPrice: 0.50 },
          { label: 'Chantilly maison (+0,50€)', extraPrice: 0.50 },
        ],
      },
    ],
    allergens: ['Gluten', 'Lait', 'Œufs'],
  },
  {
    id: 'smoothies',
    slug: 'smoothies',
    name: 'Smoothies 100% Fraîcheur Fruitée',
    kind: 'product_family',
    category: 'boissons',
    categories: ['boissons'],
    shortDescription: 'Boissons frappées aux fruits savoureux pour une pause vitaminée.',
    description: 'Mixés à la commande pour une fraîcheur maximale. Parfaits pour vous hydrater avec gourmandise les beaux jours ou après une balade sur le port de Fécamp.',
    price: 4.20,
    priceFormatted: '4,20 €',
    currency: 'EUR',
    image: '/images/smoothies.png',
    badges: ['Frais & Fruité'],
    available: true,
    orderable: true,
    options: [
      {
        name: 'Parfum',
        choices: [
          { label: 'Fraise & Banane veloutée' },
          { label: 'Mangue & Passion exotique' },
          { label: 'Fruits rouges intenses' },
        ],
      },
    ],
    allergens: [],
  },
  {
    id: 'glaces',
    slug: 'glaces',
    name: 'Glaces Gourmandes Mövenpick & Coupes',
    kind: 'product_family',
    category: 'glaces',
    categories: ['glaces', 'sucre'],
    shortDescription: 'Coupes rafraîchissantes et glaces Mövenpick d’exception aux parfums savoureux.',
    description: 'Une pause glacée d’exception avec Mövenpick : vanille bourbon, chocolat suisse, caramel fleur de sel, fraise des bois.',
    price: 3.50,
    priceFormatted: 'Dès 3,50 €',
    currency: 'EUR',
    image: '/images/cup-glace-movenpick.png',
    badges: ['Pause Fraîche', 'Mövenpick'],
    available: true,
    orderable: true,
    options: [
      {
        name: 'Format',
        choices: [
          { label: '1 Boule / Cornet ou Pot (2,50€)', extraPrice: -1.00 },
          { label: '2 Boules (3,50€)' },
          { label: '3 Boules gourmandes (4,50€)', extraPrice: 1.00 },
        ],
      },
    ],
    allergens: ['Lait', 'Traces possibles de fruits à coque'],
  },
  {
    id: 'wraps',
    slug: 'wraps',
    name: 'Wraps Crousti-Frais',
    kind: 'product_family',
    category: 'sale',
    categories: ['sale'],
    shortDescription: 'Galette de blé roulée garnie de viandes marinées ou thon, salade croquante et sauce savoureuse.',
    description: 'Idéal à déguster en marchant ou assis en terrasse. Léger, gourmand et bien équilibré pour votre pause de midi.',
    price: 5.20,
    priceFormatted: '5,20 €',
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop',
    badges: ['Salé Pratique'],
    available: true,
    orderable: true,
    options: [
      {
        name: 'Recette Wrap',
        choices: [
          { label: 'Poulet croustillant, sauce césar & parmesan' },
          { label: 'Saumon mariné & cream cheese fines herbes' },
          { label: 'Végétarien : avocat, légumes grillés & feta' },
        ],
      },
    ],
    allergens: ['Gluten', 'Lait'],
  },
  {
    id: 'quiches-salades',
    slug: 'quiches-salades',
    name: 'Quiches Maison & Salades',
    kind: 'product_family',
    category: 'sale',
    categories: ['sale'],
    shortDescription: 'Part de quiche dorée au four accompagnée ou non d’une salade composée.',
    description: 'Pâte brisée croustillante, appareil généreux à la crème et aux œufs frais. Accompagnée d’une petite salade vinaigrée.',
    price: 5.50,
    priceFormatted: 'Dès 5,50 €',
    currency: 'EUR',
    image: '/images/quiches-salades.png',
    badges: ['Cuit sur Place'],
    available: true,
    orderable: true,
    options: [
      {
        name: 'Recette',
        choices: [
          { label: 'Quiche Lorraine traditionnelle (lardons & emmental)' },
          { label: 'Quiche Chèvre & Épinards' },
          { label: 'Quiche Saumon & Poireaux' },
        ],
      },
    ],
    allergens: ['Gluten', 'Lait', 'Œufs'],
  },
  {
    id: 'patisseries',
    slug: 'patisseries',
    name: 'Pâtisseries & Douceurs du Jour',
    kind: 'product_family',
    category: 'sucre',
    categories: ['sucre'],
    shortDescription: 'Muffins, tartes fines, cookies et douceurs selon l’inspiration de la vitrine.',
    description: 'Chaque matin, notre vitrine se pare de délices dorés pour votre pause café ou votre goûter. Retrouvez des saveurs réconfortantes et authentiques.',
    price: 2.80,
    priceFormatted: 'Dès 2,80 €',
    currency: 'EUR',
    image: '/images/vitrine-produits.png',
    badges: ['Vitrine du Jour'],
    available: true,
    orderable: true,
    options: [
      {
        name: 'Variété',
        choices: [
          { label: 'Muffin tout choco' },
          { label: 'Cookie cœur fondant noisette' },
          { label: 'Tartelette aux pommes caramélisées' },
        ],
      },
    ],
    allergens: ['Gluten', 'Lait', 'Œufs'],
  },
  {
    id: 'boissons-chaudes',
    slug: 'boissons-chaudes',
    name: 'Chocolat Chaud Gourmand & Cafés',
    kind: 'product_family',
    category: 'boissons',
    categories: ['boissons'],
    shortDescription: 'Vrai chocolat chaud onctueux, espresso italien, café latte et thés fins.',
    description: 'Particulièrement réputé dans les avis de nos clients : notre vrai chocolat chaud, onctueux et crémeux, servi bien chaud. Également café de spécialité et thés variés.',
    price: 2.20,
    priceFormatted: 'Dès 2,20 €',
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=800&auto=format&fit=crop',
    badges: ['Spécialité Maison', 'Chaleur'],
    available: true,
    orderable: true,
    featured: true,
    options: [
      {
        name: 'Boisson',
        choices: [
          { label: 'Vrai Chocolat Chaud Onctueux (3,20€)', extraPrice: 1.00 },
          { label: 'Café Espresso pur arabica (1,60€)', extraPrice: -0.60 },
          { label: 'Café Allongé / Américano (1,80€)', extraPrice: -0.40 },
          { label: 'Café au Lait / Cappuccino (2,90€)', extraPrice: 0.70 },
          { label: 'Sélection de Thés & Infusions (2,50€)', extraPrice: 0.30 },
        ],
      },
    ],
    allergens: ['Lait'],
  },
];
