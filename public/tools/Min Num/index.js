const firstNum = document.querySelector("#num1");
const secondNum = document.querySelector("#num2");
const thirdNum = document.querySelector("#num3");
const result = document.querySelector("#res");

function find() {
  minVal = Math.min(firstNum.value, secondNum.value, thirdNum.value);
  result.innerHTML = `The minimum number is ${minVal}`;
}
