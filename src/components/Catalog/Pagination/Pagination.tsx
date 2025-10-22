import Typography from '@/ui/Typography/Typography';
import styles from './Pagination.module.css';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const goto = (p: number) => {
    const normalized = Math.max(1, Math.min(totalPages, Math.floor(p) || 1));
    onPageChange(normalized);
  };
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.arrow}
        onClick={() => goto(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <IconArrowLeft />
      </button>

      <div className={styles.numbers_container}>
        {pages.map((page) => (
          <Typography
            key={page}
            className={`${styles.page_number} ${currentPage === page ? styles.active : ''}`}
            as="p"
          >
            {page}
          </Typography>
        ))}
      </div>

      <button
        className={styles.arrow}
        onClick={() => goto(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <IconArrowRight />
      </button>
    </div>
  );
}
