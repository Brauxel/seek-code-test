import { Id } from './base'

interface ProductAttributes {
  name: string
  price: number
}
export interface Product extends ProductAttributes {
  id: Id
  description: string
}

export interface ProductPayload extends ProductAttributes {
  productId: Id
  quantity: number
}

export type Products = Product[]
