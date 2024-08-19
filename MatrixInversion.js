
let A = [
    [-2, 3, 1],
    [3, 4, -5],
    [1, -2, 1]
];

let B = [9,0,-4];
let I = [
    [1 , 0 , 0],
    [0 , 1 , 0],
    [0 , 0 , 1]
]
let result = []
let n = A.length;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i != j) {
            let c = A[j][i] / A[i][i];
            for (let k = 0; k < n; k++) {
                A[j][k] = A[j][k] - c * A[i][k];
                I[j][k] = I[j][k] - c * I[i][k];
            }
        }
    }
}

for(let i = 0 ; i < n; i++){
    for(let j = 0; j < n; j++){
        I[i][j] /= A[i][i];
    }
    A[i][i] /= A[i][i]
}

for (let i = 0; i < n; i++) {
    result[i] = 0;
    for (let j = 0; j < n; j++) {
        result[i] += I[i][j] * B[j];
    }
}

result.forEach(element =>{
    console.log(element)
})