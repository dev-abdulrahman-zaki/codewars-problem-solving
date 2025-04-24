function rowWeights(array) {
  const team1 = array.filter((e, i) => i % 2 === 0).reduce((a, b) => a + b, 0);
  const team2 = array.filter((e, i) => i % 2 !== 0).reduce((a, b) => a + b, 0);
  return [team1, team2];
}

// let x = rowWeights([80]); //, [80,0]);
// let x = rowWeights([100, 50]); //, [100,50]);
// let x = rowWeights([50, 60, 70, 80]); //, [120,140]);
// let x = rowWeights([13, 27, 49]); //, [62,27]);
// let x = rowWeights([70, 58, 75, 34, 91]); //, [236,92]);
let x = rowWeights([29, 83, 67, 53, 19, 28, 96]); //, [211,164]);
// let x = rowWeights([0]); //, [0,0]);
// let x = rowWeights([100, 51, 50, 100]); //, [150,151]);
// let x = rowWeights([39, 84, 74, 18, 59, 72, 35, 61]); //, [207,235]);
// let x = rowWeights([0, 1, 0]); //, [0,1]);
console.log(x);
