import { CorsOptions } from "cors";

import { envConfig } from "@/config/env.config";

const allowedOrigins = [envConfig.FRONTEND_URL, "http://localhost:3000"];

export const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};