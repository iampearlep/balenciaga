"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { fetchProducts } from "@/app/api/products";
import { SkeletonCard } from "./layouts/SkeletonCard";
import { Product } from "@/types/product";

export const NewProducts= () => {
    const {
        data: products,
        isLoading,
        error,
      } = useQuery<Product[], Error>({
        queryKey: ["products"],
        queryFn: fetchProducts,
        staleTime: Infinity,
      });


      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">
          {isLoading ? (
            <>
              {[...Array(12)].map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </>
          ) : error ? (
            <div className="col-span-full">An error occurred: {error.message}</div>
          ) : products && products.length > 0 ? (
            <>
              {products.map((product) => (
                <div key={product.id}>
                  <Link href={`/product/${product.id}`}>
                    <div className="flex flex-col gap-y-3">
                      <div className="relative h-[300px] overflow-hidden cursor-pointer">
                        <Image
                          src={`/images/${product.image}`}
                          height={564}
                          width={564}
                          alt={product.name}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <h4 className="uppercase font-medium">{product.name}</h4>
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
  )
}
