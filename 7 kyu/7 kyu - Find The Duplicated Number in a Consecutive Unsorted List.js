function findDup( arr ){
    return arr.filter((e,i) => i != arr.lastIndexOf(e))[0];
  }

/*
function findDup(arr){
  var seen = {};
  for(let e of arr) {
    if(seen[e])return e;
    seen[e]=true;
  }
}
*/
