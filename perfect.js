//check whether a given number is a perfect number or not
function isPerfect(num){
    let sum = 0;
    for(let i = 1; i<num; i++){
        if(num % i === 0){
            sum += i;
        }
    }
    return sum === num;
}
console.log(isPerfect(18));
console.log(isPerfect(6));
