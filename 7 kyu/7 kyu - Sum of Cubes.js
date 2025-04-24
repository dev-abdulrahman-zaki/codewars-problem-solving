function sumCubes(n){
  return Array(n).fill(0).map((e,i) => (i+1)**3).reduce((a,b)=>a+b);
}

console.log(sumCubes(3));

// recursion
/*
function sumCubes(n){
  if (n == 1) {
    return n**3;
  } else {
    return n**3 + sumCubes(n - 1);
  }
}
*/

/*
const sumCubes = n => [...Array(n + 1).keys()].reduce((r, i) => r + i ** 3);
*/

// const sumCubes = ( n ) => Array.from({length: n}, (_,i)=> i+1).map(el => el**3).reduce((a, b)=> a+b, 0)