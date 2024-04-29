function squares(x, n) {
    if (n<=0){return []};
    let arr = [x];
    for (let i=1; i<n; i++){
        arr.push(arr[i-1]**2);
    }
    return arr;
}

/*
function squares(x, n) {
	return Array.from({length: n}, (v, k) => Math.pow(x, Math.pow(2, k)))
}
*/

/*
function squares(x, n) {
  let arr = [];
  if(n === 0 || n < 0) return arr;
  for(let i = x; arr.length < n; i*=i) {
      arr.push(i);
  }
  return arr
}
*/

/*
const squares = (x, n) =>
  [...Array((n > 0) * n)].map((_, idx) => x ** 2 ** idx);
*/

// recursion
/*
function squares(x, n, arr = []) {
  return n>0 ? squares(Math.pow(x,2), n-1, [...arr, x]) : arr;
}
*/

/*
function squares(x, n) {
  if (n <= 0) {
    return [];
  }
  
  return new Array(n)
    .fill(x)
    // [2, 4, 16, 256, 65536]
    // [2 ** (2 ** 0), 2 ** (2 ** 1), 2 ** (2 ** 2), 2 ** (2 ** 3)]
    // where 0, 1, 2, 3 are indexes
    .map((num, index) => num ** (2 ** index));
}
*/