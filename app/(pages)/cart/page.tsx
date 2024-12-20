import CartItems from "@/components/CartItems";

export default function Page() {
    return (
        <main>
       <div className="mx-auto bg-white">
        <div className="bg-[rgb(247,247,247)] py-8">
            <h1 className="w-11/12 mx-auto uppercase text-3xl md:text-[2.8rem]">Cart</h1>
        </div>
        <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-6 py-10">
        <div className="md:w-8/12">
        <CartItems />
        </div>
        <div className="md:w-4/12 bg-[#f7f7f7]">Summary</div>
        </div>
       </div>
        </main>
    );
}