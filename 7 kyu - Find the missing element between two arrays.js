function findMissing(arr1, arr2) {
    return arr2.length ? arr1.reduce((a,b)=>a+b) - arr2.reduce((a,b)=>a+b) : arr1[0];
    }

/*
function findMissing(arr1, arr2) {
return arr1.sort().filter((e,i) => arr2.sort()[i] !== e)[0]
}
*/

/*
const sum = arr => arr.reduce((a, b) => a + b, 0);
const findMissing = (arr1, arr2) => sum(arr1) - sum(arr2);
*/