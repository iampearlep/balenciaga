import { Hero } from "@/components/Hero";
import { NewCollection } from "@/components/NewCollection";
import { Rtw } from "@/components/Rtw";
import { Sfw } from "@/components/Sfw";

export default function Home() {
  return (
   <main className="bg-[#f7f7f7]">
    <Hero />
    <Rtw />
    <NewCollection />
    <Sfw />
   </main>
  );
}
