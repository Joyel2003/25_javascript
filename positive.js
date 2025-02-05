//check the given number is positive, negative or zero

function checkNumber(num){
    if(num > 0){
        console.log(num + " is a positive number");
    }else if(num < 0){
        console.log(num + " is a negative number");
    }else{
        console.log(num + " is zero");
    }
}
console.log(checkNumber(1));
console.log(checkNumber(0));
console.log(checkNumber(-8));
