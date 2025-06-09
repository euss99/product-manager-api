import { Product } from "@context/product/domain/entities/product.entity";
import { ProductRepository } from "@context/product/domain/repositories/product.repository";
import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  description: z.string().min(1, "La descripción es obligatoria"),
  price: z.number().positive("El precio debe ser un número positivo"),
});

export type CreateProductDTO = z.infer<typeof createProductSchema>;

export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(productData: CreateProductDTO): Promise<Product> {
    const validatedData = createProductSchema.parse(productData);

    const product = new Product(
      validatedData.name,
      validatedData.description,
      validatedData.price
    );

    return await this.productRepository.save(product);
  }
}
