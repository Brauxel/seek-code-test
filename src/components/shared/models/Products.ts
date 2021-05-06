import { Id } from './base'

interface ProductAttributes {
  name: string
  price: number
  description?: string
}
export interface Product extends ProductAttributes {
  id: Id
}

export interface ProductPayload extends ProductAttributes {
  productId: Id
  quantity: number
}

export type Products = Product[]
