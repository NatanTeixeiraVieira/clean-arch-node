import { router } from "shared/infra/express/router";
import { ProductFactory } from "../../factories/product.factory";

const { productController } = ProductFactory.create();

router.get('/v1/product', async (_, res) => {
  const presenter = await productController.findAllProducts()
  return res.status(200).json(presenter);
})

router.post('/v1/product', async (req, res) => {
  const presenter = await productController.createProduct(req.body)
  return res.status(201).json(presenter);
})

router.put('/v1/product', async (req, res) => {
  const presenter = await productController.updateProduct(req.body)
  return res.status(200).json(presenter);
})

router.put('/v1/product/increase-stock', async (req, res) => {
  const presenter = await productController.increaseProductStock(req.body)
  return res.status(200).json(presenter);
})

router.put('/v1/product/decrease-stock', async (req, res) => {
  const presenter = await productController.decreaseProductStock(req.body)
  return res.status(200).json(presenter);
})

export { router as productRoutes };