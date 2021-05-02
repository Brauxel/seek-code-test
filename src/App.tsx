import { Button } from './components/shared/atoms/button/Button'
import { Card } from './components/shared/atoms/card/Card'
import { FlexBox } from './components/shared/atoms/flexBox/FlexBox'
import { Input } from './components/shared/atoms/input/Input'
import { Label } from './components/shared/atoms/label/Label'
import { Cart } from './components/shared/organisms/cart/Cart'
import { CartProvider } from './components/contexts/CartContext'

export const App = () => (
  <CartProvider>
    <FlexBox>
      <Card>
        <p>Classic Ads offer the most basic level of advertisement</p>
        <p>$269.99</p>

        <Label htmlFor="classic-ad">Classic Ads</Label>

        <Input
          id="classic-ad"
          type="number"
          placeholder="Enter no of classic ads"
          name="classic-ad"
        />

        <Button appearance="secondary">Add To Cart</Button>
      </Card>

      <Card>
        <p>
          Allows advertisers to use a company logo and use a longer presentation
          text
        </p>
        <p>$322.99</p>

        <Label htmlFor="stand-out-ad">Stand Out Ads</Label>

        <Input
          id="stand-out-ad"
          type="number"
          placeholder="Enter no of stand out ads"
          name="stand-out-ad"
        />

        <Button appearance="secondary">Add To Cart</Button>
      </Card>

      <Card>
        <p>
          Same benefits as Standout Ad, but also puts the advertisement at the
          top of the results, allowing higher visibility
        </p>
        <p>$394.99</p>

        <Label htmlFor="premium-ad">Premium Ads</Label>

        <Input
          id="premium-ad"
          type="number"
          placeholder="Enter no of classic ads"
          name="premium-ad"
        />

        <Button appearance="secondary">Add To Cart</Button>
      </Card>
    </FlexBox>

    <Cart />
  </CartProvider>
)
