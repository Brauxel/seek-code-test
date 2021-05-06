import { createContext, useReducer, useCallback } from 'react'
import { addItemToCart, removeItemFromCart } from '../actions/CartActions'
import { Id } from '../models/base'
import { CartItems } from '../models/Cart'
import { ProductPayload } from '../models/Products'
import { CartReducer } from '../reducers/CartReducer'

interface Props {
  children: React.ReactNode
}

interface CartContextProps {
  items: CartItems
  addItem: ({ productId, quantity }: ProductPayload) => void
  removeItem: (profileId: Id) => void
}

export const CartContext = createContext({} as CartContextProps)

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [items, dispatch] = useReducer(CartReducer, [])

  const addItem = useCallback(
    (payload) => {
      dispatch(addItemToCart(payload))
    },
    [dispatch]
  )

  const removeItem = useCallback(
    (payload) => {
      dispatch(removeItemFromCart(payload))
    },
    [dispatch]
  )

  const value = { items, addItem, removeItem }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
