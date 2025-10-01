import Catalog from "@/components/Catalog/Catalog";
import Header from "@/components/Header/Header";
import Order from "@/components/Order/Order";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import About from "@/components/About/About";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Hero />
        <Catalog />
        <About/>
        <Order />
        <Footer/>
      </main>
    </div>
  );
}
