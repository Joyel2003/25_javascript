// find the most repeated value in an array of numbers
 
const findMostRepeatedValue = (arr) => {
    if(arr.length === 0){
        return null;
    }
    let maxCount = 0;
    let mostRepeatedValue = null;
    const counts = {};

    for (let i = 0; i < arr.length; i++){
        const num =arr[i];
        counts[num]= (counts[num] || 0) + 1;
        if(counts[num] > maxCount){
            maxCount = counts[num];
            mostRepeatedValue = num;
        }
    }
    return mostRepeatedValue;
}
const numbers = [1,5,7,8,9,6,5,5,5,7,2,5,4,7];
console.log(findMostRepeatedValue(numbers));