//find the greatest common divisor (GCD) of two numbers
function gcd(a,b){
    if (b == 0){
        return a;
    }else {
        return gcd(b, a%b);
    }
}
console.log(gcd(24, 36));