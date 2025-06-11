import { v4 as uuidv4 } from "uuid";

import UserDTO from "@/context/user/domain/dtos/User";

export class User {
  private readonly id: string;
  private name: string;
  private email: string;
  private password: string;
  private birthday: Date;

  constructor(
    name: string,
    email: string,
    password: string,
    birthday: Date,
    id?: string
  ) {
    this.id = id || uuidv4();
    this.name = name;
    this.email = email;
    this.password = password;
    this.birthday = birthday;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getBirthday(): Date {
    return this.birthday;
  }

  updateUser(name?: string, email?: string, password?: string, birthday?: Date): void {
    if (name) this.name = name;
    if (email) this.email = email;
    if (password) this.password = password;
    if (birthday) this.birthday = birthday;
  }

  toJSON(): UserDTO {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      birthday: this.birthday,
    };
  }
}