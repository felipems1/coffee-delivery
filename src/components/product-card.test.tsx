import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductCard } from './product-card'
import { CartContext } from '@/contexts/cart'

const mockProduct = {
  id: 1,
  name: 'Café Especial',
  description: 'Café de alta qualidade.',
  price: 10,
  tag: 'Novo',
  image: 'https://example.com/cafe.jpg',
}

describe('ProductCard', () => {
  const addProductToCart = jest.fn()
  const mockCartContextValue = {
    products: [],
    totalPrice: 0,
    subtotalPrice: 0,
    delivery: 0,
    addProductToCart,
    decreaseProductQuantity: jest.fn(),
    increaseProductQuantity: jest.fn(),
    clearCart: jest.fn(),
    removeProductFromCart: jest.fn,
  }

  beforeEach(() => {
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <ProductCard product={mockProduct} />
      </CartContext.Provider>,
    )
  })

  it('should render the product details', () => {
    expect(screen.getByText(mockProduct.name)).toBeTruthy()
    expect(screen.getByText(mockProduct.description)).toBeTruthy()
    expect(screen.getByText('10,00')).toBeTruthy()
    expect(screen.getByText(mockProduct.tag)).toBeTruthy()
  })

  it('should increase quantity when clicking the increase button', async () => {
    const user = userEvent.setup()

    expect(screen.getByText('1')).toBeTruthy()

    await user.click(screen.getByLabelText('Increase quantity'))

    expect(screen.getByText('2')).toBeTruthy()
  })

  it('should decrease quantity when clicking the decrease button', async () => {
    const user = userEvent.setup()

    await user.click(screen.getByLabelText('Increase quantity'))
    expect(screen.getByText('2')).toBeTruthy()

    await user.click(screen.getByLabelText('Decrease quantity'))

    expect(screen.getByText('1')).toBeTruthy()
  })

  it('should not decrease quantity below 1', async () => {
    const user = userEvent.setup()

    await user.click(screen.getByLabelText('Decrease quantity'))

    expect(screen.getByText('1')).toBeTruthy()
  })

  it('should call addProductToCart when clicking "Add to cart"', async () => {
    const user = userEvent.setup()

    await user.click(screen.getByLabelText('Adicionar produto'))

    expect(addProductToCart).toHaveBeenCalledWith({
      product: { ...mockProduct, quantity: 1 },
    })
    expect(addProductToCart).toHaveBeenCalledTimes(1)
  })
})
