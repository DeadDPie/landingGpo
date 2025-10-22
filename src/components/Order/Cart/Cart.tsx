'use client';
import Typography from '@/ui/Typography/Typography';
import styles from './Cart.module.css';
import OrderCard from '../OrderCard/OrderCard';
import { useCart } from '@/context/CartContext';

export default function Cart() {
  const { items } = useCart();

  const totalPrice = items.reduce((sum, item) => sum + item.cake.price * item.count, 0);

  return (
    <article className={styles.wrapper}>
      <Typography variant="h1" as="p" className={styles.title}>
        Корзина
      </Typography>
      <div className={styles.list}>
        {items.map((item) => (
          <OrderCard key={item.cake.id + (item.weight || '') + (item.filling || '')} item={item} />
        ))}
      </div>
      <Typography className={styles.footer} variant="h3" as="p">
        Общая сумма заказа: {totalPrice} р.
      </Typography>
    </article>
  );
}
