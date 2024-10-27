let result = document.querySelector(".res");

function find() {
  let numFrom = parseInt(document.querySelector(".numFrom").value.trim());
  let numUpto = parseInt(document.querySelector(".numUpto").value.trim());
  let armstrongNumbers = [];

  for (let i = numFrom; i <= numUpto; i++) {
    let digits = i.toString().split("");
    let noOfDigits = digits.length;
    let sum = digits.reduce((acc, digit) => acc + digit ** noOfDigits, 0);

    if (sum === i) {
      armstrongNumbers.push(i);
    }
  }

  if (armstrongNumbers.length > 0) {
    result.innerHTML = `Armstrong numbers between ${numFrom} and ${numUpto}: <br> ${armstrongNumbers.join(
      ", "
    )}`;
  } else {
    result.innerHTML = `No Armstrong numbers found between ${numFrom} and ${numUpto}.`;
  }
}
