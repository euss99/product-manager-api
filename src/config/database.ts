import { Sequelize } from "sequelize-typescript";
import { envConfig } from "@config/env.config";
import { ProductModel } from "@context/product/infrastructure/models/product.model";

const db = new Sequelize(envConfig.DATABASE_URL_CONNECTION, {
  dialectOptions: {
    ssl: {
      require: false,
    },
  },
  models: [ProductModel],
  logging: false,
});

export const initDatabase = async () => {
  try {
    await db.authenticate();
    console.log("✅ Conexión a la base de datos establecida correctamente.");

    // Sincronizar modelos con la base de datos
    await db.sync();
    console.log("✅ Modelos sincronizados con la base de datos.");
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:", error);
    throw error;
  }
};

export default db;
