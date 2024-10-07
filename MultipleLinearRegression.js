const math = require('mathjs');

let xData = [
    [1, 0, 2, 3, 4, 2, 1], // x1
    [0, 1, 4, 2, 1, 3, 6], // x2
    [1, 3, 1, 2, 5, 3, 4], // x3
];
let y = [4, -5, -6, 0, -1, -7, -20];
let n = xData[0].length;
console.log('Number of data points:', n);

let k = xData.length; 
let matrix1 = Array(k + 1).fill(0).map(() => Array(k + 1).fill(0));
let matrix2 = Array(k + 1).fill(0);

matrix1[0][0] = n; 

for (let i = 1; i <= k; i++) {
    let sum = 0;
    for (let L = 0; L < n; L++) {
        sum += xData[i - 1][L];
    }
    matrix1[0][i] = sum;
    matrix1[i][0] = sum; 
}


for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= i; j++) {
        let sum = 0;
        for (let L = 0; L < n; L++) {
            sum += xData[i - 1][L] * xData[j - 1][L]; 
        }
        matrix1[i][j] = sum;
        matrix1[j][i] = sum;
    }
}

matrix2[0] = y.reduce((acc, val) => acc + val, 0);
for (let i = 1; i <= k; i++) {
    let sum = 0;
    for (let L = 0; L < n; L++) {
        sum += y[L] * xData[i - 1][L];  
    }
    matrix2[i] = sum;
}

console.log('Matrix 1:', matrix1);
console.log('Matrix 2:', matrix2);

let coefficients = math.lusolve(matrix1, matrix2);
console.log('Regression Coefficients:', coefficients);
