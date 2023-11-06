import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  DeliveryDescription,
  DeliveryFinishContainer,
  DeliveryImg,
  DeliveryInfo,
  DeliveryTitle,
  OrderArea,
  OrderDescription,
  OrderIcon,
  OrderInfo,
} from './styles'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import illustration from '../../assets/illustration.png'

export function OrderFinished() {
  const { infoDelivery } = useContext(OrderContext)

  return (
    <DeliveryFinishContainer>
      <DeliveryTitle>Uhu! Pedido confirmado</DeliveryTitle>
      <DeliveryDescription>
        Agora é só aguardar que logo o café chegará até você
      </DeliveryDescription>
      <DeliveryInfo>
        <OrderArea>
          <OrderInfo>
            <OrderIcon $icon="local">
              <MapPin weight="fill" />
            </OrderIcon>
            <OrderDescription>
              Entrega em <b>Rua {infoDelivery?.road}</b>, {infoDelivery?.number}{' '}
              <br /> {infoDelivery?.neighborhood} - {infoDelivery?.city},{' '}
              {infoDelivery?.uf}
            </OrderDescription>
          </OrderInfo>
          <OrderInfo>
            <OrderIcon $icon="time">
              <Timer weight="fill" />
            </OrderIcon>
            <OrderDescription>
              Previsão de entrega <br /> 20 min - 30 min
            </OrderDescription>
          </OrderInfo>
          <OrderInfo>
            <OrderIcon $icon="payment">
              <CurrencyDollar />
            </OrderIcon>
            <OrderDescription>
              Pagamento na entrega <br /> <b>{infoDelivery?.paymentOption}</b>
            </OrderDescription>
          </OrderInfo>
        </OrderArea>
        <DeliveryImg src={illustration} />
      </DeliveryInfo>
    </DeliveryFinishContainer>
  )
}
