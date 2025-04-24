function nextId(ids){
    let x = null;
    ids.sort((a,b)=>a-b).forEach((_,i) => (!ids.includes(i) && x==null) ? x=i : "");
    return ids.includes(0) ? x || Math.max(...ids)+1 : 0;
}

// let x = nextId([0,1,2,3,5])//, 4);
// let x = nextId([0,1,2,3,4,5,6,7,8,9,10])//, 11);
// let x = nextId([1,2,0,2,3,5])//, 4)
console.log(x);

/*
 function nextId(ids){
  var x = 0;
  while (ids.includes(x)) x++;
  return x;
}
*/

/*
function nextId(ids){
	const used = new Set(ids);
  for (let i = 0; i <= ids.length; i++) {
  	if (!used.has(i)) return i;
  }
}
*/

/*
function nextId(ids){
  for (i = 0; i < ids.length; i++) { 
    if (ids.indexOf(i) == -1){
      return i;
    }
  }
  return ids.length;
}
*/

/*
const nextId = function(u){
  const arr = [...new Set(u)];
  for(let i=0; i <= u.length; i++){
    if(!arr.includes(i)) return i
  }
}
*/

/*
const nextId = ids =>
  (val => val < 0 ? Math.max(...ids) + 1 : val)
  (ids.findIndex((_, idx) => !ids.includes(idx)));
  */