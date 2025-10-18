import Catalog from "@/components/Catalog/Catalog";
import Header from "@/components/Header/Header";
import Order from "@/components/Order/Order";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Reviews from "@/components/Reviews/Reviews";
import About from "@/components/About/About";
export const CURRENT_THEME: "A" | "B" = "B";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Hero />
        <Catalog />
        <About />
        <Reviews />
        <Order design={CURRENT_THEME} />
        <Footer />
      </main>
    </div>
  );
}
