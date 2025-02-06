//find the greatest common divisor (GCD) of two numbers
function gcd(a,b){
    if (b == 0){
        return a;
    }else {
        return gcd(b, a%b);
    }
}
console.log(gcd(24, 36));

let testCase = () => {
    let inputs = [
        { input: [24, 36], expectedOutput: 12 },
        { input: [18, 27], expectedOutput: -9 },
        { input: [101, 103], expectedOutput: 1 }, 
        { input: [-36, -24], expectedOutput: 12 },
    ];

    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i].input;
        let expectedOutput = inputs[i].expectedOutput;
        let result = gcd(input[0], input[1]);

        if (result === expectedOutput) {
            console.log(`Test ${i + 1} passed PASS`);
        } else {
            console.log(`Test ${i + 1} failed FAILED`);
            console.log(`  Input: gcd(${input[0]}, ${input[1]})`);
            console.log(`  Expected: ${expectedOutput}`);
            console.log(`  Got: ${result}`);
        }
    }
}

testCase();