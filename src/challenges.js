// Desafio 1
const compareTrue = (p1, p2) => (p1 === true && p2 === true);

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (string) => string.split(' ');

// Desafio 4
const concatName = (array) => `${array.length - 1}, ${array[0]}`;

// Desafio 5
/*
  Depois de encucar sobre o que a Ellen e o Lucas falaram sobre o return fui pesquisar mais sobre ele e percebi que não preciso mandar os calculos para uma let para depois retornar ela pois o return sozinho faz(bem parecido com o console.log). Pensando em como até agora os exercicios não estão complexos(estranho isso!) vamos ao raciocinio do desafio atual.

  Se wins vale 3 e ties vale é só a gente multiplicar win por 3 e somar com tie. Desse jeito:
*/
function footballPoints(win, tie) {
  return (win * 3) + tie;
}
footballPoints(7, 1);
// P.S.: Estou aproveitando os comments pra treinar digitação dinamica.

// Desafio 6
/*
  Ok, essa foi mais complexa. O meu maior maior problema foi fazer a segunda função. Após faze-la tive que voltar na primeira e fazer a condicional para números negativos e agora que acabei esse desafio vou comemorar um som altão pra atrapalhar o vizinho a dormir (brinks kk ou será que não?).
*/
// let number = [0, 2, 2, 1, 0];
function justOneHighNumber(number) {
  let highest = number[0];

  for (let index = 0; index < number.length - 1; index += 1) {
    if (number[index] > highest) {
      highest = number[index];
    } if (number[index] < 0) {
      highest = -1;
    }
  }
  return highest;
}

function highestCount(number) {
  let highest = justOneHighNumber(number);
  let contador = 0;
  for (let index of number) {
    if (index === highest) {
      contador += 1;
    }
  }
  return contador;
}
highestCount([1, 9, 2, 3, 9, 5, 7]);

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
console.log(fizzBuzz(2, 9, 25));

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
