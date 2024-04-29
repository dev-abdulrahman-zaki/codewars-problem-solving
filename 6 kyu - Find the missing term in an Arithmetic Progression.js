var findMissing = function (list) {  
    const diff =  list[0] - list[1];
    for (let i=1; i<list.length; i++){
      if (list[i] - list[i+1] !== diff){
        return list[i+1]+diff;
      }
    }
  }

/*
var findMissing = function (list) {  
  var expected_sum = (list[0] + list[list.length - 1]) * (list.length + 1) / 2;
  var sum = list.reduce(function(acc, x) { return acc + x; });
  return expected_sum - sum;
}
*/

/*
var findMissing = function (list) { 
  var delta1 = list[0] - list[1];
  var delta2 = list[1] - list[2];
  var delta  = Math.min(Math.abs(delta1), Math.abs(delta2));
  var direction = list[0] < list[1] ? 1 : -1;
  
  var start = list[0];
  
  for (var i = 0; i < list.length; i++, start += delta * direction) {
    if (list[i] !== start) return start;  
  }
}
*/

/*
var findMissing = function (list) {  
  var pattern = (list[list.length-1] - list[0]) / list.length;
  var i = 0;
  while (list[i] + pattern === list[i+1]) i++;
  return list[i] + pattern;
}
*/