"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
import { fetchProducts } from "@/app/api/products";
import { SkeletonCard } from "./layouts/SkeletonCard";
import { Product } from "@/types/product";
export const Rtw = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: Infinity,
  });

  const filteredProducts = products
  ?.filter((product: Product) => product.subcategory === "Tops")
  .slice(0, 4) ?? [];
 
  return (
    <div className=" w-11/12 mx-auto my-24">
      <div className="flex flex-col gap-y-14">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-3xl md:text-[2.8rem] uppercase">Ready-to-wear</h2>
          <Link
            href="/"
            className="flex flex-row justify-between items-center gap-x-2"
          >
            See more <CgArrowLongRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-6 ">
        {isLoading ? (
          <>
          {[...Array(4)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </>
          ) : error ? (
            <div className="col-span-full">An error occurred: {error.message}</div>
          ) : products && products.length > 0 ? (
            <>
              {filteredProducts.map((product: Product) => (
                <div key={product.id}>
                  <Link href={`/product/${product.id}`}>
                    <div className="flex flex-col gap-y-3">
                      <div className="relative h-[300px] overflow-y-hidden cursor-pointer">
                        <Image
                          src={`/images/${product.image}`}
                          height={564}
                          width={564}
                          alt=""
                          priority={true}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <h4 className="uppercase font-medium">
                          {product.name}
                        </h4>
                        <p>${product.price}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          ) : (
            <p className="col-span-full">No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};
