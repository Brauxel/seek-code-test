import { screen } from '@testing-library/react'
import { render } from 'src/testUtils/customTestingLibrary'
import { Cart } from '../Cart'

describe('Cart Component', () => {
  beforeEach(() => {
    render(<Cart />)
  })

  it('should render on page', () => {
    expect(screen.getByText('Cart')).toBeInTheDocument()
  })

  it('should show classic ads price on page', () => {
    expect(
      screen.getByText('Cart: Classic Ad * 3 = $809.97')
    ).toBeInTheDocument()
  })

  it('should show Stand Out ads price on page', () => {
    expect(
      screen.getByText('Cart: Stand Out Ad * 5 = $1614.95')
    ).toBeInTheDocument()
  })

  it('should show Premium ads price on page', () => {
    expect(
      screen.getByText('Cart: Premium Ad * 1 = $394.99')
    ).toBeInTheDocument()
  })
})
