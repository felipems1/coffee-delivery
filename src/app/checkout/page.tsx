import {
  CircleDollarSign,
  CreditCard,
  DollarSign,
  Landmark,
  MapPin,
  Trash2,
} from 'lucide-react'
import { baloo } from '../layout'
import Image from 'next/image'
import { ProductCounter } from '@/components/product-counter'

export default function CheckoutPage() {
  return (
    <div className="gap-10 px-5 pb-5 lg:mx-auto lg:flex lg:w-full lg:max-w-5xl lg:justify-between lg:px-0">
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

          <div className="mt-5 grid grid-cols-1 gap-2">
            <input
              type="text"
              placeholder="CEP"
              className="rounded-md bg-base-button px-2 py-3 outline-yellow"
            />
            <input
              type="text"
              placeholder="Rua"
              className="rounded-md bg-base-button px-2 py-3 outline-yellow"
            />
            <input
              type="text"
              placeholder="Número"
              className="rounded-md bg-base-button px-2 py-3 outline-yellow"
            />
            <input
              type="text"
              placeholder="Bairro"
              className="rounded-md bg-base-button px-2 py-3 outline-yellow"
            />
            <div className="flex w-full justify-between gap-3">
              <input
                type="text"
                placeholder="Cidade"
                className="w-full max-w-[80%] rounded-md bg-base-button px-2 py-3 outline-yellow"
              />
              <input
                type="text"
                placeholder="UF"
                className="max-w-[20%] rounded-md bg-base-button px-2 py-3 outline-yellow"
              />
            </div>
            <input
              type="text"
              placeholder="Complemento"
              className="rounded-md bg-base-button px-2 py-3 outline-yellow"
            />
          </div>
        </div>

        <div className="mt-5 flex max-w-[90vw] flex-col gap-3 rounded-md bg-base-card p-5">
          <div className="flex gap-1">
            <DollarSign className="text-purple" size={22} />
            <div className="flex flex-col">
              <h3 className="font-bold text-base-subtitle">Pagamento</h3>
              <p className="text-base-text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-3 lg:flex-row">
            <label
              htmlFor=""
              className="flex items-center gap-2 rounded-md bg-base-button p-4 lg:w-full"
            >
              <input type="radio" name="" id="" className="hidden" />
              <CreditCard className="text-purple" size={18} />
              <span className="uppercase text-base-text lg:text-xs">
                Cartão de crédito
              </span>
            </label>

            <label
              htmlFor=""
              className="flex items-center gap-2 rounded-md bg-base-button p-4 lg:w-full"
            >
              <input type="radio" name="" id="" className="hidden" />
              <Landmark className="text-purple" size={18} />
              <span className="uppercase text-base-text lg:text-xs">
                Cartão de crédito
              </span>
            </label>

            <label
              htmlFor=""
              className="flex items-center gap-2 rounded-md bg-base-button p-4 lg:w-full"
            >
              <input type="radio" name="" id="" className="hidden" />
              <CircleDollarSign className="text-purple" size={18} />
              <span className="uppercase text-base-text lg:text-xs">
                Dinheiro
              </span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <h2 className={`${baloo.className} mt-5 text-lg text-base-subtitle`}>
          Cafés selecionados
        </h2>

        <div className="mt-5 max-w-[90vw] rounded-md bg-base-card p-5">
          <div className="flex justify-between border-b border-base-button pb-5">
            <div className="relative h-16 w-16">
              <Image src="/expresso.png" alt="" fill />
            </div>

            <div className="flex flex-col">
              <h2 className="text-base-subtitle">Expresso Tradicional</h2>
              <div className="flex items-center gap-5 rounded-md px-2 py-2">
                <ProductCounter />

                <div className="flex items-center gap-2 rounded-md bg-base-button p-3">
                  <Trash2 className="text-purple" size={16} />
                  <span className="hidden text-xs uppercase lg:block">
                    Remover
                  </span>
                </div>
              </div>
            </div>

            <h2 className="font-bold text-base-text">19,90</h2>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <div className="flex justify-between text-base-text">
              <h2>Total itens</h2>
              <span>R$ 29,00</span>
            </div>

            <div className="flex justify-between text-base-text">
              <h2>Entrega</h2>
              <span>R$ 3,50</span>
            </div>

            <div className="flex justify-between text-xl font-bold text-base-subtitle">
              <h2>Total</h2>
              <span>R$ 25,00</span>
            </div>

            <button className="text-md mt-5 rounded-md bg-yellow py-2 font-semibold uppercase text-white hover:bg-yellow-dark">
              Confirmar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
