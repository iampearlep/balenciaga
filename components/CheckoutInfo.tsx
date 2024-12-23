import Link from "next/link"
import Contact from "./Contact"
import Delivery from "./Delivery"
import { Button } from "./ui/button"

const CheckoutInfo = () => {
  return (
    <div>
     <Contact />
     <Delivery />
     <div className="flex justify-between py-20">
       <Link href='/cart'><Button size='default' className="uppercase rounded-sm bg-white text-black hover:text-white border border-black">Go Back</Button></Link>
        <Button size='default' className="uppercase rounded-sm">Continue to payment</Button>
     </div>
    </div>
  )
}

export default CheckoutInfo
