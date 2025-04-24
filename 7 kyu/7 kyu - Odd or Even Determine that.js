function oddOrEven(n) {
    return n%2 === 1 ? EITHER : (n/2)%2 === 0 ? EVEN : ODD;
  }

  const ODD = "Odd";
  const EVEN = "Even";
  const EITHER = "Either";
  console.log(oddOrEven(1))
  console.log(oddOrEven(6))
  console.log(oddOrEven(8))