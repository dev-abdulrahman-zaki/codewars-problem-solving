function adjacentElementsProduct(array) {
    let max = [];
    for (let i=0; i<array.length-1; i++){
      max.push(array[i] * array[i+1])
    }
    return Math.max(...max);
  }

  adjacentElementsProduct([1, 5, 10, 9])//, 90