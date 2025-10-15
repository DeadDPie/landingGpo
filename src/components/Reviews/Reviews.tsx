"use client";
import { useState } from "react";
import Typography from "@/ui/Typography/Typography";
import { reviewsData } from "@/constants/data";
import styles from "./Reviews.module.css";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export default function Reviews() {
  const { title, reviews } = reviewsData;
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
      <div className={styles.container}>
        <button className={styles.arrow} onClick={prevReview}>
          <IconChevronLeft size={90} />
        </button>

        <div className={styles.content}>
          <Typography variant="h1" as="h2" className={styles.title}>
            {title}
          </Typography>

          <div className={styles.textWrapper}>
            <Typography variant="p1" as="p" className={styles.text}>
              {currentReview.text}
            </Typography>
          </div>

          <div className={styles.author}>
            <Typography variant="h2" as="h3" className={styles.author_name}>
              {currentReview.author}
            </Typography>
            <Typography variant="p2" as="p" className={styles.author_role}>
              {currentReview.role}
            </Typography>
          </div>
        </div>

        <button className={styles.arrow} onClick={nextReview}>
          <IconChevronRight size={90} />
        </button>
      </div>
    </section>
  );
}
