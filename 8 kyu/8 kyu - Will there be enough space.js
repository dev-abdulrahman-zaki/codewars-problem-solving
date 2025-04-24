function enough(cap, on, wait) {
  return on + wait <= cap ? 0 : wait - (cap - on);
}

console.log(enough(10, 5, 5)); //, 0
console.log(enough(100, 60, 50)); //, 10
console.log(enough(20, 5, 5)); //, 0
console.log(enough(90, 10, 71)); //, 0
console.log(enough(57, 34, 33)); //, 10