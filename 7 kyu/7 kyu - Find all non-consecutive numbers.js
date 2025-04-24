function allNonConsecutive (arr) {
    let array = [];
    for (let i=0; i<arr.length; i++){
      if (arr[i+1] != arr[i]+1){
        array.push({
          i: i+1, n: arr[i+1]
        })
      }
    }
      
    return array.slice(0,-1);
}

/*
function allNonConsecutive (arr) {
    let result = [];
    arr.forEach((val, index) => {
        if (val !== arr[index - 1] + 1 && index) {
            result.push({i: index, n: val});
        }
    });
    return result;
}
*/

/*
function allNonConsecutive (arr){
  var res = [];
  for(let i=1; i<arr.length; i++) {
    if(arr[i]-arr[i-1]!==1) res.push({i:i, n:arr[i]});
  }
  return res;
}
*/

/*
function allNonConsecutive (arr) {
  return arr.map((n, i) => ({ i, n })).filter((v, i, a) => (i !== 0 && a[i - 1].n != (v.n - 1)))
}
*/