let result = document.querySelector(".res");

function textSort() {
  let inpVal = document.querySelector("textarea").value.trim("");
  console.log(inpVal);

  let sortVal = inpVal.split(" ").sort().join(" ");
  console.log(sortVal);

  result.innerHTML = `The sorted order of text/numbers is: <br> ${sortVal}`;
}
