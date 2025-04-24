function nextHappyYear(year) {
  year++;
  function isDistinct(number) {
    return (
      String(number)
        .split("")
        .filter((e, i, arr) => arr.indexOf(e) === i).length ===
      String(number).length
    );
  }
  while (!isDistinct(year)) {
    year++;
  }
  return year;
}

let x = nextHappyYear(1001); // ,1023);
// let x = nextHappyYear(1123)         // ,1203);
// let x = nextHappyYear(2001)         // ,2013);
// let x = nextHappyYear(2334)         // ,2340);
// let x = nextHappyYear(3331)         // ,3401);
// let x = nextHappyYear(1987); // ,2013);
// let x = nextHappyYear(5555)         // ,5601);
// let x = nextHappyYear(7712)         // ,7801);
// let x = nextHappyYear(8088)         // ,8091);
// let x = nextHappyYear(8999)         // ,9012);
console.log(x);

// 
function nextHappyYear(year){
  let newYear = year + 1
  let arr = newYear.toString().split('') 
  if(arr.join('') === Array.from(new Set(arr)).join('')) return newYear
  else return nextHappyYear(newYear)
}

// 
const nextHappyYear = year =>
  new Set(`${++year}`).size < 4 ? nextHappyYear(year) : year;