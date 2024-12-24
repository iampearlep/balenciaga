"use client"
import Image from "next/image";
import useCartStore from "@/store/cartStore";

const CheckoutCartSummary = () => {
    const {cart, getTotalPrice } = useCartStore()

    const calculateSubtotal = () => {
        return getTotalPrice()
      };
      const calculateTotal =() => {
        return getTotalPrice() * 0.9
      }
  return (
    <div className="w-full mx-auto bg-[#f7f7f7]">
      <div className="px-5 flex flex-col justify-center">
      <div>
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

              <div className="flex flex-row items-center gap-x-1">
                <p className="text-gray-600"> Amount: </p>
                <span className="font-medium text-base">
                 {item.quantity || 1}
                </span>
              </div>
              <div className="flex flex-row items-center pt-2">
             <p className="items-end font-medium">${item.price}</p>
             </div>
            </div>
          </div>
        ))}
      </div>
        <div className="py-5 flex flex-col gap-y-3">
          {cart.length> 0 && (
            <>
            <div className="flex flex-row justify-between">
            <p>Subtotal</p>
            <p>${calculateSubtotal()}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Discount</p>
            <p className="text-red-500">-10% off</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Promo code</p>
            <p className="text-red-500">$0</p>
          </div>
            </>
          )}
        </div>
        <div className="flex flex-col gap-y-14">
            <div className="border-t border-neutral-950 py-6 flex flex-row justify-between">
                <h4 className=" text-xl">Total</h4>
                <p>${calculateTotal()}</p>
            </div>
        </div>
      </div>
      </div>
  )
}

export default CheckoutCartSummary
