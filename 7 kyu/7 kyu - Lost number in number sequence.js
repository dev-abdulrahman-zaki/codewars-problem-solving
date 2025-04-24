function findDeletedNumber(arr, mixArr) {
    return arr.filter(e => !mixArr.includes(e))[0] || 0;
}

/*
function findDeletedNumber(arr, mixArr) {
  return arr.filter(v=>mixArr.indexOf(v)==-1)[0]||0
}
*/

/*
function findDeletedNumber(arr, mixArr) {
  let arrSum = arr.reduce((a,b) => a + b, 0)
  let mixArrSum = mixArr.reduce((a,b) => a + b, 0)
  return arrSum - mixArrSum
}
*/