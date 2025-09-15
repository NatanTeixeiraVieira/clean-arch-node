import { CreateProductUseCase } from "modules/product/application/usecases/create-product.usecase";
import { CreateProductDto } from "../dtos/create-product.dto";
import { CreateProductPresenter } from "../presenters/create-product.presenter";
import { IncreaseStockDto } from "../dtos/increase-stock.dto";
import { IncreaseProductStockUseCase } from "../../application/usecases/increase-product-stock.usecase";
import { DecreaseProductStockUseCase } from "../../application/usecases/decrease-product-stock.usecase";
import { DecreaseStockDto } from "../dtos/decrease-stock.dto";
import { UpdateProductUseCase } from "../../application/usecases/update-product.usecase";
import { UpdateProductDto } from "../dtos/update-product.dto";

export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly increaseStockUseCase: IncreaseProductStockUseCase,
    private readonly decreaseStockUseCase: DecreaseProductStockUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<CreateProductPresenter> {
    const output = await this.createProductUseCase.execute(createProductDto);
    return new CreateProductPresenter(output);
  }

  async increaseProductStock(increaseStockDto: IncreaseStockDto): Promise<void> {
    return await this.increaseStockUseCase.execute(increaseStockDto);
  }


  async decreaseProductStock(decreaseStockDto: DecreaseStockDto): Promise<void> {
    return await this.decreaseStockUseCase.execute(decreaseStockDto);
  }

  async updateProduct(updateStockDto: UpdateProductDto): Promise<void> {
    return await this.updateProductUseCase.execute(updateStockDto);
  }
}