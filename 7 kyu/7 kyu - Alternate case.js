function alternateCase(s) {
    return s.split("").map(c => /[A-Z]/.test(c) ? c.toLowerCase() : c.toUpperCase()).join("");
  }


  console.log(
    alternateCase("ABC")
  );