import Image from "next/image";
import ProductImg from "@/public/images/pi4.jpg"

export const ProductCard = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col gap-y-3">
       <div className="bg-white"> <Image src={ProductImg} height={1825} width={1178} alt=""/></div>
       <div className="flex flex-col gap-y-1">
        <h4>Outerwear Shirt Large Fit in Black</h4>
        <p>$1150</p>
       </div>
      </div>
    </div>
  )
}


