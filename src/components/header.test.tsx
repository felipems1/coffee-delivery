import { render, screen } from '@testing-library/react'
import { Header } from './header'

jest.mock('./cart-icon', () => ({
  CartIcon: () => <div data-testid="cart-icon">Cart Icon</div>,
}))

describe('Header', () => {
  it('renders the logo, location and cart icon', () => {
    render(<Header />)

    const logo = screen.getByAltText('Logo do coffee delivery')
    expect(logo).toBeTruthy()

    const location = screen.getByText('João Pessoa, PB')
    expect(location).toBeTruthy()

    const cartIcon = screen.getByTestId('cart-icon')
    expect(cartIcon).toBeTruthy()
  })
})
