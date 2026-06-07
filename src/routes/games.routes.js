import { Router } from "express";
import {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
} from "./../controllers/games.controller.js";

const router = Router();
router.post("/", createGame);
router.get("/", getAllGames);
router.get("/:id", getGameById);
router.put("/:id", updateGame);
router.delete("/:id", deleteGame);
export default router;
