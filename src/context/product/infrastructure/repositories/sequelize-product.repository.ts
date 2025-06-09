import { Product } from "@context/product/domain/entities/product.entity";
import { ProductRepository } from "@context/product/domain/repositories/product.repository";
import { ProductModel } from "@context/product/infrastructure/models/product.model";

export class SequelizeProductRepository implements ProductRepository {
  async save(product: Product): Promise<Product> {
    const productModel = await ProductModel.create(product.toJSON());
    return new Product(
      productModel.name,
      productModel.description,
      Number(productModel.price),
      productModel.id
    );
  }

  async findById(id: Product["id"]): Promise<Product | null> {
    const productModel = await ProductModel.findByPk(id);
    if (!productModel) return null;

    return new Product(
      productModel.name,
      productModel.description,
      Number(productModel.price),
      productModel.id
    );
  }

  async findAll(): Promise<Product[]> {
    const productModels = await ProductModel.findAll();
    return productModels.map(
      (model) =>
        new Product(
          model.name,
          model.description,
          Number(model.price),
          model.id
        )
    );
  }

  async update(id: Product["id"], product: Product): Promise<Product> {
    const productModel = await ProductModel.findByPk(id);
    if (!productModel) throw new Error("Product not found");

    await productModel.update(product.toJSON());
    return new Product(
      productModel.name,
      productModel.description,
      Number(productModel.price),
      productModel.id
    );
  }

  async delete(id: Product["id"]): Promise<void> {
    const productModel = await ProductModel.findByPk(id);
    if (!productModel) throw new Error("Product not found");
    await productModel.destroy();
  }
}
