import express from "express";
import cors from "cors";

import gamesRouter from "./routes/games.routes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(
  cors({
    origin: [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean),
  })
);

app.use(express.json());

app.use("/api/games", gamesRouter);

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