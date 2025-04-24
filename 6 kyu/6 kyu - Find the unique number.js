// Solution (1)
/*
const findUnique = (numbers) => {
return numbers.filter((e,_,arr) => arr.indexOf(e) === arr.lastIndexOf(e))[0]
}
*/

// Solution (2)
/*
const findUnique = (numbers) => {
    const seen = new Set();
    const unique = new Set();
  
    for (const number of numbers) {
      if (!seen.has(number)) {
        seen.add(number);
        unique.add(number);
      } else {
        unique.delete(number);
      }
    }
  
    return Array.from(unique)[0];
};
*/

// Solution (3)
const findUnique = (numbers) => {
    const seen = new Set();
    for (const num of numbers) {
      if (seen.has(num)) {
        seen.delete(num);
      } else {
        seen.add(num);
      }
    }
    return Array.from(seen)[0];
};
  

let x = findUnique([ 3, 5, 5, 4, 4, 3, 2, 2, 9 ]);
console.log(x);