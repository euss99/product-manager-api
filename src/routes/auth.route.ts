import { Router } from "express";

import { AuthController } from "@/context/auth/infrastructure/controllers/AuthController";
import { schemaMiddleware } from "@/helpers/middlewares/schema.middleware";
import { loginSchema } from "@/helpers/validations/auth.validation";

const router = Router();
const authController = new AuthController();

router.post(
  "/login",
  schemaMiddleware(loginSchema, "body"),
  authController.login.bind(authController)
);

router.get(
  "/current-user",
  authController.getCurrentUser.bind(authController)
);

export default router;
