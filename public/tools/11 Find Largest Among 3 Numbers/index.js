// using Math.max() method.
// syntax: Math.max(n1,n2,n3); you can write so many as you want.
var a = prompt ("Please enter the first number: ");
var b = prompt ("Please enter the second number: ");
var c = prompt ("Please enter the third number: ");
var x = Math.max(a,b,c);
console.log(`${a}, ${b}, ${c} \nLargest = ${x}`);


// // using user defined method.
// // you can use different values like x,y,z etc in place of a,b,c.
// // this will work only upto 0 to 9.
// function check(a,b,c){
//     if(a>b && a>c){
//         return a;
//     }else if(b>a && b>c){
//         return b;
//     }else{
//         return c;
//     }
// }
// var a = prompt("enter first number");
// var b = prompt("enter second number");
// var c = prompt("enter the third number");
// var x = check(a,b,c);
// alert(`${a},${b}.${c} \nLargest = ${x}`);