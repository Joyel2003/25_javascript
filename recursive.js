// calculate the factorial of a number using a recursive method
function factorial(n){
    if (n === 0 || n === 1){
        return 1;
    }else {
        return n * factorial(n-1);
    }
}
console.log(factorial(6));

//test case

function testCase() {
    const tests = [
        { input: 0, expected: 1 },    
        { input: 1, expected: 1 },    
        { input: 5, expected: 120 },  
        { input: 10, expected: 362880 },  
    ];

    tests.forEach(({ input, expected }, index) =>
        console.log(`Test ${index + 1}: ${factorial(input) === expected ? " Passed" : " Failed"}`)
    );
}

testCase();
