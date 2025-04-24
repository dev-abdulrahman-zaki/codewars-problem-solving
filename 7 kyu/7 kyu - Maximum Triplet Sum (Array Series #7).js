function maxTriSum(numbers) {
  return numbers
    .sort((a, b) => b - a)
    .filter((e, i, arr) => arr.indexOf(e) === i)
    .slice(0, 3)
    .reduce((a, b) => a + b);
}

// let x = maxTriSum([3, 2, 6, 8, 2, 3]); //, 17);
//    let x = maxTriSum([2, 9, 13, 10, 5, 2, 9, 5])                                      //, 32);
//    let x = maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4])                                      //, 18);
//    let x = maxTriSum([-3, -27, -4, -2, -27, -2])                                      //, -9);
//    let x = maxTriSum([-14, -12, -7, -42, -809, -14, -12])                                      //, -33);
//    let x = maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29])                                      //, 41);
//    let x = maxTriSum([-2, 0, 2])                                      //, 0);
//    let x = maxTriSum([-2, -4, 0, -9, 2])                                      //, 0);
//    let x = maxTriSum([-5, -1, -9, 0, 2])                                      //, 1);
console.log(x);

//
const maxTriSum = (numbers) => {
  const [a, b, c, ...rest] = [...new Set([...numbers])].sort((a, b) => b - a);
  return a + b + c;
};
