import type { Metadata } from 'next';
import { Montserrat_Alternates } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

const montserrat = Montserrat_Alternates({
  variable: '--font-family-mont',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Лендинг',
  description: 'Описание лендинга',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.variable}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
