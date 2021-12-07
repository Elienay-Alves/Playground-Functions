function highestCount(number) {
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

function maiorNumero(number) {
  let highest = highestCount(number);
  let contador = 0;
  for (let index of number) {
    if (index === highest) {
      contador += 1;
    }
  }
  return contador;
}
console.log(maiorNumero([-2, -2, -1, -1, -1]));
