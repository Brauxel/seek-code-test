import { Cart } from './components/shared/organisms/cart/Cart'
import { CartProvider } from './components/contexts/CartContext'
import { ProductList } from './components/shared/organisms/productList/ProductList'
import { products } from './mockData/products'

export const App = () => (
  <CartProvider>
    <ProductList products={products} />
    <Cart />
  </CartProvider>
)
