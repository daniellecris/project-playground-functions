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
  let numMaior = Math.max.apply(null, numRepete);

  for (let index = 0; index < numRepete.length; index += 1) { 
    if (numMaior === numRepete[index]) {
      contMaior += 1;
    }
  }
  return contMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  //seu código aqui
  //pesquisei o Math.abs no https://www.devmedia.com.br/matematica-em-javascript-o-objeto-math/27439
  let resCat1 = Math.abs(cat1 - mouse);
  let resCat2 = Math.abs(cat2 - mouse);

  if (resCat1 === resCat2) {
    return ('os gatos trombam e o rato foge');
  }
  
  if (resCat1 < resCat2) {
    return 'cat1';
  }
  return ('cat2');
} 

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  //Thalles explicou e indicou o https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
  let arrayFizzBuzz = [];

  for (let index = 0; index < array.length; index += 1) {
    if (!(array[index] % 3) && !(array[index] % 5)) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (!(array[index] % 3)) {
      arrayFizzBuzz.push('fizz');
    } else if (!(array[index] % 5)) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
 return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  //consultei o método replace no https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
  string = string.replace(/a/gi, '1');
  string = string.replace(/e/gi, '2');
  string = string.replace(/i/gi, '3');
  string = string.replace(/o/gi, '4');
  string = string.replace(/u/gi, '5');

  return string;
}

function decode(string) {
  // seu código aqui
  //consultei o método replace no https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
  string = string.replace(/1/gi, 'a');
  string = string.replace(/2/gi, 'e');
  string = string.replace(/3/gi, 'i');
  string = string.replace(/4/gi, 'o');
  string = string.replace(/5/gi, 'u');

  return string;
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
