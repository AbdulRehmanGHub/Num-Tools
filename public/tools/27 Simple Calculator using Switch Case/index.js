

var num2 = prompt("Enter 1st number");
var num1 = prompt("Enter 2nd number");
var opr = prompt("Select among +,-,x,/");

switch(opr)
{
    // if(opr == "+")
    case "+":
        // we use parseFloat because otherwise it will be concatinate which is not required.
        var res = parseFloat(num1) + parseFloat(num2);
        console.log(`${num1} + ${num2} = ${res}`);
        break;
    
    case "-":
        // we use parseFloat because otherwise it will be concatinate which is not required.
        var res = parseFloat(num1) - parseFloat(num2);
        console.log(`${num1} - ${num2} = ${res}`);
        break;

    case "x":
        // we use parseFloat because otherwise it will be concatinate which is not required.
        var res = parseFloat(num1) * parseFloat(num2);
        console.log(`${num1} * ${num2} = ${res}`);
        break;

    case "/":
        // we use parseFloat because otherwise it will be concatinate which is not required.
        var res = parseFloat(num1) / parseFloat(num2);
        console.log(`${num1} / ${num2} = ${res}`);
        break;

    default:
        console.log("Invalid operator");
}
// alert("Hello");