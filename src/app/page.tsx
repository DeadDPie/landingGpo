import Catalog from "@/components/Catalog/Catalog";
import Header from "@/components/Header/Header";
import Order from "@/components/Order/Order";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Reviews from "@/components/Reviews/Reviews";
import About from "@/components/About/About";
import { CURRENT_THEME } from "@/config/theme";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Hero />
        {CURRENT_THEME === "B" ? (
          <>
            <About />
            <Catalog />
          </>
        ) : (
          <>
            <Catalog />
            <About />
          </>
        )}

        <Reviews />
        <Order />
        <Footer />
      </main>
    </div>
  );
}
