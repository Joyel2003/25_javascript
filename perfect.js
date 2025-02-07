//check whether a given number is a perfect number or not
function isPerfect(num){
    let sum = 0;
    for(let i = 1; i<num; i++){
        if(num % i === 0){
            sum += i;
        }
    }
    return sum === num;
}
console.log(isPerfect(18));
console.log(isPerfect(6));

//test case
function testCase(){
    const tests = [
        {input:6, expected: true},
        {input:28, expected:true},
        {input:12, expected:false},
        {input:18, expected:true},
    ];
    tests.forEach(({input, expected}, index) =>{
        console.log(`Test ${index + 1}: ${isPerfect(input) === expected ? "PASS Passed" : "FAIL Failed"}`);
    });
}
testCase();