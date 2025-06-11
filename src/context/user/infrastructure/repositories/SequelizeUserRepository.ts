import { User } from "@/context/user/domain/entities/User";
import { UserRepository } from "@/context/user/domain/repositories/UserRepository";
import { UserModel } from "@/context/user/infrastructure/models/UserModel";

export class SequelizeUserRepository implements UserRepository {
  async save(user: User): Promise<User> {
    const userModel = await UserModel.create(user.toJSON() as Partial<UserModel>);
    return new User(
      userModel.name,
      userModel.email,
      userModel.password,
      userModel.birthday,
      userModel.id
    );
  }

  async findById(id: User["id"]): Promise<User | null> {
    const userModel = await UserModel.findByPk(id);
    if (!userModel) return null;

    return new User(
      userModel.name,
      userModel.email,
      userModel.password,
      userModel.birthday,
      userModel.id
    );
  }

  async findByEmail(email: string): Promise<User | null> {
    const userModel = await UserModel.findOne({ where: { email } });
    if (!userModel) return null;

    return new User(
      userModel.name,
      userModel.email,
      userModel.password,
      userModel.birthday,
      userModel.id
    );
  }

  async delete(id: User["id"]): Promise<void> {
    const userModel = await UserModel.findByPk(id);
    if (!userModel) throw new Error("User not found");
    await userModel.destroy();
  }
}