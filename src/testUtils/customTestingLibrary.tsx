import { cartData } from 'src/mockData/cartData'
import { CartProvider } from 'src/components/shared/contexts/CartContext'
import { render, RenderOptions } from '@testing-library/react'

const AllTheProviders: React.FC = ({ children }) => {
  return <CartProvider values={cartData}>{children}</CartProvider>
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
