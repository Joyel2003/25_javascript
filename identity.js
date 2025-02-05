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