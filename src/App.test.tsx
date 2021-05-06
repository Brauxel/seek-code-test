import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/select customer Type/i)
  expect(linkElement).toBeInTheDocument()
})
