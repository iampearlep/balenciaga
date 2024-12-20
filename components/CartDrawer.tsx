"use client";

import { Drawer } from "vaul";
import Image from "next/image";
import { Button } from "./ui/button";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import useCartStore from "@/store/cartStore";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    toggleCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
  } = useCartStore();

  const user = useAuthStore((state) => state.user);

  const router = useRouter();

  const calculateTotal = () => {
    return getTotalPrice().toFixed(2);
  };

  const handleProceedToCheckout = () => {
    toggleCart(false);
    if (!user) {
      router.push("/login");
    } else {
      router.push("/checkout");
    }
  }
  return (
    <Drawer.Root direction="right" open={isCartOpen} onOpenChange={toggleCart}>
      <Drawer.Trigger className="relative flex h-10 items-center justify-center gap-2 overflow-hidden px-2 text-sm font-medium  transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
        <div className="relative">
          <HiOutlineShoppingBag className="w-5 h-4" />
          {cart.length > 0 && (
            <span
              className="absolute -top-2 -right-2 bg-red-500 text-white 
            rounded-full w-4 h-4 flex items-center justify-center text-[0.5rem]"
            >
              {cart.length}
            </span>
          )}
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="right-0 top-0 bottom-0 rounded-none fixed z-10 outline-0 w-10/12 md:w-[32rem] flex">
          <div className="bg-zinc-50 h-full w-full py-8 flex flex-col rounded-none">
            <div className="w-full md:w-11/12 mx-auto">
              <Drawer.Title className="font-medium mb-2 text-zinc-900 px-4">
                Your Cart
              </Drawer.Title>
              <Drawer.Description className="text-zinc-600 mb-2 px-4">
                {cart.length === 0
                  ? "Your cart is empty"
                  : `You have ${cart.length} item(s) in your cart`}
              </Drawer.Description>
              <div className="p-4 space-y-4 overflow-y-auto max-h-[60vh]">
                {cart.map((item, index) => (
                  <div key={index} className="flex items-center border-b pb-4">
                    <Image
                      src={`/images/${item.image}`}
                      alt={item.name}
                      width={564}
                      height={564}
                      className="mr-4 w-28 h-28 object-cover"
                    />

                    <div className="flex-grow">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">
                        {item.selectedSize ? `Size: ${item.selectedSize}` : ""}
                      </p>
                      <p className="text-gray-600">${item.price}</p>

                      <div className="flex items-center gap-x-2 py-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.selectedSize,
                              (item.quantity || 1) - 1
                            )
                          }
                        >
                          <AiOutlineMinus className="w-3 h-3" />
                        </button>
                        <span className=" font-semibold text-sm">
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
                          <AiOutlinePlus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <Button
                      variant="destructive"
                      size="icon"
                      className="rounded-sm"
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                    >
                      <AiOutlineClose className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="w-11/12 mx-auto pt-14 flex flex-col items-center justify-center gap-y-10">
                {cart.length > 0 && (
                  <>
                    <div className="w-full flex flex-row justify-between font-bold">
                      <span>Total</span>
                      <span>${calculateTotal()}</span>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-x-5 gap-y-5">
                      <Button onClick={handleProceedToCheckout} className="w-full rounded-sm">
                        Proceed to Checkout
                      </Button>
                     <Button variant="outline" onClick={() => {
          toggleCart(false);
          router.push("/cart");
        }} className="w-full rounded-sm">
                        View Cart
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
