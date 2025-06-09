import { Product } from "@/context/product/domain/entities/Product";

export interface ProductRepository {
  save(product: Product): Promise<Product>;
  findById(id: Product["id"]): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  update(id: Product["id"], product: Product): Promise<Product>;
  delete(id: Product["id"]): Promise<void>;
}
