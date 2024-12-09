import { Classic } from "@/components/Classic";
import { Cta } from "@/components/Cta";
import { Hero } from "@/components/Hero";
import { NewArrival } from "@/components/NewArrival";
import { NewCollection } from "@/components/NewCollection";
import { Rtw } from "@/components/Rtw";
import { Sales } from "@/components/Sales";
import { Sfw } from "@/components/Sfw";
import { YG } from "@/components/YG";

export default function Home() {
  return (
   <main className="bg-[#f7f7f7]">
    <Hero />
    <Rtw />
    <NewCollection />
    <Sfw />
    <NewArrival />
    <Classic />
    <Sales />
    <YG />
    <Cta />
   </main>
  );
}
