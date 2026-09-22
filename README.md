# NovaMarket-PYME — Backend

Backend de la aplicación NovaMarket-PYME desarrollado como una API REST.

El proyecto utiliza Node.js + Express.js y PostgreSQL mediante Supabase.

---

## 🛠️ Tecnologías

- Node.js
- Express.js
- PostgreSQL
- Supabase
- `pg`
- `dotenv`
- Git / GitHub
- Postman

---

## 📁 Estructura del backend

```text
backend/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── app.js
│
├── .env
├── .env.example
└── package.json
```

### `src/config/`

Configuración de la conexión con PostgreSQL/Supabase.

### `src/controllers/`

Contiene la lógica de negocio de los endpoints.

### `src/models/`

Contiene las consultas y la interacción con la base de datos.

### `src/routes/`

Define las rutas de la API.

### `src/app.js`

Punto de entrada de la aplicación Express.

---

## 🚀 Requisitos

Antes de comenzar, necesitás tener instalado:

- Node.js
- npm
- Git

---

## 📥 Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Talently-Lab/NovaMarket-PYME.git
```

Ingresar al proyecto:

```bash
cd NovaMarket-PYME/backend
```

Instalar las dependencias:

```bash
npm install
```

---

## 🔐 Variables de entorno

El backend utiliza variables de entorno para configurar la conexión con la base de datos.

Crear el archivo `.env` dentro de `backend/`, usando `.env.example` como referencia.

> ⚠️ No subir el archivo `.env` al repositorio.

---

## ▶️ Ejecutar el servidor

Desde la carpeta `backend`:

```bash
npm run dev
```

El servidor se ejecuta en:

```text
http://localhost:3000
```

---

## 🧪 Health Check

El backend dispone de un endpoint para comprobar el estado del servidor:

```http
GET /api/health
```

URL: `http://localhost:3000/api/health`

Respuesta esperada:

```json
{
  "status": "OK",
  "message": "Servidor NovaMarket ejecutándose correctamente",
  "timestamp": "..."
}
```

Código HTTP esperado: `200 OK`

El endpoint fue verificado mediante Postman, comprobando la conexión con PostgreSQL/Supabase.

---

## 🗄️ Base de datos

La aplicación utiliza **PostgreSQL alojado en Supabase**.

La conexión se realiza mediante la librería `pg` utilizando un Pool de conexiones, definido en `src/config/db.js`.

Las credenciales se gestionan mediante variables de entorno utilizando `dotenv`.

---

## 🏗️ Arquitectura

El backend está organizado siguiendo una estructura basada en MVC:

```text
Cliente
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Models
   │
   ▼
PostgreSQL / Supabase
```

### Flujo

1. El cliente realiza una petición HTTP.
2. `routes` recibe la petición.
3. La ruta llama al `controller`.
4. El `controller` procesa la lógica.
5. `models` interactúa con la base de datos.
6. El resultado vuelve al cliente como respuesta JSON.

---

## 👤 Modelo inicial de usuarios

La estructura inicial de usuarios contempla:

```text
usuario
   │
   ├── cliente
   │
   └── administrador
```

La tabla `usuario` centraliza la información común de autenticación y registro.

Las tablas `cliente` y `administrador` representan los perfiles específicos asociados al usuario.

---

## 📚 Documentación

La documentación técnica del backend se encuentra en `/docs`, e incluye:

- arquitectura
- estructura del proyecto
- conexión a PostgreSQL/Supabase
- modelo de datos
- relaciones entre entidades
- diagrama MVC
- evidencia de pruebas del API

---

## 🌿 Git

Crear una rama para trabajar:

```bash
git checkout -b feature/nombre-del-cambio
```

Verificar cambios:

```bash
git status
```

Agregar archivos:

```bash
git add .
```

Crear un commit:

```bash
git commit -m "feat: descripcion del cambio"
```

Subir la rama:

```bash
git push -u origin feature/nombre-del-cambio
```

Los cambios deben integrarse mediante Pull Request.

---

## 📌 API

### Health Check

| Método | Endpoint      | Descripción                     |
| ------ | ------------- | -------------------------------- |
| `GET`  | `/api/health` | Verifica el estado del servidor |

---

## 👩‍💻 Backend

**NovaMarket-PYME**

Backend desarrollado colaborativamente con Node.js, Express.js y PostgreSQL/Supabase.