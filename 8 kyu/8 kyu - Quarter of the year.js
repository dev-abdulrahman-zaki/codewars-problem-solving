const quarterOf = (month) => {
  if (month <= 3){return 1}
  else if (month > 3 && month <=6){return 2}
  else if (month > 6 && month <=9){return 3}
  else{
    return 4
  }
};

// let x = quarterOf(3); //,  1)
// let x = quarterOf(8); //,  3)
let x = quarterOf(11); //, 4)
console.log(x);

/*
const quarterOf = month => Math.ceil(month/3);
*/