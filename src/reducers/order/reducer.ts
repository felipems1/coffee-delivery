import { produce } from 'immer'
import { Product } from '../../types/product'
import { ActionTypes, OrderActions } from './actions'
import { InfoDelivery } from '../../types/infoDelivery'
import { toast } from 'react-toastify'

interface OrderState {
  cart: Product[]
  infoDelivery: InfoDelivery | null
}

export function orderReducer(state: OrderState, action: OrderActions) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_CART:
      return produce(state, (draft) => {
        const product = action.payload.product

        const isProductInCart = state.cart.some(
          (item) => item.id === product.id,
        )

        if (isProductInCart) {
          draft.cart.map((cartProduct) => {
            if (cartProduct.id === product.id) {
              return {
                ...cartProduct,
                qt: (cartProduct.qt += product.qt),
              }
            }

            return cartProduct
          })

          return
        }

        draft.cart.push(product)
        toast.success('Produto adicionado no carrinho.')
      })
    case ActionTypes.REMOVE_PRODUCT_CART:
      return produce(state, (draft) => {
        draft.cart = draft.cart.filter(
          (__product, index) => index !== action.payload.index,
        )
      })
    case ActionTypes.CHANGE_PRODUCT_CART:
      return produce(state, (draft) => {
        if (draft.cart[action.payload.index]) {
          switch (action.payload.type) {
            case '-':
              if (draft.cart[action.payload.index].qt > 1) {
                draft.cart[action.payload.index].qt--
              } else {
                draft.cart.splice(action.payload.index, 1)
              }
              break
            case '+':
              draft.cart[action.payload.index].qt++
              break
          }
        }
      })
    case ActionTypes.ADD_INFO_DELIVERY:
      return produce(state, (draft) => {
        draft.infoDelivery = action.payload.infoDelivery
        draft.cart = []
      })
    default:
      return state
  }
}
