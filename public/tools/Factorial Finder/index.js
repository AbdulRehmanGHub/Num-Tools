let input = document.querySelector("input");
let result = document.querySelector("#res");

function find() {
  let inpValue = input.value;
  let factorial = 1;

  if (inpValue == 1 || inpValue == 0) {
    result.innerHTML = `Factorial of 0 and 1 is = 1`;
  } else if (inpValue < 0) {
    result.innerHTML = `Factorial of -ive number is not possible.`;
  } else {
    for (let i = 1; i <= inpValue; i++) {
      let facto = (factorial = factorial * i);
      result.innerHTML = `The factorial of ${inpValue} is: <br> ${facto}`;
    }
  }
}
