// Desafio 1
function compareTrue(parameter1, parameter2) {
  if (parameter1 === true && parameter2 === true) {
    return true;
  }
  return false;
}
compareTrue();
/*
Para a resolução desse primeiro desafio eu primeiro separei o que se pedia e como poderia implementar.

Depois eu fui para o baby steps onde criei os parametros e depois fiz a comparação consolando para ver se deu certo.

Após isso fiz um return para true e acabei por colocar nessa função apenas mais return com o false a pedido do eslint.
*/

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}
calcArea();
/*
Nesse desafio acabei por usar conceitos do processo seletivo. usei colinha do próprio github para codar o calculo e fiz a interpretação do desafio.

Definidos os parametros base e height criei uma let para receber o resultado, ou seja, a area.

Após isso simplesmente fiz o calculo proposto dentro da variavel resultado e retornei o resultado.
*/

// Desafio 3
/*
Implementação:
Preciso que receba um valor em '' (string), e retorne(return) isso em uma lista separando cada palavra por espaço dentro de um index(posição) diferente.

Criando o Algoritmo:
Primeiro precisamos declarar a variavel que se será chamada na função. Depois precisamos que ela seja lida, interpretada e jogada para dentro de um array, até o presente momento não sei como fazer isso sem talvez passar um for.

Obs.: Pesquisei e encontrei o .split() que resolve praticamente todo o problema. Se liga na documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

Agora é a hora de fazer a magica acontecer. Ta começando a ficar bom isso pois pra resolver agora só vamos precisar criar um return com a string.split() e dentro das aspas vamos colocar o separador. Como Trybe é uma mãe ela já nos passou o separador que fica desse jeito no código abaixo.
*/
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
/*
Primeiro defini o parametro array depois criei uma let e fui direto resolver a questão pondo um .push. Foi ai que persebi que meu return precisa ser uma string. Aparir desse ponto apaguei o .push e simplesmente deixei o array na ultima posição e concatenei com a primeira, dai o ESLint corrigiu com esse cifrão. Isso me fez pesquisar e descobri que na verdade isso é um template literal. Da hora né.

Depois de muito fuçar o debbuger eu entendi mais ou menos a implementação do string literal. Acontece que o acento agudo permite expressões dentro dele e concatenações sem precisar do +.
*/
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}
console.log(concatName(['vida', 'e', 'morte']));

// Desafio 5
/*
  Depois de encucar sobre o que a Ellen e o Lucas falaram sobre o return fui pesquisar mais sobre ele e percebi que não preciso mandar os calculos para uma let para depois retornar ela pois o return sozinho faz(bem parecido com o console.log). Pensando em como até agora os exercicios não estão complexos(estranho isso!) vamos ao raciocinio do desafio atual.

  Se wins vale 3 e ties vale é só a gente multiplicar win por 3 e somar com tie. Desse jeito:
*/
function footballPoints(win, tie) {
  return (win * 3) + tie;
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
