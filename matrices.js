

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

