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

