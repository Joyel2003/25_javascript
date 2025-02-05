// check if the given character is vowels or not
function isVowel(char){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
}
console.log(isVowel('a'));
console.log(isVowel('b'));

//test case

function isVowel(char){
    return typeof char === 'string' && char.length === 1 && 'aeiou'.includes(char.toLowerCase());
}
function runTests(){
    const testCases = ['a','e','i','u','A',,'b', 'c', 'z', 'Y', '1', '$', ' ', 'ai', null, undefined, 123];

    testCases.forEach((input, index) => {
        const result = isVowel(input);
        const isConsonant = /^[b-df-hj-np-tv-z]$/i.test(input);
        console.log(`${isConsonant ? 'FAIL (Failed intentionally)' : result ? 'PASS' : 'FAIL'} Test ${index + 1}: isVowel('${input}') → ${result}`);
    });
}
runTests();