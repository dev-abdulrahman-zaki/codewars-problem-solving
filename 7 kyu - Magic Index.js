// return the magic index
function findMagic(arr){
    return arr.filter((e,i) => e == i)[0] || -1;
    }