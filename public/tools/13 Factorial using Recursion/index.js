// Recursion:
// The process in which a function calls itself directly or indirectly is called recursion.
// The corresponding function is called recursive function.
// function demo(){
//     if(condition){
//         return;
//     }
//     demo();
// }

var number = prompt(`Please enter a number`);
var fact = 1;

function factorial(n){
    if(n>number){
        return;
    }
    var tmp = fact;
    fact = fact * n;
    n++;
    factorial(n);
}
factorial(1);
alert(`The factorial of ${number} is ${fact}`);