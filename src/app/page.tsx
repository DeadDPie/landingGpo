import Catalog from "@/components/Catalog/Catalog";
import Header from "@/components/Header/Header";
import Order from "@/components/Order/Order";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Catalog />

        <p>Здесь будем вставлять наши блоки лендинга</p>
        <Order />
      </main>
    </div>
  );
}
