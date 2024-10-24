//  Logic to be implemented:
//  suppose we have three numbers num1, num2 and num3
//  To check if all of them have same last digit
//      o Divide each number by 10
//      o Check the remainder
//      o If all remainders are same, those numbers has same last digit.

var a = prompt("Please enter 'a' number");
var b = prompt("Please enter 'b' number");
var c = prompt("Please enter 'c' number");
var res1 = a%10;
var res2 = b%10;
var res3 = c%10;

if(res1 === res2 && res1 === res3){
    console.log(`${a}, ${b}, ${c} are having the same last digit`);
}else{
    console.log(`${a}, ${b}, ${c} are not having the same last digit`);
}