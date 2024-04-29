function billboard(name, price = 30){
    return name.split("").map(e=> e=price).reduce((a,b)=>a+b)
}

let x = billboard("Idwal Augustin") //, 420
console.log(x);

/*
const billboard = (name, price = 30) => +(name.length / (1 / price))
*/

/*
const billboard = (name, price = 30) =>
  [...name].reduce(pre => pre + price, 0);
*/

/*
function billboard(name, price = 30){

var totalCost = 0;
for(i=0; i<name.length; i++){
    totalCost += price;
} 

return totalCost;

}
*/