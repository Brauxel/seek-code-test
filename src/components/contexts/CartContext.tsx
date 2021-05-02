import { createContext, useReducer, useCallback } from 'react'
import { Action, CartItems, ActionTypes, CartItem } from '../models/Cart'

interface Props {
  children: React.ReactNode
}

interface CartContextProps {
  items: CartItems
  addItems: ({ id, quantity }: CartItem) => void
  removeItems: ({ id, quantity }: CartItem) => void
}

export const CartContext = createContext({} as CartContextProps)

const reducer = (state: CartItems, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return [action.payload, ...state]
    case ActionTypes.REMOVE_ITEM:
      return [action.payload, ...state]
    default:
      return state
  }
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [items, dispatch] = useReducer(reducer, [])

  const addItems = useCallback(
    ({ id, productId, quantity }) => {
      dispatch({
        type: ActionTypes.ADD_ITEM,
        payload: { id, productId, quantity },
      })
    },
    [dispatch]
  )

  const removeItems = useCallback(
    ({ id, productId, quantity }) => {
      dispatch({
        type: ActionTypes.REMOVE_ITEM,
        payload: { id, productId, quantity },
      })
    },
    [dispatch]
  )

  const value = { items, addItems, removeItems }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
