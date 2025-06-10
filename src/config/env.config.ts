import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../.env") });

export const envConfig = {
  NODE_ENV: process.env.NODE_ENV || "dev",
  PORT: process.env.PORT || 3000,
  DB_EXTERNAL_URL_CONNECTION: process.env.DB_EXTERNAL_URL_CONNECTION || "",
  DB_HOST_NAME: process.env.DB_HOST_NAME || "localhost",
  DB_PORT: process.env.DB_PORT || 5432,
  DB_USER_NAME: process.env.DB_USER_NAME || "postgres",
  DB_PASSWORD: process.env.DB_PASSWORD || "postgres",
  DB_DATA_BASE: process.env.DB_DATA_BASE || "product_manager",
  // Aquí puedes agregar más variables de entorno según necesites
} as const;

// Exportar un tipo para las variables de entorno
export type EnvConfig = typeof envConfig;
