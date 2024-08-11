import React, {FC} from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import Link from "next/link";

interface CardProps {
    product: Product;
  }

export const ProductCard:React.FC<CardProps> = ({product}) => {
  return (
   <Link href=''>
      <div className="flex flex-col gap-y-3">
       <div className="relative h-[300px] overflow-y-hidden cursor-pointer"> <Image src={product.image} height={product.height} width={product.width} alt="" className="w-full h-full"/></div>
       <div className="flex flex-col gap-y-1">
        <h4 className="uppercase font-medium">{product.title}</h4>
        <p>{product.price}</p>
       </div>
      </div>
   </Link>
  )
}


