function minSum(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let sum = 0;
  let num1Index = sortedArr.length - 1;
  let num2Index = 0;
  const count = sortedArr.length / 2;
  while (num2Index < count) {
    sum += sortedArr[num1Index] * sortedArr[num2Index];
    num1Index--;
    num2Index++;
  }
  return sum;
}

// let x = minSum([5,4,2,3])//, 22);
let x = minSum([12, 6, 10, 26, 3, 24]); //, 342);
// let x = minSum([9,2,8,7,5,4,0,6])//, 74);
console.log(x);

// function minSum(arr) {
//     return arr.sort( (a,b) => a-b )
//               .slice(0, arr.length/2)
//               .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
//   }

// const minSum = arr =>
//     arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);

// function minSum(arr) {
//     var res=0;
//     arr = arr.sort((a,b)=>a-b);

//     while(arr.length){
//       res += arr.pop()*arr.shift();
//       }

//     return res
//   }
