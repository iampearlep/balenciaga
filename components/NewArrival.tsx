"use client"
import { useState, useRef } from "react"
import Image from "next/image"
import { GoArrowRight } from "react-icons/go"


export const NewArrival = () => {

    const [selectedLink, setSelectedLink] = useState(0)
    const imageContainer = useRef(null)
    const links = [
        {
            title: "For Men",
            src: "limg1.jpg"
        },
        {
            title: "For Women",
            src: "limg2.jpg"
        },
        {
            title: "Balenciaga Music Pink Merch",
            src: "limg3.jpg"
        },
        {
            title: "Winter 23",
            src: "limg5.jpg"
        },
        {
            title: "Objects",
            src: "limg6.jpg"
        },
    ]

  return (
    <div className=" w-11/12 mx-auto my-24">
        <div className="flex flex-col-reverse md:flex-row gap-x-5">
            <div className="md:w-8/12 flex flex-col relative">
            <h2  className='text-4xl md:text-7xl pb-6 uppercase'>New Arrival</h2>
            {
                links.map((link, index) => {
                    return (
                        <div className="w-full flex flex-row justify-between items-baseline py-4 uppercase text-xl  border-b border-black cursor-pointer" key={index} onMouseOver={() => setSelectedLink(index)}>
                           <h2 className=" ">{link.title}</h2>
                           <span> <GoArrowRight className="w-8" /></span>
                        </div>
                    )
                })
            }
            </div>
            <div className="w-full h-[400px] overflow-y-hidden flex justify-center items-center transition-all duration-75 ease-in-out" ref={imageContainer}>
            <Image src={`/images/${links[selectedLink].src}`}  width={474} height={378} alt='' priority className="object-cover w-full object-center" />
            </div>
        </div>
    </div>
  )
}
