import { UseCase } from "../../../../shared/application/usecases/use-case";
import { ProductRepository } from "../../domain/repositories/product.repository";

export type Input = {
  productId: string;
  stock: number;
}

export type Output = void;

export class IncreaseProductStockUseCase implements UseCase<Input, Output> {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(input: Input): Promise<void> {
    const product = await this.productRepository.findById(input.productId);

    if(!product) {
      throw new Error('Product not found');
    }

    product.increaseStock(input.stock);

    await this.productRepository.update(product);
  }
}