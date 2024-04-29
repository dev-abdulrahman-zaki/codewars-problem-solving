var isSquare = function(arr){
    return arr.length ? arr.every(n => Math.sqrt(n) % 1 === 0) : undefined;
    }