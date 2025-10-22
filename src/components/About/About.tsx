import Typography from '@/ui/Typography/Typography';
import { aboutData } from '@/constants/data';
import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.text_block}>
          <Typography variant="h1" className={styles.title}>
            {aboutData.title}
          </Typography>
          <Typography variant="p1" className={styles.description}>
            {aboutData.description}
          </Typography>
        </div>

        <div className={styles.image_block}>
          <Image
            src={aboutData.image || '/images/placeholder.png'}
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
