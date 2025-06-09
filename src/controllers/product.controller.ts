import { CreateProductUseCase } from "@context/product/application/create-product.use-case";
import { SequelizeProductRepository } from "@context/product/infrastructure/repositories/sequelize-product.repository";
import { Request, Response } from "express";
import { ZodError } from "zod";


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
      if (error instanceof ZodError) {
        res.status(400).json({
          error: "Error de validación",
          details: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        });
        return;
      }
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
