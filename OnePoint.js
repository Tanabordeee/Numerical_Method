function calculate(x){
    let equation = Math.pow(x , 2) - 7 + x;
    return equation;
}

let x = 1;
let old_x = 0;
let new_x = 0;
let i = 0;
while(true){
    old_x = x;
    x = calculate(x);
    new_x = x;
    check = Math.abs(new_x - old_x);
    if (check < 0.000001){
        break;
    }
    if(new_x == Infinity){
        console.log("can't find answer");
        break;
    }
    console.log("iteration : " , i+1 , "x = " , new_x);
    i++;
}
