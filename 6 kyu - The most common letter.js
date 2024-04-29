function replaceCommon(s, letter) {
  let arr = s.split("").filter((e) => e != " ");
  let letters = arr.filter((e, i, arr) => arr.indexOf(e) === i);
  let counts = letters.map((e) => {
    let pattern = new RegExp(e, "g");
    return [...s.matchAll(pattern)].length;
  });
  let mostCommonLetter = letters[counts.indexOf(Math.max(...counts))];
  let result = s.replaceAll(mostCommonLetter, letter);
  return result
}