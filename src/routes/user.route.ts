import { Router } from "express";

import { UserController } from "@/context/user/infrastructure/controllers/UserController";
import { schemaMiddleware } from "@/helpers/middlewares/schema.middleware";
import { idParamSchema } from "@/helpers/validations/params.validation";
import { createUserSchema } from "@/helpers/validations/user.validation";

const router = Router();
const userController = new UserController();

router.post(
  "/",
  schemaMiddleware(createUserSchema, "body"),
  userController.createUser.bind(userController)
);

router.delete(
  "/:id",
  schemaMiddleware(idParamSchema, "params"),
  userController.deleteUser.bind(userController)
);

export default router;