import Typography from "@/ui/Typography/Typography";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Typography variant="p1" as="a" href="#about" className={styles.link}>
            About
          </Typography>
          <Typography
            variant="p1"
            as="a"
            href="#features"
            className={styles.link}
          >
            Features
          </Typography>
          <Typography
            variant="p1"
            as="a"
            href="#contact"
            className={styles.link}
          >
            Contact
          </Typography>
        </nav>
      </div>
    </header>
  );
}
