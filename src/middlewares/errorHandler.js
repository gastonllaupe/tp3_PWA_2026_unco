const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.status === 400) {
    return res.status(400).json({
      error: err.message || err,
    });
  }

  if (err.status === 404) {
    return res.status(404).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    error: "Error interno del servidor",
  });
};

export default errorHandler;