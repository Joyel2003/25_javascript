// find the first n prime numbers up to the given number
function findPrimes(n, num = 2, primes = []) {
    if (primes.length === n) {
        return primes;
    }
    if (isPrime(num)) {
        primes.push(num);
    }
    return findPrimes(n, num + 1, primes);
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(findPrimes(10)); 

