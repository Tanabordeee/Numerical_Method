const math = require("mathjs");
let a = 2;
let b = 8;
let n = 4;
let func = (x) => {
    return 4 * math.pow(x, 5) - 3 * math.pow(x, 4) + math.pow(x, 3) - 6 * x + 2;
}
let h = (b - a) / n;
let sum = 0;
for (let i = a + h ; i < b ; i+= h){
    sum += func(i);
}
let I = (h / 2)*(func(a) + (2*sum) + func(b));
console.log(I);