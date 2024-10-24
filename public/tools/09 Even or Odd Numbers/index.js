// Method 1: Checking using if-else
function check(){
    var value = document.getElementById('data').value;
    if(value%2 == 0){
    result = `${value} is an Even number.`;
    }else{
    result = `${value} is an Odd number.`;
    }
    document.getElementById('result').innerHTML = result;
    }

// Method 2: Checking using ternary operator
    // var x = 3;
    // var result = x%2 == 0 ? "Even" : "Odd";
    // document.getElementById('result').innerHTML = result;

