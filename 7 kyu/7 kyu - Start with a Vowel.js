function vowelStart(str){
    return str.toLowerCase().split(" ").join("").replace(/[^a-z0-9]/gi, "").replaceAll(/([aeiou])/g, " $1").trim();
}

/*
function vowelStart(str){
  return str.toLowerCase().replace(/[^a-z\d]/g, '').replace(/[aeiou]/g, ' $&').trim();
}
*/

/*
function vowelStart(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z\d]/g, '')
    .replace(/[aeiou]/g, ' $&')
    .trim()
}
*/


// const vowelStart = s => s.toLowerCase()
//   .replace(/[^a-z0-9]/g, '')
//   .match(/^[^aeiou]+|[aeiou][^aeiou]*/g)
//   .join` `;
