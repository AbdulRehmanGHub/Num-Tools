// What is an Armstrong Number ?
// abcd... = an + bn + cn + dn + ...
// In the case of an Armstrong number of 3 digits, the sum of cubes of each digit is equal to the number itself.
// For example: l53 is an Armstrong number because
// 153 = 1*1*1 + 5*5*5 + 3*3*3

var number = prompt("Enter a number");
var temp = number;

// for increasing digits length
var noOfDigits = number.toString().length;
// alert(noOfDigits);        // for counting the number of digits.
var sum = 0;
while(temp>0){
    // 153/10 = 3
    // console.log(temp);
    var digit = temp%10;
    // console.log(digit);
    // console.log(digit**3);
    sum += digit**noOfDigits;
    // console.log("Sum",sum);
    temp = parseInt(temp/10);
    // console.log(temp);
    // console.log('-----------');
    }
    if(sum == number){
        console.log(`${number} is an armstrong number`);
    }else{
        console.log(`${number} is not an armstrong number`);
    }