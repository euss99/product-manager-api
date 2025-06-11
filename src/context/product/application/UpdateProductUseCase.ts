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

    const { name, description, price } = productData;
    existingProduct.updateProduct( name, description, price);

    return await this.productRepository.update(id, existingProduct);
  }
}
