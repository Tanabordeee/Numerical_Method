let A = [
    [3, 2, 1],
    [2, 5, 3],
    [4, 7, 5],
];

let n = A.length;

for (let i = 0; i < n; i++) {
    for (let k = i + 1; k < n; k++) {
        let factor = A[k][i] / A[i][i]; 
        for (let j = 0; j < n; j++) {
            A[k][j] -= factor * A[i][j];
        }
    }
}