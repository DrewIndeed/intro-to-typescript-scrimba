export {}; // This line is to prevent unwanted exports stuffs after compiling to JS

const button = document.querySelector('.button');
const firstInput = document.querySelector('#first-input') as HTMLInputElement;
const secondInput = document.querySelector('#second-input') as HTMLInputElement;
const screen = document.querySelector('.screen');

function addNumbers(a: number, b: number) {
  screen.innerHTML = a + b + '';
}

button.addEventListener('click', () =>
  addNumbers(parseInt(firstInput.value), parseInt(secondInput.value))
);
