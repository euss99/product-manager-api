import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../.env") });

export const envConfig = {
  NODE_ENV: process.env.NODE_ENV || "dev",
  PORT: process.env.PORT || 3000,
  DATABASE_URL_CONNECTION: process.env.DATABASE_URL_CONNECTION || "",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: process.env.DB_PORT || 5432,
  DB_USER: process.env.DB_USER || "postgres",
  DB_PASSWORD: process.env.DB_PASSWORD || "postgres",
  DB_NAME: process.env.DB_NAME || "product_manager",
  // Aquí puedes agregar más variables de entorno según necesites
} as const;

// Exportar un tipo para las variables de entorno
export type EnvConfig = typeof envConfig;
