import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import { Playfair_Display } from "next/font/google"; 
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { CURRENT_THEME } from "@/config/theme";

const montserrat = Montserrat_Alternates({
  variable: "--font-family-mont",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-family-playfair",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Лендинг",
  description: "Описание лендинга",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-theme={CURRENT_THEME} className={`${montserrat.variable} ${playfair.variable}`}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}