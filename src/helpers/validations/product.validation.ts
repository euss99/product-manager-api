import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  description: z.string().min(1, "La descripción es obligatoria"),
  price: z.number().positive("El precio debe ser un número positivo"),
});

export const updateProductSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio").optional(),
  description: z.string().min(1, "La descripción es obligatoria").optional(),
  price: z
    .number()
    .positive("El precio debe ser un número positivo")
    .optional(),
});
