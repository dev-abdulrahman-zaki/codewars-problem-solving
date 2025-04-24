function maxGap(numbers) {
  return Math.max(
    ...numbers
      .sort((a, b) => a - b)
      .map((e, i, arr) => Math.abs(arr[i + 1] - e)).slice(0,-1)
  );
}

// let x = maxGap([13, 10, 2, 9, 5]); //, 4);
// let x = maxGap([13, 3, 5])                         //, 8);
// let x = maxGap([24, 299, 131, 14, 26, 25])                         //, 168);
// let x = maxGap([-3, -27, -4, -2])                         //, 23);
// let x = maxGap([-7, -42, -809, -14, -12])                         //, 767);
// let x = maxGap([12, -5, -7, 0, 290])                         //, 278);
// let x = maxGap([-54, 37, 0, 64, -15, 640, 0])                         //, 576);
// let x = maxGap([130, 30, 50])                         //, 80);
// let x = maxGap([1, 1, 1])                         //, 0);
// let x = maxGap([-1, -1, -1])                         //, 0);
console.log(x);
