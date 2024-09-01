"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/app/api/products";
import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className=" w-11/12 mx-auto my-24">
      <div className="flex flex-col gap-y-14">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-3xl md:text-[2.8rem] uppercase">Sales</h2>
          <Link
            href="/"
            className="flex flex-row justify-between items-center gap-x-2"
          >
            See more <CgArrowLongRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-6 ">
          {products && products.length > 0 ? (
            <>
              {products.slice(8, 12).map((product: any) => (
                <div key={product._id}>
                  <Link href="">
                    <div className="flex flex-col gap-y-3">
                      <div className="relative h-[300px] overflow-y-hidden cursor-pointer">
                        {" "}
                        <Image
                          src={`/images/${product.image}`}
                          height={1100}
                          width={1100}
                          alt=""
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
            <p>No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};
