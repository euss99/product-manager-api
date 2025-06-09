import { Product } from "@/context/product/domain/entities/Product";
import { ProductRepository } from "@/context/product/domain/repositories/ProductRepository";

export interface CreateProductDTO {
  name: string;
  description: string;
  price: number;
}

export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(productData: CreateProductDTO): Promise<Product> {
    const product = new Product(
      productData.name,
      productData.description,
      productData.price
    );

    return await this.productRepository.save(product);
  }
}
