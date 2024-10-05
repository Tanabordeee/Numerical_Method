const math = require('mathjs');
const A = [
    [-2, 3, 1],
    [3, 4, -5],
    [1, -2, 1]
];

const B = [9,0,-4];
let n = A.length;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i != j) {
            console.log(j , i)
            let c = A[j][i] / A[i][i];
            for (let k = 0; k < n; k++) {
                A[j][k] = A[j][k] - c * A[i][k]; 
            }
            B[j] = B[j] - c * B[i];
        }
    }
}
for(let i = 0 ; i < n; i++){
    B[i] /= A[i][i];
    A[i][i] /=A[i][i];
}
A.forEach(element => {
    console.log(element)
});
B.forEach((element, index) => {
    console.log("X", index + 1, " = ", math.round(element));
});