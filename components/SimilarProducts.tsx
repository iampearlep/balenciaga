"use client";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types/product";
import Card from "./Card";
import { fetchProducts } from "@/app/api/products";
import { SkeletonCard } from "./layouts/SkeletonCard";
import { SimilarProductsProps } from "@/types/product";

const getSimilarProducts = (
    currentProduct: Product,
    allProducts: Product[]
  ) => {
    return allProducts
      .filter(
        (product) =>
          product.id !== currentProduct.id &&
          product.subcategory === currentProduct.subcategory
      )
      .slice(0, 4);
  };

export const SimilarProducts = ({ product }: SimilarProductsProps) => {
  const {
    data: allProducts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const similarProducts = allProducts ? getSimilarProducts(product, allProducts) : [];

  return (
    <div className="pt-24">
      <h2 className="text-3xl md:text-[2rem] uppercase py-5 md:py-10">You may also like</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {isLoading ? (
          [...Array(4)].map((_, index) => <SkeletonCard key={index} />)
        ) : error ? (
          <div className="col-span-full">An error occurred: {error.message}</div>
        ) : similarProducts.length > 0 ? (
          similarProducts.map((similarProduct) => (
            <Card key={similarProduct.id} product={similarProduct} />
          ))
        ) : (
          <p className="col-span-full">No similar products found</p>
        )}
      </div>
    </div>
  );
};