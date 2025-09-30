import Typography from "@/ui/Typography/Typography";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <nav className={styles.footer_nav}>
          <Typography 
            variant="h3" 
            as="a" 
            href="#catalog" 
            className={styles.footer_link}>
            Каталог
          </Typography>
          <Typography 
            variant="h3" 
            as="a" 
            href="#about" 
            className={styles.footer_link}>
            Обо мне
          </Typography>
          <Typography 
            variant="h3" 
            as="a" 
            href="#reviews" 
            className={styles.footer_link}>
            Отзывы
          </Typography>
        </nav>

        <div className={styles.footer_social_icons}>
          <a href="https://vk.com" target="_blank">
            <Image 
              src="/icons/vk_footer.svg" 
              alt="VK" 
              width={64} 
              height={64} 
              className={styles.footer_icon}
            />
          </a>

          <a href="https://t.me" target="_blank">
            <Image 
              src="/icons/telegram_footer.svg" 
              alt="telegram" 
              width={64} 
              height={64} 
              className={styles.footer_icon}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
