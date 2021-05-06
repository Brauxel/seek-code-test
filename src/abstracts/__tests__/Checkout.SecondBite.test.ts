import { cartData } from 'src/mockData/cartData'
import { pricingRules } from 'src/mockData/pricingRules'
import { products } from 'src/mockData/products'
import CheckoutObject from '../Checkout'

describe('Checkout Class with a SecondBite Customer type', () => {
  let checkout: CheckoutObject

  beforeEach(() => {
    checkout = new CheckoutObject(pricingRules, 'SecondBite', products)
    jest.spyOn(checkout, 'generateProductPrice')
    jest.spyOn(checkout, 'generateTotal')
  })

  it('should calculate correct price for Classic Ad', () => {
    expect(checkout.generateProductPrice(1, cartData)).toEqual(539.98)
  })

  it('should calculate correct price for Stand Out Ad', () => {
    expect(checkout.generateProductPrice(2, cartData)).toEqual(1614.95)
  })

  it('should calculate correct price for Premium Ad', () => {
    expect(checkout.generateProductPrice(3, cartData)).toEqual(394.99)
  })

  it('should calculate the total', () => {
    expect(checkout.generateTotal(cartData)).toEqual(2549.92)
  })
})
