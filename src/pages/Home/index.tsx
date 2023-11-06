import { InfoArea } from './components/InfoArea'
import { ProductsArea } from './components/ProductsArea'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <InfoArea />
      <ProductsArea />
    </HomeContainer>
  )
}
