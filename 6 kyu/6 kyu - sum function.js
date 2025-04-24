function sum(x, y) {
  if (y != undefined) return x + y;
  return function innerFn(y) {
    return x + y;
  };
}

console.log(sum(2, 3));
console.log(sum(2)(3));

// concise
function sum(x, y) {
  if (y != undefined) return x + y;
  return (y) => x + y;
}


