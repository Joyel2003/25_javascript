//convert the decimal number to a binary representation
function decimalToBinary(num){
    let binary = '';
    while(num > 0){
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}
console.log(decimalToBinary(10));
console.log(decimalToBinary(20));