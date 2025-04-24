function differenceOfSquares(n){
    let arr = Array(n).fill(0).map((_,i) => i+1);
    let sumSqu = arr.reduce((a,b) => a+b)**2;
    let sumOfSqu = arr.map(e => e**2).reduce((a,b) => a+b);
   return sumSqu - sumOfSqu;
   }