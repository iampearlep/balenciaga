import Image from "next/image";
import HeroImg from "@/public/images/hero-img.webp";
import MobileHero from "@/public/images/hero-mobile.webp";
export const Hero = () => {
  return (
    <div className="flex relative h-screen overflow-hidden">
      <div className="hidden md:flex w-full">
        <Image
          src={HeroImg}
          width={1943}
          height={1457}
          alt=""
          priority={true}
          className="w-full h-full object-cover object-top brightness-90"
        />
      </div>
      <div className="flex md:hidden">
        <Image
          src={MobileHero}
          width={1944}
          height={2722}
          alt=""
          priority={true}
          className="w-full h-full object-cover object-top brightness-90"
        />
      </div>
      <div className="">
        <div className="absolute top-0 inset-0 pt-[9.5rem] md:pt-24 px-5 md:px-[3.75rem] max-w-xl">
          <h1 className="text-4xl md:text-7xl text-white uppercase">
            New collection
          </h1>
          <button className="bg-black text-sm  text-white w-2/6 md:w-1/2 md:text-xl my-5 md:my-14 py-3 md:py-4 rounded-md">
            Shop now
          </button>
        </div>
        <div className="absolute top-0 right-0 pt-[450px] md:pt-[290px] px-5 md:px-[3.75rem]  flex flex-col gap-y-2 text-white uppercase ">
          <div className="flex flex-row gap-x-6">
            <h1 className="text-3xl md:text-6xl">23/24</h1>
            <p className="text-lg md:text-3xl text-right pt-3 md:pt-6">
              Autumm-winter
            </p>
          </div>
          <div className="text-lg md:text-3xl text-right ">
            <p>Coats and Jackets</p>
          </div>
        </div>
      </div>
    </div>
  );
};
