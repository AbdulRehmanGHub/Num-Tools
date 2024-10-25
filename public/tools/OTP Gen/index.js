let result = document.querySelector("#res");
let btn = document.querySelector("button");

function generate() {
  result.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * (5000)) + 1000;
    result.innerHTML += `${x} <br>`;
  }
}
