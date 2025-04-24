function swapTwo(array, a, b) {
    let arr = [...array];
    let firstA = arr.findIndex((element) => element === a);
    // let lastB = arr.findLastIndex((element) => element === b);
    // let lastB = arr.map((e,i) => {if(e===b){return i}}).filter(e=>e).slice(-1)[0];
    let lastB = arr.map((e,i) => {if(e===b){return i}}).filter(e=> e!==undefined);
    lastB = lastB[lastB.length-1];
    console.log(lastB);
    [arr[firstA], arr[lastB]] = [arr[lastB], arr[firstA]];
    return arr;
}

console.log(swapTwo([4, 3, 2, 1], 2, 4));//, [1, 4, 3, 2]);

/*
function swapTwo(arr, a, b) {
  let arr1 = arr.slice()
  let indA = arr.indexOf(a);
  let indB = arr.lastIndexOf(b);
  arr1[indA] = b;
  arr1[indB] = a;
  return arr1;
}
*/

// const swapTwo = (array, a, b) => array.map((e, i) => i === array.indexOf(a) ? b : array.lastIndexOf(b) === i ? a : e);

/*
const swapTwo = (arr, a, b) => {
  const copy = arr.slice()
  
  copy[arr.indexOf(a)] = b
  copy[arr.lastIndexOf(b)] = a
  
  return copy
}
*/

/*
function swapTwo(array, a, b) {
 let arr = [...array];
  arr[array.indexOf(a)] = b;
  arr[array.lastIndexOf(b)] = a;
  return arr;
}
*/