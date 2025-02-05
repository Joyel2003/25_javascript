//calculate the Fibonacci series of a given number
function fibonacci(n){
    let fibSeries = [0, 1];
    for(let i = 2; i <= n; i++){
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }
    return  fibSeries;
}
console.log(fibonacci(10));
console.log(fibonacci(9));

//test case
function runTests(){
    [[10, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]], 
    [9, [0, 1, 1, 2, 3, 5, 8, 13, 21]], 
    [0, [0]], [1, [0, 1]], [2, [0, 1, 1]]]
    .forEach(([input, expected], i) =>
    console.log(fibonacci(input).toString() === expected.toString() ? `pass Test ${i+1} passed` : `fail Test ${i+1} Failed`));
}
runTests();