function calcType(a, b, res) {
  switch (res) {
    case a + b:
      return "addition";
    case a - b:
      return "subtraction";
    case a * b:
      return "multiplication";
    case a / b:
      return "division";
  }
}

// let x = calcType(1, 2, 3); //,'addition');
// let x = calcType(10,4,40) //,'multiplication');
// let x = calcType(10,5,5) //,'subtraction');
let x = calcType(9,5,1.8) //,'division');
console.log(x);
