import express from "express";

const app = express();

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "API funcionando correctamente",
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});