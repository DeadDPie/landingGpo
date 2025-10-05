"use client";
import { useState } from "react";
import type { Cake } from "@/types/catalog";

export function useCountButton(cake: Cake) {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = () => {
    console.log("Добавлено в корзину:", cake.title, count);
  };

  const handleAddClick = () => {
    if (cake.hasOptions) {
      setIsModalOpen(true);
    } else {
      addToCart();
    }
  };

  return {
    count,
    setCount,
    isModalOpen,
    setIsModalOpen,
    addToCart,
    handleAddClick,
  };
}
