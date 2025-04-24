function makeMeSlow() {
  const startTime = Date.now();
  let counter = 0;

  while (Date.now() - startTime < 7000) {
    for (let i = 0; i < 100000; i++) {
      counter += Math.sqrt(i);
    }
  }

  return counter;
}



// 
const makeMeSlow = () =>
  (start => {while (Date.now() - start < 7000);})(Date.now());