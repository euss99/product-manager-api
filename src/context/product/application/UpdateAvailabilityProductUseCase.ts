import { Product } from "@/context/product/domain/entities/Product";
import { ProductRepository } from "@/context/product/domain/repositories/ProductRepository";

export class UpdateAvailabilityProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: Product["id"]): Promise<Product> {
    const product = await this.productRepository.findById(id);

    if (!product) throw new Error("Product not found");

    product.toggleAvailability();
    return this.productRepository.update(id, product);
  }
}