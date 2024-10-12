const math = require('mathjs');
let x = 2;
let h = 0.25;
let func = (x) => {math.pow(Math.E, x)};
let diff1 = (x) => {
    return (func(x + h) - func(x)) / h;
}
let diff2