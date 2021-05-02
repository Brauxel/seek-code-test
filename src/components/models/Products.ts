import { Id } from './base'

interface Product {
  id: Id
  name: string
  description: string
  price: number
}

export type Products = Product[]
