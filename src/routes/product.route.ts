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

router.get("/", authMiddleware, productController.getAllProducts.bind(productController));

router.get(
  "/:id",
  schemaMiddleware(idParamSchema, "params"),
  authMiddleware,
  productController.getProductById.bind(productController)
);

router.post(
  "/",
  schemaMiddleware(createProductSchema, "body"),
  authMiddleware,
  productController.createProduct.bind(productController)
);

router.put(
  "/:id",
  schemaMiddleware(idParamSchema, "params"),
  schemaMiddleware(updateProductSchema, "body"),
  authMiddleware,
  productController.updateProduct.bind(productController)
);

router.patch(
  "/:id/availability",
  schemaMiddleware(idParamSchema, "params"),
  authMiddleware,
  productController.toggleAvailabilityProduct.bind(productController)
);

router.delete(
  "/:id",
  schemaMiddleware(idParamSchema, "params"),
  authMiddleware,
  productController.deleteProduct.bind(productController)
);

export default router;
