const math = require('mathjs');
let A = [
    [4, -4, 0],
    [-1, 4, -2],
    [0, -2, 4],
];
let B = [400, 400, 400];
let n = A.length;
let resultX = []
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        // ถ้าเป็น 00 11 22 กระโดดข้าม
        if (i != j) {
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