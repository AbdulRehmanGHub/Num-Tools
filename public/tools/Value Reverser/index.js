let result = document.querySelector(".res");

function reverse() {
  let inpVal = document.querySelector("input").value.trim();
  let reverseVal = inpVal.split("").reverse().join("");

  if (inpVal !== "") {
    result.innerHTML = `The reverse of ${inpVal} is: <br> ${reverseVal}`;
  } else {
    result.innerHTML = `Type value to reverse!`;
  }
}
