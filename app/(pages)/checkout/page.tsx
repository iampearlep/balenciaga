import CheckoutInfo from "@/components/CheckoutInfo";

export default function Page() {
    return (
        <main>
       <div className="mx-auto bg-white">
        <div className="bg-[#f7f7f7] py-8">
            <h1 className="w-11/12 mx-auto uppercase text-3xl md:text-[2.8rem]">Checkout</h1>
        </div>
        <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row gap-y-6 gap-x-28 py-10">
            <div className="md:w-8/12">
                <CheckoutInfo />
            </div>
            <div className="md:w-4/12">
                CartSummary
            </div>
        </div>
       </div>
        </main>
    );
}