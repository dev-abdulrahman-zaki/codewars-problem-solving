function max(...args){
if (!args.length){return 0};
if (args.length == 1 && args[0].length == 0){return 0};
let inputs = args.toString().split(",");
let nums = inputs.map(e => isNaN(e) ? NaN : Number(e));
if (nums.some(e => isNaN(e))) return NaN;
let maxNum = nums[0];
nums.forEach(n => {if(n>maxNum){ maxNum=n}});
return maxNum;
}


function min(...args){
    if (!args.length){return 0};
    if (args.length == 1 && args[0].length == 0){return 0};
    let inputs = args.toString().split(",");
    let nums = inputs.map(e => isNaN(e) ? NaN : Number(e));
    if (nums.some(e => isNaN(e))) return NaN;
    let minNum = nums[0];
    nums.forEach(n => {if(n<minNum){ minNum=n}});
    return minNum;
}