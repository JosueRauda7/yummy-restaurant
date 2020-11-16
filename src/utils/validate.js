export const esStringRequerido = (cadena) => {
  return cadena.trim().length > 0;
};

export const esNumero = (numero) => {
  try {
    const number = parseInt(numero.trim());
    return typeof number === "number";
  } catch (error) {
    return false;
  }
};

export const esTelefono = (numero) => {
  try {
    let telefono = numero.split("-")[0] + numero.split("-")[1];
    return esNumero(telefono);
  } catch (error) {
    return false;
  }
};

export const esSecureCode = (numero) => {
  try {
    return esNumero(numero) && numero.length === 3;
  } catch (error) {
    return false;
  }
};

export const esNumeroTarjeta = (numero) => {
  return esNumero(numero) && numero.split(" ").join("").trim().length === 16;
};

export const esFechaVencimiento = (fecha) => {
  try {
    const [month, year] = fecha.split("/");
    return month > 0 && month <= 12 && "20" + year >= new Date().getFullYear();
  } catch {
    return false;
  }
};
