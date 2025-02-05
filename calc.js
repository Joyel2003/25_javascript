// calculate the remainder of two numbers

function calculateRemainder(a, b) {
  // Check if both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both inputs must be numbers');
  }

  // Check if the second input is zero
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }

  // Calculate the remainder using the modulo operator
  const remainder = a % b;

  return remainder;
}
console.log(calculateRemainder(5,2));
console.log(calculateRemainder(15,8))




