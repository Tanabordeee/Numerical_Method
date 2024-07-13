function calculate(x) {
    let equation = 43 * x - 180;
    return equation;
}

let closestValue1 = Infinity;
let closestValue2 = Infinity;
let ClosestAns1 = Infinity;
let ClosestAns2 = Infinity;
for(let i = 0; i <= 10 ; i++) {
    let result = calculate(i);
    if(Math.abs(result) < Math.abs(closestValue1)){
        closestValue2 = closestValue1;
        closestValue1 = result;
    }else if (Math.abs(result) < Math.abs(closestValue2)){
        closestValue2 = result;
    }
    for(let j = closestValue1 ; j <= closestValue2 ; j+=0.000001){
        result = calculate(j);
        if(Math.abs(result) < Math.abs(ClosestAns1)){
            ClosestAns2 = ClosestAns1;
            ClosestAns1 = result;
        }else if (Math.abs(result) < Math.abs(ClosestAns2)){
            ClosestAns2 = result;
        }
        console.log("ClosestAns1 = " , ClosestAns1);
        console.log("ClosestAns2 = " , ClosestAns2);
    }
}
console.log("[ " + ClosestAns1 + " " + ClosestAns2 + " ]");
