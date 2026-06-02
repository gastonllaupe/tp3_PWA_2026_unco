import prisma from "./../../prisma/prismaClient.js";

export const getAllGames = async () => {
  return await prisma.game.findMany();
};

export const getGameById = async (id) => {
  return await prisma.game.findUnique({ where: { id } });
};
