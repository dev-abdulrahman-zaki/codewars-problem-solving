function pipeFix(numbers) {
  let arr = Array(numbers[numbers.length - 1] - numbers[0] + 1).fill(
    numbers[0]
  );
  for (i = 1; i < arr.length; i++) {
    arr[i] = arr[i - 1] + 1;
  }
  return arr;
}

let x = pipeFix([1, 2, 3, 5, 6, 8, 9]); //,[1,2,3,4,5,6,7,8,9])
console.log(x);

/*
function pipeFix(numbers){
  var first = numbers[0];
  var last = numbers[numbers.length-1];
  
  var arr = [];
  for(var i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}
*/

/*
// slice is nice
function pipeFix(num, arr = [] ){
  for ( let i = num[0]; i <= num.slice(-1)[0]; i++){
    arr.push(i)
  }
  return arr
}
*/

/*
const pipeFix = (numbers) =>
  [...Array(numbers[numbers.length - 1] - numbers[0] + 1)].map((_, idx) => numbers[0] + idx);
*/

/*
// pop is hlop
const pipeFix = arr => Array(arr.pop() - arr[0] + 1).fill(0).map((e,i) => i + arr[0])
*/