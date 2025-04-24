function stringy(size) {
  let arr = Array(size).fill("0");
  for (let i = 0; i < arr.length; i += 2) {
    arr[i] = "1";
  }
  return arr.join("");
}

/*
function stringy(size) {
  var str='';
  for( var i=1; i<=size; i++ )
    str+=i%2;
  return str;
}
*/

/*
const stringy = x => ''.padStart(x,'10');
*/

/*
const stringy = size => "10".repeat(size).slice(0,size);
*/

/*
const stringy = size => Array.from(Array(size), (v, i) => +!(i % 2)).join('');
*/