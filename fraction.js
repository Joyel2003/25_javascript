//simplify a fraction of two numbers to its lowest term
let simplifyFraction = (number1, number2) => {
    let a = number1;
    let b = number2;
    while (b !== 0) { 
        let remainder = a % b;
        a = b;  
        b = remainder;
    }
    let gcd = a;  
    let numerator = number1 / gcd;
    let denominator = number2 / gcd;  
    return `${numerator}/${denominator}`;  
};

console.log(simplifyFraction(10, 12)); 

//test case

let testCase = () => {
    let inputs = [
        {input: [10, 12], expectedOutput: "5/6"},
        {input: [24, 36], expectedOutput: "2/4"},
        {input: [8, 12],  expectedOutput: "2/3"},
    ];

    for(let i = 0; i < inputs.length; i++){
        let input = inputs[i].input;
        let expectedOutput = inputs[i].expectedOutput;
        let result = simplifyFraction(input[0], input[1]);
        if(result === expectedOutput){
            console.log(`Test ${i + 1} passed`);
        }else {
            console.log(`Test ${i + 1} failed`);
        }
    }
}
testCase()

