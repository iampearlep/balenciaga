import Image from "next/image";
import Link from "next/link";
import Nimg1 from "@/public/images/img7.jpg";
import Nimg2 from "@/public/images/img6.jpg";
import { CgArrowLongRight } from "react-icons/cg";

export const NewCollection = () => {
  return (
    <div className="my-14 w-11/12 mx-auto">
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
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-4xl md:text-6xl uppercase max-w-lg">
              New collections
            </h2>
            <Link
              href="/"
              className="flex flex-row text-nowrap justify-between items-center gap-x-2"
            >
              See more <CgArrowLongRight />
            </Link>
    
          </div>
          <div className="flex h-[40rem] justify-between gap-x-5 md:gap-x-0">
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
        <div className="items-center w-[50%] md:w-[35%] pt-10 md:pt-16">
           <p>
              A stoical elegance, you might call it. Black asymmetric dresses
              blowing voluminously in the artic wind. Oversized hybrids of
              hoodie and padded outerwear; leather jackets that turn out to be
              made from Balenciaga's new mycelium-derived leather-mimicking
              alternative. Tote bags mated with boots.
            </p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};
