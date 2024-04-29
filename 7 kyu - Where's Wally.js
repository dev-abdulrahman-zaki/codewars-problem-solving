function wheresWally(string){
    return (" "+string).search(/ Wally\b/); 
}


console.log(wheresWally("Wally")); // 0
console.log(wheresWally("Where's Wally")); // 8
console.log(wheresWally("Where's Waldo")); // -1
console.log(wheresWally("DWally Wallyd .Wally")); // -1
console.log(wheresWally("Hi Wally.")); // 3
console.log(wheresWally("It's Wally's.")); // 5
console.log(wheresWally("Wally Wally")); // 0
console.log(wheresWally("'Wally Wally")); // 7

/*
function wheresWally(string) {
  var match = /(^|[ ])Wally\b/.exec(string)
  return match ? match.index + match[1].length : -1
}
*/

/*
function wheresWally(string){
  var match = string.match(/(^|\s)(Wally)([^a-z0-9]|$)/);
  return (match != null) ? match.index + (match.index > 0 ? 1 : 0) : -1;
}
*/

/*
const wheresWally = string =>
  string.search(/(?<!\S)Wally\b/);
  */