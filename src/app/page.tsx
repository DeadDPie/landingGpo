import Catalog from "@/components/Catalog/Catalog";
import Header from "@/components/Header/Header";
import Order from "@/components/Order/Order";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Hero />
        <Catalog />
        <Order />
      </main>
    </div>
  );
}
