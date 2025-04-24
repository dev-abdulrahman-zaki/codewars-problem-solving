function cost(mins) { 
let extra;
if (mins <= 65){return 30;}
extra = (mins - 60); //213
// console.log(extra);
extraCounter = extra/30 //7.1;
// console.log(extraCounter);
return 30 + ((extra%30 > 5) ? 10*Math.ceil(extraCounter) : 10*Math.floor(extraCounter));
} 

console.log(cost(95));

/*
console.log(273%65);
console.log(273/65);
console.log(213%30); //3 < 5mins
console.log(42%30); //12 > 5mins
console.log(24%30); //24 > 5mins
*/


/*
if (mins <= 65){return 30}
1 ~ 65: 30$
Up to the 1st hour: $30
cost(45),30);
cost(63),30);
and if he has a lesson for 5 minutes, he will be charged $30 for the full hour.
If the lesson is up to the 1st hour or within the 5-minute grace period, the cost is $30.
A lesson of 65 minutes will cost $30 (within the 5-minute grace period).
*/


/*
If the lesson exceeds the 1st hour, subsequent charges are calculated in half-hour increments, and each half-hour costs $10.
Every subsequent half hour: $10
Subsequent charges are calculated by rounding up to the nearest half-hour.
For example, if student X has a lesson for 1hr 20 minutes, he will be charged $40 (30+10) for 1 hr 30 mins

A lesson of 75 minutes will cost $40 (1st hour + 30 minutes).
A lesson of 90 minutes will cost $40 (1st hour + 30 minutes) because of the 5-minute grace period.
cost(84),40);
cost(102),50);
cost(273),100);
*/

/*
Additionally, there is a 5-minute grace period.
if student X were to have a lesson for 65 minutes or 1 hr 35 mins, he will only have to pay for an hour or 1hr 30 minutes respectively.
*/


/*
84 / 65 = 1.29 = 1 + 0.29
84 % 65 = 0.29 * 65 = 18.85 which can be rounded to: 19
*/