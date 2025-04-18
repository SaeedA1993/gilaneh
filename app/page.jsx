import Hero from "@/components/home/hero/Hero";
import ShopFeatures from "@/components/home/shopFeatures/ShopFeatures";
import Populars from "@/components/home/populars/Populars";
import TeaProducts from "@/components/home/teaProducts/TeaProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <ShopFeatures />
      <Populars />
      <TeaProducts />
    </div>
  );
}
