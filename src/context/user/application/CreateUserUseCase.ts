import { User } from "@/context/user/domain/entities/User";
import { UserRepository } from "@/context/user/domain/repositories/UserRepository";
import { encryptPassword } from "@/helpers/services/password.service";

export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  birthday: Date;
}

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userData: CreateUserDTO): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(userData.email);

    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    const hashedPassword = await encryptPassword(userData.password);

    const user = new User(
      userData.name,
      userData.email,
      hashedPassword,
      userData.birthday
    );

    await this.userRepository.save(user);
    return user;
  }
}