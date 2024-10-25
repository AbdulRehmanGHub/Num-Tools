let input = document.querySelector("input");
let result = document.querySelector("#res");

function find() {
  let inpValue = parseInt(input.value);
  if (inpValue < 2) {
    result.innerHTML = `${inpValue} is not a prime number.`;
    return;
  }
  for (let i = 2; i <= Math.sqrt(inpValue); i++) {
    if (inpValue % i === 0) {
      result.innerHTML = `${inpValue} is not a prime number.`;
      return;
    }
  }
  result.innerHTML = `${inpValue} is a prime number.`;
}
