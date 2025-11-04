import { footerData } from "@/constants/data";
import Typography from "@/ui/Typography/Typography";
import Image from "next/image";
import styles from "./Footer.module.css";
import { CURRENT_THEME } from "@/config/theme";

export default function Footer() {
  const data = footerData[CURRENT_THEME];

  return (
    <footer className={styles.footer}>
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

        {CURRENT_THEME === "B" && (
  <div className={styles.center_section}>
    {'textLines' in data && data.textLines && (
      <div className={styles.text_block}>
        {data.textLines.map((line, index) => (
          <Typography
            key={index}
            variant="p1"
            className={`${styles.text_line} ${index === 0 ? styles.first_line : styles.other_lines}`}
          >
            {line}
          </Typography>
        ))}
      </div>
    )}

    {'phone' in data && data.phone && (
      <div className={styles.phone}>
        {data.phone}
      </div>
    )}
  </div>
)}


        {CURRENT_THEME === "A" && (
          <nav className={styles.nav}>
            {'navItems' in data && data.navItems.map((item) => (
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
        )}

        <div className={styles.social_icons}>
          {data.socialLinks.map((social) => (
            <a key={social.id} href={social.href} target="_blank">
              <Image
                src={social.icon}
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