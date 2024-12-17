"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/app/api/products";
import { CgArrowLongRight } from "react-icons/cg";
import { SkeletonCard } from "./layouts/SkeletonCard";
import { Product } from "@/types/product";
import Card from "./Card";
export const Sales = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: Infinity,
  });

  return (
    <div className=" w-11/12 mx-auto my-24">
      <div className="flex flex-col gap-y-14">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-3xl md:text-[2.8rem] uppercase">Sales</h2>
          <Link
            href="/explore"
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
              {products.slice(3, 7).map((product: Product, index) => (
                 <Card key={index} product={product} />
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
