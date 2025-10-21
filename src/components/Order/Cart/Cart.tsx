"use client";

import Image from "next/image";
import Typography from "@/ui/Typography/Typography";
import styles from "./Cart.module.css";
import OrderCard from "../OrderCard/OrderCard";
import { useCart } from "@/context/CartContext";
import { CURRENT_THEME } from "@/config/theme";

export default function Cart() {
  const { items } = useCart();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.cake.price * item.count,
    0
  );

  return (
    <article className={styles.wrapper}>
      {CURRENT_THEME !== "B" && (
        <Typography variant="h1" as="p" className={styles.title}>
          Корзина
        </Typography>
      )}

      {CURRENT_THEME === "B" && items.length === 0 && (
        <div className={styles.headerImage}>
          <Image
            src="/images/placeholder.png"
            alt="Декоративное изображение торта"
            width={458}
            height={552}
            className={styles.image}
            priority
          />
        </div>
      )}

      <div className={styles.list}>
        {items.map((item) => (
          <OrderCard
            key={item.cake.id + (item.weight || "") + (item.filling || "")}
            item={item}
          />
        ))}
      </div>
      {items.length !== 0 && (
        <Typography className={styles.footer} variant="h3" as="p">
          Общая сумма заказа: {totalPrice} р.
        </Typography>
      )}
    </article>
  );
}
