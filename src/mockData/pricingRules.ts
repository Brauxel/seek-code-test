import { PricingRule } from 'src/components/shared/models/pricingRules'

export const BUY_FOR_PRICE = 'buy-for-price'
export const QUANTITY_FOR_QUANTITY = 'quantity-for-quantity'

export const pricingRules: PricingRule[] = [
  {
    customerType: 'SecondBite',
    productId: 1,
    discount: {
      buyNumber: 3,
      forNumber: 2,
      type: QUANTITY_FOR_QUANTITY,
    },
  },
  {
    customerType: 'Axil Coffee Roasters',
    productId: 2,
    discount: {
      buyNumber: 1,
      forNumber: 299.99,
      type: BUY_FOR_PRICE,
    },
  },
  {
    customerType: 'MYER',
    productId: 2,
    discount: {
      buyNumber: 5,
      forNumber: 4,
      type: QUANTITY_FOR_QUANTITY,
    },
  },
  {
    customerType: 'MYER',
    productId: 3,
    discount: {
      buyNumber: 1,
      forNumber: 389.99,
      type: BUY_FOR_PRICE,
    },
  },
]
