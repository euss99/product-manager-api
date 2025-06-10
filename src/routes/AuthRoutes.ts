import { Router } from "express";

import { AuthController } from "@/context/auth/infrastructure/controllers/AuthController";
import { validateSchema } from "@/helpers/middlewares/validateSchema";
import { loginSchema } from "@/helpers/validations/auth.validation";

const router = Router();
const authController = new AuthController();

router.post(
  "/login",
  validateSchema(loginSchema, "body"),
  authController.login.bind(authController)
);

router.get(
  "/current-user",
  authController.getCurrentUser.bind(authController)
);

export default router;
