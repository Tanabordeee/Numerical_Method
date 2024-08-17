const math = require('mathjs');

const A = [
    [2, -1, 3],
    [1, 0, 4],
    [3, 2, -2]
];

const B = [[1, 2, 3]];
let result = [];
let temp = []
for (let i = 0; i < 3; i++) {
    temp = A.map(row => [...row]); // ลอกลง temp
    temp[i][0] = B[0][0];
    temp[i][1] = B[0][1];
    temp[i][2] = B[0][2];
    let x = math.det(temp) / math.det(A);
    result.push(x);
}

result.forEach((row,index) => console.log("X index",index + 1,"=", row));
