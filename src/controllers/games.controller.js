import {
  getAllGames as getAllGamesService,
  getGameById as getGameByIdService,
  createGame as createGameService,
  updateGame as updateGameService,
  deleteGame as deleteGameService,
} from "./../services/games.service.js";
import { validateGame } from "./../validations/games.validation.js";

export const getAllGames = async (req, res, next) => {
  try {
    const games = await getAllGamesService();
    res.status(200).json(games);
  } catch (error) {
    next(error);
  }
};

export const getGameById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const gameById = await getGameByIdService(id);
    if (gameById) {
      res.status(200).json(gameById);
    } else {
      const error = new Error("Juego no encontrado");
      error.status = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

export const createGame = async (req, res, next) => {
  try {
    const error = validateGame(req.body);
    if (error) {
      error.status = 400;
      return next(error);
    }
    const newGame = await createGameService(req.body);
    res.status(201).json(newGame);
  } catch (error) {
    next(error);
  }
};

export const updateGame = async (req, res, next) => {
  try {
    const error = validateGame(req.body);
    if (error) {
      error.status = 400;
      return next(error);
    }
    const idGame = parseInt(req.params.id);
    const update = await updateGameService(idGame, req.body);
    if (update) {
      res.status(200).json(update);
    } else {
      const error = new Error("Juego no encontrado");
      error.status = 404;
      next(error);
    }
  } catch (error) {
      next(error);
  }
};

export const deleteGame = async (req, res, next) => {
  try {
    const idGame = parseInt(req.params.id);
    const deleteGameX = await deleteGameService(idGame);
    if (deleteGameX) {
      res.status(200).json(deleteGameX);
    } else {
      const error = new Error("Juego no encontrado");
      error.status = 404;
      next(error);
    }
  } catch (error) {
      next(error);
  }
};
