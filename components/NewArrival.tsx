"use client"
import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { GoArrowRight } from "react-icons/go"


export const NewArrival = () => {

    const [selectedLink, setSelectedLink] = useState(0)
    const imageContainer = useRef(null)
    const links = [
        {
            title: "For Men",
            src: "limg1.jpg",
            path: 'men'
        },
        {
            title: "For Women",
            src: "limg2.jpg",
            path: 'women'
        },
        {
            title: "Balenciaga Music Pink Merch",
            src: "limg3.jpg",
            path: ''
        },
        {
            title: "Winter 23",
            src: "limg5.jpg",
            path: ''
        },
        {
            title: "Objects",
            src: "limg6.jpg",
            path: ''
        },
    ]

  return (
   <div className="bg-white py-5 md:py-28">
     <div className=" w-11/12 mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-x-7">
            <div className="md:w-8/12 flex flex-col relative">
            <h2  className='text-4xl md:text-7xl pb-6 uppercase'>New Arrival</h2>
            {
                links.map((link, index) => {
                    return (
                        <div className="w-full  py-4 uppercase text-xl  border-b border-black cursor-pointer" key={index} onMouseOver={() => setSelectedLink(index)}>
                           <Link className="flex flex-row justify-between items-baseline" href={link.path}>
                           <h2 className="">{link.title}</h2>
                           <span><GoArrowRight className="w-8" /></span>
                           </Link>
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
   </div>
  )
}
