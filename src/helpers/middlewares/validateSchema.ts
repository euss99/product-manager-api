import { NextFunction, Request, Response } from "express";
import { z } from "zod";

type ValidationSource = "body" | "params" | "query";

export const validateSchema = (
  schema: z.ZodSchema,
  source: ValidationSource
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req[source]);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          error: "Error de validación",
          details: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        });
        return;
      }
      next(error);
    }
  };
};
