import { Request, Response } from "express";

import { CreateUserUseCase } from "@/context/user/application/CreateUserUseCase";
import { SequelizeUserRepository } from "@/context/user/infrastructure/repositories/SequelizeUserRepository";

export class UserController {
  private createUserUseCase: CreateUserUseCase;

  constructor() {
    const userRepository = new SequelizeUserRepository();
    this.createUserUseCase = new CreateUserUseCase(userRepository);
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
}