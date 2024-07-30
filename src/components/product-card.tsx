import { baloo } from '@/app/layout'
import { Product } from '@/types/product'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex max-w-[320px] flex-col items-center space-y-4 rounded-bl-[36px] rounded-tr-[36px] bg-base-card p-5">
      <div className="relative h-[120px] w-[120px]">
        <Image src={product.image} alt="" fill quality={100} />
      </div>

      <div className="max-w-[100px] rounded-full bg-yellow-light p-1 text-center text-[10px] font-bold uppercase text-yellow-dark">
        {product.tag}
      </div>

      <h3 className={`${baloo.className} font-bold text-base-subtitle`}>
        {product.name}
      </h3>

      <p className="text-center text-base-label">{product.description}</p>

      <div className="flex w-full items-center justify-between">
        <div>
          <span className="text-sm text-base-text">R$</span>
          <span className={`ml-1 text-3xl text-base-text ${baloo.className}`}>
            {product.price.toFixed(2).replace('.', ',')}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-5 rounded-md bg-base-button px-2 py-2">
            <Minus className="text-purple" />
            <span>1</span>
            <Plus className="text-purple" />
          </div>

          <div className="rounded-md bg-purple-dark p-2">
            <ShoppingCart className="text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}
