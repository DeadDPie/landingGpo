"use client";
import Typography from "@/ui/Typography/Typography";
import styles from "./OrderCard.module.css";
import Image from "next/image";
import { Cake } from "@/types/catalog";
import { useCountButton } from "@/components/CountButton/hooks/useCountButton";
import CountButton from "@/components/CountButton/CountButton";
import Modal from "@/components/Modal/Modal";
import ModalContent from "@/components/ModalContent/ModalContent";
import { IconTrash } from "@tabler/icons-react";

interface CardProps {
  cake: Cake;
}

export default function OrderCard({ cake }: CardProps) {
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
      <div className={styles.image_wrapper}>
        <Image
          src={cake.image || "/images/placeholder.png"}
          alt={cake.title}
          fill
          sizes="326px"
          className={styles.image}
          priority={false}
        />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.card_head_container}>
          <div className={styles.title}>
            <Typography variant="h2" as="h3">
              {cake.title}
            </Typography>
          </div>
          <div>
            {" "}
            <CountButton
              count={count}
              setCount={setCount}
              onAddClick={handleAddClick}
            />
          </div>
        </div>

        <div className={styles.description}>
          <Typography variant="p1" as="p">
            {cake.description}
          </Typography>
        </div>

        <div className={styles.price}>
          <Typography variant="h2" as="p">
            {cake.price} р/кг.
          </Typography>
        </div>
        <div className={styles.card_foot_container}>
          <IconTrash />
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ModalContent addToCart={addToCart} setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </article>
  );
}
