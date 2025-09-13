import { CreateProductUseCase } from "../../application/usecases/create-product.usecase";
import { IncreaseStockUseCase } from "../../application/usecases/increase-stock.usecase";
import { ProductController } from "../controllers/product.controller";
import { FileProductRepository } from "../repositories/file/file-product.repository";

export class ProductFactory {
  static create() {
    const productRepository = new FileProductRepository();
    const createProductUseCase = new CreateProductUseCase(productRepository);
    const increaseProductStockUseCase = new IncreaseStockUseCase(productRepository);
    const productController = new ProductController(createProductUseCase, increaseProductStockUseCase);

    return {
      productController,
    }
  }
}