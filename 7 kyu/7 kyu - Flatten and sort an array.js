"use strict";

function flattenAndSort(array) {

  function getArrayDepth(arr) {
  return Array.isArray(arr) ? 
    1 + Math.max(0, ...arr.map(getArrayDepth)) :
    0;
}

function steamrollArray(arr) {
  let result = [].concat(...arr);
  while (getArrayDepth(result) !== 1){
    result = [].concat(...result)
  }
  return result;
}


  return steamrollArray(array).sort( (a,b) => a-b );
}