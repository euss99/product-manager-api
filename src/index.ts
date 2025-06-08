import { initDatabase } from "@config/database";
import { envConfig } from "@config/env.config";
import productRoutes from "@routes/product.routes";
import express from "express";

const app = express();
const port = envConfig.PORT;

// Middleware
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Inicializar la base de datos y luego iniciar el servidor
const startServer = async () => {
  try {
    await initDatabase();

    app.listen(port, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
      console.log(`🌍 Ambiente: ${envConfig.NODE_ENV}`);
    });
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error);
    process.exit(1);
  }
};

startServer();
