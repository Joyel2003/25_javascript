// find the least common multiple (LCM) of two numbers

const findLCM = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw new Error("Both inputs musr be number");
    }
    let gcd = findGCD(a, b);
    let lcm = (a * b) / gcd;
    return lcm;
};
const findGCD = (a, b) => {
    if(b === 0){
        return a;
    }
    return findGCD(b, a % b);
};

console.log(findLCM(10, 22));