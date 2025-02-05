// calculate the factorial of a number using a recursive method
function factorial(n){
    if (n === 0 || n === 1){
        return 1;
    }else {
        return n * factorial(n-1);
    }
}
console.log(factorial(6));
