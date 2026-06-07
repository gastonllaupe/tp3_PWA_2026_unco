import {
  getAllGames as getAllGamesService,
  getGameById as getGameByIdService,
  createGame as createGameService,
  updateGame as updateGameService,
  deleteGame as deleteGameService,
} from "./../services/games.service.js";
import { validateGame } from "./../validations/games.validation.js";

export const getAllGames = async (req, res) => {
  try {
    const games = await getAllGamesService();
    res.status(200).json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al cargar los juegos" });
  }
};

export const getGameById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const gameById = await getGameByIdService(id);
    if (gameById) {
      res.status(200).json(gameById);
    } else {
      res.status(404).json({ error: "juego no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al mostrar juego ingresado por id" });
  }
};

export const createGame = async (req, res) => {
  try {
    const error = validateGame(req.body);
    if (error) {
      return res.status(400).json({ error });
    }
    const newGame = await createGameService(req.body);
    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ error: "Error al crear nuevo juego" });
  }
};

export const updateGame = async (req, res) => {
  try {
    const error = validateGame(req.body);
    if (error) {
      return res.status(400).json({ error });
    }
    const idGame = parseInt(req.params.id);
    const update = await updateGameService(idGame, req.body);
    if (update) {
      res.status(200).json(update);
    } else {
      res.status(404).json({ error: "juego no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error en el intentar actualizar juego" });
  }
};

export const deleteGame = async (req, res) => {
  try {
    const idGame = parseInt(req.params.id);
    const deleteGameX = await deleteGameService(idGame);
    if (deleteGameX) {
      res.status(200).json(deleteGameX);
    } else {
      res.status(404).json({ error: "juego no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: " Error al intentar eliminar le juego" });
  }
};
