'use client'

import {
  CircleDollarSign,
  CreditCard,
  DollarSign,
  Landmark,
} from 'lucide-react'
import { useFormContext } from 'react-hook-form'

export function CartForm() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const paymentSelected = watch('payment')

  return (
    <div>
      <div className="mt-5 grid grid-cols-1 gap-2">
        <input
          type="text"
          placeholder="CEP"
          className={`rounded-md bg-base-button px-2 py-3 outline-none ${errors.cep && 'border border-red-500'}`}
          {...register('cep', { required: true })}
        />
        <input
          type="text"
          placeholder="Rua"
          className={`rounded-md bg-base-button px-2 py-3 outline-none ${errors.road && 'border border-red-500'}`}
          {...register('road', { required: true })}
        />
        <input
          type="text"
          placeholder="Número"
          className={`rounded-md bg-base-button px-2 py-3 outline-none ${errors.number && 'border border-red-500'}`}
          {...register('number', { required: true })}
        />
        <input
          type="text"
          placeholder="Bairro"
          className={`rounded-md bg-base-button px-2 py-3 outline-none ${errors.neighborhood && 'border border-red-500'}`}
          {...register('neighborhood', { required: true })}
        />
        <div className="flex w-full justify-between gap-3">
          <input
            type="text"
            placeholder="Cidade"
            className={`w-full max-w-[80%] rounded-md bg-base-button px-2 py-3 outline-none ${errors.city && 'border border-red-500'}`}
            {...register('city', { required: true })}
          />
          <input
            type="text"
            placeholder="UF"
            className={`max-w-[20%] rounded-md bg-base-button px-2 py-3 outline-none ${errors.state && 'border border-red-500'}`}
            {...register('state', { required: true })}
          />
        </div>
        <input
          type="text"
          placeholder="Complemento"
          className={`rounded-md bg-base-button px-2 py-3 outline-none ${errors.complement && 'border border-red-500'}`}
          {...register('complement', { required: true })}
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-2">
        <div className="flex gap-1">
          <DollarSign className="text-purple" size={22} />
          <div className="flex flex-col">
            <h3 className="font-bold text-base-subtitle">Pagamento</h3>
            <p className="text-base-text">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <label
            htmlFor="credito"
            className={`flex cursor-pointer items-center gap-2 rounded-md bg-base-button p-4 lg:w-full ${paymentSelected === 'credito' && 'border border-purple'} ${errors.payment && 'border border-red-500'}`}
          >
            <input
              type="radio"
              id="credito"
              value="credito"
              {...register('payment', { required: true })}
              className="hidden"
            />
            <CreditCard className="text-purple" size={18} />
            <span className="uppercase text-base-text lg:text-xs">
              Cartão de crédito
            </span>
          </label>

          <label
            htmlFor="debito"
            className={`flex cursor-pointer items-center gap-2 rounded-md bg-base-button p-4 lg:w-full ${paymentSelected === 'debito' && 'border border-purple'} ${errors.payment && 'border border-red-500'}`}
          >
            <input
              type="radio"
              id="debito"
              value="debito"
              {...register('payment', { required: true })}
              className="hidden"
            />
            <Landmark className="text-purple" size={18} />
            <span className="uppercase text-base-text lg:text-xs">
              Cartão de débito
            </span>
          </label>

          <label
            htmlFor="dinheiro"
            className={`flex cursor-pointer items-center gap-2 rounded-md bg-base-button p-4 lg:w-full ${paymentSelected === 'dinheiro' && 'border border-purple'} ${errors.payment && 'border border-red-500'}`}
          >
            <input
              type="radio"
              id="dinheiro"
              value="dinheiro"
              {...register('payment', { required: true })}
              className="hidden"
            />
            <CircleDollarSign className="text-purple" size={18} />
            <span className="uppercase text-base-text lg:text-xs">
              Dinheiro
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}
