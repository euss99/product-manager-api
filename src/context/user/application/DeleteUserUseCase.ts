import { User } from "@/context/user/domain/entities/User";
import { UserRepository } from "@/context/user/domain/repositories/UserRepository";

export class DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: User["id"]): Promise<void> {
    const existingUser = await this.userRepository.findById(id);

    if (!existingUser) {
      throw new Error("User not found");
    }

    await this.userRepository.delete(id);
  }
}