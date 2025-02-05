// returns the transpose of a given matrix

function transposeMatrix(matrix){
    const transposedMatrix = [];
    for (let i = 0; i < matrix[0].length; i++){
        transposedMatrix[i] =[];
        for (let j = 0; j < matrix.length; j++){
            transposedMatrix[i][j] = matrix[j][i];
        }
    }
    return transposedMatrix;
}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(transposeMatrix(matrix));
