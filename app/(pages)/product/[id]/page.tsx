"use client";
import { useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "@/types/product";
import { ProductDetailsSkeleton } from "@/components/layouts/ProductDetailsSkeleton";
import { CiCircleInfo } from "react-icons/ci";
import Link from "next/link";
import useCartStore from "@/store/cartStore";


const fetchProduct = async (id: string): Promise<Product> => {
  const { data } = await axios.get(`/api/products/${id}`);
  return data;
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", params.id],
    queryFn: () => fetchProduct(params.id),
  });

  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const addToCart = useCartStore(state => state.addToCart)

  
  const handleAddToCart = () => {
   if(!product || !selectedSize) return

    const productWithSize = {
      ...product,
      selectedSize: selectedSize
    }

    addToCart(productWithSize)
    // console.log(`Added ${product.name} in size ${selectedSize} to your cart!`)
      //alert(`Added ${product.name} in size ${selectedSize} to your cart!`)
  }

  if (isLoading) return <ProductDetailsSkeleton />;
  if (error) return <div>Error loading product</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="w-11/12 mx-auto py-12 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
        <div>
          <Image
            src={`/images/${product.image}`}
            height={564}
            width={564}
            alt={product.name}
            priority={true}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl uppercase">{product.name}</h1>
          <p className="">{product.description}</p>
          <p className="">{product.subcategory}</p>

          <div className="flex flex-row justify-between items-center">
            <p className="font-semibold text-3xl">${product.price}</p>
            <p>&#9733; &#9733; &#9733; &#9733; &#9734; (24)</p>
          </div>
          <p className="text-xs text-red-600 flex flex-row items-center space-x-2"><CiCircleInfo />There are only a few left. Order soon.</p>
          <div className="">
            <p>Size:</p>
           <div className="flex flex-row space-x-5 py-2">
             {product.size.map((size, index) => {
              return <button key={index} 
              className={`
                px-3 py-1 rounded-sm border border-gray-950 
                transition-all duration-300 ease-linear
                ${selectedSize === size 
                  ? 'bg-black text-white' 
                  : 'hover:text-white hover:bg-black'}
              `}
              onClick={() => setSelectedSize(size)}
              >{size}</button>;
            })}</div>
          </div>
          <div className="flex flex-col gap-6">
            <button className={`
                rounded text-white py-2 
                ${!selectedSize 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-black'}
              `}
              onClick={handleAddToCart}
              disabled={!selectedSize}>
           {selectedSize ? 'Add to bag' : 'Select a size'}
              </button>
            <button className="bg-white border-black rounded-sm py-2">Buy now</button>
          </div>
          <Link href="/" className="underline">Go back</Link>
        </div>
      </div> 
    </div>
  );
}
