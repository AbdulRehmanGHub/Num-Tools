let result = document.querySelector(".res");

function show() {
  let inpVal = parseInt(document.querySelector("input").value.trim());

  let sum = (inpVal * (inpVal + 1)) / 2;

  if (inpVal > 0) {
    result.innerHTML = `Sum of natural numbers upto ${inpVal} is: ${sum}`;
  } else {
    result.innerHTML = `Please enter a positive number.`;
  }
}
