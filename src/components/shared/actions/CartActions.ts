import { Id } from '../models/base'
import { ProductPayload } from '../models/Products'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export const addItemToCart = (payload: ProductPayload) => ({
  type: ActionTypes.ADD_ITEM,
  payload,
})

export const removeItemFromCart = (profileId: Id) => ({
  type: ActionTypes.REMOVE_ITEM,
  payload: profileId,
})

export type CartActionTypes = ReturnType<
  typeof addItemToCart | typeof removeItemFromCart
>

export interface Action {
  type: string
}

export interface RemoveActionPayload extends Action {
  payload: Id
}

export interface AddActionPayload extends Action {
  payload: ProductPayload
}
