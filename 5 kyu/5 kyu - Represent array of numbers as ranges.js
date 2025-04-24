// sorted order, and duplicates should be discarded
// empty arrays and empty strings should be considered

// Should return a string representing the ranges
function toRange(input) {
    if (!input.length) {return '';}
    let result = [];
    let arr = input.filter((e,i) => i == input.indexOf(e)).sort((a,b) => a-b);
    
    while (arr.length){
        let i = arr.findIndex((e,i,array) => e != array[i+1]-1);
        let arr_splice = arr.splice(0,i+1)
        arr_splice.length == 1 ? result.push(`${arr_splice[i]}`) : result.push(`${arr_splice[0]}_${arr_splice[i]}`)    
    }
    
    return result.join();
}
// toRange([3,4,5,6,9,11,13,14,15])
// // toRange([3,4,5,6,9,11,13,14,15])

// Steps
/*
function toRange(input) {
let result = [];
if (!input.length){return result;}
let arr = input.filter((e,i) => i == input.indexOf(e)).sort((a,b) => a-b);

console.log(arr);



let i = arr.findIndex((e,i,array) => e != array[i+1]-1)
console.log(i);
let arr_splice1 = arr.splice(0,i+1)
console.log(arr_splice1);
result.push(`${arr_splice1[0]}_${arr_splice1[i]}`)
console.log(result);

i = arr.findIndex((e,i,array) => e != array[i+1]-1)
console.log(i);
let arr_splice2 = arr.splice(0,i+1)
console.log(arr_splice2);
result.push(`${arr_splice2[i]}`)
console.log(result);

i = arr.findIndex((e,i,array) => e != array[i+1]-1)
console.log(i);
let arr_splice3 = arr.splice(0,i+1)
console.log(arr_splice3);

i = arr.findIndex((e,i,array) => e != array[i+1]-1)
console.log(i);
let arr_splice5 = arr.splice(0,i+1)
console.log(arr_splice5);

console.log(arr);
}
*/

// Should return an array
function toArray(input) {
if (!input) {return [];}
let result = [];
let ranges = input.split(",");

ranges.forEach(e => {
    if (e.includes("_")){
        let [min, max] = e.split("_");
        result.push(...Array(max-min+1).fill(Number(min)).map((e,i) => e = e+i))
    }
    else{
        result.push(Number(e))
    }
});
return result;
}

// toArray('3_6,9')
// [3,4,5,6,9]




/*
function toRange(arr) {
  arr=Array.from(new Set(arr)).sort((a,b)=>a-b)
  for(var i=0,r=[];i<arr.length;){
    var s=i
    while(i<arr.length&&arr[i]+1==arr[i+1]) i++
    r.push(i==s?arr[i++]:arr[s]+"_"+arr[i++])
  }
  return r.join(",")
}
function toArray(str) {
  for(var arr=str.split(","),i=0,r=[];str!=""&&i<arr.length;i++){
    var [a,b]=(arr[i]+"_"+arr[i]).split("_")
    for(var j=+a;j<=+b;j++) r.push(j)
  }
  return r
}
*/