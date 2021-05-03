import { ProductPayload } from './Products'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export interface Action {
  type: ActionTypes
  payload: ProductPayload
}

export type CartItems = ProductPayload[]
