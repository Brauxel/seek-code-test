import { useContext } from 'react'
import { CartContext } from 'src/components/contexts/CartContext'

export const Cart = () => {
  const { items } = useContext(CartContext)

  return (
    <div className="cart">
      {items.length === 0
        ? 'No items currently in the cart'
        : items.map((item) => (
            <div key={item.productId}>
              <p>
                Cart: {item.name} * {item.quantity} = $
                {item.quantity * item.price}
              </p>
            </div>
          ))}
    </div>
  )
}
