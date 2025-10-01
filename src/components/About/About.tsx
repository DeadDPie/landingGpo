import Typography from "@/ui/Typography/Typography";
import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.wrapper} id="about">
      <div className={styles.container}>
        <div className={styles.text_block}>
          <Typography 
            variant="h1" 
            className={styles.title}>
            Обо мне
          </Typography>
          <Typography 
            variant="p1" 
            className={styles.description}>
            Привет! Меня зовут [Имя]. С детства обожаю превращать простые ингредиенты 
            в настоящие произведения искусства. Для меня кондитерское дело — это не просто работа, 
            а способ делиться радостью и создавать неповторимую атмосферу вашего праздника. 
            Я использую только натуральные продукты и вкладываю душу в каждый десерт.
          </Typography>
        </div>

        <div className={styles.image_block}>
          <Image
            src="/images/conditer.png"
            alt="conditer"
            width={458}
            height={552}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
