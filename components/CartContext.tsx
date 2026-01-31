"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

/* ---------------- TYPES ---------------- */

export type CartItem = {
  image: any;
  slug: any;
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  subtotal: number;
};

/* ---------------- CONTEXT ---------------- */

const CartContext = createContext<CartContextType | undefined>(undefined);

/* ---------------- PROVIDER ---------------- */

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  /* ---------- LOAD FROM LOCAL STORAGE ---------- */
  useEffect(() => {
    const stored = localStorage.getItem("aadi-cart");
    if (stored) {
      try {
        setCart(JSON.parse(stored));
      } catch {
        setCart([]);
      }
    }
  }, []);

  /* ---------- SAVE TO LOCAL STORAGE ---------- */
  useEffect(() => {
    localStorage.setItem("aadi-cart", JSON.stringify(cart));
  }, [cart]);

  /* ---------- ADD TO CART (MERGE DUPLICATES) ---------- */
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);

      if (existing) {
        return prev.map((p) =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });

    setIsCartOpen(true);
  };

  /* ---------- REMOVE ITEM COMPLETELY ---------- */
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  /* ---------- INCREASE QUANTITY ---------- */
  const increaseQuantity = (id: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  /* ---------- DECREASE QUANTITY ---------- */
  const decreaseQuantity = (id: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /* ---------- CART VISIBILITY ---------- */
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  /* ---------- SUBTOTAL ---------- */
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        isCartOpen,
        openCart,
        closeCart,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* ---------------- HOOK ---------------- */

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
