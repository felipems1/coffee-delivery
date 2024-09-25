'use client'

import { baloo } from '@/app/layout'
import { FormProvider, useForm } from 'react-hook-form'
import { CartForm } from './cart-form'
import { Cart } from './cart'
import { MapPin } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { CartContext } from '@/contexts/cart'

enum PaymentMethod {
  CreditCard = 'credito',
  DebitCard = 'debito',
  Cash = 'dinheiro',
}

interface CartFormType {
  cep: string
  road: string
  number: string
  neighborhood: string
  city: string
  state: string
  payment: PaymentMethod
}

export function CartInfo() {
  const cartForm = useForm<CartFormType>()

  const { handleSubmit } = cartForm

  const router = useRouter()

  const { clearCart } = useContext(CartContext)

  const handleFinishOrder = () => {
    router.push('/order-finish')
    clearCart()
  }

  return (
    <form
      onSubmit={handleSubmit(handleFinishOrder)}
      className="gap-10 px-5 pb-5 lg:mx-auto lg:flex lg:w-full lg:max-w-5xl lg:justify-between lg:px-0"
    >
      <FormProvider {...cartForm}>
        <div className="flex-1">
          <h2 className={`${baloo.className} mt-5 text-lg text-base-subtitle`}>
            Complete seu pedido
          </h2>
          <div className="mt-5 max-w-[90vw] rounded-md bg-base-card p-5">
            <div className="flex gap-1">
              <MapPin className="text-yellow-dark" size={22} />
              <div className="flex flex-col">
                <h3 className="font-bold text-base-subtitle">
                  Endereço de Entrega
                </h3>
                <p className="text-base-text">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </div>

            <CartForm />
          </div>
        </div>

        <div className="lg:w-[45%]">
          <h2 className={`${baloo.className} mt-5 text-lg text-base-subtitle`}>
            Cafés selecionados
          </h2>

          <Cart />
        </div>
      </FormProvider>
    </form>
  )
}
