function capitalize(s, arr) {
    return s
        .split("")
        .map((c, i) => (arr.includes(i) ? c.toUpperCase() : c))
        .join("");
}

/*
const capitalize = (string, array) => 
  string.replace(/./g, (char, index) =>
    array.includes(index) ? char.toUpperCase() : char
  );
  */

  