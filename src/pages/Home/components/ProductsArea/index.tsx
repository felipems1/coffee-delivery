import { ShoppingCartSimple } from '@phosphor-icons/react'

import {
  AreaProducts,
  Cart,
  Product,
  ProductAreaPrice,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductsContainer,
  Title,
} from './styles'
import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
import { Counter } from '../../../../components/Counter'
import { ProductsContext } from '../../../../contexts/ProductsContext'

export function ProductsArea() {
  const { addProductCart } = useContext(OrderContext)
  const { products, changeProduct } = useContext(ProductsContext)

  return (
    <ProductsContainer>
      <Title>Nossos cafés</Title>
      <AreaProducts>
        {products.map((product, index) => (
          <Product key={product.id}>
            <ProductImage src={product.image} alt="" />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductAreaPrice>
              <ProductPrice>
                <span>R$</span>
                <span>{product.price.toFixed(2).replace('.', ',')}</span>
              </ProductPrice>
              <Counter
                index={index}
                productQt={product.qt}
                changeProduct={changeProduct}
              />
              <Cart onClick={() => addProductCart(product)}>
                <ShoppingCartSimple weight="fill" />
              </Cart>
            </ProductAreaPrice>
          </Product>
        ))}
      </AreaProducts>
    </ProductsContainer>
  )
}
