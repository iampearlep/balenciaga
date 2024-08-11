import React from 'react'
import { ProductCard } from './ProductCard'
import { Product } from "@/types/product";


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

export const ProductList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-6 w-11/12 mx-auto my-32'>
        {productData.map((item) => {
            return <ProductCard key={item.id} product={item} />
        })}
    </div>
  )
}
