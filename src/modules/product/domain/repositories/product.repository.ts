import { Product } from "../entities/product.entity";

export interface ProductRepository {
  findById(id: string): Promise<Product | null>
  create(product: Product): Promise<void>
  update(product: Product): Promise<void>
}