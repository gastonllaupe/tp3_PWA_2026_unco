import prisma from "./../../prisma/prismaClient.js";

export const getAllGames = async (
  page = 1,
  limit = 5,
  search = ""
) => {
  const skip = (page - 1) * limit;

  return await prisma.game.findMany({
    where: {
      titulo: {
        contains: search,
        mode: "insensitive",
      },
    },
    skip,
    take: limit,
    orderBy: {
      id: "asc",
    },
  });
};
//Si mode: "insensitive" no funciona, se puede usar:
// where: { titulo: { contains: search } }, pero no será case-insensitive
//Esto sucede porque SQLite no soporta case-insensitive por defecto, pero en otros motores como PostgreSQL sí funcionaría sin problemas.

export const getGameById = async (id) => {
  return await prisma.game.findUnique({ where: { id } });
};

export const createGame = async (data) => {
  return await prisma.game.create({ data });
};

export const updateGame = async (id, data) => {
  return await prisma.game.update({ where: { id }, data });
};

export const deleteGame = async (id) => {
  return await prisma.game.delete({ where: { id } });
};
