import Typography from "@/ui/Typography/Typography";
import styles from "./Order.module.css";
import Cart from "./Cart/Cart";
import OrderForm from "./OrderForm/OrderForm";

export default function Order() {
  return (
    <section className={styles.wrapper} id="order">
      <Typography variant="h1" as="p">
        Оформить заказ
      </Typography>
      <Cart />
      <OrderForm />
    </section>
  );
}
