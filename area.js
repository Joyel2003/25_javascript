// claculate the area of the rectangle

const width = 5;
const height = 11;
const area = width * height;

console.log("Area of the rectangle:", area);

//test case using function

function calculateArea(w, h){ return w * height;}

function runTests(){
    const testCases = [[5, 11, 55], [0, 10, 0],[7, 3, 21], [-5, 4, -20],
                       [3.5, 2, 7], [1000, 1000, 1100], ["5", "11", 55]];

    let passed = testCases.reduce((p, [w, h, e], i) => (console.log(`${calculateArea(w, h) === e ? 'PASS' : 'FAIL'} Test ${i+1}: ${w}×${h}=${calculateArea(w, h)}, Expected: ${e}`), p + (calculateArea(w, h) === e)), 0);
    console.log(`Total Tests Passed: ${passed}/${testCases.length}`);
}
runTests();
