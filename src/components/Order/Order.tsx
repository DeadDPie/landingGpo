import Typography from "@/ui/Typography/Typography";
import styles from "./Order.module.css";
import Cart from "./Cart/Cart";

export default function Order() {
  return (
    <section className={styles.wrapper} id="order">
      <Typography variant="h1" as="h1">
        Оформить заказ
      </Typography>

      <Cart />
      <button className={styles.order_btn}>
        <Typography as="p" variant="h1" className={styles.order_btn_text}>
          Заказать
        </Typography>
      </button>
    </section>
  );
}
