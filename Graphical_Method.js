function calculate(x) {
    let equation = (43 * x) - 180;
    return equation;
}

let closestValue1 = Infinity;
let closestValue2 = Infinity;
let ClosestAns1 = Infinity;
let ClosestAns2 = Infinity;
let x1 = 0;
let x2 = 0;
let xAns1 = 0;
let xAns2 = 0;
for(let i = 0; i <= 10 ; i++) {
    let result = calculate(i);
    if(Math.abs(result) < Math.abs(closestValue1)){
        closestValue2 = closestValue1;
        closestValue1 = result;
        x1 = i;
    }else if (Math.abs(result) < Math.abs(closestValue2)){
        closestValue2 = result;
        x2 = i;
    }
}
for(let j = x1 ; j <= x2 ; j+=0.000001){
    result = calculate(j);
    if(Math.abs(result) < Math.abs(ClosestAns1)){
        ClosestAns2 = ClosestAns1;
        ClosestAns1 = result;
        xAns1 = j;
    }else if (Math.abs(result) < Math.abs(ClosestAns2)){
        ClosestAns2 = result;
        xAns2 = j;
    }
}
console.log("[ " + xAns1 + "  " + xAns2 + " ]");
