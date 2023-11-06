import { InfoDelivery } from '../../types/infoDelivery'
import { Product } from '../../types/product'

export enum ActionTypes {
  ADD_PRODUCT_CART = 'ADD_PRODUCT',
  REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART',
  CHANGE_PRODUCT_CART = 'CHANGE_PRODUCT',
  ADD_INFO_DELIVERY = 'ADD_INFO_DELIVERY',
}

type ActionMap<M> = {
  [Key in keyof M]: {
    type: Key
    payload: M[Key]
  }
}

type OrderPayload = {
  [ActionTypes.ADD_INFO_DELIVERY]: {
    infoDelivery: InfoDelivery
  }
  [ActionTypes.ADD_PRODUCT_CART]: {
    product: Product
  }
  [ActionTypes.CHANGE_PRODUCT_CART]: {
    index: number
    type: string
  }
  [ActionTypes.REMOVE_PRODUCT_CART]: {
    index: number
  }
}

export type OrderActions =
  ActionMap<OrderPayload>[keyof ActionMap<OrderPayload>]
