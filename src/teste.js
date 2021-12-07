// function catAndMouse(mouse, cat1, cat2) {
//   let dCat1 = mouse - cat1;
//   let dCat2 = mouse - cat2;

//   if ((dCat1 < mouse && dCat1 > dCat2) || (dCat1 > mouse && dCat1 < dCat2)) {
//     return 'cat1';
//   } if ((dCat2 < mouse && dCat2 > dCat1) || (dCat2 > mouse && dCat2 < dCat1)) {
//     return 'cat 2';
//   } return 'os gatos trombam e o rato foge';
// }
// catAndMouse(1, 2, 3);

function fizzBuzz(numbers) {
  let anwser = [];
  if (numbers % 3 === 0) {
    anwser.push('fizz');
  } if (numbers % 5 === 0) {
    anwser.push('buzz');
  } if (numbers % 3 && 5 === 0) {
    anwser.push('fizzbuzz');
  } else {
    anwser.push('bug');
  }
  return anwser;
}

console.log(fizzBuzz([]));
