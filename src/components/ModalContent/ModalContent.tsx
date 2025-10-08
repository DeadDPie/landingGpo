import { useState } from "react";
import styles from "./ModalContent.module.css";

interface ModalContentProps {
  addToCart: (options?: { weight?: number; filling?: string }) => void;
  setIsModalOpen: (open: boolean) => void;
}

export default function ModalContent({
  addToCart,
  setIsModalOpen,
}: ModalContentProps) {
  const [weight, setWeight] = useState<string>("");
  const [filling, setFilling] = useState<string>("");

  return (
    <div className={styles.modal_content}>
      <h3 className={styles.modal_title}>Выбери начинку и вес!</h3>

      <select
        className={styles.modal_select}
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      >
        <option value="">Выбрать килограммы</option>
        <option value="1">1 кг</option>
        <option value="2">2 кг</option>
        <option value="3">3 кг</option>
      </select>

      <select
        className={styles.modal_select}
        value={filling}
        onChange={(e) => setFilling(e.target.value)}
      >
        <option value="">Выбрать начинку</option>
        <option value="chocolate">Шоколад</option>
        <option value="strawberry">Клубника</option>
        <option value="vanilla">Ваниль</option>
      </select>

      <button
        className={styles.modal_btn}
        onClick={() => {
          addToCart({ weight: weight ? Number(weight) : undefined, filling });
          setIsModalOpen(false);
        }}
      >
        Добавить в корзину
      </button>
    </div>
  );
}
