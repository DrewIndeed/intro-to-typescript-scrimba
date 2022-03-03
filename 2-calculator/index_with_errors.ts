// Benefits of TypeScript
// challenges:
// - give the screen's innerHTML a string
// - change the two input values to numbers

const button = document.querySelector('.button');
const firstInput = document.querySelector('#first-input');
const secondInput = document.querySelector('#second-input');
const screen = document.querySelector('.screen');

// this will result 56 cause inputs right now are STRINGS
// function addNumbers(a, b) {
//   screen.innerHTML = a + b;
// }

// this will give NUMBER RESULT by using typeof
function addNumbers(a: number, b: number) {
  screen.innerHTML = a + b;
}

button.addEventListener('click', () =>
  addNumbers(firstInput.value, secondInput.value)
);
