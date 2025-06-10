import { Request, Response } from "express";

import { CreateUserUseCase } from "@/context/user/application/CreateUserUseCase";
import { DeleteUserUseCase } from "@/context/user/application/DeleteUserUseCase";
import { SequelizeUserRepository } from "@/context/user/infrastructure/repositories/SequelizeUserRepository";

export class UserController {
  private createUserUseCase: CreateUserUseCase;
  private deleteUserUseCase: DeleteUserUseCase;

  constructor() {
    const userRepository = new SequelizeUserRepository();
    this.createUserUseCase = new CreateUserUseCase(userRepository);
    this.deleteUserUseCase = new DeleteUserUseCase(userRepository);
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.createUserUseCase.execute(req.body);
      res.status(201).json({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        birthday: user.getBirthday(),
      });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await this.deleteUserUseCase.execute(id);
      res.status(200).json({
        message: "User deleted successfully",
      });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}