import Link from "next/link";
import { ProductCard } from './ui/ProductCard'
import { Product } from "@/types/product";
import { CgArrowLongRight } from "react-icons/cg";

const productData:Product[] = [
    {
        id: 0,
        image: '/images/img15.jpg',
        title: 'Womens Runner Trainers in   White',
        price: '$350',
        width: 564,
        height: 564

    },
    {
        id: 1,
        image: '/images/img16.jpg',
        title: 'Womens Runner Trainers in  Beige',
        price: '$90',
        width: 564,
        height: 564
    },
    {
        id: 2,
        image: '/images/img13.jpg',
        title: 'Womens Runner Sneaker in Multicolored',
        price: '$400',
        width: 564,
        height: 564
    },
    {
        id: 3,
        image: '/images/img18.jpg',
        title: 'Womens Runner Trainers in  Black',
        price: '$100',
        width: 564,
        height: 564
    },
]

export const Sfw = () => {
  return (
    <div className=' w-11/12 mx-auto my-24'>
        <div className='flex flex-col gap-y-14'>
           <div className="flex flex-row justify-between items-center">
           <h2 className='text-3xl md:text-[2.8rem] uppercase'>Sneakers for women</h2>
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
