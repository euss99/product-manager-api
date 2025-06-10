import { Auth } from "@/context/auth/domain/entities/Auth";
import { UserRepository } from "@/context/user/domain/repositories/UserRepository";
import { comparePasswords } from "@/helpers/services/password.service";

export interface LoginDTO {
  email: string;
  password: string;
}

export class LoginUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(loginData: LoginDTO): Promise<Auth> {
    const user = await this.userRepository.findByEmail(loginData.email);
    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = await comparePasswords(
      loginData.password,
      user.getPassword()
    );
    if (!isPasswordValid) {
      throw new Error("Incorrect password");
    }

    const token = Auth.generateToken(user.getId());
    return new Auth(user.getId(), token);
  }
}