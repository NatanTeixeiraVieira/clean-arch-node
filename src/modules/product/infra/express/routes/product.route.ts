import { CreateProductUseCase } from "modules/product/application/usecases/create-product.usecase";
import { ProductController } from "../../controllers/product.controller";
import { FileProductRepository } from "../../repositories/file/file-product.repository";
import { router } from "shared/infra/express/router";

const productRepository = new FileProductRepository();
const createProductUseCase = new CreateProductUseCase(productRepository);
const productController = new ProductController(createProductUseCase);

router.post('/v1/product', async (req, res) => {
  const presenter = await productController.createProduct(req.body)
  return res.status(201).json(presenter);
})

export { router as productRoutes };