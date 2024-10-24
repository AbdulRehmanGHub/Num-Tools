// What is Fibonacci Seq:
// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms.
// 0,1,1,2,3,5,8,13,21......
// 0+1 = 1 and then 1+1 = 2, then 2+3 = 5 and so on

var a = 0, b = 1;
console.log(a);
console.log(b);
for(var i=0; i<=10;i++){
        var temp = a+b;     // 1+1 = 2 and so on
        console.log(temp);
        a = b;      // 1 => 1 and so on
        b = temp;   // 1 => 2 and so on
    }