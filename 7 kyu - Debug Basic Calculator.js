var calculate = function(a, o, b) {
    var result = null;
  
    if (o === "+") {
      return a + b;
    } else if (o === "-") {
      return a - b;
    } else if (o === "/" && b !== 0) {
      return a / b;
    } else if (o === "*") {
      return a * b;
    }
  
    return result;
  };