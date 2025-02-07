//check the given number is positive, negative or zero

function checkNumber(num){
    if(num > 0){
        console.log(num + " is a positive number");
    }else if(num < 0){
        console.log(num + " is a negative number");
    }else{
        console.log(num + " is zero");
    }
}
console.log(checkNumber(1));
console.log(checkNumber(0));
console.log(checkNumber(-8));

//test case

function testCase(){
    const tests = [
        {input: 5, expected: "5 is a positive number"},
        {input: -3, expected: "-3 is a positive number"},
    ];
    tests.forEach(({ input, expected}, index) => {
        console.log(
            `Test ${index + 1}: ${checkNumber(input) === expected ? "Passed" : "Failed"}`
        );
    });
}
testCase();
