"use client"
import CartItems from "@/components/CartItems";
import CartSummary from "@/components/CartSummary";
import useCartStore from "@/store/cartStore";
export default function Page() {
    const {cart} = useCartStore()
    return (
        <main>
       <div className="mx-auto bg-white">
        <div className="bg-[rgb(247,247,247)] py-8">
            <h1 className="w-11/12 mx-auto uppercase text-3xl md:text-[2.8rem]">Cart</h1>
        </div>
        <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-y-6 gap-x-10 py-10">
       {cart.length === 0 ? 'Cart is empty' : (
        <>
         <div className="md:w-8/12">
         <CartItems />
         </div>
         <div className="md:w-4/12">
         <CartSummary />
         </div>
        </>
       )}
       </div>
       </div>
        </main>
    );
}