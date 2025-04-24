function moveZeros(arr) {  
    let nums = [...arr];
      let nonZeroIdx = 0; // Index to track non-zero elements
      // Step(1): Move all non-zero elements to the front
      for (let i = 0; i < nums.length; i++) {
          if (nums[i] !== 0) {
              nums[nonZeroIdx] = nums[i];
              nonZeroIdx++;
          }
      }
      // Step(2): Fill the remaining positions with zeros
      while (nonZeroIdx < nums.length) {
          nums[nonZeroIdx] = 0;
          nonZeroIdx++;
      }
  return nums;
  }


// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
var moveZeros = function (arr) {
    for(var i = arr.length; i--;) {
      if(arr[i]===0) {
        arr.splice(i, 1);
        arr.push(0);
      }
    } return arr;
  }