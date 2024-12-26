import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
    return(
        <main className="w-full my-20 bg-white">
            <div className="md:w-10/12 mx-auto flex flex-col gap-y-10 justify-center items-center py-14">
                <h2 className="text-xl uppercase font-semibold">Thank You!</h2>
                <div className="w-9/12 md:w-1/2 flex flex-col justify-center items-center text-center gap-y-2">
                <p>Your order has been created</p>
                <p>We will notify you via email when the order has been collected, will arrive and be shipped.</p>
                </div>
                <Link href="/"><Button className="rounded-sm" size='lg'>Back to Mainpage</Button></Link>
            </div>
        </main>
    )
}