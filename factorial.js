// calculate the factorial of a given number

function factorial(n){
    if (n === 0 || n === 1){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));
console.log(factorial(10));

//test case
function runTests() {
    const tests = [
        {input: 5, expected: 120},
        {input: 10, expected: 362800},
        {input: 0, expected: 1},
        {input: 1, expected: 1},
        {input: 8, expected: 5040},
    ];

    tests.forEach(({input, expected}, i) => {
        const result = factorial(input);
        console.log(result === expected ? `PASS Test ${i+1} Passed` : `FAIL Test ${i+1} Failed`);
    });
}

runTests();