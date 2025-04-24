function minimumSteps(numbers, value) {
  numbers.sort((a, b) => a - b);
  let counter = 0;
  let sum = numbers[counter];
  while (sum < value) {
    sum += numbers[counter + 1];
    counter++;
  }
  return counter;
}

// let x = minimumSteps([4,6,3], 7)                                 //, 1);
// let x = minimumSteps([10,9,9,8], 17)                                 //, 1);
// let x = minimumSteps([8,9,10,4,2], 23)                                 //, 3);
let x = minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464); //, 8);
// let x = minimumSteps([4,6,3], 2)                                 //, 0);
console.log(x);
