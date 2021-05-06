import { cartData } from 'src/mockData/cartData'
import { pricingRules } from 'src/mockData/pricingRules'
import { products } from 'src/mockData/products'
import CheckoutObject from '../Checkout'

describe('Checkout Class with a MYER Customer type', () => {
  let checkout: CheckoutObject

  beforeEach(() => {
    checkout = new CheckoutObject(pricingRules, 'MYER', products)
    jest.spyOn(checkout, 'generateProductPrice')
    jest.spyOn(checkout, 'generateTotal')
  })

  it('should calculate correct price for Classic Ad', () => {
    expect(checkout.generateProductPrice(1, cartData)).toEqual(809.97)
  })

  it('should calculate correct price for Stand Out Ad', () => {
    expect(checkout.generateProductPrice(2, cartData)).toEqual(1291.96)
  })

  it('should calculate correct price for Premium Ad', () => {
    expect(checkout.generateProductPrice(3, cartData)).toEqual(389.99)
  })

  it('should calculate the total', () => {
    expect(checkout.generateTotal(cartData)).toEqual(2491.92)
  })
})
