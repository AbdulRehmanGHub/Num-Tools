let result = document.querySelector(".res");

function count() {
  let inpVal = document.querySelector("input").value.trim();
  const reg = /[aeiou]/gi;
  let chars = inpVal.match(reg) || [];
  let charsLength = chars.length;

  result.innerHTML = `There ${charsLength === 1 ? "is" : "are"} ${charsLength} vowel(s) <br> in the above word/paragraph <br><br> ${chars.join(", ")}`;
}
