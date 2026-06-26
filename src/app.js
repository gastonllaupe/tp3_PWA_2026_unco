import express from "express";
import cors from "cors";
import favoritesRouter from "./routes/favorites.routes.js";
import gamesRouter from "./routes/games.routes.js";
import errorHandler from "./middlewares/errorHandler.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://tp2-pwa-2026-unco.vercel.app",
    ],
  })
);

app.use(express.json());

app.use("/api/games", gamesRouter);

app.use("/api/auth", authRouter);

app.use("/api/favorites", favoritesRouter);

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "API funcionando correctamente",
  });
});

app.use((req, res, next) => {
  const error = new Error("Ruta no encontrada");
  error.status = 404;
  next(error);
});

app.use(errorHandler);

export default app;