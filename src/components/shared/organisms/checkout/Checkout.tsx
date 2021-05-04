import { useContext } from 'react'
import CheckoutObject from 'src/abstracts/Checkout'
import { CartContext } from 'src/components/contexts/CartContext'

interface Props {
  checkout: CheckoutObject
}

export const Checkout: React.FC<Props> = ({ checkout }) => {
  const { items } = useContext(CartContext)

  return (
    <div>
      {items.map((item) => (
        <p key={item.productId}>
          {item.name}: {checkout.generateProductPrice(item.productId, items)}
        </p>
      ))}
    </div>
  )
}
