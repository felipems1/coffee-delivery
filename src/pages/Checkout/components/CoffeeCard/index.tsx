import { Trash } from '@phosphor-icons/react'
import { OrderContext } from '../../../../contexts/OrderContext'
import {
  CoffeeArea,
  CoffeeCardContainer,
  CoffeeImg,
  CoffeePrice,
  CoffeeTitle,
  ButtonRemove,
  CoffeeInfo,
  CoffeeButtons,
  PaymentInfoArea,
  PaymentInfo,
  ButtonFinish,
  IsNoCartProducts,
} from './style'
import { useContext, useMemo, useState } from 'react'
import { Counter } from '../../../../components/Counter'

const shippingPrice = 3.5

export function CoffeeCard() {
  const [valueItems, setValueItems] = useState(0)
  const [valueTotalItems, setValueTotalItems] = useState(0)

  const { cart, changeProductCart, removeProductCart } =
    useContext(OrderContext)

  useMemo(() => {
    const total = cart.reduce((acc, product) => {
      const productTotal = product.qt * product.price
      return acc + productTotal
    }, 0)

    setValueItems(total)
    setValueTotalItems(valueItems - shippingPrice)
  }, [cart, valueItems])

  return (
    <CoffeeCardContainer>
      {cart.length > 0 ? (
        <>
          {cart.map((coffee, index) => (
            <CoffeeArea key={coffee.id}>
              <CoffeeImg src={coffee.image} />
              <CoffeeInfo>
                <CoffeeTitle>{coffee.title}</CoffeeTitle>
                <CoffeeButtons>
                  <Counter
                    index={index}
                    changeProduct={changeProductCart}
                    productQt={coffee.qt}
                  />
                  <ButtonRemove onClick={() => removeProductCart(index)}>
                    <Trash /> <span>remover</span>
                  </ButtonRemove>
                </CoffeeButtons>
              </CoffeeInfo>
              <CoffeePrice>R$ {coffee.price.toFixed(2)}</CoffeePrice>
            </CoffeeArea>
          ))}
          <PaymentInfoArea>
            <PaymentInfo>
              <span>Total de itens</span>
              <span>R$ {valueItems.toFixed(2).replace('.', ',')}</span>
            </PaymentInfo>
            <PaymentInfo>
              <span>Entrega</span>
              <span>R$ {shippingPrice.toFixed(2).replace('.', ',')}</span>
            </PaymentInfo>
            <PaymentInfo>
              <strong>Total</strong>
              <strong>R$ {valueTotalItems.toFixed(2).replace('.', ',')}</strong>
            </PaymentInfo>
          </PaymentInfoArea>
          <ButtonFinish type="submit">confirmar pedido</ButtonFinish>
        </>
      ) : (
        <IsNoCartProducts>Não tem produtos no carrinho!</IsNoCartProducts>
      )}
    </CoffeeCardContainer>
  )
}
