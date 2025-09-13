import { CreateProductUseCase } from "modules/product/application/usecases/create-product.usecase";
import { CreateProductDto } from "../dtos/create-product.dto";
import { CreateProductPresenter } from "../presenters/create-product.presenter";
import { IncreaseStockDto } from "../dtos/increase-stock.dto";
import { IncreaseStockUseCase } from "../../application/usecases/increase-stock.usecase";

export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly increaseStockUseCase: IncreaseStockUseCase
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<CreateProductPresenter> {
    const output = await this.createProductUseCase.execute(createProductDto);
    return new CreateProductPresenter(output);
  }

  async increaseProductStock(increaseStockDto: IncreaseStockDto): Promise<void> {
    return await this.increaseStockUseCase.execute(increaseStockDto);
  }
}