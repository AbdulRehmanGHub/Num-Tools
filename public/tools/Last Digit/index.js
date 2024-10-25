let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let result = document.querySelector("#res");

function find() {
  let num1Val = num1.value;
  let num2Val = num2.value;
  let num3Val = num3.value;

  let n1 = num1Val.toString().charAt(num1Val.length - 1);
  let n2 = num2Val.toString().charAt(num2Val.length - 1);
  let n3 = num3Val.toString().charAt(num3Val.length - 1);

  if (n1 == n2 && n2 == n3) {
    result.innerHTML = `The last digits ${n1} is same`;
  } else {
    result.innerHTML = `The last digits ${n1}, ${n2}, ${n3} are different`;
  }
}
