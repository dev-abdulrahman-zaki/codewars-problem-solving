function deepReverse(arr) {
    return arr.map(item => Array.isArray(item) ? deepReverse(item) : item).reverse();
}


/*
var l = [[50,51,[52,53]] , [[54,55],56,57]]
deepReverse(l)     //produces [[57,56,[55,54]] , [[53,52],51,50]]
*/