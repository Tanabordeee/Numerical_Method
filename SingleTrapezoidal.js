const math = require('mathjs');
let a = 2;
let b = 8;
let func = (x) => {
    return 4 * math.pow(x, 5) - 3 * math.pow(x, 4) + math.pow(x, 3) - 6 * x + 2;
}

let I = ((b - a) / 2) * (func(a) + func(b));

console.log('Integral (I):', I);
