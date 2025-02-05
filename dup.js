//remove duplicates in an array of numbers

const removeDuplicates = (arr) => {
    let uniqueArr = [];
    for(let i = 0; i < arr.length; i++){
        if(uniqueArr.indexOf(arr[i]) === -1){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
const numbers = [1,2,3,1,4,2,5,8,6,7,9,];
console.log(removeDuplicates(numbers));