function solution(...args){
return args.filter((e,i,arr) => arr.indexOf(e) != arr.lastIndexOf(e)).length ? true : false;
}

console.log(
    solution('a','b','c' , "a")
);