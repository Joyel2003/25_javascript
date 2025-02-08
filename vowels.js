// count the number of vowels in a string

const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(str){
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowels("I'm from kerala!"));

//test case

function testCountVowels(){
    let testCases =[
        {input: "I'm from Kerala!", expected: 6},
        {input: "HELLO WORLD", expected: 3},
        {input: "rhythm", expected: 0},
        {input: "1234567890", expected: 0},
    ];

    testCases.forEach(({ input, expected}, index) => {
        let result = countVowels(input);
        console.log(`Test Case ${index + 1}:`, result === expected ? "Passed " : `Failed`);
    });
}
testCountVowels();