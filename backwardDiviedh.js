const math = require('mathjs');
let x = 2;
let h = 0.25;
let func = (x) => { return math.pow(Math.E, x)};
let diff1 = (x) =>{
    return (func(x) - func(x - h))/h
}
let diff2 = (x) =>{
    return (func(x) - 2*func(x-h) + func(x-(h*2))) / math.pow(h, 2);
}
let diff3 = (x) =>{
    return (func(x) - 3*func(x-h) + 3*func(x-(h*2)) - func(x-(h*3))) / math.pow(h , 3);
}
let diff4 = (x) =>{
    return (func(x) - 4 * func(x-h) + 6*func(x-(h*2)) - 4*func(x- (h*3)) + func(x - (h*4))) / math.pow(h ,4);
}
let symbolicDiff1 = math.derivative('exp(x)', 'x').evaluate({ x: x });
let symbolicDiff2 = math.derivative(math.derivative('exp(x)', 'x'), 'x').evaluate({ x: x });
let symbolicDiff3 = math.derivative(math.derivative(math.derivative('exp(x)', 'x'), 'x'), 'x').evaluate({ x: x });
let symbolicDiff4 = math.derivative(math.derivative(math.derivative(math.derivative('exp(x)', 'x'), 'x'), 'x'), 'x').evaluate({ x: x });

let error1 = math.abs((diff1(x) - symbolicDiff1) / diff1(x)) * 100 / 100;
let error2 = math.abs((diff2(x) - symbolicDiff2) / diff2(x)) * 100 / 100;
let error3 = math.abs((diff3(x) - symbolicDiff3) / diff3(x)) * 100 / 100;
let error4 = math.abs((diff4(x) - symbolicDiff4) / diff4(x)) * 100 / 100;

console.log('Numerical First Derivative:', diff1(x));
console.log('Symbolic First Derivative:', symbolicDiff1);
console.log('Error for First Derivative (%):', error1.toFixed(6));