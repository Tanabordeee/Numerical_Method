const math = require("mathjs");
let A = math.matrix([[5,2,0,0],[2,5,2,0],[0,2,5,2],[0,0,2,5]])
let B = math.matrix([12,17,14,7])
let X = math.matrix([0,0,0,0])
let R = math.subtract(math.multiply(A ,X) , B);
let D = math.multiply(-1 , R);
let lambda = math.divide(math.multiply(math.multiply(-1 , math.transpose(D)) , R) , math.multiply(math.multiply(math.transpose(D) , A) , D))
let error = 1;
let iteration = 0;
while(error > 0.000001){
    let new_x = math.add(X , math.multiply(lambda , D));
    R = math.subtract(math.multiply(A , new_x) , B);
    let alpha = math.divide(math.multiply(math.multiply(math.transpose(R) , A) , D) , math.multiply(math.multiply(math.transpose(D) , A) , D));
    D = math.add(math.multiply(-1 , R) , math.multiply(alpha , D));
    lambda = math.divide(math.multiply(math.multiply(-1 , D) , R) , math.multiply(math.multiply(math.transpose(D) , A) ,D));
    console.log("X",iteration+1,"=",new_x._data," R = ",R._data," alpha = " ,alpha ," D = ",D._data," lamda = ",lambda);
    X = new_x
    error = math.sqrt(math.multiply(math.transpose(R) , R));
    console.log("error = " , error);
    console.log("----------------------------------------------------")
    iteration++;
}