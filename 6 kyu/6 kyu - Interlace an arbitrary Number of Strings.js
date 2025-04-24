function combineStrings(...args) {
  if (!args.length){return "";}
  let lengths = args.map(w => w.length);
  let maxIdx = Math.max(...lengths);
  let s = "";
  for (let idx = 0; idx < maxIdx; idx++) {
    args.forEach((w) => {
      if (w[idx]) {
        s += w[idx];
      }
    });
  }
  return s;
}

// console.log(combineStrings("abcd", "123", "£$%"));
console.log(combineStrings("abc", "1234"));
// 'a1£b2$c3%d'


/*
function combineStrings(...xs) {
  const max = Math.max(...xs.map(s => s.length))
  let str = ""
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < xs.length; j++) {
      str += xs[j].charAt(i)
    }
  }
  return str
}
*/

/*
function combineStrings(...strings) {
  const M = Math.max(...strings.map(s => s.length)), N = strings.length;
  return Array.from({length: M}, (_, i) =>
    Array.from({length: N}, (_, j) =>
      strings[j][i] || "").join("")).join("");
}
*/

/*
function combineStrings(...strs) {
  var arrs = strs.map(str => str.split(""));
  var s = "";
  while (arrs.length) {
    s += arrs.reduce((agg, arr) => agg + arr.shift(), "");
    arrs = arrs.filter(arr => arr.length);
  }
  return s;
}
*/