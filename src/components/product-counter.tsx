'use client'

import { Minus, Plus } from 'lucide-react'

interface ProductCounterProps {
  increaseQuantityClick: () => void
  decreaseQuantityClick: () => void
  quantity: number
}

export function ProductCounter({
  quantity,
  decreaseQuantityClick,
  increaseQuantityClick,
}: ProductCounterProps) {
  return (
    <div className="flex gap-5 rounded-md bg-base-button p-2">
      <button type="button" onClick={decreaseQuantityClick}>
        <Minus className="cursor-pointer text-purple" />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={increaseQuantityClick}>
        <Plus className="cursor-pointer text-purple" />
      </button>
    </div>
  )
}
