// A prime number is a number that is only divisible by 1 and itself.
// For example:  2, 3, 5, 7, 11 and so on are the prime numbers.

var number = prompt('Please enter a number');
if(number == 1){
    alert(`${number} is neither prime nor commposite`);
}else if(number < 1){
    alert(`${number} is not a prime number`)
}else{
    // number 15
    for(var i = 2; i<number; i++){
        // 15%2 = R:1
        // 15/2 = Q:7
        if(number%i == 0){
            var result = `${number} is not a prime number`;
            break;
        }else{
            var result = `${number} is a prime number`;
            break;
        }
    }
    alert(`${result}`);
}