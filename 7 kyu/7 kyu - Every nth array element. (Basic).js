
function every(arr, interval = 1, start = 0) {
  return arr.slice(start).filter((e, i) => i % interval === 0);
}

// let x = every([0, 1, 2, 3, 4]); //, [0, 1, 2, 3, 4]);
// let x = every([0, 1, 2, 3, 4], 1)               //, [0, 1, 2, 3, 4]);
let x = every([0, 1, 2, 3, 4], 2)               //, [0, 2, 4]);
// let x = every([0, 1, 2, 3, 4], 3)               //, [0, 3]);
// let x = every([0, 1, 2, 3, 4], 3, 1)               //, [1, 4]);
console.log(x);
