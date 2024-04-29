const findAll = (array, n) => {
    return array.map((e,i) => e==n?i:"").filter(e=>e!=="");
}





let x = findAll([6, 9, 3, 4, 3, 82, 11], 3)//, [2, 4])
console.log(x);