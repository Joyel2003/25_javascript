//check whether the given string is palindrome or not
function isPalindrome(str){
    let reversedStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i];
    }
    return str === reversedStr;
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('Joyel'));

//test case
function testCase(){
    const tests = [
        {input: "racecar", expected: true},
        {input: "madam", expected:true},
        {input: "hello", expected:true},
        {input: "world", expected:false},   
    ];

    tests.forEach(({input, expected}, index) =>{
        const result = isPalindrome(input);
        console.log(result === expected ? `Test ${index + 1} PASS` : `Test ${index + 1} FAIL`);
    });
}
testCase();