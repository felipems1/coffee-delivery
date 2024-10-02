import { useState } from 'react'

export function useProductQuantity(initialQuantity = 1) {
  const [quantity, setQuantity] = useState(initialQuantity)

  const increase = () => setQuantity((prev) => prev + 1)
  const decrease = () => setQuantity((prev) => Math.max(prev - 1, 1))

  return { quantity, increase, decrease }
}
