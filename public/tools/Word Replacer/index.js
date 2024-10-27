let result = document.querySelector(".res");

function change() {
  let text = document.querySelector(".text").value.trim();
  let chooseWord = document.querySelector(".chooseWord").value.trim();
  let withWord = document.querySelector(".withWord").value.trim();

  if (!chooseWord || !withWord) {
    result.innerHTML =
      "Please provide both the word to replace and the new word.";
    return;
  }

  let words = text.split(" ");
  let replaced = false;

  words = words.map((word) => {
    if (word === chooseWord) {
      replaced = true;
      return withWord;
    }
    return word;
  });

  if (replaced) {
    result.innerHTML = words.join(" ");
  } else {
    result.innerHTML = `The word ${chooseWord} was not found in text`;
  }
}

// // Method 2:
// let string = "Abdul Rehman has a dell laptop and dell gadgets";
// console.log(string);

// let reg = new RegExp("Dell", "gi"); // gi means g=globally and i= not case sensitive
// let newString = string.replace(reg, "Hp");
// console.log(newString);
