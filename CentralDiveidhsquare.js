const math = require('mathjs');
let x = -2.5;
let h = 0.1;
let func = (x) =>{
    return math.pow(Math.E , x/3) + math.pow(x , 2);
}
let diff1 = (x) =>{
    return (-1 * func(x+h*2) + 8 * func(x+h) - 8 * func(x-h) + func(x-h*2)) / (12 * h);
}
let diff2 = (x) =>{
    return (-1 * func(x+h*2) + 16 * func(x + h) - 30 * func(x) + 16 * func(x-h) - func(x-h*2)) / (12 * math.pow(h,2));
}
let diff3 = (x) =>{
    return (-1 * func(x+h*3) + 8 * func(x + h*2) - 13 * func(x+h) + 13 * func(x-h) - 8 * func(x - h*2) + func(x-h*3))/(8*math.pow(h,3))
}
let diff4 = (x) =>{
    return (-1 * func(x+h*3) + 12 * func(x + h*2) - 39 * func(x + h) + 56 * func(x) - 39 * func(x-h) + 12 * func(x-h*2) - func(x-h*3))/(6*math.pow(h,4))
}
console.log(diff2(x));