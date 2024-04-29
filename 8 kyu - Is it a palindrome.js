function isPalindrome(x) {
    return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");
}

/*
function isPalindrome(x, str = x.toLowerCase()) {
  return str === [...str].reverse().join('')
}
*/

