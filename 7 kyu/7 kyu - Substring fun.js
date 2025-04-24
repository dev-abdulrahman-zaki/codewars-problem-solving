function nthChar(words){
    let s = "";
    words.forEach((word, i) => s+=word[i]);
   return s;
  }

/*
const nthChar = (words) => words.map((word, index)=>word[index]).join('');
*/

/*
const nthChar = words => words.reduce((a, b, index) => a + b[index], "");
*/

/*
function nthChar(words){
 return words.map((str, i) => str.charAt(i)).join("");
}
*/