import {
  PaymentContainer,
  PaymentHeader,
  PaymentOption,
  PaymentOptions,
} from './styles'
import { useFormContext } from 'react-hook-form'

import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'

export function PaymentCard() {
  const { register, watch } = useFormContext()

  const paymentSelected = watch('paymentOption')

  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollar />
        <div>
          <h3>Pagamento</h3>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </PaymentHeader>
      <PaymentOptions>
        <PaymentOption
          htmlFor="dinheiro"
          $payment={paymentSelected === 'dinheiro'}
        >
          <input
            type="radio"
            id="dinheiro"
            value="dinheiro"
            {...register('paymentOption')}
          />
          <Money />
          <span>Dinheiro</span>
        </PaymentOption>
        <PaymentOption
          htmlFor="cartão crédito"
          $payment={paymentSelected === 'cartão crédito'}
        >
          <input
            type="radio"
            id="cartão crédito"
            value="cartão crédito"
            {...register('paymentOption')}
          />
          <CreditCard />
          <span>Cartão de crédito</span>
        </PaymentOption>
        <PaymentOption
          htmlFor="cartão débito"
          $payment={paymentSelected === 'cartão débito'}
        >
          <input
            type="radio"
            id="cartão débito"
            value="cartão débito"
            {...register('paymentOption')}
          />
          <Bank />
          <span>Cartão de débito</span>
        </PaymentOption>
      </PaymentOptions>
    </PaymentContainer>
  )
}
