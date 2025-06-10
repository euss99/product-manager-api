import { Auth } from "@/context/auth/domain/entities/Auth";
import { User } from "@/context/user/domain/entities/User";
import { UserRepository } from "@/context/user/domain/repositories/UserRepository";

export class GetCurrentUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(token: string): Promise<User> {
    const { userId } = Auth.verifyToken(token);
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}