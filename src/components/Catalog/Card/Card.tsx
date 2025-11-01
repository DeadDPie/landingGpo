"use client";
import { useState } from "react";
import Typography from "@/ui/Typography/Typography";
import styles from "./Card.module.css";
import type { Cake } from "@/types/catalog";
import Image from "next/image";
import Modal from "@/components/Modal/Modal";
import { useCountButton } from "@/components/CountButton/hooks/useCountButton";
import CountButton from "@/components/CountButton/CountButton";
import ModalContent from "@/components/ModalContent/ModalContent";
import { CURRENT_THEME } from "@/config/theme";

interface CardProps {
  cake: Cake;
}

export default function Card({ cake }: CardProps) {
  const {
    count,
    setCount,
    isModalOpen,
    setIsModalOpen,
    addToCart,
    handleAddClick,
  } = useCountButton(cake);

  return (
    <article className={styles.card}>
      <Image
        width={326}
        height={216}
        src={cake.image || "/images/placeholder.png"}
        alt={cake.title}
        className={styles.image}
      />
      <div className={styles.title}>
        <Typography variant="h2" as="h3" className={styles.title_text}>
          {cake.title}
        </Typography>
      </div>
      {CURRENT_THEME !== "B" && (
        <div className={styles.description}>
          <Typography variant="p1" as="p">
            {cake.description}
          </Typography>
        </div>
      )}
      <div className={styles.bottom_container}>
        <div className={styles.price}>
          <Typography variant="h2" as="p">
            {cake.price} р/кг.
          </Typography>
        </div>

        {CURRENT_THEME !== "B" && (
          <CountButton
            count={count}
            setCount={setCount}
            onAddClick={handleAddClick}
          />
        )}
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ModalContent addToCart={addToCart} setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </article>
  );
}
