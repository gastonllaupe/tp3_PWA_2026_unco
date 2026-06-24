import {
  registerUser,
  loginUser,
  getUserById,
} from "../services/auth.service.js";

export const register = async (
  req,
  res,
  next
) => {
  try {
    const { name, email, password } =
      req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios",
      });
    }

    const result = await registerUser(
      name,
      email,
      password
    );

    res.status(201).json(result);
  } catch (error) {
    if (error.message === "Email ya registrado") {
      return res.status(409).json({
        message: error.message,
      });
    }

    next(error);
  }
};

export const login = async (
  req,
  res,
  next
) => {
  try {
    const { email, password } =
      req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email y password son obligatorios",
      });
    }

    const result = await loginUser(
      email,
      password
    );

    res.status(200).json(result);
  } catch (error) {
    if (
      error.message ===
      "Credenciales inválidas"
    ) {
      return res.status(401).json({
        message: error.message,
      });
    }

    next(error);
  }
};

export const logout = async (
  req,
  res
) => {
  res.status(200).json({
    message: "Logout exitoso",
  });
};

export const me = async (
  req,
  res,
  next
) => {
  try {
    const user = await getUserById(
      req.user.id
    );

    if (!user) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
