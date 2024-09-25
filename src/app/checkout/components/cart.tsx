'use client'

import { CartContext } from '@/contexts/cart'
import { useContext } from 'react'
import { ProductInfo } from './product-info'

export function Cart() {
  const { products, delivery, subtotalPrice, totalPrice } =
    useContext(CartContext)

  return (
    <div className="mt-5 max-w-[90vw] rounded-md bg-base-card p-5">
      {products.length > 0 ? (
        <>
          {products.map((product) => (
            <ProductInfo key={product.id} product={product} />
          ))}
          <div className="mt-5 flex flex-col gap-2">
            <div className="flex justify-between text-base-text">
              <h2>Total itens</h2>
              <span>R$ {subtotalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-base-text">
              <h2>Entrega</h2>
              <span>R$ {delivery.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-xl font-bold text-base-subtitle">
              <h2>Total</h2>
              <span>R$ {totalPrice.toFixed(2)}</span>
            </div>

            <button
              type="submit"
              className="text-md mt-5 rounded-md bg-yellow py-2 font-semibold uppercase text-white hover:bg-yellow-dark"
            >
              Confirmar pedido
            </button>
          </div>
        </>
      ) : (
        <p className="flex h-[200px] w-full items-center justify-center">
          Nenhum produto adicionado ao carrinho.
        </p>
      )}
    </div>
  )
}
