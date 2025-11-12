import Typography from "@/ui/Typography/Typography";
import {heroData} from "@/constants/data";
import Image from "next/image";
import styles from "./Hero.module.css";
import { CURRENT_THEME } from "@/config/theme";

export default function Hero() {
  const data = heroData[CURRENT_THEME];

  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {CURRENT_THEME === "A" && (
          <>
            <div className={styles.content}>
              {"title" in data && (
                <Typography variant="h1" as="h1" className={styles.title}>
                  {data.title}
                </Typography>
              )}

              <div className={styles.images}>
                {"smallImage" in data && (
                  <Image
                    src={data.smallImage || "/images/placeholder.png"}
                    alt="hero small"
                    width={239}
                    height={288}
                    className={styles.image}
                  />
                )}

                <div className={styles.text_container}>
                  {"description" in data && (
                    <Typography variant="p1" as="p" className={styles.description}>
                      {data.description}
                    </Typography>
                  )}

                  <Typography variant="h2" as="a" href="#catalog" className={styles.order_button}>
                    Заказать
                  </Typography>
                </div>
              </div>
            </div>

            {"mainImage" in data && (
              <div className={styles.main_image}>
                <Image
                  src={data.mainImage || "/images/placeholder.png"}
                  alt="hero main"
                  width={458}
                  height={552}
                  className={styles.image}
                />
              </div>
            )}
          </>
        )}

        {CURRENT_THEME === "B" && (
          <>
            <div className={styles.content_b}>
              <div className={styles.title_block}>
                {"title1" in data && (
                  <Typography variant="h1" as="h1" className={styles.title_line1}>
                    {data.title1}
                  </Typography>
                )}

                {"title2" in data && (
                  <Typography variant="h1" as="h1" className={styles.title_line2}>
                    {data.title2}
                  </Typography>
                )}
              </div>

              {"description" in data && (
                <Typography variant="p1" as="p" className={styles.description_b}>
                  {data.description}
                </Typography>
              )}

              <div className={styles.choose_block}>
                {"choose_text" in data && (
                  <a href="#catalog" className={styles.choose_link}>
                    <Typography variant="p1" as="span" className={styles.choose_text}>
                      {data.choose_text}
                    </Typography>
                  </a>
                )}

                <a href="#catalog" className={styles.arrow_button} aria-label="Выбрать десерт">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 74 46"
                    width="8em"
                    height="8em"
                    fill="none"
                    strokeWidth="1"
                  >
                    <circle
                      strokeWidth="1"
                      cx="47.43"
                      cy="18.57"
                      r="17.57"
                      fill="white"
                      stroke="black"
                    />
                    <path
                      d="M0 18.57h47.43m0 0l-4.52-2.93m4.52 2.93l-4.52 2.93"
                      stroke="black"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {"mainImage" in data && (
              <div className={styles.main_image_b}>
                <Image
                  src={data.mainImage || "/images/placeholder.png"}
                  alt="hero main"
                  width={500}
                  height={500}
                  className={styles.image_b}
                />
              </div>
            )}
          </>
        )}
        
      </div>
    </section>
  );
}
