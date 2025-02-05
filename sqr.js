// check if the given number is a perfect square or not

function isPerfectSquare(n){
    let i = 1;
    while(i *i <= n){
        if(i * i === n){
            return "It's a perfect square";
        }
        i++;
    }
    return "it's not a perfect square";
}
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(20));