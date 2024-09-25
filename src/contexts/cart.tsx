'use client'

import { Product } from '@/types/product'
import { createContext, ReactNode, useState } from 'react'

export interface CartProduct extends Product {
  quantity: number
}

interface ICartContext {
  products: CartProduct[]
  totalPrice: number
  subtotalPrice: number
  delivery: number
  addProductToCart: ({ product }: { product: CartProduct }) => void
  decreaseProductQuantity: (productId: number) => void
  increaseProductQuantity: (productId: number) => void
  removeProductFromCart: (productId: number) => void
  clearCart: () => void
}

export const CartContext = createContext<ICartContext>({} as ICartContext)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([])

  const addProductToCart: ICartContext['addProductToCart'] = ({ product }) => {
    const isProductAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    )

    if (isProductAlreadyOnCart) {
      return setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            }
          }

          return cartProduct
        }),
      )
    }

    setProducts((prev) => [...prev, product])
  }

  const decreaseProductQuantity: ICartContext['decreaseProductQuantity'] = (
    productId: number,
  ) => {
    return setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          if (cartProduct.quantity === 1) {
            return cartProduct
          }

          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          }
        }

        return cartProduct
      }),
    )
  }

  const increaseProductQuantity: ICartContext['increaseProductQuantity'] = (
    productId: number,
  ) => {
    return setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          }
        }

        return cartProduct
      }),
    )
  }

  const removeProductFromCart: ICartContext['removeProductFromCart'] = (
    productId: number,
  ) => {
    return setProducts((prev) =>
      prev.filter((product) => product.id !== productId),
    )
  }

  const clearCart = () => {
    setProducts([])
  }

  const subtotalPrice = products.reduce((acc, product) => {
    return acc + Number(product.price) * product.quantity
  }, 0)

  const delivery = 3.5

  const totalPrice = subtotalPrice + Number(delivery.toFixed(2))

  return (
    <CartContext.Provider
      value={{
        products,
        subtotalPrice,
        delivery,
        totalPrice,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
