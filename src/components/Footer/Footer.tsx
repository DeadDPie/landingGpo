import { socialLinks } from '@/constants/data';
import Typography from '@/ui/Typography/Typography';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Typography variant="h3" as="a" href="#catalog" className={styles.link}>
            Каталог
          </Typography>
          <Typography variant="h3" as="a" href="#about" className={styles.link}>
            Обо мне
          </Typography>
          <Typography variant="h3" as="a" href="#reviews" className={styles.link}>
            Отзывы
          </Typography>
        </nav>

        <div className={styles.social_icons}>
          {socialLinks.map((social) => (
            <a key={social.id} href={social.href} target="_blank">
              <Image
                src={social.iconFooter}
                alt={social.id}
                width={64}
                height={64}
                className={styles.icon}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
