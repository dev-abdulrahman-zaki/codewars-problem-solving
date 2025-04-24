function solve(arr){
    let array = [];
    let max, min;
    let loopI = arr.length;
    
      while (array.length < loopI){
        max = Math.max(...arr);
        min = Math.min(...arr);
        array.push(max);
        array.push(min);
        arr.splice(arr.indexOf(max), 1);
        arr.splice(arr.indexOf(min), 1);
      }
      
    return array.slice(0,loopI);
    };