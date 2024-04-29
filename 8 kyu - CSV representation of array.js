function toCsvText(arr) {
  return arr.map((e, i) => e.join() + (i !== arr.length - 1 ? "\n" : "")).join("");
}

let arr = [
  [0, 1, 2, 3, 4],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34],
];
console.log(toCsvText(arr));
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

/*
function toCsvText(array) {
   return array.join('\n');
}
*/

/*
const toCsvText = array => array.map(row => row.join(',')).join('\n');
*/