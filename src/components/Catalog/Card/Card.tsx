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
          <Typography variant="p1" as="p">
            {cake.price} руб.
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
      {CURRENT_THEME === "B" && (
        <button className={styles.button_choose} onClick={handleAddClick}>
          <Typography variant="p1" as="p">
            Выбрать десерт
          </Typography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 74 46"
            width="4em"
            height="4em"
            fill="none"
            strokeWidth="2"
          >
            <circle
              strokeWidth="2"
              cx="47.43"
              cy="18.57"
              r="17.57"
              fill="white"
              stroke="black"
            />
            <path
              d="M0 18.57h47.43m0 0l-4.52-2.93m4.52 2.93l-4.52 2.93"
              stroke="black"
            />
          </svg>
        </button>
      )}

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ModalContent
            cake={cake}
            addToCart={addToCart}
            setIsModalOpen={setIsModalOpen}
          />
        </Modal>
      )}
    </article>
  );
}
