// Using predefined function
//      split(''):      to split the string into array
//      sort():      to sort array into alphabetical ascending order.

var string = prompt("Enter a string");
var stringArray = string.split(' ');

// for arranging string
// we don't need it but can be use
// var arrangeStringArray = stringArray.sort();

// we just need
stringArray.sort();

console.log(string);
console.log(stringArray);

//  alphabetical order means that if we write:
//  a c r w p b d z
//  this  will convert: a b c d p r w z

console.log(stringArray.join(' '));

// we don't need it but can be use
// console.log(arrangeStringArray);