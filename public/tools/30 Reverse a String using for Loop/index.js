// Hello will convert to olleH

var string = prompt("Enter a string");
var strlen = string.length;
// console.log(string);
// console.log(string[strlen-2]);

var revStr = '';
for(var i=strlen-1;i>=0;i--){
    // console.log(string[i]);
    revStr += string[i];
}
console.log(`${string} \nreverse is: \n ${revStr}`);