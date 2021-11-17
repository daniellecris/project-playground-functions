// Desafio 1
function compareTrue(bool_1, bool_2) {
  // seu código aqui
  if ((bool_1 === true) && (bool_2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  let result = (base * heigth) / 2;
  return result;
}

// Desafio 3
function splitSentence(stringRecebida) {
  // seu código aqui
  //consultei o método split no https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/
  let resultado = stringRecebida.split(' ');
  return resultado;
}

// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  let first = stringArray[0];
  let last = (stringArray[stringArray.length-1]);
  let concatenado = (last + ', ' + first);

  return concatenado
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let resultado = ((3 * wins) + ties);
  return resultado;
}

//Desafio 6
function highestCount(numRepete) {
  // seu código aqui
  //consultei o Math.max no https://pt.stackoverflow.com/
  let contMaior = 0;
  let numMaior = Math.max.apply(null,numRepete);

  for (index = 0; index < numRepete.length; index++) { 
    if (numMaior === numRepete[index]) {
      contMaior = contMaior + 1;
    }
  }
  return contMaior;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
