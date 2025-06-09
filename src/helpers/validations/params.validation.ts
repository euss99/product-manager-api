import { z } from "zod";

export const idParamSchema = z.object({
  id: z.string({
    required_error: "El ID es obligatorio",
  }).uuid("El ID debe ser un UUID válido"),
});
