import { createContext, useReducer, useCallback } from 'react'
import { Action, ActionTypes, CartItems } from '../models/Cart'
import { ProductPayload } from '../models/Products'

interface Props {
  children: React.ReactNode
}

interface CartContextProps {
  items: CartItems
  addItems: ({ productId, quantity }: ProductPayload) => void
  removeItems: ({ productId, quantity }: ProductPayload) => void
}

export const CartContext = createContext({} as CartContextProps)

const reducer = (state: CartItems, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
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
    case ActionTypes.REMOVE_ITEM:
      return [...state]
    default:
      return state
  }
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [items, dispatch] = useReducer(reducer, [])

  const addItems = useCallback(
    (payload) => {
      dispatch({
        type: ActionTypes.ADD_ITEM,
        payload,
      })
    },
    [dispatch]
  )

  const removeItems = useCallback(
    (payload) => {
      dispatch({
        type: ActionTypes.REMOVE_ITEM,
        payload,
      })
    },
    [dispatch]
  )

  const value = { items, addItems, removeItems }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
