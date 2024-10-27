let result = document.querySelector(".res");

function check() {
  let inpVal = document.querySelector("input").value;
  let inpRev = inpVal.split("").reverse().join("");
  inpVal === inpRev
    ? (result.innerHTML = `"${inpVal}" is palindrome`)
    : (result.innerHTML = `"${inpVal}" is not a palindrome`);
}

// // The above if else condition can also be written as:
// if (inpVal === inpRev) {
//   result.innerHTML = "palindrome";
// } else {
//   result.innerHTML = "not palindrome";
// }
