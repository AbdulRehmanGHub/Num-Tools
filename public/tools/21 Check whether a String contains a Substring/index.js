// Inbuilt - Function to be used:
//     o   string.includes(): The JS String includes() method checks if one string can be found inside another string and returns true or false.
//     o   string.indexOf(): The JS String indexOf() method returns the first index of occurrence of a given value in string or -1 if it is not present.

var string = prompt("Enter a string");
var subString = "the";
console.log(string);
var test1 = string.includes(subString);
console.log(test1);

var test2 = string.indexOf(subString);
console.log(test2);