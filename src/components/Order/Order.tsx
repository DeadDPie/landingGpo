import Typography from "@/ui/Typography/Typography";
import styles from "./Order.module.css";

export default function Order() {
  return (
    <section className={styles.wrapper} id="order">
      <button className={styles.order_btn}>
        <Typography as="p" variant="h1" className={styles.order_btn_text}>
          Заказать
        </Typography>
      </button>
    </section>
  );
}
