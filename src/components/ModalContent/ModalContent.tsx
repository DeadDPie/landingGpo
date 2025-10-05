import styles from "./ModalContent.module.css";

interface ModalContentProps {
  addToCart: () => void;
  setIsModalOpen: (open: boolean) => void;
}

export default function ModalContent({
  addToCart,
  setIsModalOpen,
}: ModalContentProps) {
  return (
    <div className={styles.modal_content}>
      <h3 className={styles.modal_title}>Выбери начинку и вес!</h3>

      <select className={styles.modal_select}>
        <option value="">Выбрать килограммы</option>
        <option value="1">1 кг</option>
        <option value="2">2 кг</option>
        <option value="3">3 кг</option>
      </select>

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
  );
}
