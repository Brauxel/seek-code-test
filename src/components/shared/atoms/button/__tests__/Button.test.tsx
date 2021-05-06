import { render } from '@testing-library/react'
import { Button } from '../Button'

describe('Button Component', () => {
  it('should render on page', () => {
    render(<Button />)
    expect(1).toBe(1)
  })
})
