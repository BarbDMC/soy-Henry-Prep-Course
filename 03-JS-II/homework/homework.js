// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  return x > y ? x : y;
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  return edad >= 18 ? 'Allowed' : 'Not allowed';
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  const status_types = {
    1: 'Online',
    2: 'Away'
  }

  return status_types[status] || 'Offline';
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  const language_to_lowercase = idioma ? idioma.toLowerCase() : '';
  const languages_list = {
    aleman: 'Guten Tag!',
    mandarin: 'Ni Hao!',
    ingles: 'Hello!'
  }

  return languages_list[language_to_lowercase] || 'Hola!';
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color) {
    case 'blue':
      return 'This is blue';
    case 'red':
      return 'This is red';
    case 'green':
      return 'This is green';
    case 'orange':
      return 'This is orange';
    default:
      return 'Color not found';
  }

}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  const valid_number = {
    5: true,
    10: true
  };

  return valid_number[numero] || false;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero > 20 && numero < 50 ? true : false;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  return Number.isInteger(numero) ? true : false;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  const is_divisible_3 = numero % 3 === 0 ? true : false;
  const is_divisible_5 = numero % 5 === 0 ? true : false;

  if (is_divisible_3 && is_divisible_5) {
    return 'fizzbuzz';
  }

  if (is_divisible_3) {
    return 'fizz';
  }

  if (is_divisible_5) {
    return 'buzz';
  }

  return numero;
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  const is_num1_upper = num1 > num2 && num1 > num3 ? true : false;
  const is_num3_upper = num3 > num1 && num3 > num2 ? true : false;
  const is_zero = num1 === 0 || num2 === 0 || num3 === 0 ? true : false;
  const negative_numbers = num1 < 0 || num2 < 0 || num3 < 0 ? true : false;

  if (is_num1_upper && !negative_numbers && !is_zero) {
    return 'Número 1 es mayor y positivo';
  }

  if (is_num3_upper && !negative_numbers && !is_zero) {
    return num3 + 1;
  }

  if (is_zero) {
    return 'Error';
  }

  if (negative_numbers) {
    return 'Hay negativos';
  }

  return false;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  let divisors = [];
  let current_divisor = 1;
  for (let index = 0; index < numero; index++) {
    if (numero % current_divisor === 0) {
      divisors.push(current_divisor);
    }
    current_divisor++;
  }

  const is_prime = divisors.length === 2 && divisors[0] === 1 && divisors[1] === numero;

  if (is_prime) {
    return true;
  }

  return false;
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  return valor ? 'Soy verdadero' : 'Soy falso';
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  const six_table = [];
  for (let index = 0; index < 11; index++) {
    six_table.push(6 * index);
  }
  return six_table;
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  return String((Math.abs(numero))).length === 3 ? true : false;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let times = 0;
  let value = numero;
  do {
    value += 5;  
    times++;
  } while (times < 8);

  return value;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
