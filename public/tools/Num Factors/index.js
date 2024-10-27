let result = document.querySelector(".res");

function find() {
  let inpVal = document.querySelector("input").value.trim();
  let factors = "";

  for (let i = 1; i <= inpVal; i++) {
    if (inpVal % i === 0) {
      factors += `${i}, `;
    }
    result.innerHTML = `The factors of ${inpVal} are: <br> ${factors}.`;
  }
}
