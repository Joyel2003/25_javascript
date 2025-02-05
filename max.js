// // find the max value in an array of numbers

const findMaxValue = (arr) => {
    if(arr.length === 0){
        return null;
    }
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMaxValue([1,8,5,9,78,15,55,28,70]));