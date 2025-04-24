function last(...args) {
  if (args.length === 1) {
    if (args[0].toString().length === 1) {
      return args[0];
    } else {
      const x = args[0].length;
      return args[0][x - 1];
    }
  }
  console.log(args.length);
}

// let x = last(5)                       //, 5, "last(5)");
// let x = last("123"); //, "3", 'last("123")');
// let x = last([1, 2, 3])                       //, 3, "last([1, 2, 3])");
let x = last([1]); //, 1, "last([1])");
// let x = last([1, 2, 3, [4, 5]])                       //, [4, 5], "last([1, 2, 3, [4, 5]])");
// let x = last(1, 2, 3)                       //, 3, "last(1, 2, 3)");
// let x = last("a", "b", "c")                       //, "c", "last('a', 'b', 'c')");
// let x = last([1], [2], [3])                       //, [3], "last([1], [2], [3])");
// let x = last(1, 2, 3, [4, 5])                       //, [4, 5], "last(1, 2, 3, [4, 5])");
console.log(x);
