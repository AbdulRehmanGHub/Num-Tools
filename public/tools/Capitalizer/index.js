let result = document.querySelector(".res");

function convert() {
  let inpValue = document.querySelector("input").value.trim();

  let newVal = inpValue
    .split(" ")
    .map((word) => word.charAt().toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  result.innerHTML = newVal;
}

// // 2nd method: short
// function convert() {
//   document.querySelector(".res").innerHTML = document
//     .querySelector("input")
//     .value.toLowerCase()
//     .replace(/\b\w/g, (char) => char.toUpperCase());
// }
