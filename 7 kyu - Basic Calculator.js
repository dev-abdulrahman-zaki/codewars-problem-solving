function calculate(num1, operation, num2) {
  var result;
  switch (operation) {
    case "+":
      return num1 + num2;

      break;
    case "-":
      return num1 - num2;

      break;
    case "*":
      return num1 * num2;

      break;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return null;
      }
      break;
    default:
      return null;
  }
}
