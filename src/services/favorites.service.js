import prisma from "./../../prisma/prismaClient.js";

export const getFavorites = async (userId) => {
  const favorites = await prisma.favorite.findMany({
    where: {
      userId,
    },
    include: {
      game: true,
    },
  });

  return favorites.map((favorite) => favorite.game);
};

export const addFavorite = async (
  userId,
  gameId
) => {
  const game = await prisma.game.findUnique({
    where: { id: gameId },
  });

  if (!game) {
    throw new Error("Juego no encontrado");
  }

  const favorite =
    await prisma.favorite.findUnique({
      where: {
        userId_gameId: {
          userId,
          gameId,
        },
      },
    });

  if (favorite) {
    throw new Error(
      "Juego ya agregado a favoritos"
    );
  }

  return await prisma.favorite.create({
    data: {
      userId,
      gameId,
    },
    include: {
      game: true,
    },
  });
};

export const removeFavorite = async (
  userId,
  gameId
) => {
  const favorite =
    await prisma.favorite.findUnique({
      where: {
        userId_gameId: {
          userId,
          gameId,
        },
      },
    });

  if (!favorite) {
    throw new Error(
      "Favorito no encontrado"
    );
  }

  return await prisma.favorite.delete({
    where: {
      userId_gameId: {
        userId,
        gameId,
      },
    },
  });
};