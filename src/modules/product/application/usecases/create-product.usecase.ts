import { Product } from "modules/product/domain/entities/product.entity";
import { ProductRepository } from "modules/product/domain/repositories/product.repository";
import { UseCase } from "shared/application/usecases/use-case";

type Input = {
  name: string;
  price: number;
  description?: string
}

export type Output = {
  id: string;
};

export class CreateProductUseCase implements UseCase<Input, Output> {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(input: Input): Promise<Output> {
    const product = Product.create(input);

    await this.productRepository.create(product);

   return this.toOutput(product);
  }

  private toOutput(product: Product): Output {
    return {
      id: product.id
    }
  }
}