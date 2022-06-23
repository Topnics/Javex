
var num1 = window.prompt("Type in the First number: ");
var num2 = window.prompt("Type in the Second Number: ");
var operator = window.prompt("Type in an operator ( + for addition, - for subtraction, / for division, * for multiplication, % for modulo");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (operator == "+"){
    let result = num1 + num2
    alert('The addition of the first and second number is '+ result);
}
else if (operator == "-"){
    let result = num1 - num2
    alert('The subtraction of the first and second number is '+ result);
}
else if (operator == "*"){
    let result = num1 * num2
    alert('The multiplication of the first and second number is '+ result);

}
else if (operator == "/"){
    let result = num1 / num2
    alert('The division of the first with the second number is '+ result);
}
else if (operator == "%"){
    let result = num1 % num2
    alert('The result of modulo operation is ' + result);
}





