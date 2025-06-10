import { v4 as uuidv4 } from "uuid";

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

  updateName(name: string): void {
    this.name = name;
  }

  updateEmail(email: string): void {
    this.email = email;
  }

  updatePassword(password: string): void {
    this.password = password;
  }

  updateBirthday(birthday: Date): void {
    this.birthday = birthday;
  }

  toJSON(): { id: User["id"]; name: string; email: string; password: string; birthday: Date } {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      birthday: this.birthday,
    };
  }
}