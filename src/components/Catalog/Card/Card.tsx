"use client";
import { useState } from "react";
import Typography from "@/ui/Typography/Typography";
import styles from "./Card.module.css";
import type { Cake } from "@/types/catalog";
import Image from "next/image";
import CountButton from "../CountButton/CountButton";
import Modal from "@/components/Modal/Modal";

interface CardProps {
  cake: Cake;
}

export default function Card({ cake }: CardProps) {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClick = () => {
    if (cake.hasOptions) {
      setIsModalOpen(true);
    } else {
      addToCart();
    }
  };

  const addToCart = () => {
    console.log("Добавлено в корзину:", cake.title, count);
  };

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
        <Typography variant="h2" as="h3">
          {cake.title}
        </Typography>
      </div>
      <div className={styles.description}>
        <Typography variant="p1" as="p">
          {cake.description}
        </Typography>
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.price}>
          <Typography variant="h2" as="p">
            {cake.price} р/кг.
          </Typography>
        </div>

        <CountButton
          count={count}
          setCount={setCount}
          onAddClick={handleAddClick}
        />
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className={styles.modal_content}>
            <h3 className={styles.modal_title}>Выбери начинку и вес!</h3>
            <div className={styles.modal_count}>
              <CountButton
                count={count}
                setCount={setCount}
                onAddClick={() => {}}
              />
            </div>

            <select className={styles.modal_select}>
              <option value="">Выбрать начинку</option>
              <option value="chocolate">Шоколад</option>
              <option value="strawberry">Клубника</option>
              <option value="vanilla">Ваниль</option>
            </select>

            <button
              className={styles.modal_btn}
              onClick={() => {
                addToCart();
                setIsModalOpen(false);
              }}
            >
              Добавить в корзину
            </button>
          </div>
        </Modal>
      )}
    </article>
  );
}
