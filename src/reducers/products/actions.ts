export enum ActionTypes {
  CHANGE_PRODUCT = 'CHANGE_PRODUCT',
}

export function changeProductAction(index: number, type: string) {
  return {
    type: ActionTypes.CHANGE_PRODUCT,
    payload: {
      index,
      type,
    },
  }
}
