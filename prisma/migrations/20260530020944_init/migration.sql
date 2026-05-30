-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "imagen" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "anio" INTEGER NOT NULL,
    "plataformas" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
