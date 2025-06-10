import { User } from "@/context/user/domain/entities/User";

export interface UserRepository {
  save(user: User): Promise<User>;
  findById(id: User["id"]): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  delete(id: User["id"]): Promise<void>;
}