import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductCounter } from './product-counter'

describe('ProductCounter', () => {
  const mockIncreaseQuantityClick = jest.fn()
  const mockDecreaseQuantityClick = jest.fn()

  beforeEach(() => {
    render(
      <ProductCounter
        quantity={1}
        increaseQuantityClick={mockIncreaseQuantityClick}
        decreaseQuantityClick={mockDecreaseQuantityClick}
      />,
    )
  })

  it('should render the quantity correctly', () => {
    expect(screen.getByText('1')).toBeTruthy()
  })

  it('should call increaseQuantityClick when increase button is clicked', async () => {
    const user = userEvent.setup()

    await user.click(screen.getByLabelText('Increase quantity'))

    expect(mockIncreaseQuantityClick).toHaveBeenCalledTimes(1)
  })

  it('should call decreaseQuantityClick when decrease button is clicked', async () => {
    const user = userEvent.setup()

    await user.click(screen.getByLabelText('Decrease quantity'))

    expect(mockDecreaseQuantityClick).toHaveBeenCalledTimes(1)
  })
})
