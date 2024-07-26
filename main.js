let display = document.getElementById("display")

let currentInput = '';

function appendNumber(number) {
  currentInput += number
  display.value = currentInput
}
function appendOperator(Operator) {
  currentInput += ` ${Operator}`;
  display.value = currentInput
}
function AllClear() {
  currentInput = '';
  display.value = currentInput;
}
function backspace() {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
}
function calculate() {
  try {
    currentInput = currentInput.replace(/x/g, '*').replace(/÷/g, '/');
    let result = eval(currentInput);
    display.value = result;
  } catch (error) {
    display.value = 'Please Calculate After Entering Numbers';
  }
}