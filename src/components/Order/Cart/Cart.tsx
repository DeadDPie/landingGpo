import Typography from "@/ui/Typography/Typography";
import styles from "./Cart.module.css";
import OrderCard from "../OrderCard/OrderCard";
const currentItems = [
  {
    id: "1",
    image: "/images/cake.png",
    title: "Брусничка1",
    description:
      "Шоколадный бисквит прослоен сливочно-творожным кремом с добавлением брусники. ",
    price: 1250,
    hasOptions: true,
  },
  {
    id: "2",
    image: "/images/cake.png",
    title: "Торт 2",
    description: "Шоколадный бисквит с кремом",
    price: 1399,
  },
];

export default function Cart() {
  return (
    <article className={styles.wrapper}>
      <Typography variant="h1" as="p" className={styles.title}>
        Корзина
      </Typography>
      <div className={styles.container}>
        {currentItems.map((cake) => (
          <OrderCard key={cake.id} cake={cake} />
        ))}
      </div>
      <Typography variant="h3" as="p">
        Общая сумма заказа : 5720 р.
      </Typography>
    </article>
  );
}
