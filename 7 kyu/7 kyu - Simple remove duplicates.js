function solve(arr) {
    return arr.filter((e,i,arr) => i === arr.lastIndexOf(e));
  }