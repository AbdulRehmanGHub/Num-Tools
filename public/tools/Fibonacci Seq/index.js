let result = document.querySelector(".res");

function show() {
  let inpVal = parseInt(document.querySelector("input").value.trim());

  if (isNaN(inpVal) || inpVal < 0 || inpVal > 500) {
    result.innerHTML =
      "Please enter a valid non-negative <br> and less than a number 500.";
    return;
  }

  let a = 0;
  let b = 1;
  let fabSeries = `${a}`;

  for (let i = 1; i < inpVal; i++) {
    let temp = a + b;
    a = b;
    b = temp;
    fabSeries += `, ${a}`;
    result.innerHTML = `The Fab Series upto ${inpVal} is: <br> ${fabSeries}`;
  }
}
