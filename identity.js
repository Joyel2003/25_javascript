//check if the given matrix is an identity matrix

function isIdentityMatrix(matrix){
    for (let i = 0; i < matrix.length; i++){
        for (let j =0; j < matrix[i].length; j++){
            if(i === j && matrix[i][j] !== 1){
                return false;
            }
        }
    }
    return true;
}
console.log(isIdentityMatrix([[1,0,0],[0,1,0],[0,0,1]]));

//test case

let testCase = () => {
    let inputs = [
        { input: [[1, 0, 0], [0, 1, 0], [0, 0, 1]], expected: true },
        { input: [[1, 0, 0], [0, 2, 0], [0, 0, 1]], expected: false },
        { input: [[1, 0, 1], [0, 1, 0], [0, 0, 1]], expected: false },
    ];

    inputs.forEach(({ input, expected }, i) => {
        let result = isIdentityMatrix(input);
        console.log(`Test ${i + 1} ${result === expected ? " Passed" : " Failed"}`);
    });
};
testCase();
