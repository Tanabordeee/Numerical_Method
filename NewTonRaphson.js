const Math = require('mathjs');
const derivative = Math.derivative('x^2-7' , 'x');
function calculate(x){
    const equation = Math.pow(x , 2) - 7;
    return equation
}

function calculate_diff(x){
    return derivative.evaluate({x : x});
}

let x = 2;
let x_new = 0;
let x_old = 0;
let i = 0;
let error = 1;
while (error > 0.000001){
    x_old = x;
    funcX = calculate(x);
    funcX_diff = calculate_diff(x);
    x = x - (funcX / funcX_diff);
    x_new = x;
    error = Math.abs(x_new - x_old);
    console.log("iteration : " , i , "X = " , x_new);
    i++;
}
console.log("Final result: x =", x);