'use client'

import Image from 'next/image'
import { ProductCounter } from '../../../components/product-counter'
import { Trash2 } from 'lucide-react'
import { useContext } from 'react'
import { CartContext, CartProduct } from '../../../contexts/cart'

interface ProductInfoProps {
  product: CartProduct
}

export function ProductInfo({ product }: ProductInfoProps) {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext)

  const handleDecreaseQuantityClick = () => {
    decreaseProductQuantity(product.id)
  }

  const handleIncreaseQuantityClick = () => {
    increaseProductQuantity(product.id)
  }

  const handleRemoveProductFromCartClick = () => {
    removeProductFromCart(product.id)
  }

  return (
    <div className="flex justify-between border-b border-base-button py-5">
      <div className="relative mr-4 h-16 w-16">
        <Image src={product.image} alt="" fill />
      </div>

      <div className="flex flex-col">
        <h2 className="text-base-subtitle">{product.name}</h2>
        <div className="flex items-center gap-5 rounded-md py-2">
          <ProductCounter
            quantity={product.quantity}
            decreaseQuantityClick={handleDecreaseQuantityClick}
            increaseQuantityClick={handleIncreaseQuantityClick}
          />

          <button
            className="flex items-center gap-2 rounded-md bg-base-button p-3"
            onClick={handleRemoveProductFromCartClick}
          >
            <Trash2 className="text-purple" size={16} />
            <span className="hidden text-xs uppercase lg:block">Remover</span>
          </button>
        </div>
      </div>

      <h2 className="font-bold text-base-text">
        R$ {product.price.toFixed(2).replace('.', ',')}
      </h2>
    </div>
  )
}
