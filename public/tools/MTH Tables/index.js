let input = document.querySelector("input");
let result = document.querySelector("#res");

function table() {
  let inpValue = input.value;
  result.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    let res = i * inpValue;
    result.innerHTML += `${inpValue} &nbsp; x &nbsp; ${i} &nbsp; = &nbsp; ${res} <br>`;
  }
}
