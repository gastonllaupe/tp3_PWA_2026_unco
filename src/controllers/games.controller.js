import {
  getAllGames as getAllGamesService,
  getGameById as getGameByIdService,
} from "./../services/games.service.js";

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
