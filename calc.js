// calculate the remainder of two numbers

function calculateRemainder(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both inputs must be numbers');
  }

  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }

  const remainder = a % b;

  return remainder;
}
console.log(calculateRemainder(5,2));
console.log(calculateRemainder(15,8))


//test case
function runTests(){
  [[5, 2, 1], [15, 8, 7], [10, 3, 1],[20, 4, 0], [-9, 4, -1], [7, -3, 1], [0, 5, 0] ]
   .forEach(([a, b, e], i) => console.log(`${(r = calculateRemainder(a, b)) === e ? 'PASS' : 'FAIL'} Test ${i+1}: ${a} % ${b} = ${r} (Expected: ${e})`));

   [10, 'a', null, undefined, []].forEach((v, i) =>
    console.log((() => { try { calculateRemainder(v, 2); return 'FAIL'; } catch (e) { return 'PASS'; } })(), `Error Test ${i+1}`));
   console.log((() => { try { calculateRemainder(10, 0); return 'FAIL'; } catch (e) { return 'PASS'; } })(), "Error Test (Divide by Zero)");
}

runTests();