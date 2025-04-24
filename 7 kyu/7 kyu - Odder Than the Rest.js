// function oddOne(arr) {
//   let x = arr
//     .map((n, i) => (Math.abs(n) % 2 !== 0 ? i : false))
//     .filter((e) => e !== false);
//   return x.length ? x[0] : -1;
// }

function oddOne(arr) {
  return arr.findIndex((n) => Math.abs(n % 2 !== 0));
}

// let x = oddOne([
//   -78, 24, 64, 64, 16, 28, -80, -88, 87, -54, -2, -58, 80, -54, -92, 12, 60,
// ]);
// let x = oddOne([2,16,98,10,13,78]) // => 4
// let x = oddOne([4,-8,98,-12,-7,90,100]) // => 4
let x = oddOne([-19, -18, -64, 88]); // => 0
console.log(x);
