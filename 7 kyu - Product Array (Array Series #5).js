function productArray(numbers) {
  let product = numbers.reduce((acc, curr) => acc * curr, 1);
  return numbers.map((e) => product / e);
}

productArray([16, 17, 4, 3, 5, 2]); // [2040,1920,8160,10880,6528,16320])
