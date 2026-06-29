# Backend REST API — TP3 Seguridad, Autenticación y JWT

---

## Información académica

**Programación Web Avanzada — Facultad de Informática — Universidad Nacional del Comahue — 2026**

### Trabajos prácticos realizados
- TP1/TP2: REST API y Express con Prisma
- TP3: Seguridad, Autenticación y JWT

---

## Integrantes

| Nombre | Email | Rol |
| :--- | :--- | :--- |
| **Joaquín Vargas** | joaquinivl95@gmail.com | Backend |
| **Alejandro Santos Claure** | alejandroclaure01@gmail.com | Backend |
| **Gastón Llaupe** | gaston.llaupe@est.fi.uncoma.edu.ar | PM / Scrum Master |

---

## Descripción

Backend para la aplicación EsteamApp. Provee una API REST con autenticación JWT para el manejo de usuarios y favoritos. El frontend puede verse en este [repositorio](https://github.com/AlejandroClaure/tp2_PWA_2026_unco).

- Deploy frontend: https://tp2-pwa-2026-unco.vercel.app/
- Deploy backend: https://tp3-pwa-2026-unco.vercel.app/api/games

---

## Endpoints

### Juegos
| Método | Ruta | Descripción |
| :----- | :--- | :---------- |
| GET | `/api/games` | Listar juegos (paginado + búsqueda) |
| GET | `/api/games/:id` | Obtener juego por ID |
| POST | `/api/games` | Crear juego |
| PUT | `/api/games/:id` | Actualizar juego |
| DELETE | `/api/games/:id` | Eliminar juego |

### Autenticación
| Método | Ruta | Descripción | Auth |
| :----- | :--- | :---------- | :--- |
| POST | `/api/auth/register` | Registrar usuario | No |
| POST | `/api/auth/login` | Iniciar sesión | No |
| POST | `/api/auth/logout` | Cerrar sesión | No |
| GET | `/api/auth/me` | Obtener usuario autenticado | Sí |

### Favoritos (requieren token JWT)
| Método | Ruta | Descripción |
| :----- | :--- | :---------- |
| GET | `/api/favorites` | Listar favoritos del usuario |
| POST | `/api/favorites/:id` | Agregar juego a favoritos |
| DELETE | `/api/favorites/:id` | Eliminar juego de favoritos |

---

## Modelos de datos

### Game
```json
{
  "id": 1,
  "titulo": "Cyberpunk 2077",
  "genero": "RPG",
  "precio": 59.99,
  "imagen": "URL",
  "rating": 4.2,
  "anio": 2020,
  "plataformas": "PC, PS5, Xbox",
  "descripcion": "Texto descriptivo del juego...",
  "developer": "CD Projekt Red"
}
```

### User
```json
{
  "id": 1,
  "name": "Juan",
  "email": "juan@mail.com",
  "createdAt": "2026-01-01T00:00:00.000Z"
}
```
> El campo `password` se almacena en la base de datos hasheado con bcrypt pero nunca se devuelve en las respuestas de la API.

### Favorite
```json
{
  "id": 1,
  "userId": 1,
  "gameId": 5,
  "createdAt": "2026-01-01T00:00:00.000Z"
}
```

---

## Stack tecnológico

| Tecnología | Uso / Propósito |
| :--- | :--- |
| Node.js | Entorno de ejecución JavaScript en el servidor |
| Express | Framework para APIs y manejo de rutas HTTP |
| Prisma ORM | Comunicación con la base de datos mediante modelos |
| PostgreSQL | Base de datos relacional |
| Neon | PostgreSQL como servicio en la nube |
| bcrypt | Hash seguro de contraseñas |
| jsonwebtoken | Generación y verificación de tokens JWT |

---

## Variables de entorno

Crear un archivo `.env` en la raíz con las siguientes variables:

```env
DATABASE_URL="postgresql://..."
JWT_SECRET="tu_clave_secreta"
```

> El archivo `.env.example` incluido en el repo tiene la estructura base.

---

## Instalación y setup

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/gastonllaupe/tp3_PWA_2026_unco.git
   ```

2. **Entrar al directorio:**
   ```bash
   cd tp3_PWA_2026_unco
   ```

3. **Cambiar a la rama de desarrollo:**
   ```bash
   git checkout develop
   ```

4. **Instalar dependencias:**
   ```bash
   npm install
   ```

5. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env
   # Completar DATABASE_URL y JWT_SECRET en .env
   ```

6. **Generar el cliente de Prisma:**
   ```bash
   npx prisma generate
   ```

7. **Ejecutar el servidor:**
   ```bash
   npm run dev
   ```

> La API estará disponible en `http://localhost:3000`

---

## Estructura del proyecto

```text
src/
 ├── controllers/
 │    ├── auth.controller.js       # register, login, logout, me
 │    ├── favorites.controller.js  # getFavorites, addFavorite, removeFavorite
 │    └── games.controller.js
 ├── middlewares/
 │    ├── authMiddleware.js        # verificación de token JWT
 │    └── errorHandler.js
 ├── routes/
 │    ├── auth.routes.js
 │    ├── favorites.routes.js
 │    └── games.routes.js
 ├── services/
 │    ├── auth.service.js          # bcrypt + JWT
 │    ├── favorites.service.js
 │    └── games.service.js
 ├── validations/
 │    └── games.validation.js
 ├── app.js                        # configuración de Express y rutas
 └── index.js                      # levanta el servidor
prisma/
 ├── schema.prisma                 # modelos: Game, User, Favorite
 └── migrations/
```

---

## Estrategia de branches

```
main
 └── develop
      ├── setup-4-security-setup
      ├── Feat-backend-user
      └── feat-favorites-backend
```

| Branch | Propósito |
| :----- | :-------- |
| `main` | Código estable para entregar |
| `develop` | Integración del trabajo del equipo |

### Flujo de trabajo

```bash
# Actualizar develop antes de empezar
git checkout develop
git pull origin develop

# Crear branch para la tarea
git checkout -b feat-nombre-tarea

# Desarrollar, commitear y subir
git add .
git commit -m "feat: descripción"
git push origin feat-nombre-tarea

# Abrir Pull Request a develop en GitHub
```

### Reglas del equipo

- No se hacen commits directos a `main` ni a `develop` — siempre por PR
- Cada PR necesita al menos una aprobación para mergear
- Resolver conflictos en la feature branch, no en develop
