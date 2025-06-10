import { NextFunction, Request, Response } from "express";

import { Auth } from "@/context/auth/domain/entities/Auth";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({ error: "Token not provided" });
      return;
    }

    const [bearer, token] = authHeader.split(" ");

    if (bearer !== "Bearer" || !token) {
      res.status(401).json({ error: "Invalid token format" });
      return;
    }

    if (!Auth.verifyToken(token)) {
      res.status(401).json({ error: "Invalid token" });
      return;
    }

    next();
  } catch (error) {
    res.status(401).json({ error: (error as Error).message });
  }
};