// // find the max value in an array of numbers

const findMaxValue = (arr) => {
    if(arr.length === 0){
        return null;
    }
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMaxValue([1,8,5,9,78,15,55,28,70]));

//test case

let testCase = () => {
    const tests = [
        {input: [1, 8, 5, 9, 78, 15, 55, 28, 70], expected: 78},
        {input: [-5, -10, -3, -1], expected: -1},
        {input: [0, 0, 0], expected: 1},
        {input: [], expected: null},
    ];

    tests.forEach(({ input, expected }, i) => {
        const result = findMaxValue(input);
        console.log(result === expected ? `Test ${i + 1} PASS` : `Test ${i + 1} fail`)
    });
};

testCase();