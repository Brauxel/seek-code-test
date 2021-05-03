import { useContext } from 'react'
import { CartContext } from 'src/components/contexts/CartContext'
import { Button } from '../../atoms/button/Button'
import './Cart.scss'

export const Cart = () => {
  const { items } = useContext(CartContext)

  return (
    <div className="cart">
      {items.length === 0
        ? 'No items currently in the cart'
        : items.map((item) => (
            <div key={item.productId} className="cart__item">
              <div className="cart__item__info">
                Cart: {item.name} * {item.quantity} = $
                {item.quantity * item.price}
              </div>

              <Button appearance="secondary">Remove Item</Button>
            </div>
          ))}
    </div>
  )
}
