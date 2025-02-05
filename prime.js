//check if the given number is prime or not

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "not prime";
        }
    }
    return "prime";
}
console.log(isPrime(71));
