#include <iostream>
#include <cmath>
#include<bits/stdc++.h>
using namespace std;
double calculate(double x , int n , int k){
    double result = pow(x , n) - k;
    return result;
}

int main(){
    int x , n , xl , xr;
    double fXr = 0;
    double fXm = 0;
    double Xm = 0;
    double check = 0;
    double Old_Xm = 0;
    cin >> x >> n >> xl >> xr;
    while(true) {
        Old_Xm = Xm;
        fXr = calculate(xr , n , x);
        Xm = (xl + xr) / 2;
        fXm = calculate(Xm , n , x);
        if(fXm * fXr < 0){
            xl = Xm;
        }else{
            xr = Xm;
        }
        check = abs(xl - Old_Xm);
        cout << check << endl;
        if(check < 0.000001){
            break;
        }
    }
    cout << "RESULT XM IS : " << fixed << setprecision(4) <<Xm << endl;
    return 0;
}