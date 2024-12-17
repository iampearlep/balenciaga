import { Product } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({product}: {product: Product}) => {
  return (
    <div>
    <Link href={`/product/${product.id}`}>
      <div className="flex flex-col gap-y-3">
        <div className="relative h-[300px] overflow-y-hidden cursor-pointer">
          <Image
            src={`/images/${product.image}`}
            height={564}
            width={564}
            alt=""
            priority={true}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <h4 className="uppercase font-medium">
            {product.name}
          </h4>
          <p>${product.price}</p>
        </div>
      </div>
    </Link>
  </div>
  )
}

export default Card
