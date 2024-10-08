'use client'

import { baloo } from '@/app/layout'
import { Product } from '@/types/product'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { ProductCounter } from './product-counter'
import { useContext } from 'react'
import { CartContext } from '@/contexts/cart'
import { useProductQuantity } from '@/hooks/useProductQuantity'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addProductToCart } = useContext(CartContext)
  const { quantity, increase, decrease } = useProductQuantity()

  const handleAddToCartClick = () => {
    addProductToCart({ product: { ...product, quantity } })
  }

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
          <ProductCounter
            quantity={quantity}
            decreaseQuantityClick={decrease}
            increaseQuantityClick={increase}
          />

          <button
            className="cursor-pointer rounded-md bg-purple-dark p-2"
            onClick={handleAddToCartClick}
            aria-label="Adicionar produto"
          >
            <ShoppingCart className="text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
