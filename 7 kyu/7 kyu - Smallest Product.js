function smallestProduct(arr) {
    return Math.min(...arr.map(arr => arr.reduce((a, b) => a * b)));   
}
 
    
// let x = smallestProduct([[3, 2], [1, 2, 1], [7, 8]])//, 2);
let x = smallestProduct([[10], [3, 0], [-1, -6, 2]])//, 0);
console.log(x);