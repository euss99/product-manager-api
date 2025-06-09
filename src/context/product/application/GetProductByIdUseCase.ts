import { Product } from "@/context/product/domain/entities/Product";
import { ProductRepository } from "@/context/product/domain/repositories/ProductRepository";

export class GetProductByIdUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: Product["id"]): Promise<Product | null> {
    return await this.productRepository.findById(id);
  }
}
