const math = require('mathjs');

// Sample data
let x = [10, 15, 20, 30, 40, 50, 60, 70, 80];
let y = [5, 9, 15, 18, 22, 30, 35, 38, 43];
let Xvalue = 65;
let n = x.length;
let m = 2;

let matrix1 = Array(m+1).fill(0).map(() => Array(m+1).fill(0));
let matrix2 = Array(m+1).fill(0);
matrix1[0][0] = n;
//loop 4 times
for (let i = 1; i <= m + 1; i++) {

    for (let j = 1; j <= i; j++) {
        
        let k = i + j - 2;
        let sum = 0;
        // loop sum x
        for (let L = 0; L < n; L++) {
            sum += math.pow(x[L], k);
        }
        matrix1[i - 1][j - 1] = sum;
        matrix1[j - 1][i - 1] = sum;  
    }

    // find sum y
    let sum = 0;
    for (let L = 0; L < n; L++) {
        sum += y[L] * math.pow(x[L], i - 1);
    }
    matrix2[i - 1] = sum;
}


let result = [];

for (let i = 0; i < matrix1.length; i++) {
    let temp = matrix1.map(row => [...row]);
    for (let j = 0; j < matrix1.length; j++) {
        temp[j][i] = matrix2[j];
    }
    let x = math.det(temp) / math.det(matrix1);
    result.push(x);
}

let sum = 0;
for(let i = 0 ; i < result.length; i++) {
    sum += result[i] * math.pow(Xvalue , i);
}
console.log(sum);