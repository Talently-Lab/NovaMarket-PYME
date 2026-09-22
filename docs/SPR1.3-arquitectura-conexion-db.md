# SPR1.3 --- Armar la arquitectura + conexión a DB

## 📋 Información del ticket

  Campo         Detalle
  ------------- --------------------------------------------------------
  Proyecto      NovaMarket-PYME
  Ticket        SCRUM-5 / SPR1.3
  Título        Armar la arquitectura + conexión DB
  Sprint        SCRUM Sprint 0
  Responsable   Florencia Sombra
  Equipo        Backend
  Estado        ✅ Finalizado
  Stack         Node.js, Express.js, PostgreSQL (Supabase), Git/GitHub

------------------------------------------------------------------------

## 🎯 Objetivo

Establecer la arquitectura base del backend de **NovaMarket-PYME**,
configurando:

-   Servidor Express ejecutándose en el puerto `3000`.
-   Persistencia de datos mediante PostgreSQL en Supabase.
-   Estructura modular del backend.
-   Conexión a la base de datos mediante `pg`.
-   Variables de entorno mediante `dotenv`.
-   Endpoint de prueba `GET /api/health`.
-   Documentación de la arquitectura mediante un diagrama MVC.
-   Estructura inicial de usuarios, clientes y administradores en la
    base de datos.

------------------------------------------------------------------------

## 🏗️ Stack tecnológico

-   **Runtime:** Node.js
-   **Framework:** Express.js
-   **Base de datos:** PostgreSQL
-   **Proveedor de DB:** Supabase
-   **Cliente PostgreSQL:** `pg` utilizando Pool de conexiones
-   **Variables de entorno:** `dotenv`
-   **API:** REST
-   **Control de versiones:** Git / GitHub

------------------------------------------------------------------------

## 📂 Estructura del proyecto

La estructura implementada para el backend es:

``` text
NovaMarket-PYME/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   ├── .env
│   ├── .env.example
│   └── package.json
│
├── frontend/
├── docs/
└── README.md
```

Las credenciales y variables sensibles se mantienen en `.env`, mientras
que `.env.example` funciona como plantilla pública.

------------------------------------------------------------------------

## ▶️ Ejecución del backend

Para iniciar el backend:

``` bash
cd backend
npm run dev
```

El servidor debe quedar disponible en:

``` text
http://localhost:3000
```

------------------------------------------------------------------------

## 🧪 Health Check

Se implementó el endpoint:

``` http
GET /api/health
```

URL local:

``` text
http://localhost:3000/api/health
```

### Resultado esperado

``` http
HTTP 200 OK
```

Respuesta JSON:

``` json
{
  "status": "OK",
  "message": "Servidor NovaMarket ejecutándose correctamente",
  "timestamp": "..."
}
```

### Evidencia

La respuesta fue verificada mediante Postman y se obtuvo un `200 OK`.

También se verificó que el backend estableciera conexión con PostgreSQL
en Supabase.

------------------------------------------------------------------------

## 🗄️ Conexión a PostgreSQL / Supabase

La conexión a la base de datos se realiza mediante la librería `pg` y un
Pool de conexiones.

La configuración se encuentra en:

``` text
backend/src/config/db.js
```

La conexión utiliza variables de entorno para evitar exponer
credenciales directamente en el código fuente.

------------------------------------------------------------------------

## 🧩 Modelo de datos inicial

Para la estructura inicial de usuarios se definieron las siguientes
entidades:

### `usuario`

Centraliza los datos comunes de autenticación y registro:

-   `id_usuario`
-   `nombre`
-   `email`
-   `password_hash`
-   `fecha_creacion`

El campo `email` se define como único.

### `cliente`

Representa a los usuarios que poseen el perfil de cliente.

Se relaciona con `usuario` mediante:

``` text
cliente.id_usuario → usuario.id_usuario
```

### `administrador`

Representa a los usuarios que poseen el perfil de administrador.

Se relaciona con `usuario` mediante:

``` text
administrador.id_usuario → usuario.id_usuario
```

Las relaciones utilizan claves foráneas y `ON DELETE CASCADE`.

------------------------------------------------------------------------

## 🔗 Relaciones principales

``` text
usuario 1 ───── 0..1 cliente
usuario 1 ───── 0..1 administrador
```

La tabla `usuario` funciona como entidad central para la información
común, mientras que `cliente` y `administrador` permiten extender los
datos específicos de cada perfil.

------------------------------------------------------------------------

## 🧱 Arquitectura MVC

La arquitectura sigue una separación por responsabilidades:

``` text
Cliente / Frontend
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

### Model

Ubicación:

``` text
src/models/
src/config/db.js
```

Gestiona el acceso a PostgreSQL y las consultas necesarias para
interactuar con la base de datos.

### View

En una API REST, la vista se representa mediante respuestas JSON
enviadas al cliente.

Por ejemplo:

``` http
GET /api/health
→ HTTP 200 OK
```

### Controller

Ubicación:

``` text
src/controllers/
```

Contiene la lógica de negocio y coordina las solicitudes entre las rutas
y los modelos.

------------------------------------------------------------------------

## ✅ Criterios de aceptación / evidencia

La implementación realizada cubre los puntos principales definidos para
**SPR1.3**:

-   [x] Definición del motor de base de datos: PostgreSQL.
-   [x] Configuración de PostgreSQL mediante Supabase.
-   [x] Configuración de conexión mediante `pg`.
-   [x] Configuración de variables de entorno.
-   [x] Estructura modular del backend.
-   [x] Servidor Express ejecutándose en el puerto `3000`.
-   [x] Endpoint `GET /api/health`.
-   [x] Respuesta `HTTP 200 OK` verificada en Postman.
-   [x] Documentación de arquitectura.
-   [x] Diagrama MVC.
-   [x] Modelo inicial de usuarios, clientes y administradores.
-   [x] Documentación incorporada al directorio `/docs`.

------------------------------------------------------------------------

## 🔗 Referencias

-   **Ticket Jira:** `SCRUM-5`
-   **Repositorio:** `Talently-Lab/NovaMarket-PYME`
-   **Rama de trabajo:** `feature/backend`
-   **Documentación técnica:** SPR1.3 --- Armar la arquitectura +
    conexión a DB

------------------------------------------------------------------------

## 📝 Estado de la entrega

**SPR1.3 --- Finalizado ✅**

La implementación y documentación correspondiente a la arquitectura base
del backend, conexión con PostgreSQL/Supabase y endpoint de Health Check
fueron completadas y verificadas.
