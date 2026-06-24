import { verifyToken } from "../services/auth.service.js";

export const authMiddleware = (
  req,
  res,
  next
) => {
  try {
    const authHeader =
      req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Token requerido",
      });
    }

    if (
      !authHeader.startsWith("Bearer ")
    ) {
      return res.status(403).json({
        message: "Formato de token inválido",
      });
    }

    const token =
      authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Token requerido",
      });
    }

    req.user = verifyToken(token);

    next();
  } catch (error) {
    return res.status(403).json({
      message: "Token inválido o expirado",
    });
  }
};