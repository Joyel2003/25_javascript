//check if the given matrix is diagonal matrix


function isDiagonalMatrix(matrix){
    if(matrix.length !== matrix[0].length){
        return false;
    }
    for(let i =0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if (i !== j && matrix[i][j] !== 0){
                return false;
            }
        }
    }
    return true;
}
console.log(isDiagonalMatrix([[1, 0, 0], [0, 2, 0], [0,0,3]]));
