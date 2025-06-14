# Product Manager API

API REST para la gestión de productos implementada con Node.js y TypeScript, siguiendo los principios de Arquitectura Hexagonal, Domain-Driven Design (DDD) y Clean Architecture.

## 🚀 Tecnologías Principales

- **Node.js** - Runtime de JavaScript
- **TypeScript** - Superset tipado de JavaScript
- **Express** - Framework web para Node.js
- **PostgreSQL** - Base de datos relacional
- **Sequelize** - ORM para PostgreSQL
- **JWT** - Autenticación basada en tokens
- **Zod** - Validación de esquemas
- **Swagger** - Documentación de API

## 🏗️ Arquitectura

El proyecto sigue una arquitectura hexagonal con DDD y Clean Architecture, organizado en los siguientes contextos:

### Contextos del Sistema

#### 1. Contexto de Productos (`/context/product`)

Gestiona toda la lógica relacionada con los productos del sistema.

- **Domain Layer**:

  - Entidades: Clase `Product` con propiedades como nombre, descripción, precio y disponibilidad
  - Repositorios: Interfaces para operaciones CRUD de productos
  - DTOs:
    - `ProductDTO`: Para la transferencia de datos de productos

- **Application Layer**:

  - Casos de uso para:
    - Creación de productos
    - Actualización de productos
    - Eliminación de productos
    - Búsqueda de productos (por ID y listado completo)

- **Infrastructure Layer**:
  - Implementación del repositorio con Sequelize
  - Modelos de base de datos
  - Adaptadores para servicios externos

#### 2. Contexto de Usuarios (`/context/user`)

Maneja la gestión de usuarios y sus perfiles.

- **Domain Layer**:

  - Entidades: Clase `User` con información personal y credenciales
  - Repositorios: Interfaces para operaciones de usuarios
  - DTOs:
    - `UserDTO`: Para la transferencia de datos de usuarios

- **Application Layer**:

  - Casos de uso para:
    - Registro de usuarios
    - Actualización de perfiles
    - Gestión de roles y permisos

- **Infrastructure Layer**:
  - Implementación del repositorio de usuarios
  - Modelos de base de datos
  - Servicios de encriptación

#### 3. Contexto de Autenticación (`/context/auth`)

Gestiona la autenticación y autorización del sistema.

- **Domain Layer**:

  - Entidades: Clase `Auth` para manejar la autenticación
  - Repositorios: Interfaces para gestión de autenticación

- **Application Layer**:

  - Casos de uso para:
    - Inicio de sesión
    - Obtener el usuario actual

- **Infrastructure Layer**:
  - Implementación de JWT
  - Servicios de encriptación
  - Middleware de autenticación

### Estructura de Carpetas

```
src/
├── context/
│   ├── auth/                 # Contexto de autenticación
│   │   ├── application/        # Casos de uso de autenticación
│   │   ├── domain/             # Entidades y reglas de autenticación
│   │   └── infrastructure/     # Implementaciones de autenticación
│   ├── product/              # Contexto de productos
│   │   ├── application/        # Casos de uso de productos
│   │   ├── domain/             # Entidades y reglas de productos
│   │   └── infrastructure/     # Implementaciones de productos
│   └── user/                 # Contexto de usuarios
│       ├── application/        # Casos de uso de usuarios
│       ├── domain/             # Entidades y reglas de usuarios
│       └── infrastructure/     # Implementaciones de usuarios
├── config/                   # Configuraciones globales
├── helpers/                  # Utilidades y helpers
└── routes/                   # Rutas de la API
```

## 🛠️ Configuración del Proyecto

### Prerrequisitos

- Node.js (v18 o superior)
- PostgreSQL
- npm o yarn

### Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
NODE_ENV=development
PORT=3000
DB_HOST_NAME=localhost
DB_PORT=5432
DB_USER_NAME=postgres
DB_PASSWORD=postgres
DB_DATA_BASE=product_manager
FRONTEND_URL=http://localhost:5173
```

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev

# Ejecutar tests
npm test

# Ejecutar linter
npm run lint
```

## 📚 Documentación de la API

La documentación de la API está disponible en `/api-docs` cuando el servidor está en ejecución. Utiliza Swagger UI para una interfaz interactiva.

## 🔒 Autenticación

La API utiliza JWT (JSON Web Tokens) para la autenticación. Los endpoints protegidos requieren un token válido en el header de la petición:

```
Authorization: Bearer <token>
```

## 🧪 Testing

El proyecto utiliza Jest como framework de testing. Los tests se pueden ejecutar con:

```bash
npm test
```

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

- **Uriel Solis Salinas** - [GitHub](https://github.com/euss99)
