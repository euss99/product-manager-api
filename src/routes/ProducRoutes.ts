import { Router } from "express";

import { ProductController } from "@/controllers/ProductController";
import { validate } from "@/helpers/middlewares/validate";
import { idParamSchema } from "@/helpers/validations/params.validation";
import {
  createProductSchema,
  updateProductSchema,
} from "@/helpers/validations/product.validation";

const router = Router();
const productController = new ProductController();

// Rutas para productos
router.get("/", productController.getAllProducts.bind(productController));
router.post(
  "/",
  validate(createProductSchema, "body"),
  productController.createProduct.bind(productController)
);
router.get(
  "/:id",
  validate(idParamSchema, "params"),
  productController.getProductById.bind(productController)
);
router.put(
  "/:id",
  validate(idParamSchema, "params"),
  validate(updateProductSchema, "body"),
  productController.updateProduct.bind(productController)
);
router.delete(
  "/:id",
  validate(idParamSchema, "params"),
  productController.deleteProduct.bind(productController)
);

export default router;
