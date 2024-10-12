const math = require('mathjs');
let x = -2.5;
let h = 0.1;
let func = (x) =>{
    return math.pow(Math.E , x/3) + math.pow(x , 2);
}
let diff1 = (x) =>{
    return (-1 * func(x+h*2) + 4*func(x+h) - 3*func(x)) / (2 * h)
}
let diff2 = (x) =>{
    return (-1 * func(x+h*3) + 4 * func(x+h*2) - 5 * func(x+h) + 2 * func(x)) / math.pow(h, 2);
}
let diff3 = (x) =>{
    return (-3 * func(x+h*4) + 14 * func(x+h*3) - 24 * func(x+h*2) + 18 * func(x+h) - 5 * func(x)) / (2*math.pow(h,3));
}
let diff4 = (x) =>{
    return (-2*func(x+h*5) + 11 * func(x + h*4) - 24 * func(x + h*3) + 26* func(x + h * 2) - 14 * func(x + h) + 3 * func(x)) / math.pow(h,4);
}
console.log(diff2(x));