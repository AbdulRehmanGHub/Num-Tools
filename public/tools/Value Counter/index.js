let result = document.querySelector(".res");

function find() {
  let text = document.querySelector(".text").value.trim();
  let word = document.querySelector(".word").value.trim();

  if (!word) {
    result.innerHTML = `Please enter a letter/word to search!`;
    return;
  }

  let counter = 0;
  let index = text.indexOf(word);

  while (index !== -1) {
    counter++;
    index = text.indexOf(word, index + word.length);
  }

  result.innerHTML = `The letter/word "${word}" is found ${counter} times.`;
}
