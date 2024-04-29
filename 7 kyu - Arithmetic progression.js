function arithmeticSequenceElements(a, d, n) {
    let arr = [];
    while (arr.length < n){
      arr.push(a);
      a = a+d;
    }
      return arr.join(", ");
  }

/*
function arithmeticSequenceElements(a, r, n) {
  return Array.from({length: n}, (_, i) => a + r * i).join(', ');
}
*/

/*
function arithmeticSequenceElements(a,r,n) {
  return new Array(n).fill().map((i,k) => a + k * r).join(", ");
}
*/