import logo from '../../assets/logo.svg'

import { useContext } from 'react'

import {
  CartArea,
  CartCounter,
  HeaderContainer,
  HeaderInfo,
  LocalContent,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { OrderContext } from '../../contexts/OrderContext'

export function Header() {
  const navigate = useNavigate()

  const { cart } = useContext(OrderContext)

  function handleNavigateCart() {
    navigate('/checkout')
  }

  return (
    <HeaderContainer>
      <img src={logo} alt="" onClick={() => navigate('/')} />
      <HeaderInfo>
        <LocalContent>
          <MapPin weight="fill" />
          <h1>João Pessoa, PB</h1>
        </LocalContent>
        <CartArea onClick={handleNavigateCart}>
          <ShoppingCart weight="fill" />
          {cart.length > 0 && <CartCounter>{cart.length}</CartCounter>}
        </CartArea>
      </HeaderInfo>
    </HeaderContainer>
  )
}
