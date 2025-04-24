function nthSmallest(arrays, n) {
  return [Array.from(arguments).slice(0, -1)]
    .flat(arrays.length + 1)
    .sort((a, b) => a - b)[arguments[arguments.length - 1] - 1];
}