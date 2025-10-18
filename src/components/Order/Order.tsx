import Typography from "@/ui/Typography/Typography";
import styles from "./Order.module.css";
import Cart from "./Cart/Cart";
import OrderForm from "./OrderForm/OrderForm";

export default function Order({ design }: { design?: "A" | "B" }) {
  return (
    <section className={styles.wrapper} id="order">
      <Typography className={styles.title} variant="h1" as="p">
        Оформить заказ
      </Typography>
      <Cart />
      <OrderForm design={design} />
    </section>
  );
}
