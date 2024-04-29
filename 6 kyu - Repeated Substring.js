function f(s) {
    for (let i = 1; i <= s.length; i++) {
      let pattern = s.slice(0, i);
      let numOfChunks = s.length / pattern.length;
      let string = pattern.repeat(numOfChunks);
      if (numOfChunks<2){break;}
      if (string === s){return [pattern, numOfChunks]}
    }
    return [s, 1];
}

/*
var f = function(s) {
  var m = s.match(/^(.*?)\1+$/);
  return m ? [m[1], s.length / m[1].length] : [s, 1];
}
*/