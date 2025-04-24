function position(x, y, n) {
    // Calculate the first integer in the sequence
    const firstInteger = (y - x * (x - 1) / 2) / x;  
    // Return the integer at position n
    return firstInteger + n;
}

/*
Explanation:

firstInteger calculation:

y - x * (x - 1) / 2 subtracts the sum of the first x-1 integers from the total sum y. This is because the sum of the first x-1 integers forms an arithmetic series with a common difference of 1 and first term of firstInteger + 1.
Dividing by x gives the actual firstInteger.
Return value:

Adds n to the firstInteger to find the integer at position n.
This function works by finding the first integer in the sequence and then adding the required position offset. It handles negative sums and positions correctly.
*/
/*
This solution aims to solve the problem of finding the consecutive integer at a specific position (`n`) in a sequence of `x` consecutive integers that sum up to `y`. The formula used here leverages the arithmetic progression sum formula.

Explanation:

1. **Arithmetic Progression Sum Formula:**
   The sum of the first `n` terms of an arithmetic sequence is given by the formula: `S_n = n/2 * (2a + (n-1)d)`, where `a` is the first term, `n` is the number of terms, and `d` is the common difference.

2. **Derivation of the Formula:**
   The sum `y` of `x` consecutive integers can be expressed as the sum of an arithmetic sequence. The formula `y = n/2 * (2a + (n-1)d)` can be rearranged to solve for the first term `a`:
   ```
   a = (2y - x * (x - 1)) / (2 * x)
   ```
   The first term `a` is essentially the first integer in the sequence.

3. **Returning the Integer at Position `n`:**
   After calculating the first term `a`, the integer at position `n` can be found by adding `n` to the first term:
   ```
   firstInteger + n
   ```

By utilizing the arithmetic progression sum formula and manipulating it to find the first term, this solution provides a concise and efficient way to determine the integer at a specific position in the consecutive sequence.
*/


/*
function position(x, y, n) {
  const middleNumber = y/x
  const firstNumber = middleNumber - (x/2) + 0.5
  return firstNumber + n
}
*/

/*
function position(x, y, n) {
  
  const startValue = Math.ceil(y / x) - Math.floor(x / 2);
  
  return startValue + n;
}
*/




//---------------------------------
// Not Correct
/*
function position(numsCount, sum, position) {
    let initArr = Array(numsCount).fill(0).map((e,i) => e=i);
    for (let trial=0; trial<100000000; trial++){
        if (initArr.reduce((a,b) => a+b) == sum){
            return initArr[position];
        }
        else{
            initArr = initArr.map(e => e+1);
        }
    }   
}
*/