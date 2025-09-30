import Typography from "@/ui/Typography/Typography";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_container}>

        <div className={styles.hero_content}>
          <Typography variant="h1" className={styles.hero_title}>
            Вкусные торты
            <br />
            на заказ!
          </Typography>

          <div className={styles.hero_images}>
            <Image
              src="/images/hero1.png"
              alt="hero1"
              width={239}
              height={288}
              className={styles.hero_image}
            />
            <Typography variant="p1" className={styles.hero_description}>
              Авторские торты, капкейки и пирожные с индивидуальным дизайном и
              неповторимым вкусом для ваших праздников
            </Typography>
          </div>
        </div>

        <div className={styles.hero_main_image}>
          <Image
            src="/images/hero2.png"
            alt="hero2"
            width={458}
            height={552}
            className={styles.hero_image}
          />
        </div>
      </div>
    </section>
  );
}
