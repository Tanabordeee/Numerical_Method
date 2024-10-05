const math = require('mathjs');
let x = [10,15,20,30,40,50,60,70,80];
let y = [5,9,15,18,22,30,35,38,43];
let Xvalue = 65;
let n = x.length;
let sumX = 0;
let sumXsquare = 0;
let sumY = 0;
let sumXY = 0;
for(let i = 0 ; i < x.length ; i++){
    sumX += x[i];
    sumXsquare += math.pow(x[i] , 2);
    sumY += y[i];
    sumXY += (x[i]*y[i])
}
const matrix1 = [[n , sumX], [sumX , sumXsquare]];
const matrix2 = [sumY , sumXY];

let result = [];
for (let i = 0; i < matrix1.length; i++) {
    let temp = matrix1.map(row => [...row]); 
    for (let j = 0; j < matrix1.length; j++) {
        temp[j][i] = matrix2[j];
    }
    let x = math.det(temp) / math.det(matrix1);
    result.push(x);
}

console.log(result[0] + result[1]*Xvalue);