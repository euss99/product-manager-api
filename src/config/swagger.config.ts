import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Product Manager API",
      version: "1.0.0",
      description: "API para gestión de productos y usuarios",
    },
    tags: [
      {
        name: "Auth",
        description: "Endpoints para autenticación y autorización",
      },
      {
        name: "Products",
        description: "Endpoints para gestión de productos",
      },
      {
        name: "Users",
        description: "Endpoints para gestión de usuarios",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        Error: {
          type: "object",
          properties: {
            error: {
              type: "string",
            },
          },
        },
        Product: {
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
            },
            name: {
              type: "string",
            },
            description: {
              type: "string",
            },
            price: {
              type: "number",
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        User: {
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uuid",
            },
            name: {
              type: "string",
            },
            email: {
              type: "string",
              format: "email",
            },
            birthday: {
              type: "string",
              format: "date",
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        AuthResponse: {
          type: "object",
          properties: {
            token: {
              type: "string",
            },
            userId: {
              type: "string",
              format: "uuid",
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/helpers/docs/*.doc.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);