import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "your-secret-key";

export class Auth {
  private readonly token: string;
  private readonly userId: string;

  constructor(userId: string, token: string) {
    this.userId = userId;
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  getUserId(): string {
    return this.userId;
  }

  static generateToken(userId: string): string {
    return jwt.sign({ userId }, secret, { expiresIn: "24h" });
  }

  static verifyToken(token: string): { userId: string } {
    return jwt.verify(token, secret) as { userId: string };
  }
}