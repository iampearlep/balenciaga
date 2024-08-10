import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ui/ProductCard";

export default function Home() {
  return (
   <main>
    <Hero />
    <div className="grid grid-cols-1 md:grid-cols-4 my-44 gap-x-8 w-11/12 mx-auto">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
   </main>
  );
}
