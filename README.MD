# TaskFlow API - Backend (Sesión 20)

API RESTful Express para la gestión de tareas, implementando capas de seguridad, validación y manejo de errores.

##  Variables de Entorno Requeridas
El proyecto utiliza la librería `dotenv` para la gestión de configuración. Debes crear un archivo `.env` en la raíz del proyecto basado en la siguiente estructura:

PORT=3000
FRONTEND_ORIGIN=http://localhost:3000

##  Archivos No Versionados (.gitignore)
Por motivos de seguridad y buenas prácticas, los siguientes archivos y carpetas están excluidos del control de versiones de Git:

node_modules/: Dependencias de Node.js instaladas localmente.

env: Credenciales, puertos y variables de entorno sensibles del entorno de desarroll

##  Consideraciones de Seguridad
¿Por qué CORS no es autenticación?
CORS es un mecanismo de seguridad implementado por los navegadores web para restringir qué páginas web de otros dominios pueden leer las respuestas de nuestra API.

Medidas pendientes para entorno de producción:
Para llevar esta API a un entorno de producción real, se deben implementar las siguientes mejoras de seguridad:

1. HTTPS (SSL/TLS): Cifrar todo el tráfico en tránsito.

2. Rate Limiting: Limitar el número de peticiones por IP en un tiempo determinado.

3. Password Hashing: Implementar encriptación de contraseñas.

4. Validación avanzada de cabeceras y sanitización adicional contra inyecciones.
