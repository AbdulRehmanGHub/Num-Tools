let input = document.querySelector("input");
let result = document.querySelector("#res");

function check() {
  let inpVal = input.value;
  let temp = inpVal;

  let noOfDigits = inpVal.length;
  //   console.log(noOfDigits);

  let sum = 0;

  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** noOfDigits;
    temp = parseInt(temp / 10);
    // console.log(temp);
  }

  if (sum == inpVal) {
    result.innerHTML = `${inpVal} is an armstrong number`;
  } else {
    result.innerHTML = `${inpVal} is not an armstrong number`;
  }
}
