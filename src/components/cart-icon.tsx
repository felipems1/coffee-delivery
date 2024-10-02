'use client'

import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../contexts/cart'

export function CartIcon() {
  const { products } = useContext(CartContext)

  const hasProducts = products && products.length > 0

  return (
    <Link
      href="/checkout"
      className="relative cursor-pointer rounded-md bg-yellow-light p-2 text-yellow-dark hover:bg-yellow-dark hover:text-white"
    >
      <ShoppingCart size={20} />
      {hasProducts && (
        <div className="absolute right-[-8px] top-[-8px] flex h-5 w-5 items-center justify-center rounded-full bg-yellow-dark text-sm text-white">
          {products.length}
        </div>
      )}
    </Link>
  )
}
