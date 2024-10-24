// What is an Armstrong Number ?
// abcd... = an + bn + cn + dn + ...
// In the case of an Armstrong number of 3 digits, the sum of cubes of each digit is equal to the number itself.
// For example: l53 is an Armstrong number because
// 153 = 1*1*1 + 5*5*5 + 3*3*3

var a = prompt("Enter a lower number");
var b = prompt("Enter a upper number");
for(var i = a; i<=b; i++){
    var temp = i;
    var noOfDigits = i.toString().length;
    var sum = 0;
    while(temp > 0){
        var digit = temp%10;
        temp = parseInt(temp/10);
        sum += digit ** noOfDigits;
    }
    if (sum == i){
        console.log(i);
    }
}