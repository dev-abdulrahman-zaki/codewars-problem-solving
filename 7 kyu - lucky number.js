function isLucky(n) {
let sum = n.toString().split("").reduce((a,b) => Number(a)+Number(b));
return sum == 0 || sum % 9 == 0 ? true : false
}

console.log(
    isLucky(1892376)
);