function isTriangle(a,b,c)
{
if ([a,b,c].some(e => a<=0)){return false;}
if (a+b>c && a+c>b && b+c>a){return true}
return false;
}

// All sides must have a positive length.
// The sum of the lengths of any two sides must be greater than the length of the third side

/*
var isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2
*/

/*
function isTriangle(a,b,c)
{
  [a, b, c] = [a, b, c].sort((x, y) => x-y);
  
  return a+b > c;
}
*/

/*
function isTriangle(a,b,c) {
  var sides = [a, b, c].sort();
  return (sides[0] + sides[1] > sides[2]);
}
*/