# TaskFlow API - Backend (Sesión 21 Arquitectura por Capas y Autenticación)

API RESTful Express para la gestión de tareas, implementando una arquitectura limpia por capas (Routes, Controllers, Use Cases, Repositories, Entities), validación declarativa con `express-validator`, seguridad con Helmet y CORS, y manejo centralizado de errores.

Arquitectura del Proyecto
El proyecto desacopla las responsabilidades en las siguientes capas:
- **Routes (`src/routes/`)**: Definición de endpoints HTTP (`/api/tasks`, `/registro`, `/login`, `/logout`).
- **Controllers (`src/controllers/`)**: Manejo de peticiones/respuestas, códigos de estado y control de excepciones hacia el manejador central.
- **Use Cases (`src/useCases/`)**: Lógica de negocio pura, independientes de Express (`req`/`res`).
- **Repositories (`src/repositories/`)**: Gestión de persistencia (en memoria para tareas, mediante `fs/promises` y `src/data/users.json` para usuarios).
- **Entities (`src/entities/`)**: Definición de modelos de datos para tareas y usuarios.

---

## 🚀 Instalación y Ejecución

1. Instalar las dependencias del proyecto:
   npm install

##  Variables de Entorno Requeridas
El proyecto utiliza la librería `dotenv` para la gestión de configuración. Debes crear un archivo `.env` en la raíz del proyecto basado en la siguiente estructura:

PORT=3000
FRONTEND_ORIGIN=http://localhost:3000

##  Archivos No Versionados (.gitignore)
Por motivos de seguridad y buenas prácticas, los siguientes archivos y carpetas están excluidos del control de versiones de Git:

node_modules/: Dependencias de Node.js instaladas localmente.

env: Credenciales, puertos y variables de entorno sensibles del entorno de desarroll

Endpoints de la API
1. Tareas (/api/tasks)
GET /api/tasks: Devuelve el listado de tareas.

POST /api/tasks: Crea una nueva tarea (validada con express-validator).

PUT /api/tasks/:id: Actualiza una tarea existente.

DELETE /api/tasks/:id: Elimina una tarea (responde con código 204 sin cuerpo).

2. Autenticación (/api/auth o rutas raíz especificadas)
POST /registro: Registra un nuevo usuario (name, email, contraseña de al menos 8 caracteres). Valida duplicados (responde 409 si el correo ya existe).

POST /login: Autentica al usuario validando sus credenciales (responde 401 si son incorrectas).

POST /logout: Cierra la sesión del usuario.

##  Consideraciones de Seguridad
¿Por qué CORS no es autenticación?
CORS es un mecanismo de seguridad implementado por los navegadores web para restringir qué páginas web de otros dominios pueden leer las respuestas de nuestra API.

Medidas pendientes para entorno de producción:
Para llevar esta API a un entorno de producción real, se deben implementar las siguientes mejoras de seguridad:

1. HTTPS (SSL/TLS): Cifrar todo el tráfico en tránsito.

2. Rate Limiting: Limitar el número de peticiones por IP en un tiempo determinado.

3. Password Hashing: Implementar encriptación de contraseñas.

4. Validación avanzada de cabeceras y sanitización adicional contra inyecciones.
