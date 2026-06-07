export const validateGame = (data) => {
  if (!data.titulo || data.titulo.trim() === "") {
    return "El titulo es obligatorio";
  }
  if (!data.genero || data.genero.trim() === "") {
    return "El genero es obligatorio";
  }
  if (isNaN(data.precio)) {
    return "El precio es obligatorio y debe ser numerico";
  }
  if (isNaN(data.rating)) {
    return "El rating es obligatorio y debe ser numérico";
  }
  if (isNaN(data.anio)) {
    return "El anio es obligatorio y debe ser numérico";
  }
  if (!data.developer || data.developer.trim() === "") {
    return "El developer es obligatorio";
  }

  return null;
};
