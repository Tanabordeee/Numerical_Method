const math = require('mathjs');
let x = -2.5;
let h = 0.1;

let func = (x) => {
    return math.pow(Math.E, x / 3) + math.pow(x, 2);
}

let diff1 = (x) => {
    return (3 * func(x) - 4 * func(x - h) + func(x - h * 2)) / (2 * h);
}

let diff2 = (x) => {
    return (2 * func(x) - 5 * func(x - h) + 4 * func(x - h * 2) - func(x - h * 3)) / math.pow(h, 2);
}

let diff3 = (x) => {
    return (5 * func(x) - 18 * func(x - h) + 24 * func(x - h * 2) - 14 * func(x - h * 3) - func(x - h * 4)) / (2 * math.pow(h, 3));
}

let diff4 = (x) => {
    return (3 * func(x) - 14 * func(x - h) + 26 * func(x - h * 2) - 24 * func(x - h * 3) + 11 * func(x - h * 4) - 2 * func(x - h * 5)) / math.pow(h, 4);
}

let symbolicDiff1 = math.derivative('exp(x / 3) + x^2', 'x');
let symbolicDiff2 = math.derivative(symbolicDiff1, 'x');
let symbolicDiff3 = math.derivative(symbolicDiff2, 'x');
let symbolicDiff4 = math.derivative(symbolicDiff3, 'x');

let evaluatedDiff1 = symbolicDiff1.evaluate({ x: x });
let evaluatedDiff2 = symbolicDiff2.evaluate({ x: x });
let evaluatedDiff3 = symbolicDiff3.evaluate({ x: x });
let evaluatedDiff4 = symbolicDiff4.evaluate({ x: x });

let error1 = math.abs((diff1(x) - evaluatedDiff1) / diff1(x)) * 100 / 100;
let error2 = math.abs((diff2(x) - evaluatedDiff2) / diff2(x)) * 100 / 100;
let error3 = math.abs((diff3(x) - evaluatedDiff3) / diff3(x)) * 100 / 100;
let error4 = math.abs((diff4(x) - evaluatedDiff4) / diff4(x)) * 100 / 100;


console.log('Numerical Second Derivative:', diff2(x));
console.log('Symbolic Second Derivative:', evaluatedDiff2);
console.log('Error for Second Derivative (%):', error2);

