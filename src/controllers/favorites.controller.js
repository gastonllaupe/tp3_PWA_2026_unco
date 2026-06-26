import {
  getFavorites as getFavoritesService,
  addFavorite as addFavoriteService,
  removeFavorite as removeFavoriteService,
} from "../services/favorites.service.js";

export const getFavorites = async (
  req,
  res,
  next
) => {
  try {
    const favorites =
      await getFavoritesService(req.user.id);

    res.status(200).json(favorites);
  } catch (error) {
    next(error);
  }
};

export const addFavorite = async (
  req,
  res,
  next
) => {
  try {
    const gameId = parseInt(req.params.id);

    if (isNaN(gameId)) {
      return res.status(400).json({
        message: "ID de juego inválido",
      });
    }

    const favorite =
      await addFavoriteService(
        req.user.id,
        gameId
      );

    res.status(201).json(favorite);
  } catch (error) {
    if (
      error.message ===
      "Juego no encontrado"
    ) {
      return res.status(404).json({
        message: error.message,
      });
    }

    if (
      error.message ===
      "Juego ya agregado a favoritos"
    ) {
      return res.status(409).json({
        message: error.message,
      });
    }

    next(error);
  }
};

export const removeFavorite = async (
  req,
  res,
  next
) => {
  try {
    const gameId = parseInt(req.params.id);

    if (isNaN(gameId)) {
      return res.status(400).json({
        message: "ID de juego inválido",
      });
    }

    const favorite =
      await removeFavoriteService(
        req.user.id,
        gameId
      );

    res.status(200).json(favorite);
  } catch (error) {
    if (
      error.message ===
      "Favorito no encontrado"
    ) {
      return res.status(404).json({
        message: error.message,
      });
    }

    next(error);
  }
};