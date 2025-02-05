//simplify a fraction of two numbers to its lowest term


function simplifyFraction(numerator, denominator) {
    let gcd = findGCD(numerator, denominator);
    return [numerator / gcd, denominator / gcd];
}

function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(simplifyFraction(8, 12)); 
