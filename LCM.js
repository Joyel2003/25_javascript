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

//test case

let testCase = () =>{
    let inputs = [
        {input: [10, 22], expected: 110},
        {input: [12, 15], expected: 50},
        {input: [5, 7], expected:35},
        {input: [9, 28], expected:252},
    ];
    inputs.forEach(({input,expected}, i) =>{
        try {
            let result = findLCM(input[0], input[1]);
            console.log(`Test ${i + 1} ${result === expected ? " Passed" : " Failed"}`);
        } catch (error) {
            console.log(`Test ${i + 1} failed  - Error: ${error.message}`);
        }
    });
}

testCase();