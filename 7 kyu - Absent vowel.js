function absentVowel(x){
    const vowelsIndex = {
      a: 0,
      e: 1,
      i: 2,
      o: 3,
      u: 4
    };
    let vowelsExist = x.split("").filter(e=>Object.keys(vowelsIndex).includes(e));
    let missingVowel = Object.keys(vowelsIndex).filter(e => !vowelsExist.includes(e));
    return vowelsIndex[missingVowel]
}


console.log(absentVowel("John Doe hs seven red pples under his bsket"));//, 0

/*
function absentVowel(x) {
  var vowels = 'aeiou';
  for (var i in vowels) {
    if (x.toLowerCase().indexOf(vowels[i]) == -1) {
      return Number(i);
    }
  }
}
*/

/*
const absentVowel = string =>
  [...'aeiou'].findIndex(letter => !string.includes(letter))
*/

/*
function absentVowel(x) {
  return ["a", "e", "i", "o", "u"].findIndex(v => !x.includes(v));
}
*/