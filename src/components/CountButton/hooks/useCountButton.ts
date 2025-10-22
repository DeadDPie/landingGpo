import { useState } from 'react';
import type { Cake } from '@/types/catalog';
import { useCart } from '@/context/CartContext';

export function useCountButton(cake: Cake) {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addItem } = useCart();

  const handleAddClick = () => {
    if (cake.hasOptions) {
      setIsModalOpen(true);
    } else {
      const newCount = count + 1;
      setCount(newCount);
      addItem(cake, 1);
    }
  };

  const addToCart = (options?: { weight?: number; filling?: string }) => {
    if (cake.hasOptions) {
      addItem(cake, 1, options);
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
