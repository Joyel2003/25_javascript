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

//test case 

function runTests(){
    [
        [[1,2,3,1,4,2,5,1,5,7,5,1], [1,2,3,4,5,8,6,7,9]],
        [[5,5,5,5], [5]],
        [[], []],
    ].forEach(([input, expected], i) =>
        console.log(`${(r = removeDuplicates(input)).toString() === expected.toString() ? 'PASS' : 'FAIL'} Test ${i+1}: ${r}`));
}
runTests();