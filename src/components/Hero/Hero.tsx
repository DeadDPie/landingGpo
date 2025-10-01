import Typography from "@/ui/Typography/Typography";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <div className={styles.content}>
          <Typography variant="h1" className={styles.title}>
            Вкусные торты
            <br />
            на заказ!
          </Typography>

          <div className={styles.images}>
            <Image
              src="/images/hero1.png"
              alt="small cake"
              width={239}
              height={288}
              className={styles.image}
            />
            <Typography variant="p1" className={styles.description}>
              Авторские торты, капкейки и пирожные с индивидуальным дизайном и
              неповторимым вкусом для ваших праздников
            </Typography>
          </div>
        </div>

        <div className={styles.main_image}>
          <Image
            src="/images/hero2.png"
            alt="big cake"
            width={458}
            height={552}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
