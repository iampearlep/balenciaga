import React from "react";
import Image from "next/image";
import ctaImg from "@/public/images/cimg5.webp";


export const Cta = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="pb-28 pt-10 md:pt-5">
        <div className="bg-neutral-900 flex flex-row gap-x-10">
          <div className="hidden md:flex md:w-2/5 h-[26rem] ">
            <Image
              src={ctaImg}
              height={1500}
              width={1000}
              priority={true}
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </div>
          <div className="text-white w-11/12 md:w-7/12  mx-auto flex flex-col justify-center py-6 md:py-0 text-center  items-center gap-y-10 md:gap-y-24">
            <div className="w-11/12 mx-auto flex flex-col gap-y-4">
              <p className="uppercase text-sm font-semibold">
              Join Our Style Squad
              </p>
              <h2 className="md:text-2xl font-light capitalize">
              Get 15% off your first order and be the first to know about exclusive drops and sales.
              </h2>
              
            </div>
            <div className="w-full md:w-10/12 mx-auto flex flex-col relative">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-neutral-800 px-8 py-4 border border-white w-full rounded-full placeholder:text-white placeholder:text-sm placeholder:font-semibold"
              />
              <button className="absolute top-1.5 right-8 text-sm border-l border-white pl-6 py-3 font-semibold">
                Submit
              </button>
              <p className="pt-5 text-xs font-semibold">
                We never share your data. See{" "}
                <span className="capitalize underline">privacy policy</span> for
                more info.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
