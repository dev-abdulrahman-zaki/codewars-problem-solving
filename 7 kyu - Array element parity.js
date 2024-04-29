function solve(arr) {
  let array1 = arr.filter((e) => e > 0);
  let array2 = arr.filter((e) => e < 0).map((e) => Math.abs(e));
  let ml =
    array1.length > array2.length
      ? array1.filter((e) => !array2.includes(e))
      : array2.filter((e) => !array1.includes(e));
  return array1.length > array2.length ? ml[0] : ml[0] * -1;
}


// const solve = arr => [...new Set(arr)].reduce((a, c) => a + c);