var string = prompt("Please enter a string");
var letter = prompt("Pkease enter a letter");
let strlen = string.length;

// In word HELLO, there are 5 characters
// H    0
// E    1
// L    2
// L    3
// O    4

var counter = 0;
for(var i = 0; i < strlen; i++){
    // console.log(string[i]);
    if(string[i] == letter){
        counter++;
    }
}
console.log(`${string} => ${letter} => ${counter}`);