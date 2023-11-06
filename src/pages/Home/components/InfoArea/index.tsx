import { CoffeeImg, Info, InfoContainer, Item, ItemsContainer } from './styles'

import coffee from '../../../../assets/coffee.png'

import item1 from '../../../../assets/item1.svg'
import item2 from '../../../../assets/item2.svg'
import item3 from '../../../../assets/item3.svg'
import item4 from '../../../../assets/item4.svg'

export function InfoArea() {
  return (
    <InfoContainer>
      <Info>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora.
        </p>
        <ItemsContainer>
          <Item>
            <img src={item1} alt="" />
            <h3>Compra simples e segura</h3>
          </Item>
          <Item>
            <img src={item3} alt="" />
            <h3>Embalagem mantém o café intacto</h3>
          </Item>
          <Item>
            <img src={item2} alt="" />
            <h3>Entrega rápida e rastreada</h3>
          </Item>
          <Item>
            <img src={item4} alt="" />
            <h3>O café chega fresquinho até você</h3>
          </Item>
        </ItemsContainer>
      </Info>
      <CoffeeImg src={coffee} alt="" />
    </InfoContainer>
  )
}
