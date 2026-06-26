import { Router } from "express";

import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "../controllers/favorites.controller.js";

import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.use(authMiddleware);

router.get("/", getFavorites);

router.post("/:id", addFavorite);

router.delete("/:id", removeFavorite);

export default router;