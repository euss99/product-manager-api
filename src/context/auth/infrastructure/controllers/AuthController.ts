import { Request, Response } from "express";

import { GetCurrentUserUseCase } from "@/context/auth/application/GetCurrentUserUseCase";
import { LoginUseCase } from "@/context/auth/application/LoginUseCase";
import { SequelizeUserRepository } from "@/context/user/infrastructure/repositories/SequelizeUserRepository";

export class AuthController {
  private loginUseCase: LoginUseCase;
  private getCurrentUserUseCase: GetCurrentUserUseCase;

  constructor() {
    const userRepository = new SequelizeUserRepository();

    this.loginUseCase = new LoginUseCase(userRepository);
    this.getCurrentUserUseCase = new GetCurrentUserUseCase(userRepository);
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const auth = await this.loginUseCase.execute(req.body);
      res.status(200).json({
        token: auth.getToken(),
        userId: auth.getUserId(),
      });
    } catch (error) {
      res.status(401).json({ error: (error as Error).message });
    }
  }

  async getCurrentUser(req: Request, res: Response): Promise<void> {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        res.status(401).json({ error: "Token not provided" });
        return;
      }

      const currentUser = await this.getCurrentUserUseCase.execute(token);
      res.status(200).json(currentUser);
    } catch (error) {
      res.status(401).json({ error: (error as Error).message });
    }
  }
}