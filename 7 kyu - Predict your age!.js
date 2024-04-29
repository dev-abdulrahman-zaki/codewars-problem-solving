function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
   return Number.parseInt(Math.sqrt([...arguments].map(e => e**2).reduce((a,b) => a+b))/2);
}



console.log(
    predictAge(65,60,75,55,60,63,64,45)
);
