const math = require('mathjs');
let n = 6;
let b = 2;
let a = -1;
let h = (b-a)/(2*n);
let func = (x)=>{
    return math.pow(x,7) + 2*math.pow(x,3) - 1;
}
let sumood= 0;
let sumeven = 0;
let count = 1;
for(let i = a+h; i < b ; i+=h){
    if(count %2 == 0){
        sumeven += func(i);  
    }else{
        sumood += func(i);  
    }
    count++;
}
let I = (h/3)*(func(a)+(4*sumood)+(2*sumeven)+func(b));
console.log(I);