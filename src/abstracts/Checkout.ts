import { Id } from 'src/components/shared/models/base'
import { CartItems } from 'src/components/shared/models/Cart'
import { PricingRule } from 'src/components/shared/models/pricingRules'
import { Products } from 'src/components/shared/models/Products'
import { BUY_FOR_PRICE, QUANTITY_FOR_QUANTITY } from 'src/mockData/pricingRules'

export default class CheckoutObject {
  readonly pricingRules: PricingRule[]

  readonly customerType: string

  readonly products: Products

  constructor(
    pricingRules: PricingRule[],
    customerType: string,
    products: Products
  ) {
    this.pricingRules = pricingRules
    this.customerType = customerType
    this.products = products
  }

  generateProductPrice(id: Id, cart: CartItems) {
    const lineItem = cart.find(({ productId }) => productId === id)
    if (!lineItem) return 0

    const relevantPricingRule = this.pricingRules.find(
      ({ customerType, productId }) =>
        customerType === this.customerType && productId === id
    )

    const product = this.products.find(({ id: productId }) => productId === id)

    if (!relevantPricingRule)
      return product?.price ? product?.price * lineItem.quantity : 0

    switch (relevantPricingRule.discount.type) {
      case BUY_FOR_PRICE:
        return lineItem.quantity * relevantPricingRule.discount.forNumber
      case QUANTITY_FOR_QUANTITY: {
        const { buyNumber, forNumber } = relevantPricingRule.discount
        const dividedQuantity = Math.floor(lineItem.quantity / buyNumber)
        const remainingQuantity =
          lineItem.quantity - dividedQuantity * buyNumber

        return product?.price
          ? product?.price * dividedQuantity * forNumber +
              product.price * remainingQuantity
          : 0
      }
      default:
        return product?.price ? product?.price * lineItem.quantity : 0
    }
  }

  generateTotal(cart: CartItems) {
    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
      total += this.generateProductPrice(cart[i].productId, cart)
    }

    return total
  }
}
