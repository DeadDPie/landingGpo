import Typography from "@/ui/Typography/Typography";
import styles from "./Card.module.css";
import type { Cake } from "@/types/catalog";
import Image from "next/image";

interface CardProps {
  cake: Cake;
}

export default function Card({ cake }: CardProps) {
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
      <div className={styles.price}>
        <Typography variant="h2" as="p" className={styles.price}>
          {cake.price} р/кг.
        </Typography>
      </div>
    </article>
  );
}
