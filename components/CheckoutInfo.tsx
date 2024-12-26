"use client"
import Link from "next/link"
import Contact from "./Contact"
import Delivery from "./Delivery"
import { Button } from "./ui/button"
import { usePaystackPayment } from 'react-paystack'
import { useRouter } from "next/navigation"
import useCartStore from "@/store/cartStore"

const CheckoutInfo = () => {
    const {clearCart, getTotalPrice} =  useCartStore()

    const router = useRouter()

    const total = () => {
        return getTotalPrice()
      }; 

    const billings = {
        discount: 0.9,
        total: total 
    }

    const config = {
        reference: (new Date()).getTime().toString(),
        email: "damilolaprincess4@gmail.com",
        amount: Math.round(billings.total() * 1500 * billings.discount * 100),
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
    }
  
    const onSuccess = (reference: any) => {
        clearCart()
        router.push('/success')
    }

    const onClose = () => {
        alert('Wait, Dont leave :(')
    }

    const initializePayment = usePaystackPayment(config)

    return (
        <div>
            <Contact />
            <Delivery />
            <div className="flex justify-between py-20">
                <Link href='/cart'>
                    <Button 
                        size='default' 
                        className="uppercase rounded-sm bg-white text-black hover:text-white border border-black"
                    >
                        Go Back
                    </Button>
                </Link>
                <Button 
                    size='default' 
                    className="uppercase rounded-sm"
                    onClick={() => {
                        initializePayment({
                            onSuccess,
                            onClose,
                        })
                    }}
                >
                    Continue to payment
                </Button>
            </div>
        </div>
    )
}

export default CheckoutInfo
