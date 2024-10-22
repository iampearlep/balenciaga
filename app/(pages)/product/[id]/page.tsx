"use client";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "@/types/product";

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="w-11/12 mx-auto py-32">
      <div className="grid grid-cols-2 gap-x-14">
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
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold uppercase">{product.name}</h1>
          <p className="py-2">{product.description}</p>
          <p className="">{product.category}</p>

          <div className="flex flex-row justify-between items-center py-5">
            <p className="">${product.price}</p>
            <p>Rating</p>
          </div>
          <p>There are only a few left, order soon.</p>
          <div className="py-6 ">
            <p>Size:</p>
           <div className="flex flex-row justify-between w-5/12"> {product.size.map((size, index) => {
              return <button className="px-4 py-2 rounded-sm hover:border-gray-950 hover:border " key={index}>{size}</button>;
            })}</div>
          </div>
          <div className="flex flex-col gap-6 ">
            <button className="bg-black rounded text-white py-2">Add to bag</button>
            <button className="bg-white border-black rounded-sm py-2">Buy now</button>
          </div>
        </div>
      </div> 
    </div>
  );
}
