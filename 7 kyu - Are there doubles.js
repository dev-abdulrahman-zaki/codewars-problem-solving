function doubleCheck(str){
    let arr = str.toLowerCase().split("");
    for(let i=0; i<arr.length; i++){
        if (arr[i] == arr[i+1]){
            return true;
        }
    }
    return false;
    }

/*
const doubleCheck = (str) => /(.)\1/i.test(str);
*/
/*
function doubleCheck(str){
    let strArr = str.toLowerCase().split("");
    return strArr.some((c, i) => c === strArr[i + 1]);
}
*/
/*
const doubleCheck = str => /(\w)\1|(\W)\2/i.test(str)
*/
/*
const doubleCheck = str => /(.)(?=\1)/i.test(str);
*/