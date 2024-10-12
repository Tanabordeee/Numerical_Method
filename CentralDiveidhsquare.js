const math = require('mathjs');
let x = -2.5;
let h = 0.1;

let func = (x) => {
    return math.pow(Math.E, x / 3) + math.pow(x, 2);
}

let diff1 = (x) => {
    return (-1 * func(x + h * 2) + 8 * func(x + h) - 8 * func(x - h) + func(x - h * 2)) / (12 * h);
}

let diff2 = (x) => {
    return (-1 * func(x + h * 2) + 16 * func(x + h) - 30 * func(x) + 16 * func(x - h) - func(x - h * 2)) / (12 * math.pow(h, 2));
}

let diff3 = (x) => {
    return (-1 * func(x + h * 3) + 8 * func(x + h * 2) - 13 * func(x + h) + 13 * func(x - h) - 8 * func(x - h * 2) + func(x - h * 3)) / (8 * math.pow(h, 3));
}

let diff4 = (x) => {
    return (-1 * func(x + h * 3) + 12 * func(x + h * 2) - 39 * func(x + h) + 56 * func(x) - 39 * func(x - h) + 12 * func(x - h * 2) - func(x - h * 3)) / (6 * math.pow(h, 4));
}


let symbolicDiff1 = math.derivative('exp(x/3) + x^2', 'x').evaluate({ x: x });
let symbolicDiff2 = math.derivative(math.derivative('exp(x/3) + x^2', 'x'), 'x').evaluate({ x: x });
let symbolicDiff3 = math.derivative(math.derivative(math.derivative('exp(x/3) + x^2', 'x'), 'x'), 'x').evaluate({ x: x });
let symbolicDiff4 = math.derivative(math.derivative(math.derivative(math.derivative('exp(x/3) + x^2', 'x'), 'x'), 'x'), 'x').evaluate({ x: x });

let error1 = math.abs((diff1(x) - symbolicDiff1) / diff1(x)) * 100 / 100;
let error2 = math.abs((diff2(x) - symbolicDiff2) / diff2(x)) * 100 / 100;
let error3 = math.abs((diff3(x) - symbolicDiff3) / diff3(x)) * 100 / 100;
let error4 = math.abs((diff4(x) - symbolicDiff4) / diff4(x)) * 100 / 100;

console.log('Numerical Second Derivative:', diff2(x));
console.log('Symbolic Second Derivative:', symbolicDiff2);
console.log('Error for Second Derivative (%):', error2);
