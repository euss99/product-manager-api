import { Product } from "@/context/product/domain/entities/Product";
import { ProductRepository } from "@/context/product/domain/repositories/ProductRepository";

export class DeleteProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: Product["id"]): Promise<void> {
    const existingProduct = await this.productRepository.findById(id);

    if (!existingProduct) {
      throw new Error("Product not found");
    }

    await this.productRepository.delete(id);
  }
}
