let result = document.querySelector(".res");

function check() {
  let startWith = document.querySelector(".startWith").value;
  let endWith = document.querySelector(".endWith").value;
  let fullWord = document.querySelector(".fullWord").value;
  // console.log(startWith, endWith, fullWord);

  let stringFirstLetter = fullWord.slice(0, 1);
  let stringLastLetter = fullWord.slice(-1);

  if (startWith == "" || endWith == "" || fullWord == "") {
    return false;
  } else {
    if (startWith === stringFirstLetter && endWith === stringLastLetter) {
      result.innerHTML = `The first letter ${startWith} is same. <br> The last letter ${endWith} is same.`;
    } else if (
      startWith === stringFirstLetter &&
      endWith !== stringLastLetter
    ) {
      result.innerHTML = `The first letter ${startWith} is same. <br> The last letter ${endWith} is different.`;
    } else if (
      startWith !== stringFirstLetter &&
      endWith === stringLastLetter
    ) {
      result.innerHTML = `The first letter ${startWith} is different. <br> The last letter ${endWith} is same.`;
    } else {
      result.innerHTML = `The first letter ${startWith} is different. <br> The last letter ${endWith} is different.`;
    }
    return true;
  }
}
