const compareTrue = (parameter1, parameter2) => (parameter1 === true && parameter2 === true);

const calcArea = (base, height) => (base * height) / 2;

const splitSentence = (string) => string.split(' ');

const concatName = (array) => `${array.length - 1}, ${array[0]}`;

const footballPoints = (wins, ties) => (wins * 3) + ties;

const highestCount = (array) => array.filter((num) => num === Math.max(...array)).length;

// Desafio 7
/*
  Ok. Esse eu empaquei, porém o Bruno fez meu cerebro voltar a raciocinar e... Consegui. O unico problema é que o ESLint ta acusando erro de compatibilidade. Depois vou procurar um jeito de melhorar esse código.

  Edit:
*/
function catAndMouse(mouse, cat1, cat2) {
  let dCat1 = mouse - cat1;
  let dCat2 = mouse - cat2;

  if ((dCat1 < mouse && dCat1 > dCat2) || (dCat1 > mouse && dCat1 < dCat2)) {
    return 'cat1';
  } if ((dCat2 < mouse && dCat2 > dCat1) || (dCat2 > mouse && dCat2 < dCat1)) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
/*
  Esse me pegou em um momento pois eu estava pondo um monte de if e não else if, dai ele estava correndo varios resultados e pondo tudo la dentro.
*/
function fizzBuzz(numbers) {
  let anwser = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      anwser.push('fizzBuzz');
    } else if (numbers[i] % 3 === 0) {
      anwser.push('fizz');
    } else if (numbers[i] % 5 === 0) {
      anwser.push('buzz');
    } else {
      anwser.push('bug!');
    }
  }
  return anwser;
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
