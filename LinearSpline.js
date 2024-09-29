let x = [2,4,6,8,10]
let y = [9.5,8.0,10.5,39.5,72.5]
let value = 4.5;
let count = 0;
let index1 = 0;
let index2 = 0;
for(let i = 0 ; i < x.length; i++){
    if(x[i] >= value){
        index1 = i;
        index2 = i - 1;
        break;
    }
}
if(index2 < 0){
    console.log("Value is smaller than the smallest x value");
}else{
    let result = y[index1] + ((y[index2]-y[index1]) / (x[index2] - x[index1])) * (value - x[index1]);
    console.log(result);
}