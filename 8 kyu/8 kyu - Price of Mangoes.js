function mango(quantity, price) {
  return (quantity - Math.floor(quantity / 3)) * price;
}

// let x = mango(3, 3); //, 6)
let x = mango(9, 5); //, 30)
console.log(x);
