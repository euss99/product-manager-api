import { v4 as uuidv4 } from "uuid";

export class Product {
  private readonly id: string;
  private name: string;
  private description: string;
  private price: number;
  private availability: boolean;

  constructor(
    name: string,
    description: string,
    price: number,
    id?: Product["id"],
    availability?: boolean
  ) {
    this.id = id || uuidv4();
    this.name = name;
    this.description = description;
    this.price = price;
    this.availability = availability ?? true;
  }

  // Getters
  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): number {
    return this.price;
  }

  getAvailability(): boolean {
    return this.availability;
  }

  // Setters
  setName(name: string): void {
    this.name = name;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  setPrice(price: number): void {
    if (price < 0) {
      throw new Error("El precio no puede ser negativo");
    }
    this.price = price;
  }

  toggleAvailability(): void {
    this.availability = !this.availability;
  }

  // Método para convertir la entidad a un objeto plano
  toJSON(): {
    id: Product["id"];
    name: string;
    description: string;
    price: number;
    availability: boolean;
    } {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      availability: this.availability,
    };
  }
}
