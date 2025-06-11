import { v4 as uuidv4 } from "uuid";

import ProductDTO from "@/context/product/domain/dtos/Product";

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

  updateProduct(name?: string, descripcion?: string, price?: number): void {
    if (name) this.name = name;
    if (descripcion) this.description = descripcion;
    if (price) this.price = price;
  }

  toggleAvailability(): void {
    this.availability = !this.availability;
  }

  toJSON(): ProductDTO {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      availability: this.availability,
    };
  }
}
