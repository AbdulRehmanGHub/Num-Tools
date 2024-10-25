// Inbuilt - Function to be used.
// o    string.startsWith(): It will check the first character of the string, and return true or false.
// o    string.endsWith(): It will check the last character of string, and return true or false.

var string = prompt("Please enter a string");
console.log(string);
var testStart = string.startsWith('A');
var testEnd = string.endsWith('n');
// console.log(`Starts: ${testStart}`);
// console.log(`Ends: ${testEnd}`);
if(testStart == true && testEnd == true){
    console.log(`${string} starts with A and ends with n`);
}else if(testStart == true && testEnd == false){
    console.log(`${string} starts with A`);
}else if(testStart == false && testEnd == true){
    console.log(`${string} ends with n`);
}else{
    console.log(`${string} neither starts with A nor ends with n`);
}