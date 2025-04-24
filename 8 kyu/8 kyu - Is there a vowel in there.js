function isVow(a){
    const vowels = ["a", "e", "i", "o", "u"];
    return a.map(n => vowels.includes(String.fromCharCode(n)) ? String.fromCharCode(n) : n)
}

/*
if ('aeiou'.indexOf(char) !== -1)
*/

/*
const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)
*/

/*
function isVow(a){
  return a.map(x => /[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x);
}
*/