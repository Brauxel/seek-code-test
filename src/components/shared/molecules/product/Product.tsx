import { ChangeEvent, useContext, useState } from 'react'
import { CartContext } from 'src/components/shared/contexts/CartContext'
import { Product as ProductType } from 'src/components/shared/models/Products'
import { Button } from '../../atoms/button/Button'
import { Card } from '../../atoms/card/Card'
import { Label } from '../../atoms/label/Label'

interface Props {
  product: ProductType
}

export const Product: React.FC<Props> = ({ product }) => {
  const [currentQty, setCurrentQty] = useState(0)
  const { addItem } = useContext(CartContext)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentQty(Number(event.target.value))
  }

  const handleAddClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()

    if (currentQty > 0)
      addItem({
        name: product.name,
        productId: product.id,
        quantity: currentQty,
        price: product.price,
      })

    setCurrentQty(0)
  }

  return (
    <Card>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>

      <Label htmlFor={product.name}>{`Enter no of ${product.name}s`}</Label>

      <input
        id={product.id.toString()}
        type="number"
        placeholder={`Enter no of ${product.name}s`}
        name={product.name}
        min="0"
        value={currentQty}
        onChange={handleChange}
      />

      <Button type="submit" appearance="primary" onClick={handleAddClick}>
        Add To Cart
      </Button>
    </Card>
  )
}
