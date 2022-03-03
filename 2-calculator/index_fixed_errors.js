'use strict';

// Not include this line and it will work just fine
// exports.__esModule = true;

var button = document.querySelector('.button');
var firstInput = document.querySelector('#first-input');
var secondInput = document.querySelector('#second-input');
var screen = document.querySelector('.screen');
function addNumbers(a, b) {
  screen.innerHTML = a + b + '';
}
button.addEventListener('click', function () {
  return addNumbers(parseInt(firstInput.value), parseInt(secondInput.value));
});
