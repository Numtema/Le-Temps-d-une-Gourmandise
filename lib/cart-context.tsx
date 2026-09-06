'use client';

import React, { createContext, useContext, useState, useSyncExternalStore } from 'react';
import { CatalogItem } from './catalog';
import { BUSINESS_DATA } from './business-data';

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  selectedOptions: Record<string, string>;
  note: string;
  image: string;
}

export interface CustomerOrderInfo {
  name: string;
  pickupTime: string;
  note: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (
    product: CatalogItem,
    quantity?: number,
    options?: Record<string, string>,
    note?: string
  ) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  totalEstimated: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  quickViewItem: CatalogItem | null;
  setQuickViewItem: (item: CatalogItem | null) => void;
  customerInfo: CustomerOrderInfo;
  setCustomerInfo: React.Dispatch<React.SetStateAction<CustomerOrderInfo>>;
  generateWhatsAppMessage: () => string;
  generateWhatsAppUrl: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'ltg_ma_pause_gourmande_v1';

let memoryItems: CartItem[] = [];
let isLoaded = false;
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

function getCartSnapshot(): CartItem[] {
  if (!isLoaded && typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        memoryItems = JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    isLoaded = true;
  }
  return memoryItems;
}

const EMPTY_CART_SNAPSHOT: CartItem[] = [];

function getCartServerSnapshot(): CartItem[] {
  return EMPTY_CART_SNAPSHOT;
}

function subscribeCart(callback: () => void) {
  listeners.add(callback);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === LOCAL_STORAGE_KEY) {
      try {
        memoryItems = e.newValue ? JSON.parse(e.newValue) : [];
        notify();
      } catch {
        // ignore
      }
    }
  };
  window.addEventListener('storage', handleStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener('storage', handleStorage);
  };
}

function updateCartMemory(nextItems: CartItem[]) {
  memoryItems = nextItems;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(nextItems));
    } catch {
      // ignore
    }
  }
  notify();
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(subscribeCart, getCartSnapshot, getCartServerSnapshot);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewItem, setQuickViewItem] = useState<CatalogItem | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerOrderInfo>({
    name: '',
    pickupTime: '',
    note: '',
  });

  const addItem = (
    product: CatalogItem,
    quantity = 1,
    options: Record<string, string> = {},
    note = ''
  ) => {
    let unitPrice = product.price ?? 0;

    // Calculate extra prices if any option specifies extra
    if (product.options) {
      for (const optGroup of product.options) {
        const chosen = options[optGroup.name];
        if (chosen) {
          const matchChoice = optGroup.choices.find((c) => c.label === chosen);
          if (matchChoice?.extraPrice) {
            unitPrice += matchChoice.extraPrice;
          }
        }
      }
    }

    const optionSignature = Object.entries(options)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => `${k}:${v}`)
      .join('|');

    const entryId = `${product.id}_${optionSignature}_${note.trim()}`;

    const current = getCartSnapshot();
    const existing = current.find((item) => item.id === entryId);
    let next: CartItem[];
    if (existing) {
      next = current.map((item) =>
        item.id === entryId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      next = [
        ...current,
        {
          id: entryId,
          productId: product.id,
          name: product.name,
          price: unitPrice,
          quantity,
          selectedOptions: options,
          note,
          image: product.image,
        },
      ];
    }
    updateCartMemory(next);
  };

  const removeItem = (id: string) => {
    const next = getCartSnapshot().filter((item) => item.id !== id);
    updateCartMemory(next);
  };

  const updateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      removeItem(id);
      return;
    }
    const next = getCartSnapshot().map((item) =>
      item.id === id ? { ...item, quantity: qty } : item
    );
    updateCartMemory(next);
  };

  const clearCart = () => {
    updateCartMemory([]);
  };

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalEstimated = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const generateWhatsAppMessage = () => {
    const lines = items.map((item) => {
      const opts = Object.entries(item.selectedOptions)
        .map(([k, v]) => `${k}: ${v}`)
        .join(', ');
      const optStr = opts ? ` (${opts})` : '';
      const noteStr = item.note ? ` [Note: ${item.note}]` : '';
      const lineTotal = (item.price * item.quantity).toFixed(2).replace('.', ',');
      return `• ${item.quantity} × ${item.name}${optStr}${noteStr} — ${lineTotal} €`;
    });

    const itemsText = lines.join('\n');
    const totalText = totalEstimated.toFixed(2).replace('.', ',');
    const nameText = customerInfo.name.trim() || 'Client';
    const pickupText = customerInfo.pickupTime.trim() || 'Dès que possible';
    const noteText = customerInfo.note.trim() ? `\nNote générale : ${customerInfo.note.trim()}` : '';

    return (
      `Bonjour Le Temps d’une Gourmandise 👋\n\n` +
      `Je souhaite vous envoyer une demande de commande :\n\n` +
      `${itemsText}\n\n` +
      `Total estimé : ${totalText} €\n` +
      `Nom : ${nameText}\n` +
      `Retrait souhaité : ${pickupText}${noteText}\n\n` +
      `Pouvez-vous me confirmer la disponibilité, le montant final et l’heure de retrait ? Merci ! ❤️`
    );
  };

  const generateWhatsAppUrl = () => {
    const text = generateWhatsAppMessage();
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${BUSINESS_DATA.whatsappPhone}?text=${encoded}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalCount,
        totalEstimated,
        isCartOpen,
        setIsCartOpen,
        quickViewItem,
        setQuickViewItem,
        customerInfo,
        setCustomerInfo,
        generateWhatsAppMessage,
        generateWhatsAppUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
