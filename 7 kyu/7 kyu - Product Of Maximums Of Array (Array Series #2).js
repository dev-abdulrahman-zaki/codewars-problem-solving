function maxProduct(numbers, size) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((a, b) => a * b, 1);
}

// let x = maxProduct([4,3,5], 2)//, 20);
// let x = maxProduct([10, 8, 7, 9], 3); //, 720);
// let x = maxProduct([8,6,4,6], 3)//, 288);
// let x = maxProduct([10,2,3,8,1,10,4], 5)//, 9600);
// let x = maxProduct([13,12,-27,-302,25,37,133,155,-14], 5)//, 247895375);
// let x = maxProduct([-4,-27,-15,-6,-1], 2)//, 4);
// let x = maxProduct([-17,-8,-102,-309], 2)//, 136);
// let x = maxProduct([10,3,-27,-1], 3)//, -30);
let x = maxProduct([14,29,-28,39,-16,-48], 4)//, -253344);
// let x = maxProduct([1], 1)//, 1);
console.log(x);
