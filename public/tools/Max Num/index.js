const firstNum = document.querySelector("#num1");
const secondNum = document.querySelector("#num2");
const thirdNum = document.querySelector("#num3");
const result = document.querySelector("#res");

function find() {
  maxVal = Math.max(firstNum.value, secondNum.value, thirdNum.value);
  result.innerHTML = `The maximum number is ${maxVal}`;
}
