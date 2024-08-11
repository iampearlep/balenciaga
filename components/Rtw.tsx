import Link from "next/link";
import { ProductCard } from './ui/ProductCard'
import { Product } from "@/types/product";
import { CgArrowLongRight } from "react-icons/cg";

const productData:Product[] = [
    {
        id: 0,
        image: '/images/pi1.jpg',
        title: 'Elliana Front Pleated Blouse',
        price: '$300',
        width: 1778,
        height: 1833

    },
    {
        id: 1,
        image: '/images/pi3.jpg',
        title: 'Omi Halter Tank Top',
        price: '$90',
        width: 1555,
        height: 2287
    },
    {
        id: 2,
        image: '/images/pi2.jpg',
        title: 'Daylin Button Up Shirt',
        price: '$400',
        width: 1707,
        height: 1688
    },
    {
        id: 3,
        image: '/images/pi4.jpg',
        title: 'Athenns Tee',
        price: '$100',
        width: 1617,
        height:1728
    },
]

export const Rtw = () => {
  return (
    <div className=' w-11/12 mx-auto my-24'>
        <div className='flex flex-col gap-y-14'>
           <div className="flex flex-row justify-between items-center">
           <h2 className='text-3xl md:text-[2.8rem] uppercase'>Ready-to-wear</h2>
           <Link href="/" className="flex flex-row justify-between items-center gap-x-2">See more <CgArrowLongRight /></Link>
           </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-6 '>
        {productData.map((item) => {
            return <ProductCard key={item.id} product={item} />
        })}
    </div>
        </div>
    </div>
  )
}
