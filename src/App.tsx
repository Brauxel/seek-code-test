import { useState } from 'react'
import { Cart } from './components/shared/organisms/cart/Cart'
import { CartProvider } from './components/shared/contexts/CartContext'
import { ProductList } from './components/shared/organisms/productList/ProductList'
import { products } from './mockData/products'
import { Checkout } from './components/shared/organisms/checkout/Checkout'
import { ButtonsRow } from './components/shared/molecules/buttonRow/ButtonsRow'
import CheckoutObject from './abstracts/Checkout'
import { pricingRules } from './mockData/pricingRules'

export const App = () => {
  const [customerType, setCustomerType] = useState('Standard')
  const checkout = new CheckoutObject(pricingRules, customerType, products)

  const handleCustomerTypeChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { value } = e.target as HTMLButtonElement
    if (value) setCustomerType(value)
  }

  const customerTypeButtons = [
    { name: 'Standard', label: 'Standard', value: 'Standard' },
    { name: 'SecondBite', label: 'SecondBite', value: 'SecondBite' },
    {
      name: 'Axil Coffee Roasters',
      label: 'Axil Coffee Roasters',
      value: 'Axil Coffee Roasters',
    },
    { name: 'MYER', label: 'MYER', value: 'MYER' },
  ]

  return (
    <CartProvider>
      <ButtonsRow
        buttons={customerTypeButtons}
        title="Choose a customer type"
        activeButton={customerType}
        onClick={handleCustomerTypeChange}
      />

      <ProductList products={products} />

      <Cart />

      <Checkout checkout={checkout} />
    </CartProvider>
  )
}
