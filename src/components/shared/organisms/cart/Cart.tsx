import { useContext } from 'react'
import { CartContext } from 'src/components/contexts/CartContext'

export const Cart = () => {
  const { items } = useContext(CartContext)

  return (
    <div className="cart">
      <h2>Cart has {items.length} items</h2>
      <p>Cart: Classic Ads: 3 * $269.99 = xx</p>
      <p>Cart: Stand Out Ads: 3 * $269.99 = xx</p>
      <p>Cart: Premium Ads: 3 * $269.99 = xx</p>
      <p>Total: xx</p>
    </div>
  )
}
