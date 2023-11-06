import { produce } from 'immer'
import { Product } from '../../types/product'
import { ActionTypes } from './actions'

interface ProductsState {
  products: Product[]
}

interface ProductsAction {
  type: ActionTypes
  payload: {
    index: number
    type: string
  }
}

export function productsReducer(state: ProductsState, action: ProductsAction) {
  switch (action.type) {
    case ActionTypes.CHANGE_PRODUCT:
      return produce(state, (draft) => {
        if (draft.products[action.payload.index]) {
          switch (action.payload.type) {
            case '-':
              if (draft.products[action.payload.index].qt > 1) {
                draft.products[action.payload.index].qt--
              }
              break
            case '+':
              draft.products[action.payload.index].qt++
              break
          }
        }
      })
    default:
      return state
  }
}
