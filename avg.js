// // calculate the average value in an array of numbers
function calculateAverage(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    const average = sum / arr.length;
    return average;
}
const numbers = [10,20,40,55,96,100];
const avg = calculateAverage(numbers);
console.log("Average:",avg)

// test case

function calculateAverage(arr) {return arr.length ? arr.reduce((s, n) => s + n, 0) / arr.length : 0;}

function runTests(){
    const cases = [[[10, 20, 40, 55, 96, 100], 53.5], [[1, 2, 3, 4, 5], 3], [[100, 200, 350], 200], [[7], 7], [[], 0], [[-10, -20, -0], -20], [[1.5, 2.5, 3.5], 2.5]];

    let passed = cases.reduce((p, [i, e], n) => (console.log(`${(r = calculateAverage(i)) === e ? 'PASS' : 'FAIL'} Test ${n + 1}: ${i} → ${r} (Expected: ${e})`), p + (r === e)), 0);
    console.log(`\nTotal: ${cases.length}, Passed: ${passed}, Failed: ${cases.length - passed}`);}
runTests();