function nthSmallest(arr, pos) {
  arr.sort((a,b) => a-b);
  return arr[pos-1];
}




let x = nthSmallest([3, 1, 2], 2)                              //, 2);
// let x = nthSmallest([15, 20, 7, 10, 4, 3], 3)                              //, 7);
// let x = nthSmallest([-5, -1, -6, -18], 4)                              //, -1);
// let x = nthSmallest([-102, -16, -1, -2, -367, -9], 5)                              //, -2);
// let x = nthSmallest([2, 169, 13, -5, 0, -1], 4)                              //, 2);
// let x = nthSmallest([2, 1, 3, 3, 1, 2], 3)                              //, 2);
console.log(x);
