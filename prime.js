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

//test case

function testCase(){
    const tests =[
        {input: 2, expected: "prime"},
        {input: 3, expected: "prime"},
        {input: 4, expected: " prime"},
        {input: 10, expected: "not prime"},
    ];
    tests.forEach(({input, expected}, index) => {
        console.log(`Test ${index + 1}: ${isPrime(input) === expected ? "    Passed" : "Failed"}`);
    });
}

testCase();