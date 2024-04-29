function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}



/*
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}
*/

/*
function solution(string){
  return string.replace(/[A-Z]/g, function(c){return " " + c;});
}
*/

/*
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}
*/

/*
const solution = string => {
  return [...string].map((char) => {
    return (char === char.toUpperCase()) ? ` ${char}` : char;
  }).join('');
}
*/

//(?=) Positive Lookahead
/*
function solution(text) {
  return text.split(/(?=[A-Z])/).join(' ');
}
*/
/*
function solution(string) {
    return string.replace(/(?=[A-Z])/g," ")
}
*/
/*
The provided regular expression /(?=[A-Z])/g uses a positive lookahead assertion to match any position in the string where there is an uppercase letter (character in the range A-Z). However, it doesn't consume any characters in the process.

The string.replace(/(?=[A-Z])/g, " ") code replaces those positions with a space. So, effectively, it inserts a space before each uppercase letter in the string without actually removing the uppercase letters.
*/