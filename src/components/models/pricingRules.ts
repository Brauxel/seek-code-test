import { Id } from './base'

interface Discount {
  buyNumber: number
  forNumber: number
  type: string
}

export interface PricingRule {
  customerType: string
  productId: Id
  discount: Discount
}
