function calculate(x){
    equation = (4 * x ) - 1
    return equation
}
let XLeft = -10
let XRight = 5
let X1 = 0;
let funcX1 , funcXright , funcXleft
let check;
while(1){
    funcX1 = calculate(X1)
    funcXright = calculate(XRight)
    funcXleft = calculate(XLeft)
    X1 = ((XLeft * funcXright) - (XRight * funcXleft)) / (funcXright - funcXleft)
    funcX1 = calculate(X1)
    if(funcX1 === 0) {
        break;
    }
    if(funcX1 * funcXright > 0){
        XRight = X1;
        check = Math.abs((XRight - XLeft))
    }else{
        XLeft = X1;
        check = Math.abs((XLeft - XRight))
    }
    if (check < 0.000001) {
        break;
    }
    console.log(check)
}
console.log(`Root found at x = ${X1}`);