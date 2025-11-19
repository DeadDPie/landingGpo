import { useState } from "react";
import styles from "./ModalContent.module.css";
import Typography from "@/ui/Typography/Typography";
import { CURRENT_THEME } from "@/config/theme";
import Image from "next/image";
import { Cake } from "@/types/catalog";

interface ModalContentProps {
  cake: Cake;
  addToCart: (options?: { weight?: number; filling?: string }) => void;
  setIsModalOpen: (open: boolean) => void;
}

export default function ModalContent({
  cake,
  addToCart,
  setIsModalOpen,
}: ModalContentProps) {
  const [weight, setWeight] = useState<string>("");
  const [filling, setFilling] = useState<string>("");

  return (
    <div className={styles.modal_content}>
      {CURRENT_THEME === "A" && (
        <Typography as="p" variant="h1" className={styles.modal_title}>
          Выбери начинку и вес!
        </Typography>
      )}
      {CURRENT_THEME === "A" && (
        <div>
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
            <option value="Шоколад">Шоколад</option>
            <option value="Клубника">Клубника</option>
            <option value="Ваниль">Ваниль</option>
          </select>
        </div>
      )}
      {CURRENT_THEME === "B" && (
        <div className={styles.wrapper}>
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
          <div>
            <Typography as="p" variant="h2" className={styles.modal_title}>
              Название
            </Typography>
            <div className={styles.section}>
              <Typography as="p" variant="p2">
                Выбери вес десерта
              </Typography>
              <div className={styles.form_radio}>
                <input
                  type="radio"
                  id="option1"
                  name="myRadioGroup"
                  value="300"
                />
                <label htmlFor="option1">
                  <Typography as="p" variant="p2">
                    300 г
                  </Typography>
                </label>
              </div>

              <div className={styles.form_radio}>
                <input
                  type="radio"
                  id="option2"
                  name="myRadioGroup"
                  value="900"
                />
                <label htmlFor="option2">
                  <Typography as="p" variant="p2">
                    900 г
                  </Typography>
                </label>
              </div>

              <div className={styles.form_radio}>
                <input
                  type="radio"
                  id="option3"
                  name="myRadioGroup"
                  value="2100"
                />
                <label htmlFor="option3">
                  <Typography as="p" variant="p2">
                    2100 г
                  </Typography>
                </label>
              </div>
            </div>
            <div className={styles.section}>
              <Typography as="p" variant="p2">
                Выбери начинку десерта
              </Typography>
              <div className={styles.form_radio}>
                <input
                  type="radio"
                  id="option1"
                  name="myRadioGroup"
                  value="300"
                />
                <label htmlFor="option1">
                  <Typography as="p" variant="p2">
                    Ганаш с фундучной пастой
                  </Typography>
                </label>
              </div>

              <div className={styles.form_radio}>
                <input
                  type="radio"
                  id="option2"
                  name="myRadioGroup"
                  value="900"
                />
                <label htmlFor="option2">
                  <Typography as="p" variant="p2">
                    Ганаш с арахисовой пастой{" "}
                  </Typography>
                </label>
              </div>

              <div className={styles.form_radio}>
                <input
                  type="radio"
                  id="option3"
                  name="myRadioGroup"
                  value="2100"
                />
                <label htmlFor="option3">
                  <Typography as="p" variant="p2">
                    Взбитая соленая карамель
                  </Typography>
                </label>
              </div>
            </div>
            <button
              className={styles.modal_btn}
              onClick={() => {
                addToCart({
                  weight: weight ? Number(weight) : undefined,
                  filling,
                });
                setIsModalOpen(false);
              }}
            >
              <Typography as="p" variant="h1" className={styles.order_btn_text}>
                Заказать
              </Typography>
            </button>
          </div>
        </div>
      )}
      {CURRENT_THEME === "A" && (
        <button
          className={styles.modal_btn}
          onClick={() => {
            addToCart({ weight: weight ? Number(weight) : undefined, filling });
            setIsModalOpen(false);
          }}
        >
          <Typography as="p" variant="p1" className={styles.order_btn_text}>
            Добавить в корзину
          </Typography>
        </button>
      )}
    </div>
  );
}
