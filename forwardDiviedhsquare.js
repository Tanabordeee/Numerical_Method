const math = require('mathjs');
let x = -2.5;
let h = 0.1;

let func = (x) => {
    return math.pow(Math.E, x / 3) + math.pow(x, 2);
}

let diff1 = (x) => {
    return (-1 * func(x + h*2) + 4 * func(x + h) - 3 * func(x)) / (2 * h);
}

let diff2 = (x) => {
    return (-1 * func(x + h*3) + 4 * func(x + h*2) - 5 * func(x + h) + 2 * func(x)) / math.pow(h, 2);
}

let diff3 = (x) => {
    return (-3 * func(x + h*4) + 14 * func(x + h*3) - 24 * func(x + h*2) + 18 * func(x + h) - 5 * func(x)) / (2 * math.pow(h, 3));
}

let diff4 = (x) => {
    return (-2 * func(x + h*5) + 11 * func(x + h*4) - 24 * func(x + h*3) + 26 * func(x + h*2) - 14 * func(x + h) + 3 * func(x)) / math.pow(h, 4);
}

let symbolicDiff1 = math.derivative('exp(x/3) + x^2', 'x').evaluate({x: x});
let symbolicDiff2 = math.derivative(math.derivative('exp(x/3) + x^2', 'x'), 'x').evaluate({x: x});
let symbolicDiff3 = math.derivative(math.derivative(math.derivative('exp(x/3) + x^2', 'x'), 'x'), 'x').evaluate({x: x});
let symbolicDiff4 = math.derivative(math.derivative(math.derivative(math.derivative('exp(x/3) + x^2', 'x'), 'x'), 'x'), 'x').evaluate({x: x});

let error1 = math.abs((diff1(x) - symbolicDiff1) / diff1(x)) * 100 / 100;
let error2 = math.abs((diff2(x) - symbolicDiff2) / diff2(x)) * 100 / 100;
let error3 = math.abs((diff3(x) - symbolicDiff3) / diff3(x)) * 100 / 100;
let error4 = math.abs((diff4(x) - symbolicDiff4) / diff4(x)) * 100 / 100;

console.log('Numerical Second Derivative:', diff2(x));
console.log('Symbolic Second Derivative:', symbolicDiff2);
console.log('Error for Second Derivative (%):', error2);
