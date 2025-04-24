function findAdded(st1, st2){
let added = "";
let arr1 = st1.split("");
let arr2 = st2.split("");

for (n of arr2){
    if (added.includes(n)){continue;}
    let arr1Count = arr1.filter(e => e==n).length;
    let arr2Count = arr2.filter(e => e==n).length;
    added += n.repeat(arr2Count-arr1Count);
}
return added.split("").sort().join("");
}
    


let x = findAdded('4455446', '447555446666'); // '56667'
console.log(x);

/*
function findAdded(st1, st2){
  return [...st1].reduce( (s,c) => s.replace(c,''), st2 ).split('').sort().join('')
}
*/

/*
function findAdded(st1, st2){
  
  for(var i = 0; i < st1.length; i++){
    st2 = st2.replace(st1[i], '');
  }
  
  return st2.split('').sort().join('');
}
*/

/*
const findAdded = (st1, st2) =>
  [...st1].reduce((acc, ch) => (acc.splice(acc.indexOf(ch), 1), acc), [...st2]).sort().join``;
  */

/*
const findAdded = (st1, st2) => {
  for (let item of st1) {
    if (st2.includes(item)) st2 = st2.replace(item, '')
  }

  return st2.split('').sort().join('')
}
*/

/*
function findAdded(st1, st2){
	a1 = st1.split("").sort();
  a2 = st2.split("").sort();
	
  for (i=0; i<a1.length; i++) {
    a2.splice(a2.indexOf(a1[i]), 1);
  }
	return a2.join("");
}
*/