// Palindrome String:
// A string is a palindrome if it is read the same from forward or backward.
// For example: dad reads the same either from forward or backward.
// So the word dad is palindrome. Similarly, madam is also a palindrome.

// Array methods to be used:
//  o    split(''): Splits a string and returns an array.
//  o    reverse(): Reverse an array.
//  o    join(''): Join the array elements and return a string.

var string = prompt("Please enter a string");
var stringArray = string.split('');
var stringArrayRev = stringArray.reverse();
var revString = stringArrayRev.join('');
if(string === revString){
    console.log(`${string}: is Palindrome.`);
}else{
    console.log(`${string}: is not Palindrome.`);
}