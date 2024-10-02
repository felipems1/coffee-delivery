import { render, screen } from '@testing-library/react'
import { CartContext } from '../contexts/cart'
import { CartIcon } from './cart-icon'

const mockProduct = {
  id: 1,
  name: 'Café Especial',
  description: 'Café de alta qualidade.',
  price: 10,
  tag: 'Novo',
  image: 'https://example.com/cafe.jpg',
  quantity: 1,
}

describe('CartIcon', () => {
  const mockCartContextValue = {
    products: [mockProduct],
    totalPrice: 0,
    subtotalPrice: 0,
    delivery: 0,
    addProductToCart: jest.fn(),
    decreaseProductQuantity: jest.fn(),
    increaseProductQuantity: jest.fn(),
    clearCart: jest.fn(),
    removeProductFromCart: jest.fn,
  }

  beforeEach(() => {
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <CartIcon />
      </CartContext.Provider>,
    )
  })

  it('should render cart icon', () => {
    expect(screen.getByRole('link')).toBeTruthy()
  })

  it('it should show the number of products in the cart', () => {
    expect(screen.getByText('1')).toBeTruthy()
  })
})
