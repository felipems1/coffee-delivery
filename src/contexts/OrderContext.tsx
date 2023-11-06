import { createContext, ReactNode, useReducer } from 'react'
import { Product } from '../types/product'
import { orderReducer } from '../reducers/order/reducer'
import { ActionTypes } from '../reducers/order/actions'
import { InfoDelivery } from '../types/infoDelivery'

interface OrderContextType {
  cart: Product[]
  infoDelivery: InfoDelivery | null
  addProductCart: (data: Product) => void
  removeProductCart: (index: number) => void
  changeProductCart: (index: number, type: string) => void
  addInfoDelivery: (data: InfoDelivery) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderState, dispatch] = useReducer(orderReducer, {
    cart: [],
    infoDelivery: null,
  })

  const { cart, infoDelivery } = orderState

  function addProductCart(data: Product) {
    dispatch({
      type: ActionTypes.ADD_PRODUCT_CART,
      payload: {
        product: data,
      },
    })
  }

  function changeProductCart(index: number, type: string) {
    dispatch({
      type: ActionTypes.CHANGE_PRODUCT_CART,
      payload: {
        index,
        type,
      },
    })
  }

  function removeProductCart(index: number) {
    dispatch({
      type: ActionTypes.REMOVE_PRODUCT_CART,
      payload: {
        index,
      },
    })
  }

  function addInfoDelivery(data: InfoDelivery) {
    dispatch({
      type: ActionTypes.ADD_INFO_DELIVERY,
      payload: {
        infoDelivery: data,
      },
    })
  }

  return (
    <OrderContext.Provider
      value={{
        cart,
        infoDelivery,
        addInfoDelivery,
        addProductCart,
        removeProductCart,
        changeProductCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
