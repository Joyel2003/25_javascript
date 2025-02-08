function transposeMatrix(matrix) {
    return matrix[0].map((_, i) => matrix.map(row => row[i]));
}

function areMatricesEqual(mat1, mat2) {
    if (mat1.length !== mat2.length) return false;
    for (let i = 0; i < mat1.length; i++) {
        if (mat1[i].length !== mat2[i].length) return false;
        for (let j = 0; j < mat1[i].length; j++) {
            if (mat1[i][j] !== mat2[i][j]) return false;
        }
    }
    return true;
}

function testTransposeMatrix() {
    const testCases = [
        { input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], expected: [[1, 4, 7], [2, 5, 8], [3, 6, 9]] },
        { input: [[1, 2], [3, 4], [5, 6]], expected: [[1, 3, 5], [2, 4, 6]] },

        { input: [[5]], expected: [[7]] }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = transposeMatrix(input);
        console.log(`Test ${index + 1}:`, areMatricesEqual(result, expected) ? " Passed" : "Failed");
    });
}
testTransposeMatrix();