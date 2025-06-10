import { Router } from "express";

import { UserController } from "@/context/user/infrastructure/controllers/UserController";
import { validateSchema } from "@/helpers/middlewares/validateSchema";
import { createUserSchema } from "@/helpers/validations/user.validation";

const router = Router();
const userController = new UserController();

router.post(
  "/",
  validateSchema(createUserSchema, "body"),
  userController.createUser.bind(userController)
);

export default router;