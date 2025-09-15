import { UseCase } from "../../../../shared/application/usecases/use-case";
import { ProductRepository } from "../../domain/repositories/product.repository";

export type Input = {
  productId: string;
  name: string;
  price: number;
  description?: string
}

export type Output = void;

export class UpdateProductUseCase implements UseCase<Input, Output> {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute({productId, name, price, description}: Input): Promise<void> {
    const product = await this.productRepository.findById(productId);

    if(!product) {
      throw new Error('Product not found');
    }

    product.update({ name, price, description });

    await this.productRepository.update(product);
  }
}