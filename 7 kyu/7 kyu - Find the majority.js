function majority(arr) {
    if (!arr.length) return null;
    let max = [];
    let checked = [];
  for (e of arr){
    if (checked.includes(e)){continue;}
    max.push({
      [arr.filter(ele => ele==e).length] : e
    })
    checked.push(e);
  }
  checked=null;
  let counts = max.map(obj => Number(Object.keys(obj)[0]));
  let maxCounts = Math.max(...counts);

  if (counts.indexOf(maxCounts) == counts.lastIndexOf(maxCounts)){
    return max.filter(obj => obj[maxCounts] != undefined)[0][maxCounts];
  }
  return null;   
}


console.log(majority(["A", "B", "A"]));

/*
function majority(arr) {
  if(arr.length === 1) return arr[0].toString()

  let dub = arr.filter((a,b,c) =>  c.indexOf(a) !== c.lastIndexOf(a))
  let del = [...new Set(dub)]
  
  return del.length === 1 ? del[0].toString() : null
}
*/