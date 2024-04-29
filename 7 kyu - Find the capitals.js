var capitals = function (word) {
    let arr=[];
    word.split("").forEach((e,i) => {if (e==e.toUpperCase()) {arr.push(i)}})
    return arr;
};