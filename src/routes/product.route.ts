import { Router } from "express";

import { ProductController } from "@/context/product/infrastructure/controllers/ProductController";
import { authMiddleware } from "@/helpers/middlewares/auth.middleware";
import { schemaMiddleware } from "@/helpers/middlewares/schema.middleware";
import { idParamSchema } from "@/helpers/validations/params.validation";
import {
  createProductSchema,
  updateProductSchema,
} from "@/helpers/validations/product.validation";

const router = Router();
const productController = new ProductController();

router.use(authMiddleware);

// Rutas para productos
router.get("/", productController.getAllProducts.bind(productController));
router.post(
  "/",
  schemaMiddleware(createProductSchema, "body"),
  productController.createProduct.bind(productController)
);
router.get(
  "/:id",
  schemaMiddleware(idParamSchema, "params"),
  productController.getProductById.bind(productController)
);
router.put(
  "/:id",
  schemaMiddleware(idParamSchema, "params"),
  schemaMiddleware(updateProductSchema, "body"),
  productController.updateProduct.bind(productController)
);
router.delete(
  "/:id",
  schemaMiddleware(idParamSchema, "params"),
  productController.deleteProduct.bind(productController)
);

export default router;
