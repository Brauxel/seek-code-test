import {
  Action,
  ActionTypes,
  AddActionPayload,
  CartActionTypes,
  RemoveActionPayload,
} from '../actions/CartActions'
import { CartItems } from '../models/Cart'

// Type Guards to ensure code is adherent to the types of the versatile data passed to cart actions
const isAddTypeAction = (action: Action): action is AddActionPayload =>
  action.type === ActionTypes.ADD_ITEM

const isRemoveTypeAction = (action: Action): action is RemoveActionPayload =>
  action.type === ActionTypes.REMOVE_ITEM

export const CartReducer = (state: CartItems, action: CartActionTypes) => {
  if (isAddTypeAction(action)) {
    if (state.find((item) => item.productId === action.payload.productId)) {
      return state.map((product) => {
        if (action.payload.productId !== product.productId) return product
        return {
          ...product,
          quantity: product.quantity + action.payload.quantity,
        }
      })
    }
    return [...state, action.payload]
  }

  if (isRemoveTypeAction(action)) {
    return state.filter(({ productId }) => productId !== action.payload)
  }

  return state
}
