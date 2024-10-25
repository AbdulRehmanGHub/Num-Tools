let input = document.querySelector("input");
let result = document.querySelector("#res");

function find() {
  if (input.value != "") {
    result.innerHTML =
      input.value % 2 === 0
        ? `${input.value} is Even`
        : `${input.value} is Odd`;

    input.value = "";
  }
}
