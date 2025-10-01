"use client";
import Typography from "@/ui/Typography/Typography";
import styles from "./CountButton.module.css";
import cn from "classnames";

interface CountButtonProps {
  count: number;
  setCount: (value: number) => void;
  onAddClick: () => void;
}

export default function CountButton({
  count,
  setCount,
  onAddClick,
}: CountButtonProps) {
  const handlePlus = () => {
    setCount(count + 1);
    onAddClick();
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={cn(styles.card_btn, styles.left)}
        onClick={() => setCount(Math.max(count - 1, 0))}
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
        onClick={handlePlus}
      >
        <Typography variant="p1" as="p" className={styles.price}>
          +
        </Typography>
      </button>
    </div>
  );
}
