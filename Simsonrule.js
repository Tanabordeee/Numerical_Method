const math = require("mathjs");
let a = -1;
let b = 2;
let h = (b-a)/2;
let func = (x)=>{
    return math.pow(x,7) + 2*math.pow(x,3) - 1;
}
let I = (h/3) * (func(a) + 4*func(a+h) +func(b));
console.log(I);