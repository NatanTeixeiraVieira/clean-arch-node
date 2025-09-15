import { UseCase } from "../../../../shared/application/usecases/use-case";
import { FindAllProducts, ProductQuery } from "../queries/product.query";

type Input = undefined;

export type Output = FindAllProducts

export class FindAllProductsUseCase implements UseCase<Input, Output> {
  constructor(
    private readonly productQuery: ProductQuery,
  ) {}

  async execute(): Promise<FindAllProducts> {
    const products = await this.productQuery.findAll();

    return products;
  }
}