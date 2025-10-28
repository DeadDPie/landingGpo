import Typography from "@/ui/Typography/Typography";
import { aboutData } from "@/constants/data";
import Image from "next/image";
import styles from "./About.module.css";
import { CURRENT_THEME } from "@/config/theme";

export default function About() {
  const data = aboutData[CURRENT_THEME];

  return (
    <section className={styles.about} id="about">
      <div className={styles.about_wrapper}>
        <div className={styles.container}>
          <div className={styles.text_block}>
            <Typography variant="h1" className={styles.title}>
              {data.title}
            </Typography>
            <Typography variant="p1" className={styles.description}>
              {data.description}
            </Typography>
          </div>

          <div className={styles.image_block}>
            <Image
              src={data.image}
              alt="О кондитере"
              width={458}
              height={552}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}