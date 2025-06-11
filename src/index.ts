import colors from "colors";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import { corsOptions } from "@/config/cors.config";
import { initDatabase } from "@/config/db.config";
import { envConfig } from "@/config/env.config";
import { swaggerSpec } from "@/config/swagger.config";
import authRoutes from "@/routes/auth.route";
import productRoutes from "@/routes/product.route";
import userRoutes from "@/routes/user.route";

const app = express();
const port = envConfig.PORT;

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

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
