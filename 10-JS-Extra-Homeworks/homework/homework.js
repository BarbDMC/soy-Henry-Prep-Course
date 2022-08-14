// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const newArray = [];

  for (const key in objeto) {
    const objectToArray = [key, objeto[key]]
    newArray.push(objectToArray);
  }

  return newArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const splitString = string.split('');
  const letterObject = {};

  splitString.forEach((letter) => {
    if (letter in letterObject) {
      letterObject[letter] = letterObject[letter] + 1
    }

    if (!(letter in letterObject)) {
      letterObject[letter] = 1
    }
  });
  
  return letterObject;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  const splitString = s.split('');
  
  const upperCaseLetters = splitString.filter((letter) => letter.toUpperCase() === letter);
  const lowerCaseLetters = splitString.filter((letter) => letter.toLowerCase() === letter);
  
  const joinUpperLetters = upperCaseLetters.join('');
  const joinLowerLetters = lowerCaseLetters.join('');

  return `${joinUpperLetters}${joinLowerLetters}`;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  const splitString = str.split(' ');

  const reversePhrase = splitString.map((word) => {
    const splitWord = word.split('');
    const reverseWordArray = splitWord.reverse();
    const joinReverseWord = reverseWordArray.join('');

    return joinReverseWord;
  });

  const joinReversePhrase = reversePhrase.join(' ');

  return joinReversePhrase;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  const originalNumber = numero.toString().split('')
  const reverseNumber = numero.toString().split('').reverse();
  let is_capicua = true;

  for (let index = 0; index < originalNumber.length; index++) {
    if (originalNumber[index] !== reverseNumber[index]) {
      is_capicua = false;
    }
  }

  return is_capicua ? 'Es capicua' : 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  const stringWithoutABC = cadena.replaceAll(/[abc]/g, '');

  return stringWithoutABC;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  const wordsByLength = arr.sort((previousWord, currentWord) => previousWord.length - currentWord.length);
  
  return wordsByLength;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  const commonNumbers = arreglo1.filter((number) => {
    return arreglo2.indexOf(number) !== -1;
  });

  return commonNumbers;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

