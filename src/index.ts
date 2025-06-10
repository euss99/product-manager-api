import colors from "colors";
import express from "express";

import { initDatabase } from "@/config/db.config";
import { envConfig } from "@/config/env.config";
import productRoutes from "@/routes/ProducRoutes";
import userRoutes from "@/routes/UserRoutes";

const app = express();
const port = envConfig.PORT;

// Middleware
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

const startServer = async (): Promise<void> => {
  try {
    await initDatabase();

    app.listen(port, () => {
      console.log(
        colors.green(`🚀 Servidor corriendo en http://localhost:${port}`)
      );
      console.log(colors.cyan(`🌍 Ambiente: ${envConfig.NODE_ENV}`));
    });
  } catch (error) {
    console.error(colors.red("❌ Error al iniciar el servidor:"), error);
    process.exit(1);
  }
};

startServer();
