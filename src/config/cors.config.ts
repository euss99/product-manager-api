import { CorsOptions } from "cors";

import { envConfig } from "@/config/env.config";

export const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (origin === envConfig.FRONTEND_URL) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};