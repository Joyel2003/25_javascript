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

//test case

function runTests() {
    [[[1,0,0],[0,2,0],[0,0,3]],1], [[[5,0],[0,6]],1], [[[1,2,0],[0,3,0],[0,0,4]],0], 
    [[[7,0,0],[0,8,9],[0,0,2]],0], [[[4]],1], [[[1,0],[2,3]],0], [[[1,0,0],[0,2,0]],0]
    .forEach(([m, e], i) => console.log(`${isDiagonalMatrix(m) == e ? '✅' : '❌'} Test ${i+1}`));
}

runTests();