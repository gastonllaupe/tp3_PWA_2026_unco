# Backend REST API y EXPRESS


---

## Información académica

**Programación Web Avanzada — Facultad de Informática — Universidad Nacional del Comahue — 2026**

### Trabajos prácticos realizados
- TP: REST API y Express

---

## Integrantes

| Nombre | Email | Rol |
| :--- | :--- | :--- |
| **Joaquín Vargas** | joaquinivl95@gmail.com | Backend |
| **Alejandro Santos Claure** | alejandroclaure01@gmail.com | Backend |
| **Gastón Llaupe** | gaston.llaupe@est.fi.uncoma.edu.ar | PM / Scrum Master |

---

## Descripción

Backend para aplicación de videojuegos, la base de datos contara con detalles de cada juego y sera utilizada por el proyecto de frontend que puede ser visto en este [repositorio](https://github.com/AlejandroClaure/tp2_PWA_2026_unco)


---


### Librerías utilizadas

- Express
- Prisma ORM

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

## Stack Tecnológico

| Tecnología | Uso / Propósito |
| :--- | :--- |
| Node.js | Entorno de ejecución que permite correr JavaScript en el servidor. |
| Express | Framework que simplifica la creación de APIs y manejo de rutas HTTP. |
| Prisma ORM | Herramienta que facilita la comunicación entre la aplicación y la base de datos usando modelos en lugar de SQL directo. |
| PostgreSQL | Sistema de base de datos relacional donde se almacenan los datos de forma estructurada. |
| NEON | Plataforma cloud que provee PostgreSQL como servicio para poder usar la base de datos en la nube sin administrarla localmente. |

---


## Instalación y Setup

Para poner en marcha el proyecto localmente, seguí estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone .git https://github.com/gastonllaupe/tp3_PWA_2026_unco
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


---

## Estructura del Proyecto

```text
src/
 ├── controllers/      #recibe req y res, llama a service y responde al front end 
 ├── middlewares/      #maneja errores globales     
 ├── prisma/           #todo lo relacionado a la base de datos 
 ├── routes/           #define las rutas de la API
 └── services/         #se relaciona con prisma, procesa datos
 └── validations/      #valida los datos del usuario
 └── app.js            #configuracion del servidor express
 └── index.js          #levanta el servidor

```

---

## Estrategia de Branches

```
main
 └── develop
      ├── feature/SETUP-1-init-prisma
      ├── feature/FEAT-1-games-read
      ├── feature/FEAT-2-games-write
      └── ...
```

### Ramas principales

| Branch    | Propósito                                                                                 |
| --------- | ----------------------------------------------------------------------------------------- |
| `main`    | Código estable y listo para entregar. Se realiza un merge desde `develop` cuando hay una versión lista. |
| `develop` | Los desarrolladores integran su trabajo en esta rama antes de poder incorporarlo a `main`.                 |

### Ramas de trabajo

Cada tarea del tablero se trabajara en su respectiva branch.


### Cómo crear una branch

```bash
# Nos ubicamos en develop y nos aseguramos de estar actualizados
git checkout develop
git pull origin develop

# Creamos la branch con el formato correcto
git checkout -b feat-4-error-handling

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
git checkout -b feature/FEAT-1-games-read

# 3. Desarrollar y realizar commits
git add .
git commit -m "FEAT-1: GET a los juegos"

# 4. Subir la branch
git push origin feature/FEAT-1-games-read

# 5. Abrir Pull Request a develop en GitHub
# Título del PR: [FEAT-1] Leer juegos
# El PM hace code review antes de mergear
```


---

### Reglas del equipo

- **No se realizan commits directos a `main` ni a `develop`** — siempre por PR
- Cada PR necesita ser aprobado por al menos una persona
- Resolver conflictos en la feature branch, no en develop
- Cada tarea va en su respectivo PR