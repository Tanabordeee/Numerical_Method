const math = require('mathjs');
let A = [[4,-4,0],[-1,4,-2],[0,-2,4]]
let L =[[1 , 0 , 0 ] ,
        [0 , 1 , 0 ],
        [0 , 0 , 1 ]
    ]
let U = math.clone(A);
let B = [400 , 400 , 400];
for(let i = 0; i < A.length; i++){
    for(let j = i+1 ; j < A.length ; j++){
        // หา L ทำ GUASS ฝั่ง U
        L[j][i] = U[j][i] / U[i][i];

        // หา U ทำ GUASS 
        for(let k = i; k < A.length ; k++){
            U[j][k] = U[j][k] - L[j][i] * U[i][k]
        }
    }
}


let Y = []
for(let i = 0 ; i < A.length ; i++){
    Y[i] = B[i];
    for(let j = 0 ; j < i ;j++){
        Y[i] -= L[i][j] * Y[j];
    }
    Y[i] /= L[i][i]
}

let resultX = []
for(let i = A.length - 1 ; i >= 0 ; i--){
    resultX[i] = Y[i];
    for(let j = i+1; j < A.length; j++){
        resultX[i] -= U[i][j] * resultX[j];
    }
    resultX[i] /= U[i][i];
}
resultX.forEach(e => console.log(e))