let result = document.querySelector(".res");

function find() {
  let inpVal = document.querySelector("input").value.trim();
  let para = document.querySelector("textarea").value.trim();

  let words = para.split(/\s+/);
  let wordLocation = words.indexOf(inpVal);
  //   console.log(words);
  //   console.log(wordLocation);

  if (wordLocation !== -1) {
    result.innerHTML = `"${inpVal}" word is available in paragraph at ${
      wordLocation + 1}th place.`;
  } else {
    result.innerHTML = `"${inpVal}" word is not available in paragraph.`;
  }
}
