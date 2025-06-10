import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("El email no es válido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
  birthday: z.string().transform((str) => new Date(str)),
});