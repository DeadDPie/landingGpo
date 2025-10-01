import Typography from "@/ui/Typography/Typography";
import styles from "./Catalog.module.css";
import Card from "./Card/Card";
import { data } from "@/constants/data";

export default function Catalog() {
  return (
    <section className={styles.wrapper} id="catalog">
      <Typography variant="h1" as="h1" className={styles.title}>
        Каталог
      </Typography>
      <div className={styles.container}>
        {data.map((cake) => (
          <Card key={cake.id} cake={cake} />
        ))}
      </div>
    </section>
  );
}
