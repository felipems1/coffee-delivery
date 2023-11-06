import { Minus, Plus } from '@phosphor-icons/react'
import { CoffeeCounter, CoffeeQt } from './styles'

interface CounterProps {
  index: number
  productQt: number
  changeProduct: (index: number, type: string) => void
}

export function Counter({ index, productQt, changeProduct }: CounterProps) {
  return (
    <CoffeeCounter>
      <Minus onClick={() => changeProduct(index, '-')} />
      <CoffeeQt>{productQt}</CoffeeQt>
      <Plus onClick={() => changeProduct(index, '+')} />
    </CoffeeCounter>
  )
}
