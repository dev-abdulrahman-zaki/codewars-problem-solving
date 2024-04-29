function sumOfDifferences(arr) {
  let descArr = arr.sort((a, b) => b - a);
  let result = 0;
  for (let i = 0; i < descArr.length - 1; i++) {
    result += descArr[i] - descArr[i + 1];
  }
  return result;
}
