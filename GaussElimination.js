const math = require('mathjs');
const A = [
    [-2, 3, 1],
    [3, 4, -5],
    [1, -2, 1]
];

const B = [9,0,-4];

let n = A.length;
for(let i = 0 ; i < n ; i++){
    for(let j = i+1 ; j < n ; j++){
        if( i != j){
            let c = A[j][i] / A[i][i];
            for(let k = i ; k < n ; k++){
                A[j][k] = A[j][k] - c * A[i][k];
            }
            B[j] = B[j] - c * B[i];
            console.log(A);
        }
    }
}
let resultX = Array(n).fill(0);

for (let i = n - 1; i >= 0; i--) {
    resultX[i] = B[i];
    for (let j = i + 1; j < n; j++) {
        resultX[i] -= A[i][j] * resultX[j];
    }
    resultX[i] /= A[i][i]; // Finalize X[i] after back substitution
}
// A.forEach(element =>{
//     console.log(element)
// })
// resultX.forEach((element , index) =>{
//     console.log("X = ", index + 1 , " = " , math.round(element))
// })