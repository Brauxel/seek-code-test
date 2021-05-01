import { Button } from './components/shared/atoms/button/Button'

export const App = () => (
  <div>
    <label htmlFor="classic-ad">
      Classic Ad
      <input id="classic-ad" type="number" />
    </label>

    <Button appearance="secondary">Add To Cart</Button>
  </div>
)
