import { FormProvider, useForm } from 'react-hook-form'
import { AddressCard } from './components/AddressCard'
import { CoffeeCard } from './components/CoffeeCard'
import { PaymentCard } from './components/PaymentCard'
import { CartArea, CheckoutContainer, DeliveryArea, Title } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const addressFormValidationSchema = z.object({
  cep: z.number(),
  road: z.string().nonempty(),
  number: z.number(),
  complement: z.string(),
  neighborhood: z.string().nonempty(),
  city: z.string().nonempty(),
  uf: z.string().nonempty(),
  paymentOption: z.enum(['cartão crédito', 'cartão débito', 'dinheiro']),
})

type AddressFormData = z.infer<typeof addressFormValidationSchema>

export function Checkout() {
  const { addInfoDelivery } = useContext(OrderContext)

  const navigate = useNavigate()

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: undefined,
      city: '',
      complement: '',
      neighborhood: '',
      number: undefined,
      road: '',
      uf: '',
      paymentOption: 'dinheiro',
    },
  })

  const { handleSubmit } = addressForm

  function handleFinishOrder(data: AddressFormData) {
    addInfoDelivery(data)
    toast.success('Pedido concluído!')
    navigate('/success')
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleFinishOrder)}>
      <FormProvider {...addressForm}>
        <DeliveryArea>
          <Title>Complete seu pedido</Title>
          <AddressCard />
          <PaymentCard />
        </DeliveryArea>
        <CartArea>
          <Title>Cafés selecionados</Title>
          <CoffeeCard />
        </CartArea>
      </FormProvider>
    </CheckoutContainer>
  )
}
