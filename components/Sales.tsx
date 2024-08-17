import Link from "next/link";
import { ProductCard } from './ui/ProductCard'
import { Product } from "@/types/product";
import { CgArrowLongRight } from "react-icons/cg";

const productData:Product[] = [
    {
        id: 0,
        image: '/images/simg.jpg',
        title: 'Womens Plated Earrings in Gold',
        price: '$300',
        width: 1100,
        height: 1100

    },
    {
        id: 1,
        image: '/images/simg2.jpg',
        title: 'Mens Crocs™ Boot in Black',
        price: '$90',
        width: 1100,
        height: 1100
    },
    {
        id: 2,
        image: '/images/simg3.jpg',
        title: 'Womens Crush Small Chain Bag Quilted in Black',
        price: '$400',
        width: 1100,
        height: 1100
    },
    {
        id: 3,
        image: '/images/simg4.jpg',
        title: 'Double Sleeve Trench in Dark Beige',
        price: '$100',
        width: 1100,
        height: 1100
    },
]

export const Sales = () => {
  return (
    <div className=' w-11/12 mx-auto my-24'>
        <div className='flex flex-col gap-y-14'>
           <div className="flex flex-row justify-between items-center">
           <h2 className='text-3xl md:text-[2.8rem] uppercase'>Sales</h2>
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
