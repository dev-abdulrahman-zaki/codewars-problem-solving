// If you're not allowed to use the built-in `BigInt` type, you can implement your own BigInt-like functionality using strings or arrays to represent large numbers. Here's an example of how you can do addition for large numbers using strings:

// ```javascript
function add(a, b) {
  // Ensure both numbers have the same length by padding with zeros
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");

  let carry = 0;
  let result = "";

  for (let i = maxLength - 1; i >= 0; i--) {
    const digitA = parseInt(a[i], 10);
    const digitB = parseInt(b[i], 10);
    const sum = digitA + digitB + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }

  if (carry > 0) {
    result = carry + result;
  }

  return result;
}
// ```

// In this implementation:
// - We ensure that both numbers have the same length by padding the shorter number with zeros.
// - We iterate through the digits from right to left, adding corresponding digits from `a` and `b` along with the carry from the previous operation.
// - We handle the carry and build the result string accordingly.

// You can use this `add` function to add large numbers represented as strings. For example:

// ```javascript
// const result = add('123456789012345678901234567890', '987654321098765432109876543210');
// console.log(result); // Output: 1111111110111111110111111111000
// ```

// This approach allows you to perform addition on large numbers without using the built-in `BigInt` type. Keep in mind that this implementation doesn't handle negative numbers or decimal points, as it's focused on integer arithmetic.


/*
function add (a, b) {
  var res = '', c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = c % 10 + res
    c = c > 9
  }
  return res
}
*/


/*
function add(a, b) {
  var carry = 0, result = [],
      len = Math.max(a.length, b.length), i = len;
  while (i--) {
    var sum = (+a[i - len + a.length]||0) + (+b[i - len + b.length]||0) + carry;
    carry = parseInt(sum / 10);
    result.unshift(sum % 10);
  }
  if (carry) result.unshift(carry);
  return result.join('');
}
*/
