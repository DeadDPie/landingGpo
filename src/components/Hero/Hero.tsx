import Typography from "@/ui/Typography/Typography";
import {heroData} from "@/constants/data";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Typography variant="h1" as="h1" className={styles.title}>
            {heroData.title}
          </Typography>

          <div className={styles.images}>
            <Image
              src={heroData.smallImage || "/images/placeholder.png"}
              alt="hero small"
              width={239}
              height={288}
              className={styles.image}
            />
            <Typography variant="p1" as="p" className={styles.description}>
              {heroData.description}
            </Typography>
          </div>
        </div>
        <div className={styles.main_image}>
          <Image
            src={heroData.mainImage || "/images/placeholder.png"}
            alt="hero main"
            width={458}
            height={552}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
