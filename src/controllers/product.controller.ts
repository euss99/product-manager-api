import { CreateProductUseCase } from "@context/product/application/create-product.use-case";
import { Request, Response } from "express";

import { SequelizeProductRepository } from "@/context/product/infrastructure/repositories/sequelize-product.repository";

export class ProductController {
  private createProductUseCase: CreateProductUseCase;

  constructor() {
    const productRepository = new SequelizeProductRepository();
    this.createProductUseCase = new CreateProductUseCase(productRepository);
  }

  async createProduct(req: Request, res: Response): Promise<void> {
    try {
      const product = await this.createProductUseCase.execute(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
