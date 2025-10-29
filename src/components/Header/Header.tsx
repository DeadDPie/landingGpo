import { headerData } from "@/constants/data";
import Image from "next/image";
import Typography from "@/ui/Typography/Typography";
import styles from "./Header.module.css";
import { CURRENT_THEME } from "@/config/theme";

export default function Header() {
  const data = headerData[CURRENT_THEME];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {CURRENT_THEME === "B" && 'logo' in data && data.logo && (
          <div className={styles.logo}>
            <Image
              src={data.logo}
              alt="logo"
              width={120}
              height={40}
              className={styles.logo_icon}
            />
          </div>
        )}

        <nav className={styles.nav}>
          {data.navItems.map((item) => (
            <Typography 
              key={item.href} 
              variant="h3" 
              as="a" 
              href={item.href} 
              className={styles.link}
            >
              {item.label}
            </Typography>
          ))}
        </nav>

        <div className={styles.icons}>
          {CURRENT_THEME === "B" && 'phone' in data && data.phone && (
            <div className={styles.contacts}>
              <div className={styles.phone}>{data.phone}</div>
            </div>
          )}

          <a href="#cart" className={styles.cart_link}>
            <Image
              src={data.cartIcon}
              alt="cart"
              width={CURRENT_THEME === "B" ? 32 : 49}
              height={CURRENT_THEME === "B" ? 32 : 48}
              className={styles.icon}
            />
          </a>

          <div className={styles.social_icons}>
            {data.socialLinks.map((social) => (
              <a key={social.id} href={social.href} target="_blank">
                <Image
                  src={social.icon}
                  alt={social.id}
                  width={CURRENT_THEME === "B" ? 32 : 64}
                  height={CURRENT_THEME === "B" ? 32 : 64}
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
