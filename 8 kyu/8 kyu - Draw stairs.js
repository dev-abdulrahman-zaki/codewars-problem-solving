function drawStairs(n) {
let result = "";
for (let i=1; i<n; i++){
    result += `I\n${" ".repeat(i)}`
}
return result+"I";
}


console.log(drawStairs(5)); // "I\n I\n  I\n   I\n    I"

/*
const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");
*/

/*
function drawStairs(n) {
  return Array(n).fill("I").map((e,i)=>e.padStart(i+1," ")).join("\n")
}
*/