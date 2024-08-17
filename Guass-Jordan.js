let A = [
    [4, -4, 0],
    [-1, 4, -2],
    [0, -2, 4],
];
let B = [400, 400, 400];

let n = A.length;
let resultX = []

for (let i = 0; i < n; i++) {

    let pivot = A[i][i];
    for (let j = i; j < n; j++) {
        A[i][j] /= pivot;
    }
    B[i] /= pivot;

    for (let k = 0; k < n; k++) {
        if (k !== i) {
            let factor = A[k][i];
            for (let j = i; j < n; j++) {
                A[k][j] -= factor * A[i][j];
            }
            B[k] -= factor * B[i];
        }
    }
}

for (let i = 0; i < n; i++) {
    resultX[i] = B[i];
}
console.log("Solution:", resultX);
