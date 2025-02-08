// check the given age is eligible for voting

function checkEligibility(age){
    if (age >= 18){
        return "Eligible for voting";
    }else{
        return "Not Eligible for voting"
    }
}
console.log(checkEligibility(20));
console.log(checkEligibility(5));

//test case
function testCheckEligibility(){
    let testCases = [
        {input: 20, expected: "Eligible for voting"},
        {input: 5, expected: " Not eligible for voting"},
        {input: 18, expected: "Eligible for voting"},
    ];
    testCases.forEach(({input, expected},  index) => {
        let result = checkEligibility(input);
        console.log(`Test Case ${index + 1}:`, result === expected ? "Passed " : `Failed`);
    });
}

testCheckEligibility();
