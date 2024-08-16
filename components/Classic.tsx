import React from 'react'
import Image from 'next/image'
import Img1 from "@/public/images/cimg1.jpg"
import Img2 from "@/public/images/cimg4.jpg"

export const Classic = () => {
  return (
    <div className='w-11/12 mx-auto my-24'>
        <div>
            <h2 className='text-4xl md:text-7xl uppercase max-w-5xl py-16'>Classic Looks are paired down and redrawn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-9">
        <div className="">
          <div className="relative">
            <Image
              src={Img1}
              height={1000}
              width={1351}
              alt=""
              className="w-full "
            />
            <div className="absolute top-0 left-0 w-full h-full opacity-100 flex flex-col items-center justify-end py-16 gap-y-6 md:py-44 md:gap-y-12">
            <div className=' text-white md:text-2xl uppercase max-w-[14rem] md:max-w-[21rem] text-center'>
                    <p>Crossbodies & Messengers for women</p>
                </div>
              <button className=" bg-white md:text-xl text-black font-medium py-3 px-16 md:px-28 border-2 border-black flex items-center justify-center">
               Shop now
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="relative">
            <Image
              src={Img2}
              height={1000}
              width={1351}
              alt=""
              className="w-full"
            />
            <div className="absolute top-0 left-0 w-full h-full opacity-100 flex flex-col items-center justify-end py-16 gap-y-6 md:py-44 md:gap-y-12">
                <div className='text-white md:text-2xl uppercase max-w-[8rem] md:max-w-[14rem] text-center '>
                    <p>New Arrivals Bags for men</p>
                </div>
              <button className=" bg-white text-black md:text-xl font-medium py-3 px-16 md:px-28 border-2 border-black flex items-center justify-center">
               Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
  )
}
