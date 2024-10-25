// Palindrome String:
// A string is a palindrome if it is read the same from forward or backward.
// For example: dad reads the same either from forward or backward.
// So the word dad is palindrome. Similarly, madam is also a palindrome.

// For loop method to be used:

var string = prompt("Please enter a string");
var len = string.length;
var msg = 'It is a Palindrome';
for(var i = 0; i < len/2; i++){
    if(string[i] != string[len - 1 - i]){
        msg = 'It is not a Palindrome';
    }
}
console.log(`${string}: ${msg}`);
