function calculate(x) {
    return Math.pow(x , 2) - 7;
}

let x0 = 2; 
let x1 = 2.75; 
let error = 1;
let i = 0;

while (error > 0.000001) {
    let f_x0 = calculate(x0);
    let f_x1 = calculate(x1);
    let new_x = x1 - (f_x1 * (x0 - x1) )/ (f_x0 - f_x1); 
    error = Math.abs(new_x - x1);
    console.log("Iteration", i, "X =", new_x);
    x0 = x1;
    x1 = new_x;
    i++;
}

console.log("RESULT =", x1);
