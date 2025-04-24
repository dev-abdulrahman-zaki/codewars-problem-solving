function findMultiples(integer, limit) {
    let arr = Array( Math.floor(limit/integer) ).fill(0);
    return arr.map((_,i) => integer*(i+1))
}

  
//   findMultiples(5, 25),  // [5, 10, 15, 20, 25])
//   findMultiples(1, 2),  // [1, 2])
//   findMultiples(5, 7),  // [5])
let x = findMultiples(4, 27); // [4, 8, 12, 16, 20, 24])
// let x = findMultiples(11, 54);  // [11, 22, 33, 44])
console.log(x);

/*
function findMultiples(int,limit){
  let multiples = [];
  for(let i = int; i <= limit; i += int){ multiples.push(i); }
  return multiples;
}
*/
