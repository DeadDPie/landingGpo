'use client';
import { useState, useEffect } from 'react';
import Typography from '@/ui/Typography/Typography';
import styles from './Catalog.module.css';
import Card from './Card/Card';
import { data } from '@/constants/data';
import Pagination from './Pagination/Pagination';

export default function Catalog() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

  const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    const normalized = Math.max(1, Math.min(totalPages, Math.floor(page) || 1));
    setCurrentPage(normalized);
  };

  return (
    <section className={styles.wrapper} id="catalog">
      <Typography variant="h1" as="p" className={styles.title}>
        Каталог
      </Typography>

      <div className={styles.container}>
        {currentItems.map((cake) => (
          <Card key={cake.id} cake={cake} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
