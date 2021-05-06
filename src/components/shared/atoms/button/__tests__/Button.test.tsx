import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '../Button'

describe('Button Component', () => {
  it('should render on page', () => {
    render(<Button>Test my button</Button>)
    expect(screen.getByText('Test my button')).toBeInTheDocument()
  })

  it('should fire the onClick function passed as a prop', () => {
    const onClickMock = jest.fn()
    render(<Button onClick={onClickMock}>Test onClick</Button>)
    fireEvent.click(screen.getByText('Test onClick'))
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
