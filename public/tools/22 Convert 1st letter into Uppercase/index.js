// Function that convert first letter of a string into uppercase.
//  Function to  be used:
//      o   charAt():   to get a char at an index.
//      o   toUpperCase():  to upper case characters.
//      o   slice():    to slide any char from the string.

var string = prompt("Enter a string");      // this is simple program, showing string
console.log(string);

var first = string.charAt(0);       // this will show first letter
console.log(first);
console.log(first.toUpperCase());   // this will convert the first letter to uppercase

var rem = string.slice(1);          // remaining: this will show the remaining letters
console.log(rem);

var caps = first.toUpperCase() + rem;       // final answer
console.log(`Final result:  ${caps}`);