"use client";
import { useState } from "react";
import Typography from "@/ui/Typography/Typography";
import { reviewsData } from "@/constants/data";
import styles from "./Reviews.module.css";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import { CURRENT_THEME } from "@/config/theme";

export default function Reviews() {
  const { title, reviews } = reviewsData[CURRENT_THEME];
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentReview = reviews[currentIndex];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className={styles.reviews} id="reviews">
      {CURRENT_THEME === "A" && (
        <div className={styles.container}>
          <button className={styles.arrow} onClick={prevReview}>
            <IconChevronLeft size={90} />
          </button>

          <div className={styles.content}>
            <Typography variant="h1" as="h2" className={styles.title}>
              {title}
            </Typography>

            <div className={styles.text_wrapper}>
              <Typography variant="p1" as="p" className={styles.text}>
                {currentReview.text}
              </Typography>
            </div>

            <div className={styles.author}>
              {"author" in currentReview && (
                <Typography variant="h2" as="h3" className={styles.author_name}>
                  {currentReview.author}
                </Typography>
              )}
              {"role" in currentReview && (
                <Typography variant="p2" as="p" className={styles.author_role}>
                  {currentReview.role}
                </Typography>
              )}
            </div>
          </div>

          <button className={styles.arrow} onClick={nextReview}>
            <IconChevronRight size={90} />
          </button>
        </div>
      )}

      {CURRENT_THEME === "B" && (
        <div className={styles.reviews_wrapper_b}>
          <div className={styles.container_b}>
            <Typography variant="h1" as="h2" className={styles.title_b}>
              {title}
            </Typography>
            
            <div className={styles.cards_container}>
              {reviews.map((review) => (
                <div key={review.id} className={styles.review_card}>
                  {"image" in review && (
                    <div className={styles.image_container}>
                      <Image
                        src={review.image || "/images/placeholder.png"}
                        alt="review"
                        width={340}
                        height={245}
                        className={styles.review_image}
                      />
                    </div>
                  )}
                  <Typography variant="p1" as="p" className={styles.review_text}>
                    {review.text}
                  </Typography>
                </div>
              ))}
            </div>
            
            <div className={styles.carousel_container}>
              <button className={styles.carousel_arrow} onClick={prevReview}>
                <IconChevronLeft />
              </button>
              
              <div className={styles.carousel_card}>
                {"image" in currentReview && (
                  <div className={styles.carousel_image_container}>
                    <Image
                      src={currentReview.image || "/images/placeholder.png"}
                      alt="review"
                      fill
                      className={styles.review_image}
                    />
                  </div>
                )}
                <Typography variant="p1" as="p" className={styles.carousel_text}>
                  {currentReview.text}
                </Typography>
              </div>
              
              <button className={styles.carousel_arrow} onClick={nextReview}>
                <IconChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}