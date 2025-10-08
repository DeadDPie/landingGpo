import Typography from "@/ui/Typography/Typography";
import styles from "./OrderCard.module.css";
import Image from "next/image";
import { CartItem, useCart } from "@/context/CartContext";
import { IconTrash } from "@tabler/icons-react";

interface OrderCardProps {
  item: CartItem;
}

export default function OrderCard({ item }: OrderCardProps) {
  const { cake, count, weight, filling } = item;
  const { removeItem } = useCart();

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
            <Typography as="p">Количество: {count}</Typography>{" "}
            <div className={styles.price}>
              <Typography variant="h2" as="p">
                {weight
                  ? `${cake.price * weight * count} р.`
                  : `${cake.price * count} р.`}{" "}
              </Typography>
            </div>
          </div>
        </div>

        <div className={styles.description}>
          <Typography variant="p1" as="p">
            {cake.description}
          </Typography>
          <Typography variant="p1" as="p">
            {weight && <span> {weight} кг</span>}
            {filling && <span> {filling}</span>}
          </Typography>
        </div>

        <div className={styles.card_foot_container}>
          <IconTrash onClick={() => removeItem(cake.id)} />
        </div>
      </div>
    </article>
  );
}
