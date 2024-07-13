function calculate(x){
    equation = Math.pow(x , 4) - 13;
    return equation
}
let XLeft = 1.5
let XRight = 2.0
let Xm , funcXm , funcXright 
let check;
while(1){
    Xm = (XLeft + XRight) / 2
    funcXm = calculate(Xm)
    if(funcXm === 0){
        break
    }
    funcXright = calculate(XRight)
    if(funcXm * funcXright > 0){
        XRight = Xm;
        check = Math.abs((XRight - XLeft))
    }else{
        XLeft = Xm;
        check = Math.abs((XLeft - XRight))
    }
    if (check < 0.000001) {
        break;
    }
    console.log(check)
}
console.log(`Root found at x = ${Xm.toFixed(6)}`);