"use client"
import useCartStore from "@/store/cartStore";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

const CartSummary = () => {
    const {cart, toggleCart, getTotalPrice } = useCartStore()
    const user = useAuthStore((state) => state.user);

    const router = useRouter();
    const calculateSubtotal = () => {
        return getTotalPrice()
      };
      const calculateTotal =() => {
        return getTotalPrice() * 0.9
      }
      const handleCheckout = () => {
        toggleCart(false);
        if (!user) {
          router.push("/login");
        } else {
          router.push("/checkout");
        }
      }
  return (
    <div className="w-full mx-auto py-10 bg-[#f7f7f7]">
      <div className="px-10 flex flex-col justify-center">
      <h3 className="uppercase font-semibold text-2xl">Order summary</h3>
      <div>
        <div className="pt-7">
          <p>Do you have a promocode?</p>
          <div className="flex flex-row gap-x-3 md:gap-0 py-3">
            <Input className="rounded-sm border-b-black border-t-black border-l-black -mr-1"/>
            <Button className="rounded-sm">Apply</Button>
          </div>
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
            <div className="border-t-2 border-[#e4e4e4] py-6 flex flex-row justify-between">
                <h4 className=" text-xl">Total</h4>
                <p>${calculateTotal()}</p>
            </div>
            <div>
                <Button onClick={handleCheckout} className="w-full rounded-sm">Checkout</Button>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CartSummary;
