import { Id } from './base'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export interface CartItem {
  id: Id
  productId: Id
  quantity: number
}

export type Action = {
  type: ActionTypes
  payload: CartItem
}

export type CartItems = CartItem[]
