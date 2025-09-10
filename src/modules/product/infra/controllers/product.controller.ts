import { CreateProductUseCase } from "modules/product/application/usecases/create-product.usecase";
import { CreateProductDto } from "../dtos/create-product.dto";
import { CreateProductPresenter } from "../presenters/create-product.presenter";

export class ProductController {
  constructor(private readonly createProductUseCase: CreateProductUseCase) {}

  async createProduct(createProductDto: CreateProductDto): Promise<CreateProductPresenter> {
    const output = await this.createProductUseCase.execute(createProductDto);
    return new CreateProductPresenter(output);
  }
}