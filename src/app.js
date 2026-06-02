import express from "express";
import gamesRouter from "./routes/games.routes.js";

const app = express();

app.use(express.json());
app.use("/api/games", gamesRouter);

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "API funcionando correctamente",
  });
});

export default app;
