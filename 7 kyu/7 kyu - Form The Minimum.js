function minValue(values) {
  return Number([...new Set(values)].sort((a, b) => a - b).join(""));
}

// let x = minValue([1, 3, 1])                   //, 13);
// let x = minValue([4, 7, 5, 7])                   //, 457);
// let x = minValue([4, 8, 1, 4])                   //, 148);
// let x = minValue([5, 7, 9, 5, 7])                   //, 579);
// let x = minValue([6, 7, 8, 7, 6, 6])                   //, 678);
// let x = minValue([5, 6, 9, 9, 7, 6, 4])                   //, 45679);
// let x = minValue([1, 9, 1, 3, 7, 4, 6, 6, 7])                   //, 134679);
let x = minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]); //, 356789);
// let x = minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])                   //, 1);
console.log(x);
