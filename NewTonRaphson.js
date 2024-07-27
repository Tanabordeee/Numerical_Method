const Math = require('mathjs');
const derivative = Math.derivative('(1/2)*(x + 7/x)' , 'x');
function calculate(x){
    const equation = (1/2)*(x + (7/x));
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
    x = x - calculate(x)/calculate_diff(x);
    x_new = x;
    error = Math.abs(x_new - x_old);
    console.log("iteration : " , i , "X = " , x_new);
    if(i == 4){
        break;
    }
    i++;
}
console.log("Final result: x =", x);