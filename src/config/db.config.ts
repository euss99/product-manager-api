import colors from "colors";
import { Sequelize } from "sequelize-typescript";

import { envConfig } from "@/config/env.config";
import { ProductModel } from "@/context/product/infrastructure/models/ProductModel";
import { UserModel } from "@/context/user/infrastructure/models/UserModel";

const db = new Sequelize(
  envConfig.DB_DATA_BASE,
  envConfig.DB_USER_NAME,
  envConfig.DB_PASSWORD,
  {
    dialect: "postgres",
    host: envConfig.DB_HOST_NAME,
    port: Number(envConfig.DB_PORT),
    models: [ProductModel, UserModel],
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

    await db.sync();
    console.log(colors.green("✅ Modelos sincronizados con la base de datos."));
  } catch (error) {
    console.error(
      colors.red("❌ Error al conectar con la base de datos:"),
      error
    );
    throw error;
  }
};
