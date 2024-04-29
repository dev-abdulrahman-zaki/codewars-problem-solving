function removeDuplication(arr){
    return arr.filter((e,i,arr) => arr.indexOf(e) == arr.lastIndexOf(e));
  }