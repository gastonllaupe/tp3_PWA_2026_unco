import { Router } from "express";

import {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
  toggleFavoriteGame,
  getFavoriteGames,
} from "./../controllers/games.controller.js";

const router = Router();

router.post("/", createGame);
router.get("/", getAllGames);
router.get("/favorites", getFavoriteGames);

router.get("/:id", getGameById);

router.put("/:id", updateGame);
router.delete("/:id", deleteGame);

// FEATURE 7
router.patch("/:id/favorite", toggleFavoriteGame);

export default router;