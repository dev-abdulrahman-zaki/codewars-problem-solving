function century(year) {
    return Number.isInteger(year/100) ? (year/100) : Number.parseInt(year/100)+1;
}

// Solution (2):
/*
function century(year) {
  return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
}
*/