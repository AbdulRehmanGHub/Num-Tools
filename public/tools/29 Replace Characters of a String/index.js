
var string = "Abdul Rehman has a dell laptop and dell gadgets";
console.log(string);

var reg = new RegExp('Dell', 'gi');     // gi means g=globally and i= not case sensitive
var newString = string.replace(reg,'Hp');
console.log(newString);