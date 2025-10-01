import { socialLinks } from "@/constants/data";
import Image from "next/image";
import Typography from "@/ui/Typography/Typography";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
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

        <div className={styles.icons}>
          <a href="#cart" className={styles.cart_link}>
            <Image
              src="/icons/cart.svg"
              alt="Корзина"
              width={49}
              height={48}
              className={styles.icon}
            />
          </a>

          <div className={styles.social_icons}>
            {socialLinks.map((social) => (
              <a key={social.id} href={social.href} target="_blank">
                <Image
                  src={social.iconHeader}
                  alt={social.id}
                  width={64}
                  height={64}
                  className={styles.icon}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
