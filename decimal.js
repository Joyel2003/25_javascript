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

//test case

function runTests(){
    const cases = [[10, '1010'], [20, '10100'], [5, '101'], [1, '1'], [0, ''], [8, '100'], [15, '1111'], [255, '11111']];

    cases.forEach(([num, expected], i) =>
    console.log(`${(r = decimalToBinary(num)) === expected ? 'PASS' : 'FAIL'} Test ${i+1}: ${num} → ${r} (Expected: ${expected})`))
}
runTests();