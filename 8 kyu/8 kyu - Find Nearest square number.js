function nearestSq(n) {
let less;
let more;
for (let i=n; i>0; i--){
   if (Number.isInteger(Math.sqrt(i))){less = i; break;}
}
for (let i=n; i<n*n ; i++){
    if (Number.isInteger(Math.sqrt(i))){more = i; break;}
}
console.log(more, less);
if (less & more){return (more-n > n-less) ? less : more;}
else{
    return less || more;
}  
}

// let x = nearestSq(1)// 1 // , "nearestSq(1) = 1");
// let x = nearestSq(2)// 1 // , "nearestSq(2) = 1");
// let x = nearestSq(10)//  // 9, "nearestSq(10) = 9");
// let x = nearestSq(111)// //  121, "nearestSq(111) = 121");
let x = nearestSq(9999) // , 10000, "nearestSq(9999) = 10000");
console.log(x);

/*
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);
*/

/*
function nearestSq(n){
    return Math.round(n**0.5)**2
}
*/