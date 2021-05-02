import { Products } from 'src/components/models/Products'
import { Button } from '../../atoms/button/Button'
import { Card } from '../../atoms/card/Card'
import { FlexBox } from '../../atoms/flexBox/FlexBox'
import { Input } from '../../atoms/input/Input'
import { Label } from '../../atoms/label/Label'

interface Props {
  products: Products
}

export const ProductList: React.FC<Props> = ({ products }) => (
  <>
    <FlexBox>
      {products.map((product) => (
        <Card key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>

          <Label htmlFor="classic-ad">{`Enter no of ${product.name}s`}</Label>

          <Input
            id={product.id.toString()}
            type="number"
            placeholder={`Enter no of ${product.name}s`}
            name={product.name}
          />

          <Button appearance="secondary">Add To Cart</Button>
        </Card>
      ))}
    </FlexBox>
  </>
)
