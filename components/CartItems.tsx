"use client";
import Image from "next/image";
import useCartStore from "@/store/cartStore";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { HiOutlineTrash, HiOutlineHeart } from "react-icons/hi2";
import { BsCurrencyDollar } from "react-icons/bs";
const CartItems = () => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  return (
    <div>
      {cart.length === 0 ? 'Cart is empty' : <><div className="pb-6">
        <h3 className="uppercase font-semibold text-xl">
          {`Your Cart (${cart.length})`}
        </h3>
      </div>
      <div className="border-t border-neutral-950">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex border-b border-neutral-950 py-4"
          >
            <Image
              src={`/images/${item.image}`}
              alt={item.name}
              width={564}
              height={564}
              priority
              className="mr-1 md:mr-4 w-28 h-28 object-cover"
            />

            <div className="flex-grow">
              <h3 className="font-medium text-xl uppercase">{item.name}</h3>
             
              <p className="text-gray-600">Category: <span className="font-medium text-neutral-950">{item.subcategory}</span></p>

              <p className="text-gray-600">
                {item.selectedSize ? <span>Size: <span className="font-medium text-neutral-950">{item.selectedSize}</span></span> : ""}
              </p>

              <div className="flex items-center gap-x-2 py-3">
                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.selectedSize,
                      (item.quantity || 1) - 1
                    )
                  }
                >
                  <AiOutlineMinus className="w-4 h-4" />
                </button>
                <span className=" font-semibold text-base">
                  {item.quantity || 1}
                </span>
                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.selectedSize,
                      (item.quantity || 1) + 1
                    )
                  }
                >
                  <AiOutlinePlus className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-row justify-between gap-x-2 py-1">
                <button><HiOutlineHeart className="w-4 h-4" /></button>
              <button
              className="items-start"
                onClick={() => removeFromCart(item.id, item.selectedSize)}
              >
                <HiOutlineTrash className="w-4 h-4" />
              </button>
              </div>
             <div className="flex flex-row items-center py-[0.65rem]">
             <BsCurrencyDollar className="w-4 h-4" />
             <p className="items-end font-medium">{item.price}</p>
             </div>
            </div>
          </div>
        ))}
      </div></>}
    </div>
  );
};

export default CartItems;
