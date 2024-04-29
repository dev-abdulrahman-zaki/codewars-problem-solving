function isAlt(word) {
    let arr = word.split("");
    if (/[aeiou]/.test(arr[0])){
      return arr.filter((e,i) => i%2==0).every(e => /[aeiou]/.test(e)) && arr.filter((e,i) => i%2!==0).every(e => /[^aeiou]/.test(e));
    }
    else if (/[^aeiou]/.test(arr[0])){
      return arr.filter((e,i) => i%2==0).every(e => /[^aeiou]/.test(e)) && arr.filter((e,i) => i%2!==0).every(e => /[aeiou]/.test(e));
    }
    else{return false;}
}

console.log(
    isAlt("amazon")
);


/*
Algo:
// 1- take first char.
// 2- if it v: check i+2 be v too.
// 3- if it c: check i+2 be c too.
*/