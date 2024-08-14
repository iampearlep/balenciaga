import Link from "next/link";
import { ProductCard } from './ui/ProductCard'
import { Product } from "@/types/product";
import { CgArrowLongRight } from "react-icons/cg";

const productData:Product[] = [
    {
        id: 0,
        image: '/images/img2.jpg',
        title: 'Elliana Front Pleated Blouse',
        price: '$300',
        width: 1100,
        height: 1100

    },
    {
        id: 1,
        image: '/images/img1.jpg',
        title: 'Omi Halter Tank Top',
        price: '$90',
        width: 1100,
        height: 1100
    },
    {
        id: 2,
        image: '/images/img4.jpg',
        title: 'Daylin Button Up Shirt',
        price: '$400',
        width: 1100,
        height: 1100
    },
    {
        id: 3,
        image: '/images/img5.jpg',
        title: 'Athenns Tee',
        price: '$100',
        width: 1100,
        height: 1100
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
