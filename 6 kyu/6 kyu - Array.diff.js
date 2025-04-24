function arrayDiff(a, b) {
  return a.filter(e => b.indexOf(e) == -1);
}