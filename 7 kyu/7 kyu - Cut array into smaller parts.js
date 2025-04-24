function makeParts(arr, size) {
    let arr2d = [];
    for (let i=0; i<arr.length; i+=size){
      let chunk = [];
      chunk = arr.slice(i, i+size);
      arr2d.push(chunk);
      chunk = [];
    }  
    return arr2d;
}
  
    
console.log(
    makeParts([1,2,3,4,5], 3)
);