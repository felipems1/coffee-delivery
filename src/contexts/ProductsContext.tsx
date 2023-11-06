import { createContext, ReactNode, useReducer } from 'react'
import { Product } from '../types/product'
import { products as data } from '../utils/products'
import { productsReducer } from '../reducers/products/reducer'
import { changeProductAction } from '../reducers/products/actions'

interface ProductsContextType {
  products: Product[]
  changeProduct: (index: number, type: string) => void
}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextProviderProps {
  children: ReactNode
}

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [ProductsState, dispatch] = useReducer(productsReducer, {
    products: data,
  })

  const { products } = ProductsState

  function changeProduct(index: number, type: string) {
    dispatch(changeProductAction(index, type))
  }

  return (
    <ProductsContext.Provider value={{ products, changeProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}
