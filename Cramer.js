const math = require('mathjs');

const A = [
    [-2, 3, 1],
    [3, 4, -5],
    [1, -2, 1]
];

const B = [9,0,-4];
let result = [];
for (let i = 0; i < 3; i++) {
    let temp = A.map(row => [...row]); 
    for (let j = 0; j < 3; j++) {
        temp[j][i] = B[j];
    }
    let x = math.det(temp) / math.det(A);
    result.push(x);
}

result.forEach((row,index) => console.log("X index",index + 1,"=", row));
