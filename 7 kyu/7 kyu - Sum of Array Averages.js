const sumAverage = (arr) => {
  function calcAvg(array) {
    return array.reduce((a, b) => a + b, 0) / array.length;
  }
  let calc = 0;
  arr.forEach((element) => {
    calc += calcAvg(element);
  });
  return Math.floor(calc);
};

// let x = sumAverage([
//   [3, 4, 1, 3, 5, 1, 4],
//   [21, 54, 33, 21, 77],
// ]); //, 44);
let x = sumAverage([
  [-4, 3, -8, -2],
  [2, 9, 1, -5],
  [-7, -2, -6, -4],
]); //, -6);
console.log(x);

//
const sum = (a, b) => a + b;

function sumAverage(arr) {
  return Math.floor(arr.map((e) => e.reduce(sum) / e.length).reduce(sum));
}

