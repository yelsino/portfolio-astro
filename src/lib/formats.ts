export const dateFormat = (value:any) => {
  if (!value) {
    return ""; // Si el valor es undefined o null, se devuelve una cadena vacía
  }

  const date = typeof value === "string" ? new Date(value) : value;

  if (isNaN(date.getTime())) {
    return ""; // Si el Date resultante es inválido, se devuelve una cadena vacía
  }

  const options:any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formatter = new Intl.DateTimeFormat('es-ES', options);
  const formattedDate = formatter.format(date);

  return formattedDate;
};
