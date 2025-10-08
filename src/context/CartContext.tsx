"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Cake } from "@/types/catalog";

export interface CartItem {
  cake: Cake;
  count: number;
  weight?: number;
  filling?: string;
}
interface CartContextType {
  items: CartItem[];
  addItem: (
    cake: Cake,
    count: number,
    options?: { weight?: number; filling?: string }
  ) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (
    cake: Cake,
    count: number,
    options?: { weight?: number; filling?: string }
  ) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.cake.id === cake.id &&
          item.weight === options?.weight &&
          item.filling === options?.filling
      );

      if (existingIndex !== -1) {
        const newItems = [...prev];
        newItems[existingIndex].count += count;
        return newItems;
      }

      return [...prev, { cake, count, ...options }];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.cake.id !== id));
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
