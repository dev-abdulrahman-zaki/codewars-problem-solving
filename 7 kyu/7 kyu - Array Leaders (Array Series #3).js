function arrayLeaders(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const sumToRight = numbers.slice(i + 1).reduce((a, b) => a + b, 0);
    console.log(sumToRight);

    if (numbers[i] > sumToRight) {
      result.push(numbers[i]);
    }
  }
  return result;
}

// let x = arrayLeaders([1, 2, 3, 4, 0]); //, [4]);
// let x = arrayLeaders([16,17,4,3,5,2])                                       //, [17,5,2]);
// let x = arrayLeaders([-1,-29,-26,-2])                                       //, [-1]);
// let x = arrayLeaders([-36,-12,-27])                                       //,  [-36,-12]);
// let x = arrayLeaders([5,-2,2])                                       //, [5,2]);
// let x = arrayLeaders([0,-1,-29,3,2])                                       //,  [0,-1,3,2]);
console.log(x);


// other solution:
var arrayLeaders = numbers => {
  return numbers.filter((a, i) => numbers.slice(i + 1).reduce((sum, b) => sum + b, 0) < a)}