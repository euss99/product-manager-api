import { envConfig } from "@config/env.config";
import { ProductModel } from "@context/product/infrastructure/models/product.model";
import colors from "colors";
import { Sequelize } from "sequelize-typescript";

const db = new Sequelize(
  envConfig.DB_NAME,
  envConfig.DB_USER,
  envConfig.DB_PASSWORD,
  {
    dialect: "postgres",
    host: envConfig.DB_HOST,
    port: Number(envConfig.DB_PORT),
    models: [ProductModel],
    logging: false,
    dialectOptions: {
      ssl: {
        require: false,
      },
    },
  }
);

export const initDatabase = async (): Promise<void> => {
  try {
    await db.authenticate();
    console.log(
      colors.green("✅ Conexión a la base de datos establecida correctamente.")
    );

    // Sincronizar modelos con la base de datos
    await db.sync();
    console.log(colors.blue("✅ Modelos sincronizados con la base de datos."));
  } catch (error) {
    console.error(
      colors.red("❌ Error al conectar con la base de datos:"),
      error
    );
    throw error;
  }
};

export default db;
