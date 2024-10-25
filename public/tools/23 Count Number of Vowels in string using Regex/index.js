// What is Regex?
// Regex is known as regular expression.
// It is used to match, test and find character(s)  from a string.
// To find vowels:
//      Expression: [aeiou]
//      Modifiers: gi

var string = prompt("Enter a string");
const reg = /[aeiou]/gi;
var chars = string.match(reg);
console.log(chars.join(','))
console.log(chars.length);