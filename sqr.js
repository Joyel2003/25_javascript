// check if the given number is a perfect square or not

function isPerfectSquare(n){
    let i = 1;
    while(i *i <= n){
        if(i * i === n){
            return "It's a perfect square";
        }
        i++;
    }
    return "it's not a perfect square";
}
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(20));

//test case

function testCase(){
    const tests = [
        {input: 16, expected: "it's a perfect square"},
        {input: 25, expected: "it's a perfect square"},
        {input:1, expected: "it's a perfect square"},
        {input:-8, expected: "it's not a perfect square"},
    ];
    tests.forEach(({input, expected}, index) =>
    console.log(`Test ${index + 1}: ${isPerfectSquare(input) === expected ? " Passed" : " Failed"}`)
);
}
testCase();