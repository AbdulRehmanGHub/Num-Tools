let result = document.querySelector(".res");

function calc() {
  let num1Val = parseFloat(document.querySelector(".num1").value.trim());
  let num2Val = parseFloat(document.querySelector(".num2").value.trim());
  let operator = document.querySelector(".operator").value.trim();

  switch (operator) {
    case "+":
      result.innerHTML = `${num1Val} + ${num2Val} = ${num1Val + num2Val}`;
      break;

    case "-":
      result.innerHTML = `${num1Val} - ${num2Val} = ${num1Val - num2Val}`;
      break;

    case "*":
      result.innerHTML = `${num1Val} x ${num2Val} = ${num1Val * num2Val}`;
      break;

    case "/":
      result.innerHTML = `${num1Val} / ${num2Val} = ${num1Val / num2Val}`;
      break;

    case "%":
      result.innerHTML = `${num1Val} % ${num2Val} = ${num1Val % num2Val}`;
      break;

    default:
      result.innerHTML = `Invalid Choice. Try Again`;
      break;
  }
}
