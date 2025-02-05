// check the given number is even or odd
function isEven(number){
if(number % 2 === 0){
    console.log("The number is even");
}else{
    console.log("The number is odd");
 }
}
console.log(isEven(4));
console.log(isEven(5));

function isEven(number){
    return number % 2 === 0 ? "The number is even" : "The number is odd";
}
[4,5,0,-2,-3,100,99].forEach((n, i) =>
console.log(isEven(n) === (n % 2 === 0 ? "The number is even" : "The number is odd") ? `PASS Test ${i+1} Passed` : `FAIL Test ${i+1} Failed`)
);
