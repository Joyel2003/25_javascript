function addMatrices(matrix1, matrix2){
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length){
        throw new Error("Matrix must have the same dimention");
    }
    return matrix1.map((row, i) => row.map((value, j) => value + matrix2[i][j]));
}

const matrix1 = [
    [1, 2, 3],
    [4, 8, 6],
    [7, 8, 9]
];
const matrix2 = [
    [7, 8, 7],
    [8, 5, 4],
    [5, 2, 1]
];
try{
    const summedMatrix = addMatrices(matrix1, matrix2);
    console.table(summedMatrix);
}catch (error){
    console.error(error.message);
}

// let testCase = () => {
//     const tests = [
//         { input: [[[1, 2, 3], [4, 8, 6], [7, 8, 9]], [[7, 8, 7], [8, 5, 4], [5, 2, 1]]], expected: [[8, 10, 10], [12, 13, 10], [12, 10, 10]] },
//         { input: [[[1, 2], [3, 4]], [[5, 6]]], expectedError: "Matrices must have the same dimensions" },
//         { input: [[[1, 1], [1, 1]], [[1, 1], [1, 1]]], expected: [[2, 2], [2, 2]] },
//         { input: [[[-1, -2], [3, 4]], [[5, 6], [7, 8]]], expected: [[4, 4], [10, 12]] },
//         { input: [[[0, 0], [0, 0]], [[0, 0], [0, 0]]], expected: [[0, 0], [0, 0]] },
//         { input: [[[1, 1, 1]], [[1, 1, 1]]], expected: [[2, 2, 8]] },
//     ];

//     tests.forEach(({ input, expected, expectedError }, i) => {
//         try {
//             const result = addMatrices(input[0], input[1]);
//             console.log(result.length ? (JSON.stringify(result) === JSON.stringify(expected) ? `Test ${i + 1} PASS` : `Test ${i + 1} FAIL`) : `Test ${i + 1} FAIL`);
//         } catch (error) {
//             console.log(error.message === expectedError ? `Test ${i + 1} PASS Expected error` : `Test ${i + 1} FAIL Unexpected error`);
//         }
//     });
// };

// testCase();

let testCase = () =>{
    const tests =[
        {input: [[[1, 2, 3], [4, 8, 6], [7, 8, 9] ]], expected: [[8, 10, 10], [12, 13, 10], [12, 10, 10]] },
        {input: [[[1, 2], [3, 4]], [[5, 6]]], expectedError: "Matrices must have the same dimensions" },
        {input: [[[1, 1], [1, 1]], [[1, 1], [1, 1]]], expected: [[2, 2], [2, 2]] },
        {input:[[[1, 1, 1]], [[1, 1, 1]]], expected: [[2, 2, 8]] }, 
    ];
    
    tests.forEach(({input, expected, expectedError}, i) => {
        try{
            const result = addMatrices(input[0], input[1]);
            console.log(result.length ? (JSON.stringify(result) === JSON.stringify(expected) ? `Test ${i + 1} PASS` : `Test ${i + 1} FAIL`) : `Test ${i + 1} FAIL`);
        }catch (error){
            console.log(error.message === expectedError ? `Test ${i + 1} PASS Expected error` : `Test ${i + 1} FAIL`);
        }
    });
};

testCase();