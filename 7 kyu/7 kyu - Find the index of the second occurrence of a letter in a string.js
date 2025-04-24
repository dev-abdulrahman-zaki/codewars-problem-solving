function secondSymbol(s, symbol) {
  let indexs = [];
  s.split("").forEach((c, i) => {
    if (c === symbol) {
      indexs.push(i);
    }
  });
  return indexs.length > 1 ? indexs[1] : -1;
}
