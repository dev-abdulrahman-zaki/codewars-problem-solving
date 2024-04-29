function cubeOdd(arr) {
    return arr.some(e => isNaN(parseInt(e))) ? undefined : arr.filter(e => (e%2)).reduce((a, b) => a + b**3, 0);
}

let x = cubeOdd([1, 2, 3, 4])//, 28);
// let x = cubeOdd([-3,-2,2,3])//, 0);
// let x = cubeOdd(["a",12,9,"z",42])//, undefined);
console.log(x);