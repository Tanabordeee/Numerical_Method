function calculate(x) {
    let equation = 43*x-180;
    return equation;
}
function checkfun(x) {
    if(x < 0){
        return -1;
    }else{
        return 1;
    }
}
let closestValue1 = Infinity;
let closestValue2 = Infinity;
let ClosestAns1 = Infinity;
let x1 = 0;
let x2 = 0;
let xAns1 = 0;
let first_loop = calculate(0);
let check_loop = checkfun(first_loop);
for(let i = 0; i <= 10 ; i++) {
    let result = calculate(i);
    let check_result_loop = checkfun(result);
    if(check_loop != check_result_loop){
        break;
    }
    x1 = i;
    x2 = i+1;
}
let first = calculate(x1);
let check = checkfun(first);
for(let j = x1 ; j <= x2 ; j+=0.000001){
    result = calculate(j);
    let check_result = checkfun(result);
    if(check != check_result){
        break;
    }
    xAns1 = j;
}
console.log("Approach is = " , xAns1);
