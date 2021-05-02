import { Products } from 'src/components/models/Products'
import { FlexBox } from '../../atoms/flexBox/FlexBox'
import { Product } from '../../molecules/product/Product'

interface Props {
  products: Products
}

export const ProductList: React.FC<Props> = ({ products }) => (
  <>
    <FlexBox>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </FlexBox>
  </>
)
