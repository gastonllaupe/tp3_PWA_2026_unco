# Backend REST API y EXPRESS


---

## 📚 Información académica

**Programación Web Avanzada — Facultad de Informática — Universidad Nacional del Comahue — 2026**

### Trabajos prácticos realizados
- TP: REST API y Express

---

## 👥 Integrantes

| Nombre | Email | Rol |
| :--- | :--- | :--- |
| **Joaquín Vargas** | joaquinivl95@gmail.com | Backend |
| **Alejandro Santos Claure** | alejandroclaure01@gmail.com | Backend |
| **Gastón Llaupe** | gaston.llaupe@est.fi.uncoma.edu.ar | PM / Scrum Master |

---

## 🧾 Descripción

Backend para aplicación de videojuegos, la base de datos contara con detalles de cada juego y sera utilizada por el proyecto de frontend que puede ser visto en este repositorio:
[text](https://github.com/AlejandroClaure/tp2_PWA_2026_unco)


---


### Librerías utilizadas

- Node.js
- Express
- Prisma ORM
- PostgreSQL

---


## Modelo de Datos

La estructura de los objetos tiene este formato:

```json
{
  "id": "1",
  "titulo": "Cyberpunk 2077",
  "genero": "RPG",
  "precio": 59.99,
  "imagen": "URL",
  "rating": 4.2,
  "isFavorite": false,
  "anio": 2020,
  "plataformas": "PC, PS5, Xbox",
  "descripcion": "Texto descriptivo del juego...",
  "developer": "CD Projekt Red"
}

```

---

## ⚙️ Stack Tecnológico

| Tecnología | Uso / Propósito |
| :--- | :--- |
| **React** | Biblioteca principal para la interfaz de usuario |
| **Vite** | Tooling y entorno de desarrollo ultra rápido |
| **Tailwind CSS v4** | Estilado mediante utilidades de última generación |
| **React Router** | Manejo de navegación y rutas de la SPA |
| **MockAPI** | Backend simulado para el consumo de datos |
| **localStorage** | Persistencia local para la lista de favoritos |
| **Vitest** | Framework de testing |
| **React Testing Library** | Testing de componentes React |
| **jest-dom** | Matchers adicionales para testing |
| **user-event** | Simulación de eventos de usuario |
| **i18next** | Internacionalización |

---


## 🚀 Instalación y Setup

Para poner en marcha el proyecto localmente, seguí estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone .git
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

5. **Ejecutar el proyecto:**
   ```bash
   npm run dev
   ```

---

<img src="https://img.shields.io/badge/RTL-Testing_Library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white" /> 
Ejecución de tests

### Ejecutar tests en modo watch

```bash
npm run test
```

### Ejecutar tests una sola vez

```bash
npm run test:run
```

---

## 📁 Estructura del Proyecto

```text
src/
 ├── components/       # Componentes (GameCard, List, SearchBar, etc.)
 ├── pages/            # Vistas (Home, Details, Favorites, NotFound)
 ├── const/            # Definición de rutas (routes.js)
 ├── main.jsx          # Punto de entrada de React
 └── index.css         # Directivas de Tailwind
```

---

## Estrategia de Branches

```
main
 └── develop
      ├── feature/SETUP-1-init-react
      ├── feature/COMP-1-titulo
      ├── feature/FEAT-1-agregar-media
      └── ...
```

### Ramas principales

| Branch    | Propósito                                                                                 |
| --------- | ----------------------------------------------------------------------------------------- |
| `main`    | Código estable y listo para entregar. Se realiza un merge desde `develop` cuando hay una versión lista. |
| `develop` | Los desarrolladores integran su trabajo en esta rama antes de poder incorporarlo a `main`.                 |

### Ramas de trabajo

Cada tarea del tablero = una branch. Formato:

```
feature/<ID-LINEAR>-descripcion-corta

Ejemplos:
  feature/COMP-1-titulo
  feature/FEAT-3-editar-media
  feature/DOC-1-readme
```

### Cómo crear una branch

```bash
# Nos ubicamos en develop y nos aseguramos de estar actualizados
git checkout develop
git pull origin develop

# Creamos la branch con el formato correcto
git checkout -b feature/COMP-1-titulo

# Verificamos estar en la branch
git branch
```

> Si es la primera vez que subís la branch al repositorio remoto:
>
> ```bash
> git push -u origin feature/COMP-1-titulo
> ```
>
> Las veces siguientes alcanza con `git push`.

---

### Flujo de trabajo diario

```bash
# 1. Antes de empezar una tarea, actualizar desde develop
git checkout develop
git pull origin develop

# 2. Crear branch para la tarea
git checkout -b feature/FEAT-1-agregar-media

# 3. Desarrollar y realizar commits
git add .
git commit -m "FEAT-1: agregar formulario de nueva pelicula"

# 4. Subir la branch
git push origin feature/FEAT-1-agregar-media

# 5. Abrir Pull Request a develop en GitHub
# Título del PR: [FEAT-1] Agregar pelicula/serie
# El PM hace code review antes de mergear
```


---

### Reglas del equipo

- **No se realizan commits directos a `main` ni a `develop`** — siempre por PR
- Cada PR necesita ser aprobado por al menos una persona
- Resolver conflictos en la feature branch, no en develop
- Cada tarea va en su respectivo PR