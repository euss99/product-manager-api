import { Product } from "@/context/product/domain/entities/Product";
import { ProductRepository } from "@/context/product/domain/repositories/ProductRepository";

export interface UpdateProductDTO {
  name?: string;
  description?: string;
  price?: number;
}

export class UpdateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(
    id: Product["id"],
    productData: UpdateProductDTO
  ): Promise<Product> {
    const existingProduct = await this.productRepository.findById(id);

    if (!existingProduct) {
      throw new Error("Product not found");
    }

    if (productData.name) existingProduct.setName(productData.name);
    if (productData.description)
      existingProduct.setDescription(productData.description);
    if (productData.price) existingProduct.setPrice(productData.price);

    return await this.productRepository.update(id, existingProduct);
  }
}
