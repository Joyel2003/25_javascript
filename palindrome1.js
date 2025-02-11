// check whether the given string with space is palindrome or not
function isPalindrome(str){
    let reversedStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i];
    }
    return str === reversedStr;
}
console.log(isPalindrome('racecar'));

//test case
function testCase(){
    const tests =[
        {input: "racecar", expected: true},
        {input: "madam", expected:true},
        {input: "122p", expected:true},
    ];
    tests.forEach(({input, expected }, index) =>{
        console.log(`Test ${index + 1}: ${isPalindrome(input) === expected ? "PASS Passed" : "FAIL Failed"}`);
    });
}
testCase();