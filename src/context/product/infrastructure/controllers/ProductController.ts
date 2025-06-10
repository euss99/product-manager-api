import { Request, Response } from "express";

import { CreateProductUseCase } from "@/context/product/application/CreateProductUseCase";
import { DeleteProductUseCase } from "@/context/product/application/DeleteProductUseCase";
import { GetAllProductsUseCase } from "@/context/product/application/GetAllProductsUseCase";
import { GetProductByIdUseCase } from "@/context/product/application/GetProductByIdUseCase";
import { UpdateAvailabilityProductUseCase } from "@/context/product/application/UpdateAvailabilityProductUseCase";
import { UpdateProductUseCase } from "@/context/product/application/UpdateProductUseCase";
import { SequelizeProductRepository } from "@/context/product/infrastructure/repositories/SequelizeProductRepository";

export class ProductController {
  private createProductUseCase: CreateProductUseCase;
  private getProductByIdUseCase: GetProductByIdUseCase;
  private getAllProductsUseCase: GetAllProductsUseCase;
  private updateProductUseCase: UpdateProductUseCase;
  private deleteProductUseCase: DeleteProductUseCase;
  private updateAvailabilityProductUseCase: UpdateAvailabilityProductUseCase;

  constructor() {
    const productRepository = new SequelizeProductRepository();
    this.createProductUseCase = new CreateProductUseCase(productRepository);
    this.getProductByIdUseCase = new GetProductByIdUseCase(productRepository);
    this.getAllProductsUseCase = new GetAllProductsUseCase(productRepository);
    this.updateProductUseCase = new UpdateProductUseCase(productRepository);
    this.deleteProductUseCase = new DeleteProductUseCase(productRepository);
    this.updateAvailabilityProductUseCase = new UpdateAvailabilityProductUseCase(productRepository);
  }

  async createProduct(req: Request, res: Response): Promise<void> {
    try {
      const product = await this.createProductUseCase.execute(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const product = await this.getProductByIdUseCase.execute(id);
      if (!product) {
        res.status(404).json({ error: "Product not found" });
        return;
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getAllProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await this.getAllProductsUseCase.execute();
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await this.updateProductUseCase.execute(id, req.body);
      res.status(200).json({  message: "Product updated successfully"  });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async updateAvailabilityProduct(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await this.updateAvailabilityProductUseCase.execute(id);
      res.status(200).json({ message: "Product availability updated successfully" });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async deleteProduct(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await this.deleteProductUseCase.execute(id);
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
