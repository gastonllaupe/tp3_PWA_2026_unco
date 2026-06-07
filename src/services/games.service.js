import prisma from "./../../prisma/prismaClient.js";

export const getAllGames = async () => {
  return await prisma.game.findMany();
};

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
