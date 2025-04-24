function randomCase(x) {
    let randomIdx;
    let str = x.split(" ").map(word => {
        randomIdx =  Array(Math.floor(word.length/2)+1).fill(0).map(x => Math.floor(Math.random()*word.length));
        word = word.split("").map((c,i,arr) => randomIdx.includes(i) ? arr[i].toUpperCase() : c.toLowerCase())
        return word.join("");
    })
    return str.join(" ");
}



console.log(
    randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit")
);



/*
Another Solution:
function randomCase(x) {
  return x.split('')
          .map(e => Math.random() < 0.5 ? e.toUpperCase() : e.toLowerCase())
          .join('');
}
*/