import { Product } from "@/context/product/domain/entities/Product";
import { ProductRepository } from "@/context/product/domain/repositories/ProductRepository";

export class GetAllProductsUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }
}
