#include <iostream>
#include <cmath>
#include<bits/stdc++.h>
using namespace std;
double calculate(double x , int n , int k){
    double result = pow(x , n) - k;
    return result;
}

int main(){
    double x , n , xl , xr;
    double fXr = 0;
    double fXl = 0;
    double fX1 = 0;
    double X1 = 0;
    double check = 0;
    double Old_X1 = 0;
    cin >> x >> n >> xl >> xr;
    while(true) {
        Old_X1 = X1;
        fXr = calculate(xr , n , x);
        fXl = calculate(xl , n , x);
        X1 = ((xl * fXr) - (xr * fXl)) / (fXr - fXl);
        fX1 = calculate(X1 , n , x);
        if(fX1 * fXr < 0){
            xl = X1;
        }else{
            xr = X1;
        }
        check = abs(xl - Old_X1);
        if(check < 0.000001){
            break;
        }
    }
    cout << "RESULT X1 IS : " << fixed << setprecision(4) << X1 << endl;
    return 0;
}