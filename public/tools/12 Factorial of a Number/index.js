// Factorial:
// The factorial of a number is the product of all the numbers from 1 to that number.
// The formula for the factorial of n is (n!) = 1 * 2 * 3 * 4.......n
// factorial of 5 is = 1 * 2 * 3 * 4 * 5 = 120

var number = prompt("please enter a number");
var fact = 1;
if(number == 0){
    console.log(`The factorial of ${number} is 1`);
}else if(number < 0){
    console.log(`The factorial of Negative Number is NOT Possible`);
}else{
    for(var i=1;i<=number;i++){
        fact = fact * i;
        
    }
    console.log(`The factorial of ${number} is ${fact}`);
}