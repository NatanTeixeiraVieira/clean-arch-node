import { CreateProductUseCase } from "../../application/usecases/create-product.usecase";
import { DecreaseProductStockUseCase } from "../../application/usecases/decrease-product-stock.usecase";
import { FindAllProductsUseCase } from "../../application/usecases/find-all-products.usecase";
import { IncreaseProductStockUseCase } from "../../application/usecases/increase-product-stock.usecase";
import { UpdateProductUseCase } from "../../application/usecases/update-product.usecase";
import { ProductController } from "../controllers/product.controller";
import { FileProductQuery } from "../queries/file/file-product.query";
import { FileProductRepository } from "../repositories/file/file-product.repository";

export class ProductFactory {
  static create() {
    const productRepository = new FileProductRepository();
    const productQuery = new FileProductQuery()

    const findAllProductsUseCase = new FindAllProductsUseCase(productQuery);
    const createProductUseCase = new CreateProductUseCase(productRepository);
    const increaseProductStockUseCase = new IncreaseProductStockUseCase(productRepository);
    const decreaseProductStockUseCase = new DecreaseProductStockUseCase(productRepository);
    const updateProductUseCase = new UpdateProductUseCase(productRepository);

    const productController = new ProductController(
      findAllProductsUseCase,
      createProductUseCase, 
      increaseProductStockUseCase, 
      decreaseProductStockUseCase,
      updateProductUseCase
    );

    return {
      productController,
    }
  }
}