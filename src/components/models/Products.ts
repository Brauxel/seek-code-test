import { Id } from './base'

export interface Product {
  id: Id
  name: string
  description: string
  price: number
}

export type Products = Product[]
