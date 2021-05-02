import { Product as ProductType } from 'src/components/models/Products'
import { Button } from '../../atoms/button/Button'
import { Card } from '../../atoms/card/Card'
import { Input } from '../../atoms/input/Input'
import { Label } from '../../atoms/label/Label'

interface Props {
  product: ProductType
}

export const Product: React.FC<Props> = ({ product }) => (
  <Card key={product.id}>
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p>${product.price}</p>

    <Label htmlFor={product.name}>{`Enter no of ${product.name}s`}</Label>

    {/* NOTE: Please note, I understand ideally we'd create a controlled form element but for the sake of expediency I have chosen to implement an uncontrolled element. */}
    <Input
      id={product.id.toString()}
      type="number"
      placeholder={`Enter no of ${product.name}s`}
      name={product.name}
      min="0"
    />

    <Button type="submit" appearance="secondary" value={product.id}>
      Add To Cart
    </Button>
  </Card>
)
