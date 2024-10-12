import Image from "next/image";
import Link from "next/link";
import Nimg1 from "@/public/images/ygimg.jpg";
import Nimg2 from "@/public/images/ygjimg.jpg";
import { CgArrowLongRight } from "react-icons/cg";

export const YG = () => {
  return (
    <div className="pt-14 pb-28 w-11/12 mx-auto">
        <div className="flex flex-col gap-y-14">
        <div className="flex flex-row justify-between items-center">
            <h2 className="text-4xl md:text-6xl uppercase max-w-3xl">
             Yeezy Gap engineeered by Balenciaga
            </h2>
            <Link
              href="/"
              className="flex flex-row text-nowrap justify-between items-center gap-x-2"
            >
              See more <CgArrowLongRight />
            </Link>
    
          </div>
      <div className="flex flex-col-reverse md:h-[44.5rem] overflow-y-hidden md:flex-row gap-x-5 gap-y-5">
        <div className="md:w-1/2">
          <Image
            src={Nimg1}
            width={900}
            height={1325}
            alt=""
            priority
            className=""
          />
        </div>
        <div className="flex flex-col md:w-8/12">
          <div className="flex h-[39rem] justify-between gap-x-5 md:gap-x-0">
            <div className="flex w-[50%] md:w-[40%] items-end">
          <Image
            src={Nimg2}
            width={900}
            height={1326}
            alt=""
            priority
            className="h-auto w-auto"
          />
        </div>
        <div className="items-center w-[40%] md:w-[35%] pt-10 md:pt-0">
           <p>
           This lineup continues to reimagine wardrope essentials with an
            emphasis on hoodies and sweatpants in elevated proportions. 
            Think runway-worthy voluminous sleeves on bulbous silhouettes on pants.
            </p>
           </div>
          </div>
        </div>
      </div>
        </div>
    </div>
  );
};