"use client";
import Typography from "@/ui/Typography/Typography";
import styles from "./CountButton.module.css";
import { useState } from "react";
import cn from "classnames";

export default function CountButton() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={styles.wrapper} id="catalog">
      <button
        className={cn(styles.card_btn, styles.left)}
        onClick={() => {
          count > 0 || setCount(count - 1);
        }}
      >
        <Typography variant="p1" as="p" className={styles.price}>
          -
        </Typography>
      </button>
      <div className={styles.count}>
        <Typography variant="h2" as="p" className={styles.price}>
          {count}
        </Typography>
      </div>

      <button
        className={cn(styles.card_btn, styles.right)}
        onClick={() => setCount(count + 1)}
      >
        <Typography variant="p1" as="p" className={styles.price}>
          +
        </Typography>
      </button>
    </div>
  );
}
