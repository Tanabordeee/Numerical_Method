const math = require('mathjs');

let A = [
    [4,12,-16],
    [12,37,-43],
    [-16,-43,98]
];

let B = [9,0,-4];
let n = A.length;
let L = math.zeros(n, n).valueOf();

for(let k= 0 ;k< n ; k++){
    for(let i = 0 ; i <= k ; i++){ 
        let sum = 0;
        for(let j = 0; j < i; j++){
            sum += L[i][j] * L[k][j]; 
        }

        if(k == i){
            L[k][k] = Math.sqrt(A[k][k] - sum);
        } else {
            L[k][i] = (A[k][i] - sum) / L[i][i];
        }
    }
}
// หา T Transpose
let L_transpose = math.transpose(L);


//L * Y = B
let Y = []
for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < i; j++) {
        sum += L[i][j] * Y[j];
    }
    Y[i] = (B[i] - sum) / L[i][i];
}

//L^T * X = Y
let X = []
for (let i = n - 1; i >= 0; i--) {
    let sum = 0;
    for (let j = i + 1; j < n; j++) {
        sum += L_transpose[i][j] * X[j];
    }
    X[i] = (Y[i] - sum) / L_transpose[i][i];
}
console.log('X = ', X);